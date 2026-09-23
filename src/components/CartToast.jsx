import React, { useEffect } from 'react';
import { CheckCircle2, ShoppingBag, ArrowRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartToast({ onCheckout }) {
  const { lastAddedItem, toastOpen, closeToast, setIsCartOpen } = useCart();

  useEffect(() => {
    if (toastOpen) {
      const timer = setTimeout(() => {
        closeToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastOpen, closeToast]);

  if (!toastOpen || !lastAddedItem) return null;

  return (
    <aside aria-label="Cart Toast Notification" className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-96 animate-toast-in">
      <div className="rounded-2xl bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border border-emerald-500/30 dark:border-emerald-500/40 shadow-2xl shadow-emerald-950/20 p-4 transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 dark:border-dark-border">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span>সফলভাবে কার্টে যোগ করা হয়েছে!</span>
          </div>
          <button
            onClick={closeToast}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Product Details */}
        <div className="flex items-center gap-3">
          <img
            src={lastAddedItem.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'}
            alt={lastAddedItem.title}
            className="w-12 h-12 rounded-xl object-cover bg-gray-100 dark:bg-dark-bg shrink-0 border border-gray-100 dark:border-dark-border"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
              {lastAddedItem.title}
            </h4>
            <div className="flex items-center gap-2 mt-0.5 text-[11px] text-gray-500 dark:text-dark-muted">
              {lastAddedItem.variant && (
                <span>সাইজ: <strong className="text-gray-700 dark:text-gray-300">{lastAddedItem.variant}</strong></span>
              )}
              <span>•</span>
              <span className="font-bold text-apon-600 dark:text-apon-400 font-sans">
                ৳{lastAddedItem.price} × {lastAddedItem.quantity}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-dark-border">
          <button
            onClick={() => {
              closeToast();
              setIsCartOpen(true);
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gray-100 dark:bg-dark-bg hover:bg-gray-200 dark:hover:bg-dark-cardHover text-gray-800 dark:text-dark-text text-xs font-bold transition-all active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-apon-600 dark:text-apon-400" />
            <span>কার্ট দেখুন</span>
          </button>

          <button
            onClick={() => {
              closeToast();
              if (onCheckout) onCheckout();
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 text-white text-xs font-bold shadow-md shadow-apon-600/20 transition-all active:scale-95"
          >
            <span>চেকআউট</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
}
