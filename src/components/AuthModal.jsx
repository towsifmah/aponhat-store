import React, { useState } from 'react';
import { X, Lock, Phone, User, Mail, Eye, EyeOff, CheckCircle2, ShieldCheck, KeyRound, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, authModalMode, setAuthModalMode, login, register } = useAuth();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  // Password Strength Checker
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[\W_]/.test(password);

  const criteriaMetCount = [hasMinLength, hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(Boolean).length;
  
  let strengthLabel = 'অপেক্ষারত';
  let strengthColor = 'bg-gray-200 dark:bg-dark-border';
  let strengthTextColor = 'text-gray-400';

  if (password.length > 0) {
    if (criteriaMetCount <= 2) {
      strengthLabel = 'দুর্বল (Weak)';
      strengthColor = 'bg-red-500';
      strengthTextColor = 'text-red-500';
    } else if (criteriaMetCount === 3 || criteriaMetCount === 4) {
      strengthLabel = 'মাঝারি (Medium)';
      strengthColor = 'bg-amber-500';
      strengthTextColor = 'text-amber-500';
    } else if (criteriaMetCount === 5) {
      strengthLabel = 'অত্যন্ত শক্তিশালী (Strong)';
      strengthColor = 'bg-emerald-500';
      strengthTextColor = 'text-emerald-500';
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (authModalMode === 'login') {
        const res = await login(identifier, password);
        if (!res.success) {
          setError(res.message);
        }
      } else {
        if (criteriaMetCount < 5) {
          setError('দয়া করে সবগুলো শর্ত পূরণ করে একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন।');
          setLoading(false);
          return;
        }
        const res = await register(name, identifier, email, password);
        if (!res.success) {
          setError(res.message);
        }
      }
    } catch (err) {
      setError('সার্ভারের সাথে যোগাযোগ করতে সমস্যা হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  const handleFillAdmin = () => {
    setIdentifier('01617971644');
    setPassword('Admin@AponHat2026!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-2xl transition-all p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-apon-50 dark:bg-apon-950/70 border border-apon-200 dark:border-apon-800 flex items-center justify-center text-apon-600 dark:text-apon-400 mb-3 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {authModalMode === 'login' ? 'আপনহাটে লগইন করুন' : 'নতুন একাউন্ট তৈরি করুন'}
          </h2>
          <p className="text-xs text-gray-500 dark:text-dark-muted mt-1">
            {authModalMode === 'login'
              ? 'আপনার মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে প্রবেশ করুন।'
              : 'সুরক্ষিত শপিং এর জন্য স্ট্রং পাসওয়ার্ড সহ নিবন্ধন করুন।'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex rounded-xl bg-gray-100 dark:bg-dark-bg p-1 mb-6 text-xs font-bold">
          <button
            type="button"
            onClick={() => { setAuthModalMode('login'); setError(''); }}
            className={`flex-1 py-2 rounded-lg transition-all ${
              authModalMode === 'login'
                ? 'bg-white dark:bg-dark-card text-apon-600 dark:text-apon-400 shadow-sm'
                : 'text-gray-500 dark:text-dark-muted hover:text-gray-800'
            }`}
          >
            লগইন
          </button>
          <button
            type="button"
            onClick={() => { setAuthModalMode('register'); setError(''); }}
            className={`flex-1 py-2 rounded-lg transition-all ${
              authModalMode === 'register'
                ? 'bg-white dark:bg-dark-card text-apon-600 dark:text-apon-400 shadow-sm'
                : 'text-gray-500 dark:text-dark-muted hover:text-gray-800'
            }`}
          >
            নতুন একাউন্ট (রেজিস্ট্রেশন)
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-xs font-semibold text-red-600 dark:text-red-300">
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          
          {authModalMode === 'register' && (
            <div>
              <label className="block text-gray-700 dark:text-dark-text mb-1.5">আপনার নাম *</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="যেমন: তানভীর আহমেদ"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-apon-500"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-700 dark:text-dark-text mb-1.5">
              {authModalMode === 'login' ? 'মোবাইল নম্বর / ইমেইল *' : 'মোবাইল নম্বর *'}
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="01XXXXXXXXX"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-apon-500"
                required
              />
            </div>
          </div>

          {authModalMode === 'register' && (
            <div>
              <label className="block text-gray-700 dark:text-dark-text mb-1.5">ইমেইল (ঐচ্ছিক)</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-apon-500"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-gray-700 dark:text-dark-text">পাসওয়ার্ড *</label>
              {authModalMode === 'register' && (
                <span className={`text-[11px] font-bold ${strengthTextColor}`}>
                  {strengthLabel}
                </span>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 dark:border-dark-border bg-gray-50 dark:bg-dark-bg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-apon-500 font-sans"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Dynamic Strong Password Protector Meter */}
            {authModalMode === 'register' && (
              <div className="mt-3 space-y-2 bg-gray-50 dark:bg-dark-bg p-3 rounded-xl border border-gray-200/70 dark:border-dark-border">
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-dark-border h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-300 ${strengthColor}`}
                    style={{ width: `${(criteriaMetCount / 5) * 100}%` }}
                  />
                </div>

                {/* Password Rules Checklist */}
                <div className="grid grid-cols-1 gap-1 text-[11px] pt-1">
                  <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>কমপক্ষে ৮টি অক্ষর</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasUppercase ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>অন্তত ১টি বড় হাতের অক্ষর (A-Z)</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasLowercase ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>অন্তত ১টি ছোট হাতের অক্ষর (a-z)</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>অন্তত ১টি সংখ্যা (0-9)</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-gray-400'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>অন্তত ১টি বিশেষ চিহ্ন (@, #, $, ইত্যাদি)</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-apon-600 to-apon-700 hover:from-apon-700 hover:to-apon-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <span>{authModalMode === 'login' ? 'লগইন করুন' : 'নিবন্ধন সম্পন্ন করুন'}</span>
            )}
          </button>
        </form>

        {/* Store Owner Quick Fill Helper (Discreet) */}
        {authModalMode === 'login' && (
          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-dark-border text-center">
            <button
              type="button"
              onClick={handleFillAdmin}
              className="text-[11px] text-gray-400 hover:text-apon-600 dark:hover:text-apon-400 flex items-center justify-center gap-1 mx-auto transition-colors"
            >
              <KeyRound className="w-3 h-3" />
              <span>স্টোর ওনার (অ্যাডমিন) দ্রুত লগইন</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
