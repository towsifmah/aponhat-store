// api/sync.js - Vercel Serverless Function for Live Greenish Trade Sync
import { getStore, saveStore } from './_data.js';

async function fetchGreenishCategory(cid, sid, catName, subName) {
  const url = `https://greenishtradeltd.com/products/catalog?categoryId=${cid}${sid ? `&subCategoryId=${sid}` : ''}`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      signal: AbortSignal.timeout(4500)
    });
    if (!res.ok) return [];
    const html = await res.text();
    const cardRegex = /<a[^>]+href="\/products\/([0-9]+)"[^>]*>([\s\S]*?)<\/a>/g;
    const cards = [];
    let match;
    while ((match = cardRegex.exec(html)) !== null) {
      const pid = match[1];
      const cardHtml = match[2];

      const titleMatch = cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/) || cardHtml.match(/alt="([^"]+)"/);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Greenish Product';

      const priceMatch = cardHtml.match(/BDT\s*([0-9,.]+)/i);
      const resellerPrice = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : 400;

      const stockMatch = cardHtml.match(/স্টক\s*(?:<!-- -->)?:\s*(?:<!-- -->)?\s*([0-9]+)/);
      const stock = stockMatch ? parseInt(stockMatch[1], 10) : 30;

      let imageUrl = '';
      const imgMatch = cardHtml.match(/url=([^&"']+)/);
      if (imgMatch) {
        imageUrl = decodeURIComponent(imgMatch[1]);
      } else {
        const directImgMatch = cardHtml.match(/src="([^"]+)"/);
        if (directImgMatch) imageUrl = directImgMatch[1];
      }

      if (imageUrl && imageUrl.startsWith('http://147.93.97.56:9000')) {
        imageUrl = `/api/proxy-image?url=${encodeURIComponent(imageUrl)}`;
      }

      cards.push({
        id: String(pid),
        title,
        category_id: String(cid),
        category_name: catName,
        subcategory: subName || catName,
        reseller_price: Math.round(resellerPrice),
        retail_price: Math.round(resellerPrice * 1.35),
        regular_price: Math.round(resellerPrice * 1.6),
        stock: stock || 25,
        image: imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
        images: [imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'],
        sizes: ['Standard'],
        sku: `GRN-${cid}-${pid.slice(-4)}`,
        source_url: `https://greenishtradeltd.com/products/${pid}`,
        description: `${title} - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ${catName}\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি`,
        is_active: 1
      });
    }
    return cards;
  } catch (err) {
    return [];
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = getStore();
  const existingIds = new Set(store.products.map(p => String(p.id)));

  // Target key categories for live sync
  const syncTargets = [
    { cid: '1', sid: '1', catName: 'জেন্টস ফ্যাশন', subName: 'শার্ট' },
    { cid: '2', sid: '2', catName: 'লেডিস ফ্যাশন', subName: 'থ্রি-পিস' },
    { cid: '3', sid: '3', catName: 'বেবি ফ্যাশন', subName: 'বেবি ড্রেস' },
    { cid: '8', sid: '8', catName: 'ইলেকট্রনিকস এন্ড গ্যাজেটস', subName: 'স্মার্ট গ্যাজেট' }
  ];

  let newProductsAdded = 0;
  const newItems = [];

  for (const t of syncTargets) {
    const fetched = await fetchGreenishCategory(t.cid, t.sid, t.catName, t.subName);
    for (const p of fetched) {
      if (!existingIds.has(p.id)) {
        existingIds.add(p.id);
        store.products.unshift(p);
        newItems.push(p);
        newProductsAdded++;
      }
    }
  }

  const lastSync = new Date().toISOString();
  store.settings.last_sync = lastSync;
  saveStore(store);

  return res.status(200).json({
    status: 'success',
    message: newProductsAdded > 0 
      ? `Greenish Trade থেকে ${newProductsAdded}টি নতুন পণ্য সফলভাবে সিঙ্ক করা হয়েছে!` 
      : 'Greenish Trade ক্যাটালগ সম্পূর্ণ আপ-টু-ডেট আছে।',
    synced_count: store.products.length,
    new_products_count: newProductsAdded,
    new_products: newItems.slice(0, 5),
    last_sync: lastSync
  });
}
