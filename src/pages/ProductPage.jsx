import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ShoppingBag, Truck, ShieldCheck, Check, Star, 
  ArrowRight, Share2, Copy, CheckCheck, MessageCircle, Facebook,
  Sparkles, RotateCcw, PhoneCall, Tag, Box, Layers, Link2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import ShopifyProductViewer from '../components/ShopifyProductViewer';
import ProductCard from '../components/ProductCard';

export default function ProductPage({
  product,
  onBack,
  onBuyNow,
  onSelectProduct,
  storeSettings = {},
  relatedProducts = [],
  loading = false,
  navigateTo
}) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(() => {
    return product?.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
  });
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  // Sync size when product changes
  useEffect(() => {
    if (product?.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize('Standard');
    }
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product?.id]);

  // Dynamic SEO & AEO title, OpenGraph metadata & JSON-LD Product Schema
  useEffect(() => {
    if (!product) return;
    const originalTitle = document.title;
    document.title = `${product.title} - ৳${Math.round(product.retail_price || product.price)} | আপনহাট (AponHat)`;

    // Update meta tags dynamically
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${product.title} কিনুন মাত্র ৳${Math.round(product.retail_price || product.price)} এ। আপনহাটে ক্যাশ অন ডেলিভারি ও দ্রুততম হোম ডেলিভারি সুবিধা!`);
    }

    // Dynamic JSON-LD structured data injection for Google SEO and AI Answer Engines (AEO)
    const scriptId = 'aponhat-product-jsonld';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    const schemaData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.title,
      "image": product.image || (product.images && product.images[0]),
      "description": product.description || product.title,
      "sku": product.sku || `APON-${product.id}`,
      "brand": {
        "@type": "Brand",
        "name": "আপনহাট (AponHat)"
      },
      "offers": {
        "@type": "Offer",
        "url": typeof window !== 'undefined' ? window.location.href : `https://aponhat-store.vercel.app/product/${product.id}`,
        "priceCurrency": "BDT",
        "price": Math.round(product.retail_price || product.price),
        "itemCondition": "https://schema.org/NewCondition",
        "availability": (product.stock === undefined || product.stock > 0) ? "https://schema.org/InStock" : "https://schema.org/PreOrder"
      }
    };
    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      document.title = originalTitle;
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [product]);

  if (loading || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-6 bg-gray-200 dark:bg-dark-card rounded-md w-1/3"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 aspect-square bg-gray-200 dark:bg-dark-card rounded-3xl"></div>
            <div className="lg:col-span-6 space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-dark-card rounded-md w-3/4"></div>
              <div className="h-6 bg-gray-200 dark:bg-dark-card rounded-md w-1/4"></div>
              <div className="h-24 bg-gray-200 dark:bg-dark-card rounded-2xl"></div>
              <div className="h-12 bg-gray-200 dark:bg-dark-card rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://aponhat-store.vercel.app/product/${product.id}`;
  const shareText = `${product.title} - মাত্র ৳${Math.round(product.retail_price || product.price)} এ কিনুন আপনহাট থেকে!`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleDirectBuy = () => {
    addToCart(product, selectedSize, quantity);
    if (onBuyNow) {
      onBuyNow();
    } else if (navigateTo) {
      navigateTo('/checkout', 'checkout', 'all');
    }
  };

  const insideFee = storeSettings.inside_dhaka_delivery ? Number(storeSettings.inside_dhaka_delivery) : 60;
  const outsideFee = storeSettings.outside_dhaka_delivery ? Number(storeSettings.outside_dhaka_delivery) : 100;
  const regularPrice = product.regular_price || Math.round(product.retail_price * 1.25);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 animate-in fade-in duration-300">
      
      {/* Toast Notification when link copied */}
      {copiedLink && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-2xl animate-in slide-in-from-bottom-5">
          <CheckCheck className="w-5 h-5 text-emerald-200" />
          <span>প্রোডাক্ট লিংক কপি করা হয়েছে! যেকোনো জায়গায় শেয়ার করুন।</span>
        </div>
      )}

      {/* Toast Notification when added to cart */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm shadow-2xl animate-in slide-in-from-bottom-5">
          <ShoppingBag className="w-5 h-5 text-white" />
          <span>পণ্যটি আপনার ব্যাগে যোগ করা হয়েছে!</span>
        </div>
      )}

      {/* Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 font-bold hover:bg-gray-50 dark:hover:bg-dark-cardHover transition-all shadow-xs active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>সকল পণ্যে ফিরে যান</span>
        </button>

        {/* Breadcrumb Path */}
        <div className="flex items-center gap-2 text-gray-500 dark:text-dark-muted font-medium">
          <span 
            onClick={() => navigateTo ? navigateTo('/', 'home', 'all') : onBack()} 
            className="hover:text-emerald-600 cursor-pointer"
          >
            হোম
          </span>
          <span>/</span>
          <span 
            onClick={() => navigateTo ? navigateTo(`/category/${product.category_id}`, 'home', product.category_id) : onBack()} 
            className="hover:text-emerald-600 cursor-pointer truncate max-w-[120px]"
          >
            {product.category_name || 'ক্যাটাগরি'}
          </span>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-bold truncate max-w-[180px] sm:max-w-[280px]">
            {product.title}
          </span>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm">
        
        {/* Left Column: Interactive Shopify Product Viewer with Thumbnails & Zoom */}
        <div className="lg:col-span-6 w-full">
          <ShopifyProductViewer product={product} />

          {/* Social Share & Copy Link Panel */}
          <div className="mt-6 p-4 rounded-2xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-200/70 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200">
              <Share2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>এই প্রোডাক্টের লিংক শেয়ার করুন:</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyLink}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-xs font-bold text-gray-800 dark:text-gray-100 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-xs active:scale-95"
                title="লিংক কপি করুন"
              >
                {copiedLink ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                <span>{copiedLink ? 'কপি হয়েছে' : 'লিংক কপি'}</span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs transition-all active:scale-95"
                title="WhatsApp এ শেয়ার"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">হোয়াটসঅ্যাপ</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#1877F2] hover:bg-[#1565c0] text-white text-xs font-bold shadow-xs transition-all active:scale-95"
                title="Facebook এ শেয়ার"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">ফেসবুক</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info, Options & Direct Order */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          
          <div>
            {/* Badges: Category & Stock */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <Tag className="w-3 h-3 text-emerald-600" />
                <span>{product.category_name}</span>
              </span>
              
              {product.subcategory && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {product.subcategory}
                </span>
              )}

              <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-bold ml-auto">
                <Star className="w-4 h-4 fill-amber-400" />
                ৪.৯ (১২০+ রিভিউ)
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-snug">
              {product.title}
            </h1>

            {/* SKU and Live Stock Indicator */}
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-dark-muted">
              <span>প্রোডাক্ট আইডি: <strong className="font-mono text-emerald-600 dark:text-emerald-400">#{product.id}</strong></span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                স্টক অ্যাভেইলেবল ({product.stock || 40} টি)
              </span>
            </div>

            {/* Pricing Section */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-transparent dark:from-dark-bg dark:to-transparent border border-emerald-100 dark:border-dark-border">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-sans tracking-tight">
                  ৳{Math.round(product.retail_price || product.price)}
                </span>
                {regularPrice && regularPrice > (product.retail_price || product.price) && (
                  <span className="text-base sm:text-lg text-gray-400 line-through font-sans">
                    ৳{regularPrice}
                  </span>
                )}
                <span className="text-xs font-black text-white bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-1 rounded-full shadow-xs">
                  ২৫% ছাড়!
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-300 font-semibold mt-1">
                🎉 যেকোনো ১৫০০৳ বা বেশি অর্ডারে হোম ডেলিভারি সম্পূর্ণ ফ্রি!
              </p>
            </div>
          </div>

          {/* Sizes / Variants Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text">
                সাইজ / ভ্যারিয়েন্ট নির্বাচন করুন:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                      selectedSize === size
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                        : 'bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 border-gray-200 dark:border-dark-border hover:border-emerald-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text">
              পরিমাণ:
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-card font-bold text-base transition-colors"
              >
                -
              </button>
              <span className="w-12 text-center font-bold text-sm text-gray-900 dark:text-white font-sans">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-card font-bold text-base transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs: Add to Cart and Direct Order */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-dark-bg dark:hover:bg-dark-cardHover text-gray-900 dark:text-white font-bold text-sm transition-all active:scale-95 border border-gray-200 dark:border-dark-border shadow-xs"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>কার্টে যোগ করুন</span>
            </button>

            <button
              onClick={handleDirectBuy}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-102 active:scale-95"
            >
              <span>এখনই অর্ডার করুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Single Product Item Permanent Shareable URL Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-white dark:from-dark-bg dark:via-dark-bg/80 dark:to-dark-card border border-emerald-200/90 dark:border-dark-border space-y-2.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 dark:text-gray-100">
                <Link2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>এই প্রোডাক্টটির সরাসরি শেয়ার লিংক (URL):</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-dark-card px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                প্রোডাক্ট লিঙ্ক
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 text-xs px-3.5 py-2.5 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-dark-text font-mono truncate shadow-inner focus:outline-none select-all"
              />
              <button
                onClick={handleCopyLink}
                className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                {copiedLink ? <CheckCheck className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
                <span>{copiedLink ? 'কপি হয়েছে!' : 'লিংক কপি'}</span>
              </button>
            </div>

            <p className="text-[11px] text-gray-500 dark:text-dark-muted flex items-center gap-1">
              <span>💡 যেকোনো কাস্টমারকে এই লিংক পাঠালে তারা সরাসরি এই প্রোডাক্টে এসে অর্ডার করতে পারবে।</span>
            </p>
          </div>

          {/* Delivery & Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-gray-100 dark:border-dark-border">
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-dark-bg/60 border border-emerald-100 dark:border-dark-border flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5 shadow-xs">
                <Truck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-gray-900 dark:text-white">ডেলিভারি চার্জ</p>
                <p className="text-gray-600 dark:text-dark-muted mt-0.5">
                  ঢাকায় <strong>৳{insideFee}</strong> | ঢাকার বাইরে <strong>৳{outsideFee}</strong>
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-dark-bg/60 border border-emerald-100 dark:border-dark-border flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-gray-900 dark:text-white">১০০% ক্যাশ অন ডেলিভারি</p>
                <p className="text-gray-600 dark:text-dark-muted mt-0.5">
                  পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধ করুন
                </p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          {product.description && (
            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>পণ্যের বিস্তারিত বিবরণ</span>
              </h3>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-dark-muted leading-relaxed whitespace-pre-line bg-gray-50/70 dark:bg-dark-bg/60 p-4 rounded-2xl border border-gray-100 dark:border-dark-border">
                {product.description}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Related Products from Same Category */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-gray-200 dark:border-dark-border space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>একই ক্যাটাগরির আরও পণ্য</span>
              </h2>
              <p className="text-xs text-gray-500 dark:text-dark-muted mt-0.5">
                {product.category_name} সেকশন থেকে আপনার পছন্দ হতে পারে
              </p>
            </div>

            <button
              onClick={() => navigateTo ? navigateTo(`/category/${product.category_id}`, 'home', product.category_id) : onBack()}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>সবগুলো দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.slice(0, 4).map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onQuickView={() => onSelectProduct ? onSelectProduct(rel) : null}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
