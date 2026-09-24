import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import AdminDashboard from './pages/AdminDashboard';
import CartDrawer from './components/CartDrawer';
import CartToast from './components/CartToast';
import MobileBottomNav from './components/MobileBottomNav';
import ProductModal from './components/ProductModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import PriyaChatbot from './components/PriyaChatbot';
import ProductPage from './pages/ProductPage';
import { useAuth } from './context/AuthContext';
import { ShieldAlert, KeyRound } from 'lucide-react';
import { parseAppPathname, getProductUrl, slugifyTitle, findProductInList } from './utils/urlHelper';

export default function App() {
  const initialRoute = parseAppPathname(typeof window !== 'undefined' ? window.location.pathname : '/');

  const [currentView, setCurrentView] = useState(initialRoute.view); // home, checkout, order_success, admin, product
  const [selectedCategory, setSelectedCategory] = useState(initialRoute.catId);
  const [selectedProductId, setSelectedProductId] = useState(initialRoute.productId || null);
  const [directProductData, setDirectProductData] = useState(null);
  const [singleProductLoading, setSingleProductLoading] = useState(false);

  // Instant 0ms Load on Reload from localStorage Cache
  const [products, setProducts] = useState(() => {
    try {
      const cached = localStorage.getItem('aponhat_cached_products');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed reading product cache:', e);
    }
    return [];
  });

  const [categories, setCategories] = useState(() => {
    try {
      const cached = localStorage.getItem('aponhat_cached_categories');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed reading category cache:', e);
    }
    return [];
  });

  const [loading, setLoading] = useState(() => {
    try {
      const cached = localStorage.getItem('aponhat_cached_products');
      return !cached || JSON.parse(cached).length === 0;
    } catch {
      return true;
    }
  });

  const [storeSettings, setStoreSettings] = useState(() => {
    try {
      const cached = localStorage.getItem('aponhat_cached_settings');
      return cached ? JSON.parse(cached) : {
        store_name: 'আপনহাট (AponHat)',
        store_notice: 'আপনহাটে আপনাকে স্বাগতম! সারা বাংলাদেশে হোম ডেলিভারি দেওয়া হয়।',
        helpline_phone: '01617971644',
        inside_dhaka_delivery: 60,
        outside_dhaka_delivery: 100,
        bkash_number: '01617971644',
        nagad_number: '01309993470',
        rocket_number: '01617971644',
        default_markup_percent: '35',
        priya_status: 'online'
      };
    } catch {
      return {
        store_name: 'আপনহাট (AponHat)',
        store_notice: 'আপনহাটে আপনাকে স্বাগতম! সারা বাংলাদেশে হোম ডেলিভারি দেওয়া হয়।',
        helpline_phone: '01617971644',
        inside_dhaka_delivery: 60,
        outside_dhaka_delivery: 100,
        bkash_number: '01617971644',
        nagad_number: '01309993470',
        rocket_number: '01617971644',
        default_markup_percent: '35',
        priya_status: 'online'
      };
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [orderSuccessData, setOrderSuccessData] = useState(null);

  const { isAdmin, openLogin } = useAuth();

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = parseAppPathname(window.location.pathname);
      setCurrentView(route.view);
      setSelectedCategory(route.catId);
      if (route.productId) {
        setSelectedProductId(route.productId);
      } else {
        setSelectedProductId(null);
        setDirectProductData(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fetch or find single product when visiting /category/:catId/:item or /product/:id directly or on reload
  useEffect(() => {
    if (selectedProductId) {
      const found = findProductInList(selectedProductId, products);
      if (found) {
        setDirectProductData(found);
        setSingleProductLoading(false);
      } else {
        let isMounted = true;
        setSingleProductLoading(true);
        fetch(`/api/products.php?slug=${encodeURIComponent(selectedProductId)}`)
          .then(r => r.json())
          .then(res => {
            if (isMounted) {
              if (res && res.status === 'success' && res.data) {
                setDirectProductData(res.data);
              }
              setSingleProductLoading(false);
            }
          })
          .catch(err => {
            console.warn('Single product fetch error:', err);
            if (isMounted) setSingleProductLoading(false);
          });
        return () => { isMounted = false; };
      }
    }
  }, [selectedProductId, products]);

  // Fetch categories, products, and settings on initial load
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const [catRes, prodRes, setRes] = await Promise.all([
          fetch('/api/categories.php'),
          fetch('/api/products.php'),
          fetch('/api/settings.php').catch(() => null)
        ]);

        const catData = await catRes.json();
        const prodData = await prodRes.json();

        if (setRes && setRes.ok) {
          const setData = await setRes.json();
          if (setData.status === 'success' && setData.data) {
            if (isMounted) setStoreSettings(setData.data);
            try {
              localStorage.setItem('aponhat_cached_settings', JSON.stringify(setData.data));
            } catch {}
          }
        }

        if (isMounted) {
          if (catData.status === 'success' && Array.isArray(catData.data) && catData.data.length > 0) {
            setCategories(catData.data);
            try {
              localStorage.setItem('aponhat_cached_categories', JSON.stringify(catData.data));
            } catch {}
          }
          if (prodData.status === 'success' && Array.isArray(prodData.data) && prodData.data.length > 0) {
            let prods = prodData.data;
            try {
              const overrides = JSON.parse(localStorage.getItem('aponhat_price_overrides') || '{}');
              if (Object.keys(overrides).length > 0) {
                prods = prods.map(p => {
                  const ovr = overrides[String(p.id)];
                  if (ovr) {
                    return {
                      ...p,
                      retail_price: ovr.retail_price !== undefined ? ovr.retail_price : p.retail_price,
                      price: ovr.price !== undefined ? ovr.price : p.price,
                      stock: ovr.stock !== undefined ? ovr.stock : p.stock
                    };
                  }
                  return p;
                });
              }
            } catch {}
            setProducts(prods);
            try {
              localStorage.setItem('aponhat_cached_products', JSON.stringify(prods));
            } catch {}
          }
        }
      } catch (err) {
        console.error('Error loading store data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, []);

  // Real-time live price updater called directly from AdminDashboard
  const handleProductPriceUpdated = (productId, newPrice, newStock) => {
    const pIdStr = String(productId);
    const parsedPrice = parseFloat(newPrice);
    const parsedStock = newStock !== undefined ? parseInt(newStock) : undefined;

    setProducts(prevProducts => {
      const updated = prevProducts.map(p => {
        if (String(p.id) === pIdStr) {
          return {
            ...p,
            retail_price: parsedPrice,
            price: parsedPrice,
            stock: parsedStock !== undefined ? parsedStock : p.stock
          };
        }
        return p;
      });
      try {
        localStorage.setItem('aponhat_cached_products', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    // Also persist in price overrides cache
    try {
      const overrides = JSON.parse(localStorage.getItem('aponhat_price_overrides') || '{}');
      overrides[pIdStr] = {
        retail_price: parsedPrice,
        price: parsedPrice,
        stock: parsedStock
      };
      localStorage.setItem('aponhat_price_overrides', JSON.stringify(overrides));
    } catch (e) {}

    // Dispatch global event for live synchronization across components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('aponhat_product_price_changed', {
        detail: { productId: pIdStr, retail_price: parsedPrice, stock: parsedStock }
      }));
    }
  };

  const handleBulkMarkupApplied = (percent) => {
    const markupNum = parseFloat(percent);
    if (isNaN(markupNum)) return;

    setProducts(prevProducts => {
      const updated = prevProducts.map(p => {
        const wholesale = parseFloat(p.reseller_price || p.regular_price || p.price || 0);
        if (wholesale > 0) {
          const newPrice = Math.round(wholesale * (1 + (markupNum / 100)));
          return { ...p, retail_price: newPrice, price: newPrice };
        }
        return p;
      });
      try {
        localStorage.setItem('aponhat_cached_products', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    try {
      localStorage.removeItem('aponhat_price_overrides');
    } catch (e) {}
  };

  // Dynamic Routing Handler
  const navigateTo = (path, view = 'home', catId = 'all', options = {}) => {
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({ view, catId, productId: options.productId || null }, '', path);
    }
    setCurrentView(view);
    setSelectedCategory(catId);
    if (options.productId !== undefined) {
      setSelectedProductId(options.productId);
    }
    if (options.scroll !== false) {
      window.scrollTo({ top: options.scrollTop || 0, behavior: 'smooth' });
    }
  };

  const handleSetCurrentView = (view) => {
    let path = '/';
    if (view === 'admin') path = '/admin';
    else if (view === 'checkout') path = '/checkout';
    else if (view === 'order_success') path = '/order-success';
    else if (view === 'product' && selectedProductId) {
      const prod = directProductData || products.find(p => String(p.id) === String(selectedProductId));
      path = prod ? getProductUrl(prod) : `/product/${selectedProductId}`;
    }
    else if (view === 'home') {
      path = (selectedCategory && selectedCategory !== 'all') ? `/category/${selectedCategory}` : '/';
    }
    navigateTo(path, view, selectedCategory, { productId: view === 'product' ? selectedProductId : null });
  };

  const handleOpenProduct = (productOrId) => {
    let prod = null;
    if (typeof productOrId === 'object' && productOrId !== null) {
      prod = productOrId;
      setDirectProductData(productOrId);
    } else {
      prod = findProductInList(productOrId, products);
      if (prod) setDirectProductData(prod);
    }

    const catId = prod?.category_id || (selectedCategory !== 'all' ? selectedCategory : '1');
    const slug = prod ? slugifyTitle(prod.title) : String(productOrId);
    const path = prod ? getProductUrl(prod) : `/category/${catId}/${slug}`;
    setSelectedProductId(slug);
    setSelectedCategory(catId);
    setCurrentView('product');
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({ view: 'product', catId, productId: slug }, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProductModal = () => {
    setSelectedProductId(null);
    setDirectProductData(null);
    const catPath = (selectedCategory && selectedCategory !== 'all') ? `/category/${selectedCategory}` : '/';
    if (typeof window !== 'undefined' && window.location.pathname !== catPath) {
      window.history.pushState({ view: 'home', catId: selectedCategory, productId: null }, '', catPath);
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setSelectedProductId(null);
    setDirectProductData(null);
    const newPath = (catId && catId !== 'all') ? `/category/${catId}` : '/';
    if (window.location.pathname !== newPath) {
      window.history.pushState({ view: 'home', catId, productId: null }, '', newPath);
    }
    if (currentView !== 'home') {
      setCurrentView('home');
    }
  };

  const handleOrderCompleted = (orderData) => {
    setOrderSuccessData(orderData);
    navigateTo('/order-success', 'order_success', 'all');
  };

  const handleBackToShopping = () => {
    setSelectedProductId(null);
    setDirectProductData(null);
    const catPath = (selectedCategory && selectedCategory !== 'all') ? `/category/${selectedCategory}` : '/';
    navigateTo(catPath, 'home', selectedCategory, { productId: null });
  };

  const handleGoToCheckout = () => {
    navigateTo('/checkout', 'checkout', 'all');
  };

  const handleUpdateStoreSettings = (newSettings) => {
    setStoreSettings(prev => ({ ...prev, ...newSettings }));
    try {
      localStorage.setItem('aponhat_cached_settings', JSON.stringify({ ...storeSettings, ...newSettings }));
    } catch {}
  };

  const activeProduct = directProductData || findProductInList(selectedProductId, products);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={handleSetCurrentView}
        navigateTo={navigateTo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
        categories={categories}
        products={products}
        onQuickView={handleOpenProduct}
        storeSettings={storeSettings}
      />

      {/* Main View Switcher */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentView === 'home' && (
          <HomePage
            products={products}
            loading={loading}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleSelectCategory}
            navigateTo={navigateTo}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onQuickView={handleOpenProduct}
            storeSettings={storeSettings}
          />
        )}

        {currentView === 'product' && (
          <ProductPage
            product={activeProduct}
            loading={singleProductLoading && !activeProduct}
            onBack={handleBackToShopping}
            onBuyNow={handleGoToCheckout}
            onSelectProduct={handleOpenProduct}
            storeSettings={storeSettings}
            relatedProducts={products.filter(p => {
              if (!activeProduct) return false;
              return String(p.id) !== String(activeProduct.id) && (
                String(p.category_id) === String(activeProduct.category_id) ||
                p.category_name === activeProduct.category_name
              );
            }).slice(0, 8)}
            navigateTo={navigateTo}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage
            onBackToShopping={handleBackToShopping}
            onOrderCompleted={handleOrderCompleted}
            storeSettings={storeSettings}
          />
        )}

        {currentView === 'order_success' && (
          <OrderSuccessPage
            orderData={orderSuccessData}
            onBackToHome={handleBackToShopping}
            storeSettings={storeSettings}
          />
        )}

        {currentView === 'admin' && (
          isAdmin ? (
            <AdminDashboard 
              storeSettings={storeSettings} 
              onUpdateSettings={handleUpdateStoreSettings}
              onProductPriceUpdated={handleProductPriceUpdated}
              onBulkMarkupApplied={handleBulkMarkupApplied}
              productsList={products}
            />
          ) : (
            <div className="max-w-md mx-auto my-16 p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-center shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-4">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">অ্যাডমিন এক্সেস সংরক্ষিত</h2>
              <p className="text-xs text-gray-500 dark:text-dark-muted mt-2 mb-6">
                ড্যাশবোর্ডে প্রবেশ করতে অনুগ্রহ করে স্টোর ওনার (অ্যাডমিন) একাউন্ট দিয়ে লগইন করুন।
              </p>
              <button
                onClick={openLogin}
                className="w-full py-3 px-4 rounded-xl bg-apon-600 hover:bg-apon-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>অ্যাডমিন লগইন করুন</span>
              </button>
            </div>
          )
        )}
      </main>

      {/* Slide-out Cart Drawer with Recommendations & No Scrollbar */}
      <CartDrawer 
        onCheckout={handleGoToCheckout} 
        products={products}
        onQuickView={handleOpenProduct}
      />

      {/* Priya Live Shopping Assistant (Left Side) */}
      <PriyaChatbot 
        onQuickView={handleOpenProduct} 
        storeSettings={storeSettings}
      />

      {/* Animated Add-to-Cart Toast Notification */}
      <CartToast onCheckout={handleGoToCheckout} />

      {/* Mobile App Bottom Navigation Bar */}
      <MobileBottomNav
        currentView={currentView}
        setCurrentView={handleSetCurrentView}
        navigateTo={navigateTo}
        setSelectedCategory={handleSelectCategory}
      />

      {/* Product Quick View & Variant Modal with Address Bar URL Sync & Zoom */}
      {selectedProductId && activeProduct && currentView !== 'product' && (
        <ProductModal
          product={activeProduct}
          onClose={handleCloseProductModal}
          onBuyNow={handleGoToCheckout}
          storeSettings={storeSettings}
          onOpenFullPage={() => {
            const path = getProductUrl(activeProduct);
            navigateTo(path, 'product', activeProduct.category_id || selectedCategory || '1', { productId: activeProduct.id });
          }}
        />
      )}

      {/* Authentication Modal with Strong Password Protector */}
      <AuthModal />

      {/* Footer */}
      <Footer
        setCurrentView={handleSetCurrentView}
        navigateTo={navigateTo}
        setSelectedCategory={handleSelectCategory}
        categories={categories}
        storeSettings={storeSettings}
      />

    </div>
  );
}
