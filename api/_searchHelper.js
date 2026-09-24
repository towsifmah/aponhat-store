// api/_searchHelper.js - Bilingual Bangla & English Smart Search Helper

export const BILINGUAL_SYNONYMS = {
  // Gents Fashion
  'শার্ট': ['shirt', 'formal shirt', 'casual shirt', 'oxford', 'cotton shirt', 'শার্ট'],
  'shirt': ['শার্ট', 'shirt', 'formal', 'casual', 'oxford', 'cotton'],
  'টি-শার্ট': ['t-shirt', 'tshirt', 'tee', 'polo', 'ড্রপশোল্ডার', 'গেঞ্জি', 'টি শার্ট', 'টি-শার্ট'],
  'টি শার্ট': ['t-shirt', 'tshirt', 'tee', 'polo', 'ড্রপশোল্ডার', 'গেঞ্জি', 'টি শার্ট', 'টি-শার্ট'],
  't-shirt': ['টি-শার্ট', 'টি শার্ট', 't-shirt', 'tshirt', 'tee', 'polo', 'গেঞ্জি'],
  'tshirt': ['টি-শার্ট', 'টি শার্ট', 't-shirt', 'tshirt', 'tee', 'polo'],
  'পোলো': ['polo', 'polo t-shirt', 'পোলো', 'টি-শার্ট'],
  'পাঞ্জাবি': ['panjabi', 'punjabi', 'পাঞ্জাবি', 'পাঞ্জাবী', 'পায়জামা', 'কুর্তা'],
  'পাঞ্জাবী': ['panjabi', 'punjabi', 'পাঞ্জাবি', 'পাঞ্জাবী', 'পায়জামা'],
  'panjabi': ['পাঞ্জাবি', 'পাঞ্জাবী', 'panjabi', 'punjabi'],
  'punjabi': ['পাঞ্জাবি', 'পাঞ্জাবী', 'panjabi', 'punjabi'],
  'প্যান্ট': ['pant', 'pants', 'trouser', 'trousers', 'jeans', 'gabardine', 'প্যান্ট', 'ট্রাউজার', 'জিন্স'],
  'ট্রাউজার': ['trouser', 'trousers', 'pant', 'ট্রাউজার', 'প্যান্ট'],
  'pant': ['প্যান্ট', 'pant', 'trouser', 'jeans', 'gabardine'],
  'জিন্স': ['jeans', 'denim', 'জিন্স', 'প্যান্ট'],
  'jeans': ['জিন্স', 'jeans', 'denim', 'pant'],

  // Watches & Smart Devices
  'ঘড়ি': ['watch', 'smartwatch', 'smart watch', 'wrist watch', 'ঘড়ি', 'ঘড়ি', 'ওয়াচ', 'ঘড়ী'],
  'ঘড়ি': ['watch', 'smartwatch', 'smart watch', 'wrist watch', 'ঘড়ি', 'ঘড়ি', 'ওয়াচ', 'ঘড়ী'],
  'watch': ['ঘড়ি', 'ঘড়ি', 'watch', 'smartwatch', 'ultra', 'হ্যান্ড ওয়াচ'],
  'স্মার্ট ওয়াচ': ['smartwatch', 'smart watch', 'watch', 'ultra', 'স্মার্ট ওয়াচ', 'স্মার্ট ওয়াচ', 'ঘড়ি', 'ঘড়ি'],
  'স্মার্ট ওয়াচ': ['smartwatch', 'smart watch', 'watch', 'ultra', 'স্মার্ট ওয়াচ', 'স্মার্ট ওয়াচ', 'ঘড়ি', 'ঘড়ি'],
  'smartwatch': ['স্মার্ট ওয়াচ', 'স্মার্ট ওয়াচ', 'ঘড়ি', 'ঘড়ি', 'watch'],

  // Audio & Earbuds
  'ইয়ারবাডস': ['earbuds', 'headphone', 'earphone', 'bluetooth', 'wireless', 'tws', 'airpods', 'ইয়ারবাডস', 'ইয়ারবাডস'],
  'ইয়ারবাডস': ['earbuds', 'headphone', 'earphone', 'bluetooth', 'wireless', 'tws', 'airpods', 'ইয়ারবাডস', 'ইয়ারবাডস'],
  'হেডফোন': ['headphone', 'headset', 'earphone', 'earbuds', 'হেডফোন', 'ইয়ারবাডস'],
  'ব্লুটুথ': ['bluetooth', 'wireless', 'tws', 'ব্লুটুথ', 'ইয়ারবাডস', 'স্পিকার'],
  'earbuds': ['ইয়ারবাডস', 'ইয়ারবাডস', 'earbuds', 'tws', 'bluetooth', 'headphone', 'airpods'],
  'headphone': ['হেডফোন', 'headphone', 'headset', 'earbuds'],
  'স্পিকার': ['speaker', 'sound speaker', 'soundbox', 'স্পিকার', 'সাউন্ডবক্স'],
  'speaker': ['স্পিকার', 'speaker', 'soundbox', 'bluetooth speaker'],

  // Ladies Fashion
  'শাড়ি': ['saree', 'sari', 'শাড়ি', 'শাড়ি', 'তাঁত', 'কাতান', 'জর্জেট', 'সিল্ক', 'বেনারসি'],
  'শাড়ি': ['saree', 'sari', 'শাড়ি', 'শাড়ি', 'তাঁত', 'কাতান', 'জর্জেট', 'সিল্ক', 'বেনারসি'],
  'saree': ['শাড়ি', 'শাড়ি', 'saree', 'sari', 'silk'],
  'sari': ['শাড়ি', 'শাড়ি', 'saree', 'sari'],
  'থ্রিপিস': ['three piece', 'three-piece', 'kurti', 'dress', 'থ্রিপিস', 'থ্রি পিস', 'কুর্তি', 'সালোয়ার কামিজ'],
  'থ্রি পিস': ['three piece', 'three-piece', 'kurti', 'dress', 'থ্রিপিস', 'থ্রি পিস', 'কুর্তি'],
  'three piece': ['থ্রিপিস', 'থ্রি পিস', 'three piece', 'kurti'],
  'কুর্তি': ['kurti', 'kurtis', 'gown', 'কুর্তি', 'গাউন', 'থ্রিপিস'],
  'গাউন': ['gown', 'dress', 'party dress', 'গাউন', 'লেহেঙ্গা'],
  'বোরকা': ['burqa', 'borka', 'abaya', 'বোরকা', 'হিজাব', 'নিকাব'],
  'হিজাব': ['hijab', 'nikab', 'হিজাব', 'নিকাব', 'বোরকা'],

  // Bags & Luggage
  'ব্যাগ': ['bag', 'bags', 'backpack', 'handbag', 'purse', 'wallet', 'luggage', 'ব্যাগ', 'ব্যাকপ্যাক', 'পার্স'],
  'ব্যাকপ্যাক': ['backpack', 'bag', 'স্কুল ব্যাগ', 'ব্যাকপ্যাক', 'ব্যাগ'],
  'bag': ['ব্যাগ', 'bag', 'backpack', 'handbag', 'purse', 'wallet'],
  'backpack': ['ব্যাকপ্যাক', 'ব্যাগ', 'backpack', 'bag'],
  'হ্যান্ডব্যাগ': ['handbag', 'ladies bag', 'purse', 'হ্যান্ডব্যাগ', 'পার্স', 'ব্যাগ'],
  'পার্স': ['purse', 'wallet', 'পার্স', 'মানিব্যাগ', 'ব্যাগ'],

  // Shoes & Footwear
  'জুতা': ['shoe', 'shoes', 'sneaker', 'sneakers', 'sandal', 'sandals', 'loafer', 'জুতা', 'জুতো', 'স্যান্ডেল'],
  'জুতো': ['shoe', 'shoes', 'sneaker', 'sneakers', 'sandal', 'sandals', 'loafer', 'জুতা', 'জুতো'],
  'shoe': ['জুতা', 'জুতো', 'shoe', 'shoes', 'loafer', 'sneaker', 'sandal'],
  'shoes': ['জুতা', 'জুতো', 'shoe', 'shoes', 'loafer', 'sneaker'],
  'স্যান্ডেল': ['sandal', 'sandals', 'slippers', 'স্যান্ডেল', 'জুতা'],

  // Cosmetics & Jewelry
  'কসমেটিকস': ['cosmetic', 'cosmetics', 'cream', 'serum', 'lotion', 'lipstick', 'makeup', 'skincare', 'কসমেটিকস', 'স্কিন কেয়ার'],
  'cosmetic': ['কসমেটিকস', 'cosmetic', 'cosmetics', 'cream', 'serum'],
  'ক্রিম': ['cream', 'moisturizer', 'day cream', 'night cream', 'ক্রিম', 'লোশন'],
  'সিরাম': ['serum', 'vitamin c', 'সিরাম'],
  'লিপস্টিক': ['lipstick', 'lip balm', 'লিপস্টিক'],
  'জুয়েলারি': ['jewelry', 'jewellery', 'necklace', 'earring', 'ring', 'bangle', 'জুয়েলারি', 'জুয়েলারি', 'গহনা', 'নেকলেস'],
  'জুয়েলারি': ['jewelry', 'jewellery', 'necklace', 'earring', 'ring', 'bangle', 'জুয়েলারি', 'জুয়েলারি', 'গহনা'],
  'গহনা': ['jewelry', 'jewellery', 'necklace', 'earring', 'গহনা', 'জুয়েলারি', 'নেকলেস'],
  'jewelry': ['জুয়েলারি', 'জুয়েলারি', 'গহনা', 'jewelry', 'jewellery', 'necklace'],

  // Food & Organic
  'মধু': ['honey', 'মধু', 'খাঁটি মধু', 'সুন্দরবন'],
  'honey': ['মধু', 'honey'],
  'তেল': ['oil', 'black seed', 'olive oil', 'তেল', 'কালোজিরা', 'অলিভ অয়েল'],
  'oil': ['তেল', 'oil', 'olive', 'black seed'],
  'বাদাম': ['nuts', 'dry fruits', 'almond', 'cashew', 'বাদাম', 'ড্রাই ফ্রুটস', 'কাজু'],
  'nuts': ['বাদাম', 'nuts', 'dry fruits', 'cashew'],

  // Baby Items
  'বাচ্চা': ['baby', 'kids', 'infant', 'child', 'বাচ্চা', 'বেবি', 'শিশু'],
  'বেবি': ['baby', 'kids', 'infant', 'child', 'বাচ্চা', 'বেবি', 'শিশু'],
  'baby': ['বাচ্চা', 'বেবি', 'baby', 'kids', 'child'],
  'kids': ['বাচ্চা', 'বেবি', 'kids', 'baby', 'child'],

  // Home Decor
  'বেডশিট': ['bedsheet', 'bed sheet', 'bed cover', 'বেডশিট', 'চাদর'],
  'bedsheet': ['বেডশিট', 'bedsheet', 'bed cover'],
  'হোম ডেকর': ['home decor', 'decoration', 'গৃহ সজ্জা', 'হোম ডেকর', 'কার্টেন'],
  'চশমা': ['sunglass', 'sunglasses', 'glasses', 'সানগ্লাস', 'চশমা'],
  'সানগ্লাস': ['sunglass', 'sunglasses', 'সানগ্লাস', 'চশমা']
};

export function normalizeText(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[ড়ঢ়]/g, 'ড়')
    .replace(/[য়য]/g, 'য')
    .replace(/[ৎত]/g, 'ত')
    .replace(/[\s\-_,.]+/g, ' ')
    .trim();
}

export function smartSearchProducts(products, query) {
  if (!products || !Array.isArray(products)) return [];
  const rawQ = (query || '').toLowerCase().trim();
  if (!rawQ) return products;

  const normalizedQ = normalizeText(rawQ);

  let terms = [rawQ, normalizedQ];
  for (const [key, synList] of Object.entries(BILINGUAL_SYNONYMS)) {
    const normKey = normalizeText(key);
    if (normalizedQ.includes(normKey) || normKey.includes(normalizedQ)) {
      terms.push(...synList);
    }
  }

  const searchTokens = Array.from(new Set(
    terms.map(t => normalizeText(t)).filter(t => t.length > 0)
  ));

  const words = normalizedQ.split(' ').filter(w => w.length > 1);
  words.forEach(w => searchTokens.push(w));

  const scoredResults = [];

  for (const p of products) {
    let score = 0;

    const normTitle = normalizeText(p.title);
    const normCat = normalizeText(p.category_name);
    const normSub = normalizeText(p.subcategory);
    const normSku = normalizeText(p.sku);
    const normDesc = normalizeText(p.description);

    if (normTitle.includes(normalizedQ)) {
      score += 100;
      if (normTitle.startsWith(normalizedQ)) score += 50;
    }
    if (normSub.includes(normalizedQ)) {
      score += 80;
    }
    if (normCat.includes(normalizedQ)) {
      score += 60;
    }
    if (normSku.includes(normalizedQ) || String(p.id).includes(normalizedQ)) {
      score += 150;
    }

    for (const token of searchTokens) {
      if (token === normalizedQ) continue;
      if (normTitle.includes(token)) score += 40;
      if (normSub.includes(token)) score += 35;
      if (normCat.includes(token)) score += 25;
      if (normDesc.includes(token)) score += 10;
    }

    if (score > 0) {
      scoredResults.push({ product: p, score });
    }
  }

  scoredResults.sort((a, b) => b.score - a.score);
  return scoredResults.map(item => item.product);
}
