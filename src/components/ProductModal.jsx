import React, { useState } from 'react';
import { X, ShoppingBag, Truck, ShieldCheck, Check, Star, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ShopifyProductViewer from './ShopifyProductViewer';

export default function ProductModal({ product, onClose, onBuyNow }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(() => {
    return product?.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
  });
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    onClose();
  };

  const handleDirectBuy = () => {
    addToCart(product, selectedSize, quantity);
    onClose();
    if (onBuyNow) onBuyNow();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-2xl transition-all duration-300 my-8 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 dark:bg-dark-bg text-gray-500 hover:text-gray-800 dark:text-dark-muted dark:hover:text-white transition-all active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Shopify-style Interactive Product Viewer with Zoom & Thumbnails */}
          <div className="lg:col-span-6 w-full">
            <ShopifyProductViewer product={product} />
          </div>

          {/* Product Info & Purchase Options */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  ৪.৯ (১২০+ ভেরিফায়েড রিভিউ)
                </span>
                <span className="text-gray-300 dark:text-dark-border">|</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {product.stock || 40} টি স্টকে আছে
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                {product.title}
              </h2>

              <p className="text-xs text-gray-500 dark:text-dark-muted mt-1">
                এসকেইউ (SKU): {product.sku || 'APON-' + product.id.slice(-6)}
              </p>

              {/* Pricing */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-black text-apon-600 dark:text-apon-400 font-sans">
                  ৳{Math.round(product.retail_price)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ৳{Math.round(product.retail_price * 1.25)}
                </span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 rounded-full">
                  ২৫% বিশেষ ছাড়
                </span>
              </div>

              {/* Sizes / Variants */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-dark-muted mb-2">
                    সাইজ / ভ্যারিয়েন্ট নির্বাচন করুন:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                          selectedSize === size
                            ? 'bg-apon-600 text-white border-apon-600 shadow-md scale-105'
                            : 'bg-gray-50 dark:bg-dark-bg text-gray-700 dark:text-dark-text border-gray-200 dark:border-dark-border hover:border-apon-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mt-5 flex items-center gap-4">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-dark-muted">
                  পরিমাণ:
                </label>
                <div className="flex items-center rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-card font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-card font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Description Snippet */}
              <div className="mt-5 text-xs text-gray-600 dark:text-dark-muted whitespace-pre-line leading-relaxed max-h-32 overflow-y-auto pr-2">
                {product.description}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-dark-border flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gray-100 dark:bg-dark-bg hover:bg-gray-200 dark:hover:bg-dark-border text-gray-800 dark:text-dark-text font-bold text-xs sm:text-sm transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-apon-600 dark:text-apon-400" />
                <span>কার্টে যোগ করুন</span>
              </button>

              <button
                onClick={handleDirectBuy}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-apon-600/30 transition-all hover:scale-102 active:scale-95"
              >
                <span>এখনই কিনুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
