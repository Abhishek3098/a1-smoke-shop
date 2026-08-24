'use client';

import React from 'react';
import { Flame, ShieldAlert, Phone, MapPin, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO } from '@/data/storeHours';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200/60 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-6">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
            <Flame className="w-5 h-5 fill-amber-500" />
          </div>
          <span>A1 SMOKE SHOP</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
          <a href="#products" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Products</a>
          <a href="#reviews" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">FAQs</a>
          <a href="#location" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Location & Hours</a>
          <a href={STORE_INFO.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Leave a Review</a>
        </div>

        {/* Legal Warning Notice */}
        <div className="glass max-w-2xl p-4 rounded-2xl border border-amber-500/20 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-3 text-left">
          <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-600 dark:text-amber-400 font-bold block mb-0.5">CALIFORNIA 21+ WARNING:</strong>
            Our products contain nicotine, tobacco, and other adult substances. You must be 21 years of age or older to enter or purchase any tobacco, e-cigarette, or smoking paraphernalia in compliance with California state law.
          </div>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 dark:text-slate-500 text-xs">
          &copy; {currentYear} A1 Smoke Shop Fontana ({STORE_INFO.address}, Fontana, CA 92335). All rights reserved.
        </p>
      </div>
    </footer>
  );
}