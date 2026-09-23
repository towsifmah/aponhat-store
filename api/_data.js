// api/_data.js - Shared In-Memory & /tmp Store for Vercel Serverless Functions
import fs from 'fs';
import path from 'path';

const TMP_FILE = path.join('/tmp', 'aponhat_store.json');

export const initialCategories = [
  { id: '1', name: 'জেন্টস ফ্যাশন', slug: 'gents-fashion', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600010', product_count: 12 },
  { id: '2', name: 'লেডিস ফ্যাশন', slug: 'ladies-fashion', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600013', product_count: 8 },
  { id: '3', name: 'বেবি ফ্যাশন', slug: 'baby-fashion', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600015', product_count: 6 },
  { id: '6', name: 'হোম ডেকর', slug: 'home-decor', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600023', product_count: 5 },
  { id: '7', name: 'কসমেটিকস এন্ড গহনা', slug: 'cosmetics-jewelry', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600017', product_count: 7 },
  { id: '8', name: 'ইলেকট্রনিকস এন্ড গ্যাজেটস', slug: 'electronics-gadgets', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600018', product_count: 9 },
  { id: '10', name: 'ফুড এন্ড ফ্রুটস', slug: 'food-fruits', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600019', product_count: 4 },
  { id: '11', name: 'ব্যাগ কালেকশন', slug: 'bag-collection', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260700085', product_count: 6 },
  { id: '48', name: 'সিজনাল প্রোডাক্টস', slug: 'seasonal-products', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260600010', product_count: 4 },
  { id: '49', name: 'কাপল/কম্বো সেট', slug: 'couple-combo', image: 'https://api.greenishtradeltd.com/ecommerce/api/v1/fileViewById/260900086', product_count: 5 }
];

export const initialProducts = [
  {
    id: '26081800002594',
    title: 'Premium Oxford Cotton Slim Fit Formal Shirt for Men',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 40,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(1)_2608181042313270.jpeg',
    description: "অফিস ও ফরমাল লুকের জন্য বেছে নিন Premium Oxford Cotton Formal Shirt। উন্নতমানের অক্সফোর্ড কটন ফেব্রিক দিয়ে তৈরি এই শার্টটি আরামদায়ক ও ফ্যাশনেবল। এর স্লিম ফিট ডিজাইন আপনাকে দেবে স্মার্ট ও পরিপাটি লুক।\n\n✨ মূল বৈশিষ্ট্য:\n👔 ফেব্রিক: প্রিমিয়াম অক্সফোর্ড কটন\n👔 ফিট: স্লিম ফিট\n👔 আরামদায়ক ও ফ্যাশনেবল ডিজাইন\n👔 উন্নতমানের স্টিচিং ও ফিনিশিং\n👔 অফিস, মিটিং ও ফরমাল অনুষ্ঠানের জন্য উপযুক্ত\n🎨 কালার: ছবিতে প্রদর্শিত রঙ অনুযায়ী",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(1)_2608181042313270.jpeg'],
    sku: 'Mir-1_013',
    source_url: 'https://greenishtradeltd.com/products/26081800002594',
    is_active: 1
  },
  {
    id: '26081800002593',
    title: 'Premium Oxford Cotton Slim Fit Shirt - Navy Blue',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 40,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(2)_2608181041130220.jpeg',
    description: "ক্লাসিক নেভি ব্লু কালারের প্রিমিয়াম অক্সফোর্ড কটন স্লিম ফিট শার্ট। ১০০% আরামদায়ক কটন।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(2)_2608181041130220.jpeg'],
    sku: 'Mir-1_012',
    source_url: 'https://greenishtradeltd.com/products/26081800002593',
    is_active: 1
  },
  {
    id: '26081800002592',
    title: 'Premium Oxford Cotton Slim Fit Shirt - Olive Green',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 39,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM_2608181040003447.jpeg',
    description: "অলিভ গ্রিন শেডের প্রিমিয়াম অক্সফোর্ড কটন শার্ট। যেকোনো আউটিং বা অফিস মিটিংয়ের জন্য বেস্ট চয়েস।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM_2608181040003447.jpeg'],
    sku: 'Mir-1_011',
    source_url: 'https://greenishtradeltd.com/products/26081800002592',
    is_active: 1
  },
  {
    id: '26081800002591',
    title: 'Premium Oxford Cotton Formal Shirt - Charcoal Black',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 39,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.54%20PM_2608181038478619.jpeg',
    description: "স্মার্ট চারকোল ব্ল্যাক অক্সফোর্ড কটন শার্ট। নিখুঁত সেলাই ও স্লিম ফিট কাটিং।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.54%20PM_2608181038478619.jpeg'],
    sku: 'Mir-1_010',
    source_url: 'https://greenishtradeltd.com/products/26081800002591',
    is_active: 1
  },
  {
    id: '26081800002590',
    title: 'Premium Oxford Cotton Formal Shirt - Maroon Edition',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 40,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(1)_2608181037285929.jpeg',
    description: "গ্ল্যামারাস মেরুন কালারের প্রিমিয়াম ফরমাল শার্ট। উৎসব কিংবা মিটিংয়ে মানানসই।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(1)_2608181037285929.jpeg'],
    sku: 'Mir-1_009',
    source_url: 'https://greenishtradeltd.com/products/26081800002590',
    is_active: 1
  },
  {
    id: '26081800002589',
    title: 'Premium Oxford Cotton Slim Fit Shirt - Royal Blue',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 40,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(2)_2608181036101890.jpeg',
    description: "রয়্যাল ব্লু প্রিমিয়াম স্লিম ফিট কটন শার্ট।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(2)_2608181036101890.jpeg'],
    sku: 'Mir-1_008',
    source_url: 'https://greenishtradeltd.com/products/26081800002589',
    is_active: 1
  },
  {
    id: '26081800002588',
    title: 'Pure Cotton White Luxury Formal Shirt',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 450,
    retail_price: 750,
    stock: 45,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.55%20PM_2608181034571521.jpeg',
    description: "পরিপাটি উজ্জ্বল সাদা ফরমাল শার্ট। ১০০% প্রিমিয়াম সুতি।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.55%20PM_2608181034571521.jpeg'],
    sku: 'Mir-1_007',
    source_url: 'https://greenishtradeltd.com/products/26081800002588',
    is_active: 1
  },
  {
    id: '26081800002587',
    title: 'Premium Oxford Cotton Shirt - Sky Blue',
    category_id: '1',
    category_name: 'জেন্টস ফ্যাশন',
    subcategory: 'শার্ট (Shirt)',
    reseller_price: 420,
    retail_price: 699,
    stock: 39,
    image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(1)_2608181033473111.jpeg',
    description: "অত্যন্ত জনপ্রিয় স্কাই ব্লু শেড। আরামদায়ক ও ট্রেন্ডি।",
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: ['http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(1)_2608181033473111.jpeg'],
    sku: 'Mir-1_006',
    source_url: 'https://greenishtradeltd.com/products/26081800002587',
    is_active: 1
  },
  {
    id: '26081900001001',
    title: 'Wireless Bluetooth Earbuds with Digital LED Display',
    category_id: '8',
    category_name: 'ইলেকট্রনিকস এন্ড গ্যাজেটস',
    subcategory: 'ইয়ারবাডস (Earbuds)',
    reseller_price: 380,
    retail_price: 650,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    description: "ক্রিস্টাল ক্লিয়ার সাউন্ড, ডিপ বাস এবং ডিজিটাল ব্যাটারি ডিসপ্লে সহ সুপার ফাস্ট ব্লুটুথ ৫.৩ ইয়ারবাডস। এক চার্জে ৬ ঘণ্টা ব্যাকআপ।\n\nবৈশিষ্ট্য:\n• ব্যাটারি ক্যাপাসিটি: ৩০০ mAh\n• টাচ কন্ট্রোল ও নয়েজ রিডাকশন\n• ওয়াটারপ্রুফ রেটিং IPX4",
    sizes: ['One Size'],
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80'],
    sku: 'GAD-EB-01',
    source_url: 'https://greenishtradeltd.com/products/26081900001001',
    is_active: 1
  },
  {
    id: '26081900001002',
    title: 'Ultra Smart Watch with Health Monitor & Bluetooth Calling',
    category_id: '8',
    category_name: 'ইলেকট্রনিকস এন্ড গ্যাজেটস',
    subcategory: 'স্মার্ট ওয়াচ (Smart Watch)',
    reseller_price: 850,
    retail_price: 1350,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    description: "প্রিমিয়াম মেটালিক বডি, ফুল এইচডি ডিসপ্লে, হার্ট রেট ও স্লিপ মনিটরিং এবং ব্লুটুথ কলিং ফিচারযুক্ত আল্ট্রা স্মার্ট ওয়াচ।",
    sizes: ['Orange', 'Black', 'Silver'],
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'],
    sku: 'GAD-SW-02',
    source_url: 'https://greenishtradeltd.com/products/26081900001002',
    is_active: 1
  },
  {
    id: '26082000003001',
    title: 'Exclusive Georgette Embroidered 3-Piece Set',
    category_id: '2',
    category_name: 'লেডিস ফ্যাশন',
    subcategory: 'থ্রি-পিস (Three Piece)',
    reseller_price: 950,
    retail_price: 1550,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
    description: "আভিজাত্যপূর্ণ ডিজাইনের এক্সক্লুসিভ জর্জেট এমব্রয়ডারি থ্রি-পিস। সফট ইনার ও ম্যাচিং দোপাট্টা সহ সম্পূর্ণ রেডি টু ওয়্যার।\n\n• কামিজ ফেব্রিক: পিওর ওয়েটলেস জর্জেট\n• সালোয়ার ও ইনার: বাটার সিল্ক\n• ওড়না: ফুল ডিজিটাল প্রিন্ট জর্জেট",
    sizes: ['Free Size', '38', '40', '42', '44'],
    images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80'],
    sku: 'LAD-TP-01',
    source_url: 'https://greenishtradeltd.com/products/26082000003001',
    is_active: 1
  },
  {
    id: '26082000003002',
    title: 'Soft Silk Floral Print Party Saree with Blouse Piece',
    category_id: '2',
    category_name: 'লেডিস ফ্যাশন',
    subcategory: 'শাড়ি (Saree)',
    reseller_price: 750,
    retail_price: 1250,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80',
    description: "লাইটওয়েট সফট সিল্কের মনোমুগ্ধকর ফ্লোরাল প্রিন্ট শাড়ি। ১২ হাত বহর সাথে রানিং ব্লাউজ পিস।",
    sizes: ['Standard (12 Haat)'],
    images: ['https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80'],
    sku: 'LAD-SR-02',
    source_url: 'https://greenishtradeltd.com/products/26082000003002',
    is_active: 1
  },
  {
    id: '26082100004001',
    title: 'Waterproof Laptop Backpack with USB Charging Port',
    category_id: '11',
    category_name: 'ব্যাগ কালেকশন',
    subcategory: 'ব্যাকপ্যাক (Backpack)',
    reseller_price: 620,
    retail_price: 990,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    description: "অফিস, ট্রাভেল কিংবা ভার্সিটির জন্য ওয়াটারপ্রুফ ল্যাপটপ ব্যাগ। এক্সটার্নাল ইউএসবি চার্জিং পোর্ট ও অ্যান্টি-থেফ্ট জিপার।",
    sizes: ['15.6 inch', '17 inch'],
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'],
    sku: 'BAG-BP-01',
    source_url: 'https://greenishtradeltd.com/products/26082100004001',
    is_active: 1
  },
  {
    id: '26082100004002',
    title: 'Luxury PU Leather Crossbody Ladies Handbag',
    category_id: '11',
    category_name: 'ব্যাগ কালেকশন',
    subcategory: 'লেডিস হ্যান্ডব্যাগ (Handbag)',
    reseller_price: 520,
    retail_price: 850,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    description: "হাই-কোয়ালিটি পিইউ লেদারের ট্রেন্ডি ও গর্জিয়াস হ্যান্ডব্যাগ। লং স্ট্র্যাপ ও মাল্টিপল চেম্বার সহ।",
    sizes: ['Brown', 'Black', 'Pink'],
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80'],
    sku: 'BAG-HB-02',
    source_url: 'https://greenishtradeltd.com/products/26082100004002',
    is_active: 1
  },
  {
    id: '26082200005001',
    title: 'Nordic Aesthetic Sunset Projection Lamp 16 Colors',
    category_id: '6',
    category_name: 'হোম ডেকর',
    subcategory: 'ল্যাম্প (Lamp)',
    reseller_price: 320,
    retail_price: 550,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
    description: "রুমের পরিবেশকে জাদুকরী করতে সানসেট প্রজেকশন ল্যাম্প। রিমোট কন্ট্রোল দিয়ে ১৬টি কালার পরিবর্তন করা যায়।",
    sizes: ['RGB 16 Colors'],
    images: ['https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80'],
    sku: 'DEC-LMP-01',
    source_url: 'https://greenishtradeltd.com/products/26082200005001',
    is_active: 1
  },
  {
    id: '26082300006001',
    title: 'Golden Butterfly Crystal Pendant Necklace & Earring Set',
    category_id: '7',
    category_name: 'কসমেটিকস এন্ড গহনা',
    subcategory: 'জুয়েলারি সেট (Jewelry)',
    reseller_price: 220,
    retail_price: 450,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    description: "১৮ ক্যারেট গোল্ড প্লেটেড ক্রিস্টাল বাটারফ্লাই নেকলেস ও কানের দুল কম্বো। প্রিমিয়াম ফিনিশিং ও নন-অ্যালার্জিক।",
    sizes: ['Gold', 'Silver', 'Rose Gold'],
    images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'],
    sku: 'JWL-SET-01',
    source_url: 'https://greenishtradeltd.com/products/26082300006001',
    is_active: 1
  }
];

export const initialOrders = [
  {
    id: 1,
    order_code: 'AH-9284',
    customer_name: 'কামাল হোসেন',
    phone: '01711223344',
    address: 'বাড়ি ১২, রোড ৪, ধানমন্ডি, ঢাকা',
    city: 'ঢাকা',
    notes: 'বিকেলে ডেলিভারি দিলে ভালো হয়',
    payment_method: 'cod',
    trx_id: null,
    sender_phone: null,
    subtotal: 1398,
    delivery_fee: 60,
    total_amount: 1458,
    status: 'pending',
    created_at: new Date(Date.now() - 3600000).toISOString(),
    items: [
      {
        id: 1,
        order_id: 1,
        product_id: '26081800002594',
        product_title: 'Premium Oxford Cotton Slim Fit Formal Shirt for Men',
        product_image: 'http://147.93.97.56:9000/ecommerce-public/ProductImage/WhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(1)_2608181042313270.jpeg',
        variant: 'XL',
        quantity: 2,
        unit_price: 699,
        supplier_price: 420,
        supplier_url: 'https://greenishtradeltd.com/products/26081800002594'
      }
    ],
    supplier_cost: 840,
    profit: 558
  }
];

export const initialUsers = [
  {
    id: 1,
    name: 'আপনহাট অ্যাডমিন',
    phone: '01617971644',
    email: 'admin@aponhat.com',
    role: 'admin',
    password: 'Admin@AponHat2026!'
  }
];

export const initialSettings = {
  default_markup_percent: '30',
  helpline: '01617971644',
  bkash: '01617971644',
  nagad: '01309993470',
  delivery_inside_dhaka: '60',
  delivery_outside_dhaka: '120',
  last_sync: new Date().toISOString()
};

// State loader & saver
let memoryState = null;

export function getStore() {
  if (memoryState) return memoryState;

  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = fs.readFileSync(TMP_FILE, 'utf-8');
      memoryState = JSON.parse(data);
      return memoryState;
    }
  } catch {
    // ignore
  }

  memoryState = {
    categories: [...initialCategories],
    products: [...initialProducts],
    orders: [...initialOrders],
    users: [...initialUsers],
    settings: { ...initialSettings }
  };
  return memoryState;
}

export function saveStore(state) {
  memoryState = state;
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(state, null, 2), 'utf-8');
  } catch {
    // ignore if /tmp is not available in some environments
  }
}
