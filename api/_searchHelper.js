// api/_searchHelper.js - Bilingual Bangla & English Smart Search Helper

export const BILINGUAL_SYNONYMS = {
  // Gents Fashion & Typos
  'শার্ট': ['shirt', 'formal shirt', 'casual shirt', 'oxford', 'cotton shirt', 'শার্ট'],
  'shirt': ['শার্ট', 'shirt', 'formal shirt', 'casual shirt', 'oxford'],
  'shrit': ['শার্ট', 'shirt', 'formal shirt', 'casual shirt', 'oxford', 'cotton shirt'],
  'shart': ['শার্ট', 'shirt', 'formal shirt', 'casual shirt', 'oxford'],
  'shrt': ['শার্ট', 'shirt', 'formal shirt', 'casual shirt'],
  'টি-শার্ট': ['t-shirt', 'tshirt', 'polo shirt', 'ড্রপশোল্ডার', 'গেঞ্জি', 'টি শার্ট', 'টি-শার্ট'],
  'টি শার্ট': ['t-shirt', 'tshirt', 'polo shirt', 'ড্রপশোল্ডার', 'গেঞ্জি', 'টি শার্ট', 'টি-শার্ট'],
  't-shirt': ['টি-শার্ট', 'টি শার্ট', 't-shirt', 'tshirt', 'polo shirt', 'ড্রপশোল্ডার'],
  'tshirt': ['টি-শার্ট', 'টি শার্ট', 't-shirt', 'tshirt', 'polo shirt'],
  't-shrit': ['টি-শার্ট', 'টি শার্ট', 't-shirt', 'tshirt', 'polo shirt', 'শার্ট'],
  'tshrit': ['টি-শার্ট', 'টি শার্ট', 't-shirt', 'tshirt', 'polo shirt', 'শার্ট'],
  'পোলো': ['polo', 'polo shirt', 'পোলো', 'টি-শার্ট'],
  'polo': ['polo', 'polo shirt', 'পোলো', 'টি-শার্ট'],
  'পাঞ্জাবি': ['panjabi', 'punjabi', 'পাঞ্জাবি', 'পাঞ্জাবী', 'পায়জামা'],
  'পাঞ্জাবী': ['panjabi', 'punjabi', 'পাঞ্জাবি', 'পাঞ্জাবী'],
  'panjabi': ['পাঞ্জাবি', 'পাঞ্জাবী', 'panjabi', 'punjabi'],
  'punjabi': ['পাঞ্জাবি', 'পাঞ্জাবী', 'panjabi', 'punjabi'],
  'প্যান্ট': ['pant', 'pants', 'trouser', 'trousers', 'jeans', 'gabardine', 'প্যান্ট', 'ট্রাউজার'],
  'ট্রাউজার': ['trouser', 'trousers', 'pant', 'ট্রাউজার', 'প্যান্ট'],
  'pant': ['প্যান্ট', 'pant', 'trouser', 'jeans', 'gabardine'],
  'pantt': ['প্যান্ট', 'pant', 'trouser', 'jeans', 'gabardine'],
  'pnt': ['প্যান্ট', 'pant', 'trouser', 'jeans', 'gabardine'],
  'জিন্স': ['jeans', 'denim', 'জিন্স', 'প্যান্ট'],
  'jeans': ['জিন্স', 'jeans', 'denim', 'pant'],

  // Toys & Baby Entertainment
  'খেলনা': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'বেবি বাউন্সার', 'টয়', 'টয়', 'দোলনা'],
  'khelna': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'বেবি বাউন্সার', 'টয়', 'টয়', 'দোলনা'],
  'khilna': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'টয়', 'টয়'],
  'toy': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'টয়', 'টয়', 'বেবি বাউন্সার'],
  'toys': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'টয়', 'টয়', 'বেবি বাউন্সার'],
  'টয়': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'টয়', 'টয়'],
  'টয়': ['খেলনা', 'toy', 'toys', 'বার্ড টয়', 'টয়', 'টয়'],

  // Watches & Smart Devices
  'ঘড়ি': ['watch', 'smartwatch', 'smart watch', 'wrist watch', 'ঘড়ি', 'ঘড়ি', 'ওয়াচ'],
  'ঘড়ি': ['watch', 'smartwatch', 'smart watch', 'wrist watch', 'ঘড়ি', 'ঘড়ি', 'ওয়াচ'],
  'watch': ['ঘড়ি', 'ঘড়ি', 'watch', 'smartwatch', 'ultra'],
  'wach': ['ঘড়ি', 'ঘড়ি', 'watch', 'smartwatch', 'ultra'],
  'wacth': ['ঘড়ি', 'ঘড়ি', 'watch', 'smartwatch', 'ultra'],
  'ghori': ['ঘড়ি', 'ঘড়ি', 'watch', 'smartwatch', 'ultra'],
  'ghari': ['ঘড়ি', 'ঘড়ি', 'watch', 'smartwatch', 'ultra'],
  'স্মার্ট ওয়াচ': ['smartwatch', 'smart watch', 'watch', 'ultra', 'স্মার্ট ওয়াচ', 'ঘড়ি'],
  'স্মার্ট ওয়াচ': ['smartwatch', 'smart watch', 'watch', 'ultra', 'স্মার্ট ওয়াচ', 'ঘড়ি'],
  'smartwatch': ['স্মার্ট ওয়াচ', 'স্মার্ট ওয়াচ', 'ঘড়ি', 'ঘড়ি', 'watch'],

  // Audio & Earbuds
  'ইয়ারবাডস': ['earbuds', 'headphone', 'bluetooth', 'wireless', 'tws', 'airpods', 'ইয়ারবাডস'],
  'ইয়ারবাডস': ['earbuds', 'headphone', 'bluetooth', 'wireless', 'tws', 'airpods', 'ইয়ারবাডস'],
  'হেডফোন': ['headphone', 'headset', 'earphone', 'earbuds', 'হেডফোন'],
  'ব্লুটুথ': ['bluetooth', 'wireless', 'tws', 'ব্লুটুথ', 'ইয়ারবাডস'],
  'earbuds': ['ইয়ারবাডস', 'ইয়ারবাডস', 'earbuds', 'tws', 'bluetooth', 'headphone'],
  'headphone': ['হেডফোন', 'headphone', 'headset', 'earbuds'],
  'স্পিকার': ['speaker', 'sound speaker', 'soundbox', 'স্পিকার'],
  'speaker': ['স্পিকার', 'speaker', 'soundbox', 'bluetooth speaker'],

  // Ladies Fashion
  'শাড়ি': ['saree', 'sari', 'শাড়ি', 'শাড়ি', 'তাঁত', 'কাতান', 'জর্জেট', 'সিল্ক'],
  'শাড়ি': ['saree', 'sari', 'শাড়ি', 'শাড়ি', 'তাঁত', 'কাতান', 'জর্জেট', 'সিল্ক'],
  'saree': ['শাড়ি', 'শাড়ি', 'saree', 'sari'],
  'sari': ['শাড়ি', 'শাড়ি', 'saree', 'sari'],
  'থ্রিপিস': ['three piece', 'three-piece', 'kurti', 'dress', 'থ্রিপিস', 'থ্রি পিস', 'কুর্তি'],
  'থ্রি পিস': ['three piece', 'three-piece', 'kurti', 'dress', 'থ্রিপিস', 'থ্রি পিস', 'কুর্তি'],
  'three piece': ['থ্রিপিস', 'থ্রি পিস', 'three piece', 'kurti'],
  'কুর্তি': ['kurti', 'kurtis', 'gown', 'কুর্তি', 'গাউন', 'থ্রিপিস'],
  'গাউন': ['gown', 'dress', 'party dress', 'গাউন', 'লেহেঙ্গা'],
  'বোরকা': ['burqa', 'borka', 'abaya', 'বোরকা', 'হিজাব'],
  'হিজাব': ['hijab', 'nikab', 'হিজাব', 'বোরকা'],

  // Bags & Luggage
  'ব্যাগ': ['bag', 'bags', 'backpack', 'handbag', 'purse', 'wallet', 'ব্যাগ', 'ব্যাকপ্যাক'],
  'ব্যাকপ্যাক': ['backpack', 'bag', 'স্কুল ব্যাগ', 'ব্যাকপ্যাক', 'ব্যাগ'],
  'bag': ['ব্যাগ', 'bag', 'backpack', 'handbag', 'purse'],
  'backpack': ['ব্যাকপ্যাক', 'ব্যাগ', 'backpack', 'bag'],
  'হ্যান্ডব্যাগ': ['handbag', 'ladies bag', 'purse', 'হ্যান্ডব্যাগ', 'ব্যাগ'],
  'পার্স': ['purse', 'wallet', 'পার্স', 'মানিব্যাগ', 'ব্যাগ'],

  // Shoes & Footwear
  'জুতা': ['shoe', 'shoes', 'sneaker', 'sandal', 'loafer', 'জুতা', 'জুতো'],
  'জুতো': ['shoe', 'shoes', 'sneaker', 'sandal', 'loafer', 'জুতা', 'জুতো'],
  'shoe': ['জুতা', 'জুতো', 'shoe', 'shoes', 'loafer'],
  'shoes': ['জুতা', 'জুতো', 'shoe', 'shoes', 'loafer'],

  // Cosmetics & Jewelry
  'কসমেটিকস': ['cosmetic', 'cosmetics', 'cream', 'serum', 'lipstick', 'makeup', 'কসমেটিকস', 'স্কিন কেয়ার'],
  'cosmetic': ['কসমেটিকস', 'cosmetic', 'cosmetics', 'cream'],
  'ক্রিম': ['cream', 'moisturizer', 'day cream', 'night cream', 'ক্রিম'],
  'সিরাম': ['serum', 'vitamin c', 'সিরাম'],
  'লিপস্টিক': ['lipstick', 'lip balm', 'লিপস্টিক'],
  'জুয়েলারি': ['jewelry', 'jewellery', 'necklace', 'earring', 'জুয়েলারি', 'জুয়েলারি', 'গহনা'],
  'জুয়েলারি': ['jewelry', 'jewellery', 'necklace', 'earring', 'জুয়েলারি', 'জুয়েলারি', 'গহনা'],
  'গহনা': ['jewelry', 'jewellery', 'necklace', 'গহনা', 'জুয়েলারি'],
  'jewelry': ['জুয়েলারি', 'জুয়েলারি', 'গহনা', 'jewelry', 'jewellery'],

  // Food & Organic
  'মধু': ['honey', 'মধু', 'খাঁটি মধু'],
  'honey': ['মধু', 'honey'],
  'তেল': ['oil', 'black seed', 'olive oil', 'তেল', 'কালোজিরা'],
  'oil': ['তেল', 'oil', 'olive', 'black seed'],
  'বাদাম': ['nuts', 'dry fruits', 'almond', 'cashew', 'বাদাম'],
  'nuts': ['বাদাম', 'nuts', 'dry fruits', 'cashew'],

  // Baby Items
  'বাচ্চা': ['baby', 'kids', 'infant', 'child', 'বাচ্চা', 'বেবি'],
  'বেবি': ['baby', 'kids', 'infant', 'child', 'বাচ্চা', 'বেবি'],
  'baby': ['বাচ্চা', 'বেবি', 'baby', 'kids'],
  'kids': ['বাচ্চা', 'বেবি', 'kids', 'baby'],

  // Home Decor
  'বেডশিট': ['bedsheet', 'bed sheet', 'bed cover', 'বেডশিট', 'চাদর'],
  'bedsheet': ['বেডশিট', 'bedsheet', 'bed cover'],
  'হোম ডেকর': ['home decor', 'decoration', 'গৃহ সজ্জা', 'হোম ডেকর'],
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
    terms.map(t => normalizeText(t)).filter(t => t.length > 2)
  ));

  const words = normalizedQ.split(' ').filter(w => w.length > 2);
  words.forEach(w => searchTokens.push(w));

  const scoredResults = [];

  for (const p of products) {
    let score = 0;

    const normTitle = normalizeText(p.title);
    const normCat = normalizeText(p.category_name);
    const normSub = normalizeText(p.subcategory);
    const normSku = normalizeText(p.sku);

    // 1. Direct query matching
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

    // 2. Token / Synonym matching in Title, Subcategory, Category
    for (const token of searchTokens) {
      if (token === normalizedQ) continue;
      if (normTitle.includes(token)) score += 40;
      if (normSub.includes(token)) score += 35;
      if (normCat.includes(token)) score += 20;
    }

    if (score >= 35) {
      scoredResults.push({ product: p, score });
    }
  }

  // Sort descending by score
  scoredResults.sort((a, b) => b.score - a.score);

  return scoredResults.map(item => item.product);
}
