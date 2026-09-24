import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, ArrowLeft, CreditCard, Banknote, HelpCircle, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PickupVanAnimation from '../components/PickupVanAnimation';

export default function CheckoutPage({ onBackToShopping, onOrderCompleted, storeSettings = {} }) {
  const { cartItems, subtotal, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('ঢাকা');
  const [notes, setNotes] = useState('');
  
  // Payment methods: bkash, nagad, card, cod
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [trxId, setTrxId] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  
  const [copiedNumber, setCopiedNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Van animation state
  const [showVanAnimation, setShowVanAnimation] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState(null);

  const insideFee = storeSettings.inside_dhaka_delivery ? Number(storeSettings.inside_dhaka_delivery) : 60;
  const outsideFee = storeSettings.outside_dhaka_delivery ? Number(storeSettings.outside_dhaka_delivery) : 120;
  const deliveryFee = city === 'ঢাকা' ? insideFee : outsideFee;
  const totalAmount = subtotal + deliveryFee;
  const bkashNum = storeSettings.bkash_number || '01617971644';
  const nagadNum = storeSettings.nagad_number || '01309993470';


  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(''), 2000);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      setErrorMessage('অনুগ্রহ করে আপনার নাম, মোবাইল নম্বর এবং সম্পূর্ণ ঠিকানা প্রদান করুন।');
      return;
    }

    if ((paymentMethod === 'bkash' || paymentMethod === 'nagad') && !trxId.trim()) {
      setErrorMessage(`অনুগ্রহ করে ${paymentMethod === 'bkash' ? 'বিকাশ' : 'নগদ'} ট্রানজেকশন আইডি (TrxID) প্রদান করুন।`);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: customerName,
          phone: phone,
          address: address,
          city: city,
          notes: notes,
          payment_method: paymentMethod,
          trx_id: trxId,
          sender_phone: senderPhone || phone,
          delivery_fee: deliveryFee,
          items: cartItems
        })
      });

      const resData = await response.json();

      if (response.ok && resData.status === 'success') {
        setCreatedOrderData(resData.data);
        clearCart();
        // Trigger pickup van animation!
        setShowVanAnimation(true);
      } else {
        setErrorMessage(resData.message || 'অর্ডার প্রক্রিয়াধীন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
    } catch (err) {
      setErrorMessage('সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি। দয়া করে ইন্টারনেট কানেকশন চেক করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Pickup Van Delivery Animation Modal */}
      {showVanAnimation && createdOrderData && (
        <PickupVanAnimation
          orderCode={createdOrderData.order_code}
          onComplete={() => onOrderCompleted(createdOrderData)}
        />
      )}

      {/* Back Button */}
      <button
        onClick={onBackToShopping}
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-dark-muted hover:text-apon-600 dark:hover:text-apon-400 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>শপিং চালিয়ে যান</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Customer Form & Payment Method */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Customer Shipping Address Form */}
          <div className="rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
              <Truck className="w-5 h-5 text-apon-600 dark:text-apon-400" />
              ডেলিভারি ঠিকানা ও গ্রাহকের তথ্য
            </h2>
            <p className="text-xs text-gray-500 dark:text-dark-muted mb-6">
              পণ্য ডেলিভারি ও যোগাযোগের জন্য সঠিক তথ্য দিন।
            </p>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 text-xs font-semibold text-red-700 dark:text-red-300">
                ⚠️ {errorMessage}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text mb-1.5">
                  আপনার সম্পূর্ণ নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="যেমন: মোঃ সাকিব রহমান"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-apon-500 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text mb-1.5">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-apon-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text mb-1.5">
                    জেলা / এরিয়া <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-apon-500 transition-all"
                  >
                    <option value="ঢাকা">ঢাকা সিটি (ডেলিভারি চার্জ: ৳{insideFee})</option>
                    <option value="ঢাকার বাইরে">ঢাকার বাইরে / অন্যান্য জেলা (ডেলিভারি চার্জ: ৳{outsideFee})</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text mb-1.5">
                  সম্পূর্ণ ঠিকানা (বাসা নং, রোড নং, এলাকা) <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="যেমন: বাড়ি ১২, রোড ৪, ব্লক সি, বনশ্রী, ঢাকা..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-apon-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-dark-text mb-1.5">
                  অর্ডার সংক্রান্ত বিশেষ নির্দেশনা (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="ডেলিভারির সময় বা বিশেষ কোনো নোট থাকলে লিখুন..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-xs text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-apon-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-apon-600 dark:text-apon-400" />
              পেমেন্ট মেথড বেছে নিন
            </h2>
            <p className="text-xs text-gray-500 dark:text-dark-muted mb-5">
              নিচের যেকোনো একটি বিশ্বস্ত মাধ্যমে পেমেন্ট সম্পন্ন করুন।
            </p>

            {/* Payment Method Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              
              {/* bKash Tab */}
              <button
                type="button"
                onClick={() => setPaymentMethod('bkash')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 font-bold text-xs transition-all ${
                  paymentMethod === 'bkash'
                    ? 'border-[#D12053] bg-[#D12053]/10 text-[#D12053] shadow-md scale-102'
                    : 'border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-700 dark:text-dark-muted hover:border-gray-300'
                }`}
              >
                <span className="text-sm font-black tracking-wide">bKash</span>
                <span className="text-[10px] mt-0.5">বিকাশ</span>
              </button>

              {/* Nagad Tab */}
              <button
                type="button"
                onClick={() => setPaymentMethod('nagad')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 font-bold text-xs transition-all ${
                  paymentMethod === 'nagad'
                    ? 'border-[#F7941D] bg-[#F7941D]/10 text-[#F7941D] shadow-md scale-102'
                    : 'border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-700 dark:text-dark-muted hover:border-gray-300'
                }`}
              >
                <span className="text-sm font-black tracking-wide">Nagad</span>
                <span className="text-[10px] mt-0.5">নগদ</span>
              </button>

              {/* Card Tab */}
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 font-bold text-xs transition-all ${
                  paymentMethod === 'card'
                    ? 'border-apon-600 bg-apon-50 dark:bg-apon-950/50 text-apon-700 dark:text-apon-300 shadow-md scale-102'
                    : 'border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-700 dark:text-dark-muted hover:border-gray-300'
                }`}
              >
                <CreditCard className="w-5 h-5 mb-0.5" />
                <span className="text-[10px]">কার্ড</span>
              </button>

              {/* COD Tab */}
              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 font-bold text-xs transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 shadow-md scale-102'
                    : 'border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-gray-700 dark:text-dark-muted hover:border-gray-300'
                }`}
              >
                <Banknote className="w-5 h-5 mb-0.5" />
                <span className="text-[10px]">ক্যাশ অন ডেলিভারি</span>
              </button>
            </div>

            {/* bKash Details & Inputs */}
            {paymentMethod === 'bkash' && (
              <div className="p-5 rounded-2xl bg-[#D12053]/5 border border-[#D12053]/20 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-dark-bg p-4 rounded-xl border border-[#D12053]/20">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">বিকাশ পার্সোনাল নম্বর:</span>
                    <p className="text-xl font-black text-[#D12053] font-mono tracking-wider">{bkashNum}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(bkashNum)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#D12053] text-white text-xs font-bold hover:bg-[#b01944] transition-all active:scale-95"
                  >
                    {copiedNumber === bkashNum ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedNumber === bkashNum ? 'কপি হয়েছে!' : 'নম্বর কপি করুন'}</span>
                  </button>
                </div>

                <div className="text-xs text-gray-600 dark:text-dark-muted space-y-1 bg-white/70 dark:bg-dark-bg/60 p-3.5 rounded-xl">
                  <p className="font-bold text-gray-800 dark:text-white">পেমেন্ট করার নিয়মাবলী:</p>
                  <p>১. আপনার বিকাশ অ্যাপ বা *247# থেকে <strong>Send Money</strong> করুন।</p>
                  <p>২. প্রাপক নম্বরে <strong>{bkashNum}</strong> লিখুন।</p>
                  <p>৩. টাকার পরিমাণ <strong>৳{totalAmount}</strong> সেন্ড করুন।</p>
                  <p>৪. ট্রানজেকশন সফল হলে নিচের বক্সে TrxID ও বিকাশ নম্বর দিন।</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 dark:text-dark-text mb-1">
                      বিকাশ নম্বর (যে নম্বর থেকে পাঠিয়েছেন)
                    </label>
                    <input
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-sm focus:outline-none focus:ring-2 focus:ring-[#D12053]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 dark:text-dark-text mb-1">
                      ট্রানজেকশন আইডি (TrxID) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      placeholder="যেমন: 9J3K9D8L..."
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-sm focus:outline-none focus:ring-2 focus:ring-[#D12053]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Nagad Details & Inputs */}
            {paymentMethod === 'nagad' && (
              <div className="p-5 rounded-2xl bg-[#F7941D]/5 border border-[#F7941D]/20 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-dark-bg p-4 rounded-xl border border-[#F7941D]/20">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">নগদ পার্সোনাল নম্বর:</span>
                    <p className="text-xl font-black text-[#F7941D] font-mono tracking-wider">{nagadNum}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(nagadNum)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#F7941D] text-white text-xs font-bold hover:bg-[#d87c11] transition-all active:scale-95"
                  >
                    {copiedNumber === nagadNum ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedNumber === nagadNum ? 'কপি হয়েছে!' : 'নম্বর কপি করুন'}</span>
                  </button>
                </div>

                <div className="text-xs text-gray-600 dark:text-dark-muted space-y-1 bg-white/70 dark:bg-dark-bg/60 p-3.5 rounded-xl">
                  <p className="font-bold text-gray-800 dark:text-white">পেমেন্ট করার নিয়মাবলী:</p>
                  <p>১. আপনার নগদ অ্যাপ বা *167# থেকে <strong>Send Money</strong> করুন।</p>
                  <p>২. প্রাপক নম্বরে <strong>{nagadNum}</strong> দিন।</p>
                  <p>৩. টাকার পরিমাণ <strong>৳{totalAmount}</strong> সেন্ড করুন।</p>
                  <p>৪. ট্রানজেকশন সফল হলে নিচের বক্সে TrxID ও নম্বর দিন।</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 dark:text-dark-text mb-1">
                      নগদ নম্বর (যে নম্বর থেকে পাঠিয়েছেন)
                    </label>
                    <input
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 dark:text-dark-text mb-1">
                      ট্রানজেকশন আইডি (TrxID) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      placeholder="যেমন: 7G2L9N4Q..."
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Card Simulation */}
            {paymentMethod === 'card' && (
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border space-y-3">
                <p className="text-xs font-semibold text-gray-700 dark:text-dark-text">
                  ভিসা, মাস্টারকার্ড কিংবা যেকোনো ব্যাংকের ডেবিট/ক্রেডিট কার্ড দিয়ে পেমেন্ট করুন:
                </p>
                <input
                  type="text"
                  placeholder="কার্ড নম্বর (৪২২২ ২২২২ ২২২২ ২২২২)"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="মেয়াদ (MM/YY)"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-sm"
                  />
                  <input
                    type="password"
                    placeholder="CVC / CVV"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-sm"
                  />
                </div>
              </div>
            )}

            {/* Cash on Delivery Details */}
            {paymentMethod === 'cod' && (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
                <p className="font-bold text-sm">ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা দিন):</p>
                <p>• পণ্য হাতে পেয়ে দেখে ডেলিভারিম্যানকে মোট <strong>৳{totalAmount}</strong> টাকা পরিশোধ করবেন।</p>
                <p>• অগ্রিম কোনো টাকা দিতে হবে না। সম্পূর্ণ নিশ্চিন্তে কেনাকাটা করুন।</p>
              </div>
            )}

          </div>

        </div>

        {/* Right Column: Order Summary & Action */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 rounded-3xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-dark-border">
              অর্ডার সারাংশ ({cartItems.length} টি পণ্য)
            </h3>

            {/* Items List */}
            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover bg-gray-50 dark:bg-dark-bg shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white line-clamp-1">{item.title}</p>
                      <p className="text-[11px] text-gray-500 dark:text-dark-muted">
                        ভ্যারিয়েন্ট: {item.variant} | পরিমাণ: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white font-sans shrink-0">
                    ৳{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-dark-border text-xs">
              <div className="flex justify-between text-gray-600 dark:text-dark-muted">
                <span>পণ্যের মোট মূল্য</span>
                <span className="font-bold text-gray-900 dark:text-white font-sans">৳{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-dark-muted">
                <span>ডেলিভারি চার্জ ({city})</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-sans">
                  ৳{deliveryFee}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-100 dark:border-dark-border">
                <span>সর্বমোট প্রদেয়</span>
                <span className="text-xl text-apon-600 dark:text-apon-400 font-sans">৳{totalAmount}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={isSubmitting || cartItems.length === 0}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 disabled:opacity-50 text-white font-bold text-base shadow-xl shadow-apon-600/30 transition-all hover:scale-102 active:scale-95 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>অর্ডার প্রসেস হচ্ছে...</span>
                </div>
              ) : (
                <span>অর্ডার নিশ্চিত করুন (৳{totalAmount})</span>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-dark-muted text-center pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>১০০% নিরাপদ ডেলিভারি ও দ্রুত সমাধান নিশ্চয়তা</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
