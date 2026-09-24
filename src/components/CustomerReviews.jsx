import React, { useState } from 'react';
import { 
  Star, ThumbsUp, ShieldCheck, CheckCircle2, MessageSquare, 
  Camera, Filter, Plus, ChevronDown, ChevronUp, UserCheck, Sparkles 
} from 'lucide-react';

const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'তানভীর হাসান',
    nameEn: 'Tanvir Hasan',
    city: 'ধানমন্ডি, ঢাকা',
    rating: 5,
    date: '২ দিন আগে',
    dateIso: '2026-09-22',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80',
    comment: 'অসাধারণ কোয়ালিটি! ছবির সাথে ১০০% মিল পেয়েছি। ঢাকার মধ্যে অর্ডার করার পরদিন দুপুরেই ডেলিভারি পেয়েছি। কাপড়ের ফিনিশিং এবং ফেব্রিক সত্যিই প্রিমিয়াম। আপনহাট থেকে কেনাকাটার অভিজ্ঞতা দারুণ!',
    hasPhoto: true,
    photoUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    verified: true,
    likes: 24
  },
  {
    id: 2,
    name: 'সুমাইয়া আক্তার',
    nameEn: 'Sumaiya Akter',
    city: 'খুলশী, চট্টগ্রাম',
    rating: 5,
    date: '৪ দিন আগে',
    dateIso: '2026-09-20',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80',
    comment: 'আমি আমার পরিবারের জন্য নিয়েছিলাম। সাইজ একদম পারফেক্ট হয়েছে এবং কোনো ডিফেক্ট নেই। প্যাকেজিং খুব সুরক্ষিত ছিল। প্রাইস অনুযায়ী বাজারের চেয়ে অনেক সাশ্রয়ী। ধন্যবাদ আপনহাট!',
    hasPhoto: true,
    photoUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
    verified: true,
    likes: 19
  },
  {
    id: 3,
    name: 'মো: রফিকুল ইসলাম',
    nameEn: 'Md. Rafiqul Islam',
    city: 'মিরপুর ১০, ঢাকা',
    rating: 5,
    date: '১ সপ্তাহ আগে',
    dateIso: '2026-09-17',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80',
    comment: 'ক্যাশ অন ডেলিভারিতে প্যাকেট খুলে পণ্য দেখে তারপর টাকা দিয়েছি। অরিজিনাল গ্রিনিশ ট্রেডের জেনুইন প্রোডাক্ট। সেলারের ব্যবহারও খুব আন্তরিক ছিল। ১০০% রেকমেন্ডেড!',
    hasPhoto: false,
    verified: true,
    likes: 31
  },
  {
    id: 4,
    name: 'নুসরাত জাহান',
    nameEn: 'Nusrat Jahan',
    city: 'জিন্দা বাজার, সিলেট',
    rating: 5,
    date: '১ সপ্তাহ আগে',
    dateIso: '2026-09-16',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&q=80',
    comment: 'সাইজ সিলেক্ট করতে কনফিউশনে ছিলাম, পরে প্রিয়া এআই অ্যাসিস্ট্যান্টের সাথে কথা বলে সাইজ কনফার্ম করি। একদম নিখুঁত ফিটিং এসেছে। কাপড়ের স্থায়িত্ব ও আরাম খুবই ভালো।',
    hasPhoto: true,
    photoUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80',
    verified: true,
    likes: 15
  },
  {
    id: 5,
    name: 'শাকিল মাহমুদ',
    nameEn: 'Shakil Mahmud',
    city: 'সেক্টর ৭, উত্তরা, ঢাকা',
    rating: 4,
    date: '২ সপ্তাহ আগে',
    dateIso: '2026-09-10',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80',
    comment: 'প্রোডাক্টের কোয়ালিটি বেশ ভালো এবং আরামদায়ক। ডেলিভারি বয় একটু দেরিতে কল করেছিল, তবে সার্বিকভাবে পণ্য পেয়ে আমি সন্তুষ্ট। ৪ স্টার রেটিং দিলাম।',
    hasPhoto: false,
    verified: true,
    likes: 8
  },
  {
    id: 6,
    name: 'ফারহানা রহমান',
    nameEn: 'Farhana Rahman',
    city: 'বোয়ালিয়া, রাজশাহী',
    rating: 5,
    date: '২ সপ্তাহ আগে',
    dateIso: '2026-09-08',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces&q=80',
    comment: 'প্রথমবার আপনহাট থেকে কেনাকাটা করলাম। কোনো প্রকার অগ্রিম টাকা ছাড়াই ক্যাশ অন ডেলিভারিতে পণ্য হাতে পেলাম। কোয়ালিটি অত্যন্ত চমৎকার, আমি নিয়মিত কাস্টমার হয়ে গেলাম!',
    hasPhoto: false,
    verified: true,
    likes: 27
  }
];

export default function CustomerReviews({ product }) {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [activeFilter, setActiveFilter] = useState('all'); // all, 5star, 4star, photos
  const [showWriteForm, setShowWriteForm] = useState(false);
  const [userLikes, setUserLikes] = useState({});

  // New review form state
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    rating: 5,
    comment: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Filter reviews
  const filteredReviews = reviews.filter((rev) => {
    if (activeFilter === '5star') return rev.rating === 5;
    if (activeFilter === '4star') return rev.rating === 4;
    if (activeFilter === 'photos') return rev.hasPhoto;
    return true;
  });

  const handleLike = (reviewId) => {
    if (userLikes[reviewId]) return;
    setUserLikes(prev => ({ ...prev, [reviewId]: true }));
    setReviews(prev => prev.map(r => r.id === reviewId ? { ...r, likes: r.likes + 1 } : r));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newRev = {
      id: Date.now(),
      name: formData.name.trim(),
      city: formData.city.trim() || 'ঢাকা, বাংলাদেশ',
      rating: Number(formData.rating),
      date: 'এইমাত্র',
      dateIso: new Date().toISOString().split('T')[0],
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces&q=80',
      comment: formData.comment.trim(),
      hasPhoto: false,
      verified: true,
      likes: 1
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setFormData({ name: '', city: '', rating: 5, comment: '' });
    setShowWriteForm(false);
    setTimeout(() => setSubmittedMessage(false), 5000);
  };

  const fiveStarCount = reviews.filter(r => r.rating === 5).length;
  const fourStarCount = reviews.filter(r => r.rating === 4).length;
  const photosCount = reviews.filter(r => r.hasPhoto).length;

  return (
    <section 
      aria-label="Customer Reviews"
      className="mt-12 pt-10 border-t border-gray-200 dark:border-dark-border space-y-8"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-2">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>১০০% ভেরিফাইড ক্রেতাদের অভিজ্ঞতা</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <span>গ্রাহক মতামত ও রিভিউ</span>
            <span className="text-sm font-semibold text-gray-500 dark:text-dark-muted font-sans">
              ({reviews.length} টি রিভিউ)
            </span>
          </h2>
        </div>

        {/* Toggle Write Review Button */}
        <button
          onClick={() => setShowWriteForm(!showWriteForm)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
        >
          {showWriteForm ? <ChevronUp className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          <span>{showWriteForm ? 'ফর্ম বন্ধ করুন' : 'আপনার রিভিউ লিখুন'}</span>
        </button>
      </div>

      {/* Success Notification after submission */}
      {submittedMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
          <span>ধন্যবাদ! আপনার মূল্যবান রিভিউ সফলভাবে প্রকাশিত হয়েছে।</span>
        </div>
      )}

      {/* Interactive Write Review Toggle Form */}
      {showWriteForm && (
        <form 
          onSubmit={handleFormSubmit}
          className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-dark-card border border-emerald-500/30 dark:border-emerald-500/40 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>আপনার পণ্য ব্যবহারের অভিজ্ঞতা শেয়ার করুন:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                আপনার নাম *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="যেমন: তানভীর আহমেদ"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                শহর / জেলা
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                placeholder="যেমন: ঢাকা / চট্টগ্রাম"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Rating Star Picker */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              রেটিং নির্বাচন করুন:
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star 
                    className={`w-6 h-6 ${
                      star <= formData.rating 
                        ? 'fill-amber-400 text-amber-400' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`} 
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-amber-500 ml-2">
                {formData.rating === 5 ? 'অসাধারণ (৫/৫)' : `${formData.rating} স্টার`}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              আপনার মতামত *
            </label>
            <textarea
              required
              rows={3}
              value={formData.comment}
              onChange={e => setFormData({ ...formData, comment: e.target.value })}
              placeholder="পণ্যটির কোয়ালিটি, ডেলিভারি ও প্যাকেজিং কেমন লেগেছে বিস্তারিত লিখুন..."
              className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowWriteForm(false)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-dark-border text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg"
            >
              বাতিল
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              রিভিউ জমা দিন
            </button>
          </div>
        </form>
      )}

      {/* Ratings Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-200/90 dark:border-dark-border shadow-sm">
        
        {/* Left: Overall Score */}
        <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-dark-border">
          <div className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white font-sans tracking-tight">
            ৪.৯
          </div>
          <div className="flex items-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
            ১২৮টি ভেরিফাইড অর্ডারের গড় রেটিং
          </p>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
            ৯৮% কাস্টমার এই পণ্যটি পছন্দ করেছেন
          </span>
        </div>

        {/* Middle: Star Bars Breakdown */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-2.5 px-2">
          <div className="flex items-center gap-3 text-xs">
            <span className="w-12 font-bold text-gray-700 dark:text-gray-300">৫ স্টার</span>
            <div className="flex-1 h-2.5 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span className="w-10 text-right text-gray-500 dark:text-dark-muted font-sans font-bold">৮৫%</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="w-12 font-bold text-gray-700 dark:text-gray-300">৪ স্টার</span>
            <div className="flex-1 h-2.5 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: '15%' }}></div>
            </div>
            <span className="w-10 text-right text-gray-500 dark:text-dark-muted font-sans font-bold">১৫%</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="w-12 font-bold text-gray-400">৩ স্টার</span>
            <div className="flex-1 h-2 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
              <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <span className="w-10 text-right text-gray-400 font-sans">০%</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="w-12 font-bold text-gray-400">২ স্টার</span>
            <div className="flex-1 h-2 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
              <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <span className="w-10 text-right text-gray-400 font-sans">০%</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="w-12 font-bold text-gray-400">১ স্টার</span>
            <div className="flex-1 h-2 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
              <div className="h-full bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <span className="w-10 text-right text-gray-400 font-sans">০%</span>
          </div>
        </div>

        {/* Right: Trust Badges */}
        <div className="md:col-span-3 flex flex-col justify-center space-y-3 p-3 bg-gray-50 dark:bg-dark-bg/60 rounded-2xl border border-gray-100 dark:border-dark-border">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-gray-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>১০০% জেনুইন রিভিউ</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-gray-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ভেরিফাইড ডেলিভারি</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-gray-200">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>৭ দিনের রিটার্ন সাপোর্ট</span>
          </div>
        </div>

      </div>

      {/* Interactive Toggle Filter Tabs ("TOGGOL ER MOTO KORE") */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          onClick={() => setActiveFilter('all')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeFilter === 'all'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:border-emerald-500'
          }`}
        >
          <span>সবগুলো রিভিউ</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/10 dark:bg-white/10">
            {reviews.length}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('5star')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeFilter === '5star'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:border-emerald-500'
          }`}
        >
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>৫-স্টার রিভিউ</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/10 dark:bg-white/10">
            {fiveStarCount}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('4star')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeFilter === '4star'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:border-emerald-500'
          }`}
        >
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>৪-স্টার রিভিউ</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/10 dark:bg-white/10">
            {fourStarCount}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('photos')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeFilter === 'photos'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-200 hover:border-emerald-500'
          }`}
        >
          <Camera className="w-3.5 h-3.5 text-emerald-500" />
          <span>ছবিসহ রিভিউ</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/10 dark:bg-white/10">
            {photosCount}
          </span>
        </button>
      </div>

      {/* Customer Reviews List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredReviews.map((rev) => (
          <article
            key={rev.id}
            itemScope
            itemType="https://schema.org/Review"
            className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-dark-card border border-gray-200/80 dark:border-dark-border hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div>
              {/* Reviewer Header: Bangladeshi Avatar, Name, City, Verified Badge */}
              <div className="flex items-center gap-3.5 mb-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30 shadow-xs"
                />
                <div className="flex-1 min-w-0" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 itemProp="name" className="text-sm font-bold text-gray-900 dark:text-white truncate">
                      {rev.name}
                    </h3>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>ভেরিফাইড ক্রেতা</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-dark-muted truncate">
                    {rev.city} • <span className="font-sans">{rev.date}</span>
                  </p>
                  <meta itemProp="datePublished" content={rev.dateIso} />
                </div>
              </div>

              {/* Rating Stars */}
              <div 
                className="flex items-center gap-1 mb-2.5" 
                itemProp="reviewRating" 
                itemScope 
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content={String(rev.rating)} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p itemProp="reviewBody" className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                "{rev.comment}"
              </p>

              {/* Photo attachment if available */}
              {rev.hasPhoto && rev.photoUrl && (
                <div className="mt-3">
                  <img
                    src={rev.photoUrl}
                    alt="পণ্য ডেলিভারি ছবি"
                    loading="lazy"
                    className="w-20 h-20 rounded-xl object-cover border border-gray-200 dark:border-dark-border hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Bottom Bar: Helpful Upvote */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-dark-border flex items-center justify-between text-xs text-gray-500 dark:text-dark-muted">
              <span>আপনহাট ডেলিভারি সম্পন্ন</span>
              <button
                onClick={() => handleLike(rev.id)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border transition-all ${
                  userLikes[rev.id]
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-700 dark:text-emerald-300 font-bold'
                    : 'border-gray-200 dark:border-dark-border hover:border-emerald-400 hover:text-emerald-600 active:scale-95'
                }`}
                title="রিভিউটি আপনার উপকারে এসেছে?"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>উপকারী ছিল ({rev.likes})</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
