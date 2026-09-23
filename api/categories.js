// api/categories.js - Vercel Serverless Function for Categories
import { getStore } from './_data.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();
  const categories = store.categories.map(cat => {
    const actualCount = store.products.filter(p => String(p.category_id) === String(cat.id)).length;
    return {
      ...cat,
      actual_products_count: actualCount || cat.product_count
    };
  });

  return res.status(200).json({
    status: 'success',
    count: categories.length,
    data: categories
  });
}
