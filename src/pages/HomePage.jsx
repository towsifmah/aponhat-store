import React from 'react';
import { Sparkles, Truck, ShieldCheck, Headphones, ArrowRight, Flame, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function HomePage({
  products,
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
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

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || 
      String(product.category_id) === String(selectedCategory) ||
      (product.category_name && product.category_name.toLowerCase() === String(selectedCategory).toLowerCase());

    const matchesSubcategory =
      selectedSubcategory === 'all' || 
      product.subcategory === selectedSubcategory;

    const matchesSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.subcategory && product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.category_name && product.category_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.sku && product.sku.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-16">
      
      {/* Hero Banner with AponHat Premium Branding (No dropship mentions) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-apon-800 via-apon-700 to-apon-900 text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Glow Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-apon-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-apon-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>বাংলাদেশের নির্ভরযোগ্য প্রিমিয়াম অনলাইন শপ</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              আপনার পছন্দের পণ্য, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300">
                আপনহাটে ঘরে বসেই!
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0 font-normal">
              সেরা মানের ট্রেন্ডি ফ্যাশন, গ্যাজেটস ও লাইফস্টাইল পণ্য এখন এক ক্লিকেই আপনার ঠিকানায়। ক্যাশ অন ডেলিভারি ও দ্রুততম হোম ডেলিভারি সুবিধা!
            </p>

            {/* Quick Action Pills */}
            <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const el = document.getElementById('products-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-white text-apon-800 hover:bg-apon-50 font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-apon-600" />
                <span>এখনই কেনাকাটা করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>বিকাশ ও নগদে সহজ পেমেন্ট</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-2xl text-center space-y-4">
              <div className="relative mx-auto w-44 h-24 flex items-center justify-center p-2 rounded-2xl bg-white shadow-lg overflow-hidden">
                <img src="/logo.png" alt="আপনহাট" className="max-h-full max-w-full object-contain" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">আপনহাট ডেলিভারি সুবিধা</h3>
                <p className="text-xs text-white/70 mt-0.5">অর্ডার করার পর পিকআপ ভ্যানে দ্রুত ডেলিভারি</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-[10px] text-white/60">ডেলিভারি সময়</p>
                  <p className="text-xs font-bold text-white">২-৪ দিন</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-[10px] text-white/60">পেমেন্ট মেথড</p>
                  <p className="text-xs font-bold text-white">বিকাশ/নগদ/COD</p>
                </div>
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

      {/* Categories Grid Showcase */}
      {categories && categories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                ক্যাটাগরি অনুযায়ী পণ্য দেখুন
              </h2>
              <p className="text-xs text-gray-500 dark:text-dark-muted mt-0.5">
                আপনার পছন্দের ক্যাটাগরি বেছে নিন
              </p>
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
              className="text-xs font-bold text-apon-600 dark:text-apon-400 hover:underline"
            >
              সবগুলো ({products.length})
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((cat) => (
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
                className={`group cursor-pointer rounded-2xl border p-3.5 transition-all duration-200 hover:-translate-y-1 text-center ${
                  String(selectedCategory) === String(cat.id)
                    ? 'border-apon-600 bg-apon-50/80 dark:bg-apon-950/40 shadow-md ring-2 ring-apon-500/20'
                    : 'border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card hover:border-apon-300'
                }`}
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-50 dark:bg-dark-bg p-2 mb-2">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-apon-600 dark:group-hover:text-apon-400">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  {cat.actual_products_count || cat.product_count} টি পণ্য
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Products Section */}
      <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-gray-100 dark:border-dark-border">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span>
                {selectedCategory === 'all'
                  ? 'সকল পণ্য সম্ভার'
                  : categories.find((c) => String(c.id) === String(selectedCategory))?.name || 'পণ্যসমূহ'}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-apon-100 text-apon-800 dark:bg-apon-950 dark:text-apon-300">
                {filteredProducts.length} টি
              </span>
            </h2>
            {searchQuery && (
              <p className="text-xs text-gray-500 dark:text-dark-muted mt-1">
                "{searchQuery}" এর জন্য ফলাফল দেখাচ্ছে
              </p>
            )}
          </div>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
              }}
              className="text-xs font-semibold text-apon-600 dark:text-apon-400 hover:underline self-start sm:self-auto"
            >
              ← সব ক্যাটাগরি দেখুন
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
            <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">কোনো পণ্য পাওয়া যায়নি</h3>
            <p className="text-xs mt-1">অন্য কোনো কিওয়ার্ড লিখে খুঁজুন অথবা ক্যাটাগরি পরিবর্তন করুন।</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-apon-600 text-white text-xs font-bold"
            >
              সব পণ্য দেখুন
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
