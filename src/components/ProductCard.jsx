import React from 'react';
import { ShoppingCart, Eye, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    const defaultVariant = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
    addToCart(product, defaultVariant, 1);
  };

  return (
    <article
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 dark:bg-dark-bg">
        <img
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
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 dark:bg-dark-card/95 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-apon-700 dark:text-apon-300 shadow-sm border border-apon-200/50 dark:border-dark-border">
            {product.category_name || 'পণ্য'}
          </span>
          {product.stock && (
            <span className="inline-flex items-center rounded-full bg-emerald-600/90 text-white px-2 py-0.5 text-[9px] font-semibold">
              স্টক: {product.stock} টি
            </span>
          )}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-dark-card/90 text-gray-900 dark:text-white px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-apon-600 dark:text-apon-400" />
            বিস্তারিত দেখুন
          </span>
        </div>
      </div>

      {/* Details Area */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-medium text-gray-500 dark:text-dark-muted mb-1 line-clamp-1">
          {product.subcategory || product.category_name}
        </p>

        <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text line-clamp-2 group-hover:text-apon-600 dark:group-hover:text-apon-400 transition-colors leading-snug">
          {product.title}
        </h3>

        {/* Price & Add to Cart Button */}
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 dark:border-dark-border">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-apon-600 dark:text-apon-400">
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

          <button
            onClick={handleQuickAdd}
            className="flex items-center justify-center p-2.5 rounded-xl bg-apon-50 hover:bg-apon-600 text-apon-700 hover:text-white dark:bg-apon-950/60 dark:hover:bg-apon-600 dark:text-apon-300 dark:hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            title="কার্টে যোগ করুন"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
