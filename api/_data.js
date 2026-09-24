// api/_data.js - Shared In-Memory & /tmp Store for Vercel Serverless Functions
import fs from 'fs';
import path from 'path';
import os from 'os';

const TMP_FILE = path.join(os.tmpdir(), 'aponhat_store.json');


export const initialCategories = [
  {
    "id": "1",
    "name": "জেন্টস ফ্যাশন",
    "slug": "gents-fashion",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    "product_count": 88
  },
  {
    "id": "2",
    "name": "লেডিস ফ্যাশন",
    "slug": "ladies-fashion",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    "product_count": 80
  },
  {
    "id": "3",
    "name": "বেবি ফ্যাশন",
    "slug": "baby-fashion",
    "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
    "product_count": 42
  },
  {
    "id": "6",
    "name": "হোম ডেকর",
    "slug": "home-decor",
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    "product_count": 24
  },
  {
    "id": "7",
    "name": "কসমেটিকস এন্ড গহনা",
    "slug": "cosmetics-jewelry",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    "product_count": 65
  },
  {
    "id": "8",
    "name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "slug": "electronics-gadgets",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    "product_count": 146
  },
  {
    "id": "10",
    "name": "ফুড এন্ড ফ্রুটস",
    "slug": "food-fruits",
    "image": "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80",
    "product_count": 6
  },
  {
    "id": "11",
    "name": "ব্যাগ কালেকশন",
    "slug": "bag-collection",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    "product_count": 45
  },
  {
    "id": "48",
    "name": "সিজনাল প্রোডাক্টস",
    "slug": "seasonal-products",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    "product_count": 6
  },
  {
    "id": "49",
    "name": "কাপল/কম্বো সেট",
    "slug": "couple-combo",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80",
    "product_count": 24
  }
];

export const initialProducts = [
  {
    "id": "26081800002594",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(1)_2608181042313270.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(1)_2608181042313270.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2594",
    "source_url": "https://greenishtradeltd.com/products/26081800002594",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002593",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(2)_2608181041130220.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.52%20PM%20(2)_2608181041130220.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2593",
    "source_url": "https://greenishtradeltd.com/products/26081800002593",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002592",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.52%20PM_2608181040003447.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.52%20PM_2608181040003447.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2592",
    "source_url": "https://greenishtradeltd.com/products/26081800002592",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002591",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.54%20PM_2608181038478619.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.54%20PM_2608181038478619.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2591",
    "source_url": "https://greenishtradeltd.com/products/26081800002591",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002590",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(1)_2608181037285929.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(1)_2608181037285929.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2590",
    "source_url": "https://greenishtradeltd.com/products/26081800002590",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002589",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(2)_2608181036101890.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.55%20PM%20(2)_2608181036101890.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2589",
    "source_url": "https://greenishtradeltd.com/products/26081800002589",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002588",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.55%20PM_2608181034571521.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.55%20PM_2608181034571521.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2588",
    "source_url": "https://greenishtradeltd.com/products/26081800002588",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002587",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(1)_2608181033473111.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(1)_2608181033473111.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2587",
    "source_url": "https://greenishtradeltd.com/products/26081800002587",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002586",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(2)_2608181032174519.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(2)_2608181032174519.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2586",
    "source_url": "https://greenishtradeltd.com/products/26081800002586",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002585",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(3)_2608181031024951.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM%20(3)_2608181031024951.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2585",
    "source_url": "https://greenishtradeltd.com/products/26081800002585",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002584",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM_2608181029455502.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.56%20PM_2608181029455502.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2584",
    "source_url": "https://greenishtradeltd.com/products/26081800002584",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002583",
    "title": "Premium Oxford Cotton Slim Fit Formal Shirt for Men",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "শার্ট",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 41,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.57%20PM%20(1)_2608181028214545.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-15%20at%209.27.57%20PM%20(1)_2608181028214545.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-1-2583",
    "source_url": "https://greenishtradeltd.com/products/26081800002583",
    "description": "Premium Oxford Cotton Slim Fit Formal Shirt for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002642",
    "title": "Mesh Athletic Tank Top",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 160,
    "retail_price": 410,
    "regular_price": 533,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.19.19%20(1)_2608301621343662.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.19.19%20(1)_2608301621343662.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2642",
    "source_url": "https://greenishtradeltd.com/products/26083000002642",
    "description": "Mesh Athletic Tank Top - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002640",
    "title": "Mesh Athletic Tank Top",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 160,
    "retail_price": 410,
    "regular_price": 533,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.15.04%20(1)_2608301618346589.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.15.04%20(1)_2608301618346589.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2640",
    "source_url": "https://greenishtradeltd.com/products/26083000002640",
    "description": "Mesh Athletic Tank Top - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002637",
    "title": "Mesh Athletic Tank Top",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 160,
    "retail_price": 410,
    "regular_price": 533,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.11.08_2608301614047144.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.11.08_2608301614047144.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2637",
    "source_url": "https://greenishtradeltd.com/products/26083000002637",
    "description": "Mesh Athletic Tank Top - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082400002621",
    "title": "🔥 New York Sports 61 Varsity Mesh Athletic Tank Top",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 160,
    "retail_price": 410,
    "regular_price": 533,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgfbhgfb_2608241712282330.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgfbhgfb_2608241712282330.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2621",
    "source_url": "https://greenishtradeltd.com/products/26082400002621",
    "description": "🔥 New York Sports 61 Varsity Mesh Athletic Tank Top - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082300002620",
    "title": "Borcelle Speed Racing Athletic Mesh T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FFDGVRFDV_2608232052552074.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FFDGVRFDV_2608232052552074.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2620",
    "source_url": "https://greenishtradeltd.com/products/26082300002620",
    "description": "Borcelle Speed Racing Athletic Mesh T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082300002619",
    "title": "Black &amp; Red Contrast Raglan T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 210,
    "retail_price": 460,
    "regular_price": 598,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-22%20at%2011.28.48%20AM%20(4)_2608232046221097.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-22%20at%2011.28.48%20AM%20(4)_2608232046221097.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2619",
    "source_url": "https://greenishtradeltd.com/products/26082300002619",
    "description": "Black &amp; Red Contrast Raglan T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082300002618",
    "title": "Navy Blue &amp; White Contrast Raglan T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 210,
    "retail_price": 460,
    "regular_price": 598,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-22%20at%2011.28.48%20AM%20(3)_2608232043273807.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-22%20at%2011.28.48%20AM%20(3)_2608232043273807.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2618",
    "source_url": "https://greenishtradeltd.com/products/26082300002618",
    "description": "Navy Blue &amp; White Contrast Raglan T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082300002617",
    "title": "Beige &amp; White Wing Logo Raglan T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 210,
    "retail_price": 460,
    "regular_price": 598,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-23%20at%2012.28.48%20AM_2608241904450761.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-23%20at%2012.28.48%20AM_2608241904450761.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-2617",
    "source_url": "https://greenishtradeltd.com/products/26082300002617",
    "description": "Beige &amp; White Wing Logo Raglan T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060500001976",
    "title": "World Cup Classic T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 175,
    "retail_price": 425,
    "regular_price": 553,
    "stock": 50,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.37.18%20PM%20(1)_2606052210563469.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.37.18%20PM%20(1)_2606052210563469.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-1976",
    "source_url": "https://greenishtradeltd.com/products/26060500001976",
    "description": "World Cup Classic T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060500001975",
    "title": "“Rag Korla” Viral White Premium T-Shirt Collection",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 50,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.33.25%20PM_2606052205324013.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.33.25%20PM_2606052205324013.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-1975",
    "source_url": "https://greenishtradeltd.com/products/26060500001975",
    "description": "“Rag Korla” Viral White Premium T-Shirt Collection - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060500001974",
    "title": "“Rag Korla” Viral White Premium T-Shirt Collection",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 50,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.33.24%20PM%20(2)_2606052202282614.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.33.24%20PM%20(2)_2606052202282614.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-1974",
    "source_url": "https://greenishtradeltd.com/products/26060500001974",
    "description": "“Rag Korla” Viral White Premium T-Shirt Collection - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060500001973",
    "title": "“Rag Korla” Viral White Premium T-Shirt Collection",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "বেসিক টি-শার্ট",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 50,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.33.24%20PM%20(1)_2606052159327256.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-05%20at%2012.33.24%20PM%20(1)_2606052159327256.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-2-1973",
    "source_url": "https://greenishtradeltd.com/products/26060500001973",
    "description": "“Rag Korla” Viral White Premium T-Shirt Collection - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (বেসিক টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002759",
    "title": "🤎 Premium Coffee Color Polo T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 310,
    "retail_price": 560,
    "regular_price": 728,
    "stock": 28,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2023.01.05_2609160545521692.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2023.01.05_2609160545521692.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2759",
    "source_url": "https://greenishtradeltd.com/products/26091600002759",
    "description": "🤎 Premium Coffee Color Polo T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002758",
    "title": "💙 Premium Navy Blue Polo T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 310,
    "retail_price": 560,
    "regular_price": 728,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2022.59.00_2609160539159097.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2022.59.00_2609160539159097.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2758",
    "source_url": "https://greenishtradeltd.com/products/26091600002758",
    "description": "💙 Premium Navy Blue Polo T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002757",
    "title": "🖤 Premium Polo T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 310,
    "retail_price": 560,
    "regular_price": 728,
    "stock": 29,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2022.56.29_2609160532483920.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2022.56.29_2609160532483920.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2757",
    "source_url": "https://greenishtradeltd.com/products/26091600002757",
    "description": "🖤 Premium Polo T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002756",
    "title": "🖤 Premium Polo T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 310,
    "retail_price": 560,
    "regular_price": 728,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2022.54.15_2609160529446463.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2022.54.15_2609160529446463.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2756",
    "source_url": "https://greenishtradeltd.com/products/26091600002756",
    "description": "🖤 Premium Polo T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002573",
    "title": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 230,
    "retail_price": 480,
    "regular_price": 624,
    "stock": 24,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.01_2608161622179044.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.01_2608161622179044.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2573",
    "source_url": "https://greenishtradeltd.com/products/26081600002573",
    "description": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002572",
    "title": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 230,
    "retail_price": 480,
    "regular_price": 624,
    "stock": 23,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.01%20(1)_2608161620286097.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.01%20(1)_2608161620286097.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2572",
    "source_url": "https://greenishtradeltd.com/products/26081600002572",
    "description": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002571",
    "title": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 230,
    "retail_price": 480,
    "regular_price": 624,
    "stock": 36,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.02_2608161617516651.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.02_2608161617516651.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2571",
    "source_url": "https://greenishtradeltd.com/products/26081600002571",
    "description": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002570",
    "title": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 230,
    "retail_price": 480,
    "regular_price": 624,
    "stock": 34,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.02%20(1)_2608161616051809.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.02%20(1)_2608161616051809.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2570",
    "source_url": "https://greenishtradeltd.com/products/26081600002570",
    "description": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002569",
    "title": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 230,
    "retail_price": 480,
    "regular_price": 624,
    "stock": 31,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.02%20(2)_2608161614122494.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.02%20(2)_2608161614122494.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2569",
    "source_url": "https://greenishtradeltd.com/products/26081600002569",
    "description": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002568",
    "title": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পোলো টি-শার্ট",
    "reseller_price": 230,
    "retail_price": 480,
    "regular_price": 624,
    "stock": 33,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.03_2608161607082461.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2021.54.03_2608161607082461.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-3-2568",
    "source_url": "https://greenishtradeltd.com/products/26081600002568",
    "description": "🌿 প্রিমিয়াম জিপার কলার টি-শার্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পোলো টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002581",
    "title": "Popcorn Diamond Pattern Panjabi Seagreen",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 41,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.05_2608161826232867.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.05_2608161826232867.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2581",
    "source_url": "https://greenishtradeltd.com/products/26081600002581",
    "description": "Popcorn Diamond Pattern Panjabi Seagreen - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002580",
    "title": "Popcorn Diamond Pattern Panjabi White",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.05%20(2)_2608161822265704.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.05%20(2)_2608161822265704.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2580",
    "source_url": "https://greenishtradeltd.com/products/26081600002580",
    "description": "Popcorn Diamond Pattern Panjabi White - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002579",
    "title": "Popcorn Diamond Pattern Panjabi Black",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.05%20(1)_2608161819312889.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.05%20(1)_2608161819312889.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2579",
    "source_url": "https://greenishtradeltd.com/products/26081600002579",
    "description": "Popcorn Diamond Pattern Panjabi Black - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002578",
    "title": "Popcorn Diamond Pattern Panjabi Chocolate",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.04_2608161752220906.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.04_2608161752220906.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2578",
    "source_url": "https://greenishtradeltd.com/products/26081600002578",
    "description": "Popcorn Diamond Pattern Panjabi Chocolate - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002577",
    "title": "Popcorn Diamond Pattern Panjabi Brown",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 41,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.04%20(1)_2608161748504704.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.04%20(1)_2608161748504704.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2577",
    "source_url": "https://greenishtradeltd.com/products/26081600002577",
    "description": "Popcorn Diamond Pattern Panjabi Brown - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002369",
    "title": "এক্সক্লুসিভ ভাঙচুর কটন পাঞ্জাবি - কলার ও বুকে আকর্ষণীয় এমব্রয়ডারি ওয়ার্কসহ প্রিমিয়াম পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 650,
    "retail_price": 943,
    "regular_price": 1225,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2016.05.21_2607161043404490.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2016.05.21_2607161043404490.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2369",
    "source_url": "https://greenishtradeltd.com/products/26071600002369",
    "description": "এক্সক্লুসিভ ভাঙচুর কটন পাঞ্জাবি - কলার ও বুকে আকর্ষণীয় এমব্রয়ডারি ওয়ার্কসহ প্রিমিয়াম পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002368",
    "title": "এক্সক্লুসিভ ভাঙচুর কটন পাঞ্জাবি - কলার ও বুকে আকর্ষণীয় এমব্রয়ডারি ওয়ার্কসহ প্রিমিয়াম পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 650,
    "retail_price": 943,
    "regular_price": 1225,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2016.05.22_2607161041365654.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2016.05.22_2607161041365654.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2368",
    "source_url": "https://greenishtradeltd.com/products/26071600002368",
    "description": "এক্সক্লুসিভ ভাঙচুর কটন পাঞ্জাবি - কলার ও বুকে আকর্ষণীয় এমব্রয়ডারি ওয়ার্কসহ প্রিমিয়াম পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002367",
    "title": "এক্সক্লুসিভ ভাঙচুর কটন পাঞ্জাবি - কলার ও বুকে আকর্ষণীয় এমব্রয়ডারি ওয়ার্কসহ প্রিমিয়াম পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 650,
    "retail_price": 943,
    "regular_price": 1225,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2016.05.23_2607161037485512.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2016.05.23_2607161037485512.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2367",
    "source_url": "https://greenishtradeltd.com/products/26071600002367",
    "description": "এক্সক্লুসিভ ভাঙচুর কটন পাঞ্জাবি - কলার ও বুকে আকর্ষণীয় এমব্রয়ডারি ওয়ার্কসহ প্রিমিয়াম পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002366",
    "title": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.29_2607161016594298.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.29_2607161016594298.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2366",
    "source_url": "https://greenishtradeltd.com/products/26071600002366",
    "description": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002365",
    "title": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.29%20(1)_2607161013408826.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.29%20(1)_2607161013408826.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2365",
    "source_url": "https://greenishtradeltd.com/products/26071600002365",
    "description": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002364",
    "title": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.29%20(2)_2607161011409220.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.29%20(2)_2607161011409220.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2364",
    "source_url": "https://greenishtradeltd.com/products/26071600002364",
    "description": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002363",
    "title": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "পাঞ্জাবি",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.30_2607161009306802.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-16%20at%2015.56.30_2607161009306802.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-5-2363",
    "source_url": "https://greenishtradeltd.com/products/26071600002363",
    "description": "প্রিমিয়াম ভাঙচুর কটন পাঞ্জাবি কালেকশন - পুরুষদের স্টাইলিশ সেমি-লং পাঞ্জাবি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002576",
    "title": "Formal Pant Deep Ash",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "প্যান্ট ও ট্রাউজার",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.49%20(2)_2608161658495793.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.49%20(2)_2608161658495793.jpeg"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "sku": "GRN-1-6-2576",
    "source_url": "https://greenishtradeltd.com/products/26081600002576",
    "description": "Formal Pant Deep Ash - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (প্যান্ট ও ট্রাউজার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002575",
    "title": "Formal Pant Light chocolate",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "প্যান্ট ও ট্রাউজার",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.49%20(1)_2608161655125402.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.49%20(1)_2608161655125402.jpeg"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "sku": "GRN-1-6-2575",
    "source_url": "https://greenishtradeltd.com/products/26081600002575",
    "description": "Formal Pant Light chocolate - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (প্যান্ট ও ট্রাউজার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081600002574",
    "title": "Formal Pants Pure Black",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "প্যান্ট ও ট্রাউজার",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.49_2608161651209646.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-16%20at%2000.43.49_2608161651209646.jpeg"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "sku": "GRN-1-6-2574",
    "source_url": "https://greenishtradeltd.com/products/26081600002574",
    "description": "Formal Pants Pure Black - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (প্যান্ট ও ট্রাউজার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061900002078",
    "title": "Men’s Stylish Denim Jeans",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "প্যান্ট ও ট্রাউজার",
    "reseller_price": 630,
    "retail_price": 914,
    "regular_price": 1188,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftttt5r_2606192022582016.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftttt5r_2606192022582016.jpg"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "sku": "GRN-1-6-2078",
    "source_url": "https://greenishtradeltd.com/products/26061900002078",
    "description": "Men’s Stylish Denim Jeans - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (প্যান্ট ও ট্রাউজার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061900002077",
    "title": "ব্ল্যাক ডেনিম জগার",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "প্যান্ট ও ট্রাউজার",
    "reseller_price": 620,
    "retail_price": 899,
    "regular_price": 1169,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fryrrr_2606192010074750.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fryrrr_2606192010074750.jpg"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "sku": "GRN-1-6-2077",
    "source_url": "https://greenishtradeltd.com/products/26061900002077",
    "description": "ব্ল্যাক ডেনিম জগার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (প্যান্ট ও ট্রাউজার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061900002076",
    "title": "গ্রে ডেনিম জগার প্যান্ট – রিল্যাক্স ফিট হোয়াইট ড্রস্ট্রিং",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "প্যান্ট ও ট্রাউজার",
    "reseller_price": 630,
    "retail_price": 914,
    "regular_price": 1188,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjy_2606191953544873.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjy_2606191953544873.jpg"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "sku": "GRN-1-6-2076",
    "source_url": "https://greenishtradeltd.com/products/26061900002076",
    "description": "গ্রে ডেনিম জগার প্যান্ট – রিল্যাক্স ফিট হোয়াইট ড্রস্ট্রিং - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (প্যান্ট ও ট্রাউজার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072500002459",
    "title": "Premium Light Green Halcyon 34 Varsity Drop Shoulder Cotton T-Shirt –",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F114_2607252015258122.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F114_2607252015258122.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-2459",
    "source_url": "https://greenishtradeltd.com/products/26072500002459",
    "description": "Premium Light Green Halcyon 34 Varsity Drop Shoulder Cotton T-Shirt – - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072500002458",
    "title": "Premium Trail Explorer Drop Shoulder Graphic  Cotton T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F112323_2607252010340202.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F112323_2607252010340202.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-2458",
    "source_url": "https://greenishtradeltd.com/products/26072500002458",
    "description": "Premium Trail Explorer Drop Shoulder Graphic  Cotton T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072500002457",
    "title": "Premium DAZY Tropical Palm Graphic Drop Shoulder T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_a8znmpa8znmpa8zn_2607252004067791.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_a8znmpa8znmpa8zn_2607252004067791.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-2457",
    "source_url": "https://greenishtradeltd.com/products/26072500002457",
    "description": "Premium DAZY Tropical Palm Graphic Drop Shoulder T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072500002456",
    "title": "Premium  Prada Milano olive green Signature Drop Shoulder T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_qlr6sqlr6sqlr6sq_2607252000084279.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_qlr6sqlr6sqlr6sq_2607252000084279.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-2456",
    "source_url": "https://greenishtradeltd.com/products/26072500002456",
    "description": "Premium  Prada Milano olive green Signature Drop Shoulder T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072500002455",
    "title": "Premium  Prada Milano Black Signature Drop Shoulder T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_geddkgeddkgeddkg_2607251956405319.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_geddkgeddkgeddkg_2607251956405319.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-2455",
    "source_url": "https://greenishtradeltd.com/products/26072500002455",
    "description": "Premium  Prada Milano Black Signature Drop Shoulder T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072500002454",
    "title": "Premium  Prada Milano White Signature Drop Shoulder T-Shirt",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_naznnqnaznnqnazn_2607251947029144.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_naznnqnaznnqnazn_2607251947029144.jpg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-2454",
    "source_url": "https://greenishtradeltd.com/products/26072500002454",
    "description": "Premium  Prada Milano White Signature Drop Shoulder T-Shirt - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000563",
    "title": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.04_2604181951595906.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.04_2604181951595906.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-0563",
    "source_url": "https://greenishtradeltd.com/products/26041800000563",
    "description": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000555",
    "title": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.04%20(1)_2604181946332505.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.04%20(1)_2604181946332505.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-0555",
    "source_url": "https://greenishtradeltd.com/products/26041800000555",
    "description": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000554",
    "title": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.04%20(2)_2604181944351539.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.04%20(2)_2604181944351539.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-0554",
    "source_url": "https://greenishtradeltd.com/products/26041800000554",
    "description": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000553",
    "title": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.05_2604181942201790.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.05_2604181942201790.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-0553",
    "source_url": "https://greenishtradeltd.com/products/26041800000553",
    "description": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000551",
    "title": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.05%20(1)_2604181939549509.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.05%20(1)_2604181939549509.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-0551",
    "source_url": "https://greenishtradeltd.com/products/26041800000551",
    "description": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000550",
    "title": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "ড্রপশোল্ডার টি-শার্ট",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.05%20(2)_2604181937019967.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-19%20at%2001.16.05%20(2)_2604181937019967.jpeg"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sku": "GRN-1-55-0550",
    "source_url": "https://greenishtradeltd.com/products/26041800000550",
    "description": "প্রিমিয়াম ২২০+ GSM কম্বড কটন ড্রপশোল্ডার টি-শার্ট - আল্টিমেট স্ট্রিটওয়্যার কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (ড্রপশোল্ডার টি-শার্ট)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002505",
    "title": "Real Madrid 2026/27 থার্ড জার্সি – ডিপ রেড এডিশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.24.24%20AM_2608021731351215.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.24.24%20AM_2608021731351215.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2505",
    "source_url": "https://greenishtradeltd.com/products/26080200002505",
    "description": "Real Madrid 2026/27 থার্ড জার্সি – ডিপ রেড এডিশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002504",
    "title": "Puma Manchester City অ্যাওয়ে জার্সি – Etihad Airways Edition",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.27%20AM_2608021728228771.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.27%20AM_2608021728228771.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2504",
    "source_url": "https://greenishtradeltd.com/products/26080200002504",
    "description": "Puma Manchester City অ্যাওয়ে জার্সি – Etihad Airways Edition - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002503",
    "title": "Adidas Real Madrid 2025/26 হোম জার্সি – Emirates Fly Better Edition | প্রিমিয়াম ফুটবল জার্সি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.20%20AM%20(2)_2608021725092040.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.20%20AM%20(2)_2608021725092040.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2503",
    "source_url": "https://greenishtradeltd.com/products/26080200002503",
    "description": "Adidas Real Madrid 2025/26 হোম জার্সি – Emirates Fly Better Edition | প্রিমিয়াম ফুটবল জার্সি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002501",
    "title": "Puma Manchester City 2026/27 হোম জার্সি – স্কাই ব্লু গ্রেডিয়েন্ট এডিশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.20%20AM_2608021717497276.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.20%20AM_2608021717497276.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2501",
    "source_url": "https://greenishtradeltd.com/products/26080200002501",
    "description": "Puma Manchester City 2026/27 হোম জার্সি – স্কাই ব্লু গ্রেডিয়েন্ট এডিশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002500",
    "title": "Adidas Real Madrid 2011/12 অ্যাওয়ে জার্সি – ব্ল্যাক &amp; গোল্ড এডিশন",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.19%20AM_2608021715068535.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.19%20AM_2608021715068535.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2500",
    "source_url": "https://greenishtradeltd.com/products/26080200002500",
    "description": "Adidas Real Madrid 2011/12 অ্যাওয়ে জার্সি – ব্ল্যাক &amp; গোল্ড এডিশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002499",
    "title": "Manchester United 2026/27 হোম জার্সি – Snapdragon Edition | ক্লাসিক কলার ফুটবল জার্সি",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.18%20AM%20(1)_2608021712101976.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.18%20AM%20(1)_2608021712101976.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2499",
    "source_url": "https://greenishtradeltd.com/products/26080200002499",
    "description": "Manchester United 2026/27 হোম জার্সি – Snapdragon Edition | ক্লাসিক কলার ফুটবল জার্সি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002497",
    "title": "Puma AC Milan 2026/27 হোম জার্সি – Emirates Fly Better Edition",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.17%20AM%20(1)_2608021706001940.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.17%20AM%20(1)_2608021706001940.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2497",
    "source_url": "https://greenishtradeltd.com/products/26080200002497",
    "description": "Puma AC Milan 2026/27 হোম জার্সি – Emirates Fly Better Edition - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002496",
    "title": "Adidas AC Milan Vintage Football Jersey – Bwin Sponsor Edition",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.17%20AM_2608021702096564.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-02%20at%2012.23.17%20AM_2608021702096564.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-2496",
    "source_url": "https://greenishtradeltd.com/products/26080200002496",
    "description": "Adidas AC Milan Vintage Football Jersey – Bwin Sponsor Edition - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060600001986",
    "title": "World Cup Jersey",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.43%20(2)_2606062007354810.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.43%20(2)_2606062007354810.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-1986",
    "source_url": "https://greenishtradeltd.com/products/26060600001986",
    "description": "World Cup Jersey - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060600001985",
    "title": "World Cup Jersey",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.43%20(1)_2606062005350127.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.43%20(1)_2606062005350127.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-1985",
    "source_url": "https://greenishtradeltd.com/products/26060600001985",
    "description": "World Cup Jersey - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060600001984",
    "title": "World Cup Jersey",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.42_2606062003270367.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.42_2606062003270367.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-1984",
    "source_url": "https://greenishtradeltd.com/products/26060600001984",
    "description": "World Cup Jersey - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060600001983",
    "title": "World Cup Jersey",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "জার্সি",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.41_2606062001458948.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.31.41_2606062001458948.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-56-1983",
    "source_url": "https://greenishtradeltd.com/products/26060600001983",
    "description": "World Cup Jersey - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (জার্সি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002542",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.23%20PM%20(1)_2608061350506675.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.23%20PM%20(1)_2608061350506675.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2542",
    "source_url": "https://greenishtradeltd.com/products/26080600002542",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002541",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 38,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.33%20PM_2608061349068331.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.33%20PM_2608061349068331.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2541",
    "source_url": "https://greenishtradeltd.com/products/26080600002541",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002540",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 37,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.35%20PM_2608061347263897.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.35%20PM_2608061347263897.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2540",
    "source_url": "https://greenishtradeltd.com/products/26080600002540",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002539",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.36%20PM_2608061343480395.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.36%20PM_2608061343480395.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2539",
    "source_url": "https://greenishtradeltd.com/products/26080600002539",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002538",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 35,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.37%20PM%20(1)_2608061341572426.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.37%20PM%20(1)_2608061341572426.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2538",
    "source_url": "https://greenishtradeltd.com/products/26080600002538",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002537",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 35,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.35%20PM%20(1)_2608061339540524.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.35%20PM%20(1)_2608061339540524.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2537",
    "source_url": "https://greenishtradeltd.com/products/26080600002537",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002536",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 36,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.36%20PM%20(1)_2608061338096720.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.36%20PM%20(1)_2608061338096720.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2536",
    "source_url": "https://greenishtradeltd.com/products/26080600002536",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002535",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.21%20PM%20(1)_2608061335010313.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.21%20PM%20(1)_2608061335010313.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2535",
    "source_url": "https://greenishtradeltd.com/products/26080600002535",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002534",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 37,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.23%20PM_2608061333416795.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.23%20PM_2608061333416795.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2534",
    "source_url": "https://greenishtradeltd.com/products/26080600002534",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002533",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.24%20PM_2608061332129515.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.33.24%20PM_2608061332129515.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2533",
    "source_url": "https://greenishtradeltd.com/products/26080600002533",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002532",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 41,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.36%20PM%20(2)_2608061330394271.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.36%20PM%20(2)_2608061330394271.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2532",
    "source_url": "https://greenishtradeltd.com/products/26080600002532",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080600002531",
    "title": "💥 Exclusive Gift Combo Set For Boys 💥",
    "category_id": "1",
    "category_name": "জেন্টস ফ্যাশন",
    "subcategory": "Combo",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.37%20PM_2608061328536172.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-06%20at%206.35.37%20PM_2608061328536172.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-1-76-2531",
    "source_url": "https://greenishtradeltd.com/products/26080600002531",
    "description": "💥 Exclusive Gift Combo Set For Boys 💥 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: জেন্টস ফ্যাশন (Combo)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002905",
    "title": "👗𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐏𝐫𝐢𝐧𝐭𝐞𝐝 3 𝐏𝐢𝐞𝐜𝐞𝐬👗",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 730,
    "retail_price": 1059,
    "regular_price": 1376,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.39.19_2609201721035836.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-30%20at%2022.39.19_2609201721035836.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2905",
    "source_url": "https://greenishtradeltd.com/products/26092000002905",
    "description": "👗𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐏𝐫𝐢𝐧𝐭𝐞𝐝 3 𝐏𝐢𝐞𝐜𝐞𝐬👗 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002904",
    "title": "লেভেন্ডার  সুন্দরী ড্রেস",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 730,
    "retail_price": 1059,
    "regular_price": 1376,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-31%20at%2015.11.40_2609201716299670.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-31%20at%2015.11.40_2609201716299670.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2904",
    "source_url": "https://greenishtradeltd.com/products/26092000002904",
    "description": "লেভেন্ডার  সুন্দরী ড্রেস - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002903",
    "title": "👗𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐏𝐫𝐢𝐧𝐭𝐞𝐝 3 𝐏𝐢𝐞𝐜𝐞𝐬👗",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 730,
    "retail_price": 1059,
    "regular_price": 1376,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-02%20at%2019.46.07%20(1)_2609201710408776.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-02%20at%2019.46.07%20(1)_2609201710408776.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2903",
    "source_url": "https://greenishtradeltd.com/products/26092000002903",
    "description": "👗𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐏𝐫𝐢𝐧𝐭𝐞𝐝 3 𝐏𝐢𝐞𝐜𝐞𝐬👗 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002717",
    "title": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 740,
    "retail_price": 1073,
    "regular_price": 1395,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.20%20PM%20(1)_2609061937176416.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.20%20PM%20(1)_2609061937176416.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2717",
    "source_url": "https://greenishtradeltd.com/products/26090600002717",
    "description": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002716",
    "title": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 740,
    "retail_price": 1073,
    "regular_price": 1395,
    "stock": 29,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.21%20PM_2609061935417533.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.21%20PM_2609061935417533.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2716",
    "source_url": "https://greenishtradeltd.com/products/26090600002716",
    "description": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002715",
    "title": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 740,
    "retail_price": 1073,
    "regular_price": 1395,
    "stock": 29,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.21%20PM%20(1)_2609061934205225.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.21%20PM%20(1)_2609061934205225.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2715",
    "source_url": "https://greenishtradeltd.com/products/26090600002715",
    "description": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002714",
    "title": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 740,
    "retail_price": 1073,
    "regular_price": 1395,
    "stock": 32,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.20%20PM%20(2)_2609061932385023.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2010.25.20%20PM%20(2)_2609061932385023.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2714",
    "source_url": "https://greenishtradeltd.com/products/26090600002714",
    "description": "👗✨ Premium Pure Cotton Skin Print Gown 3-Piece Set ✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002690",
    "title": "🖤✨ Pakistan Inspired Black Dress – Traditional Chundri Print &amp; Lace Work ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 820,
    "retail_price": 1189,
    "regular_price": 1546,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.07.23%20PM%20(1)_2609051318313590.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.07.23%20PM%20(1)_2609051318313590.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2690",
    "source_url": "https://greenishtradeltd.com/products/26090500002690",
    "description": "🖤✨ Pakistan Inspired Black Dress – Traditional Chundri Print &amp; Lace Work ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002689",
    "title": "👗✨ Premium Cotton 3-Piece Dress – Full Skin Print Work ✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 760,
    "retail_price": 1102,
    "regular_price": 1433,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.04.12%20PM_2609051316024834.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.04.12%20PM_2609051316024834.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2689",
    "source_url": "https://greenishtradeltd.com/products/26090500002689",
    "description": "👗✨ Premium Cotton 3-Piece Dress – Full Skin Print Work ✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002688",
    "title": "Summer Black 3 Piece set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.05.18%20PM_2609051313169124.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.05.18%20PM_2609051313169124.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2688",
    "source_url": "https://greenishtradeltd.com/products/26090500002688",
    "description": "Summer Black 3 Piece set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002686",
    "title": "🖤✨ Pakistan Inspired Black Dress – Traditional Chundri Print &amp; Lace Work ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 820,
    "retail_price": 1189,
    "regular_price": 1546,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.07.24%20PM_2609051305261386.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.07.24%20PM_2609051305261386.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2686",
    "source_url": "https://greenishtradeltd.com/products/26090500002686",
    "description": "🖤✨ Pakistan Inspired Black Dress – Traditional Chundri Print &amp; Lace Work ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002685",
    "title": "💃✨ Premium Cotton 3-Piece Collection – Black Chiffon Dupatta &amp; Farshi Salwar ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "থ্রিপিস",
    "reseller_price": 800,
    "retail_price": 1160,
    "regular_price": 1508,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.06.37%20PM%20(1)_2609051301330003.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-05%20at%201.06.37%20PM%20(1)_2609051301330003.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-8-2685",
    "source_url": "https://greenishtradeltd.com/products/26090500002685",
    "description": "💃✨ Premium Cotton 3-Piece Collection – Black Chiffon Dupatta &amp; Farshi Salwar ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000497",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.22.35_2604180622216395.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.22.35_2604180622216395.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0497",
    "source_url": "https://greenishtradeltd.com/products/26041800000497",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000496",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.12_2604180619396405.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.12_2604180619396405.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0496",
    "source_url": "https://greenishtradeltd.com/products/26041800000496",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000495",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.11_2604180614521369.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.11_2604180614521369.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0495",
    "source_url": "https://greenishtradeltd.com/products/26041800000495",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000494",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.10_2604180610144247.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.10_2604180610144247.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0494",
    "source_url": "https://greenishtradeltd.com/products/26041800000494",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000493",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.10%20(2)_2604180608414073.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.10%20(2)_2604180608414073.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0493",
    "source_url": "https://greenishtradeltd.com/products/26041800000493",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000492",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.09%20(1)_2604180607158856.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.09%20(1)_2604180607158856.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0492",
    "source_url": "https://greenishtradeltd.com/products/26041800000492",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000491",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.08_2604180528519195.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.08_2604180528519195.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0491",
    "source_url": "https://greenishtradeltd.com/products/26041800000491",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000490",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.07_2604180527097688.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.07_2604180527097688.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0490",
    "source_url": "https://greenishtradeltd.com/products/26041800000490",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000489",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.06_2604180525181164.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.06_2604180525181164.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0489",
    "source_url": "https://greenishtradeltd.com/products/26041800000489",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000488",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.05%20(1)_2604180523394449.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.05%20(1)_2604180523394449.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0488",
    "source_url": "https://greenishtradeltd.com/products/26041800000488",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000487",
    "title": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "গাউন ও কুর্তি",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 11,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.04_2604180521510354.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2014.21.04_2604180521510354.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-9-0487",
    "source_url": "https://greenishtradeltd.com/products/26041800000487",
    "description": "এক্সক্লুসিভ চায়না এলেক্স ফেব্রিক মডার্ন টিউনিক ও প্যান্ট সেট (বেল্ট সহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (গাউন ও কুর্তি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000471",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.31%20(1)_2604170843093865.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.31%20(1)_2604170843093865.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0471",
    "source_url": "https://greenishtradeltd.com/products/26041700000471",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000470",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.32_2604170841575832.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.32_2604170841575832.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0470",
    "source_url": "https://greenishtradeltd.com/products/26041700000470",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000469",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.35%20(1)_2604170840174764.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.35%20(1)_2604170840174764.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0469",
    "source_url": "https://greenishtradeltd.com/products/26041700000469",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000468",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.36%20(2)_2604170838541203.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.36%20(2)_2604170838541203.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0468",
    "source_url": "https://greenishtradeltd.com/products/26041700000468",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000467",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.36_2604170837012278.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.36_2604170837012278.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0467",
    "source_url": "https://greenishtradeltd.com/products/26041700000467",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000465",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.37%20(1)_2604170630112247.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.37%20(1)_2604170630112247.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0465",
    "source_url": "https://greenishtradeltd.com/products/26041700000465",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041700000464",
    "title": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ)",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়েস্টার্ন ড্রেস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 20,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.38_2604170628283108.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-04-15%20at%2013.06.38_2604170628283108.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-11-0464",
    "source_url": "https://greenishtradeltd.com/products/26041700000464",
    "description": "প্রিমিয়াম চায়না এলেক্স ডিজিটাল প্রিন্টেড শার্ট স্টাইল টু-পিস(ফ্রি সাইজ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়েস্টার্ন ড্রেস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002822",
    "title": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 700,
    "retail_price": 1015,
    "regular_price": 1320,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.54_2609180553107079.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.54_2609180553107079.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2822",
    "source_url": "https://greenishtradeltd.com/products/26091800002822",
    "description": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002821",
    "title": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 700,
    "retail_price": 1015,
    "regular_price": 1320,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.54_2609180549401139.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.54_2609180549401139.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2821",
    "source_url": "https://greenishtradeltd.com/products/26091800002821",
    "description": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002820",
    "title": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 700,
    "retail_price": 1015,
    "regular_price": 1320,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.48%20(1)_2609180547322605.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.48%20(1)_2609180547322605.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2820",
    "source_url": "https://greenishtradeltd.com/products/26091800002820",
    "description": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002819",
    "title": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 700,
    "retail_price": 1015,
    "regular_price": 1320,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.48_2609180545472088.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.48_2609180545472088.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2819",
    "source_url": "https://greenishtradeltd.com/products/26091800002819",
    "description": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002818",
    "title": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 700,
    "retail_price": 1015,
    "regular_price": 1320,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.47_2609180543586089.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.47_2609180543586089.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2818",
    "source_url": "https://greenishtradeltd.com/products/26091800002818",
    "description": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002817",
    "title": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.46_2609180542225713.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.15.46_2609180542225713.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2817",
    "source_url": "https://greenishtradeltd.com/products/26091800002817",
    "description": "টাঙ্গাইল হাফসিল্ক শাড়ী– ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002816",
    "title": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.21_2609180540023997.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.21_2609180540023997.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2816",
    "source_url": "https://greenishtradeltd.com/products/26091800002816",
    "description": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002815",
    "title": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.20%20(1)_2609180538415183.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.20%20(1)_2609180538415183.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2815",
    "source_url": "https://greenishtradeltd.com/products/26091800002815",
    "description": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002814",
    "title": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.20_2609180537186725.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.20_2609180537186725.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2814",
    "source_url": "https://greenishtradeltd.com/products/26091800002814",
    "description": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002813",
    "title": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.19%20(1)_2609180535527154.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.19%20(1)_2609180535527154.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2813",
    "source_url": "https://greenishtradeltd.com/products/26091800002813",
    "description": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002812",
    "title": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.19_2609180534203028.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.19_2609180534203028.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2812",
    "source_url": "https://greenishtradeltd.com/products/26091800002812",
    "description": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002811",
    "title": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "শাড়ি",
    "reseller_price": 690,
    "retail_price": 1001,
    "regular_price": 1301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.18_2609180533026706.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.13.18_2609180533026706.jpeg"
    ],
    "sizes": [
      "১২ হাত বহর"
    ],
    "sku": "GRN-2-14-2811",
    "source_url": "https://greenishtradeltd.com/products/26091800002811",
    "description": "এক্সক্লুসিভ জাপানি সিল্ক শাড়ী – ম্যাচিং ব্লাউজ পিস ফ্রি✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (শাড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002687",
    "title": "✨অরিজিনাল দুবাই চেরি ফ্যাব্রিক টাইগার প্রিন্ট আবায়া সেট✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1650,
    "retail_price": 2393,
    "regular_price": 3110,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2010.26.43%20PM%20(1)_2609051309125856.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2010.26.43%20PM%20(1)_2609051309125856.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2687",
    "source_url": "https://greenishtradeltd.com/products/26090500002687",
    "description": "✨অরিজিনাল দুবাই চেরি ফ্যাব্রিক টাইগার প্রিন্ট আবায়া সেট✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002682",
    "title": "✨অরিজিনাল দুবাই চেরি ফ্যাব্রিক টাইগার প্রিন্ট আবায়া সেট✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1650,
    "retail_price": 2393,
    "regular_price": 3110,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2010.26.43%20PM_2609051247539414.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2010.26.43%20PM_2609051247539414.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2682",
    "source_url": "https://greenishtradeltd.com/products/26090500002682",
    "description": "✨অরিজিনাল দুবাই চেরি ফ্যাব্রিক টাইগার প্রিন্ট আবায়া সেট✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002681",
    "title": "✨অরিজিনাল দুবাই চেরি ফ্যাব্রিক টাইগার প্রিন্ট আবায়া সেট✨",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1650,
    "retail_price": 2393,
    "regular_price": 3110,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2010.26.42%20PM%20(1)_2609051245338192.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2010.26.42%20PM%20(1)_2609051245338192.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2681",
    "source_url": "https://greenishtradeltd.com/products/26090500002681",
    "description": "✨অরিজিনাল দুবাই চেরি ফ্যাব্রিক টাইগার প্রিন্ট আবায়া সেট✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090400002680",
    "title": "🖤✨ আভায়া ইন কটি – অরিজিনাল দুবাই ফেব্রিক্স &amp; এমব্রয়ডারি কাজ ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1720,
    "retail_price": 2494,
    "regular_price": 3242,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.15.16%20AM%20(1)_2609041158339768.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.15.16%20AM%20(1)_2609041158339768.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2680",
    "source_url": "https://greenishtradeltd.com/products/26090400002680",
    "description": "🖤✨ আভায়া ইন কটি – অরিজিনাল দুবাই ফেব্রিক্স &amp; এমব্রয়ডারি কাজ ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090400002679",
    "title": "🖤✨ এক্সক্লুসিভ অরিজিনাল দুবাই বোরকা – কটি, ইনার &amp; কাজ করা হিজাবসহ ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1730,
    "retail_price": 2509,
    "regular_price": 3261,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.14.14%20AM_2609041151564431.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.14.14%20AM_2609041151564431.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2679",
    "source_url": "https://greenishtradeltd.com/products/26090400002679",
    "description": "🖤✨ এক্সক্লুসিভ অরিজিনাল দুবাই বোরকা – কটি, ইনার &amp; কাজ করা হিজাবসহ ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090400002678",
    "title": "🖤✨ অরিজিনাল 100% দুবাই ফেব্রিক্স এমব্রয়ডারি কটি বোরকা – ফুল সেট ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1360,
    "retail_price": 1972,
    "regular_price": 2564,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.13.12%20AM%20(1)_2609041145098208.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.13.12%20AM%20(1)_2609041145098208.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2678",
    "source_url": "https://greenishtradeltd.com/products/26090400002678",
    "description": "🖤✨ অরিজিনাল 100% দুবাই ফেব্রিক্স এমব্রয়ডারি কটি বোরকা – ফুল সেট ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090400002677",
    "title": "🖤✨ অরিজিনাল 100% দুবাই ফেব্রিক্স এমব্রয়ডারি কটি বোরকা – ফুল সেট ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1380,
    "retail_price": 2001,
    "regular_price": 2601,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.13.12%20AM_2609041143300664.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.13.12%20AM_2609041143300664.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2677",
    "source_url": "https://greenishtradeltd.com/products/26090400002677",
    "description": "🖤✨ অরিজিনাল 100% দুবাই ফেব্রিক্স এমব্রয়ডারি কটি বোরকা – ফুল সেট ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090400002676",
    "title": "🖤✨ এক্সক্লুসিভ অরিজিনাল দুবাই বোরকা – কটি, ইনার &amp; হিজাবসহ ✨🖤",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 1700,
    "retail_price": 2465,
    "regular_price": 3205,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.11.31%20AM_2609041139521968.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-04%20at%2012.11.31%20AM_2609041139521968.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2676",
    "source_url": "https://greenishtradeltd.com/products/26090400002676",
    "description": "🖤✨ এক্সক্লুসিভ অরিজিনাল দুবাই বোরকা – কটি, ইনার &amp; হিজাবসহ ✨🖤 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072900002486",
    "title": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 2050,
    "retail_price": 2973,
    "regular_price": 3864,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.08%20AM_2607291852299684.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.08%20AM_2607291852299684.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2486",
    "source_url": "https://greenishtradeltd.com/products/26072900002486",
    "description": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072900002485",
    "title": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 2050,
    "retail_price": 2973,
    "regular_price": 3864,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.07%20AM%20(2)_2607291850564719.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.07%20AM%20(2)_2607291850564719.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2485",
    "source_url": "https://greenishtradeltd.com/products/26072900002485",
    "description": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072900002484",
    "title": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 2050,
    "retail_price": 2973,
    "regular_price": 3864,
    "stock": 26,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.07%20AM_2607291847594725.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.07%20AM_2607291847594725.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2484",
    "source_url": "https://greenishtradeltd.com/products/26072900002484",
    "description": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072900002483",
    "title": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "বোরকা",
    "reseller_price": 2050,
    "retail_price": 2973,
    "regular_price": 3864,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.06%20AM%20(2)_2607291845353488.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-29%20at%209.25.06%20AM%20(2)_2607291845353488.jpeg"
    ],
    "sizes": [
      "52",
      "54",
      "56"
    ],
    "sku": "GRN-2-15-2483",
    "source_url": "https://greenishtradeltd.com/products/26072900002483",
    "description": "✅ অরজিনাল দুবাই চেরী  রোজ কটি বোরকা+হিজাব - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (বোরকা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002208",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F736621685_122219742404323866_8454001158803415542_n_2607012057417692.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F736621685_122219742404323866_8454001158803415542_n_2607012057417692.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2208",
    "source_url": "https://greenishtradeltd.com/products/26070100002208",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002207",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F736420576_122219742548323866_6227257283388496409_n_2607012056285906.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F736420576_122219742548323866_6227257283388496409_n_2607012056285906.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2207",
    "source_url": "https://greenishtradeltd.com/products/26070100002207",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002206",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F737437983_122219742506323866_1618895707462882483_n_2607012050340028.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F737437983_122219742506323866_1618895707462882483_n_2607012050340028.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2206",
    "source_url": "https://greenishtradeltd.com/products/26070100002206",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002205",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F736832917_122219742374323866_6525526562245531021_n_2607012048343781.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F736832917_122219742374323866_6525526562245531021_n_2607012048343781.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2205",
    "source_url": "https://greenishtradeltd.com/products/26070100002205",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002204",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731137829_122219078900323866_5981507725281815189_n_2607012046134601.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731137829_122219078900323866_5981507725281815189_n_2607012046134601.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2204",
    "source_url": "https://greenishtradeltd.com/products/26070100002204",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002203",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731131525_122219078744323866_8321535264276486588_n_2607012045155219.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731131525_122219078744323866_8321535264276486588_n_2607012045155219.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2203",
    "source_url": "https://greenishtradeltd.com/products/26070100002203",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002202",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731093968_122219078696323866_7737695617492481885_n_2607012043579068.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731093968_122219078696323866_7737695617492481885_n_2607012043579068.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2202",
    "source_url": "https://greenishtradeltd.com/products/26070100002202",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002201",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731111623_122219078858323866_376665506477261029_n_2607012043031549.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731111623_122219078858323866_376665506477261029_n_2607012043031549.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2201",
    "source_url": "https://greenishtradeltd.com/products/26070100002201",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002200",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731199446_122219079050323866_2479580290183206673_n_2607012042016064.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731199446_122219079050323866_2479580290183206673_n_2607012042016064.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2200",
    "source_url": "https://greenishtradeltd.com/products/26070100002200",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002199",
    "title": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731423374_122219078960323866_4722717641165368732_n_2607012041014426.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731423374_122219078960323866_4722717641165368732_n_2607012041014426.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2199",
    "source_url": "https://greenishtradeltd.com/products/26070100002199",
    "description": "সুতি কাপড়ের স্টাইলিশ ওয়ানপিস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26063000002198",
    "title": "কটন সুতি কাপড়ের ওয়ানপিস",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 7,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731105054_122219078798323866_8888281203630242306_n_2606301806370764.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731105054_122219078798323866_8888281203630242306_n_2606301806370764.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2198",
    "source_url": "https://greenishtradeltd.com/products/26063000002198",
    "description": "কটন সুতি কাপড়ের ওয়ানপিস - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26063000002197",
    "title": "কটন সুতি কাপড়ের ওয়ানপিস",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "ওয়ান পিস",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731093471_122219079098323866_8296097004443956686_n_2606301802452325.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F731093471_122219079098323866_8296097004443956686_n_2606301802452325.jpg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-47-2197",
    "source_url": "https://greenishtradeltd.com/products/26063000002197",
    "description": "কটন সুতি কাপড়ের ওয়ানপিস - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (ওয়ান পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002902",
    "title": "🩸New Arrival 🩸 Co-Ord Set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 30,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2008.39.17_2609201703223240.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-07%20at%2008.39.17_2609201703223240.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2902",
    "source_url": "https://greenishtradeltd.com/products/26092000002902",
    "description": "🩸New Arrival 🩸 Co-Ord Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002643",
    "title": "Girls Light Pink Two Piece Co-Ord Set with Baggy Pants – Floral Appliqué &amp; Pom Pom Design | Free Size",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 530,
    "retail_price": 769,
    "regular_price": 999,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.38%20AM%20(1)_2608301621071535.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.38%20AM%20(1)_2608301621071535.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2643",
    "source_url": "https://greenishtradeltd.com/products/26083000002643",
    "description": "Girls Light Pink Two Piece Co-Ord Set with Baggy Pants – Floral Appliqué &amp; Pom Pom Design | Free Size - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002641",
    "title": "Girls Pink Two Piece Dress Set with Baggy Pants – 3D Floral &amp; Pom Pom Design | Free Size",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 530,
    "retail_price": 769,
    "regular_price": 999,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.38%20AM_2608301619106152.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.38%20AM_2608301619106152.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2641",
    "source_url": "https://greenishtradeltd.com/products/26083000002641",
    "description": "Girls Pink Two Piece Dress Set with Baggy Pants – 3D Floral &amp; Pom Pom Design | Free Size - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002639",
    "title": "Girls Mint Green Two Piece Dress Set with Baggy Pants – 3D Floral &amp; Pom Pom Design | Free Size",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 530,
    "retail_price": 769,
    "regular_price": 999,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.37%20AM%20(2)_2608301615355962.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.37%20AM%20(2)_2608301615355962.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2639",
    "source_url": "https://greenishtradeltd.com/products/26083000002639",
    "description": "Girls Mint Green Two Piece Dress Set with Baggy Pants – 3D Floral &amp; Pom Pom Design | Free Size - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002638",
    "title": "Girls Beige Two Piece Tunic &amp; Baggy Pants Set – Floral Applique &amp; Pom Pom Design | Free Size",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 530,
    "retail_price": 769,
    "regular_price": 999,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.37%20AM_2608301613015032.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.37%20AM_2608301613015032.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2638",
    "source_url": "https://greenishtradeltd.com/products/26083000002638",
    "description": "Girls Beige Two Piece Tunic &amp; Baggy Pants Set – Floral Applique &amp; Pom Pom Design | Free Size - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26083000002636",
    "title": "Women’s Dark Green Two Piece Dress Set with Baggy Pants – Stylish Printed Tunic &amp; Trousers",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 530,
    "retail_price": 769,
    "regular_price": 999,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.36%20AM_2608301610322574.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-28%20at%209.42.36%20AM_2608301610322574.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2636",
    "source_url": "https://greenishtradeltd.com/products/26083000002636",
    "description": "Women’s Dark Green Two Piece Dress Set with Baggy Pants – Stylish Printed Tunic &amp; Trousers - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072100002404",
    "title": "Premium  Orange Floral Printed Button-Down Tunic 2-Piece Set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM%20(1)_2607211920311297.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM%20(1)_2607211920311297.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2404",
    "source_url": "https://greenishtradeltd.com/products/26072100002404",
    "description": "Premium  Orange Floral Printed Button-Down Tunic 2-Piece Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072100002403",
    "title": "Premium Black &amp; White Floral Printed Cotton Blend Co-Ord Set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM%20(2)_2607211918017081.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM%20(2)_2607211918017081.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2403",
    "source_url": "https://greenishtradeltd.com/products/26072100002403",
    "description": "Premium Black &amp; White Floral Printed Cotton Blend Co-Ord Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072100002402",
    "title": "Premium Sunflower Printed Co-Ord Set 2-Piece Set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM%20(3)_2607211915425402.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM%20(3)_2607211915425402.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2402",
    "source_url": "https://greenishtradeltd.com/products/26072100002402",
    "description": "Premium Sunflower Printed Co-Ord Set 2-Piece Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072100002401",
    "title": "Bansari Turquoise Abstract Floral Printed Long Shirt Set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM_2607211913325216.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.07%20AM_2607211913325216.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2401",
    "source_url": "https://greenishtradeltd.com/products/26072100002401",
    "description": "Bansari Turquoise Abstract Floral Printed Long Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072100002400",
    "title": "Premium Dark Blue London Valeria Floral Printed Dress",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.08%20AM%20(1)_2607211911336274.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.08%20AM%20(1)_2607211911336274.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2400",
    "source_url": "https://greenishtradeltd.com/products/26072100002400",
    "description": "Premium Dark Blue London Valeria Floral Printed Dress - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072100002399",
    "title": "Mirchi Fashion Black &amp; White Floral Printed Cotton Co-Ord Set",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "টু পিস",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.08%20AM%20(2)_2607211857254272.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-17%20at%201.00.08%20AM%20(2)_2607211857254272.jpeg"
    ],
    "sizes": [
      "Free Size",
      "38",
      "40",
      "42",
      "44"
    ],
    "sku": "GRN-2-48-2399",
    "source_url": "https://greenishtradeltd.com/products/26072100002399",
    "description": "Mirchi Fashion Black &amp; White Floral Printed Cotton Co-Ord Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (টু পিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082000002615",
    "title": "Women’s Elegant Grey Leather Strap Quartz Watch – White Dial with Silver-Tone Case",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "মেয়েদের ঘড়ি",
    "reseller_price": 460,
    "retail_price": 667,
    "regular_price": 867,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftgtrfgreg_2608201842252027.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftgtrfgreg_2608201842252027.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-74-2615",
    "source_url": "https://greenishtradeltd.com/products/26082000002615",
    "description": "Women’s Elegant Grey Leather Strap Quartz Watch – White Dial with Silver-Tone Case - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (মেয়েদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082000002614",
    "title": "Women’s Rose Gold Minimalist Analog Watch – Elegant Clean Dial with Matching Metallic Leather Strap",
    "category_id": "2",
    "category_name": "লেডিস ফ্যাশন",
    "subcategory": "মেয়েদের ঘড়ি",
    "reseller_price": 460,
    "retail_price": 667,
    "regular_price": 867,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhy_2608201836550970.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhy_2608201836550970.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-2-74-2614",
    "source_url": "https://greenishtradeltd.com/products/26082000002614",
    "description": "Women’s Rose Gold Minimalist Analog Watch – Elegant Clean Dial with Matching Metallic Leather Strap - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: লেডিস ফ্যাশন (মেয়েদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002467",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.57%20PM_2607261905246961.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.57%20PM_2607261905246961.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2467",
    "source_url": "https://greenishtradeltd.com/products/26072600002467",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002466",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 59,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.57%20PM_2607261900551061.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.57%20PM_2607261900551061.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2466",
    "source_url": "https://greenishtradeltd.com/products/26072600002466",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002465",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.57%20PM%20(1)_2607261859198890.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.57%20PM%20(1)_2607261859198890.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2465",
    "source_url": "https://greenishtradeltd.com/products/26072600002465",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002464",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.56%20PM_2607261857316424.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.56%20PM_2607261857316424.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2464",
    "source_url": "https://greenishtradeltd.com/products/26072600002464",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002463",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.55%20PM_2607261855536745.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.55%20PM_2607261855536745.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2463",
    "source_url": "https://greenishtradeltd.com/products/26072600002463",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002462",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.55%20PM%20(1)_2607261853486870.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.55%20PM%20(1)_2607261853486870.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2462",
    "source_url": "https://greenishtradeltd.com/products/26072600002462",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002446",
    "title": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.03%20PM%20(2)_2607231637404520.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.03%20PM%20(2)_2607231637404520.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2446",
    "source_url": "https://greenishtradeltd.com/products/26072300002446",
    "description": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002445",
    "title": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.03%20PM%20(1)_2607231622374486.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.03%20PM%20(1)_2607231622374486.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2445",
    "source_url": "https://greenishtradeltd.com/products/26072300002445",
    "description": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002444",
    "title": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.02%20PM_2607231621122400.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.02%20PM_2607231621122400.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2444",
    "source_url": "https://greenishtradeltd.com/products/26072300002444",
    "description": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002443",
    "title": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.02%20PM%20(1)_2607231620246136.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.02%20PM%20(1)_2607231620246136.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2443",
    "source_url": "https://greenishtradeltd.com/products/26072300002443",
    "description": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002442",
    "title": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.01%20PM_2607231619281196.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.01%20PM_2607231619281196.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2442",
    "source_url": "https://greenishtradeltd.com/products/26072300002442",
    "description": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002441",
    "title": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "ছেলে বাচ্চা আইটেম",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.00%20PM_2607231615360658.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.00%20PM_2607231615360658.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-19-2441",
    "source_url": "https://greenishtradeltd.com/products/26072300002441",
    "description": "Premium Soft Cotton Kids Denim Jeans Pant &amp; Cotton T-Shirt Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (ছেলে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002478",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.45%20PM_2607261940283254.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.45%20PM_2607261940283254.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2478",
    "source_url": "https://greenishtradeltd.com/products/26072600002478",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002477",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.42%20PM_2607261939005414.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.42%20PM_2607261939005414.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2477",
    "source_url": "https://greenishtradeltd.com/products/26072600002477",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002476",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.42%20PM%20(1)_2607261934047463.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.42%20PM%20(1)_2607261934047463.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2476",
    "source_url": "https://greenishtradeltd.com/products/26072600002476",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002475",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.41%20PM_2607261924126305.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.41%20PM_2607261924126305.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2475",
    "source_url": "https://greenishtradeltd.com/products/26072600002475",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002474",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.41%20PM%20(2)_2607261922188145.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.41%20PM%20(2)_2607261922188145.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2474",
    "source_url": "https://greenishtradeltd.com/products/26072600002474",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002473",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.41%20PM%20(1)_2607261920213912.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.41%20PM%20(1)_2607261920213912.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2473",
    "source_url": "https://greenishtradeltd.com/products/26072600002473",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002472",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.40%20PM_2607261918147638.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.40%20PM_2607261918147638.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2472",
    "source_url": "https://greenishtradeltd.com/products/26072600002472",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002471",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.40%20PM%20(2)_2607261916235435.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.40%20PM%20(2)_2607261916235435.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2471",
    "source_url": "https://greenishtradeltd.com/products/26072600002471",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002470",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.40%20PM%20(1)_2607261914527102.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.40%20PM%20(1)_2607261914527102.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2470",
    "source_url": "https://greenishtradeltd.com/products/26072600002470",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002469",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 60,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.39%20PM_2607261913226887.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.39%20PM_2607261913226887.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2469",
    "source_url": "https://greenishtradeltd.com/products/26072600002469",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002468",
    "title": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 62,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.38%20PM_2607261911177167.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.42.38%20PM_2607261911177167.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2468",
    "source_url": "https://greenishtradeltd.com/products/26072600002468",
    "description": "Premium Soft Cotton Girls Long T-Shirt &amp; Pant Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072600002461",
    "title": "Premium Soft Peach Finish Baby Cotton Romper Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "মেয়ে বাচ্চা আইটেম",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 61,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.48%20PM_2607261851168721.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%209.41.48%20PM_2607261851168721.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-20-2461",
    "source_url": "https://greenishtradeltd.com/products/26072600002461",
    "description": "Premium Soft Peach Finish Baby Cotton Romper Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (মেয়ে বাচ্চা আইটেম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090500002693",
    "title": "খাঁচা আকৃতির মিউজিক্যাল বার্ড টয় | ঝুলানো ব্যাটারিচালিত পাখির খেলনা শিশুদের জন্য",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 280,
    "retail_price": 530,
    "regular_price": 689,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(29)_2609051714460258.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(29)_2609051714460258.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2693",
    "source_url": "https://greenishtradeltd.com/products/26090500002693",
    "description": "খাঁচা আকৃতির মিউজিক্যাল বার্ড টয় | ঝুলানো ব্যাটারিচালিত পাখির খেলনা শিশুদের জন্য - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080400002521",
    "title": "Kids Learning Combo Set – 58 Pages Intelligence Book + Water Activity Book + Flash Cards + 8.5&quot; Multi Color LCD Writing Tablet",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 860,
    "retail_price": 1247,
    "regular_price": 1621,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-04%20at%2010.40.28%20AM_2608041805500328.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-04%20at%2010.40.28%20AM_2608041805500328.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2521",
    "source_url": "https://greenishtradeltd.com/products/26080400002521",
    "description": "Kids Learning Combo Set – 58 Pages Intelligence Book + Water Activity Book + Flash Cards + 8.5&quot; Multi Color LCD Writing Tablet - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080400002520",
    "title": "Kids Intelligence Learning Combo Set – 58 Pages Intelligence Book + Water Activity Book + 8.5&quot; Multi Color LCD Writing Tablet",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 830,
    "retail_price": 1204,
    "regular_price": 1565,
    "stock": 710,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-04%20at%2010.40.28%20AM_2608041801406269.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-04%20at%2010.40.28%20AM_2608041801406269.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2520",
    "source_url": "https://greenishtradeltd.com/products/26080400002520",
    "description": "Kids Intelligence Learning Combo Set – 58 Pages Intelligence Book + Water Activity Book + 8.5&quot; Multi Color LCD Writing Tablet - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071400002320",
    "title": "Huanger ৭ পিস নিউবর্ন বেবি র‍্যাটল ও টিথার সেট",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 1160,
    "retail_price": 1682,
    "regular_price": 2187,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftgtf_2607141742568034.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftgtf_2607141742568034.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2320",
    "source_url": "https://greenishtradeltd.com/products/26071400002320",
    "description": "Huanger ৭ পিস নিউবর্ন বেবি র‍্যাটল ও টিথার সেট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071400002319",
    "title": "Mini Bunny ইনফ্ল্যাটেবল বেবি ওয়াটার প্লে ম্যাট – ২৫.৫ ইঞ্চি ওশান থিম টামি টাইম সেন্সরি অ্যাক্টিভিটি প্যাড",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-14%20at%202.14.33%20AM_2607141725315294.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-14%20at%202.14.33%20AM_2607141725315294.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2319",
    "source_url": "https://greenishtradeltd.com/products/26071400002319",
    "description": "Mini Bunny ইনফ্ল্যাটেবল বেবি ওয়াটার প্লে ম্যাট – ২৫.৫ ইঞ্চি ওশান থিম টামি টাইম সেন্সরি অ্যাক্টিভিটি প্যাড - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070700002242",
    "title": "পোর্টেবল লাইটওয়েট ফোল্ডিং বেবি স্ট্রোলার - ছোট বাচ্চাদের ভ্রমণের জন্য সেফটি গার্ডসহ ম্যাজিক স্ট্রোলার",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 3850,
    "retail_price": 5583,
    "regular_price": 7257,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-02%20at%2023.23.10_2607070703156207.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-02%20at%2023.23.10_2607070703156207.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2242",
    "source_url": "https://greenishtradeltd.com/products/26070700002242",
    "description": "পোর্টেবল লাইটওয়েট ফোল্ডিং বেবি স্ট্রোলার - ছোট বাচ্চাদের ভ্রমণের জন্য সেফটি গার্ডসহ ম্যাজিক স্ট্রোলার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062400002144",
    "title": "📚🎨 Intelligence Learning Book (58 Pages) + Magnetic Drawing Board Combo Set",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 850,
    "retail_price": 1233,
    "regular_price": 1602,
    "stock": 1,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytujhyr_2606241816160760.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytujhyr_2606241816160760.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2144",
    "source_url": "https://greenishtradeltd.com/products/26062400002144",
    "description": "📚🎨 Intelligence Learning Book (58 Pages) + Magnetic Drawing Board Combo Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062100002092",
    "title": "ওয়াটারপ্রুফ সিলিকন বেবি বিব - বাচ্চাদের খাবার খাওয়ার সময় জামা সুরক্ষিত রাখার পকেট বিব",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 120,
    "retail_price": 370,
    "regular_price": 481,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-01%20at%2001.33.06%20(1)_2606211449510327.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-01%20at%2001.33.06%20(1)_2606211449510327.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2092",
    "source_url": "https://greenishtradeltd.com/products/26062100002092",
    "description": "ওয়াটারপ্রুফ সিলিকন বেবি বিব - বাচ্চাদের খাবার খাওয়ার সময় জামা সুরক্ষিত রাখার পকেট বিব - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062100002091",
    "title": "প্রিমিয়াম সিলিকন বেবি ফ্রুট ফিডার এবং নিপলার - বাচ্চাদের ফল ও জুস খাওয়ার নিরাপদ চুষনি",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 100,
    "retail_price": 350,
    "regular_price": 455,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-01%20at%2001.33.05%20(2)_2606211442045679.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-01%20at%2001.33.05%20(2)_2606211442045679.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2091",
    "source_url": "https://greenishtradeltd.com/products/26062100002091",
    "description": "প্রিমিয়াম সিলিকন বেবি ফ্রুট ফিডার এবং নিপলার - বাচ্চাদের ফল ও জুস খাওয়ার নিরাপদ চুষনি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062100002087",
    "title": "Exclusive Baby Set(100% Cotton fabrics)",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 265,
    "retail_price": 515,
    "regular_price": 670,
    "stock": 120,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.32.50_2606211422225342.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-04%20at%2014.32.50_2606211422225342.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2087",
    "source_url": "https://greenishtradeltd.com/products/26062100002087",
    "description": "Exclusive Baby Set(100% Cotton fabrics) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062100002083",
    "title": "প্রিমিয়াম বেবি বাউন্সার এবং রকার চেয়ার - ছোট বাচ্চাদের আরামদায়ক খেলার ও ঘুমানোর দোলনা (খেলনাসহ)",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 6,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-21%20at%2019.36.39_2606211402199386.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-21%20at%2019.36.39_2606211402199386.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2083",
    "source_url": "https://greenishtradeltd.com/products/26062100002083",
    "description": "প্রিমিয়াম বেবি বাউন্সার এবং রকার চেয়ার - ছোট বাচ্চাদের আরামদায়ক খেলার ও ঘুমানোর দোলনা (খেলনাসহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062100002082",
    "title": "প্রিমিয়াম বেবি বাউন্সার এবং রকার চেয়ার - ছোট বাচ্চাদের আরামদায়ক খেলার ও ঘুমানোর দোলনা (খেলনাসহ)",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "খেলনা",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-21%20at%2019.36.39%20(1)_2606211400282905.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-21%20at%2019.36.39%20(1)_2606211400282905.jpeg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-23-2082",
    "source_url": "https://greenishtradeltd.com/products/26062100002082",
    "description": "প্রিমিয়াম বেবি বাউন্সার এবং রকার চেয়ার - ছোট বাচ্চাদের আরামদায়ক খেলার ও ঘুমানোর দোলনা (খেলনাসহ) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (খেলনা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071700002378",
    "title": "Baby Premium Pillow | Soft &amp; Breathable Infant Head Support Pillow for Newborn &amp; Toddler",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "বেবি কেয়ার",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F205da836c53880fa06d6e183fbe0e0fd_2607171040504369.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F205da836c53880fa06d6e183fbe0e0fd_2607171040504369.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-69-2378",
    "source_url": "https://greenishtradeltd.com/products/26071700002378",
    "description": "Baby Premium Pillow | Soft &amp; Breathable Infant Head Support Pillow for Newborn &amp; Toddler - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (বেবি কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071700002377",
    "title": "Cute Bus Shape Kids Water Bottle with Straw &amp; Shoulder Strap | Leak-Proof Portable Drinking Bottle",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "বেবি কেয়ার",
    "reseller_price": 460,
    "retail_price": 667,
    "regular_price": 867,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F27b416f6c69579a42e3703cb0eb8365f_2607171031197903.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F27b416f6c69579a42e3703cb0eb8365f_2607171031197903.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-69-2377",
    "source_url": "https://greenishtradeltd.com/products/26071700002377",
    "description": "Cute Bus Shape Kids Water Bottle with Straw &amp; Shoulder Strap | Leak-Proof Portable Drinking Bottle - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (বেবি কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071700002376",
    "title": "Baby Electric Nail Trimmer | Safe Electric Nail File &amp; Polisher for Newborns, Infants &amp; Toddlers",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "বেবি কেয়ার",
    "reseller_price": 370,
    "retail_price": 620,
    "regular_price": 806,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytrghtb_2607171006192345.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytrghtb_2607171006192345.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-69-2376",
    "source_url": "https://greenishtradeltd.com/products/26071700002376",
    "description": "Baby Electric Nail Trimmer | Safe Electric Nail File &amp; Polisher for Newborns, Infants &amp; Toddlers - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (বেবি কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002360",
    "title": "পণ্যের নাম: JBD MS-733 Folding Baby Cradle – মেটাল বেবি ক্র্যাডল মশারি সহ",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "বেবি কেয়ার",
    "reseller_price": 1380,
    "retail_price": 2001,
    "regular_price": 2601,
    "stock": 20,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhut5g_2607160929235654.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhut5g_2607160929235654.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-69-2360",
    "source_url": "https://greenishtradeltd.com/products/26071600002360",
    "description": "পণ্যের নাম: JBD MS-733 Folding Baby Cradle – মেটাল বেবি ক্র্যাডল মশারি সহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (বেবি কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002359",
    "title": "JBD-SS 501 স্টেইনলেস স্টিল বেবি সুইং ক্র্যাডল – মশারি ও লকযোগ্য চাকা সহ (০–৩ বছর)",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "বেবি কেয়ার",
    "reseller_price": 2220,
    "retail_price": 3219,
    "regular_price": 4185,
    "stock": 20,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F062024081717815727_1716118403995_1716118396050_2607160902140753.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F062024081717815727_1716118403995_1716118396050_2607160902140753.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-69-2359",
    "source_url": "https://greenishtradeltd.com/products/26071600002359",
    "description": "JBD-SS 501 স্টেইনলেস স্টিল বেবি সুইং ক্র্যাডল – মশারি ও লকযোগ্য চাকা সহ (০–৩ বছর) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (বেবি কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070700002240",
    "title": "বাচ্চাদের প্রিমিয়াম কমোড স্টাইল পটি ট্রেইনার - ঢাকনাসহ মিনি বেবি পটি সিট",
    "category_id": "3",
    "category_name": "বেবি ফ্যাশন",
    "subcategory": "বেবি কেয়ার",
    "reseller_price": 2470,
    "retail_price": 3582,
    "regular_price": 4656,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fimages%20(23)_2607070555427342.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fimages%20(23)_2607070555427342.jpg"
    ],
    "sizes": [
      "0-6 মাস",
      "6-12 মাস",
      "1-2 বছর",
      "2-4 বছর"
    ],
    "sku": "GRN-3-69-2240",
    "source_url": "https://greenishtradeltd.com/products/26070700002240",
    "description": "বাচ্চাদের প্রিমিয়াম কমোড স্টাইল পটি ট্রেইনার - ঢাকনাসহ মিনি বেবি পটি সিট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: বেবি ফ্যাশন (বেবি কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002913",
    "title": "উইন্ডপ্রুফ অ্যান্টি-স্লিপ নাইলন ক্লোথসলাইন রোপ | Windproof Anti-Slip Nylon Clothesline Rope | বেড়া স্টাইল কাপড় শুকানোর দড়ি",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 100,
    "retail_price": 350,
    "regular_price": 455,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-21%20at%2013.38.15_2609210738421741.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-21%20at%2013.38.15_2609210738421741.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2913",
    "source_url": "https://greenishtradeltd.com/products/26092100002913",
    "description": "উইন্ডপ্রুফ অ্যান্টি-স্লিপ নাইলন ক্লোথসলাইন রোপ | Windproof Anti-Slip Nylon Clothesline Rope | বেড়া স্টাইল কাপড় শুকানোর দড়ি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002911",
    "title": "ইনভিজিবল রিট্র্যাক্টেবল ক্লোথসলাইন | Invisible Retractable Clothesline | ওয়াল-মাউন্টেড দেয়াল-টানা কাপড় শুকানোর দড়ি",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 850,
    "retail_price": 1233,
    "regular_price": 1602,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.02_2609210719095565.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.02_2609210719095565.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2911",
    "source_url": "https://greenishtradeltd.com/products/26092100002911",
    "description": "ইনভিজিবল রিট্র্যাক্টেবল ক্লোথসলাইন | Invisible Retractable Clothesline | ওয়াল-মাউন্টেড দেয়াল-টানা কাপড় শুকানোর দড়ি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002910",
    "title": "অ্যাডজাস্টেবল টেলিস্কোপিক ক্লথস হ্যাঙ্গিং রড | Adjustable Telescopic Clothes Rod | কাপড় ঝোলানোর রড ও স্পেস সেভিং র‍্যাক",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 970,
    "retail_price": 1407,
    "regular_price": 1828,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.01%20(1)_2609210706578819.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.01%20(1)_2609210706578819.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2910",
    "source_url": "https://greenishtradeltd.com/products/26092100002910",
    "description": "অ্যাডজাস্টেবল টেলিস্কোপিক ক্লথস হ্যাঙ্গিং রড | Adjustable Telescopic Clothes Rod | কাপড় ঝোলানোর রড ও স্পেস সেভিং র‍্যাক - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002907",
    "title": "২৪ ইন ১ প্রিসিশন ম্যাগনেটিক স্ক্রু-ড্রাইভার টুল সেট | 24-in-1 Precision Magnetic Screwdriver Set | মোবাইল ও ইলেকট্রনিক্স রিপেয়ার কিট",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.00_2609210643426853.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.00_2609210643426853.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2907",
    "source_url": "https://greenishtradeltd.com/products/26092100002907",
    "description": "২৪ ইন ১ প্রিসিশন ম্যাগনেটিক স্ক্রু-ড্রাইভার টুল সেট | 24-in-1 Precision Magnetic Screwdriver Set | মোবাইল ও ইলেকট্রনিক্স রিপেয়ার কিট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002893",
    "title": "মাল্টি-লেয়ার প্লাস্টিক ফোল্ডেবল জুতার র‍্যাক | Multi-Layer Plastic Foldable Shoe Rack | X-Frame Shoe Organizer | জুতা রাখার স্ট্যান্ড",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 320,
    "retail_price": 570,
    "regular_price": 741,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.13_2609191727567030.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.13_2609191727567030.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2893",
    "source_url": "https://greenishtradeltd.com/products/26091900002893",
    "description": "মাল্টি-লেয়ার প্লাস্টিক ফোল্ডেবল জুতার র‍্যাক | Multi-Layer Plastic Foldable Shoe Rack | X-Frame Shoe Organizer | জুতা রাখার স্ট্যান্ড - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002875",
    "title": "৩৬০° রোটেটেবল ৬-লেয়ার ওয়াটার ফিল্টার ট্যাপ | পানির ফিল্টার | ৫ পিস ফিল্টার ফ্রি",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 220,
    "retail_price": 470,
    "regular_price": 611,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2012.54.47_2609190916083601.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2012.54.47_2609190916083601.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2875",
    "source_url": "https://greenishtradeltd.com/products/26091900002875",
    "description": "৩৬০° রোটেটেবল ৬-লেয়ার ওয়াটার ফিল্টার ট্যাপ | পানির ফিল্টার | ৫ পিস ফিল্টার ফ্রি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002761",
    "title": "৩৬০° রোটেটেবল ৬-লেয়ার ওয়াটার ফিল্টার ট্যাপ | ঘূর্ণনযোগ্য কলের পানি ফিল্টার | রান্নাঘরের কলের ফিল্টার",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 140,
    "retail_price": 390,
    "regular_price": 507,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2012.15.18%20(2)_2609160616038764.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2012.15.18%20(2)_2609160616038764.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2761",
    "source_url": "https://greenishtradeltd.com/products/26091600002761",
    "description": "৩৬০° রোটেটেবল ৬-লেয়ার ওয়াটার ফিল্টার ট্যাপ | ঘূর্ণনযোগ্য কলের পানি ফিল্টার | রান্নাঘরের কলের ফিল্টার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090900002733",
    "title": "ওয়াল মাউন্টেড ওয়াইফাই রাউটার স্টোরেজ বক্স ও হোল্ডার | মাল্টিফাংশনাল রাউটার অর্গানাইজার | Wall Mounted WiFi Router Storage Box",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F61fJ8P%2BBKrL._SX679__2609090626547557.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F61fJ8P%2BBKrL._SX679__2609090626547557.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2733",
    "source_url": "https://greenishtradeltd.com/products/26090900002733",
    "description": "ওয়াল মাউন্টেড ওয়াইফাই রাউটার স্টোরেজ বক্স ও হোল্ডার | মাল্টিফাংশনাল রাউটার অর্গানাইজার | Wall Mounted WiFi Router Storage Box - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090800002724",
    "title": "সিলিকন ইলাস্টিক টিস্যু বক্স হোল্ডার (Wall-Mounted Silicone Tissue Box Holder)",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 420,
    "retail_price": 670,
    "regular_price": 871,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(44)_2609080721392222.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(44)_2609080721392222.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2724",
    "source_url": "https://greenishtradeltd.com/products/26090800002724",
    "description": "সিলিকন ইলাস্টিক টিস্যু বক্স হোল্ডার (Wall-Mounted Silicone Tissue Box Holder) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002710",
    "title": "৩৬০° রোটেটিং মেকআপ ব্রাশ হোল্ডার উইথ ডাস্টপ্রুফ লিড | কসমেটিক অর্গানাইজার স্টোরেজ বক্স",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2023.21.07_2609061721487560.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2023.21.07_2609061721487560.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2710",
    "source_url": "https://greenishtradeltd.com/products/26090600002710",
    "description": "৩৬০° রোটেটিং মেকআপ ব্রাশ হোল্ডার উইথ ডাস্টপ্রুফ লিড | কসমেটিক অর্গানাইজার স্টোরেজ বক্স - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002709",
    "title": "অ্যাডজাস্টেবল প্লাস্টিক ড্রয়ার অর্গানাইজার / ডিভাইডার | মাল্টিপারপাস ড্রয়ার স্টোরেজ গ্রিড",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F2295593_adjustable-plastic-grid-drawer-organizer-multi-purpose-drawer-storage-divider-adjustable-cabinet-sto_2609061706270054.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F2295593_adjustable-plastic-grid-drawer-organizer-multi-purpose-drawer-storage-divider-adjustable-cabinet-sto_2609061706270054.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2709",
    "source_url": "https://greenishtradeltd.com/products/26090600002709",
    "description": "অ্যাডজাস্টেবল প্লাস্টিক ড্রয়ার অর্গানাইজার / ডিভাইডার | মাল্টিপারপাস ড্রয়ার স্টোরেজ গ্রিড - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090600002707",
    "title": "হাই প্রেসার টয়লেট প্লাঞ্জার | এয়ার ড্রেন আনব্লকার | বাথরুম ও কিচেন পাইপ ব্লক পরিষ্কার করার টুল",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "গৃহ সজ্জা (Home Decor)",
    "reseller_price": 390,
    "retail_price": 640,
    "regular_price": 832,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F61HA8v4ZVNL._AC_SX679__2609061645475916.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F61HA8v4ZVNL._AC_SX679__2609061645475916.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-34-2707",
    "source_url": "https://greenishtradeltd.com/products/26090600002707",
    "description": "হাই প্রেসার টয়লেট প্লাঞ্জার | এয়ার ড্রেন আনব্লকার | বাথরুম ও কিচেন পাইপ ব্লক পরিষ্কার করার টুল - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (গৃহ সজ্জা (Home Decor))\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002912",
    "title": "ওয়াটারপ্রুফ হ্যান্ড-ওয়াইপিং কিচেন এপ্রোন | Waterproof Hand-Wiping Kitchen Apron | রান্নাঘরের পানি ও দাগ প্রতিরোধী এপ্রোন",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 250,
    "retail_price": 500,
    "regular_price": 650,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.03%20(1)_2609210727436878.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.03%20(1)_2609210727436878.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2912",
    "source_url": "https://greenishtradeltd.com/products/26092100002912",
    "description": "ওয়াটারপ্রুফ হ্যান্ড-ওয়াইপিং কিচেন এপ্রোন | Waterproof Hand-Wiping Kitchen Apron | রান্নাঘরের পানি ও দাগ প্রতিরোধী এপ্রোন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002908",
    "title": "২ ইন ১ অয়েল স্প্রে ও পোরার বোতল | 2-in-1 Oil Sprayer &amp; Pourer | কিচেন অয়েল ডিসপেন্সার ও স্প্রে বোতল",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.00%20(1)_2609210650576474.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.00%20(1)_2609210650576474.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2908",
    "source_url": "https://greenishtradeltd.com/products/26092100002908",
    "description": "২ ইন ১ অয়েল স্প্রে ও পোরার বোতল | 2-in-1 Oil Sprayer &amp; Pourer | কিচেন অয়েল ডিসপেন্সার ও স্প্রে বোতল - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002906",
    "title": "স্বচ্ছ ন্যানো ডাবল-সাইডেড অ্যাডহেসিভ টেপ | Transparent Nano Double-Sided Tape | শক্তিশালী আঠালো রিইউজেবল টেপ",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.46.59%20(1)_2609210635349289.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.46.59%20(1)_2609210635349289.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2906",
    "source_url": "https://greenishtradeltd.com/products/26092100002906",
    "description": "স্বচ্ছ ন্যানো ডাবল-সাইডেড অ্যাডহেসিভ টেপ | Transparent Nano Double-Sided Tape | শক্তিশালী আঠালো রিইউজেবল টেপ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002897",
    "title": "১৬-ইন-১ মাল্টিফাংশনাল ভেজিটেবল চপার ও স্লাইসার | 16-in-1 Vegetable Chopper &amp; Slicer | কিচেন কাটিং ও গ্রেটিং টুল",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 600,
    "retail_price": 870,
    "regular_price": 1131,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2011.03.12_2609200621266268.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2011.03.12_2609200621266268.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2897",
    "source_url": "https://greenishtradeltd.com/products/26092000002897",
    "description": "১৬-ইন-১ মাল্টিফাংশনাল ভেজিটেবল চপার ও স্লাইসার | 16-in-1 Vegetable Chopper &amp; Slicer | কিচেন কাটিং ও গ্রেটিং টুল - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002896",
    "title": "স্টেইনলেস স্টিল অয়েল স্ট্রেইনার পট ও ডিসপেন্সার | Stainless Steel Oil Strainer Pot | Oil Keeper Jar | রান্নার তেল সংরক্ষণ ও ছাঁকার পাত্র",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.16_2609191757206821.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.16_2609191757206821.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2896",
    "source_url": "https://greenishtradeltd.com/products/26091900002896",
    "description": "স্টেইনলেস স্টিল অয়েল স্ট্রেইনার পট ও ডিসপেন্সার | Stainless Steel Oil Strainer Pot | Oil Keeper Jar | রান্নার তেল সংরক্ষণ ও ছাঁকার পাত্র - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002895",
    "title": "৫ পিস স্টেইনলেস স্টিল প্রোটেক্ট ফ্রেশ বক্স সেট | 5 Pcs Stainless Steel Storage Bowl Set | খাবার সংরক্ষণ ও কিচেন অর্গানাইজার",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 380,
    "retail_price": 630,
    "regular_price": 819,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.14%20(1)_2609191741129841.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.14%20(1)_2609191741129841.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2895",
    "source_url": "https://greenishtradeltd.com/products/26091900002895",
    "description": "৫ পিস স্টেইনলেস স্টিল প্রোটেক্ট ফ্রেশ বক্স সেট | 5 Pcs Stainless Steel Storage Bowl Set | খাবার সংরক্ষণ ও কিচেন অর্গানাইজার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002894",
    "title": "৬-গ্রিড ফ্রিজ স্টোরেজ ও ড্রেন বক্স | 6-Grid Refrigerator Storage Box with Drain Basket | ফ্রিজ অর্গানাইজার ও খাবার সংরক্ষণ বক্স",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.13%20(1)_2609191733159955.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.13%20(1)_2609191733159955.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2894",
    "source_url": "https://greenishtradeltd.com/products/26091900002894",
    "description": "৬-গ্রিড ফ্রিজ স্টোরেজ ও ড্রেন বক্স | 6-Grid Refrigerator Storage Box with Drain Basket | ফ্রিজ অর্গানাইজার ও খাবার সংরক্ষণ বক্স - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002892",
    "title": "৪-লেয়ার অটোমেটিক রোল-ডাউন এগ ডিসপেন্সার | 4-Tier Automatic Roll-Down Egg Organizer | ডিম রাখার কিচেন অর্গানাইজার র‍্যাক",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 150,
    "retail_price": 400,
    "regular_price": 520,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.11_2609191721402116.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.11_2609191721402116.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2892",
    "source_url": "https://greenishtradeltd.com/products/26091900002892",
    "description": "৪-লেয়ার অটোমেটিক রোল-ডাউন এগ ডিসপেন্সার | 4-Tier Automatic Roll-Down Egg Organizer | ডিম রাখার কিচেন অর্গানাইজার র‍্যাক - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002891",
    "title": "অটোমেটিক রোল-ডাউন ডাবল-লেয়ার এগ ডিসপেন্সার | Automatic Roll-Down Double-Layer Egg Organizer | কিচেন এগ অর্গানাইজার ও ডিম রাখার র‍্যাক",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 100,
    "retail_price": 350,
    "regular_price": 455,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.11_2609191717455748.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2023.54.11_2609191717455748.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2891",
    "source_url": "https://greenishtradeltd.com/products/26091900002891",
    "description": "অটোমেটিক রোল-ডাউন ডাবল-লেয়ার এগ ডিসপেন্সার | Automatic Roll-Down Double-Layer Egg Organizer | কিচেন এগ অর্গানাইজার ও ডিম রাখার র‍্যাক - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002888",
    "title": "সিলিকন ফোল্ডেবল ইলেকট্রিক ট্রাভেল কেটলি (Foldable Silicone Electric Travel Kettle)।",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(46)_2609191058073645.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(46)_2609191058073645.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2888",
    "source_url": "https://greenishtradeltd.com/products/26091900002888",
    "description": "সিলিকন ফোল্ডেবল ইলেকট্রিক ট্রাভেল কেটলি (Foldable Silicone Electric Travel Kettle)। - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002884",
    "title": "Prestige KS-33 ২৮ সেমি মাল্টিফাংশনাল ইলেকট্রিক কুকার ও স্টিমার | মাল্টি কুকার উইথ স্টিমার",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 1880,
    "retail_price": 2726,
    "regular_price": 3544,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.42.43%20(1)_2609191034196550.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.42.43%20(1)_2609191034196550.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2884",
    "source_url": "https://greenishtradeltd.com/products/26091900002884",
    "description": "Prestige KS-33 ২৮ সেমি মাল্টিফাংশনাল ইলেকট্রিক কুকার ও স্টিমার | মাল্টি কুকার উইথ স্টিমার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002883",
    "title": "KES KS-28 মাল্টিফাংশনাল ইলেকট্রিক স্টিমার ও হট পট | ইলেকট্রিক কুকার ও স্টিমার",
    "category_id": "6",
    "category_name": "হোম ডেকর",
    "subcategory": "কিচেন সামগ্রী",
    "reseller_price": 1550,
    "retail_price": 2248,
    "regular_price": 2922,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.42.43_2609191027242972.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.42.43_2609191027242972.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-6-78-2883",
    "source_url": "https://greenishtradeltd.com/products/26091900002883",
    "description": "KES KS-28 মাল্টিফাংশনাল ইলেকট্রিক স্টিমার ও হট পট | ইলেকট্রিক কুকার ও স্টিমার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: হোম ডেকর (কিচেন সামগ্রী)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002169",
    "title": "Indian Bridal Jewelry Set with Maroon Stone &amp; White Crystal Accents",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhnnnnngb%20h_2606261744359931.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhnnnnngb%20h_2606261744359931.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2169",
    "source_url": "https://greenishtradeltd.com/products/26062600002169",
    "description": "Indian Bridal Jewelry Set with Maroon Stone &amp; White Crystal Accents - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002168",
    "title": "Gold Plated Indian Sita Har Pearl Necklace Set with Floral Pendant &amp; Matching Earrings",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Foiii_2606261729235361.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Foiii_2606261729235361.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2168",
    "source_url": "https://greenishtradeltd.com/products/26062600002168",
    "description": "Gold Plated Indian Sita Har Pearl Necklace Set with Floral Pendant &amp; Matching Earrings - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002167",
    "title": "Gold Plated Sita Haar Necklace Set with Pearl Details &amp; Matching Earrings",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fggggg_2606261723208374.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fggggg_2606261723208374.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2167",
    "source_url": "https://greenishtradeltd.com/products/26062600002167",
    "description": "Gold Plated Sita Haar Necklace Set with Pearl Details &amp; Matching Earrings - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002166",
    "title": "গোল্ড প্লেটেড লং নেকলেস সেট – স্কয়ার পেনডেন্ট ও ম্যাচিং কানের দুলসহ ট্র্যাডিশনাল ডিজাইন",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fiuo98yu7_2606261657465321.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fiuo98yu7_2606261657465321.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2166",
    "source_url": "https://greenishtradeltd.com/products/26062600002166",
    "description": "গোল্ড প্লেটেড লং নেকলেস সেট – স্কয়ার পেনডেন্ট ও ম্যাচিং কানের দুলসহ ট্র্যাডিশনাল ডিজাইন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002165",
    "title": "Gold Plate গোল্ড প্লেটেড নেকলেস সেট",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhjny%20_2606261646368225.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhjny%20_2606261646368225.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2165",
    "source_url": "https://greenishtradeltd.com/products/26062600002165",
    "description": "Gold Plate গোল্ড প্লেটেড নেকলেস সেট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002164",
    "title": "Aesthetic Zone গোল্ড প্লেটেড লং নেকলেস সেট –",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_dt1duxdt1duxdt1d_2606261635337039.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_dt1duxdt1duxdt1d_2606261635337039.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2164",
    "source_url": "https://greenishtradeltd.com/products/26062600002164",
    "description": "Aesthetic Zone গোল্ড প্লেটেড লং নেকলেস সেট – - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062600002163",
    "title": "Gold Plated Bridal Necklace Set with Long Necklace &amp; Matching Earrings",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 1190,
    "retail_price": 1726,
    "regular_price": 2243,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghtv_2606261629331871.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghtv_2606261629331871.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2163",
    "source_url": "https://greenishtradeltd.com/products/26062600002163",
    "description": "Gold Plated Bridal Necklace Set with Long Necklace &amp; Matching Earrings - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062500002160",
    "title": "Gold Plated Sita Har Necklace Set with Large Circular Pendant &amp; Matching Earrings –",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fbhbhbhbhbhgbv_2606251730295511.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fbhbhbhbhbhgbv_2606251730295511.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2160",
    "source_url": "https://greenishtradeltd.com/products/26062500002160",
    "description": "Gold Plated Sita Har Necklace Set with Large Circular Pendant &amp; Matching Earrings – - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062500002159",
    "title": "Gold Plated Indian Madraji Necklace &amp; Sitahar Set – Traditional Circular Pendant Jewelry",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 1400,
    "retail_price": 2030,
    "regular_price": 2639,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgvfrtgv_2606251723466957.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgvfrtgv_2606251723466957.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2159",
    "source_url": "https://greenishtradeltd.com/products/26062500002159",
    "description": "Gold Plated Indian Madraji Necklace &amp; Sitahar Set – Traditional Circular Pendant Jewelry - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062500002158",
    "title": "Gold Plated Sitahar Necklace Set – Traditional Layered Bridal Jewelry Design",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 1820,
    "retail_price": 2639,
    "regular_price": 3431,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjnyhjhunty_2606251719018655.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjnyhjhunty_2606251719018655.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2158",
    "source_url": "https://greenishtradeltd.com/products/26062500002158",
    "description": "Gold Plated Sitahar Necklace Set – Traditional Layered Bridal Jewelry Design - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062500002157",
    "title": "Gold Color Women&#x27;s Flower Large Ring – Elegant Fashion Statement Ring for Women (1 pice)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 110,
    "retail_price": 360,
    "regular_price": 468,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgtbftrbfrt_2606251707594639.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgtbftrbfrt_2606251707594639.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2157",
    "source_url": "https://greenishtradeltd.com/products/26062500002157",
    "description": "Gold Color Women&#x27;s Flower Large Ring – Elegant Fashion Statement Ring for Women (1 pice) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061900002075",
    "title": "গোল্ড প্লেটেড ক্লাসিক ইন্ডিয়ান নেকলেস সেট – ইনট্রিকেট টেক্সচারড ডিজাইন ও ইয়াররিং সেট",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "জুয়েলারি",
    "reseller_price": 440,
    "retail_price": 690,
    "regular_price": 897,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhnnngyh_2606191912557389.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhnnngyh_2606191912557389.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-22-2075",
    "source_url": "https://greenishtradeltd.com/products/26061900002075",
    "description": "গোল্ড প্লেটেড ক্লাসিক ইন্ডিয়ান নেকলেস সেট – ইনট্রিকেট টেক্সচারড ডিজাইন ও ইয়াররিং সেট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (জুয়েলারি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090300002657",
    "title": "Transparent Scalp Oil Applicator Comb – Metal Ball Tip Hair Oil Massage &amp; Root Applicator",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "মেয়েদের এক্সেসরিজ",
    "reseller_price": 210,
    "retail_price": 460,
    "regular_price": 598,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgbrtfgvb_2609031418026494.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgbrtfgvb_2609031418026494.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-32-2657",
    "source_url": "https://greenishtradeltd.com/products/26090300002657",
    "description": "Transparent Scalp Oil Applicator Comb – Metal Ball Tip Hair Oil Massage &amp; Root Applicator - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (মেয়েদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001475",
    "title": "True Love Pure Femme Eau De Parfum – 100ml (by Mahabub Perfumes)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "মেয়েদের এক্সেসরিজ",
    "reseller_price": 1090,
    "retail_price": 1581,
    "regular_price": 2055,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdfgt54_2605032127374696.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdfgt54_2605032127374696.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-32-1475",
    "source_url": "https://greenishtradeltd.com/products/26050300001475",
    "description": "True Love Pure Femme Eau De Parfum – 100ml (by Mahabub Perfumes) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (মেয়েদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001460",
    "title": "Arafa Bloom Premium Transparent Resin Floral &amp; Star Charm Necklace and Earring Set – Silver Tone",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "মেয়েদের এক্সেসরিজ",
    "reseller_price": 220,
    "retail_price": 470,
    "regular_price": 611,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-04%20at%201.25.23%20AM%20(1)_2605032008002860.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-04%20at%201.25.23%20AM%20(1)_2605032008002860.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-32-1460",
    "source_url": "https://greenishtradeltd.com/products/26050300001460",
    "description": "Arafa Bloom Premium Transparent Resin Floral &amp; Star Charm Necklace and Earring Set – Silver Tone - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (মেয়েদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001457",
    "title": "Arafa Bloom Premium Resin Blue Glitter Diamond Necklace and Heart Earring Set",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "মেয়েদের এক্সেসরিজ",
    "reseller_price": 220,
    "retail_price": 470,
    "regular_price": 611,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-04%20at%201.25.23%20AM_2605032005292281.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-04%20at%201.25.23%20AM_2605032005292281.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-32-1457",
    "source_url": "https://greenishtradeltd.com/products/26050300001457",
    "description": "Arafa Bloom Premium Resin Blue Glitter Diamond Necklace and Heart Earring Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (মেয়েদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001476",
    "title": "L’Oréal Men Expert Hair Wax (Hard Hold) – 150ml (Professional Styling Wax)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "ছেলেদের এক্সেসরিজ",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffdgt_2605032133018247.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffdgt_2605032133018247.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-33-1476",
    "source_url": "https://greenishtradeltd.com/products/26050300001476",
    "description": "L’Oréal Men Expert Hair Wax (Hard Hold) – 150ml (Professional Styling Wax) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (ছেলেদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001474",
    "title": "Fogg Scent Tycoon Eau De Parfum – 30ml (Aromatic Woody Fragrance for Men)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "ছেলেদের এক্সেসরিজ",
    "reseller_price": 290,
    "retail_price": 540,
    "regular_price": 702,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytu6_2605032122187809.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytu6_2605032122187809.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-33-1474",
    "source_url": "https://greenishtradeltd.com/products/26050300001474",
    "description": "Fogg Scent Tycoon Eau De Parfum – 30ml (Aromatic Woody Fragrance for Men) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (ছেলেদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001473",
    "title": "Roger &amp; Gallet Open Eau De Toilette – 100ml (Men’s Fragrance)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "ছেলেদের এক্সেসরিজ",
    "reseller_price": 1090,
    "retail_price": 1581,
    "regular_price": 2055,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fffde_2605032119105146.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fffde_2605032119105146.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-33-1473",
    "source_url": "https://greenishtradeltd.com/products/26050300001473",
    "description": "Roger &amp; Gallet Open Eau De Toilette – 100ml (Men’s Fragrance) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (ছেলেদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050300001472",
    "title": "Bernard Dimitri Hot Black Intense Eau De Parfum – 100ml (Men’s Fragrance)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "ছেলেদের এক্সেসরিজ",
    "reseller_price": 1170,
    "retail_price": 1697,
    "regular_price": 2205,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgt5r54_2605032113485170.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgt5r54_2605032113485170.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-33-1472",
    "source_url": "https://greenishtradeltd.com/products/26050300001472",
    "description": "Bernard Dimitri Hot Black Intense Eau De Parfum – 100ml (Men’s Fragrance) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (ছেলেদের এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002898",
    "title": "উকুনের ম্যাজিক চিরুনি | Magic Lice Comb | উকুন ও নিট অপসারণের সূক্ষ্ম দাঁতের চিরুনি",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 110,
    "retail_price": 360,
    "regular_price": 468,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.46.59_2609200708042990.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.46.59_2609200708042990.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-2898",
    "source_url": "https://greenishtradeltd.com/products/26092000002898",
    "description": "উকুনের ম্যাজিক চিরুনি | Magic Lice Comb | উকুন ও নিট অপসারণের সূক্ষ্ম দাঁতের চিরুনি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002886",
    "title": "কিনোকি ক্লিনজিং ডিটক্স ফুট প্যাড – পায়ের যত্নে রিল্যাক্সিং ফুট প্যাড",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 60,
    "retail_price": 310,
    "regular_price": 403,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2016.46.41_2609191046565770.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2016.46.41_2609191046565770.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-2886",
    "source_url": "https://greenishtradeltd.com/products/26091900002886",
    "description": "কিনোকি ক্লিনজিং ডিটক্স ফুট প্যাড – পায়ের যত্নে রিল্যাক্সিং ফুট প্যাড - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001739",
    "title": "Light Age LM-130 3-Head Deep Tissue Fascia Massager Gun White",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 830,
    "retail_price": 1204,
    "regular_price": 1565,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGHYH_2605100940355574.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGHYH_2605100940355574.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1739",
    "source_url": "https://greenishtradeltd.com/products/26051000001739",
    "description": "Light Age LM-130 3-Head Deep Tissue Fascia Massager Gun White - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001738",
    "title": "Rose Gold Stainless Steel Manicure Pedicure Grooming Set",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 250,
    "retail_price": 500,
    "regular_price": 650,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ft6y6t_2605100920417598.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ft6y6t_2605100920417598.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1738",
    "source_url": "https://greenishtradeltd.com/products/26051000001738",
    "description": "Rose Gold Stainless Steel Manicure Pedicure Grooming Set - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050900001732",
    "title": "Xiran Orange Air Freshener Aerosol Spray 300ml",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Figyuppet_2605091702584235.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Figyuppet_2605091702584235.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1732",
    "source_url": "https://greenishtradeltd.com/products/26050900001732",
    "description": "Xiran Orange Air Freshener Aerosol Spray 300ml - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050900001731",
    "title": "Gold Skin Clarifying Body Lotion with Argan Oil Brightening &amp; Firming Care",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 720,
    "retail_price": 1044,
    "regular_price": 1357,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fmkoumjhk%5B_2605091653126977.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fmkoumjhk%5B_2605091653126977.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1731",
    "source_url": "https://greenishtradeltd.com/products/26050900001731",
    "description": "Gold Skin Clarifying Body Lotion with Argan Oil Brightening &amp; Firming Care - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050900001726",
    "title": "Nivea Extra Bright Happy Shave Antiperspirant Roll-On 50ml",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 220,
    "retail_price": 470,
    "regular_price": 611,
    "stock": 11,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Figuihgiojoi_2605091604219573.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Figuihgiojoi_2605091604219573.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1726",
    "source_url": "https://greenishtradeltd.com/products/26050900001726",
    "description": "Nivea Extra Bright Happy Shave Antiperspirant Roll-On 50ml - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050900001723",
    "title": "Enchanteur Alluring 48H Perfumed Deo Roll-On 50g",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 210,
    "retail_price": 460,
    "regular_price": 598,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fuiguhboknm_2605091510285600.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fuiguhboknm_2605091510285600.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1723",
    "source_url": "https://greenishtradeltd.com/products/26050900001723",
    "description": "Enchanteur Alluring 48H Perfumed Deo Roll-On 50g - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050900001715",
    "title": "Rexona Men Ice Cool 72h Anti-Stain Roll-On 50ml",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fuj7yu56y_2605090938193755.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fuj7yu56y_2605090938193755.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1715",
    "source_url": "https://greenishtradeltd.com/products/26050900001715",
    "description": "Rexona Men Ice Cool 72h Anti-Stain Roll-On 50ml - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050900001704",
    "title": "Kota Cosmetics Hair Color Cream Cherry Red &amp; Sepia | কোটা হেয়ার কালার ক্রিম",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FYT54T5_2605090643483351.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FYT54T5_2605090643483351.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1704",
    "source_url": "https://greenishtradeltd.com/products/26050900001704",
    "description": "Kota Cosmetics Hair Color Cream Cherry Red &amp; Sepia | কোটা হেয়ার কালার ক্রিম - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050400001520",
    "title": "Johnson’s Baby Soap with Milk Protein, Turmeric &amp; Shea Butter – 75g",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 150,
    "retail_price": 400,
    "regular_price": 520,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F7uy_2605041407560041.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F7uy_2605041407560041.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1520",
    "source_url": "https://greenishtradeltd.com/products/26050400001520",
    "description": "Johnson’s Baby Soap with Milk Protein, Turmeric &amp; Shea Butter – 75g - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050400001513",
    "title": "Dr. Strikes Tea Tree Soothing Shower Gel – 320ml (Refreshing Body Wash)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "বিউটি অ্যান্ড হেলথ কেয়ার",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffrtg54t6_2605041124130305.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffrtg54t6_2605041124130305.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-38-1513",
    "source_url": "https://greenishtradeltd.com/products/26050400001513",
    "description": "Dr. Strikes Tea Tree Soothing Shower Gel – 320ml (Refreshing Body Wash) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (বিউটি অ্যান্ড হেলথ কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002047",
    "title": "Flicka Professional Silk Touch Multi-Function Moisturiser Milk-Cream (60gm)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 1300,
    "retail_price": 1885,
    "regular_price": 2451,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-16%20at%2012.07.57%20AM_2606151912249201.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-16%20at%2012.07.57%20AM_2606151912249201.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2047",
    "source_url": "https://greenishtradeltd.com/products/26061500002047",
    "description": "Flicka Professional Silk Touch Multi-Function Moisturiser Milk-Cream (60gm) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002046",
    "title": "AXIS-Y Dark Spot Correcting Glow Serum  50ml",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 1030,
    "retail_price": 1494,
    "regular_price": 1942,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_galrgdgalrgdgalr_2606151906375787.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_galrgdgalrgdgalr_2606151906375787.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2046",
    "source_url": "https://greenishtradeltd.com/products/26061500002046",
    "description": "AXIS-Y Dark Spot Correcting Glow Serum  50ml - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002045",
    "title": "Dabo UV Protection Collagen Lifting Sun Cream with SPF 50+ PA+++ 70ml",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 500,
    "retail_price": 725,
    "regular_price": 943,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_tcxspftcxspftcxs_2606151900160405.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_tcxspftcxspftcxs_2606151900160405.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2045",
    "source_url": "https://greenishtradeltd.com/products/26061500002045",
    "description": "Dabo UV Protection Collagen Lifting Sun Cream with SPF 50+ PA+++ 70ml - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002044",
    "title": "Anua Niacinamide 10% + TXA 4% Dark Spot Correcting Serum 10ml",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_lj21wdlj21wdlj21_2606151855530483.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_lj21wdlj21wdlj21_2606151855530483.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2044",
    "source_url": "https://greenishtradeltd.com/products/26061500002044",
    "description": "Anua Niacinamide 10% + TXA 4% Dark Spot Correcting Serum 10ml - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002043",
    "title": "Dabo PDRN Pink Collagen Brightening UV Sunscreen SPF 50+ PA+++",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 570,
    "retail_price": 827,
    "regular_price": 1074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-16%20at%2012.11.40%20AM%20(1)_2606151851284326.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-16%20at%2012.11.40%20AM%20(1)_2606151851284326.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2043",
    "source_url": "https://greenishtradeltd.com/products/26061500002043",
    "description": "Dabo PDRN Pink Collagen Brightening UV Sunscreen SPF 50+ PA+++ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002042",
    "title": "Dabo All In One Black Snail Repair Cream 100gm",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-16%20at%2012.10.25%20AM_2606151844340580.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-16%20at%2012.10.25%20AM_2606151844340580.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2042",
    "source_url": "https://greenishtradeltd.com/products/26061500002042",
    "description": "Dabo All In One Black Snail Repair Cream 100gm - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002041",
    "title": "Dabo Waterful Aqua Cream, an oil-free facial moisturizer in a 120ml (4.0 fl. oz.) container.",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 930,
    "retail_price": 1349,
    "regular_price": 1753,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_mxafbpmxafbpmxaf_2606151837415301.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_mxafbpmxafbpmxaf_2606151837415301.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2041",
    "source_url": "https://greenishtradeltd.com/products/26061500002041",
    "description": "Dabo Waterful Aqua Cream, an oil-free facial moisturizer in a 120ml (4.0 fl. oz.) container. - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800002001",
    "title": "DABO All in One Black Snail Repair Cream 50ml – Moisturizing, Repair &amp; Anti-Wrinkle Skincare Cream",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 820,
    "retail_price": 1189,
    "regular_price": 1546,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghrr_2606082047135345.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghrr_2606082047135345.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2001",
    "source_url": "https://greenishtradeltd.com/products/26060800002001",
    "description": "DABO All in One Black Snail Repair Cream 50ml – Moisturizing, Repair &amp; Anti-Wrinkle Skincare Cream - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800002000",
    "title": "DABO All In One Black Snail Repair Cream 50ml – Moisturizing, Whitening &amp; Anti-Wrinkle Korean Skincare Cream",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.06%20AM_2606082038039494.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.06%20AM_2606082038039494.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-2000",
    "source_url": "https://greenishtradeltd.com/products/26060800002000",
    "description": "DABO All In One Black Snail Repair Cream 50ml – Moisturizing, Whitening &amp; Anti-Wrinkle Korean Skincare Cream - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001999",
    "title": "Dabo Rice Ferment Foam Cleanser 100ml – Brightening &amp; Moisturizing Korean Face Wash",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 510,
    "retail_price": 740,
    "regular_price": 961,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.05%20AM%20(1)_2606082027003206.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.05%20AM%20(1)_2606082027003206.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-1999",
    "source_url": "https://greenishtradeltd.com/products/26060800001999",
    "description": "Dabo Rice Ferment Foam Cleanser 100ml – Brightening &amp; Moisturizing Korean Face Wash - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001998",
    "title": "Anua Heartleaf 77+ Hyaluron Soothing Toner 40ml Mini – Hydrating &amp; Calming Korean Skincare",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 570,
    "retail_price": 827,
    "regular_price": 1074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.05%20AM_2606082019508544.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.05%20AM_2606082019508544.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-1998",
    "source_url": "https://greenishtradeltd.com/products/26060800001998",
    "description": "Anua Heartleaf 77+ Hyaluron Soothing Toner 40ml Mini – Hydrating &amp; Calming Korean Skincare - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001997",
    "title": "Anua Heartleaf 77+ Hyaluron Soothing Toner 150ml – Hydrating &amp; Redness Relief Facial Toner",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "স্কিন কেয়ার",
    "reseller_price": 1830,
    "retail_price": 2654,
    "regular_price": 3450,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.04%20AM_2606082016524413.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-08%20at%204.18.04%20AM_2606082016524413.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-50-1997",
    "source_url": "https://greenishtradeltd.com/products/26060800001997",
    "description": "Anua Heartleaf 77+ Hyaluron Soothing Toner 150ml – Hydrating &amp; Redness Relief Facial Toner - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (স্কিন কেয়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073100002495",
    "title": "Anmol Kali Instant Mehendi Cone 6 Pcs Set (Pakistan) – ডার্ক কালার, 50-55g প্রতি কন",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 600,
    "retail_price": 870,
    "regular_price": 1131,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fimages%20(4)_2607310640038491.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fimages%20(4)_2607310640038491.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2495",
    "source_url": "https://greenishtradeltd.com/products/26073100002495",
    "description": "Anmol Kali Instant Mehendi Cone 6 Pcs Set (Pakistan) – ডার্ক কালার, 50-55g প্রতি কন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002234",
    "title": "Absolute New York Pro-Biotic Matte Setting Spray – লং-লাস্টিং ম্যাট মেকআপ সেটিং স্প্রে",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 970,
    "retail_price": 1407,
    "regular_price": 1828,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.13%20AM%20(1)_2607022110397269.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.13%20AM%20(1)_2607022110397269.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2234",
    "source_url": "https://greenishtradeltd.com/products/26070200002234",
    "description": "Absolute New York Pro-Biotic Matte Setting Spray – লং-লাস্টিং ম্যাট মেকআপ সেটিং স্প্রে - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002233",
    "title": "Absolute New York 3D Concealer – ফুল কভারেজ লং-লাস্টিং কনসিলার (Shades 1–5)",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.13%20AM_2607022107433733.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.13%20AM_2607022107433733.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2233",
    "source_url": "https://greenishtradeltd.com/products/26070200002233",
    "description": "Absolute New York 3D Concealer – ফুল কভারেজ লং-লাস্টিং কনসিলার (Shades 1–5) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002232",
    "title": "Absolute New York আইব্রো পেন্সিল – Black ও Dark Brown শেড",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 470,
    "retail_price": 682,
    "regular_price": 886,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.14%20AM%20(1)_2607022104497140.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.14%20AM%20(1)_2607022104497140.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2232",
    "source_url": "https://greenishtradeltd.com/products/26070200002232",
    "description": "Absolute New York আইব্রো পেন্সিল – Black ও Dark Brown শেড - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002231",
    "title": "Absolute New York Pro Ink Pen Liner – Jet Black ওয়াটারপ্রুফ প্রিসিশন আইলাইনার",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 470,
    "retail_price": 682,
    "regular_price": 886,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.14%20AM_2607022102514072.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.14%20AM_2607022102514072.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2231",
    "source_url": "https://greenishtradeltd.com/products/26070200002231",
    "description": "Absolute New York Pro Ink Pen Liner – Jet Black ওয়াটারপ্রুফ প্রিসিশন আইলাইনার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002230",
    "title": "Absolute New York Black Out Waterproof Eyeliner – ২৪ ঘণ্টা স্মাজ-প্রুফ লিকুইড আইলাইনার",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 370,
    "retail_price": 620,
    "regular_price": 806,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.15%20AM%20(1)_2607022100537231.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.15%20AM%20(1)_2607022100537231.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2230",
    "source_url": "https://greenishtradeltd.com/products/26070200002230",
    "description": "Absolute New York Black Out Waterproof Eyeliner – ২৪ ঘণ্টা স্মাজ-প্রুফ লিকুইড আইলাইনার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002228",
    "title": "Essence What A Tint! Lip &amp; Cheek Tint – ২-ইন-১ লং-লাস্টিং লিপ ও চীক টিন্ট",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 770,
    "retail_price": 1117,
    "regular_price": 1451,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.15%20AM_2607022058355777.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.15%20AM_2607022058355777.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2228",
    "source_url": "https://greenishtradeltd.com/products/26070200002228",
    "description": "Essence What A Tint! Lip &amp; Cheek Tint – ২-ইন-১ লং-লাস্টিং লিপ ও চীক টিন্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002227",
    "title": "LMLTOP NO.3118 আইল্যাশ কার্লার – প্রাকৃতিক কার্ল ও লিফটের জন্য প্রিমিয়াম আইল্যাশ কার্লার",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 240,
    "retail_price": 490,
    "regular_price": 637,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.16%20AM%20(1)_2607022011081121.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.16%20AM%20(1)_2607022011081121.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2227",
    "source_url": "https://greenishtradeltd.com/products/26070200002227",
    "description": "LMLTOP NO.3118 আইল্যাশ কার্লার – প্রাকৃতিক কার্ল ও লিফটের জন্য প্রিমিয়াম আইল্যাশ কার্লার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002226",
    "title": "Absolute New York Waterproof Gel Eye Liner – White লং-লাস্টিং স্মাজ-প্রুফ জেল আইলাইনার পেন্সিল",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 470,
    "retail_price": 682,
    "regular_price": 886,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.16%20AM_2607022007437818.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.16%20AM_2607022007437818.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2226",
    "source_url": "https://greenishtradeltd.com/products/26070200002226",
    "description": "Absolute New York Waterproof Gel Eye Liner – White লং-লাস্টিং স্মাজ-প্রুফ জেল আইলাইনার পেন্সিল - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002225",
    "title": "Essence I Love Extreme Volume Waterproof Mascara – লং-লাস্টিং ভলিউম মাসকারা",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.17%20AM%20(1)_2607022005012153.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.17%20AM%20(1)_2607022005012153.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2225",
    "source_url": "https://greenishtradeltd.com/products/26070200002225",
    "description": "Essence I Love Extreme Volume Waterproof Mascara – লং-লাস্টিং ভলিউম মাসকারা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070200002224",
    "title": "L.A. Girl PRO.color Foundation Mixing Pigment – Yellow শেড ফাউন্ডেশন মিক্সিং পিগমেন্ট",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.17%20AM_2607021932517855.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.17%20AM_2607021932517855.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2224",
    "source_url": "https://greenishtradeltd.com/products/26070200002224",
    "description": "L.A. Girl PRO.color Foundation Mixing Pigment – Yellow শেড ফাউন্ডেশন মিক্সিং পিগমেন্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002223",
    "title": "Wet n Wild Photo Focus Matte Finish Setting Spray – ৪৫মি.লি. লং-লাস্টিং মেকআপ সেটিং স্প্রে",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "কালার কসমেটিকস",
    "reseller_price": 430,
    "retail_price": 680,
    "regular_price": 884,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.18%20AM%20(1)_2607012226054459.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-20%20at%203.22.18%20AM%20(1)_2607012226054459.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-51-2223",
    "source_url": "https://greenishtradeltd.com/products/26070100002223",
    "description": "Wet n Wild Photo Focus Matte Finish Setting Spray – ৪৫মি.লি. লং-লাস্টিং মেকআপ সেটিং স্প্রে - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (কালার কসমেটিকস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001995",
    "title": "XKN Home Lost Cherry Eau de Parfum 7.5ml Miniature – Luxury Inspired Sweet Fruity Fragrance",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Futjjjj_2606082009206495.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Futjjjj_2606082009206495.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1995",
    "source_url": "https://greenishtradeltd.com/products/26060800001995",
    "description": "XKN Home Lost Cherry Eau de Parfum 7.5ml Miniature – Luxury Inspired Sweet Fruity Fragrance - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001994",
    "title": "XKN Bloom Nettare Di Fiori 5ml Miniature Perfume – Floral Long-Lasting Travel Fragrance",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjuyh_2606082004418496.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjuyh_2606082004418496.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1994",
    "source_url": "https://greenishtradeltd.com/products/26060800001994",
    "description": "XKN Bloom Nettare Di Fiori 5ml Miniature Perfume – Floral Long-Lasting Travel Fragrance - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001993",
    "title": "Diptyque Tam Dao Eau de Toilette 10ml Miniature – Woody Sandalwood Fragrance",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fppp_2606081946142375.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fppp_2606081946142375.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1993",
    "source_url": "https://greenishtradeltd.com/products/26060800001993",
    "description": "Diptyque Tam Dao Eau de Toilette 10ml Miniature – Woody Sandalwood Fragrance - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001992",
    "title": "YSL Libre Eau de Parfum 7.5ml Miniature Spray – Luxury Travel Size Fragrance",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fiiiiii_2606081926148320.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fiiiiii_2606081926148320.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1992",
    "source_url": "https://greenishtradeltd.com/products/26060800001992",
    "description": "YSL Libre Eau de Parfum 7.5ml Miniature Spray – Luxury Travel Size Fragrance - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001991",
    "title": "XKN Home Oud Wood Eau de Parfum 7.5ml Miniature – Luxury Pocket Perfume",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fkyu_2606081912473310.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fkyu_2606081912473310.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1991",
    "source_url": "https://greenishtradeltd.com/products/26060800001991",
    "description": "XKN Home Oud Wood Eau de Parfum 7.5ml Miniature – Luxury Pocket Perfume - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001990",
    "title": "Hermès Eau des Merveilles Eau de Toilette 7.5ml Miniature Bottle – Luxury Travel Size Perfume",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fikuyu7_2606081908592320.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fikuyu7_2606081908592320.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1990",
    "source_url": "https://greenishtradeltd.com/products/26060800001990",
    "description": "Hermès Eau des Merveilles Eau de Toilette 7.5ml Miniature Bottle – Luxury Travel Size Perfume - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001989",
    "title": "Hermès Eau des Merveilles 7.5ml Miniature Eau de Parfum – Woody Amber Citrus Perfume",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fiki_2606081904465980.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fiki_2606081904465980.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1989",
    "source_url": "https://greenishtradeltd.com/products/26060800001989",
    "description": "Hermès Eau des Merveilles 7.5ml Miniature Eau de Parfum – Woody Amber Citrus Perfume - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001988",
    "title": "XKN Eau de Parfum 5ml Mini Size Perfume",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_8uug0j8uug0j8uug_2606081857312311.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_8uug0j8uug0j8uug_2606081857312311.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1988",
    "source_url": "https://greenishtradeltd.com/products/26060800001988",
    "description": "XKN Eau de Parfum 5ml Mini Size Perfume - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26060800001987",
    "title": "XKN Green Encounter Eau de Parfum Miniature 7.5ml – Travel Size Luxury Fragrance for Men &amp; Women",
    "category_id": "7",
    "category_name": "কসমেটিকস এন্ড গহনা",
    "subcategory": "আতর এন্ড ফারফিউম",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_dqduzzdqduzzdqdu_2606081851472575.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_dqduzzdqduzzdqdu_2606081851472575.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-7-57-1987",
    "source_url": "https://greenishtradeltd.com/products/26060800001987",
    "description": "XKN Green Encounter Eau de Parfum Miniature 7.5ml – Travel Size Luxury Fragrance for Men &amp; Women - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কসমেটিকস এন্ড গহনা (আতর এন্ড ফারফিউম)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092100002909",
    "title": "মোটরসাইকেল হ্যান্ডেলবার ব্রেক লিভার লক | Motorcycle Brake Lever Lock | Anti-Theft Handlebar Lock | বাইক সিকিউরিটি লক",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 600,
    "retail_price": 870,
    "regular_price": 1131,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.01_2609210656419768.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.47.01_2609210656419768.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2909",
    "source_url": "https://greenishtradeltd.com/products/26092100002909",
    "description": "মোটরসাইকেল হ্যান্ডেলবার ব্রেক লিভার লক | Motorcycle Brake Lever Lock | Anti-Theft Handlebar Lock | বাইক সিকিউরিটি লক - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002887",
    "title": "Jziki ZK-B869YA ডিজিটাল ইলেকট্রনিক ব্লাড প্রেশার মনিটর | সহজে রক্তচাপ মাপার",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 570,
    "retail_price": 827,
    "regular_price": 1074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2011.52.27_2609191052179034.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2011.52.27_2609191052179034.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2887",
    "source_url": "https://greenishtradeltd.com/products/26091900002887",
    "description": "Jziki ZK-B869YA ডিজিটাল ইলেকট্রনিক ব্লাড প্রেশার মনিটর | সহজে রক্তচাপ মাপার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002879",
    "title": "অ্যাডজাস্টেবল কার কী-চেইন ও পার্কিং ফোন নম্বর প্লেট | গাড়ির জন্য মাল্টিফাংশনাল কী রিং",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 100,
    "retail_price": 350,
    "regular_price": 455,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2012.54.47%20(4)_2609190935129240.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2012.54.47%20(4)_2609190935129240.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2879",
    "source_url": "https://greenishtradeltd.com/products/26091900002879",
    "description": "অ্যাডজাস্টেবল কার কী-চেইন ও পার্কিং ফোন নম্বর প্লেট | গাড়ির জন্য মাল্টিফাংশনাল কী রিং - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002764",
    "title": "৬-ইন-১ মাল্টিফাংশনাল ইমার্জেন্সি কার ভ্যাকুয়াম ক্লিনার YT-M2042 | পোর্টেবল রিচার্জেবল গাড়ি পরিষ্কারের ভ্যাকুয়াম মেশিন",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2013.03.02_2609160642257604.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2013.03.02_2609160642257604.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2764",
    "source_url": "https://greenishtradeltd.com/products/26091600002764",
    "description": "৬-ইন-১ মাল্টিফাংশনাল ইমার্জেন্সি কার ভ্যাকুয়াম ক্লিনার YT-M2042 | পোর্টেবল রিচার্জেবল গাড়ি পরিষ্কারের ভ্যাকুয়াম মেশিন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002751",
    "title": "Self Defense Metal Stick inchi",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 8,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-15%20at%2023.43.11_2609151743331363.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-15%20at%2023.43.11_2609151743331363.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2751",
    "source_url": "https://greenishtradeltd.com/products/26091500002751",
    "description": "Self Defense Metal Stick inchi - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002750",
    "title": "Self-Defense Stick Golden 26 inchi",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 500,
    "retail_price": 725,
    "regular_price": 943,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17845606221000981023_2609151737498603.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17845606221000981023_2609151737498603.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2750",
    "source_url": "https://greenishtradeltd.com/products/26091500002750",
    "description": "Self-Defense Stick Golden 26 inchi - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002749",
    "title": "32 inch Premium Self Defense Retractable Metal Stick.",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 870,
    "retail_price": 1262,
    "regular_price": 1640,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17845613741000981036_2609151734517656.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17845613741000981036_2609151734517656.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2749",
    "source_url": "https://greenishtradeltd.com/products/26091500002749",
    "description": "32 inch Premium Self Defense Retractable Metal Stick. - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002748",
    "title": "Self Defence Stun Gun – 928 Model",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 560,
    "retail_price": 812,
    "regular_price": 1056,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17845648701000981210_2609151730478291.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17845648701000981210_2609151730478291.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2748",
    "source_url": "https://greenishtradeltd.com/products/26091500002748",
    "description": "Self Defence Stun Gun – 928 Model - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090900002731",
    "title": "৩-ইন-১ মিনি স্মার্ট রোবট ভ্যাকুয়াম ক্লিনার | অটো সুইপিং, ভ্যাকুয়াম ও মপিং রোবট | Smart Sweeping Robot",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 600,
    "retail_price": 870,
    "regular_price": 1131,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2012.06.57_2609090607174969.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-09%20at%2012.06.57_2609090607174969.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2731",
    "source_url": "https://greenishtradeltd.com/products/26090900002731",
    "description": "৩-ইন-১ মিনি স্মার্ট রোবট ভ্যাকুয়াম ক্লিনার | অটো সুইপিং, ভ্যাকুয়াম ও মপিং রোবট | Smart Sweeping Robot - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090800002728",
    "title": "৮-ইন-১ মিনি ট্রলি লাগেজ ম্যানিকিউর অ্যান্ড পেডিকিউর কিট | পোর্টেবল নেইল কেয়ার সেট | ট্রাভেল গ্রুমিং কিট",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 300,
    "retail_price": 550,
    "regular_price": 715,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHa263f063186c41898f386bd5d8196d46v_2609081812011366.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHa263f063186c41898f386bd5d8196d46v_2609081812011366.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2728",
    "source_url": "https://greenishtradeltd.com/products/26090800002728",
    "description": "৮-ইন-১ মিনি ট্রলি লাগেজ ম্যানিকিউর অ্যান্ড পেডিকিউর কিট | পোর্টেবল নেইল কেয়ার সেট | ট্রাভেল গ্রুমিং কিট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090800002723",
    "title": "অ্যালার্ম প্যাডলক | ১১০ ডেসিবেল সিকিউরিটি সাইরেন তালা | অ্যান্টি-থেফট অ্যালার্ম লক",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 430,
    "retail_price": 680,
    "regular_price": 884,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-08%20at%2013.05.33_2609080711347694.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-08%20at%2013.05.33_2609080711347694.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2723",
    "source_url": "https://greenishtradeltd.com/products/26090800002723",
    "description": "অ্যালার্ম প্যাডলক | ১১০ ডেসিবেল সিকিউরিটি সাইরেন তালা | অ্যান্টি-থেফট অ্যালার্ম লক - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090800002721",
    "title": "ইলেকট্রিক ইয়ার ওয়াক্স ভ্যাকুয়াম ক্লিনার (Electric Ear Wax Vacuum Cleaner)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "গ্যাজেটস",
    "reseller_price": 320,
    "retail_price": 570,
    "regular_price": 741,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F615yI-okWSL._AC_SX679__2609080606219026.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F615yI-okWSL._AC_SX679__2609080606219026.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-37-2721",
    "source_url": "https://greenishtradeltd.com/products/26090800002721",
    "description": "ইলেকট্রিক ইয়ার ওয়াক্স ভ্যাকুয়াম ক্লিনার (Electric Ear Wax Vacuum Cleaner) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (গ্যাজেটস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071600002339",
    "title": "MEMO CX07 Magnetic &amp; Clip-on 2-in-1 Mobile Phone Cooler (15W)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 980,
    "retail_price": 1421,
    "regular_price": 1847,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776801267-picsart_26-04-22_01-52-34-276_2607160620590208.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776801267-picsart_26-04-22_01-52-34-276_2607160620590208.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-2339",
    "source_url": "https://greenishtradeltd.com/products/26071600002339",
    "description": "MEMO CX07 Magnetic &amp; Clip-on 2-in-1 Mobile Phone Cooler (15W) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002211",
    "title": "Oraimo OCD-C53 3A ফাস্ট চার্জিং ডাটা কেবল – টাইপ-সি ও মাইক্রো ইউএসবি সাপোর্ট",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 70,
    "retail_price": 320,
    "regular_price": 416,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-01%20at%205.02.05%20AM_2607012105392158.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-01%20at%205.02.05%20AM_2607012105392158.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-2211",
    "source_url": "https://greenishtradeltd.com/products/26070100002211",
    "description": "Oraimo OCD-C53 3A ফাস্ট চার্জিং ডাটা কেবল – টাইপ-সি ও মাইক্রো ইউএসবি সাপোর্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061100002016",
    "title": "120W Super Fast Charging Data Cable – 1 Meter Braided Cable with Anti-Bending Design",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 110,
    "retail_price": 360,
    "regular_price": 468,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%201.36.57%20AM_2606112103380300.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%201.36.57%20AM_2606112103380300.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-2016",
    "source_url": "https://greenishtradeltd.com/products/26061100002016",
    "description": "120W Super Fast Charging Data Cable – 1 Meter Braided Cable with Anti-Bending Design - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061000002004",
    "title": "X01 Full Charge Separator Type-C Adapter – Auto Power Cut Battery Protector with AI Detection",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 860,
    "retail_price": 1247,
    "regular_price": 1621,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-09%20at%202.05.11%20AM_2606102008269812.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-09%20at%202.05.11%20AM_2606102008269812.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-2004",
    "source_url": "https://greenishtradeltd.com/products/26061000002004",
    "description": "X01 Full Charge Separator Type-C Adapter – Auto Power Cut Battery Protector with AI Detection - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001088",
    "title": "Anker Nano 45W Smart Display Fast Charger (Model A121D) – USB-C PD Ultra Fast Charging GaN Wall Adapter",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 2580,
    "retail_price": 3741,
    "regular_price": 4863,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fe%20Anker%20Nano%2045W%20Smart%20Display%20Fast%20Charger%20(Model%20A121D)._2604232043473975.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fe%20Anker%20Nano%2045W%20Smart%20Display%20Fast%20Charger%20(Model%20A121D)._2604232043473975.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1088",
    "source_url": "https://greenishtradeltd.com/products/26042300001088",
    "description": "Anker Nano 45W Smart Display Fast Charger (Model A121D) – USB-C PD Ultra Fast Charging GaN Wall Adapter - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001087",
    "title": "Anker 30W Nano B2639 Charger Set – USB-C PD Fast Charging Adapter with Type-C Cable",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 1530,
    "retail_price": 2219,
    "regular_price": 2884,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_y3zdeyy3zdeyy3zd_2604232039421302.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_y3zdeyy3zdeyy3zd_2604232039421302.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1087",
    "source_url": "https://greenishtradeltd.com/products/26042300001087",
    "description": "Anker 30W Nano B2639 Charger Set – USB-C PD Fast Charging Adapter with Type-C Cable - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001086",
    "title": "Baseus BSWC21 Wireless Charger – Fast Qi 15W Charging Pad with Smart Protection",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 1120,
    "retail_price": 1624,
    "regular_price": 2111,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_70nhrx70nhrx70nh_2604232035151244.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_70nhrx70nhrx70nh_2604232035151244.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1086",
    "source_url": "https://greenishtradeltd.com/products/26042300001086",
    "description": "Baseus BSWC21 Wireless Charger – Fast Qi 15W Charging Pad with Smart Protection - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001085",
    "title": "Oraimo PowerOmni 251 OCW-T01 Universal Travel Adapter – Multi Plug Fast Charging Travel Charger",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 1000,
    "retail_price": 1450,
    "regular_price": 1885,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_aw5hccaw5hccaw5h7_2604232028420276.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_aw5hccaw5hccaw5h7_2604232028420276.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1085",
    "source_url": "https://greenishtradeltd.com/products/26042300001085",
    "description": "Oraimo PowerOmni 251 OCW-T01 Universal Travel Adapter – Multi Plug Fast Charging Travel Charger - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001084",
    "title": "MOXX MC-30 30W PD GaN Fast Charger Adapter – USB-C Power Delivery Compact Wall Charger",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FMOXX%20MC-30%2030W%20Power%20PD%20GaN%20Adapter_2604232023201996.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FMOXX%20MC-30%2030W%20Power%20PD%20GaN%20Adapter_2604232023201996.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1084",
    "source_url": "https://greenishtradeltd.com/products/26042300001084",
    "description": "MOXX MC-30 30W PD GaN Fast Charger Adapter – USB-C Power Delivery Compact Wall Charger - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001078",
    "title": "Anker PowerPort III 20W Cube PD USB-C Fast Charging Adapter – Compact Power Delivery Charger",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 770,
    "retail_price": 1117,
    "regular_price": 1451,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FAnker%20PowerPort%20III%2020W%20Cube%20PD%20USB-C%20Fast%20Charging%20Adapter%20.._2604231934570701.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FAnker%20PowerPort%20III%2020W%20Cube%20PD%20USB-C%20Fast%20Charging%20Adapter%20.._2604231934570701.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1078",
    "source_url": "https://greenishtradeltd.com/products/26042300001078",
    "description": "Anker PowerPort III 20W Cube PD USB-C Fast Charging Adapter – Compact Power Delivery Charger - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001076",
    "title": "Motorola TurboPower 125W GaN Charger with 6.5A USB-C Cable – Ultra Fast Charging Power Adapter",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FMotorola%20TurboPower%20125W%20GaN%20Charger%20with%20a%206.5A%20USB-C%20cable._2604231932142825.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FMotorola%20TurboPower%20125W%20GaN%20Charger%20with%20a%206.5A%20USB-C%20cable._2604231932142825.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1076",
    "source_url": "https://greenishtradeltd.com/products/26042300001076",
    "description": "Motorola TurboPower 125W GaN Charger with 6.5A USB-C Cable – Ultra Fast Charging Power Adapter - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042300001075",
    "title": "Anker A2511 Wireless Charger – Fast Charging Qi-Certified Pad for Smartphones",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইল ও ট্যাব",
    "reseller_price": 710,
    "retail_price": 1030,
    "regular_price": 1338,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_3ffomr3ffomr3ffo_2604231929026982.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_3ffomr3ffomr3ffo_2604231929026982.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-39-1075",
    "source_url": "https://greenishtradeltd.com/products/26042300001075",
    "description": "Anker A2511 Wireless Charger – Fast Charging Qi-Certified Pad for Smartphones - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইল ও ট্যাব)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002213",
    "title": "Acer V226HQL ২১.৫ ইঞ্চি ফুল এইচডি LED মনিটর – Flicker-Less, Blue Light Filter ও ComfyView",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার &amp; ল্যাপটপ",
    "reseller_price": 11300,
    "retail_price": 16385,
    "regular_price": 21301,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-30%20at%203.48.58%20AM_2607012116328766.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-30%20at%203.48.58%20AM_2607012116328766.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-40-2213",
    "source_url": "https://greenishtradeltd.com/products/26070100002213",
    "description": "Acer V226HQL ২১.৫ ইঞ্চি ফুল এইচডি LED মনিটর – Flicker-Less, Blue Light Filter ও ComfyView - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার &amp; ল্যাপটপ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061100002013",
    "title": "HP EliteBook 840 G6 Laptop – Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, Silver",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার &amp; ল্যাপটপ",
    "reseller_price": 31000,
    "retail_price": 44950,
    "regular_price": 58435,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-06%20at%206.59.37%20AM_2606112055380987.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-06%20at%206.59.37%20AM_2606112055380987.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-40-2013",
    "source_url": "https://greenishtradeltd.com/products/26061100002013",
    "description": "HP EliteBook 840 G6 Laptop – Intel Core i5 8th Gen, 8GB RAM, 256GB SSD, Silver - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার &amp; ল্যাপটপ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002890",
    "title": "রিচার্জেবল ডিজিটাল ইলেকট্রনিক নোজ ট্রিমার M.5009 | Rechargeable Electric Nose Hair Trimmer | নাক ও কানের অতিরিক্ত লোম ট্রিমার",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 340,
    "retail_price": 590,
    "regular_price": 767,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2017.18.38_2609191118563025.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2017.18.38_2609191118563025.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2890",
    "source_url": "https://greenishtradeltd.com/products/26091900002890",
    "description": "রিচার্জেবল ডিজিটাল ইলেকট্রনিক নোজ ট্রিমার M.5009 | Rechargeable Electric Nose Hair Trimmer | নাক ও কানের অতিরিক্ত লোম ট্রিমার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002889",
    "title": "৫ ইন ১ বিউটি কেয়ার ম্যাসাজার | 5 in 1 Beauty Care Massager | ফেস ও বডি ম্যাসাজের জন্য মাল্টিফাংশনাল বিউটি ডিভাইস",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 250,
    "retail_price": 500,
    "regular_price": 650,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1%20(15)_2609191113277210.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1%20(15)_2609191113277210.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2889",
    "source_url": "https://greenishtradeltd.com/products/26091900002889",
    "description": "৫ ইন ১ বিউটি কেয়ার ম্যাসাজার | 5 in 1 Beauty Care Massager | ফেস ও বডি ম্যাসাজের জন্য মাল্টিফাংশনাল বিউটি ডিভাইস - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002882",
    "title": "রিচার্জেবল ইলেকট্রিক লিন্ট রিমুভার | কাপড়ের লোম ও পিলিং পরিষ্কার করার মেশিন",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 510,
    "retail_price": 740,
    "regular_price": 961,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.33.26_2609191014227501.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-19%20at%2014.33.26_2609191014227501.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2882",
    "source_url": "https://greenishtradeltd.com/products/26091900002882",
    "description": "রিচার্জেবল ইলেকট্রিক লিন্ট রিমুভার | কাপড়ের লোম ও পিলিং পরিষ্কার করার মেশিন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002765",
    "title": "ইনিমা কফি গ্রাইন্ডার SC-709A | ১৫০০ ওয়াট মাল্টিফাংশনাল ইলেকট্রিক মসলা ও কফি গ্রাইন্ডার",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 1060,
    "retail_price": 1537,
    "regular_price": 1998,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2013.03.02%20(1)_2609160648293346.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-06%20at%2013.03.02%20(1)_2609160648293346.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2765",
    "source_url": "https://greenishtradeltd.com/products/26091600002765",
    "description": "ইনিমা কফি গ্রাইন্ডার SC-709A | ১৫০০ ওয়াট মাল্টিফাংশনাল ইলেকট্রিক মসলা ও কফি গ্রাইন্ডার - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002754",
    "title": "Electric Insect Pest Killer Mosquito Killer Lamp",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 1440,
    "retail_price": 2088,
    "regular_price": 2714,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17649556911000615931_2609151756525009.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17649556911000615931_2609151756525009.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2754",
    "source_url": "https://greenishtradeltd.com/products/26091500002754",
    "description": "Electric Insect Pest Killer Mosquito Killer Lamp - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002753",
    "title": "USB Mosquito Killer Lamp",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 410,
    "retail_price": 660,
    "regular_price": 858,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17649562191000615938_2609151753013860.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17649562191000615938_2609151753013860.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2753",
    "source_url": "https://greenishtradeltd.com/products/26091500002753",
    "description": "USB Mosquito Killer Lamp - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091500002752",
    "title": "Electronic Killing Mosquitoes Night Lamp Mosquito Killer Lamp",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17649564541000615939_2609151749145237.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F17649564541000615939_2609151749145237.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2752",
    "source_url": "https://greenishtradeltd.com/products/26091500002752",
    "description": "Electronic Killing Mosquitoes Night Lamp Mosquito Killer Lamp - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090300002674",
    "title": "Black &amp; Gold Electric Hair Straightening Comb – Digital Temperature Control Hair Brush",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 430,
    "retail_price": 680,
    "regular_price": 884,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGBHGTBFBV_2609031923154320.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGBHGTBFBV_2609031923154320.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2674",
    "source_url": "https://greenishtradeltd.com/products/26090300002674",
    "description": "Black &amp; Gold Electric Hair Straightening Comb – Digital Temperature Control Hair Brush - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090300002672",
    "title": "3D Facial &amp; Body Roller Massager ZL-206 / XC-206 – Face Lifting &amp; Skin Massage Tool",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FUJNMYUHNY_2609031827137571.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FUJNMYUHNY_2609031827137571.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2672",
    "source_url": "https://greenishtradeltd.com/products/26090300002672",
    "description": "3D Facial &amp; Body Roller Massager ZL-206 / XC-206 – Face Lifting &amp; Skin Massage Tool - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090300002671",
    "title": "Daimasi 1500W Electric Spice Grinder – Dry Masala, Coffee &amp; Grain Grinding Machine",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 700,
    "retail_price": 1015,
    "regular_price": 1320,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGTBHTGBFB_2609031822045844.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGTBHTGBFB_2609031822045844.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2671",
    "source_url": "https://greenishtradeltd.com/products/26090300002671",
    "description": "Daimasi 1500W Electric Spice Grinder – Dry Masala, Coffee &amp; Grain Grinding Machine - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090300002670",
    "title": "Replacement Ceramic Water Filter Cartridge – Tap Water Purifier Filter | SWS Compatible",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 160,
    "retail_price": 410,
    "regular_price": 533,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FFGTBV_2609031815000535.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FFGTBV_2609031815000535.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2670",
    "source_url": "https://greenishtradeltd.com/products/26090300002670",
    "description": "Replacement Ceramic Water Filter Cartridge – Tap Water Purifier Filter | SWS Compatible - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090300002669",
    "title": "Finishing Touch Hair Remover – Instant Pain-Free Facial &amp; Body Hair Remover with Sensor Light",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ইলেকট্রোনিক্স",
    "reseller_price": 400,
    "retail_price": 650,
    "regular_price": 845,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHNYBHGFT_2609031800158530.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHNYBHGFT_2609031800158530.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-41-2669",
    "source_url": "https://greenishtradeltd.com/products/26090300002669",
    "description": "Finishing Touch Hair Remover – Instant Pain-Free Facial &amp; Body Hair Remover with Sensor Light - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ইলেকট্রোনিক্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082000002613",
    "title": "Men’s Two-Tone Silver &amp; Gold Quartz Wristwatch",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 640,
    "retail_price": 928,
    "regular_price": 1206,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FTYGHT_2608201642121083.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FTYGHT_2608201642121083.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2613",
    "source_url": "https://greenishtradeltd.com/products/26082000002613",
    "description": "Men’s Two-Tone Silver &amp; Gold Quartz Wristwatch - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082000002612",
    "title": "Men’s Black Textured Dial Quartz Wristwatch",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 640,
    "retail_price": 928,
    "regular_price": 1206,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fujh7yjh_2608201635469539.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fujh7yjh_2608201635469539.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2612",
    "source_url": "https://greenishtradeltd.com/products/26082000002612",
    "description": "Men’s Black Textured Dial Quartz Wristwatch - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082000002611",
    "title": "Men’s Classic Black Dial Quartz Watch with Stainless Steel Link Bracelet &amp; Rotating Bezel",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 640,
    "retail_price": 928,
    "regular_price": 1206,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftyjhnyh_2608201631475949.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftyjhnyh_2608201631475949.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2611",
    "source_url": "https://greenishtradeltd.com/products/26082000002611",
    "description": "Men’s Classic Black Dial Quartz Watch with Stainless Steel Link Bracelet &amp; Rotating Bezel - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26082000002610",
    "title": "MAXLORD Luxury Gold Quartz Watch for Men",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 640,
    "retail_price": 928,
    "regular_price": 1206,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyghyntrhgt_2608201626508151.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyghyntrhgt_2608201626508151.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2610",
    "source_url": "https://greenishtradeltd.com/products/26082000002610",
    "description": "MAXLORD Luxury Gold Quartz Watch for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002609",
    "title": "MAXLORD MP-004G Royal Blue Luxury Men&#x27;s Watch",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjhie_2608191753539069.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjhie_2608191753539069.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2609",
    "source_url": "https://greenishtradeltd.com/products/26081900002609",
    "description": "MAXLORD MP-004G Royal Blue Luxury Men&#x27;s Watch - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002608",
    "title": "Maxlord MP-004G Men&#x27;s Quartz Watch – Silver Dial &amp; Brown Leather",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftgtrfgvbr_2608191746011512.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftgtrfgvbr_2608191746011512.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2608",
    "source_url": "https://greenishtradeltd.com/products/26081900002608",
    "description": "Maxlord MP-004G Men&#x27;s Quartz Watch – Silver Dial &amp; Brown Leather - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002607",
    "title": "Maxlord 004 Men&#x27;s Watch – Black Dial &amp; Silver Bezel",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgbtfvbrf_2608191737128427.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgbtfvbrf_2608191737128427.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2607",
    "source_url": "https://greenishtradeltd.com/products/26081900002607",
    "description": "Maxlord 004 Men&#x27;s Watch – Black Dial &amp; Silver Bezel - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002606",
    "title": "Maxlord MP-004G Men&#x27;s Quartz Watch – Silver Dial &amp; Brown Leather",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgftrrtf_2608191729485635.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgftrrtf_2608191729485635.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2606",
    "source_url": "https://greenishtradeltd.com/products/26081900002606",
    "description": "Maxlord MP-004G Men&#x27;s Quartz Watch – Silver Dial &amp; Brown Leather - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002605",
    "title": "Maxlord Men&#x27;s Analog Watch – Textured White Dial &amp; Leather Strap",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhgyugyu7_2608191723242592.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhgyugyu7_2608191723242592.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2605",
    "source_url": "https://greenishtradeltd.com/products/26081900002605",
    "description": "Maxlord Men&#x27;s Analog Watch – Textured White Dial &amp; Leather Strap - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002604",
    "title": "Maxlord MP-004G Men&#x27;s Quartz Watch – White Dial &amp; Black Leather",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhnbh_2608191717587643.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhnbh_2608191717587643.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2604",
    "source_url": "https://greenishtradeltd.com/products/26081900002604",
    "description": "Maxlord MP-004G Men&#x27;s Quartz Watch – White Dial &amp; Black Leather - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081900002603",
    "title": "Maxlord Men&#x27;s Quartz Watch – MP-004G Black Leather",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 540,
    "retail_price": 783,
    "regular_price": 1018,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftygr_2608191712323752.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftygr_2608191712323752.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2603",
    "source_url": "https://greenishtradeltd.com/products/26081900002603",
    "description": "Maxlord Men&#x27;s Quartz Watch – MP-004G Black Leather - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26071900002391",
    "title": "MK38 Premium Round AMOLED Smart Watch – Bluetooth Calling | AMOLED HD Display | Health &amp; Sports Tracking",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ছেলেদের ঘড়ি",
    "reseller_price": 1270,
    "retail_price": 1842,
    "regular_price": 2394,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-19%20at%206.00.54%20AM_2607191757013802.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-19%20at%206.00.54%20AM_2607191757013802.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-52-2391",
    "source_url": "https://greenishtradeltd.com/products/26071900002391",
    "description": "MK38 Premium Round AMOLED Smart Watch – Bluetooth Calling | AMOLED HD Display | Health &amp; Sports Tracking - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ছেলেদের ঘড়ি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002901",
    "title": "Hoco EQ27 (AI)!",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 1180,
    "retail_price": 1711,
    "regular_price": 2224,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1784453623-picsart_26-07-19_15-31-29-583_2609200730397657.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1784453623-picsart_26-07-19_15-31-29-583_2609200730397657.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2901",
    "source_url": "https://greenishtradeltd.com/products/26092000002901",
    "description": "Hoco EQ27 (AI)! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26092000002899",
    "title": "hoco. EQ34 Plus প্রিমিয়াম সাউন্ড ও নয়েজ ক্যান্সেলেশন! 🎧",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 710,
    "retail_price": 1030,
    "regular_price": 1338,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1782219608-picsart_26-06-23_18-56-24-976_2609200722400657.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1782219608-picsart_26-06-23_18-56-24-976_2609200722400657.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2899",
    "source_url": "https://greenishtradeltd.com/products/26092000002899",
    "description": "hoco. EQ34 Plus প্রিমিয়াম সাউন্ড ও নয়েজ ক্যান্সেলেশন! 🎧 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002769",
    "title": "HOCO. MMJ11 ENC Bluetooth Neckband Earphone | 100 Hours Music",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 960,
    "retail_price": 1392,
    "regular_price": 1810,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2014.02.47_2609160803071560.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-16%20at%2014.02.47_2609160803071560.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2769",
    "source_url": "https://greenishtradeltd.com/products/26091600002769",
    "description": "HOCO. MMJ11 ENC Bluetooth Neckband Earphone | 100 Hours Music - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002768",
    "title": "Recrsi ny030",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 650,
    "retail_price": 943,
    "regular_price": 1225,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1765129377-20251207_233305_2609160755558626.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1765129377-20251207_233305_2609160755558626.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2768",
    "source_url": "https://greenishtradeltd.com/products/26091600002768",
    "description": "Recrsi ny030 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002767",
    "title": "🔥 MEKE NB20 Neckband",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 500,
    "retail_price": 725,
    "regular_price": 943,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1765039919-fb_img_1765039406416_2609160752583640.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1765039919-fb_img_1765039406416_2609160752583640.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2767",
    "source_url": "https://greenishtradeltd.com/products/26091600002767",
    "description": "🔥 MEKE NB20 Neckband - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091600002766",
    "title": "REGRSI T12 Wireless Sports Earphones",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 410,
    "retail_price": 660,
    "regular_price": 858,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1766948539-picsart_25-12-29_01-01-05-145_2609160749241870.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1766948539-picsart_25-12-29_01-01-05-145_2609160749241870.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2766",
    "source_url": "https://greenishtradeltd.com/products/26091600002766",
    "description": "REGRSI T12 Wireless Sports Earphones - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002507",
    "title": "Selilo R1 ১০০ ভাষায় ট্রান্সলেশন করা যায় ( 6 month warranty)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 1000,
    "retail_price": 1450,
    "regular_price": 1885,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1784800207-img-20260723-wa0168_2608021752507426.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1784800207-img-20260723-wa0168_2608021752507426.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2507",
    "source_url": "https://greenishtradeltd.com/products/26080200002507",
    "description": "Selilo R1 ১০০ ভাষায় ট্রান্সলেশন করা যায় ( 6 month warranty) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073000002493",
    "title": "Hoco X15 Gaming TWS Wireless Earbuds – 65ms Low Latency, ENC Noise Reduction, LED Display Charging Case",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 410,
    "retail_price": 660,
    "regular_price": 858,
    "stock": 13,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-26%20at%2010.57.27%20PM_2607301932572079.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-26%20at%2010.57.27%20PM_2607301932572079.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2493",
    "source_url": "https://greenishtradeltd.com/products/26073000002493",
    "description": "Hoco X15 Gaming TWS Wireless Earbuds – 65ms Low Latency, ENC Noise Reduction, LED Display Charging Case - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073000002492",
    "title": "Keqiwear KW71 Ultra 3 Mini স্মার্টওয়াচ – Bluetooth Calling, HD Display, Health Monitor ও মাল্টি স্ট্র্যাপ",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 770,
    "retail_price": 1117,
    "regular_price": 1451,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%205.37.18%20AM_2607301923357144.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%205.37.18%20AM_2607301923357144.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2492",
    "source_url": "https://greenishtradeltd.com/products/26073000002492",
    "description": "Keqiwear KW71 Ultra 3 Mini স্মার্টওয়াচ – Bluetooth Calling, HD Display, Health Monitor ও মাল্টি স্ট্র্যাপ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073000002491",
    "title": "Oraimo Necklace 5 ANC (OEB-611) ওয়্যারলেস নেকব্যান্ড – ANC, 360° Spatial Audio, 40 ঘণ্টা ব্যাটারি ব্যাকআপ",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 2130,
    "retail_price": 3089,
    "regular_price": 4015,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%205.54.41%20AM_2607301920574467.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%205.54.41%20AM_2607301920574467.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2491",
    "source_url": "https://greenishtradeltd.com/products/26073000002491",
    "description": "Oraimo Necklace 5 ANC (OEB-611) ওয়্যারলেস নেকব্যান্ড – ANC, 360° Spatial Audio, 40 ঘণ্টা ব্যাটারি ব্যাকআপ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073000002487",
    "title": "XFT-01 TWS ব্লুটুথ ইয়ারবাডস – H2 স্টাইল, ANC সাপোর্ট, Bluetooth 5.3 ও ওয়্যারলেস চার্জিং",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 500,
    "retail_price": 725,
    "regular_price": 943,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-27%20at%204.15.05%20AM_2607301855544965.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-27%20at%204.15.05%20AM_2607301855544965.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2487",
    "source_url": "https://greenishtradeltd.com/products/26073000002487",
    "description": "XFT-01 TWS ব্লুটুথ ইয়ারবাডস – H2 স্টাইল, ANC সাপোর্ট, Bluetooth 5.3 ও ওয়্যারলেস চার্জিং - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070100002214",
    "title": "Anker ES-67 ওয়্যারলেস ব্লুটুথ নেকব্যান্ড – Bluetooth 5.4, 600mAh ব্যাটারি ও এক্সট্রা বেস",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "হেডফোনস এন্ড ইয়ারফোনস",
    "reseller_price": 290,
    "retail_price": 540,
    "regular_price": 702,
    "stock": 3,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-28%20at%208.06.31%20AM_2607012134078365.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-28%20at%208.06.31%20AM_2607012134078365.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-53-2214",
    "source_url": "https://greenishtradeltd.com/products/26070100002214",
    "description": "Anker ES-67 ওয়্যারলেস ব্লুটুথ নেকব্যান্ড – Bluetooth 5.4, 600mAh ব্যাটারি ও এক্সট্রা বেস - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (হেডফোনস এন্ড ইয়ারফোনস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081200002558",
    "title": "20000 mah Power Bank 22.5W Fast Charging PD Transparent Power bank with Night Light By latfu",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 1150,
    "retail_price": 1668,
    "regular_price": 2168,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2000.12.04_2608121812549668.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-08-13%20at%2000.12.04_2608121812549668.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2558",
    "source_url": "https://greenishtradeltd.com/products/26081200002558",
    "description": "20000 mah Power Bank 22.5W Fast Charging PD Transparent Power bank with Night Light By latfu - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073000002489",
    "title": "hoco. DB84 10000mAh ফাস্ট চার্জিং পাওয়ার ব্যাংক – 22.5W, PD20W, QC3.0 ও LED ডিসপ্লেসহ",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 610,
    "retail_price": 885,
    "regular_price": 1150,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-26%20at%202.26.59%20AM_2607301900037308.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-26%20at%202.26.59%20AM_2607301900037308.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2489",
    "source_url": "https://greenishtradeltd.com/products/26073000002489",
    "description": "hoco. DB84 10000mAh ফাস্ট চার্জিং পাওয়ার ব্যাংক – 22.5W, PD20W, QC3.0 ও LED ডিসপ্লেসহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002143",
    "title": "Anker Zolo 10,000mAh 22.5w",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 2200,
    "retail_price": 3190,
    "regular_price": 4147,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1766609056-picsart_25-12-25_02-37-28-134_2606232214428517.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1766609056-picsart_25-12-25_02-37-28-134_2606232214428517.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2143",
    "source_url": "https://greenishtradeltd.com/products/26062300002143",
    "description": "Anker Zolo 10,000mAh 22.5w - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002142",
    "title": "MMJ 04 Tree PD35WHoco 20000mAh 35W Super Fast Charging",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 2210,
    "retail_price": 3205,
    "regular_price": 4166,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1767814072-picsart_26-01-08_01-24-10-381_2606232211597369.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1767814072-picsart_26-01-08_01-24-10-381_2606232211597369.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2142",
    "source_url": "https://greenishtradeltd.com/products/26062300002142",
    "description": "MMJ 04 Tree PD35WHoco 20000mAh 35W Super Fast Charging - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002141",
    "title": "JOYROOM 10000mAh Qi2 Magnetic Wireless Power Bank JR PBM11",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 2820,
    "retail_price": 4089,
    "regular_price": 5316,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1769975519-picsart_26-02-02_01-49-32-003_2606232054198716.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1769975519-picsart_26-02-02_01-49-32-003_2606232054198716.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2141",
    "source_url": "https://greenishtradeltd.com/products/26062300002141",
    "description": "JOYROOM 10000mAh Qi2 Magnetic Wireless Power Bank JR PBM11 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002140",
    "title": "MMAX MXPB100 10,000mAh",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1772825600-picsart_26-03-07_01-33-02-895_2606232041563363.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1772825600-picsart_26-03-07_01-33-02-895_2606232041563363.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2140",
    "source_url": "https://greenishtradeltd.com/products/26062300002140",
    "description": "MMAX MXPB100 10,000mAh - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002139",
    "title": "Hoco DB98A 10000mAh PD20W Magnetic Wireless Fast Charging Power Bank",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 1640,
    "retail_price": 2378,
    "regular_price": 3091,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775330493-picsart_26-04-05_01-21-21-555_2606232020280436.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775330493-picsart_26-04-05_01-21-21-555_2606232020280436.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2139",
    "source_url": "https://greenishtradeltd.com/products/26062300002139",
    "description": "Hoco DB98A 10000mAh PD20W Magnetic Wireless Fast Charging Power Bank - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002138",
    "title": "Joyroom JR L003 Jelly Series 10000mAh 22.5W Mini Power Bank (with Built-in Lightning Cable)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 1240,
    "retail_price": 1798,
    "regular_price": 2337,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775677254-picsart_26-04-09_01-40-42-283%20(1)_2606232016598747.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775677254-picsart_26-04-09_01-40-42-283%20(1)_2606232016598747.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2138",
    "source_url": "https://greenishtradeltd.com/products/26062300002138",
    "description": "Joyroom JR L003 Jelly Series 10000mAh 22.5W Mini Power Bank (with Built-in Lightning Cable) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002137",
    "title": "Hoco MMJ 21 22.5W 100000mAh Power Bank",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 6040,
    "retail_price": 8758,
    "regular_price": 11385,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776017602-picsart_26-04-13_00-12-07-884%20(1)_2606232007053392.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776017602-picsart_26-04-13_00-12-07-884%20(1)_2606232007053392.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2137",
    "source_url": "https://greenishtradeltd.com/products/26062300002137",
    "description": "Hoco MMJ 21 22.5W 100000mAh Power Bank - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002136",
    "title": "SANY SPB 19 10000mAh Universal Power Bank",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 820,
    "retail_price": 1189,
    "regular_price": 1546,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776199140-picsart_26-04-15_02-37-06-628_2606231948217153.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776199140-picsart_26-04-15_02-37-06-628_2606231948217153.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2136",
    "source_url": "https://greenishtradeltd.com/products/26062300002136",
    "description": "SANY SPB 19 10000mAh Universal Power Bank - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002135",
    "title": "BD-PON 12000mAh Multifunctional Mini UPS for Router &amp; ONU",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 1970,
    "retail_price": 2857,
    "regular_price": 3713,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776889589-picsart_26-04-23_02-23-52-904_2606231945512500.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776889589-picsart_26-04-23_02-23-52-904_2606231945512500.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2135",
    "source_url": "https://greenishtradeltd.com/products/26062300002135",
    "description": "BD-PON 12000mAh Multifunctional Mini UPS for Router &amp; ONU - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062300002133",
    "title": "MARSRIVA ET3 Smart Mini DC UPS (8400mAh, 18W)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "পাওয়ার ব্যাংক",
    "reseller_price": 1470,
    "retail_price": 2132,
    "regular_price": 2771,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777233488-picsart_26-04-27_01-56-27-548_2606231943574397.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777233488-picsart_26-04-27_01-56-27-548_2606231943574397.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-63-2133",
    "source_url": "https://greenishtradeltd.com/products/26062300002133",
    "description": "MARSRIVA ET3 Smart Mini DC UPS (8400mAh, 18W) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (পাওয়ার ব্যাংক)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091900002885",
    "title": "3 in1 Wireless Speaker Mobile Stand Power Bank",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 440,
    "retail_price": 690,
    "regular_price": 897,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F7AXh1000573012_2609191040323039.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F7AXh1000573012_2609191040323039.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-2885",
    "source_url": "https://greenishtradeltd.com/products/26091900002885",
    "description": "3 in1 Wireless Speaker Mobile Stand Power Bank - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26073000002494",
    "title": "X-922 Disco Series Wireless Bluetooth Speaker – RGB লাইট, 5W সাউন্ড, FM রেডিও ও 1200mAh ব্যাটারি",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 490,
    "retail_price": 711,
    "regular_price": 924,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-26%20at%203.48.10%20AM_2607301936035308.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-26%20at%203.48.10%20AM_2607301936035308.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-2494",
    "source_url": "https://greenishtradeltd.com/products/26073000002494",
    "description": "X-922 Disco Series Wireless Bluetooth Speaker – RGB লাইট, 5W সাউন্ড, FM রেডিও ও 1200mAh ব্যাটারি - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002051",
    "title": "🎶 Soundcore Select 4 Go",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 2850,
    "retail_price": 4133,
    "regular_price": 5372,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781032516-picsart_26-06-10_01-12-46-290_2606152015304159.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781032516-picsart_26-06-10_01-12-46-290_2606152015304159.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-2051",
    "source_url": "https://greenishtradeltd.com/products/26061500002051",
    "description": "🎶 Soundcore Select 4 Go - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002050",
    "title": "🔥 JBL HD 100 Wireless Speaker",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 1050,
    "retail_price": 1523,
    "regular_price": 1979,
    "stock": 8,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781286077-picsart_26-06-12_23-39-25-828_2606152013402170.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781286077-picsart_26-06-12_23-39-25-828_2606152013402170.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-2050",
    "source_url": "https://greenishtradeltd.com/products/26061500002050",
    "description": "🔥 JBL HD 100 Wireless Speaker - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061500002049",
    "title": "🔥 J iPOK P117: সুপার বেস স্পিকার! 🔊",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781552168-picsart_26-06-16_01-34-28-351_2606152001358929.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781552168-picsart_26-06-16_01-34-28-351_2606152001358929.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-2049",
    "source_url": "https://greenishtradeltd.com/products/26061500002049",
    "description": "🔥 J iPOK P117: সুপার বেস স্পিকার! 🔊 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001259",
    "title": "Sany S2005 Portable Bluetooth Bass Speaker Wireless Speaker Deep Bass FM USB TF Card Support",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 920,
    "retail_price": 1334,
    "regular_price": 1734,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FSany%20S2005%20portable%20Bluetooth%20bass%20speaker._2604271732401173.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FSany%20S2005%20portable%20Bluetooth%20bass%20speaker._2604271732401173.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1259",
    "source_url": "https://greenishtradeltd.com/products/26042700001259",
    "description": "Sany S2005 Portable Bluetooth Bass Speaker Wireless Speaker Deep Bass FM USB TF Card Support - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001258",
    "title": "Tervi XR 8A14 Wireless Bluetooth Speaker Portable Speaker Deep Bass FM USB TF Card Support",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 920,
    "retail_price": 1334,
    "regular_price": 1734,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftfghyxdtrgbdf_2604271720327735.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftfghyxdtrgbdf_2604271720327735.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1258",
    "source_url": "https://greenishtradeltd.com/products/26042700001258",
    "description": "Tervi XR 8A14 Wireless Bluetooth Speaker Portable Speaker Deep Bass FM USB TF Card Support - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001251",
    "title": "X-702 Car Shaped Portable Wireless Bluetooth Speaker | RGB Light, FM, USB, TF Card &amp; Super Bass Mini Speaker",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 840,
    "retail_price": 1218,
    "regular_price": 1583,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fx702_2604270747048289.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fx702_2604270747048289.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1251",
    "source_url": "https://greenishtradeltd.com/products/26042700001251",
    "description": "X-702 Car Shaped Portable Wireless Bluetooth Speaker | RGB Light, FM, USB, TF Card &amp; Super Bass Mini Speaker - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001250",
    "title": "HM-805 Portable Wireless Bluetooth Speaker | RGB Waterproof Speaker with TWS, FM, USB &amp; TF Card Support",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 780,
    "retail_price": 1131,
    "regular_price": 1470,
    "stock": 11,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHM-805%20portable%20wireless%20speaker._2604270725241776.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHM-805%20portable%20wireless%20speaker._2604270725241776.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1250",
    "source_url": "https://greenishtradeltd.com/products/26042700001250",
    "description": "HM-805 Portable Wireless Bluetooth Speaker | RGB Waterproof Speaker with TWS, FM, USB &amp; TF Card Support - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001249",
    "title": "Transparent Portable Bluetooth Speaker (Top Picks)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 780,
    "retail_price": 1131,
    "regular_price": 1470,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftransparent%20portable%20Bluetooth%20speaker_2604270721389800.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftransparent%20portable%20Bluetooth%20speaker_2604270721389800.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1249",
    "source_url": "https://greenishtradeltd.com/products/26042700001249",
    "description": "Transparent Portable Bluetooth Speaker (Top Picks) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001248",
    "title": "Greatnice GTS-1550 Portable Wireless Bluetooth Speaker | Dual Speaker Super Bass with FM, USB, TF &amp; RGB Light",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fa%20Greatnice%20GTS-1550%20wireless%20speaker_2604270718243642.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fa%20Greatnice%20GTS-1550%20wireless%20speaker_2604270718243642.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1248",
    "source_url": "https://greenishtradeltd.com/products/26042700001248",
    "description": "Greatnice GTS-1550 Portable Wireless Bluetooth Speaker | Dual Speaker Super Bass with FM, USB, TF &amp; RGB Light - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042700001247",
    "title": "X-811 Portable Wireless Bluetooth Speaker | Mini RGB Disco Light Speaker with FM, USB &amp; TF Card Support",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "সাউন্ড স্পিকার",
    "reseller_price": 580,
    "retail_price": 841,
    "regular_price": 1093,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FX-811%20Portable%20Wireless%20Speaker._2604270709223271.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FX-811%20Portable%20Wireless%20Speaker._2604270709223271.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-65-1247",
    "source_url": "https://greenishtradeltd.com/products/26042700001247",
    "description": "X-811 Portable Wireless Bluetooth Speaker | Mini RGB Disco Light Speaker with FM, USB &amp; TF Card Support - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (সাউন্ড স্পিকার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070300002239",
    "title": "Remax watch 10",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 2770,
    "retail_price": 4017,
    "regular_price": 5221,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1764706191-images-(39)%20(1)_2607032039141386.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1764706191-images-(39)%20(1)_2607032039141386.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2239",
    "source_url": "https://greenishtradeltd.com/products/26070300002239",
    "description": "Remax watch 10 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070300002238",
    "title": "KEQIWEAR KW83 MAX Smart Watch (7+1 Combo Pack)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 830,
    "retail_price": 1204,
    "regular_price": 1565,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775752287-picsart_26-04-09_22-28-31-985%20(3)_2607032031179548.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775752287-picsart_26-04-09_22-28-31-985%20(3)_2607032031179548.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2238",
    "source_url": "https://greenishtradeltd.com/products/26070300002238",
    "description": "KEQIWEAR KW83 MAX Smart Watch (7+1 Combo Pack) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070300002237",
    "title": "⚡ Keqiwear KW78 Ultra 3 Smart Watch",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 750,
    "retail_price": 1088,
    "regular_price": 1414,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781899731-picsart_26-06-20_02-06-33-461_2607032020501488.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1781899731-picsart_26-06-20_02-06-33-461_2607032020501488.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2237",
    "source_url": "https://greenishtradeltd.com/products/26070300002237",
    "description": "⚡ Keqiwear KW78 Ultra 3 Smart Watch - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070300002236",
    "title": "oraimo Watch 6 HAYATO (Free Fire Edition) 🤩।",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 1880,
    "retail_price": 2726,
    "regular_price": 3544,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1782852880-picsart_26-07-01_02-51-05-670_2607032016501319.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1782852880-picsart_26-07-01_02-51-05-670_2607032016501319.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2236",
    "source_url": "https://greenishtradeltd.com/products/26070300002236",
    "description": "oraimo Watch 6 HAYATO (Free Fire Edition) 🤩। - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002027",
    "title": "Keqiwear KW2 Max Smartwatch With 3 Bracelets",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 760,
    "retail_price": 1102,
    "regular_price": 1433,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1765564368-picsart_25-12-13_00-19-40-956_2606121858348854.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1765564368-picsart_25-12-13_00-19-40-956_2606121858348854.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2027",
    "source_url": "https://greenishtradeltd.com/products/26061200002027",
    "description": "Keqiwear KW2 Max Smartwatch With 3 Bracelets - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002026",
    "title": "KEQIWEAR KW83 MAX Smart Watch (7+1 Combo Pack)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 760,
    "retail_price": 1102,
    "regular_price": 1433,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775751691-picsart_26-04-09_22-19-06-649_2606121614214459.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1775751691-picsart_26-04-09_22-19-06-649_2606121614214459.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2026",
    "source_url": "https://greenishtradeltd.com/products/26061200002026",
    "description": "KEQIWEAR KW83 MAX Smart Watch (7+1 Combo Pack) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002025",
    "title": "KW25 MAX Smart Watch",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 710,
    "retail_price": 1030,
    "regular_price": 1338,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776015420-picsart_26-04-12_23-34-52-834%20(1)_2606121515197167.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1776015420-picsart_26-04-12_23-34-52-834%20(1)_2606121515197167.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2025",
    "source_url": "https://greenishtradeltd.com/products/26061200002025",
    "description": "KW25 MAX Smart Watch - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002023",
    "title": "oraimo Watch 5 Lite (OSW 804) – 2.01&quot; HD Screen Smartwatch with Bluetooth Calling",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 1590,
    "retail_price": 2306,
    "regular_price": 2997,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777904791-picsart_26-05-04_20-22-08-382_2606121435016546.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777904791-picsart_26-05-04_20-22-08-382_2606121435016546.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2023",
    "source_url": "https://greenishtradeltd.com/products/26061200002023",
    "description": "oraimo Watch 5 Lite (OSW 804) – 2.01&quot; HD Screen Smartwatch with Bluetooth Calling - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002021",
    "title": "BW17 Smartwatch – স্মার্ট লাইফস্টাইলের সেরা সঙ্গী",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 1850,
    "retail_price": 2683,
    "regular_price": 3487,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1778701450-picsart_26-05-14_01-42-39-994_2606121431069454.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1778701450-picsart_26-05-14_01-42-39-994_2606121431069454.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2021",
    "source_url": "https://greenishtradeltd.com/products/26061200002021",
    "description": "BW17 Smartwatch – স্মার্ট লাইফস্টাইলের সেরা সঙ্গী - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002020",
    "title": "BW16 Plus Smart Watch with Sim &amp; Camera",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 1650,
    "retail_price": 2393,
    "regular_price": 3110,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777059739-picsart_26-04-25_01-40-06-135%20(1)_2606121625012427.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777059739-picsart_26-04-25_01-40-06-135%20(1)_2606121625012427.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2020",
    "source_url": "https://greenishtradeltd.com/products/26061200002020",
    "description": "BW16 Plus Smart Watch with Sim &amp; Camera - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002019",
    "title": "Keqiwear KW81 Max – স্টাইল ও ফিটনেসের সেরা কম্বো! ⌚✨",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 760,
    "retail_price": 1102,
    "regular_price": 1433,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1779769697-picsart_26-05-26_10-26-14-163_2606121419451244.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1779769697-picsart_26-05-26_10-26-14-163_2606121419451244.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2019",
    "source_url": "https://greenishtradeltd.com/products/26061200002019",
    "description": "Keqiwear KW81 Max – স্টাইল ও ফিটনেসের সেরা কম্বো! ⌚✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002018",
    "title": "🌸 Keqiwear KW71 Ultra 3 Mini 🌸",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "স্মার্ট ওয়াচ",
    "reseller_price": 760,
    "retail_price": 1102,
    "regular_price": 1433,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhyjnyh_2606121416158386.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhyjnyh_2606121416158386.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-66-2018",
    "source_url": "https://greenishtradeltd.com/products/26061200002018",
    "description": "🌸 Keqiwear KW71 Ultra 3 Mini 🌸 - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (স্মার্ট ওয়াচ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002509",
    "title": "Solitine SOL604 Premium Mini DC UPS",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 1650,
    "retail_price": 2393,
    "regular_price": 3110,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1772824248-picsart_26-03-07_01-06-48-840_2608021759179521.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1772824248-picsart_26-03-07_01-06-48-840_2608021759179521.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-2509",
    "source_url": "https://greenishtradeltd.com/products/26080200002509",
    "description": "Solitine SOL604 Premium Mini DC UPS - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26080200002508",
    "title": "N11 Gaming Cooler Fan",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 800,
    "retail_price": 1160,
    "regular_price": 1508,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777794620-picsart_26-05-03_13-50-07-728_2608021756581262.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777794620-picsart_26-05-03_13-50-07-728_2608021756581262.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-2508",
    "source_url": "https://greenishtradeltd.com/products/26080200002508",
    "description": "N11 Gaming Cooler Fan - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061200002024",
    "title": "Premium mouse pad",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 110,
    "retail_price": 360,
    "regular_price": 468,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1768679437-picsart_26-01-18_01-49-17-598_2606121629079378.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1768679437-picsart_26-01-18_01-49-17-598_2606121629079378.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-2024",
    "source_url": "https://greenishtradeltd.com/products/26061200002024",
    "description": "Premium mouse pad - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001745",
    "title": "2.4G Wireless Keyboard &amp; Mouse Combo Set Compact USB Plug &amp; Play",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 730,
    "retail_price": 1059,
    "regular_price": 1376,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgdkgkrt7htt8_2605101827038792.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgdkgkrt7htt8_2605101827038792.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-1745",
    "source_url": "https://greenishtradeltd.com/products/26051000001745",
    "description": "2.4G Wireless Keyboard &amp; Mouse Combo Set Compact USB Plug &amp; Play - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001744",
    "title": "Aptech W61 Wireless Rechargeable Silent Mouse Black",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 500,
    "retail_price": 725,
    "regular_price": 943,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fryrtrey6urt_2605101819339327.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fryrtrey6urt_2605101819339327.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-1744",
    "source_url": "https://greenishtradeltd.com/products/26051000001744",
    "description": "Aptech W61 Wireless Rechargeable Silent Mouse Black - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001743",
    "title": "Turbo Fire MS-7 Gaming Mouse 3200 DPI RGB USB Mouse",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 430,
    "retail_price": 680,
    "regular_price": 884,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdjgdjdg_2605101812328869.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdjgdjdg_2605101812328869.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-1743",
    "source_url": "https://greenishtradeltd.com/products/26051000001743",
    "description": "Turbo Fire MS-7 Gaming Mouse 3200 DPI RGB USB Mouse - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001742",
    "title": "Logitech M90 Black Wired Optical USB Mouse 1000 DPI",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 430,
    "retail_price": 680,
    "regular_price": 884,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftght_2605101805236369.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftght_2605101805236369.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-1742",
    "source_url": "https://greenishtradeltd.com/products/26051000001742",
    "description": "Logitech M90 Black Wired Optical USB Mouse 1000 DPI - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001741",
    "title": "Aptech FX91 Wired Optical USB Office Mouse 1200 DPI",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 290,
    "retail_price": 540,
    "regular_price": 702,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytujj_2605101752280732.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fytujj_2605101752280732.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-1741",
    "source_url": "https://greenishtradeltd.com/products/26051000001741",
    "description": "Aptech FX91 Wired Optical USB Office Mouse 1200 DPI - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001740",
    "title": "HP W10 RGB Bluetooth &amp; 2.4G Wireless Rechargeable Mouse Type-C Charging",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 290,
    "retail_price": 540,
    "regular_price": 702,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_b6kk0eb6kk0eb6kk_2605101738297440.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGemini_Generated_Image_b6kk0eb6kk0eb6kk_2605101738297440.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-1740",
    "source_url": "https://greenishtradeltd.com/products/26051000001740",
    "description": "HP W10 RGB Bluetooth &amp; 2.4G Wireless Rechargeable Mouse Type-C Charging - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000801",
    "title": "A4TECH KRS-82 USB Multimedia Keyboard | Durable Wired Keyboard with Soft Typing &amp; Multimedia Keys for PC &amp; Laptop",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 880,
    "retail_price": 1276,
    "regular_price": 1659,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FThe%20product%20shown%20is%20an%20A4TECH%20KRS-82%20USB%20Multimedia%20Keyboard._2604211200583868.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FThe%20product%20shown%20is%20an%20A4TECH%20KRS-82%20USB%20Multimedia%20Keyboard._2604211200583868.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-0801",
    "source_url": "https://greenishtradeltd.com/products/26042100000801",
    "description": "A4TECH KRS-82 USB Multimedia Keyboard | Durable Wired Keyboard with Soft Typing &amp; Multimedia Keys for PC &amp; Laptop - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000797",
    "title": "Bajeal T350 RGB Gaming Keyboard and Mouse Combo | Backlit Keyboard with Gaming Mouse for PC &amp; Laptop",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 800,
    "retail_price": 1160,
    "regular_price": 1508,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FThe%20image%20displays%20the%20Bajeal%20T350%20RGB%20Gaming%20Keyboard%20and%20Mouse%20Combo._2604211157283315.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FThe%20image%20displays%20the%20Bajeal%20T350%20RGB%20Gaming%20Keyboard%20and%20Mouse%20Combo._2604211157283315.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-0797",
    "source_url": "https://greenishtradeltd.com/products/26042100000797",
    "description": "Bajeal T350 RGB Gaming Keyboard and Mouse Combo | Backlit Keyboard with Gaming Mouse for PC &amp; Laptop - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000783",
    "title": "Jedel K29 Wired USB Office Keyboard | Durable Full-Size Keyboard with Smooth Typing for PC &amp; Laptop",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "কম্পিউটার এক্সেসরিজ",
    "reseller_price": 340,
    "retail_price": 590,
    "regular_price": 767,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FElite%20KB25%20Wired%20Keyboa_2604211138034984.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FElite%20KB25%20Wired%20Keyboa_2604211138034984.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-67-0783",
    "source_url": "https://greenishtradeltd.com/products/26042100000783",
    "description": "Jedel K29 Wired USB Office Keyboard | Durable Full-Size Keyboard with Smooth Typing for PC &amp; Laptop - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (কম্পিউটার এক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001748",
    "title": "Edison Fast Charging Wall Charger 15W/25W White Safety Adapter",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 90,
    "retail_price": 340,
    "regular_price": 442,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhklfehjfjikjpo_2605101847026570.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fhklfehjfjikjpo_2605101847026570.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-1748",
    "source_url": "https://greenishtradeltd.com/products/26051000001748",
    "description": "Edison Fast Charging Wall Charger 15W/25W White Safety Adapter - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001747",
    "title": "Symphony Black Android Wall Charger Fast Charging Adapter",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 80,
    "retail_price": 330,
    "regular_price": 429,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fffuyrgtrh_2605101840280730.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fffuyrgtrh_2605101840280730.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-1747",
    "source_url": "https://greenishtradeltd.com/products/26051000001747",
    "description": "Symphony Black Android Wall Charger Fast Charging Adapter - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051000001746",
    "title": "Anik Telecom Android Charger for Feature &amp; Button Phones",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 70,
    "retail_price": 320,
    "regular_price": 416,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Frjtdjtejujhguy_2605101833459909.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Frjtdjtejujhguy_2605101833459909.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-1746",
    "source_url": "https://greenishtradeltd.com/products/26051000001746",
    "description": "Anik Telecom Android Charger for Feature &amp; Button Phones - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000836",
    "title": "TP-Link Power Adapter for Powerline Adapter Kits | AV600 TL-PA4010KIT Compatible 100–240V DC 5.5×2.5mm Power Supply Adapter",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 180,
    "retail_price": 430,
    "regular_price": 559,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FTP-Link%20Power%20Adapter_2604212052177434.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FTP-Link%20Power%20Adapter_2604212052177434.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0836",
    "source_url": "https://greenishtradeltd.com/products/26042100000836",
    "description": "TP-Link Power Adapter for Powerline Adapter Kits | AV600 TL-PA4010KIT Compatible 100–240V DC 5.5×2.5mm Power Supply Adapter - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000835",
    "title": "CCD Outdoor Waterproof Power Adapter | AC to DC 12V CCTV Camera Power Supply for Security System &amp; Outdoor Use",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fawsq_2604212046510393.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fawsq_2604212046510393.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0835",
    "source_url": "https://greenishtradeltd.com/products/26042100000835",
    "description": "CCD Outdoor Waterproof Power Adapter | AC to DC 12V CCTV Camera Power Supply for Security System &amp; Outdoor Use - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000821",
    "title": "YAGE YG-T109 Rechargeable LED Table Lamp | Touch Control Eye-Care Study Light with Pen &amp; Phone Holder",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 710,
    "retail_price": 1030,
    "regular_price": 1338,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fqwg_2604211913570099.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fqwg_2604211913570099.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0821",
    "source_url": "https://greenishtradeltd.com/products/26042100000821",
    "description": "YAGE YG-T109 Rechargeable LED Table Lamp | Touch Control Eye-Care Study Light with Pen &amp; Phone Holder - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000806",
    "title": "TOKQI M03 Handheld 3-Axis AI Tracking Gimbal Stabilizer | Smart Anti-Shake Smartphone Gimbal with Fill Light &amp; Wireless Mic",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 7000,
    "retail_price": 10150,
    "regular_price": 13195,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F2111_2604211206020411.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F2111_2604211206020411.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0806",
    "source_url": "https://greenishtradeltd.com/products/26042100000806",
    "description": "TOKQI M03 Handheld 3-Axis AI Tracking Gimbal Stabilizer | Smart Anti-Shake Smartphone Gimbal with Fill Light &amp; Wireless Mic - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000799",
    "title": "F5 3-Axis Foldable Gimbal Stabilizer for Smartphones | Smart Anti-Shake Vlogging Stabilizer with Face Tracking",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 4760,
    "retail_price": 6902,
    "regular_price": 8973,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FF5%203-Axis%20Foldable%20Gimbal%20Stabilizer%20for%20smartphones_2604211158313860.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FF5%203-Axis%20Foldable%20Gimbal%20Stabilizer%20for%20smartphones_2604211158313860.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0799",
    "source_url": "https://greenishtradeltd.com/products/26042100000799",
    "description": "F5 3-Axis Foldable Gimbal Stabilizer for Smartphones | Smart Anti-Shake Vlogging Stabilizer with Face Tracking - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000790",
    "title": "C16 Selfie Stick Tripod with Tracking Stabilizer &amp; Built-in Fill Light | AI Face Tracking Phone Holder for Vlogging &amp; Live Streaming",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 2550,
    "retail_price": 3698,
    "regular_price": 4807,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fqsaa_2604211152195716.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fqsaa_2604211152195716.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0790",
    "source_url": "https://greenishtradeltd.com/products/26042100000790",
    "description": "C16 Selfie Stick Tripod with Tracking Stabilizer &amp; Built-in Fill Light | AI Face Tracking Phone Holder for Vlogging &amp; Live Streaming - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000786",
    "title": "Ulanzi MT-78 Extendable Quick-Release Tripod | Professional Selfie Stick, Phone Holder &amp; Live Streaming Stand",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 2100,
    "retail_price": 3045,
    "regular_price": 3959,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FUlanzi%20MT-78%20Extendable%20Quick-Release%20Tripod_2604211145461364.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FUlanzi%20MT-78%20Extendable%20Quick-Release%20Tripod_2604211145461364.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0786",
    "source_url": "https://greenishtradeltd.com/products/26042100000786",
    "description": "Ulanzi MT-78 Extendable Quick-Release Tripod | Professional Selfie Stick, Phone Holder &amp; Live Streaming Stand - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000782",
    "title": "Q185 Intelligent Face Tracking Selfie Stick",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 1470,
    "retail_price": 2132,
    "regular_price": 2771,
    "stock": 20,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fe%20Q185%20Intelligent%20Face%20Tracking%20Selfie%20Stick%2C_2604211142574506.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fe%20Q185%20Intelligent%20Face%20Tracking%20Selfie%20Stick%2C_2604211142574506.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0782",
    "source_url": "https://greenishtradeltd.com/products/26042100000782",
    "description": "Q185 Intelligent Face Tracking Selfie Stick - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042100000746",
    "title": "L-015 Steadiness Carbon Steel Foldable Mobile Phone Stand – Adjustable Desktop Holder for Smartphones",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "মোবাইলএক্সেসরিজ",
    "reseller_price": 410,
    "retail_price": 660,
    "regular_price": 858,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fqqw1_2604210830317477.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fqqw1_2604210830317477.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-68-0746",
    "source_url": "https://greenishtradeltd.com/products/26042100000746",
    "description": "L-015 Steadiness Carbon Steel Foldable Mobile Phone Stand – Adjustable Desktop Holder for Smartphones - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (মোবাইলএক্সেসরিজ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26090800002722",
    "title": "পোর্টেবল রিচার্জেবল নেক ফ্যান | হ্যান্ডস-ফ্রি USB চার্জিং ব্লেডলেস নেক কুলিং ফ্যান",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 600,
    "retail_price": 870,
    "regular_price": 1131,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F61tFxYVL8NL._SL1500__2609080657072546.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F61tFxYVL8NL._SL1500__2609080657072546.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2722",
    "source_url": "https://greenishtradeltd.com/products/26090800002722",
    "description": "পোর্টেবল রিচার্জেবল নেক ফ্যান | হ্যান্ডস-ফ্রি USB চার্জিং ব্লেডলেস নেক কুলিং ফ্যান - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081200002557",
    "title": "PREMIUM QUALITY M11 120 TOP SPEED MINI HAND FAN OR TURBO FAN WITH TYPE C CHARGING",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 320,
    "retail_price": 570,
    "regular_price": 741,
    "stock": 5,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(23)_2608121802030895.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fdownload%20(23)_2608121802030895.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2557",
    "source_url": "https://greenishtradeltd.com/products/26081200002557",
    "description": "PREMIUM QUALITY M11 120 TOP SPEED MINI HAND FAN OR TURBO FAN WITH TYPE C CHARGING - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26070700002241",
    "title": "২-ইন-১ সোলার ও ইলেকট্রিক রিচার্জেবল ফ্যান - পোর্টেবল এসি/ডিসি চার্জার ফ্যান",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 1950,
    "retail_price": 2828,
    "regular_price": 3676,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-07%20at%2000.41.51_2607070608521285.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-07%20at%2000.41.51_2607070608521285.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2241",
    "source_url": "https://greenishtradeltd.com/products/26070700002241",
    "description": "২-ইন-১ সোলার ও ইলেকট্রিক রিচার্জেবল ফ্যান - পোর্টেবল এসি/ডিসি চার্জার ফ্যান - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062900002172",
    "title": "Ven-Dens VD-FAN006 মাল্টি-ফাংশন এয়ার সার্কুলেটর ফ্যান - ৬ স্পিড ও টাচ কন্ট্রোলসহ আধুনিক ডেস্ক ফ্যান",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 1450,
    "retail_price": 2103,
    "regular_price": 2733,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-28%20at%2021.06.15_2606290622521165.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-28%20at%2021.06.15_2606290622521165.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2172",
    "source_url": "https://greenishtradeltd.com/products/26062900002172",
    "description": "Ven-Dens VD-FAN006 মাল্টি-ফাংশন এয়ার সার্কুলেটর ফ্যান - ৬ স্পিড ও টাচ কন্ট্রোলসহ আধুনিক ডেস্ক ফ্যান - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062400002147",
    "title": "Neck fan n",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 8,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777815570-picsart_26-04-28_02-01-24-259_2606241923508478.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777815570-picsart_26-04-28_02-01-24-259_2606241923508478.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2147",
    "source_url": "https://greenishtradeltd.com/products/26062400002147",
    "description": "Neck fan n - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062400002146",
    "title": "Remax F23 Icing Series Bladeless Neckband Fan",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 1900,
    "retail_price": 2755,
    "regular_price": 3582,
    "stock": 20,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777818030-picsart_26-04-29_01-34-49-661_2606241920157989.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1777818030-picsart_26-04-29_01-34-49-661_2606241920157989.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2146",
    "source_url": "https://greenishtradeltd.com/products/26062400002146",
    "description": "Remax F23 Icing Series Bladeless Neckband Fan - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062400002145",
    "title": "Remax F11 Bobbol Planet Table Clip Fan 🌀✨",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1779567145-picsart_26-05-24_02-07-16-010_2606241917547623.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F1779567145-picsart_26-05-24_02-07-16-010_2606241917547623.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2145",
    "source_url": "https://greenishtradeltd.com/products/26062400002145",
    "description": "Remax F11 Bobbol Planet Table Clip Fan 🌀✨ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26062100002094",
    "title": "মিনি হ্যান্ডহেল্ড ফ্যান – কিউট পার্পল পোর্টেবল কার্টুন ডিজাইন ফ্যান",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 350,
    "retail_price": 600,
    "regular_price": 780,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-21%20at%205.31.49%20AM_2606212012441399.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-21%20at%205.31.49%20AM_2606212012441399.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2094",
    "source_url": "https://greenishtradeltd.com/products/26062100002094",
    "description": "মিনি হ্যান্ডহেল্ড ফ্যান – কিউট পার্পল পোর্টেবল কার্টুন ডিজাইন ফ্যান - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061100002014",
    "title": "Chinese Style Mini Handheld Fan – USB Rechargeable Portable Fan with 3 Speed Control",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 260,
    "retail_price": 510,
    "regular_price": 663,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%201.36.56%20AM_2606112058292944.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-06-07%20at%201.36.56%20AM_2606112058292944.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-2014",
    "source_url": "https://greenishtradeltd.com/products/26061100002014",
    "description": "Chinese Style Mini Handheld Fan – USB Rechargeable Portable Fan with 3 Speed Control - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051500001863",
    "title": "Handheld Water Mist Fan, Handheld Electric Fan, Handheld Personal Misting Fan, Air Cooler, Low Noise Electronics with 5 Wind Speeds and 35 ml Water Tank for Hiking, Fishing",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 530,
    "retail_price": 769,
    "regular_price": 999,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-11%20at%2008.43.07_2605150652474437.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-11%20at%2008.43.07_2605150652474437.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-1863",
    "source_url": "https://greenishtradeltd.com/products/26051500001863",
    "description": "Handheld Water Mist Fan, Handheld Electric Fan, Handheld Personal Misting Fan, Air Cooler, Low Noise Electronics with 5 Wind Speeds and 35 ml Water Tank for Hiking, Fishing - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051500001862",
    "title": "Turbo Fan HandheldRechargeable Fan Portable Mini Hand Fan USB Rechargeable Foldable Hanging Neck fanUSB Mini Portable Small Turbo Fan - Multicolor",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-11%20at%2008.42.00_2605150645335370.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-11%20at%2008.42.00_2605150645335370.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-1862",
    "source_url": "https://greenishtradeltd.com/products/26051500001862",
    "description": "Turbo Fan HandheldRechargeable Fan Portable Mini Hand Fan USB Rechargeable Foldable Hanging Neck fanUSB Mini Portable Small Turbo Fan - Multicolor - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26042800001265",
    "title": "DP-7688 Portable Rechargeable Humidifier Fan",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ফ্যান",
    "reseller_price": 1450,
    "retail_price": 2103,
    "regular_price": 2733,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FDP-7688-Portable-Rechargeable-Fan-3_2604280557203822.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FDP-7688-Portable-Rechargeable-Fan-3_2604280557203822.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-75-1265",
    "source_url": "https://greenishtradeltd.com/products/26042800001265",
    "description": "DP-7688 Portable Rechargeable Humidifier Fan - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ফ্যান)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000579",
    "title": "Jupiter JP-2080 Professional Hair Clipper &amp; Beard Trimmer (2000mAh, 240min Backup)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1680,
    "retail_price": 2436,
    "regular_price": 3167,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftimmer4_2604182152511006.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftimmer4_2604182152511006.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0579",
    "source_url": "https://greenishtradeltd.com/products/26041800000579",
    "description": "Jupiter JP-2080 Professional Hair Clipper &amp; Beard Trimmer (2000mAh, 240min Backup) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000578",
    "title": "Kemei KM-656 2000mAh Professional Cordless Hair Clipper &amp; Beard Trimmer",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1630,
    "retail_price": 2364,
    "regular_price": 3073,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftimmer3_2604182148450237.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftimmer3_2604182148450237.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0578",
    "source_url": "https://greenishtradeltd.com/products/26041800000578",
    "description": "Kemei KM-656 2000mAh Professional Cordless Hair Clipper &amp; Beard Trimmer - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000577",
    "title": "Kemei KM-2600 Cordless Electric Hair Clipper &amp; Beard Trimmer",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1590,
    "retail_price": 2306,
    "regular_price": 2997,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FKemei%20KM-2600%20cordless%20electric%20hair%20clipper._2604182142522369.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FKemei%20KM-2600%20cordless%20electric%20hair%20clipper._2604182142522369.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0577",
    "source_url": "https://greenishtradeltd.com/products/26041800000577",
    "description": "Kemei KM-2600 Cordless Electric Hair Clipper &amp; Beard Trimmer - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000576",
    "title": "VGR V-987 Professional Hair &amp; Beard Trimmer (2000mAh, 400 Minutes Backup)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1360,
    "retail_price": 1972,
    "regular_price": 2564,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FVGR%20V-987%20Professional%20Hair%20Trimmer_2604182110593742.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FVGR%20V-987%20Professional%20Hair%20Trimmer_2604182110593742.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0576",
    "source_url": "https://greenishtradeltd.com/products/26041800000576",
    "description": "VGR V-987 Professional Hair &amp; Beard Trimmer (2000mAh, 400 Minutes Backup) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000575",
    "title": "Kemei KM-809A Professional Hair Clipper &amp; Beard Trimmer (Cordless &amp; Corded)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1160,
    "retail_price": 1682,
    "regular_price": 2187,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FKemei%20KM-809A_2604182106527709.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FKemei%20KM-809A_2604182106527709.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0575",
    "source_url": "https://greenishtradeltd.com/products/26041800000575",
    "description": "Kemei KM-809A Professional Hair Clipper &amp; Beard Trimmer (Cordless &amp; Corded) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000574",
    "title": "Kemei KM-2273 Professional Hair &amp; Beard Trimmer (Cordless, USB Rechargeable)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1030,
    "retail_price": 1494,
    "regular_price": 1942,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ft%202_2604182103093719.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ft%202_2604182103093719.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0574",
    "source_url": "https://greenishtradeltd.com/products/26041800000574",
    "description": "Kemei KM-2273 Professional Hair &amp; Beard Trimmer (Cordless, USB Rechargeable) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000573",
    "title": "Kemei KM-234 Professional Hair Clipper &amp; Beard Trimmer",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 1090,
    "retail_price": 1581,
    "regular_price": 2055,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FKemei%20KM-234%20Hair%20Clipper%20%26%20Beard%20Trimmer._2604182055411517.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FKemei%20KM-234%20Hair%20Clipper%20%26%20Beard%20Trimmer._2604182055411517.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0573",
    "source_url": "https://greenishtradeltd.com/products/26041800000573",
    "description": "Kemei KM-234 Professional Hair Clipper &amp; Beard Trimmer - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000572",
    "title": "HTC AT-518B Rechargeable Hair &amp; Beard Trimmer for Men",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 490,
    "retail_price": 711,
    "regular_price": 924,
    "stock": 11,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-518B%20Rechargeable%20Hair%20Trimmer._2604182052021032.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-518B%20Rechargeable%20Hair%20Trimmer._2604182052021032.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0572",
    "source_url": "https://greenishtradeltd.com/products/26041800000572",
    "description": "HTC AT-518B Rechargeable Hair &amp; Beard Trimmer for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000571",
    "title": "HTC AT-1105 Rechargeable Hair &amp; Beard Trimmer for Men",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-1105%20Rechargeable%20Hair%20Trimmer._2604182047396947.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-1105%20Rechargeable%20Hair%20Trimmer._2604182047396947.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0571",
    "source_url": "https://greenishtradeltd.com/products/26041800000571",
    "description": "HTC AT-1105 Rechargeable Hair &amp; Beard Trimmer for Men - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000570",
    "title": "HTC AT-528 Professional Rechargeable Cordless Beard &amp; Hair Trimmer",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 9,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-528%20Professional%20Rechargeable%20Cordless%20Beard%20and%20Hair%20Trimmer._2604182041053551.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-528%20Professional%20Rechargeable%20Cordless%20Beard%20and%20Hair%20Trimmer._2604182041053551.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0570",
    "source_url": "https://greenishtradeltd.com/products/26041800000570",
    "description": "HTC AT-528 Professional Rechargeable Cordless Beard &amp; Hair Trimmer - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000569",
    "title": "HTC AT-538 Rechargeable Hair and Beard Trimmer.",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 11,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-538%20Rechargeable%20Hair%20and%20Beard%20Trimmer._2604182030405684.jfif",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-538%20Rechargeable%20Hair%20and%20Beard%20Trimmer._2604182030405684.jfif"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0569",
    "source_url": "https://greenishtradeltd.com/products/26041800000569",
    "description": "HTC AT-538 Rechargeable Hair and Beard Trimmer. - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041800000568",
    "title": "HTC AT-1210 Professional Beard Trimmer for Men (Rechargeable Cordless)",
    "category_id": "8",
    "category_name": "ইলেকট্রনিকস এন্ড গ্যাজেটস",
    "subcategory": "ট্রিমার এবং হেয়ার ড্রায়ার",
    "reseller_price": 450,
    "retail_price": 653,
    "regular_price": 848,
    "stock": 11,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-1210%20Professional%20Beard%20Trimmer%20for%20Men._2604182020546508.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FHTC%20AT-1210%20Professional%20Beard%20Trimmer%20for%20Men._2604182020546508.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-8-77-0568",
    "source_url": "https://greenishtradeltd.com/products/26041800000568",
    "description": "HTC AT-1210 Professional Beard Trimmer for Men (Rechargeable Cordless) - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ইলেকট্রনিকস এন্ড গ্যাজেটস (ট্রিমার এবং হেয়ার ড্রায়ার)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002452",
    "title": "প্রিমিয়াম ব্রাউন ও ট্যান লেডিজ ক্রসবডি ব্যাগ – গোল্ড স্টার স্টাড, চেইন স্ট্র্যাপ ও স্টাইলিশ ফ্ল্যাপ ডিজাইন",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.51%20AM%20(5)_2607231930158908.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.51%20AM%20(5)_2607231930158908.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-2452",
    "source_url": "https://greenishtradeltd.com/products/26072300002452",
    "description": "প্রিমিয়াম ব্রাউন ও ট্যান লেডিজ ক্রসবডি ব্যাগ – গোল্ড স্টার স্টাড, চেইন স্ট্র্যাপ ও স্টাইলিশ ফ্ল্যাপ ডিজাইন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002450",
    "title": "Classic প্রিমিয়াম গ্রে ক্রসবডি ব্যাগ – গোল্ড ফ্লোরাল স্টাড ও ব্র্যান্ডেড এমব্লেমসহ স্টাইলিশ লেডিজ ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.51%20AM%20(1)_2607231919404204.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.51%20AM%20(1)_2607231919404204.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-2450",
    "source_url": "https://greenishtradeltd.com/products/26072300002450",
    "description": "Classic প্রিমিয়াম গ্রে ক্রসবডি ব্যাগ – গোল্ড ফ্লোরাল স্টাড ও ব্র্যান্ডেড এমব্লেমসহ স্টাইলিশ লেডিজ ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002449",
    "title": "প্রিমিয়াম ব্লু ডেনিম লেডিজ হ্যান্ডব্যাগ – ফ্লোরাল ফ্ল্যাপ ও চেইন শোল্ডার স্ট্র্যাপসহ স্টাইলিশ ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.51%20AM_2607231917159323.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.51%20AM_2607231917159323.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-2449",
    "source_url": "https://greenishtradeltd.com/products/26072300002449",
    "description": "প্রিমিয়াম ব্লু ডেনিম লেডিজ হ্যান্ডব্যাগ – ফ্লোরাল ফ্ল্যাপ ও চেইন শোল্ডার স্ট্র্যাপসহ স্টাইলিশ ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002448",
    "title": "CLASSIC প্রিমিয়াম পিংক ও গ্রে ক্রসবডি ব্যাগ – এমবেলিশড ফ্রন্ট ফ্ল্যাপসহ স্টাইলিশ লেডিজ ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM%20(3)_2607231914261062.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM%20(3)_2607231914261062.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-2448",
    "source_url": "https://greenishtradeltd.com/products/26072300002448",
    "description": "CLASSIC প্রিমিয়াম পিংক ও গ্রে ক্রসবডি ব্যাগ – এমবেলিশড ফ্রন্ট ফ্ল্যাপসহ স্টাইলিশ লেডিজ ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002447",
    "title": "প্রিমিয়াম ব্রাউন ও নেভি ব্লু ক্রসবডি ব্যাগ – ফ্লাওয়ার এমবেলিশমেন্ট ও ফ্রন্ট লকসহ স্টাইলিশ লেডিজ ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM%20(2)_2607231911393458.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM%20(2)_2607231911393458.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-2447",
    "source_url": "https://greenishtradeltd.com/products/26072300002447",
    "description": "প্রিমিয়াম ব্রাউন ও নেভি ব্লু ক্রসবডি ব্যাগ – ফ্লাওয়ার এমবেলিশমেন্ট ও ফ্রন্ট লকসহ স্টাইলিশ লেডিজ ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050500001564",
    "title": "Lavender Geometric PU Leather Mini Purse with Gold Logo",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F87y76u_2605051815411391.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F87y76u_2605051815411391.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-1564",
    "source_url": "https://greenishtradeltd.com/products/26050500001564",
    "description": "Lavender Geometric PU Leather Mini Purse with Gold Logo - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050500001563",
    "title": "PU Leather Crossbody Mobile Side Bag YQ-822 Style",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F87I_2605051750475244.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F87I_2605051750475244.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-1563",
    "source_url": "https://greenishtradeltd.com/products/26050500001563",
    "description": "PU Leather Crossbody Mobile Side Bag YQ-822 Style - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050500001562",
    "title": "Left Nine Love Berg Family Casual Crossbody Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-04%20at%206.51.09%20PM%20(2)_2605051740377273.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-05-04%20at%206.51.09%20PM%20(2)_2605051740377273.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-1562",
    "source_url": "https://greenishtradeltd.com/products/26050500001562",
    "description": "Left Nine Love Berg Family Casual Crossbody Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050500001561",
    "title": "Croco PU Leather Mobile Side Crossbody Bag | ক্রোকো PU লেদার মোবাইল সাইড ক্রসবডি ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FOI8L8_2605051736176960.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FOI8L8_2605051736176960.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-1561",
    "source_url": "https://greenishtradeltd.com/products/26050500001561",
    "description": "Croco PU Leather Mobile Side Crossbody Bag | ক্রোকো PU লেদার মোবাইল সাইড ক্রসবডি ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050500001560",
    "title": "Black Croco PU Leather Crossbody Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FU768_2605051730267972.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FU768_2605051730267972.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-1560",
    "source_url": "https://greenishtradeltd.com/products/26050500001560",
    "description": "Black Croco PU Leather Crossbody Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050500001559",
    "title": "Elegant Black Sling Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "পার্স",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FI98787_2605051722118835.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FI98787_2605051722118835.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-25-1559",
    "source_url": "https://greenishtradeltd.com/products/26050500001559",
    "description": "Elegant Black Sling Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (পার্স)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072300002453",
    "title": "প্রিমিয়াম বেইজ এমব্রয়ডারি লেডিজ টপ-হ্যান্ডেল ব্যাগ – হোয়াইট বাটারফ্লাই চার্মসহ স্টাইলিশ হ্যান্ডব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 670,
    "retail_price": 972,
    "regular_price": 1263,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-23%20at%2012.38.27%20PM%20(1)_2607231943264381.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-23%20at%2012.38.27%20PM%20(1)_2607231943264381.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2453",
    "source_url": "https://greenishtradeltd.com/products/26072300002453",
    "description": "প্রিমিয়াম বেইজ এমব্রয়ডারি লেডিজ টপ-হ্যান্ডেল ব্যাগ – হোয়াইট বাটারফ্লাই চার্মসহ স্টাইলিশ হ্যান্ডব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002439",
    "title": "YSL স্টাইল প্রিমিয়াম ব্ল্যাক কুইল্টেড লেডিজ হ্যান্ডব্যাগ – গোল্ড লোগো ও স্ট্রাকচার্ড টপ হ্যান্ডেলসহ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM%20(1)_2607221915481028.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM%20(1)_2607221915481028.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2439",
    "source_url": "https://greenishtradeltd.com/products/26072200002439",
    "description": "YSL স্টাইল প্রিমিয়াম ব্ল্যাক কুইল্টেড লেডিজ হ্যান্ডব্যাগ – গোল্ড লোগো ও স্ট্রাকচার্ড টপ হ্যান্ডেলসহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002437",
    "title": "YSL স্টাইল প্রিমিয়াম সিলভার কুইল্টেড লেডিজ হ্যান্ডব্যাগ – সেন্ট্রাল লোগো ক্ল্যাপসহ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM_2607221908277810.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.50%20AM_2607221908277810.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2437",
    "source_url": "https://greenishtradeltd.com/products/26072200002437",
    "description": "YSL স্টাইল প্রিমিয়াম সিলভার কুইল্টেড লেডিজ হ্যান্ডব্যাগ – সেন্ট্রাল লোগো ক্ল্যাপসহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002436",
    "title": "প্রিমিয়াম ক্রিম কালার লেডিজ হ্যান্ডব্যাগ – প্লিটেড ডিজাইন ও গোল্ড হার্ডওয়্যারসহ স্টাইলিশ ফ্যাশন ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.49%20AM%20(2)_2607221903204370.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.49%20AM%20(2)_2607221903204370.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2436",
    "source_url": "https://greenishtradeltd.com/products/26072200002436",
    "description": "প্রিমিয়াম ক্রিম কালার লেডিজ হ্যান্ডব্যাগ – প্লিটেড ডিজাইন ও গোল্ড হার্ডওয়্যারসহ স্টাইলিশ ফ্যাশন ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002433",
    "title": "প্রিমিয়াম সেজ গ্রিন লেডিজ হ্যান্ডব্যাগ – প্লিটেড টেক্সচার ও গোল্ড হার্ডওয়্যারসহ স্টাইলিশ ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.49%20AM%20(1)_2607221900083985.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.49%20AM%20(1)_2607221900083985.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2433",
    "source_url": "https://greenishtradeltd.com/products/26072200002433",
    "description": "প্রিমিয়াম সেজ গ্রিন লেডিজ হ্যান্ডব্যাগ – প্লিটেড টেক্সচার ও গোল্ড হার্ডওয়্যারসহ স্টাইলিশ ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002424",
    "title": "প্রিমিয়াম অলিভ গ্রিন কুইল্টেড লেডিজ হ্যান্ডব্যাগ – স্ট্রাকচার্ড টপ হ্যান্ডেল ও মেটাল লোগোসহ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 990,
    "retail_price": 1436,
    "regular_price": 1866,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.49%20AM_2607221822106780.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.49%20AM_2607221822106780.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2424",
    "source_url": "https://greenishtradeltd.com/products/26072200002424",
    "description": "প্রিমিয়াম অলিভ গ্রিন কুইল্টেড লেডিজ হ্যান্ডব্যাগ – স্ট্রাকচার্ড টপ হ্যান্ডেল ও মেটাল লোগোসহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002423",
    "title": "DI প্রিমিয়াম মভ (Mauve) টেক্সচার্ড লেডিজ হ্যান্ডব্যাগ – গোল্ড DI লোগো প্ল্যাকসহ স্টাইলিশ ফ্যাশন ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.48%20AM%20(2)_2607221738542489.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.48%20AM%20(2)_2607221738542489.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2423",
    "source_url": "https://greenishtradeltd.com/products/26072200002423",
    "description": "DI প্রিমিয়াম মভ (Mauve) টেক্সচার্ড লেডিজ হ্যান্ডব্যাগ – গোল্ড DI লোগো প্ল্যাকসহ স্টাইলিশ ফ্যাশন ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002422",
    "title": "DI প্রিমিয়াম ব্ল্যাক টেক্সচার্ড লেডিজ হ্যান্ডব্যাগ – গোল্ড DI লোগোসহ স্টাইলিশ ফ্যাশন ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.48%20AM%20(1)_2607221736070656.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.48%20AM%20(1)_2607221736070656.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2422",
    "source_url": "https://greenishtradeltd.com/products/26072200002422",
    "description": "DI প্রিমিয়াম ব্ল্যাক টেক্সচার্ড লেডিজ হ্যান্ডব্যাগ – গোল্ড DI লোগোসহ স্টাইলিশ ফ্যাশন ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002421",
    "title": "DI প্রিমিয়াম ইয়েলো টেক্সচার্ড লেডিজ হ্যান্ডব্যাগ – ক্রিস্টাল চার্মসহ স্টাইলিশ ফ্যাশন ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.48%20AM_2607221733473154.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.48%20AM_2607221733473154.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2421",
    "source_url": "https://greenishtradeltd.com/products/26072200002421",
    "description": "DI প্রিমিয়াম ইয়েলো টেক্সচার্ড লেডিজ হ্যান্ডব্যাগ – ক্রিস্টাল চার্মসহ স্টাইলিশ ফ্যাশন ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002420",
    "title": "DI প্রিমিয়াম লাইট গ্রিন PU লেদার টোট ব্যাগ – চেকার্ড টেক্সচার স্টাইলিশ লেডিজ হ্যান্ডব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.47%20AM%20(2)_2607221731586378.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.47%20AM%20(2)_2607221731586378.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2420",
    "source_url": "https://greenishtradeltd.com/products/26072200002420",
    "description": "DI প্রিমিয়াম লাইট গ্রিন PU লেদার টোট ব্যাগ – চেকার্ড টেক্সচার স্টাইলিশ লেডিজ হ্যান্ডব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002419",
    "title": "YEARCON প্রিমিয়াম পিংক ক্যাজুয়াল লেডিজ হ্যান্ডব্যাগ – গোল্ড কি চার্মসহ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.47%20AM%20(1)_2607221729502334.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.47%20AM%20(1)_2607221729502334.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2419",
    "source_url": "https://greenishtradeltd.com/products/26072200002419",
    "description": "YEARCON প্রিমিয়াম পিংক ক্যাজুয়াল লেডিজ হ্যান্ডব্যাগ – গোল্ড কি চার্মসহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26072200002418",
    "title": "YEARCON প্রিমিয়াম পিংক ক্যাজুয়াল হ্যান্ডব্যাগ – গোল্ড কি চার্মসহ স্টাইলিশ লেডিজ ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "মেয়েদের ব্যাগ",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.47%20AM_2607221645487766.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-07-22%20at%2012.48.47%20AM_2607221645487766.jpeg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-26-2418",
    "source_url": "https://greenishtradeltd.com/products/26072200002418",
    "description": "YEARCON প্রিমিয়াম পিংক ক্যাজুয়াল হ্যান্ডব্যাগ – গোল্ড কি চার্মসহ স্টাইলিশ লেডিজ ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (মেয়েদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002602",
    "title": "মাল্টি-ইউটিলিটি ট্রাভেল ও বিজনেস ডাফেল ব্যাগ – ওয়াটার-রেজিস্ট্যান্ট",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 500,
    "retail_price": 725,
    "regular_price": 943,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgbtf_2608181831116471.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgbtf_2608181831116471.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2602",
    "source_url": "https://greenishtradeltd.com/products/26081800002602",
    "description": "মাল্টি-ইউটিলিটি ট্রাভেল ও বিজনেস ডাফেল ব্যাগ – ওয়াটার-রেজিস্ট্যান্ট - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002601",
    "title": "হ্যান্ডমেড নকশি ফ্যামিলি সাইজ ট্রাভেল ব্যাগ – পিওর হ্যান্ডলুম",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 280,
    "retail_price": 530,
    "regular_price": 689,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghtr6_2608181820177199.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghtr6_2608181820177199.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2601",
    "source_url": "https://greenishtradeltd.com/products/26081800002601",
    "description": "হ্যান্ডমেড নকশি ফ্যামিলি সাইজ ট্রাভেল ব্যাগ – পিওর হ্যান্ডলুম - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002600",
    "title": "CAT গ্রিন ভার্টিক্যাল টোট ব্যাগ – লাঞ্চ ও ডেইলি ইউজ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 190,
    "retail_price": 440,
    "regular_price": 572,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjhi_2608181807511662.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fjhi_2608181807511662.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2600",
    "source_url": "https://greenishtradeltd.com/products/26081800002600",
    "description": "CAT গ্রিন ভার্টিক্যাল টোট ব্যাগ – লাঞ্চ ও ডেইলি ইউজ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002599",
    "title": "Black &amp; White Geometric Print Lunch Tote Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 150,
    "retail_price": 400,
    "regular_price": 520,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftg5rg_2608181726451400.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ftg5rg_2608181726451400.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2599",
    "source_url": "https://greenishtradeltd.com/products/26081800002599",
    "description": "Black &amp; White Geometric Print Lunch Tote Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002598",
    "title": "CAT ব্রাউন মাল্টি-কম্পার্টমেন্ট ক্রস-বডি অফিস মেসেঞ্জার ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fujhynythntrs_2608181719569982.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fujhynythntrs_2608181719569982.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2598",
    "source_url": "https://greenishtradeltd.com/products/26081800002598",
    "description": "CAT ব্রাউন মাল্টি-কম্পার্টমেন্ট ক্রস-বডি অফিস মেসেঞ্জার ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002597",
    "title": "Nuoxiya ওয়াটারপ্রুফ ট্রাভেল ডাফেল ব্যাগ – কম্বিনেশন লকসহ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 740,
    "retail_price": 1073,
    "regular_price": 1395,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghtf_2608181710324460.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fghtf_2608181710324460.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2597",
    "source_url": "https://greenishtradeltd.com/products/26081800002597",
    "description": "Nuoxiya ওয়াটারপ্রুফ ট্রাভেল ডাফেল ব্যাগ – কম্বিনেশন লকসহ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002596",
    "title": "CAT ব্রাউন বাইকার ব্যাকপ্যাক – মাল্টি-পকেট ক্যাজুয়াল ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 270,
    "retail_price": 520,
    "regular_price": 676,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F5t_2608181702395055.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F5t_2608181702395055.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2596",
    "source_url": "https://greenishtradeltd.com/products/26081800002596",
    "description": "CAT ব্রাউন বাইকার ব্যাকপ্যাক – মাল্টি-পকেট ক্যাজুয়াল ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26081800002595",
    "title": "মাল্টি-কম্পার্টমেন্ট অফিস ও ল্যাপটপ ব্রিফকেস ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 330,
    "retail_price": 580,
    "regular_price": 754,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F9IOK_2608181654469769.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F9IOK_2608181654469769.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-2595",
    "source_url": "https://greenishtradeltd.com/products/26081800002595",
    "description": "মাল্টি-কম্পার্টমেন্ট অফিস ও ল্যাপটপ ব্রিফকেস ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051500001861",
    "title": "FILA Unisex Barrel Sports Bag – Black with White Logo",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 480,
    "retail_price": 696,
    "regular_price": 905,
    "stock": 8,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fi87_2605150022449512.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fi87_2605150022449512.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-1861",
    "source_url": "https://greenishtradeltd.com/products/26051500001861",
    "description": "FILA Unisex Barrel Sports Bag – Black with White Logo - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051500001860",
    "title": "Custom Printed Non-Woven Tote Carry Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 200,
    "retail_price": 450,
    "regular_price": 585,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fkio_2605150008318486.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fkio_2605150008318486.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-1860",
    "source_url": "https://greenishtradeltd.com/products/26051500001860",
    "description": "Custom Printed Non-Woven Tote Carry Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051500001859",
    "title": "Insulated Lunch &amp; Tiffin Hotpot Bag for Men &amp; Women",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 180,
    "retail_price": 430,
    "regular_price": 559,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhujuy_2605150002062443.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhujuy_2605150002062443.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-1859",
    "source_url": "https://greenishtradeltd.com/products/26051500001859",
    "description": "Insulated Lunch &amp; Tiffin Hotpot Bag for Men &amp; Women - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26051400001858",
    "title": "Insulated Lunch &amp; Tiffin Hotpot Bag for Men &amp; Women",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "ছেলেদের ব্যাগ",
    "reseller_price": 170,
    "retail_price": 420,
    "regular_price": 546,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fij8ui_2605142359151658.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fij8ui_2605142359151658.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-27-1858",
    "source_url": "https://greenishtradeltd.com/products/26051400001858",
    "description": "Insulated Lunch &amp; Tiffin Hotpot Bag for Men &amp; Women - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (ছেলেদের ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050600001626",
    "title": "Princess Doll Design Kids Backpack Pink | প্রিন্সেস ডল ডিজাইন পিংক কিডস স্কুল ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 330,
    "retail_price": 580,
    "regular_price": 754,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FTGY5R_2605061845090357.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FTGY5R_2605061845090357.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-1626",
    "source_url": "https://greenishtradeltd.com/products/26050600001626",
    "description": "Princess Doll Design Kids Backpack Pink | প্রিন্সেস ডল ডিজাইন পিংক কিডস স্কুল ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050600001625",
    "title": "হিরো কার্টুন LED ডাবল চেম্বার ওয়াটারপ্রুফ স্কুল ব্যাগ- টোকা দিলেই ঝিকিমিকি লাইট জ্বলে",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 370,
    "retail_price": 620,
    "regular_price": 806,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FUJ67876_2605061924329099.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FUJ67876_2605061924329099.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-1625",
    "source_url": "https://greenishtradeltd.com/products/26050600001625",
    "description": "হিরো কার্টুন LED ডাবল চেম্বার ওয়াটারপ্রুফ স্কুল ব্যাগ- টোকা দিলেই ঝিকিমিকি লাইট জ্বলে - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26050600001623",
    "title": "Kids Soccer LED Light-Up School Backpack 10 x 10.5 Inch | কিডস সকার LED লাইট আপ স্কুল ব্যাগ",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 380,
    "retail_price": 630,
    "regular_price": 819,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGTHTR_2605061714008489.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FGTHTR_2605061714008489.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-1623",
    "source_url": "https://greenishtradeltd.com/products/26050600001623",
    "description": "Kids Soccer LED Light-Up School Backpack 10 x 10.5 Inch | কিডস সকার LED লাইট আপ স্কুল ব্যাগ - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000198",
    "title": "&quot;Vagabond&quot; brand backpack",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 550,
    "retail_price": 798,
    "regular_price": 1037,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F55_2604101716034941.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F55_2604101716034941.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0198",
    "source_url": "https://greenishtradeltd.com/products/26041000000198",
    "description": "&quot;Vagabond&quot; brand backpack - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000197",
    "title": "School Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 660,
    "retail_price": 957,
    "regular_price": 1244,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F10009_2604101902575477.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F10009_2604101902575477.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0197",
    "source_url": "https://greenishtradeltd.com/products/26041000000197",
    "description": "School Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000195",
    "title": "The &quot;Latin Sheep&quot; brand school bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F8A_2604101341410702.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F8A_2604101341410702.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0195",
    "source_url": "https://greenishtradeltd.com/products/26041000000195",
    "description": "The &quot;Latin Sheep&quot; brand school bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000190",
    "title": "School Bag – Baby Girl’s",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 720,
    "retail_price": 1044,
    "regular_price": 1357,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F-4_2604101238482688.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F-4_2604101238482688.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0190",
    "source_url": "https://greenishtradeltd.com/products/26041000000190",
    "description": "School Bag – Baby Girl’s - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000188",
    "title": "Girl Backpack School Bag Pink For Teenage Schoolbag Primary Cute Waterproof bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 680,
    "retail_price": 986,
    "regular_price": 1282,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F56_2604101147519691.png",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F56_2604101147519691.png"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0188",
    "source_url": "https://greenishtradeltd.com/products/26041000000188",
    "description": "Girl Backpack School Bag Pink For Teenage Schoolbag Primary Cute Waterproof bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000186",
    "title": "school bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 860,
    "retail_price": 1247,
    "regular_price": 1621,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F3_2604100954025871.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2F3_2604100954025871.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0186",
    "source_url": "https://greenishtradeltd.com/products/26041000000186",
    "description": "school bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26041000000172",
    "title": "LATIN SHEEP Premium Baby School Bag",
    "category_id": "11",
    "category_name": "ব্যাগ কালেকশন",
    "subcategory": "স্কুল-কলেজ ব্যাগ",
    "reseller_price": 660,
    "retail_price": 957,
    "regular_price": 1244,
    "stock": 10,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FBG%201_2604100844244297.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FBG%201_2604100844244297.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-11-49-0172",
    "source_url": "https://greenishtradeltd.com/products/26041000000172",
    "description": "LATIN SHEEP Premium Baby School Bag - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: ব্যাগ কালেকশন (স্কুল-কলেজ ব্যাগ)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061800002058",
    "title": "বিএমডব্লিউ ১২ শিক প্রিমিয়াম ছাতা",
    "category_id": "48",
    "category_name": "সিজনাল প্রোডাক্টস",
    "subcategory": "ছাতা",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 8,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgverf_2606181937194804.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Ffgverf_2606181937194804.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-48-59-2058",
    "source_url": "https://greenishtradeltd.com/products/26061800002058",
    "description": "বিএমডব্লিউ ১২ শিক প্রিমিয়াম ছাতা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: সিজনাল প্রোডাক্টস (ছাতা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061800002057",
    "title": "আবসার ৮ শিক প্রিমিয়াম ছাতা",
    "category_id": "48",
    "category_name": "সিজনাল প্রোডাক্টস",
    "subcategory": "ছাতা",
    "reseller_price": 400,
    "retail_price": 650,
    "regular_price": 845,
    "stock": 8,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhhbtgr_2606181923410755.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhhbtgr_2606181923410755.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-48-59-2057",
    "source_url": "https://greenishtradeltd.com/products/26061800002057",
    "description": "আবসার ৮ শিক প্রিমিয়াম ছাতা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: সিজনাল প্রোডাক্টস (ছাতা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061800002056",
    "title": "বিএমডব্লিউ ১২ শিক প্রিমিয়াম ছাতা",
    "category_id": "48",
    "category_name": "সিজনাল প্রোডাক্টস",
    "subcategory": "ছাতা",
    "reseller_price": 520,
    "retail_price": 754,
    "regular_price": 980,
    "stock": 7,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgyhb_2606181913564206.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fgyhb_2606181913564206.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-48-59-2056",
    "source_url": "https://greenishtradeltd.com/products/26061800002056",
    "description": "বিএমডব্লিউ ১২ শিক প্রিমিয়াম ছাতা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: সিজনাল প্রোডাক্টস (ছাতা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061700002055",
    "title": "বিএমডব্লিউ ১৬ শিক প্রিমিয়াম ছাতা",
    "category_id": "48",
    "category_name": "সিজনাল প্রোডাক্টস",
    "subcategory": "ছাতা",
    "reseller_price": 630,
    "retail_price": 914,
    "regular_price": 1188,
    "stock": 15,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fkk_2606172131240695.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fkk_2606172131240695.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-48-59-2055",
    "source_url": "https://greenishtradeltd.com/products/26061700002055",
    "description": "বিএমডব্লিউ ১৬ শিক প্রিমিয়াম ছাতা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: সিজনাল প্রোডাক্টস (ছাতা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061700002054",
    "title": "আবসার ৮ শিক প্রিমিয়াম ছাতা",
    "category_id": "48",
    "category_name": "সিজনাল প্রোডাক্টস",
    "subcategory": "ছাতা",
    "reseller_price": 410,
    "retail_price": 660,
    "regular_price": 858,
    "stock": 13,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhjny_2606172114232168.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fyhjny_2606172114232168.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-48-59-2054",
    "source_url": "https://greenishtradeltd.com/products/26061700002054",
    "description": "আবসার ৮ শিক প্রিমিয়াম ছাতা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: সিজনাল প্রোডাক্টস (ছাতা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26061700002053",
    "title": "বিএমডব্লিউ ১৬ শিক প্রিমিয়াম উইন্ডপ্রুফ ছাতা",
    "category_id": "48",
    "category_name": "সিজনাল প্রোডাক্টস",
    "subcategory": "ছাতা",
    "reseller_price": 620,
    "retail_price": 899,
    "regular_price": 1169,
    "stock": 16,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fumbrella%202%2C0_2606172051168382.jpg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2Fumbrella%202%2C0_2606172051168382.jpg"
    ],
    "sizes": [
      "Standard"
    ],
    "sku": "GRN-48-59-2053",
    "source_url": "https://greenishtradeltd.com/products/26061700002053",
    "description": "বিএমডব্লিউ ১৬ শিক প্রিমিয়াম উইন্ডপ্রুফ ছাতা - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: সিজনাল প্রোডাক্টস (ছাতা)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002831",
    "title": "স্পেশাল কাপল শাড়ি পাঞ্জাবি কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.37%20(1)_2609180634049679.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.37%20(1)_2609180634049679.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2831",
    "source_url": "https://greenishtradeltd.com/products/26091800002831",
    "description": "স্পেশাল কাপল শাড়ি পাঞ্জাবি কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002830",
    "title": "স্পেশাল কাপল শাড়ি পাঞ্জাবি কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.37_2609180631192705.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.37_2609180631192705.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2830",
    "source_url": "https://greenishtradeltd.com/products/26091800002830",
    "description": "স্পেশাল কাপল শাড়ি পাঞ্জাবি কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002829",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.36_2609180628473260.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.36_2609180628473260.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2829",
    "source_url": "https://greenishtradeltd.com/products/26091800002829",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002828",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.35%20(1)_2609180625381772.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.35%20(1)_2609180625381772.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2828",
    "source_url": "https://greenishtradeltd.com/products/26091800002828",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002827",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.35_2609180621210368.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.35_2609180621210368.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2827",
    "source_url": "https://greenishtradeltd.com/products/26091800002827",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002826",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.34%20(1)_2609180615452379.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.34%20(1)_2609180615452379.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2826",
    "source_url": "https://greenishtradeltd.com/products/26091800002826",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002825",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.34_2609180613300471.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.34_2609180613300471.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2825",
    "source_url": "https://greenishtradeltd.com/products/26091800002825",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002824",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.32%20(1)_2609180608193141.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.32%20(1)_2609180608193141.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2824",
    "source_url": "https://greenishtradeltd.com/products/26091800002824",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002823",
    "title": "লাল-সাদা কাপল ড্রেস কালেকশন",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 900,
    "retail_price": 1305,
    "regular_price": 1697,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.32_2609180605522690.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.18.32_2609180605522690.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2823",
    "source_url": "https://greenishtradeltd.com/products/26091800002823",
    "description": "লাল-সাদা কাপল ড্রেস কালেকশন - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091700002808",
    "title": "Sharee Panjabi Couple Dress with Blouse Piece",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 850,
    "retail_price": 1233,
    "regular_price": 1602,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2023.35.22_2609171828488132.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2023.35.22_2609171828488132.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2808",
    "source_url": "https://greenishtradeltd.com/products/26091700002808",
    "description": "Sharee Panjabi Couple Dress with Blouse Piece - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091700002807",
    "title": "Sharee Panjabi Couple Dress with Blouse Piece",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 850,
    "retail_price": 1233,
    "regular_price": 1602,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2023.35.21_2609171826289873.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2023.35.21_2609171826289873.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2807",
    "source_url": "https://greenishtradeltd.com/products/26091700002807",
    "description": "Sharee Panjabi Couple Dress with Blouse Piece - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091700002806",
    "title": "Sharee Panjabi Couple Dress with Blouse Piece",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল শাড়ি-পাঞ্জাবি",
    "reseller_price": 850,
    "retail_price": 1233,
    "regular_price": 1602,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2023.35.20%20(1)_2609171824143925.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2023.35.20%20(1)_2609171824143925.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-80-2806",
    "source_url": "https://greenishtradeltd.com/products/26091700002806",
    "description": "Sharee Panjabi Couple Dress with Blouse Piece - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল শাড়ি-পাঞ্জাবি)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002874",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.08%20(1)_2609181746585678.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.08%20(1)_2609181746585678.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2874",
    "source_url": "https://greenishtradeltd.com/products/26091800002874",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002873",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.08_2609181745026796.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.08_2609181745026796.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2873",
    "source_url": "https://greenishtradeltd.com/products/26091800002873",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002872",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 39,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.09_2609181743177598.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.09_2609181743177598.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2872",
    "source_url": "https://greenishtradeltd.com/products/26091800002872",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002871",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.10_2609181741318416.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.10_2609181741318416.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2871",
    "source_url": "https://greenishtradeltd.com/products/26091800002871",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002870",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.11_2609181739397732.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.11_2609181739397732.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2870",
    "source_url": "https://greenishtradeltd.com/products/26091800002870",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002869",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.13_2609181737448553.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.13_2609181737448553.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2869",
    "source_url": "https://greenishtradeltd.com/products/26091800002869",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002868",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.14_2609181736015667.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.14_2609181736015667.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2868",
    "source_url": "https://greenishtradeltd.com/products/26091800002868",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002867",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 4000,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.15_2609181734117883.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.15_2609181734117883.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2867",
    "source_url": "https://greenishtradeltd.com/products/26091800002867",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002866",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.16_2609181732053050.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.16_2609181732053050.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2866",
    "source_url": "https://greenishtradeltd.com/products/26091800002866",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002865",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.02_2609181728137938.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.02_2609181728137938.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2865",
    "source_url": "https://greenishtradeltd.com/products/26091800002865",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002864",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.01_2609181725111945.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.01_2609181725111945.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2864",
    "source_url": "https://greenishtradeltd.com/products/26091800002864",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "26091800002863",
    "title": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন!",
    "category_id": "49",
    "category_name": "কাপল/কম্বো সেট",
    "subcategory": "কাপল পাঞ্জাবি- থ্রিপিস",
    "reseller_price": 1100,
    "retail_price": 1595,
    "regular_price": 2074,
    "stock": 40,
    "image": "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.00_2609181723003167.jpeg",
    "images": [
      "/api/proxy-image?url=http%3A%2F%2F147.93.97.56%3A9000%2Fecommerce-public%2FProductImage%2FWhatsApp%20Image%202026-09-17%20at%2013.24.00_2609181723003167.jpeg"
    ],
    "sizes": [
      "Combo M+Free",
      "Combo L+Free",
      "Combo XL+Free"
    ],
    "sku": "GRN-49-81-2863",
    "source_url": "https://greenishtradeltd.com/products/26091800002863",
    "description": "এক্সক্লুসিভ কাপল পাঞ্জাবি ও থ্রি-পিস কালেকশন! - গ্রিনিশ ট্রেডের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।\n\n✨ ক্যাটাগরি: কাপল/কম্বো সেট (কাপল পাঞ্জাবি- থ্রিপিস)\n🚚 ডেলিভারি: সারাদেশে ক্যাশ অন ডেলিভারি সুবিধা\n🛡️ ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ গ্যারান্টি",
    "is_active": 1
  },
  {
    "id": "food_1001",
    "title": "প্রিমিয়াম সুন্দরবনের খাঁটি প্রাকৃতিক মধু (৫০০ গ্রাম)",
    "category_id": "10",
    "category_name": "ফুড এন্ড ফ্রুটস",
    "subcategory": "প্রাকৃতিক মধু",
    "reseller_price": 450,
    "retail_price": 680,
    "regular_price": 850,
    "stock": 50,
    "image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80"
    ],
    "sizes": [
      "৫০০ গ্রাম",
      "১ কেজি"
    ],
    "sku": "FOOD-MD-01",
    "source_url": "https://greenishtradeltd.com/products/food_1001",
    "description": "১০০% খাঁটি সুন্দরবনের প্রাকৃতিক চাকের মধু। কোনো ভেজাল বা কৃত্রিম চিনি মুক্ত। রোগ প্রতিরোধ ক্ষমতা বাড়াতে অত্যন্ত কার্যকর।",
    "is_active": 1
  },
  {
    "id": "food_1002",
    "title": "এক্সক্লুসিভ প্রিমিয়াম নাটস অ্যান্ড ড্রাই ফ্রুটস কম্বো (৪০০ গ্রাম)",
    "category_id": "10",
    "category_name": "ফুড এন্ড ফ্রুটস",
    "subcategory": "ড্রাই ফ্রুটস",
    "reseller_price": 520,
    "retail_price": 790,
    "regular_price": 990,
    "stock": 40,
    "image": "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800&q=80"
    ],
    "sizes": [
      "৪০০ গ্রাম জার"
    ],
    "sku": "FOOD-DF-02",
    "source_url": "https://greenishtradeltd.com/products/food_1002",
    "description": "কাজু বাদাম, পেস্তা, কাঠবাদাম, আখরোট, কিশমিশ ও ত্বীন ফলের স্বাস্থ্যকর প্রিমিয়াম ব্লেন্ড।",
    "is_active": 1
  },
  {
    "id": "food_1003",
    "title": "অর্গানিক ব্ল্যাক সিডস / কালোজিরা তেল (১০০ মিলি)",
    "category_id": "10",
    "category_name": "ফুড এন্ড ফ্রুটস",
    "subcategory": "কালোজিরা তেল",
    "reseller_price": 250,
    "retail_price": 390,
    "regular_price": 500,
    "stock": 60,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
    ],
    "sizes": [
      "১০০ মিলি",
      "২৫০ মিলি"
    ],
    "sku": "FOOD-BS-03",
    "source_url": "https://greenishtradeltd.com/products/food_1003",
    "description": "১০০% কোল্ড প্রেসড পিওর কালোজিরার তেল। সর্বরোগের মহৌষধ হিসেবে সমাদৃত।",
    "is_active": 1
  },
  {
    "id": "food_1004",
    "title": "এক্সট্রা ভার্জিন অলিভ অয়েল - ফার্স্ট কোল্ড প্রেসড (৫০০ মিলি)",
    "category_id": "10",
    "category_name": "ফুড এন্ড ফ্রুটস",
    "subcategory": "অলিভ অয়েল",
    "reseller_price": 680,
    "retail_price": 990,
    "regular_price": 1250,
    "stock": 35,
    "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80"
    ],
    "sizes": [
      "৫০০ মিলি বোতল"
    ],
    "sku": "FOOD-OO-04",
    "source_url": "https://greenishtradeltd.com/products/food_1004",
    "description": "স্প্যানিশ অলিভ থেকে সংগৃহীত খাঁটি এক্সট্রা ভার্জিন অলিভ অয়েল। সালাদ, ত্বক ও চুল পরিচর্যার জন্য সেরা।",
    "is_active": 1
  }
];

export const initialUsers = [
  {
    id: 1,
    name: 'আপনহাট অ্যাডমিন',
    phone: '01617971644',
    email: 'admin@aponhat.com',
    password: 'Admin@AponHat2026!',
    role: 'admin'
  }
];

export const initialSettings = {
  store_name: 'আপনহাট (AponHat)',
  store_notice: 'আপনহাটে আপনাকে স্বাগতম! সারা বাংলাদেশে হোম ডেলিভারি দেওয়া হয়।',
  helpline_phone: '01617971644',
  inside_dhaka_delivery: 60,
  outside_dhaka_delivery: 120,
  bkash_number: '01617971644',
  nagad_number: '01309993470',
  rocket_number: '01617971644',
  default_markup_percent: '35',
  priya_status: 'online',
  priya_prompt: 'আপনি আপনহাট ই-কমার্স প্ল্যাটফর্মের বিশ্বস্ত এবং অত্যন্ত বিনয়ী স্মার্ট সেলস অ্যাসিস্ট্যান্ট "প্রিয়া"। কাস্টমারদের যেকোনো প্রোডাক্টের তথ্য, ডেলিভারি চার্জ, অর্ডার প্রক্রিয়া সম্পর্কে ১০০% প্রফেশনাল ও নির্ভুল বাংলা ভাষায় উত্তর দিন।',
  last_sync: new Date().toISOString()
};

let storeCache = null;

export function getStore() {
  if (storeCache) {
    if (!storeCache.users || !Array.isArray(storeCache.users) || storeCache.users.length === 0) {
      storeCache.users = [...initialUsers];
    } else if (!storeCache.users.some(u => u.phone === '01617971644')) {
      storeCache.users.push(initialUsers[0]);
    }
    return storeCache;
  }

  try {
    if (fs.existsSync(TMP_FILE)) {
      const data = fs.readFileSync(TMP_FILE, 'utf-8');
      storeCache = JSON.parse(data);
      if (!storeCache.products || storeCache.products.length < 50) {
        storeCache.products = initialProducts;
        storeCache.categories = initialCategories;
      }
      if (!storeCache.users || !Array.isArray(storeCache.users) || storeCache.users.length === 0) {
        storeCache.users = [...initialUsers];
      } else if (!storeCache.users.some(u => u.phone === '01617971644')) {
        storeCache.users.push(initialUsers[0]);
      }
      if (!storeCache.orders) storeCache.orders = [];
      if (!storeCache.settings) storeCache.settings = { ...initialSettings };
      return storeCache;
    }
  } catch (e) {
    console.error('Failed reading tmp store:', e);
  }

  storeCache = {
    categories: initialCategories,
    products: initialProducts,
    orders: [],
    users: [...initialUsers],
    settings: { ...initialSettings }
  };

  return storeCache;
}

export function saveStore(store) {
  storeCache = store;
  try {
    fs.writeFileSync(TMP_FILE, JSON.stringify(store), 'utf-8');
  } catch (e) {
    console.error('Failed saving tmp store:', e);
  }
}

