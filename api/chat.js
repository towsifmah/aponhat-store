// api/chat.js - Vercel Serverless Function for Priya Live Chatbot & Admin Chat Manager
import fs from 'fs';
import path from 'path';
import { getStore } from './_data.js';
import { smartSearchProducts } from './_searchHelper.js';

const CHAT_FILE = path.join('/tmp', 'aponhat_chats.json');

let chatState = null;

function loadChats() {
  if (chatState) return chatState;
  try {
    if (fs.existsSync(CHAT_FILE)) {
      chatState = JSON.parse(fs.readFileSync(CHAT_FILE, 'utf-8'));
      return chatState;
    }
  } catch {
    // ignore
  }

  chatState = {
    auto_priya_mode: true,
    sessions: {}
  };
  return chatState;
}

function saveChats(state) {
  chatState = state;
  try {
    fs.writeFileSync(CHAT_FILE, JSON.stringify(state, null, 2), 'utf-8');
  } catch {
    // ignore
  }
}

// Priya's intelligent natural language response generator
function generatePriyaResponse(userMessage, store) {
  const q = userMessage.toLowerCase().trim();
  const products = store.products || [];

  // 1. Delivery inquiries
  if (q.includes('ডেলিভারি') || q.includes('চার্জ') || q.includes('শিপিং') || q.includes('কবে পাব') || q.includes('কত দিন')) {
    return {
      text: "আমাদের ডেলিভারি পলিসি:\n🚚 **ঢাকা সিটির ভেতরে**: ডেলিভারি চার্জ মাত্র ৬০ টাকা (২-৩ কার্যদিবস)।\n🚚 **ঢাকার বাইরে সারাদেশে**: ডেলিভারি চার্জ ১২০ টাকা (৩-৪ কার্যদিবস)।\n🎉 **বিশেষ অফার**: যেকোনো ১৫০০ টাকা বা তার বেশি অর্ডারে হোম ডেলিভারি সম্পূর্ণ ফ্রি!\n\nআপনার কি কোনো নির্দিষ্ট পণ্য পছন্দ হয়েছে? আমি অর্ডার করতে সাহায্য করতে পারি।",
      suggested_products: []
    };
  }

  // 2. Payment inquiries
  if (q.includes('পেমেন্ট') || q.includes('টাকা') || q.includes('বিকাশ') || q.includes('নগদ') || q.includes('ক্যাশ অন ডেলিভারি') || q.includes('cod')) {
    return {
      text: "আপনহাটে পেমেন্ট করা একদম সহজ ও নিরাপদ:\n১. **ক্যাশ অন ডেলিভারি (COD)**: পণ্য হাতে পেয়ে দেখে টাকা দিন।\n২. **বিকাশ পেমেন্ট**: ০১৬১৭৯৭১৬৪৪\n৩. **নগদ পেমেন্ট**: ০১৩০৯৯৯৩৪৭০\n\nআপনি অর্ডার ফর্ম পূরণ করে পছন্দের পেমেন্ট অপশনটি সিলেক্ট করলেই সাথে সাথে অর্ডার কনফার্ম হয়ে যাবে।",
      suggested_products: []
    };
  }

  // 3. Return / Guarantee inquiries
  if (q.includes('রিটার্ন') || q.includes('গ্যারান্টি') || q.includes('পরিবর্তন') || q.includes('আসল') || q.includes('ওয়ারেন্টি')) {
    return {
      text: "আপনহাটের প্রতিটি পণ্য ১০০% অরিজিনাল কোয়ালিটি চেক করা।\n🛡️ **৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ**: সাইজ বা পণ্যে কোনো সমস্যা হলে ডেলিভারিম্যান থাকা অবস্থাতেই চেক করে পরিবর্তন বা ফেরত দিতে পারবেন।\n📞 যেকোনো প্রয়োজনে আমাদের হেল্পলাইন: ০১৬১৭৯৭১৬৪৪",
      suggested_products: []
    };
  }

  // 4. Greetings
  if (q.includes('হ্যালো') || q.includes('হাই') || q.includes('সালাম') || q.includes('hello') || q.includes('hi') || q === 'প্রিয়া' || q === 'priya') {
    return {
      text: "আসসালামু আলাইকুম! আমি প্রিয়া, আপনহাটে আপনাকে স্বাগতম। 😊\n\nআজ আপনাকে কীভাবে সাহায্য করতে পারি? আমাদের নতুন শার্ট কালেকশন, স্মার্ট ওয়াচ, থ্রি-পিস বা আকর্ষণীয় কোনো পণ্য দেখতে চান?",
      suggested_products: products.slice(0, 2)
    };
  }

  // 5. Product specific search
  let matched = [];
  if (q.includes('শার্ট') || q.includes('shirt') || q.includes('ফরমাল') || q.includes('কটন')) {
    matched = products.filter(p => p.title.toLowerCase().includes('shirt') || p.subcategory?.includes('শার্ট')).slice(0, 3);
    return {
      text: "আমাদের কাছে প্রিমিয়াম ১০০% অক্সফোর্ড কটন ফরমাল শার্ট কালেকশন রয়েছে। স্লিম ফিট কাটিং ও আরামদায়ক ফেব্রিক। সাইজ: M, L, XL, XXL পাওয়া যাচ্ছে। এক নজরে দেখে নিন:",
      suggested_products: matched
    };
  }

  if (q.includes('ঘড়ি') || q.includes('ঘড়ি') || q.includes('watch') || q.includes('স্মার্ট ওয়াচ')) {
    matched = products.filter(p => p.title.toLowerCase().includes('watch') || p.subcategory?.includes('স্মার্ট')).slice(0, 2);
    return {
      text: "আমাদের আল্ট্রা স্মার্ট ওয়াচে রয়েছে ব্লুটুথ কলিং, হার্ট রেট ও স্লিপ মনিটরিং এবং মেটালিক বডি। নিচে বিস্তারিত দেখে নিন:",
      suggested_products: matched
    };
  }

  if (q.includes('ইয়ারবাডস') || q.includes('earbuds') || q.includes('হেডফোন') || q.includes('ব্লুটুথ')) {
    matched = products.filter(p => p.title.toLowerCase().includes('earbuds') || p.subcategory?.includes('ইয়ারবাডস')).slice(0, 2);
    return {
      text: "আমাদের ডিজিটাল এলইডি ডিসপ্লে সহ ওয়্যারলেস ব্লুটুথ ইয়ারবাডসে পাবেন ডিপ বাস ও ৬ ঘণ্টার দুর্দান্ত ব্যাটারি ব্যাকআপ।",
      suggested_products: matched
    };
  }

  if (q.includes('শাড়ি') || q.includes('শাড়ি') || q.includes('saree') || q.includes('থ্রি পিস') || q.includes('লেডিস') || q.includes('জর্জেট')) {
    matched = products.filter(p => String(p.category_id) === '2').slice(0, 3);
    return {
      text: "লেডিস ফ্যাশনের জন্য এক্সক্লুসিভ জর্জেট এমব্রয়ডারি থ্রি-পিস এবং সফট সিল্কের ফ্লোরাল পার্টি শাড়ি কালেকশন রয়েছে। এগুলো দেখতে পারেন:",
      suggested_products: matched
    };
  }

  if (q.includes('ব্যাগ') || q.includes('bag') || q.includes('ব্যাকপ্যাক') || q.includes('হ্যান্ডব্যাগ')) {
    matched = products.filter(p => String(p.category_id) === '11').slice(0, 2);
    return {
      text: "ওয়াটারপ্রুফ ল্যাপটপ ব্যাকপ্যাক এবং পিইউ লেদার লাক্সারি লেডিস হ্যান্ডব্যাগ এখন বিশেষ ছাড়ে পাওয়া যাচ্ছে:",
      suggested_products: matched
    };
  }

  // 6. Intelligent bilingual search across all 524 products from Greenish Trade
  const keywordMatches = smartSearchProducts(products, q).slice(0, 3);

  if (keywordMatches.length > 0) {
    return {
      text: `আপনার খোঁজার সাথে মিলিয়ে সেরা এই পণ্যগুলো পেয়েছি:`,
      suggested_products: keywordMatches
    };
  }

  // Default friendly fallback
  return {
    text: "ধন্যবাদ আপনার বার্তার জন্য! আপনহাটে শার্ট, ঘড়ি, গ্যাজেটস, লেডিস ফ্যাশন ও হোম ডেকরের সেরা কালেকশন রয়েছে।\n\nআপনি নির্দিষ্ট কোনো পণ্য খুঁজছেন কি? অথবা সাইজ, ডেলিভারি বা পেমেন্ট নিয়ে কিছু জানতে চাইলে আমাকে বলুন, আমি বুঝিয়ে বলছি।",
    suggested_products: products.slice(0, 2)
  };
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();
  const chats = loadChats();

  // 1. GET Requests
  if (req.method === 'GET') {
    const { session_id, admin } = req.query;

    // Admin view: list all sessions with summary
    if (admin) {
      const sessionList = Object.keys(chats.sessions).map(id => {
        const sess = chats.sessions[id];
        const lastMsg = sess.messages[sess.messages.length - 1];
        return {
          session_id: id,
          customer_name: sess.customer_name || 'গ্রাহক',
          customer_phone: sess.customer_phone || '',
          unread_count: sess.messages.filter(m => m.sender === 'customer' && !m.read_by_admin).length,
          last_message: lastMsg ? lastMsg.text : '',
          last_timestamp: lastMsg ? lastMsg.timestamp : sess.created_at,
          message_count: sess.messages.length
        };
      }).sort((a, b) => new Date(b.last_timestamp) - new Date(a.last_timestamp));

      return res.status(200).json({
        status: 'success',
        auto_priya_mode: chats.auto_priya_mode,
        sessions: sessionList
      });
    }

    // Customer view: get single session
    if (session_id) {
      const session = chats.sessions[session_id] || {
        session_id,
        messages: [
          {
            id: 'init-1',
            sender: 'priya',
            sender_name: 'প্রিয়া (আপনার শপিং সহকারী)',
            text: 'আসসালামু আলাইকুম! আমি প্রিয়া, আপনহাটের শপিং সহকারী। আজ আপনাকে কীভাবে সহায়তা করতে পারি? কোনো পণ্যের সাইজ, দাম বা ডেলিভারি নিয়ে যেকোনো প্রশ্ন করতে পারেন। 😊',
            timestamp: new Date().toISOString()
          }
        ]
      };
      return res.status(200).json({ status: 'success', session });
    }

    return res.status(400).json({ status: 'error', message: 'Missing session_id or admin flag' });
  }

  // 2. POST Requests
  if (req.method === 'POST') {
    const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    // Action: toggle auto priya mode
    if (input.action === 'toggle_mode') {
      chats.auto_priya_mode = !chats.auto_priya_mode;
      saveChats(chats);
      return res.status(200).json({
        status: 'success',
        auto_priya_mode: chats.auto_priya_mode,
        message: `প্রিয়া অটো-মোড ${chats.auto_priya_mode ? 'চালু' : 'বন্ধ'} করা হয়েছে`
      });
    }

    const { session_id, sender, text, customer_name, customer_phone } = input;

    if (!session_id || !text) {
      return res.status(400).json({ status: 'error', message: 'session_id and text required' });
    }

    // Initialize session if not exists
    if (!chats.sessions[session_id]) {
      chats.sessions[session_id] = {
        session_id,
        customer_name: customer_name || 'গ্রাহক',
        customer_phone: customer_phone || '',
        created_at: new Date().toISOString(),
        messages: [
          {
            id: 'init-1',
            sender: 'priya',
            sender_name: 'প্রিয়া (আপনার শপিং সহকারী)',
            text: 'আসসালামু আলাইকুম! আমি প্রিয়া, আপনহাটের শপিং সহকারী। আজ আপনাকে কীভাবে সহায়তা করতে পারি? 😊',
            timestamp: new Date().toISOString()
          }
        ]
      };
    }

    const session = chats.sessions[session_id];
    if (customer_name) session.customer_name = customer_name;
    if (customer_phone) session.customer_phone = customer_phone;

    // If Admin sends message
    if (sender === 'admin') {
      const adminMsg = {
        id: 'msg-' + Date.now(),
        sender: 'admin',
        sender_name: 'আপনহাট সাপোর্ট টিম (ম্যানেজার)',
        text: text.trim(),
        timestamp: new Date().toISOString()
      };
      session.messages.push(adminMsg);
      saveChats(chats);
      return res.status(200).json({ status: 'success', message: adminMsg, session });
    }

    // Customer sends message
    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'customer',
      sender_name: session.customer_name,
      text: text.trim(),
      read_by_admin: false,
      timestamp: new Date().toISOString()
    };
    session.messages.push(userMsg);

    // If auto_priya_mode is ON, Priya automatically replies!
    let priyaMsg = null;
    if (chats.auto_priya_mode) {
      const priyaResult = generatePriyaResponse(text, store);
      priyaMsg = {
        id: 'priya-' + Date.now(),
        sender: 'priya',
        sender_name: 'প্রিয়া (আপনার শপিং সহকারী)',
        text: priyaResult.text,
        suggested_products: priyaResult.suggested_products,
        timestamp: new Date(Date.now() + 500).toISOString()
      };
      session.messages.push(priyaMsg);
    }

    saveChats(chats);

    return res.status(200).json({
      status: 'success',
      user_message: userMsg,
      reply_message: priyaMsg,
      session
    });
  }

  return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
}
