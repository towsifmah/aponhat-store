import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Package, CheckCircle2, Sparkles } from 'lucide-react';

export default function PickupVanAnimation({ orderCode, onComplete }) {
  const [stage, setStage] = useState('entering'); // entering -> loading -> departing -> done

  useEffect(() => {
    // Timeline of the smooth slow pickup van animation
    const t1 = setTimeout(() => {
      setStage('loading');
    }, 1400);

    const t2 = setTimeout(() => {
      setStage('departing');
    }, 2800);

    const t3 = setTimeout(() => {
      // Confetti burst on completion
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00873E', '#10B981', '#F59E0B', '#3B82F6']
      });
      setStage('done');
      if (onComplete) onComplete();
    }, 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-500 p-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-apon-600/30 bg-gradient-to-b from-white to-apon-50 p-8 shadow-2xl dark:from-dark-card dark:to-dark-bg text-center">
        
        {/* Glow behind modal */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-apon-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header Status */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-apon-100 px-4 py-1.5 text-sm font-semibold text-apon-800 dark:bg-apon-900/60 dark:text-apon-300">
            <Sparkles className="w-4 h-4 animate-spin text-apon-600 dark:text-apon-400" />
            <span>অর্ডার আইডি: #{orderCode}</span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {stage === 'entering' && 'আপনহাট পিকআপ ভ্যান আসছে...'}
            {stage === 'loading' && 'অর্ডারটি পিকআপ ভ্যানে লোড হচ্ছে!'}
            {stage === 'departing' && 'পিকআপ ভ্যান আপনার ঠিকানায় রওনা হচ্ছে...'}
            {stage === 'done' && 'অর্ডার সফলভাবে বুকিং সম্পন্ন!'}
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-dark-muted">
            {stage === 'departing' || stage === 'done' 
              ? 'খুব শীঘ্রই ডেলিভারি প্রতিনিধির সাথে যোগাযোগ করা হবে।' 
              : 'দয়া করে অপেক্ষা করুন, আপনার অর্ডারটি প্যাক করা হচ্ছে...'}
          </p>
        </div>

        {/* The Animation Canvas Container */}
        <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-100 to-emerald-100 dark:from-dark-bg dark:to-dark-card border border-apon-200 dark:border-dark-border flex items-end justify-center pb-6">
          
          {/* Clouds / Sun in background */}
          <div className="absolute top-4 left-6 w-12 h-6 bg-white/70 rounded-full blur-[1px] dark:bg-white/10" />
          <div className="absolute top-8 right-12 w-16 h-8 bg-white/70 rounded-full blur-[1px] dark:bg-white/10" />

          {/* Road with road markings */}
          <div className="absolute bottom-0 w-full h-9 bg-gray-700 dark:bg-gray-900 border-t-2 border-gray-600 flex items-center justify-around">
            <div className="w-12 h-1 bg-yellow-400 opacity-80" />
            <div className="w-12 h-1 bg-yellow-400 opacity-80" />
            <div className="w-12 h-1 bg-yellow-400 opacity-80" />
            <div className="w-12 h-1 bg-yellow-400 opacity-80" />
            <div className="w-12 h-1 bg-yellow-400 opacity-80" />
          </div>

          {/* Exhaust Smoke (when departing) */}
          {stage === 'departing' && (
            <div className="absolute bottom-8 left-16 z-10 flex gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-400/70 animate-exhaust" />
              <div className="w-6 h-6 rounded-full bg-gray-300/50 animate-exhaust [animation-delay:0.2s]" />
              <div className="w-8 h-8 rounded-full bg-gray-200/40 animate-exhaust [animation-delay:0.4s]" />
            </div>
          )}

          {/* The AponHat Pickup Van */}
          <div
            className={`relative z-20 transition-transform ${
              stage === 'entering' ? 'animate-van-in' : stage === 'departing' ? 'animate-van-out' : ''
            }`}
          >
            {/* The Dropping Package */}
            <div
              className={`absolute -top-12 left-10 z-30 transition-all ${
                stage === 'loading' || stage === 'departing' || stage === 'done'
                  ? 'animate-package-drop'
                  : 'opacity-0 scale-50'
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 text-white shadow-lg border-2 border-amber-300">
                <Package className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Van SVG Illustration */}
            <svg
              className="w-56 h-32 sm:w-64 sm:h-36 drop-shadow-xl"
              viewBox="0 0 320 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Van Body (Cargo Box) */}
              <rect x="30" y="35" width="170" height="90" rx="10" fill="#00873E" />
              <rect x="35" y="40" width="160" height="80" rx="6" fill="#047857" />

              {/* AponHat Branding Text on Van Side */}
              <rect x="45" y="55" width="140" height="40" rx="6" fill="#ffffff" />
              <text
                x="115"
                y="80"
                textAnchor="middle"
                fill="#00873E"
                fontWeight="800"
                fontSize="18"
                fontFamily="sans-serif"
              >
                আপনহাট
              </text>
              <text
                x="115"
                y="92"
                textAnchor="middle"
                fill="#10B981"
                fontWeight="700"
                fontSize="9"
                fontFamily="sans-serif"
              >
                পিকআপ ও হোম ডেলিভারি
              </text>

              {/* Van Cabin (Front) */}
              <path
                d="M200 65 L245 65 L275 95 L275 125 L200 125 Z"
                fill="#00873E"
              />
              {/* Cabin Window */}
              <path
                d="M205 70 L240 70 L265 95 L205 95 Z"
                fill="#BEE3F8"
                stroke="#064E3B"
                strokeWidth="2"
              />
              {/* Headlight */}
              <rect x="270" y="102" width="6" height="12" rx="2" fill="#FCD34D" />
              {/* Headlight beam */}
              <polygon points="276,102 320,80 320,135 276,114" fill="#FDE68A" opacity="0.4" />

              {/* Bumper */}
              <rect x="270" y="120" width="10" height="8" rx="2" fill="#374151" />
              <rect x="24" y="120" width="8" height="8" rx="2" fill="#374151" />

              {/* Wheels */}
              {/* Back Wheel */}
              <g className={stage === 'entering' || stage === 'departing' ? 'animate-wheel-spin origin-[70px_130px]' : ''}>
                <circle cx="70" cy="130" r="22" fill="#1F2937" />
                <circle cx="70" cy="130" r="14" fill="#9CA3AF" />
                <circle cx="70" cy="130" r="6" fill="#1F2937" />
                <line x1="70" y1="108" x2="70" y2="152" stroke="#374151" strokeWidth="3" />
                <line x1="48" y1="130" x2="92" y2="130" stroke="#374151" strokeWidth="3" />
              </g>

              {/* Front Wheel */}
              <g className={stage === 'entering' || stage === 'departing' ? 'animate-wheel-spin origin-[240px_130px]' : ''}>
                <circle cx="240" cy="130" r="22" fill="#1F2937" />
                <circle cx="240" cy="130" r="14" fill="#9CA3AF" />
                <circle cx="240" cy="130" r="6" fill="#1F2937" />
                <line x1="240" y1="108" x2="240" y2="152" stroke="#374151" strokeWidth="3" />
                <line x1="218" y1="130" x2="262" y2="130" stroke="#374151" strokeWidth="3" />
              </g>
            </svg>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className={`flex items-center gap-2 text-xs font-semibold ${stage !== 'entering' ? 'text-apon-600 dark:text-apon-400' : 'text-gray-400'}`}>
            <CheckCircle2 className="w-4 h-4" />
            <span>অর্ডার গৃহীত</span>
          </div>
          <div className="w-8 h-0.5 bg-gray-200 dark:bg-dark-border" />
          <div className={`flex items-center gap-2 text-xs font-semibold ${stage === 'loading' || stage === 'departing' || stage === 'done' ? 'text-apon-600 dark:text-apon-400' : 'text-gray-400'}`}>
            <Package className="w-4 h-4" />
            <span>পিকআপ লোডিং</span>
          </div>
          <div className="w-8 h-0.5 bg-gray-200 dark:bg-dark-border" />
          <div className={`flex items-center gap-2 text-xs font-semibold ${stage === 'departing' || stage === 'done' ? 'text-apon-600 dark:text-apon-400' : 'text-gray-400'}`}>
            <Sparkles className="w-4 h-4" />
            <span>ডেলিভারিতে যাত্রা</span>
          </div>
        </div>

      </div>
    </div>
  );
}
