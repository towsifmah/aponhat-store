import React from 'react';
import { Sparkles, Truck, ShieldCheck, Headphones, ArrowRight, Flame, ShoppingBag, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { smartSearchProducts } from '../utils/searchHelper';

export const getCategoryEmoji = (name = '') => {
  if (name.includes('জেন্টস')) return '👔';
  if (name.includes('লেডিস')) return '👗';
  if (name.includes('বেবি') || name.includes('শিশু')) return '👶';
  if (name.includes('হোম') || name.includes('ডেকর')) return '🛋️';
  if (name.includes('কসমেটিকস') || name.includes('গহনা')) return '💄';
  if (name.includes('ইলেকট্রনিকস') || name.includes('গ্যাজেট')) return '⌚';
  if (name.includes('ফুড') || name.includes('ফ্রুটস')) return '🍯';
  if (name.includes('ব্যাগ')) return '🎒';
  if (name.includes('সিজনাল')) return '🌟';
  if (name.includes('কম্বো') || name.includes('কাপল')) return '🎁';
  return '🛍️';
};

export default function HomePage({
  products,
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onQuickView
}) {
  const [selectedSubcategory, setSelectedSubcategory] = React.useState('all');

  // Reset subcategory when selectedCategory changes
  React.useEffect(() => {
    setSelectedSubcategory('all');
  }, [selectedCategory]);

  // Compute available subcategories for selected category
  const availableSubcategories = React.useMemo(() => {
    if (selectedCategory === 'all') return [];
    const subs = new Set();
    products.forEach((p) => {
      if (String(p.category_id) === String(selectedCategory) && p.subcategory) {
        subs.add(p.subcategory);
      }
    });
    return Array.from(subs);
  }, [selectedCategory, products]);

  // Intelligent Filter: If user is searching, search globally across all products with bilingual synonyms!
  const filteredProducts = React.useMemo(() => {
    if (searchQuery && searchQuery.trim().length > 0) {
      let results = smartSearchProducts(products, searchQuery);

      // If user additionally chose a specific category, allow narrowing if it has matches
      if (selectedCategory !== 'all') {
        const catScoped = results.filter(p => String(p.category_id) === String(selectedCategory));
        if (catScoped.length > 0) {
          results = catScoped;
        }
      }
      if (selectedSubcategory !== 'all') {
        const subScoped = results.filter(p => p.subcategory === selectedSubcategory);
        if (subScoped.length > 0) {
          results = subScoped;
        }
      }
      return results;
    }

    // Default category & subcategory browsing
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || 
        String(product.category_id) === String(selectedCategory) ||
        (product.category_name && product.category_name.toLowerCase() === String(selectedCategory).toLowerCase());

      const matchesSubcategory =
        selectedSubcategory === 'all' || 
        product.subcategory === selectedSubcategory;

      return matchesCategory && matchesSubcategory;
    });
  }, [products, searchQuery, selectedCategory, selectedSubcategory]);

  return (
    <div className="space-y-10 pb-16">
      
      {/* Hero Banner with AponHat Premium Branding (No dropship mentions) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#021f11] via-[#044c27] to-[#01140a] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-500/20 shadow-2xl">
        {/* Glow Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-br from-emerald-400/25 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gradient-to-tr from-amber-400/20 via-emerald-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-emerald-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>বাংলাদেশের নির্ভরযোগ্য প্রিমিয়াম অনলাইন শপ</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              আপনার পছন্দের পণ্য, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-100 to-teal-200 drop-shadow-sm">
                আপনহাটে ঘরে বসেই!
              </span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-50/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              সেরা মানের ট্রেন্ডি ফ্যাশন, গ্যাজেটস ও লাইফস্টাইল পণ্য এখন এক ক্লিকেই আপনার ঠিকানায়। ঢাকা সিটিতে ৬০৳ ও সারাদেশে ১০০৳ ডেলিভারি চার্জ।
            </p>

            {/* Quick Action Pills */}
            <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-950/30 hover:shadow-emerald-400/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/50"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>এখনই কেনাকাটা করুন</span>
                <ArrowRight className="w-4 h-4 text-emerald-700" />
              </button>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-900/60 backdrop-blur-md border border-emerald-400/30 text-xs font-semibold text-emerald-100 shadow-inner">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>বিকাশ ও ক্যাশ অন ডেলিভারি</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/25 p-6 shadow-2xl text-center space-y-4 ring-1 ring-white/20">
              <div className="relative mx-auto w-52 h-24 flex items-center justify-center p-3 rounded-2xl bg-white/95 dark:bg-[#0c1f14]/95 shadow-2xl border border-white/40 overflow-hidden">
                <img src="/logo.png" alt="আপনহাট" className="max-h-full max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,135,62,0.25)]" />
              </div>

              <div>
                <h3 className="text-lg font-black text-white">আপনহাট হোম ডেলিভারি</h3>
                <p className="text-xs text-emerald-100/80 mt-0.5">সারা দেশে দ্রুততম ও নিরাপদ ক্যাশ অন ডেলিভারি</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <p className="text-[10px] text-emerald-200">ঢাকা সিটিতে চার্জ</p>
                  <p className="text-xs font-black text-white">৳৬০ (২-৩ দিন)</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <p className="text-[10px] text-emerald-200">ঢাকার বাইরে চার্জ</p>
                  <p className="text-xs font-black text-white">৳১০০ (৩-৪ দিন)</p>
                </div>
              </div>

              <div className="pt-1 text-[11px] font-semibold text-amber-300 flex items-center justify-center gap-1.5 bg-amber-400/10 py-1.5 px-3 rounded-full border border-amber-300/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>১৫০০৳ বা বেশি অর্ডারে ফ্রি ডেলিভারি!</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-4 rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-apon-50 dark:bg-dark-bg text-apon-600 dark:text-apon-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">দ্রুত ডেলিভারি</h4>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted">সারা দেশে হোম ডেলিভারি</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-apon-50 dark:bg-dark-bg text-apon-600 dark:text-apon-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">১০০% আসল পণ্য</h4>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted">কোয়ালিটি চেক করা পণ্য</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-apon-50 dark:bg-dark-bg text-apon-600 dark:text-apon-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">ক্যাশ অন ডেলিভারি</h4>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted">হাতে পেয়ে টাকা দিন</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-apon-50 dark:bg-dark-bg text-apon-600 dark:text-apon-400">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">২৪/৭ সাপোর্ট</h4>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted">০১৬১৭৯৭১৬৪৪</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Showcase - Ultra Modern & Stylish */}
      {categories && categories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>জনপ্রিয় ক্যাটাগরি কালেকশন</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                ক্যাটাগরি অনুযায়ী এক্সপ্লোর করুন
              </h2>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setTimeout(() => {
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
              }}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>সবগুলো দেখুন ({products.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {categories.map((cat) => {
              const isSelected = String(selectedCategory) === String(cat.id);
              const emoji = getCategoryEmoji(cat.name);
              const count = cat.actual_products_count || cat.product_count;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSubcategory('all');
                    setTimeout(() => {
                      const el = document.getElementById('products-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                  }}
                  className={`group relative cursor-pointer rounded-3xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1.5 text-center overflow-hidden ${
                    isSelected
                      ? 'border-emerald-500 bg-gradient-to-b from-emerald-500/10 via-white to-emerald-50/40 dark:from-emerald-950/50 dark:via-dark-card dark:to-dark-card shadow-lg ring-2 ring-emerald-500/30'
                      : 'border-gray-200/90 dark:border-dark-border bg-white dark:bg-dark-card hover:border-emerald-400 hover:shadow-xl dark:hover:shadow-emerald-950/30'
                  }`}
                >
                  {/* Floating Category Emoji */}
                  <div className="absolute top-2.5 left-2.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 dark:bg-dark-card/95 backdrop-blur-md flex items-center justify-center text-sm sm:text-base shadow-sm border border-gray-100 dark:border-dark-border">
                    {emoji}
                  </div>

                  {/* Floating Count Badge */}
                  {count && (
                    <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold shadow-xs">
                      {count} টি
                    </div>
                  )}

                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/60 dark:from-dark-bg dark:to-dark-bg/60 p-2 sm:p-3 mb-2.5">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80';
                      }}
                    />
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center justify-center gap-1 opacity-90 group-hover:opacity-100">
                    <span>পণ্য দেখুন</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Main Products Section */}
      <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern 1-Tap Category Quick Filter Pills Bar */}
        {categories && categories.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 scroll-smooth">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-emerald-500/25 ring-2 ring-emerald-500/30'
                    : 'bg-white dark:bg-dark-card text-gray-700 dark:text-dark-text border border-gray-200/80 dark:border-dark-border hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-dark-bg'
                }`}
              >
                <span>✨</span>
                <span>সকল পণ্য ({products.length})</span>
              </button>

              {categories.map((cat) => {
                const isSelected = String(selectedCategory) === String(cat.id);
                const count = cat.actual_products_count || cat.product_count;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedSubcategory('all');
                    }}
                    className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-emerald-500/25 ring-2 ring-emerald-500/30 scale-102'
                        : 'bg-white dark:bg-dark-card text-gray-700 dark:text-dark-text border border-gray-200/80 dark:border-dark-border hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-dark-bg'
                    }`}
                  >
                    <span className="text-sm">{getCategoryEmoji(cat.name)}</span>
                    <span>{cat.name}</span>
                    {count && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-dark-bg text-gray-500 dark:text-dark-muted'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-gray-100 dark:border-dark-border">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span>
                {searchQuery
                  ? `"${searchQuery}" এর অনুসন্ধান ফলাফল`
                  : (selectedCategory === 'all'
                    ? 'সকল পণ্য সম্ভার'
                    : categories.find((c) => String(c.id) === String(selectedCategory))?.name || 'পণ্যসমূহ')}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-apon-100 text-apon-800 dark:bg-apon-950 dark:text-apon-300">
                {filteredProducts.length} টি পণ্য
              </span>
            </h2>
            {searchQuery && (
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <p className="text-xs text-gray-500 dark:text-dark-muted">
                  সর্বমোট ৫২৪টি পণ্যের মধ্যে <span className="font-bold text-gray-900 dark:text-white">{filteredProducts.length}</span> টি পণ্য পাওয়া গেছে
                </p>
                {setSearchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-red-600 dark:text-red-400 hover:underline font-bold flex items-center gap-1 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-md"
                  >
                    <span>সার্চ মুছুন</span>
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                if (setSearchQuery) setSearchQuery('');
              }}
              className="text-xs font-semibold text-apon-600 dark:text-apon-400 hover:underline self-start sm:self-auto"
            >
              ← সব ক্যাটাগরি ও পণ্য দেখুন
            </button>
          )}
        </div>

        {/* Subcategories Filter Rail */}
        {availableSubcategories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-5 border-b border-gray-100 dark:border-dark-border">
            <span className="text-[11px] font-bold text-gray-400 shrink-0">সাবক্যাটাগরি:</span>
            <button
              onClick={() => setSelectedSubcategory('all')}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedSubcategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-cardHover'
              }`}
            >
              সকল ({products.filter(p => String(p.category_id) === String(selectedCategory)).length})
            </button>
            {availableSubcategories.map((sub) => {
              const count = products.filter(p => String(p.category_id) === String(selectedCategory) && p.subcategory === sub).length;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedSubcategory === sub
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-cardHover'
                  }`}
                >
                  {sub} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-4 space-y-3 animate-pulse">
                <div className="aspect-square w-full rounded-xl bg-gray-200 dark:bg-dark-bg" />
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-dark-bg rounded" />
                <div className="h-3 w-1/2 bg-gray-200 dark:bg-dark-bg rounded" />
                <div className="h-6 w-full bg-gray-200 dark:bg-dark-bg rounded-lg" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-gray-500 dark:text-dark-muted">
            <ShoppingBag className="w-12 h-12 text-gray-300 dark:text-dark-border mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
              {searchQuery ? `"${searchQuery}" এর জন্য কোনো পণ্য পাওয়া যায়নি` : 'কোনো পণ্য পাওয়া যায়নি'}
            </h3>
            <p className="text-xs mt-1">শার্ট, ঘড়ি, পাঞ্জাবি, ব্যাগ বা অন্য কোনো কিওয়ার্ড লিখে খুঁজুন অথবা ক্যাটাগরি পরিবর্তন করুন।</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                if (setSearchQuery) setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-apon-600 hover:bg-apon-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              সকল পণ্য দেখুন ({products.length} টি)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
