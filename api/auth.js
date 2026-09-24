// api/auth.js - Vercel Serverless Function for Authentication & Password Meter
import { getStore, saveStore, initialUsers } from './_data.js';

function normalizePhone(str) {
  if (!str) return '';
  const bnToEn = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  let cleaned = String(str).replace(/[০-৯]/g, d => bnToEn[d]).replace(/[\s\-\(\)\+]/g, '').trim();
  if (cleaned.startsWith('880')) {
    cleaned = cleaned.substring(2);
  }
  return cleaned;
}

function validateStrongPassword(password) {
  if (!password || password.length < 8) return 'পাসওয়ার্ডটি কমপক্ষে ৮ অক্ষরের হতে হবে।';
  if (!/[A-Z]/.test(password)) return 'পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর (Uppercase letter) থাকতে হবে।';
  if (!/[a-z]/.test(password)) return 'পাসওয়ার্ডে অন্তত একটি ছোট হাতের অক্ষর (Lowercase letter) থাকতে হবে।';
  if (!/[0-9]/.test(password)) return 'পাসওয়ার্ডে অন্তত একটি সংখ্যা (Number) থাকতে হবে।';
  if (!/[\W_]/.test(password)) return 'পাসওয়ার্ডে অন্তত একটি বিশেষ চিহ্ন (Special character যেমন: @, #, $, !) থাকতে হবে।';
  return true;
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const store = getStore();
    if (!store.users || !Array.isArray(store.users)) {
      store.users = [...initialUsers];
    }
    if (!store.users.some(u => normalizePhone(u.phone) === '01617971644')) {
      store.users.push(initialUsers[0]);
    }

    const action = req.query.action || 'login';

    // 1. REGISTER
    if (action === 'register' && req.method === 'POST') {
      const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

      if (!input.name || !input.phone || !input.password) {
        return res.status(400).json({ status: 'error', message: 'নাম, মোবাইল নম্বর এবং পাসওয়ার্ড আবশ্যক।' });
      }

      const passCheck = validateStrongPassword(input.password);
      if (passCheck !== true) {
        return res.status(400).json({ status: 'error', message: passCheck });
      }

      const phone = normalizePhone(input.phone);
      if (store.users.some(u => normalizePhone(u.phone) === phone)) {
        return res.status(409).json({ status: 'error', message: 'এই মোবাইল নম্বর দিয়ে ইতিমধ্যে একাউন্ট রয়েছে। দয়া করে লগইন করুন।' });
      }

      const newUser = {
        id: store.users.length + 1,
        name: input.name.trim(),
        phone: phone,
        email: input.email ? input.email.trim() : null,
        password: input.password,
        role: 'customer'
      };

      store.users.push(newUser);
      saveStore(store);

      const token = Buffer.from(`${newUser.id}:${newUser.phone}:${Date.now()}`).toString('base64');

      return res.status(201).json({
        status: 'success',
        message: 'একাউন্ট সফলভাবে তৈরি হয়েছে!',
        user: {
          id: newUser.id,
          name: newUser.name,
          phone: newUser.phone,
          email: newUser.email,
          role: newUser.role
        },
        token
      });
    }

    // 2. LOGIN
    if (action === 'login' && req.method === 'POST') {
      const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

      if (!input.identifier || !input.password) {
        return res.status(400).json({ status: 'error', message: 'মোবাইল নম্বর এবং পাসওয়ার্ড প্রদান করুন।' });
      }

      const rawId = input.identifier.trim();
      const normId = normalizePhone(rawId);

      // Hardcoded store owner admin fallback guarantee
      if ((normId === '01617971644' || rawId.toLowerCase() === 'admin@aponhat.com') && input.password === 'Admin@AponHat2026!') {
        const adminUser = store.users.find(u => u.role === 'admin') || initialUsers[0];
        const token = Buffer.from(`${adminUser.id}:${adminUser.phone}:${Date.now()}`).toString('base64');
        return res.status(200).json({
          status: 'success',
          message: 'অ্যাডমিন হিসেবে সফলভাবে লগইন হয়েছে!',
          user: {
            id: adminUser.id,
            name: adminUser.name,
            phone: adminUser.phone,
            email: adminUser.email,
            role: 'admin'
          },
          token
        });
      }

      // Check general user store
      const user = store.users.find(u => {
        const uPhone = normalizePhone(u.phone);
        const uEmail = (u.email || '').toLowerCase().trim();
        return (normId && uPhone === normId) || (uEmail && uEmail === rawId.toLowerCase());
      });

      if (!user || user.password !== input.password) {
        return res.status(401).json({ status: 'error', message: 'মোবাইল নম্বর অথবা পাসওয়ার্ড ভুল হয়েছে।' });
      }

      const token = Buffer.from(`${user.id}:${user.phone}:${Date.now()}`).toString('base64');

      return res.status(200).json({
        status: 'success',
        message: 'সফলভাবে লগইন হয়েছে!',
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          role: user.role
        },
        token
      });
    }

    // 3. ME
    if (action === 'me') {
      const authHeader = req.headers['authorization'] || '';
      if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7);
        try {
          const decoded = Buffer.from(token, 'base64').toString('utf-8');
          const [userId] = decoded.split(':');
          const user = store.users.find(u => u.id === parseInt(userId));
          if (user) {
            return res.status(200).json({
              status: 'success',
              user: { id: user.id, name: user.name, phone: user.phone, email: user.email, role: user.role }
            });
          }
        } catch {
          // ignore
        }
      }
      return res.status(401).json({ status: 'error', message: 'অননুমোদিত অ্যাক্সেস' });
    }

    return res.status(400).json({ status: 'error', message: 'Invalid action' });
  } catch (err) {
    console.error('Auth handler error:', err);
    return res.status(500).json({ status: 'error', message: 'সার্ভার প্রক্রিয়াকরণে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।' });
  }
}
