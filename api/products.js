// api/products.js - Vercel Serverless Function for Products
import { getStore, saveStore } from './_data.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();

  // 1. PUT or POST ?update - Update price, stock, or bulk markup
  if (req.method === 'PUT' || (req.method === 'POST' && req.query.update)) {
    const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    // Bulk markup
    if (input.bulk_markup_percent) {
      const percent = parseFloat(input.bulk_markup_percent);
      store.products.forEach(p => {
        p.retail_price = Math.round(p.reseller_price * (1 + (percent / 100)));
      });
      store.settings.default_markup_percent = String(percent);
      saveStore(store);

      return res.status(200).json({
        status: 'success',
        message: `সকল পণ্যের মূল্য ${percent}% প্রফিট মার্জিনে আপডেট করা হয়েছে!`,
        bulk_markup_percent: percent
      });
    }

    // Single product update
    if (input.id) {
      const pIndex = store.products.findIndex(p => String(p.id) === String(input.id));
      if (pIndex === -1) {
        return res.status(404).json({ status: 'error', message: 'পণ্যটি পাওয়া যায়নি' });
      }

      if (input.retail_price !== undefined) {
        store.products[pIndex].retail_price = parseFloat(input.retail_price);
      }
      if (input.stock !== undefined) {
        store.products[pIndex].stock = parseInt(input.stock);
      }
      if (input.title) {
        store.products[pIndex].title = input.title;
      }
      saveStore(store);

      return res.status(200).json({
        status: 'success',
        message: 'পণ্যের মূল্য ও তথ্য সফলভাবে আপডেট হয়েছে!',
        data: store.products[pIndex]
      });
    }

    return res.status(400).json({ status: 'error', message: 'প্রোডাক্ট আইডি আবশ্যক।' });
  }

  // 2. GET - Single product or filtered list
  const { id, category_id, search, limit } = req.query;

  if (id) {
    const product = store.products.find(p => String(p.id) === String(id));
    if (product) {
      return res.status(200).json({ status: 'success', data: product });
    } else {
      return res.status(404).json({ status: 'error', message: 'পণ্যটি পাওয়া যায়নি' });
    }
  }

  let results = store.products.filter(p => p.is_active !== 0);

  if (category_id && category_id !== 'all') {
    results = results.filter(p => String(p.category_id) === String(category_id));
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      String(p.id).includes(q)
    );
  }

  const max = limit ? parseInt(limit) : 1000;
  results = results.slice(0, max);

  return res.status(200).json({
    status: 'success',
    count: results.length,
    data: results
  });
}
