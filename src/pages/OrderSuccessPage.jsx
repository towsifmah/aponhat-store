import React from 'react';
import { CheckCircle, Package, PhoneCall, ShoppingBag, ArrowRight, Printer } from 'lucide-react';

export default function OrderSuccessPage({ orderData, onBackToHome, storeSettings = {} }) {
  if (!orderData) return null;

  const helpline = storeSettings.helpline_phone || '01617971644';

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="rounded-3xl border border-apon-200 dark:border-dark-border bg-white dark:bg-dark-card p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-apon-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-apon-100 dark:bg-apon-950/70 border-4 border-apon-500/30 flex items-center justify-center text-apon-600 dark:text-apon-400 mb-6 animate-bounce-short">
          <CheckCircle className="w-10 h-10" />
        </div>

        <span className="inline-block rounded-full bg-apon-50 dark:bg-dark-bg px-4 py-1 text-xs font-bold text-apon-700 dark:text-apon-300 border border-apon-200 dark:border-dark-border mb-3">
          অর্ডার সফলভাবে সম্পন্ন হয়েছে
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
          ধন্যবাদ! আপনার অর্ডারটি গৃহীত হয়েছে
        </h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-dark-muted max-w-md mx-auto">
          আপনহাট থেকে কেনাকাটা করার জন্য আপনাকে ধন্যবাদ। খুব শীঘ্রই আমাদের ডেলিভারি টিম আপনার সাথে ফোনে যোগাযোগ করবে।
        </p>

        {/* Order Details Card */}
        <div className="mt-8 p-6 rounded-2xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-left space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-dark-border">
            <span className="text-xs text-gray-500 dark:text-dark-muted font-medium">অর্ডার কোড:</span>
            <span className="text-sm font-mono font-bold text-apon-600 dark:text-apon-400">
              #{orderData.order_code}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-600 dark:text-dark-muted">
            <span>সর্বমোট পরিশোধযোগ্য:</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white font-sans">
              ৳{orderData.total_amount}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-600 dark:text-dark-muted">
            <span>আনুমানিক ডেলিভারি সময়:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {orderData.delivery_time || '২ থেকে ৪ কার্যদিবস'}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-600 dark:text-dark-muted">
            <span>কাস্টমার সাপোর্ট:</span>
            <a href={`tel:${helpline}`} className="font-bold text-apon-600 hover:underline">
              {helpline}
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-gray-300 dark:border-dark-border text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg text-xs font-bold transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>ইনভয়েস প্রিন্ট করুন</span>
          </button>

          <button
            onClick={onBackToHome}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 text-white text-xs font-bold shadow-lg shadow-apon-600/30 transition-all hover:scale-102 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>আরো পণ্য দেখুন</span>
          </button>
        </div>

      </div>
    </div>
  );
}
