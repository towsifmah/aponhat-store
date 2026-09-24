import React from 'react';
import { Home, LayoutGrid, Search, ShoppingBag, User, LayoutDashboard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function MobileBottomNav({ currentView, setCurrentView, navigateTo, setSelectedCategory }) {
  const { totalCount, setIsCartOpen, cartBadgeAnimate } = useCart();
  const { currentUser, isAdmin, openLogin } = useAuth();

  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('input[type="text"]');
    if (input) {
      setTimeout(() => input.focus(), 300);
    }
  };

  const scrollToCategories = () => {
    if (currentView !== 'home') {
      if (navigateTo) navigateTo('/', 'home', 'all');
      else setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('products-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border-t border-gray-200/90 dark:border-dark-border py-2 px-3 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      {/* Home */}
      <button
        onClick={() => {
          if (navigateTo) navigateTo('/', 'home', 'all');
          else {
            setCurrentView('home');
            setSelectedCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className={`flex flex-col items-center gap-1 transition-colors ${
          currentView === 'home'
            ? 'text-apon-600 dark:text-apon-400 font-bold'
            : 'text-gray-500 dark:text-dark-muted hover:text-apon-600'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px]">হোম</span>
      </button>

      {/* Categories */}
      <button
        onClick={scrollToCategories}
        className="flex flex-col items-center gap-1 text-gray-500 dark:text-dark-muted hover:text-apon-600 dark:hover:text-apon-400 transition-colors"
      >
        <LayoutGrid className="w-5 h-5" />
        <span className="text-[10px]">ক্যাটাগরি</span>
      </button>

      {/* Search */}
      <button
        onClick={scrollToSearch}
        className="flex flex-col items-center gap-1 text-gray-500 dark:text-dark-muted hover:text-apon-600 dark:hover:text-apon-400 transition-colors"
      >
        <Search className="w-5 h-5" />
        <span className="text-[10px]">সার্চ</span>
      </button>

      {/* Cart with Badge */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col items-center gap-1 text-gray-500 dark:text-dark-muted hover:text-apon-600 dark:hover:text-apon-400 transition-colors"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5" />
          {totalCount > 0 && (
            <span
              className={`absolute -top-1.5 -right-2.5 flex items-center justify-center min-w-[17px] h-4 px-1 text-[9px] font-black bg-amber-400 text-gray-900 rounded-full shadow ${
                cartBadgeAnimate ? 'animate-bounce-short scale-125' : ''
              }`}
            >
              {totalCount}
            </span>
          )}
        </div>
        <span className="text-[10px]">কার্ট</span>
      </button>

      {/* Account or Admin */}
      {isAdmin ? (
        <button
          onClick={() => {
            if (navigateTo) navigateTo('/admin', 'admin', 'all');
            else setCurrentView('admin');
          }}
          className={`flex flex-col items-center gap-1 transition-colors ${
            currentView === 'admin'
              ? 'text-amber-500 font-bold'
              : 'text-amber-600 dark:text-amber-400'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px]">অ্যাডমিন</span>
        </button>
      ) : (
        <button
          onClick={openLogin}
          className="flex flex-col items-center gap-1 text-gray-500 dark:text-dark-muted hover:text-apon-600 dark:hover:text-apon-400 transition-colors"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px]">{currentUser ? 'প্রোফাইল' : 'লগইন'}</span>
        </button>
      )}
    </nav>
  );
}
