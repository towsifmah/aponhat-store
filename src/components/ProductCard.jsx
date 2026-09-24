import React, { useState } from 'react';
import { ShoppingCart, Eye, Copy, CheckCheck, Link2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductUrl } from '../utils/urlHelper';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const [copied, setCopied] = useState(false);

  const productUrl = getProductUrl(product);
  const fullShareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${productUrl}`
    : `https://aponhat-store.vercel.app${productUrl}`;

  const handleCardClick = (e) => {
    // If modifier keys used (Ctrl, Cmd, Shift, middle-click), let the browser handle (e.g. open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (onQuickView) onQuickView(product);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
    addToCart(product, defaultVariant, 1);
  };

  const handleCopyLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
    >
      <meta itemProp="name" content={product.title} />
      <meta itemProp="description" content={product.description || product.title} />
      <meta itemProp="sku" content={product.sku || 'APON-' + product.id} />
      <meta itemProp="url" content={fullShareUrl} />

      {/* Floating 1-Click Copy Link Button on Every Product Card */}
      <button
        onClick={handleCopyLink}
        title="এই প্রোডাক্টের লিংক কপি করুন"
        className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 dark:bg-dark-card/95 backdrop-blur-md text-[10px] font-bold text-gray-700 dark:text-gray-200 border border-gray-200/80 dark:border-dark-border shadow-md hover:border-emerald-500 hover:text-emerald-600 transition-all active:scale-90"
      >
        {copied ? (
          <>
            <CheckCheck className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600">কপি হয়েছে!</span>
          </>
        ) : (
          <>
            <Link2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>লিংক</span>
          </>
        )}
      </button>

      {/* Product Image & Link Container */}
      <a
        href={productUrl}
        onClick={handleCardClick}
        className="relative aspect-square w-full overflow-hidden bg-gray-50 dark:bg-dark-bg block cursor-pointer"
      >
        <img
          itemProp="image"
          src={product.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80';
          }}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category & Stock Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 dark:bg-dark-card/95 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 shadow-sm border border-emerald-200/50 dark:border-dark-border">
            {product.category_name || 'পণ্য'}
          </span>
          {product.stock && (
            <span className="inline-flex items-center rounded-full bg-emerald-600/90 text-white px-2 py-0.5 text-[9px] font-semibold">
              স্টক: {product.stock} টি
            </span>
          )}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-dark-card/95 text-gray-900 dark:text-white px-3.5 py-1.5 text-xs font-bold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>বিস্তারিত দেখুন</span>
          </span>
        </div>
      </a>

      {/* Details Area */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-medium text-gray-500 dark:text-dark-muted mb-1 line-clamp-1">
          {product.subcategory || product.category_name}
        </p>

        {/* Clickable Product Title Link */}
        <a
          href={productUrl}
          onClick={handleCardClick}
          className="text-sm font-semibold text-gray-900 dark:text-dark-text line-clamp-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors leading-snug cursor-pointer mb-2"
        >
          {product.title}
        </a>

        {/* Price & Add to Cart / Actions Button */}
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 dark:border-dark-border" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="BDT" />
          <meta itemProp="price" content={String(Math.round(product.retail_price))} />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                ৳{Math.round(product.retail_price)}
              </span>
              {product.reseller_price && (
                <span className="text-[11px] text-gray-400 line-through">
                  ৳{Math.round(product.retail_price * 1.25)}
                </span>
              )}
            </div>
            <span className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
              ফ্রি রিটার্ন সুবিধা
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleQuickAdd}
              className="flex items-center justify-center p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white dark:bg-emerald-950/60 dark:hover:bg-emerald-600 dark:text-emerald-300 dark:hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
              title="কার্টে যোগ করুন"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
