// api/products.js - Vercel Serverless Function for Products
import { getStore, saveStore } from './_data.js';
import { smartSearchProducts } from './_searchHelper.js';

export default async function handler(req, res) {
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
  const { id, slug, category_id, search, limit } = req.query;

  const itemQuery = (id || slug || '').trim().toLowerCase();
  if (itemQuery) {
    const cleanId = itemQuery.match(/^(\d{6,})/) ? itemQuery.match(/^(\d{6,})/)[1] : null;
    let product = store.products.find(p => {
      if (cleanId && String(p.id) === cleanId) return true;
      if (String(p.id).toLowerCase() === itemQuery) return true;
      if (p.slug && p.slug.toLowerCase() === itemQuery) return true;
      const pSlug = String(p.title || '').toLowerCase().trim().replace(/[^\w\s\u0980-\u09FF-]/g, '').replace(/[\s_-]+/g, '-').slice(0, 65);
      return pSlug === itemQuery;
    });

    // Auto-fetch if this is a new product uploaded on Greenish Trade
    if (!product && cleanId) {
      try {
        const liveRes = await fetch(`https://greenishtradeltd.com/products/${cleanId}`, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          signal: AbortSignal.timeout(3500)
        });
        if (liveRes.ok) {
          const html = await liveRes.text();
          const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
          const priceMatch = html.match(/BDT\s*([0-9,.]+)/i);
          if (titleMatch) {
            const rawTitle = titleMatch[1].replace(/<[^>]+>/g, '').trim();
            const resPrice = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : 500;
            product = {
              id: cleanId,
              title: rawTitle,
              category_id: '1',
              category_name: 'জেন্টস ফ্যাশন',
              reseller_price: Math.round(resPrice),
              retail_price: Math.round(resPrice * 1.35),
              regular_price: Math.round(resPrice * 1.6),
              stock: 30,
              image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
              images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'],
              sizes: ['Standard'],
              is_active: 1
            };
            store.products.unshift(product);
            saveStore(store);
          }
        }
      } catch (e) {}
    }

    if (product) {
      return res.status(200).json({ status: 'success', data: product });
    } else {
      return res.status(404).json({ status: 'error', message: 'পণ্যটি পাওয়া যায়নি' });
    }
  }

  let results = store.products.filter(p => p.is_active !== 0);

  if (search) {
    results = smartSearchProducts(results, search);
  }

  if (category_id && category_id !== 'all') {
    const catFiltered = results.filter(p => String(p.category_id) === String(category_id));
    // If search had results outside this category, don't zero it out
    if (catFiltered.length > 0 || !search) {
      results = catFiltered;
    }
  }

  const max = limit ? parseInt(limit) : 1000;
  results = results.slice(0, max);

  return res.status(200).json({
    status: 'success',
    count: results.length,
    data: results
  });
}
