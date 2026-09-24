import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, Sun, Moon, Search, LayoutDashboard, ShieldCheck, User, 
  LogOut, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Layers
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  categories,
  products,
  onQuickView
}) {
  const { isDark, toggleTheme } = useTheme();
  const { totalCount, setIsCartOpen, cartBadgeAnimate } = useCart();
  const { currentUser, isAdmin, logout, openLogin } = useAuth();

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const categoryScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to dynamically show/hide scroll arrows
  const checkCategoryScroll = () => {
    if (categoryScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkCategoryScroll();
    window.addEventListener('resize', checkCategoryScroll);
    return () => window.removeEventListener('resize', checkCategoryScroll);
  }, [categories]);

  const handleCategoryScroll = (direction) => {
    if (categoryScrollRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      categoryScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(checkCategoryScroll, 350);
    }
  };

  // Filter live search suggestions
  const liveSearchResults = searchQuery.trim().length > 1 && products
    ? products.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/95 dark:bg-dark-card/95 border-b border-gray-200/80 dark:border-dark-border transition-colors duration-300 shadow-xs">
      
      {/* Top Announcement Bar - Customer-Facing ONLY (No dropshipping/admin mentions) */}
      <div className="bg-gradient-to-r from-apon-800 via-apon-600 to-apon-700 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-apon-300" />
          <span>১০০% অরিজিনাল কোয়ালিটি গ্যারান্টি | দ্রুততম ক্যাশ অন ডেলিভারি</span>
        </div>
        <div className="mx-auto sm:mx-0">
          <span>বিকাশ/নগদ/ক্যাশ অন ডেলিভারিতে অর্ডার করুন | হেল্পলাইন: </span>
          <a href="tel:01617971644" className="font-bold underline ml-1 hover:text-apon-200">০১৬১৭৯৭১৬৪৪</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {/* ONLY show Admin Dashboard link in top bar if current user is ADMIN */}
          {isAdmin && (
            <button 
              onClick={() => setCurrentView('admin')}
              className="hover:underline flex items-center gap-1 text-amber-300 hover:text-white font-bold"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>অ্যাডমিন ড্যাশবোর্ড</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => { setCurrentView('home'); setSelectedCategory('all'); }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative h-10 sm:h-12 w-auto flex items-center overflow-hidden rounded-xl p-1 transition-transform group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="আপনহাট" 
                className="h-8 sm:h-11 w-auto object-contain drop-shadow-xs" 
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-apon-600 dark:text-apon-400 font-sans flex items-center gap-1">
                আপনহাট
              </h1>
              <p className="hidden sm:block text-[10px] text-gray-500 dark:text-dark-muted font-medium tracking-wide">
                সেরা অনলাইন কেনাকাটা
              </p>
            </div>
          </div>

          {/* Dynamic Search Bar with Live Suggestions Dropdown */}
          <div ref={searchRef} className="flex-1 max-w-lg mx-1 sm:mx-6 relative">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-dark-muted" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setSearchDropdownOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchDropdownOpen(true);
                }}
                placeholder="পণ্য খুঁজুন (যেমন: শার্ট, ঘড়ি, ব্যাগ)..."
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 rounded-full border border-gray-200 dark:border-dark-border bg-gray-50/80 dark:bg-dark-bg/80 text-xs sm:text-sm text-gray-900 dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-apon-500 focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Live Search Autocomplete Dropdown */}
            {searchDropdownOpen && liveSearchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-2xl overflow-hidden z-50 animate-toast-in">
                <div className="p-2 border-b border-gray-100 dark:border-dark-border text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  পরামর্শসমূহ
                </div>
                <div className="divide-y divide-gray-100 dark:divide-dark-border max-h-72 overflow-y-auto no-scrollbar">
                  {liveSearchResults.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onQuickView(prod);
                        setSearchDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-dark-bg cursor-pointer transition-colors"
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-10 h-10 rounded-lg object-cover bg-gray-100 dark:bg-dark-bg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">{prod.title}</p>
                        <p className="text-[10px] text-gray-400">{prod.category_name}</p>
                      </div>
                      <span className="text-xs font-bold text-apon-600 dark:text-apon-400 font-sans">
                        ৳{Math.round(prod.retail_price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Dark/Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 sm:p-2.5 rounded-full text-gray-600 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-cardHover transition-all active:scale-95 border border-transparent hover:border-gray-200 dark:hover:border-dark-border"
              title={isDark ? "লাইট মোডে যান" : "ডার্ক মোডে যান"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              )}
            </button>

            {/* Dynamic User Account Dropdown */}
            <div className="relative">
              {currentUser ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card text-xs font-bold text-gray-800 dark:text-white hover:border-apon-400 transition-all"
                  >
                    <User className="w-4 h-4 text-apon-600 dark:text-apon-400" />
                    <span className="max-w-[70px] sm:max-w-[90px] truncate">{currentUser.name}</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-2xl py-2 z-50 text-xs font-semibold">
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-dark-border">
                        <p className="text-[10px] text-gray-400 font-normal">লগইন করা হয়েছে:</p>
                        <p className="font-bold text-gray-900 dark:text-white truncate">{currentUser.name}</p>
                        <span className="text-[9px] uppercase font-bold text-apon-600">{currentUser.role}</span>
                      </div>

                      {/* Admin Dashboard Option - ONLY FOR ADMIN */}
                      {isAdmin && (
                        <button
                          onClick={() => {
                            setCurrentView('admin');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 flex items-center gap-2 font-bold"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          <span>অ্যাডমিন ড্যাশবোর্ড</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                          if (currentView === 'admin') setCurrentView('home');
                        }}
                        className="w-full text-left px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>লগআউট</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={openLogin}
                  className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card text-xs font-bold text-gray-700 dark:text-dark-text hover:border-apon-400 transition-all active:scale-95"
                >
                  <User className="w-4 h-4 text-apon-600 dark:text-apon-400" />
                  <span className="hidden sm:inline">লগইন / সাইন আপ</span>
                </button>
              )}
            </div>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shadow-apon-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden md:inline text-xs sm:text-sm font-semibold">কার্ট</span>
              
              {/* Badge */}
              <span
                className={`flex items-center justify-center min-w-[18px] sm:min-w-[20px] h-4 sm:h-5 px-1 sm:px-1.5 text-[10px] sm:text-xs font-bold bg-amber-400 text-gray-900 rounded-full shadow ${
                  cartBadgeAnimate ? 'animate-bounce-short scale-125' : ''
                }`}
              >
                {totalCount}
              </span>
            </button>

          </div>
        </div>

        {/* Dynamic Category Navigation Bar - ZERO SCROLLBARS, Smooth Chevron Buttons & Soft Masking */}
        {currentView === 'home' && categories && categories.length > 0 && (
          <nav aria-label="Product Categories" className="relative border-t border-gray-100 dark:border-dark-border py-2 flex items-center">
            
            {/* Scroll Left Button (Visible when scrolled) */}
            {canScrollLeft && (
              <button
                onClick={() => handleCategoryScroll('left')}
                aria-label="Scroll Categories Left"
                className="hidden md:flex absolute left-0 z-10 w-8 h-8 items-center justify-center rounded-full bg-white/90 dark:bg-dark-card/90 shadow-md border border-gray-200 dark:border-dark-border text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg transition-all -ml-3"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Left Gradient Edge Fade */}
            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-dark-card to-transparent z-[5]" />
            )}

            {/* Scrollable Category Rail with ZERO visible scrollbars */}
            <div 
              ref={categoryScrollRef}
              onScroll={checkCategoryScroll}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full px-1"
            >
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  if (currentView !== 'home') setCurrentView('home');
                  setTimeout(() => {
                    const el = document.getElementById('products-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 60);
                }}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-apon-600 text-white shadow-sm ring-2 ring-apon-600/30'
                    : 'bg-gray-100/90 dark:bg-dark-bg/90 text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-cardHover'
                }`}
              >
                সকল ক্যাটাগরি
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchQuery('');
                    if (currentView !== 'home') setCurrentView('home');
                    setTimeout(() => {
                      const el = document.getElementById('products-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 60);
                  }}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    String(selectedCategory) === String(cat.id)
                      ? 'bg-apon-600 text-white shadow-sm ring-2 ring-apon-600/30'
                      : 'bg-gray-100/90 dark:bg-dark-bg/90 text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-cardHover'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Right Gradient Edge Fade */}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-dark-card to-transparent z-[5]" />
            )}

            {/* Scroll Right Button */}
            {canScrollRight && (
              <button
                onClick={() => handleCategoryScroll('right')}
                aria-label="Scroll Categories Right"
                className="hidden md:flex absolute right-0 z-10 w-8 h-8 items-center justify-center rounded-full bg-white/90 dark:bg-dark-card/90 shadow-md border border-gray-200 dark:border-dark-border text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg transition-all -mr-3"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

          </nav>
        )}

      </div>
    </header>
  );
}

