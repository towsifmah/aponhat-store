// api/auth.js - Vercel Serverless Function for Authentication & Password Meter
import { getStore, saveStore } from './_data.js';

function validateStrongPassword(password) {
  if (password.length < 8) return 'পাসওয়ার্ডটি কমপক্ষে ৮ অক্ষরের হতে হবে।';
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

  const store = getStore();
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

    const phone = input.phone.trim();
    if (store.users.some(u => u.phone === phone)) {
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

    const id = input.identifier.trim();
    const user = store.users.find(u => u.phone === id || (u.email && u.email === id));

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
}
