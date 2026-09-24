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
import { useAuth } from './context/AuthContext';
import { ShieldAlert, KeyRound } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home, checkout, order_success, admin
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [orderSuccessData, setOrderSuccessData] = useState(null);

  const { isAdmin, openLogin } = useAuth();

  useEffect(() => {
    // Fetch categories and products on initial load
    const fetchData = async () => {
      try {
        setLoading(true);
        const [catRes, prodRes] = await Promise.all([
          fetch('/api/categories.php'),
          fetch('/api/products.php')
        ]);

        const catData = await catRes.json();
        const prodData = await prodRes.json();

        if (catData.status === 'success') {
          setCategories(catData.data);
        }
        if (prodData.status === 'success') {
          setProducts(prodData.data);
        }
      } catch (err) {
        console.error('Error loading store data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleOrderCompleted = (orderData) => {
    setOrderSuccessData(orderData);
    setCurrentView('order_success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToShopping = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToCheckout = () => {
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        products={products}
        onQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* Main View Switcher */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentView === 'home' && (
          <HomePage
            products={products}
            loading={loading}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage
            onBackToShopping={handleBackToShopping}
            onOrderCompleted={handleOrderCompleted}
          />
        )}

        {currentView === 'order_success' && (
          <OrderSuccessPage
            orderData={orderSuccessData}
            onBackToHome={handleBackToShopping}
          />
        )}

        {currentView === 'admin' && (
          isAdmin ? (
            <AdminDashboard />
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
        onQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* Priya Live Shopping Assistant (Left Side) */}
      <PriyaChatbot onQuickView={(prod) => setQuickViewProduct(prod)} />

      {/* Animated Add-to-Cart Toast Notification */}
      <CartToast onCheckout={handleGoToCheckout} />

      {/* Mobile App Bottom Navigation Bar */}
      <MobileBottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Product Quick View & Variant Modal with Shopify Zoom */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onBuyNow={handleGoToCheckout}
        />
      )}

      {/* Authentication Modal with Strong Password Protector */}
      <AuthModal />

      {/* Footer */}
      <Footer
        setCurrentView={setCurrentView}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

    </div>
  );
}
