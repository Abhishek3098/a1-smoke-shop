'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function AgeGateModal() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = sessionStorage.getItem('ageVerified');
    const hasVerified = verified === 'true';
    setIsVerified(hasVerified);
    if (!hasVerified) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
    document.body.style.overflow = '';
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (isVerified === true || isVerified === null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-modal-title"
      aria-describedby="age-modal-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fade-in"
    >
      <div className="glass p-8 rounded-2xl max-w-md w-full text-center border-t-4 border-t-amber-500 shadow-2xl dark:shadow-slate-950/80">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center mb-5">
          <AlertTriangle className="w-9 h-9" />
        </div>
        <h2 id="age-modal-title" className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Age Verification
        </h2>
        <p id="age-modal-desc" className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
          You must be <strong>21 years of age or older</strong> to enter this website and view tobacco, vape, and smoking products in accordance with California state law.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleVerify}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Yes, I am 21+
          </button>
          <button
            onClick={handleReject}
            className="px-6 py-3.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-800 dark:text-slate-200 font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            No, I am not
          </button>
        </div>
      </div>
    </div>
  );
}
