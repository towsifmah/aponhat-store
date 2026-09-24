import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Sparkles, ChevronDown, Check, 
  ExternalLink, ShoppingBag, Truck, CreditCard, ShieldCheck, 
  PhoneCall, RefreshCw, UserCheck
} from 'lucide-react';

export default function PriyaChatbot({ onQuickView, storeSettings = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef(null);
  const pollIntervalRef = useRef(null);

  // Initialize session ID
  useEffect(() => {
    let sid = localStorage.getItem('aponhat_chat_session_id');
    if (!sid) {
      sid = 'session_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
      localStorage.setItem('aponhat_chat_session_id', sid);
    }
    setSessionId(sid);
  }, []);

  // Initial welcome message fallback
  const initialGreeting = {
    id: 'welcome-1',
    sender: 'priya',
    sender_name: 'প্রিয়া (আপনার শপিং সহকারী)',
    text: 'আসসালামু আলাইকুম! আমি প্রিয়া, আপনহাটে আপনাকে স্বাগতম। 😊\n\nযেকোনো পণ্যের সাইজ, ফেব্রিক, কালার, স্টক, আজকের অফার বা ডেলিভারি ও পেমেন্ট নিয়ে আপনি আমাকে প্রশ্ন করতে পারেন। আমি সাথে সাথে তথ্য দিয়ে সাহায্য করব!',
    suggested_products: [],
    timestamp: new Date().toISOString()
  };

  // Fetch or sync session messages
  const fetchSession = async (sid) => {
    if (!sid) return;
    try {
      const res = await fetch(`/api/chat?session_id=${encodeURIComponent(sid)}`);
      const data = await res.json();
      if (data.status === 'success' && data.session && Array.isArray(data.session.messages)) {
        if (data.session.messages.length > 0) {
          setMessages(data.session.messages);
        } else {
          setMessages([initialGreeting]);
        }
      }
    } catch {
      // If error or offline, fallback to greeting
      if (messages.length === 0) {
        setMessages([initialGreeting]);
      }
    }
  };

  useEffect(() => {
    if (sessionId) {
      fetchSession(sessionId);
    }
  }, [sessionId]);

  // Polling for live updates when modal is open
  useEffect(() => {
    if (isOpen && sessionId) {
      pollIntervalRef.current = setInterval(() => {
        fetchSession(sessionId);
      }, 4000);
    } else {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    }
    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, [isOpen, sessionId]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Quick Action Chips
  const quickActions = [
    { label: '👔 শার্ট কালেকশন', text: 'আপনাদের সেরা শার্ট কালেকশনগুলো দেখান' },
    { label: '⌚ স্মার্ট ওয়াচ', text: 'স্মার্ট ওয়াচের দাম এবং ফিচার জানান' },
    { label: '🎧 ইয়ারবাডস', text: 'ভালো ব্লুটুথ ইয়ারবাডস দেখতে চাই' },
    { label: '🚚 ডেলিভারি চার্জ কত?', text: 'ডেলিভারি চার্জ এবং কত দিনে পাব?' },
    { label: '💳 পেমেন্ট মাধ্যম কী?', text: 'পেমেন্ট কীভাবে করব? বিকাশ নাকি ক্যাশ অন ডেলিভারি?' },
    { label: '🛡️ রিটার্ন পলিসি', text: 'পণ্য পছন্দ না হলে কি রিটার্ন করা যাবে?' }
  ];

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || !sessionId) return;

    setInputText('');
    setIsTyping(true);

    // Optimistically add user's message
    const tempUserMsg = {
      id: 'msg_' + Date.now(),
      sender: 'customer',
      sender_name: 'আপনি',
      text: text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, tempUserMsg]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          sender: 'customer',
          text: text
        })
      });

      const data = await res.json();
      if (data.status === 'success' && data.session) {
        setMessages(data.session.messages);
      }
    } catch {
      // offline fallback response from Priya
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: 'priya_offline_' + Date.now(),
            sender: 'priya',
            sender_name: 'প্রিয়া (আপনার শপিং সহকারী)',
            text: 'ধন্যবাদ আপনার বার্তার জন্য! আমাদের হেল্পলাইন ০১৬১৭৯৭১৬৪৪ এ সার্বক্ষণিক যোগাযোগ করতে পারেন অথবা যেকোনো পণ্য সরাসরি কার্টে যোগ করে অর্ডার সম্পন্ন করুন।',
            timestamp: new Date().toISOString()
          }
        ]);
      }, 700);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button - Positioned on the LEFT SIDE */}
      <div className="fixed bottom-20 md:bottom-6 left-4 sm:left-6 z-40">
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              setUnreadCount(0);
            }}
            className="group relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/20"
            title="প্রিয়ার সাথে কথা বলুন"
          >
            {/* Live Green Pulsing Indicator */}
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
            </span>

            {/* Avatar Icon */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shadow-inner shrink-0 bg-emerald-800">
              <img 
                src="/priya-model.jpg" 
                alt="প্রিয়া" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              />
            </div>

            {/* Label */}
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold leading-none tracking-wide text-white">প্রিয়া</p>
              <p className="text-[10px] text-emerald-100 font-medium leading-tight mt-0.5">শপিং সহকারী (অনলাইন)</p>
            </div>

            {/* Mobile simplified label */}
            <span className="sm:hidden text-xs font-bold">প্রিয়া</span>

            {/* Unread badge if any */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                {unreadCount}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Chat Window Popup - Positioned on LEFT SIDE */}
      {isOpen && (
        <div 
          className="fixed bottom-4 left-4 sm:left-6 z-50 w-[92vw] sm:w-[410px] max-h-[85vh] sm:max-h-[620px] h-[580px] bg-white dark:bg-dark-card rounded-3xl shadow-2xl border border-gray-200 dark:border-dark-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
          style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white px-5 py-4 flex items-center justify-between shadow-sm relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 shadow-md shrink-0 bg-emerald-800">
                  <img 
                    src="/priya-model.jpg" 
                    alt="প্রিয়া" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  />
                </div>
                {/* Live Indicator */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-emerald-800 rounded-full shadow-xs"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm tracking-wide text-white">প্রিয়া</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                    storeSettings.priya_status === 'offline'
                      ? 'bg-red-500/40 text-red-100 border-red-400/30'
                      : storeSettings.priya_status === 'busy'
                      ? 'bg-amber-500/40 text-amber-100 border-amber-400/30'
                      : 'bg-emerald-500/40 text-emerald-100 border-emerald-400/30'
                  }`}>
                    {storeSettings.priya_status === 'offline' ? 'অফলাইন' : storeSettings.priya_status === 'busy' ? 'ব্যস্ত' : 'অনলাইন'}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100/90 leading-tight">
                  আপনার সার্বক্ষণিক শপিং সহকারী
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => fetchSession(sessionId)}
                className="p-1.5 text-emerald-100 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                title="রিফ্রেশ করুন"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-emerald-100 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                title="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-emerald-50/80 dark:bg-emerald-950/40 px-4 py-2 border-b border-emerald-100 dark:border-emerald-900/40 flex items-center gap-2 text-[11px] text-emerald-800 dark:text-emerald-300">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="truncate">প্রিয়া যেকোনো পণ্যের মূল্য, সাইজ ও ডেলিভারি তথ্য দিতে প্রস্তুত</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gray-50/60 dark:bg-dark-bg/50 no-scrollbar">
            {messages.map((msg, idx) => {
              const isUser = msg.sender === 'customer';
              const isAdmin = msg.sender === 'admin';
              const isPriya = msg.sender === 'priya';

              return (
                <div
                  key={msg.id || idx}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  {/* Sender Tag */}
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    {isPriya && (
                      <div className="flex items-center gap-1.5">
                        <img 
                          src="/priya-model.jpg" 
                          alt="প্রিয়া" 
                          className="w-4 h-4 rounded-full object-cover border border-emerald-500/40"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">প্রিয়া</span>
                      </div>
                    )}
                    {isAdmin && <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1 font-bold">🛡️ আপনহাট সাপোর্ট ম্যানেজার</span>}
                    {isUser && <span>আপনি</span>}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-xs whitespace-pre-line ${
                      isUser
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-xs'
                        : isAdmin
                        ? 'bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-100 rounded-bl-xs'
                        : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-800 dark:text-gray-100 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Suggested Products Cards if provided */}
                  {msg.suggested_products && msg.suggested_products.length > 0 && (
                    <div className="mt-2.5 w-full space-y-2">
                      <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 px-1">
                        <ShoppingBag className="w-3 h-3" />
                        <span>প্রস্তাবিত পণ্যসমূহ:</span>
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {msg.suggested_products.map((prod) => (
                          <div
                            key={prod.id}
                            className="flex items-center gap-3 p-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl shadow-xs hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                          >
                            <img
                              src={prod.image || '/logo.png'}
                              alt={prod.title}
                              className="w-12 h-12 rounded-xl object-cover border border-gray-100 dark:border-dark-border"
                              onError={(e) => { e.target.src = '/logo.png'; }}
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                                {prod.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                                  ৳{prod.retail_price || prod.price}
                                </span>
                                {prod.regular_price && (
                                  <span className="text-[10px] text-gray-400 line-through">
                                    ৳{prod.regular_price}
                                  </span>
                                )}
                              </div>
                            </div>
                            {onQuickView && (
                              <button
                                onClick={() => onQuickView(prod)}
                                className="px-2.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300 text-[11px] font-bold rounded-xl border border-emerald-200 dark:border-emerald-800 transition-all flex items-center gap-1"
                              >
                                <span>দেখুন</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Timestamp */}
                  <span className="text-[9px] text-gray-400 px-1 mt-0.5">
                    {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                  </span>
                </div>
              );
            })}

            {/* Priya is typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 py-1 px-2">
                <span className="text-sm">👩‍💼</span>
                <span className="font-semibold text-[11px]">প্রিয়া লিখছেন...</span>
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips Bar */}
          <div className="px-3 py-2 bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickActions.map((qa, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(qa.text)}
                className="whitespace-nowrap px-3 py-1 bg-gray-100 dark:bg-dark-bg hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-300 text-gray-700 dark:text-gray-300 text-[11px] font-medium rounded-full border border-gray-200 dark:border-dark-border transition-all flex-shrink-0"
              >
                {qa.label}
              </button>
            ))}
          </div>

          {/* Input Box Footer */}
          <div className="p-3 bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="প্রিয়াকে যেকোনো প্রশ্ন লিখুন..."
                className="flex-1 py-2.5 px-4 text-xs sm:text-sm bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="p-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-40 text-white rounded-2xl shadow-md transition-all active:scale-95"
                title="বার্তা পাঠান"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-gray-400">
              <span>২৪/৭ লাইভ গ্রাহক সহায়তা</span>
              <span>হেল্পলাইন: ০১৬১৭৯৭১৬৪৪</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
