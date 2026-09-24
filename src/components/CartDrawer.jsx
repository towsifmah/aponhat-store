import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Plus, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ onCheckout, products = [], onQuickView }) {
  const { cartItems, updateQuantity, removeFromCart, addToCart, isCartOpen, setIsCartOpen, subtotal, totalCount } = useCart();

  if (!isCartOpen) return null;

  // Find 2-3 suggested products not currently in the cart
  const cartItemIds = new Set(cartItems.map(item => item.id));
  const suggestedProducts = products
    .filter(p => !cartItemIds.has(p.id))
    .slice(0, 3);

  const handleOpenItem = (e, item) => {
    e.preventDefault();
    setIsCartOpen(false);
    if (onQuickView) onQuickView(item);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white dark:bg-dark-card border-l border-gray-200 dark:border-dark-border shadow-2xl flex flex-col h-full animate-toast-in">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-apon-100 dark:bg-apon-900/60 text-apon-700 dark:text-apon-300">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">আপনার শপিং ব্যাগ</h3>
                <p className="text-xs text-gray-500 dark:text-dark-muted">{totalCount} টি আইটেম যুক্ত হয়েছে</p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-apon-50 dark:bg-dark-bg p-3 border-b border-apon-100 dark:border-dark-border text-center">
            {subtotal >= 1500 ? (
              <p className="text-xs font-semibold text-apon-700 dark:text-apon-300 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>অভিনন্দন! আপনি ফ্রি হোম ডেলিভারি পেয়েছেন!</span>
              </p>
            ) : (
              <div>
                <p className="text-xs text-gray-600 dark:text-dark-muted">
                  আর <span className="font-bold text-apon-600 dark:text-apon-400">৳{1500 - subtotal}</span> টাকার পণ্য কিনলেই <span className="font-bold">ফ্রি হোম ডেলিভারি!</span>
                </p>
                <div className="w-full bg-gray-200 dark:bg-dark-card rounded-full h-1.5 mt-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-apon-500 to-apon-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (subtotal / 1500) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List - ZERO SCROLLBARS */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-bg flex items-center justify-center text-gray-400 mb-4">
                  <ShoppingBag className="w-8 h-8 text-gray-300 dark:text-dark-border" />
                </div>
                <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">আপনার ব্যাগ খালি</h4>
                <p className="text-xs text-gray-500 dark:text-dark-muted mt-1 max-w-xs">
                  পছন্দের যেকোনো পণ্য খুঁজুন এবং কার্টে যোগ করে সহজেই অর্ডার করুন।
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-apon-600 text-white font-semibold text-xs shadow-md hover:bg-apon-700 transition-all active:scale-95"
                >
                  শপিং শুরু করুন
                </button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div 
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-3 p-3 rounded-2xl border border-gray-100 dark:border-dark-border bg-gray-50/70 dark:bg-dark-bg/60 transition-all hover:border-emerald-300 dark:hover:border-emerald-800"
                  >
                    <a
                      href={`/product/${item.id}`}
                      onClick={(e) => handleOpenItem(e, item)}
                      className="block shrink-0 cursor-pointer"
                    >
                      <img
                        src={item.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'}
                        alt={item.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80';
                        }}
                        className="w-16 h-16 rounded-xl object-cover bg-white hover:scale-105 transition-transform"
                      />
                    </a>

                    <div className="flex-1 min-w-0">
                      <a
                        href={`/product/${item.id}`}
                        onClick={(e) => handleOpenItem(e, item)}
                        className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block cursor-pointer"
                      >
                        {item.title}
                      </a>
                      <p className="text-[11px] text-gray-500 dark:text-dark-muted mt-0.5">
                        ভ্যারিয়েন্ট: <span className="font-semibold text-apon-600 dark:text-apon-400">{item.variant}</span>
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white mt-1">
                        ৳{item.price} × {item.quantity} = <span className="text-apon-600 dark:text-apon-400 font-sans">৳{item.price * item.quantity}</span>
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card px-1.5 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                            className="w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-dark-muted hover:text-red-500 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-gray-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                            className="w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-dark-muted hover:text-apon-600 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Suggested Cross-sell Items */}
                {suggestedProducts.length > 0 && (
                  <div className="pt-3 border-t border-gray-100 dark:border-dark-border mt-4">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-apon-500" />
                      <span>আপনার জন্য আরো প্রস্তাবিত:</span>
                    </p>
                    <div className="space-y-2">
                      {suggestedProducts.map(prod => (
                        <div
                          key={prod.id}
                          className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-dark-bg/40 border border-gray-100 dark:border-dark-border"
                        >
                          <div 
                            onClick={() => onQuickView && onQuickView(prod)}
                            className="flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer"
                          >
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-10 h-10 rounded-lg object-cover bg-white shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-1">{prod.title}</p>
                              <span className="text-xs font-bold text-apon-600 dark:text-apon-400">৳{Math.round(prod.retail_price)}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              const variant = prod.sizes && prod.sizes.length > 0 ? prod.sizes[0] : 'Standard';
                              addToCart(prod, variant, 1);
                            }}
                            className="p-1.5 rounded-lg bg-apon-600 hover:bg-apon-700 text-white shadow-xs transition-all active:scale-95 shrink-0 ml-2"
                            title="যোগ করুন"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card shadow-lg">
              <div className="space-y-1.5 mb-4 text-xs">
                <div className="flex justify-between text-gray-600 dark:text-dark-muted">
                  <span>সাবটোটাল</span>
                  <span className="font-bold text-gray-900 dark:text-white font-sans">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-dark-muted">
                  <span>আনুমানিক ডেলিভারি চার্জ</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {subtotal >= 1500 ? 'ফ্রি' : '৳৬০ (ঢাকায়) / ৳১০০ (বাইরে)'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-100 dark:border-dark-border">
                  <span>সর্বমোট</span>
                  <span className="text-base text-apon-600 dark:text-apon-400 font-sans">৳{subtotal}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onCheckout();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 text-white font-bold text-xs sm:text-sm shadow-xl shadow-apon-600/30 transition-all hover:scale-102 active:scale-95"
              >
                <span>অর্ডার করতে এগিয়ে যান</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-gray-400 dark:text-dark-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>নিরাপদ পেমেন্ট ও ক্যাশ অন ডেলিভারি সুবিধা</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

