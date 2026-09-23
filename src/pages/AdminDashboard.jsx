import React, { useState, useEffect } from 'react';
import { 
  RefreshCw, ExternalLink, Package, DollarSign, ShoppingCart, 
  CheckCircle, AlertCircle, Copy, Check, Filter, Search,
  TrendingUp, Volume2, VolumeX, Settings, Edit3, Save, Sparkles, Tag
} from 'lucide-react';

export default function AdminDashboard() {
  // Tabs: 'orders' or 'pricing'
  const [activeTab, setActiveTab] = useState('orders');

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);
  
  const [copiedId, setCopiedId] = useState('');
  const [copiedAddress, setCopiedAddress] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Audio chime for new orders
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Price Manager States
  const [productSearch, setProductSearch] = useState('');
  const [productCatFilter, setProductCatFilter] = useState('all');
  const [editingPrices, setEditingPrices] = useState({}); // { [prodId]: { price, stock } }
  const [savingProductId, setSavingProductId] = useState(null);
  const [bulkMarkupInput, setBulkMarkupInput] = useState('30');
  const [bulkSaving, setBulkSaving] = useState(false);
  const [priceSuccessMsg, setPriceSuccessMsg] = useState('');

  // Settings
  const [settings, setSettings] = useState({
    bkash_number: '01617971644',
    nagad_number: '01309993470',
    default_markup_percent: '30',
    last_sync: 'আজ'
  });
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  const fetchOrders = async (isInitial = false) => {
    try {
      if (isInitial) setLoading(true);
      const res = await fetch('/api/orders.php');
      const data = await res.json();
      if (data.status === 'success') {
        setOrders(prev => {
          if (!isInitial && data.data.length > prev.length && soundEnabled) {
            playOrderChime();
          }
          return data.data;
        });
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      if (isInitial) setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const [prodRes, catRes] = await Promise.all([
        fetch('/api/products.php?limit=200'),
        fetch('/api/categories.php')
      ]);
      const prodData = await prodRes.json();
      const catData = await catRes.json();

      if (prodData.status === 'success') {
        setProducts(prodData.data);
        // Initialize editing prices map
        const initialPrices = {};
        prodData.data.forEach(p => {
          initialPrices[p.id] = {
            retail_price: p.retail_price,
            stock: p.stock
          };
        });
        setEditingPrices(initialPrices);
      }
      if (catData.status === 'success') {
        setCategories(catData.data);
      }
    } catch (err) {
      console.error('Error fetching products for price manager:', err);
    }
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings.php');
      const data = await res.json();
      if (data.status === 'success') {
        setSettings(data.data);
        if (data.data.default_markup_percent) {
          setBulkMarkupInput(data.data.default_markup_percent);
        }
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    }
  };

  useEffect(() => {
    fetchOrders(true);
    fetchProducts();
    fetchSettings();

    // Real-time polling every 4 seconds for live incoming orders
    const interval = setInterval(() => {
      fetchOrders(false);
    }, 4000);

    return () => clearInterval(interval);
  }, [soundEnabled]);

  const playOrderChime = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.log('Audio not allowed yet');
    }
  };

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch('/api/orders.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: orderId, status: newStatus })
      });
      if (res.ok) {
        setOrders(prev =>
          prev.map(o => (o.id === orderId ? { ...o, status: newStatus } : o))
        );
      }
    } catch (err) {
      alert('স্ট্যাটাস আপডেট করতে সমস্যা হয়েছে');
    }
  };

  const handleSyncProducts = async () => {
    setSyncing(true);
    setSyncStatus(null);
    try {
      const res = await fetch('/api/sync.php');
      const data = await res.json();
      setSyncStatus(data);
      fetchProducts();
      fetchSettings();
    } catch (err) {
      setSyncStatus({ status: 'error', message: 'সিঙ্ক করার সময় সমস্যা হয়েছে।' });
    } finally {
      setSyncing(false);
    }
  };

  const handleSaveProductPrice = async (productId) => {
    const item = editingPrices[productId];
    if (!item) return;

    setSavingProductId(productId);
    setPriceSuccessMsg('');

    try {
      const res = await fetch('/api/products.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: productId,
          retail_price: item.retail_price,
          stock: item.stock
        })
      });
      const data = await res.json();
      if (data.status === 'success') {
        setProducts(prev =>
          prev.map(p => (p.id === productId ? { ...p, retail_price: item.retail_price, stock: item.stock } : p))
        );
        setPriceSuccessMsg(`প্রোডাক্ট #${productId} এর বিক্রয় মূল্য সফলভাবে ৳${item.retail_price} এ আপডেট করা হয়েছে!`);
        setTimeout(() => setPriceSuccessMsg(''), 4000);
      } else {
        alert(data.message || 'মূল্য পরিবর্তন ব্যর্থ হয়েছে');
      }
    } catch (err) {
      alert('সার্ভারে সমস্যা হয়েছে।');
    } finally {
      setSavingProductId(null);
    }
  };

  const handleApplyBulkMarkup = async () => {
    const percent = parseFloat(bulkMarkupInput);
    if (isNaN(percent) || percent < 0) {
      alert('সঠিক শতকরা প্রফিট মার্জিন লিখুন।');
      return;
    }

    setBulkSaving(true);
    try {
      const res = await fetch('/api/products.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bulk_markup_percent: percent })
      });
      const data = await res.json();
      if (data.status === 'success') {
        alert(data.message);
        fetchProducts();
      }
    } catch (err) {
      alert('বাল্ক আপডেট ব্যর্থ হয়েছে');
    } finally {
      setBulkSaving(false);
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      const res = await fetch('/api/settings.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setShowSettingsModal(false);
        alert('সেটিংস সফলভাবে সংরক্ষিত হয়েছে!');
      }
    } catch (err) {
      alert('সেটিংস সংরক্ষণ ব্যর্থ হয়েছে');
    } finally {
      setSavingSettings(false);
    }
  };

  const copyText = (text, type, id) => {
    navigator.clipboard.writeText(text);
    if (type === 'id') {
      setCopiedId(id);
      setTimeout(() => setCopiedId(''), 2000);
    } else {
      setCopiedAddress(id);
      setTimeout(() => setCopiedAddress(''), 2000);
    }
  };

  // Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total_amount || 0), 0);
  const totalProfit = orders.reduce((sum, o) => sum + Number(o.profit || 0), 0);
  const pendingOrders = orders.filter(o => o.status === 'pending');

  // Filtered orders
  const filteredOrders = orders.filter(o => {
    const matchesStatus = filterStatus === 'all' || o.status === filterStatus;
    const matchesSearch = 
      o.order_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.phone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  // Filtered products for Price Manager
  const filteredProducts = products.filter(p => {
    const matchesCat = productCatFilter === 'all' || String(p.category_id) === String(productCatFilter);
    const matchesQuery = !productSearch || 
      p.title.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.id.includes(productSearch);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-dark-border">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              রিয়েল-টাইম অ্যাডমিন ড্যাশবোর্ড
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1">
            আপনহাট কন্ট্রোল প্যানেল
          </h1>
          <p className="text-xs text-gray-500 dark:text-dark-muted mt-1">
            সরাসরি গ্রিনিশ ট্রেড থেকে ড্রপশিপিং অর্ডার প্লেস করুন এবং পণ্যের বিক্রয় মূল্য নির্ধারণ করুন।
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              soundEnabled 
                ? 'bg-apon-50 dark:bg-dark-card border-apon-200 text-apon-700 dark:text-apon-300'
                : 'bg-gray-100 dark:bg-dark-bg border-gray-200 text-gray-400'
            }`}
            title={soundEnabled ? "অর্ডার সাউন্ড চালু আছে" : "অর্ডার সাউন্ড বন্ধ"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-apon-600" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">{soundEnabled ? 'সাউন্ড অন' : 'মিউট'}</span>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setShowSettingsModal(true)}
            className="px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-cardHover text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <Settings className="w-4 h-4 text-gray-500" />
            <span>বিকাশ/নগদ ও সেটিংস</span>
          </button>

          {/* Sync Products Button */}
          <button
            onClick={handleSyncProducts}
            disabled={syncing}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'গ্রিনিশ ট্রেড থেকে সিঙ্ক হচ্ছে...' : 'গ্রিনিশ ট্রেড ক্যাটালগ সিঙ্ক'}</span>
          </button>
        </div>
      </div>

      {/* Sync Status Banner */}
      {syncStatus && (
        <div className={`mt-4 p-4 rounded-2xl text-xs font-semibold flex items-center justify-between ${
          syncStatus.status === 'success'
            ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-800 dark:text-emerald-200'
            : 'bg-red-50 dark:bg-red-950/50 border border-red-200 text-red-800 dark:text-red-200'
        }`}>
          <div>
            <p className="font-bold">{syncStatus.message}</p>
            {syncStatus.synced_count !== undefined && (
              <p className="text-[11px] opacity-80">সিঙ্ক করা প্রোডাক্ট সংখ্যা: {syncStatus.synced_count} টি | সময়: {syncStatus.last_sync}</p>
            )}
          </div>
          <button onClick={() => setSyncStatus(null)} className="text-gray-500 hover:text-gray-800">✕</button>
        </div>
      )}

      {/* Navigation Tabs between Orders and Product Price Manager */}
      <div className="flex items-center gap-3 my-6 border-b border-gray-200 dark:border-dark-border pb-2">
        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-2 text-sm font-bold transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'orders'
              ? 'border-apon-600 text-apon-600 dark:text-apon-400'
              : 'border-transparent text-gray-500 dark:text-dark-muted hover:text-gray-800'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>অর্ডারসমূহ ও ফুলফিলমেন্ট ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('pricing')}
          className={`pb-2 text-sm font-bold transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'pricing'
              ? 'border-apon-600 text-apon-600 dark:text-apon-400'
              : 'border-transparent text-gray-500 dark:text-dark-muted hover:text-gray-800'
          }`}
        >
          <Tag className="w-4 h-4" />
          <span>মূল্য ও পণ্য ব্যবস্থাপনা ({products.length})</span>
        </button>
      </div>

      {/* TAB 1: ORDERS & FULFILLMENT */}
      {activeTab === 'orders' && (
        <div className="space-y-6">
          
          {/* Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs">
              <div className="flex items-center justify-between text-gray-500 dark:text-dark-muted mb-2">
                <span className="text-xs font-bold uppercase">মোট অর্ডার</span>
                <ShoppingCart className="w-5 h-5 text-apon-600 dark:text-apon-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white font-sans">
                {orders.length} <span className="text-xs font-normal text-gray-400">টি</span>
              </p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
                {pendingOrders.length} টি নতুন অর্ডার অপেক্ষারত
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs">
              <div className="flex items-center justify-between text-gray-500 dark:text-dark-muted mb-2">
                <span className="text-xs font-bold uppercase">মোট বিক্রি (Revenue)</span>
                <DollarSign className="w-5 h-5 text-emerald-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white font-sans">
                ৳{totalRevenue}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted mt-1">
                কাস্টমারদের মোট পেমেন্ট
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs">
              <div className="flex items-center justify-between text-gray-500 dark:text-dark-muted mb-2">
                <span className="text-xs font-bold uppercase">আনুমানিক লাভ (Profit)</span>
                <TrendingUp className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-sans">
                ৳{Math.round(totalProfit)}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted mt-1">
                হোলসেল মূল্য বাদ দিয়ে নিট প্রফিট
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-gray-200/80 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs">
              <div className="flex items-center justify-between text-gray-500 dark:text-dark-muted mb-2">
                <span className="text-xs font-bold uppercase">গ্রিনিশ ট্রেডে অর্ডার বাকি</span>
                <AlertCircle className="w-5 h-5 text-amber-500 animate-pulse" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-sans">
                {pendingOrders.length} <span className="text-xs font-normal text-gray-400">টি</span>
              </p>
              <p className="text-[11px] text-gray-500 dark:text-dark-muted mt-1">
                মূল সাইটে প্লেস করার জন্য প্রস্তুত
              </p>
            </div>
          </div>

          {/* Orders Table Box */}
          <div className="rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs overflow-hidden">
            
            {/* Filter Toolbar */}
            <div className="p-5 border-b border-gray-200 dark:border-dark-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-700 dark:text-dark-text">অর্ডার ফিল্টার:</span>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none"
                >
                  <option value="all">সকল অর্ডার ({orders.length})</option>
                  <option value="pending">পেন্ডিং ({orders.filter(o => o.status === 'pending').length})</option>
                  <option value="supplier_ordered">গ্রিনিশ ট্রেডে অর্ডারকৃত ({orders.filter(o => o.status === 'supplier_ordered').length})</option>
                  <option value="shipped">ডেলিভারিতে আছে ({orders.filter(o => o.status === 'shipped').length})</option>
                  <option value="delivered">ডেলিভারি সম্পন্ন ({orders.filter(o => o.status === 'delivered').length})</option>
                  <option value="cancelled">বাতিল</option>
                </select>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="অর্ডার কোড বা ফোন নম্বর..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-xs"
                />
              </div>
            </div>

            {/* Orders Feed */}
            {loading ? (
              <div className="p-12 text-center text-xs text-gray-500">
                <div className="w-8 h-8 border-3 border-apon-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <span>অর্ডার তালিকা লোড হচ্ছে...</span>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="p-12 text-center text-gray-500 dark:text-dark-muted">
                <Package className="w-12 h-12 text-gray-300 dark:text-dark-border mx-auto mb-2" />
                <p className="text-sm font-semibold">কোনো অর্ডার পাওয়া যায়নি</p>
                <p className="text-xs mt-1">নতুন অর্ডার আসা মাত্রই রিয়েল-টাইমে এখানে দেখা যাবে।</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-dark-border">
                {filteredOrders.map((order) => {
                  const customerFullAddress = `${order.customer_name}, ফোন: ${order.phone}, ঠিকানা: ${order.address}, ${order.city}`;

                  return (
                    <div key={order.id} className="p-6 transition-colors hover:bg-gray-50/70 dark:hover:bg-dark-bg/40">
                      
                      {/* Top bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-dark-border/60">
                        <div className="flex items-center gap-3">
                          <span className="text-base font-black font-mono text-apon-700 dark:text-apon-300">
                            #{order.order_code}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            order.status === 'pending'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300'
                              : order.status === 'supplier_ordered'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300'
                              : order.status === 'delivered'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {order.status === 'pending' && '⏳ পেন্ডিং'}
                            {order.status === 'supplier_ordered' && '📦 গ্রিনিশ ট্রেডে অর্ডারকৃত'}
                            {order.status === 'shipped' && '🚚 অন-রোড ডেলিভারি'}
                            {order.status === 'delivered' && '✅ ডেলিভারি সম্পন্ন'}
                            {order.status === 'cancelled' && '❌ বাতিল'}
                          </span>
                          <span className="text-xs text-gray-400">
                            {order.created_at}
                          </span>
                        </div>

                        {/* Status Changer */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-gray-500 dark:text-dark-muted">স্ট্যাটাস:</span>
                          <select
                            value={order.status}
                            onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                            className="text-xs font-bold px-3 py-1 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-800 dark:text-dark-text"
                          >
                            <option value="pending">পেন্ডিং (Pending)</option>
                            <option value="supplier_ordered">গ্রিনিশ ট্রেডে অর্ডার করেছি (Ordered on Supplier)</option>
                            <option value="shipped">ডেলিভারিতে পাঠানো হয়েছে (Shipped)</option>
                            <option value="delivered">ডেলিভারি সম্পন্ন (Delivered)</option>
                            <option value="cancelled">বাতিল (Cancelled)</option>
                          </select>
                        </div>
                      </div>

                      {/* Customer Info & Order Items */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                        
                        {/* Customer Details Box */}
                        <div className="lg:col-span-4 p-4 rounded-2xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-200/80 dark:border-dark-border text-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-gray-700 dark:text-dark-text">গ্রাহকের তথ্য</span>
                            <button
                              onClick={() => copyText(customerFullAddress, 'addr', order.id)}
                              className="inline-flex items-center gap-1 text-[10px] font-bold text-apon-600 dark:text-apon-400 hover:underline"
                              title="গ্রিনিশ ট্রেডে অর্ডার দেওয়ার সুবিধার্থে সম্পূর্ণ ঠিকানা কপি করুন"
                            >
                              {copiedAddress === order.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedAddress === order.id ? 'কপি হয়েছে!' : 'ঠিকানা কপি করুন'}</span>
                            </button>
                          </div>

                          <p><strong className="text-gray-900 dark:text-white">নাম:</strong> {order.customer_name}</p>
                          <p><strong className="text-gray-900 dark:text-white">ফোন:</strong> <a href={`tel:${order.phone}`} className="text-apon-600 font-bold hover:underline">{order.phone}</a></p>
                          <p><strong className="text-gray-900 dark:text-white">ঠিকানা:</strong> {order.address}, {order.city}</p>
                          
                          {order.notes && (
                            <p className="text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg">
                              <strong>নোট:</strong> {order.notes}
                            </p>
                          )}

                          <div className="pt-2 border-t border-gray-200 dark:border-dark-border text-[11px]">
                            <p>
                              <strong className="text-gray-900 dark:text-white">পেমেন্ট: </strong> 
                              <span className="uppercase font-bold text-apon-700 dark:text-apon-300">{order.payment_method}</span>
                            </p>
                            {order.trx_id && (
                              <p className="font-mono text-xs font-bold text-pink-600 dark:text-pink-400">
                                TrxID: {order.trx_id} (নম্বর: {order.sender_phone})
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Ordered Items with Supplier IDs & Direct Link */}
                        <div className="lg:col-span-8 space-y-3">
                          <div className="flex items-center justify-between text-xs font-bold text-gray-700 dark:text-dark-text">
                            <span>অর্ডারকৃত পণ্যসমূহ (গ্রিনিশ ট্রেড প্রোডাক্ট আইডি সহ):</span>
                            <span className="text-[11px] text-emerald-600 dark:text-emerald-400">
                              লাভ (Profit): ৳{Math.round(order.profit)}
                            </span>
                          </div>

                          {order.items && order.items.map((item) => {
                            const greenishUrl = item.supplier_url || `https://greenishtradeltd.com/products/${item.product_id}`;

                            return (
                              <div 
                                key={item.id}
                                className="p-3 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                              >
                                <div className="flex items-center gap-3">
                                  {item.product_image && (
                                    <img
                                      src={item.product_image}
                                      alt={item.product_title}
                                      className="w-14 h-14 rounded-xl object-cover bg-gray-100 dark:bg-dark-bg shrink-0"
                                    />
                                  )}
                                  <div>
                                    <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
                                      {item.product_title}
                                    </h4>
                                    
                                    {/* Greenish Trade Product ID */}
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                                        Product ID: {item.product_id}
                                        <button 
                                          onClick={() => copyText(item.product_id, 'id', item.id)} 
                                          className="hover:text-emerald-900"
                                          title="আইডি কপি করুন"
                                        >
                                          {copiedId === item.id ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                                        </button>
                                      </span>
                                      <span className="text-[11px] text-gray-500 dark:text-dark-muted font-medium">
                                        {item.variant} | Qty: <strong>{item.quantity}</strong>
                                      </span>
                                    </div>

                                    <p className="text-[11px] text-gray-500 dark:text-dark-muted mt-1">
                                      বিক্রয় মূল্য: <strong>৳{item.unit_price}</strong> | পাইকারি খরচ: <strong>৳{item.supplier_price}</strong>
                                    </p>
                                  </div>
                                </div>

                                {/* Direct Supplier Order Button */}
                                <a
                                  href={greenishUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
                                >
                                  <span>মূল সাইটে অর্ডার করুন</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            );
                          })}

                          {/* Totals */}
                          <div className="flex justify-between items-center text-xs pt-2 font-semibold text-gray-700 dark:text-dark-muted">
                            <span>সাবটোটাল: ৳{order.subtotal} + ডেলিভারি: ৳{order.delivery_fee}</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white font-sans">
                              মোট সংগৃহীত: <span className="text-apon-600 dark:text-apon-400">৳{order.total_amount}</span>
                            </span>
                          </div>

                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      )}

      {/* TAB 2: LIVE PRODUCT PRICE & STOCK MANAGER */}
      {activeTab === 'pricing' && (
        <div className="space-y-6">
          
          {/* Success Notification */}
          {priceSuccessMsg && (
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{priceSuccessMsg}</span>
              </div>
              <button onClick={() => setPriceSuccessMsg('')} className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
          )}

          {/* Bulk Markup Bar */}
          <div className="p-5 rounded-3xl border border-apon-200 dark:border-dark-border bg-gradient-to-r from-apon-50 to-emerald-50 dark:from-dark-card dark:to-dark-bg flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-apon-600" />
                বাল্ক প্রফিট মার্জিন টুল (Bulk Price Updater)
              </h3>
              <p className="text-xs text-gray-500 dark:text-dark-muted mt-0.5">
                গ্রিনিশ ট্রেডের পাইকারি খরচের উপর নির্দিষ্ট হারে সকল পণ্যের বিক্রয় মূল্য একসাথে নির্ধারণ করুন।
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="number"
                  value={bulkMarkupInput}
                  onChange={(e) => setBulkMarkupInput(e.target.value)}
                  className="w-24 px-3 py-2 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-sm font-bold text-gray-900 dark:text-white text-center focus:outline-none focus:ring-2 focus:ring-apon-500"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">%</span>
              </div>

              <button
                onClick={handleApplyBulkMarkup}
                disabled={bulkSaving}
                className="px-4 py-2 rounded-xl bg-apon-600 hover:bg-apon-700 text-white text-xs font-bold shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                {bulkSaving ? 'আপডেট হচ্ছে...' : 'সকল পণ্যে কার্যকর করুন'}
              </button>
            </div>
          </div>

          {/* Product Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600 dark:text-dark-muted">ক্যাটাগরি:</span>
              <select
                value={productCatFilter}
                onChange={(e) => setProductCatFilter(e.target.value)}
                className="text-xs font-bold px-3 py-2 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-800 dark:text-white"
              >
                <option value="all">সকল ক্যাটাগরি ({products.length})</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                placeholder="প্রোডাক্ট নাম বা আইডি খুঁজুন..."
                className="w-full pl-8 pr-3 py-2 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-xs text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Products Price Table */}
          <div className="rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 dark:bg-dark-bg text-gray-500 dark:text-dark-muted font-bold uppercase tracking-wider border-b border-gray-100 dark:border-dark-border">
                  <tr>
                    <th className="p-4">পণ্য</th>
                    <th className="p-4">গ্রিনিশ ট্রেড আইডি</th>
                    <th className="p-4">পাইকারি খরচ (Reseller)</th>
                    <th className="p-4">বিক্রয় মূল্য (Retail Price ৳)</th>
                    <th className="p-4">প্রতিটিতে লাভ</th>
                    <th className="p-4">স্টক</th>
                    <th className="p-4 text-center">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
                  {filteredProducts.map(product => {
                    const editState = editingPrices[product.id] || {
                      retail_price: product.retail_price,
                      stock: product.stock
                    };
                    const currentProfit = Math.round(editState.retail_price - product.reseller_price);
                    const isSavingThis = savingProductId === product.id;

                    return (
                      <tr key={product.id} className="hover:bg-gray-50/70 dark:hover:bg-dark-bg/50 transition-colors">
                        
                        {/* Product info */}
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-12 h-12 rounded-xl object-cover bg-gray-100 dark:bg-dark-bg shrink-0"
                            />
                            <div className="max-w-xs">
                              <p className="font-bold text-gray-900 dark:text-white line-clamp-1">{product.title}</p>
                              <span className="text-[10px] text-gray-400">{product.category_name}</span>
                            </div>
                          </div>
                        </td>

                        {/* Supplier ID */}
                        <td className="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {product.id}
                        </td>

                        {/* Wholesale Price */}
                        <td className="p-4 font-bold text-gray-600 dark:text-dark-muted font-sans">
                          ৳{product.reseller_price}
                        </td>

                        {/* Editable Retail Price */}
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-apon-600">৳</span>
                            <input
                              type="number"
                              value={editState.retail_price}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value) || 0;
                                setEditingPrices({
                                  ...editingPrices,
                                  [product.id]: { ...editState, retail_price: val }
                                });
                              }}
                              className="w-24 px-2 py-1 rounded-lg border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg font-bold text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-apon-500"
                            />
                          </div>
                        </td>

                        {/* Profit preview */}
                        <td className="p-4 font-bold">
                          <span className={`px-2 py-0.5 rounded-md font-sans text-xs ${
                            currentProfit > 0 
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            +৳{currentProfit}
                          </span>
                        </td>

                        {/* Editable Stock */}
                        <td className="p-4">
                          <input
                            type="number"
                            value={editState.stock}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 0;
                              setEditingPrices({
                                ...editingPrices,
                                [product.id]: { ...editState, stock: val }
                              });
                            }}
                            className="w-16 px-2 py-1 rounded-lg border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg font-bold text-xs text-gray-900 dark:text-white text-center focus:ring-2 focus:ring-apon-500"
                          />
                        </td>

                        {/* Save Action */}
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleSaveProductPrice(product.id)}
                            disabled={isSavingThis}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-apon-600 hover:bg-apon-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95"
                          >
                            <Save className="w-3 h-3" />
                            <span>{isSavingThis ? 'সেভ হচ্ছে...' : 'সেভ'}</span>
                          </button>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-6 sm:p-8 shadow-2xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              স্টোর ও পেমেন্ট সেটিংস
            </h3>
            <p className="text-xs text-gray-500 dark:text-dark-muted mb-5">
              বিকাশ, নগদ নম্বর ও ডিফল্ট প্রফিট মার্জিন পরিবর্তন করুন।
            </p>

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs font-bold">
              <div>
                <label className="block text-gray-700 dark:text-dark-text mb-1">
                  বিকাশ নম্বর (Personal/Send Money)
                </label>
                <input
                  type="text"
                  value={settings.bkash_number || ''}
                  onChange={(e) => setSettings({ ...settings, bkash_number: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-dark-text mb-1">
                  নগদ নম্বর (Personal/Send Money)
                </label>
                <input
                  type="text"
                  value={settings.nagad_number || ''}
                  onChange={(e) => setSettings({ ...settings, nagad_number: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-dark-text mb-1">
                  ডিফল্ট প্রফিট মার্জিন (%)
                </label>
                <input
                  type="number"
                  value={settings.default_markup_percent || '30'}
                  onChange={(e) => setSettings({ ...settings, default_markup_percent: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white"
                  required
                />
                <span className="text-[10px] text-gray-400 font-normal">
                  (গ্রিনিশ ট্রেডের পাইকারি মূল্যের উপর এই হারে বিক্রয় মূল্য নির্ধারিত হবে)
                </span>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-dark-border">
                <button
                  type="button"
                  onClick={() => setShowSettingsModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border text-gray-700 dark:text-dark-text hover:bg-gray-100"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  disabled={savingSettings}
                  className="flex-1 py-2.5 rounded-xl bg-apon-600 hover:bg-apon-700 text-white font-bold shadow-md"
                >
                  {savingSettings ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
