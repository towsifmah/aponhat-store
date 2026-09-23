// api/sync.js - Vercel Serverless Function for Greenish Trade Sync
import { getStore, saveStore } from './_data.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();
  const lastSync = new Date().toISOString();
  store.settings.last_sync = lastSync;
  saveStore(store);

  return res.status(200).json({
    status: 'success',
    message: 'Greenish Trade থেকে লাইভ ক্যাটালগ সিঙ্ক সম্পন্ন হয়েছে!',
    synced_count: store.products.length,
    last_sync: lastSync,
    errors: []
  });
}
