// api/settings.js - Vercel Serverless Function for Settings
import { getStore, saveStore } from './_data.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();

  if (req.method === 'POST') {
    const input = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    if (input && typeof input === 'object') {
      Object.assign(store.settings, input);
      saveStore(store);
      return res.status(200).json({ status: 'success', message: 'Settings saved successfully' });
    }
  }

  return res.status(200).json({
    status: 'success',
    data: store.settings
  });
}
