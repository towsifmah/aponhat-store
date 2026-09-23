import React from 'react';
import { PhoneCall, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Footer({ setCurrentView, setSelectedCategory, categories }) {
  const { isAdmin, openLogin } = useAuth();

  return (
    <footer className="w-full bg-[#07130A] text-gray-300 border-t border-apon-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-auto flex items-center p-1 rounded-xl bg-white">
                <img src="/logo.png" alt="আপনহাট" className="h-8 w-auto object-contain" />
              </div>
              <span className="text-xl font-black text-white font-sans">আপনহাট</span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              আপনহাট - আপনার বিশ্বস্ত অনলাইন শপিং মল। সেরা মানের পণ্য, ক্যাশ অন ডেলিভারি এবং দ্রুততম হোম ডেলিভারি নিশ্চয়তা।
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>১০০% আসল ও কোয়ালিটি পরীক্ষিত পণ্য</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-apon-500 pl-2">
              জনপ্রিয় ক্যাটাগরি
            </h4>
            <ul className="space-y-2 text-xs">
              {categories && categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setCurrentView('home');
                      setSelectedCategory(cat.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hover:text-apon-400 transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-apon-500 pl-2">
              গ্রাহক সেবা
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>ডেলিভারি পলিসি (২-৪ দিন)</li>
              <li>রিটার্ন ও রিফান্ড নীতি</li>
              <li>পেমেন্ট সংক্রান্ত তথ্য</li>
              <li>
                {isAdmin ? (
                  <button 
                    onClick={() => setCurrentView('admin')}
                    className="text-amber-400 hover:underline font-bold"
                  >
                    অ্যাডমিন কন্ট্রোল প্যানেল
                  </button>
                ) : (
                  <button 
                    onClick={openLogin}
                    className="text-gray-400 hover:text-apon-400 transition-colors"
                  >
                    আমার একাউন্ট / লগইন
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-apon-500 pl-2">
              যোগাযোগ
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-apon-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500">বিকাশ ও হেল্পলাইন:</p>
                  <a href="tel:01617971644" className="font-bold text-white hover:text-apon-400">০১৬১৭৯৭১৬৪৪</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500">নগদ অ্যাকাউন্ট:</p>
                  <span className="font-bold text-white">০১৩০৯৯৯৩৪৭০</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-apon-400 shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 আপনহাট (AponHat) - সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">bKash</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">Nagad</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">Cash on Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
