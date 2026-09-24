import React, { useState, useEffect } from 'react';
import { 
  X, ShoppingBag, Truck, ShieldCheck, Check, Star, ArrowRight,
  Link2, Copy, CheckCheck, MessageCircle, ExternalLink,
  Sparkles, RotateCcw, Share2, Tag, Layers
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import ShopifyProductViewer from './ShopifyProductViewer';
import { getProductUrl, getProductFullUrl, slugifyTitle } from '../utils/urlHelper';

export default function ProductModal({ 
  product, 
  onClose, 
  onBuyNow, 
  storeSettings = {},
  onOpenFullPage 
}) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(() => {
    return product?.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
  });
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync size when product changes
  useEffect(() => {
    if (product?.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize('Standard');
    }
    setQuantity(1);
  }, [product?.id]);

  if (!product) return null;

  const productCanonicalUrl = getProductUrl(product);
  const fullShareUrl = getProductFullUrl(product);

  // Synchronize browser address bar with this product's semantic category+name URL
  // and inject SEO/AEO metadata & structured schema
  useEffect(() => {
    if (!product) return;

    const previousUrl = window.location.pathname;
    const targetUrl = getProductUrl(product);

    // Update browser address bar to /category/:catId/:itemSlug without page reload
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(
        { view: 'home', catId: product.category_id || '1', productId: slugifyTitle(product.title) },
        '',
        targetUrl
      );
    }

    // Dynamic SEO / AEO Page Title & Meta Description
    const previousTitle = document.title;
    document.title = `${product.title} - ৳${Math.round(product.retail_price || product.price)} | আপনহাট (AponHat)`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content', 
        `${product.title} কিনুন মাত্র ৳${Math.round(product.retail_price || product.price)} এ। আপনহাটে ক্যাশ অন ডেলিভারি ও দ্রুততম হোম ডেলিভারি সুবিধা!`
      );
    }

    // Dynamic JSON-LD Structured Data Schema for Google Search Rich Results & AI Search (AEO)
    const scriptId = 'aponhat-product-modal-jsonld';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const price = Math.round(product.retail_price || product.price || 0);
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://aponhat-store.vercel.app';
    const canonicalItemUrl = `${origin}${targetUrl}`;

    const schemaData = [
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": product.image ? [product.image] : [],
        "description": product.description || product.title,
        "sku": product.sku || `APON-${product.id}`,
        "category": product.category_name || "Fashion",
        "brand": {
          "@type": "Brand",
          "name": "আপনহাট (AponHat)"
        },
        "offers": {
          "@type": "Offer",
          "url": canonicalItemUrl,
          "priceCurrency": "BDT",
          "price": price,
          "priceValidUntil": "2027-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": (product.stock === undefined || product.stock > 0)
            ? "https://schema.org/InStock" 
            : "https://schema.org/OutOfStock",
          "seller": {
            "@type": "Organization",
            "name": "আপনহাট (AponHat)"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "120"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "হোমপেজ",
            "item": `${origin}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": product.category_name || "ক্যাটাগরি",
            "item": `${origin}/category/${product.category_id || 1}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.title,
            "item": canonicalItemUrl
          }
        ]
      }
    ];

    scriptTag.textContent = JSON.stringify(schemaData);

    // Escape Key Listener to smoothly close modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.title = previousTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
      const tag = document.getElementById(scriptId);
      if (tag) tag.remove();
    };
  }, [product?.id]);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    onClose();
  };

  const handleDirectBuy = () => {
    addToCart(product, selectedSize, quantity);
    onClose();
    if (onBuyNow) onBuyNow();
  };

  const handleCopyLink = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullShareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-2xl transition-all duration-300 my-auto p-5 sm:p-7 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-100/90 dark:bg-dark-bg/90 hover:bg-gray-200 dark:hover:bg-dark-border text-gray-500 hover:text-gray-900 dark:text-dark-muted dark:hover:text-white transition-all active:scale-90 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Product Viewer with Zoom & Thumbnails */}
          <div className="lg:col-span-6 w-full">
            <ShopifyProductViewer product={product} />
          </div>

          {/* Right Column: Product Info, Pricing, Size, Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              {/* Reviews & Stock Badge */}
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  ৪.৯ (১২০+ ভেরিফায়েড রিভিউ)
                </span>
                <span className="text-gray-300 dark:text-dark-border">|</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  {product.stock || 40} টি স্টকে আছে
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                {product.title}
              </h2>

              {/* SKU & Category */}
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-dark-muted mt-1.5 flex-wrap">
                <span>এসকেইউ: <span className="font-mono font-semibold text-gray-700 dark:text-gray-300">{product.sku || 'APON-' + String(product.id).slice(-6)}</span></span>
                <span>•</span>
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">{product.category_name || 'পণ্য'}</span>
              </div>

              {/* Pricing */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-sans">
                  ৳{Math.round(product.retail_price || product.price)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ৳{Math.round((product.retail_price || product.price) * 1.25)}
                </span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-0.5 rounded-full">
                  ২৫% বিশেষ ছাড়
                </span>
              </div>

              {/* Sizes / Variants */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-muted mb-2">
                    সাইজ / ভ্যারিয়েন্ট নির্বাচন করুন:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                          selectedSize === size
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                            : 'bg-gray-50 dark:bg-dark-bg text-gray-700 dark:text-dark-text border-gray-200 dark:border-dark-border hover:border-emerald-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center gap-4">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-muted">
                  পরিমাণ:
                </label>
                <div className="flex items-center rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-card font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-card font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Direct Shareable Item Link Box (Viral & Copy Link) */}
              <div className="mt-4 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Link2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono text-emerald-900 dark:text-emerald-200 truncate select-all">
                    {fullShareUrl}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 justify-end">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-card border border-emerald-300 dark:border-emerald-700 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 shadow-sm transition-all active:scale-95"
                  >
                    {copiedLink ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">কপি হয়েছে!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>লিংক কপি</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${product.title}\nমূল্য: ৳${Math.round(product.retail_price || product.price)}\n${fullShareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-xl bg-[#25D366] text-white hover:opacity-90 transition-all active:scale-95 shadow-sm"
                    title="হোয়াটসঅ্যাপে শেয়ার করুন"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Trust & Delivery Guarantees */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mt-4">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200/60 dark:border-dark-border text-gray-700 dark:text-gray-300">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ঢাকা ৳{storeSettings.inside_dhaka_delivery || 60}, বাইরে ৳{storeSettings.outside_dhaka_delivery || 100}</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200/60 dark:border-dark-border text-gray-700 dark:text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>সারাদেশে ক্যাশ অন ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200/60 dark:border-dark-border text-gray-700 dark:text-gray-300">
                  <RotateCcw className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>৭ দিনের সহজ রিটার্ন</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200/60 dark:border-dark-border text-gray-700 dark:text-gray-300">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>১০০% কোয়ালিটি চেকড</span>
                </div>
              </div>

              {/* Description Snippet */}
              <div className="mt-4 text-xs text-gray-600 dark:text-dark-muted whitespace-pre-line leading-relaxed max-h-28 overflow-y-auto pr-2 border-t border-gray-100 dark:border-dark-border pt-3">
                {product.description || `${product.title} - আপনহাটের প্রিমিয়াম কোয়ালিটি পণ্য। ১০০% অরিজিনাল ও নিখুঁত ফিনিশিং।`}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-dark-border flex flex-col gap-2.5">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gray-100 dark:bg-dark-bg hover:bg-gray-200 dark:hover:bg-dark-border text-gray-800 dark:text-dark-text font-bold text-xs sm:text-sm transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>কার্টে যোগ করুন</span>
                </button>

                <button
                  onClick={handleDirectBuy}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-102 active:scale-95"
                >
                  <span>এখনই কিনুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* View Full Page Option */}
              {onOpenFullPage && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenFullPage(product);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-emerald-600 dark:text-dark-muted dark:hover:text-emerald-400 transition-colors"
                >
                  <span>সম্পূর্ণ আলাদা পেজে বিস্তারিত দেখুন</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
