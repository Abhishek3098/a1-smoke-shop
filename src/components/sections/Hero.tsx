'use client';

import React from 'react';
import { Star, MapPin, Phone, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO } from '@/data/storeHours';
import LiveStatusBadge from '@/components/ui/LiveStatusBadge';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none transition-all duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{STORE_INFO.googleRating} Rating ({STORE_INFO.reviewCount}+ Google Reviews)</span>
          </div>

          <LiveStatusBadge />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight max-w-4xl">
          Fontana’s Premier <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-500 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-400">
            Smoke & Glass Shop
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mb-10 font-normal leading-relaxed">
          Unbeatable prices on premium glass, disposable vapes, and cigarettes with 5-star customer service. Always treated like family.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 text-base sm:text-lg"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
          <a
            href={'tel:' + STORE_INFO.phoneRaw}
            className="px-7 py-4 glass hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-900 dark:text-white font-bold rounded-2xl transition-all border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2.5 text-base sm:text-lg"
          >
            <Phone className="w-5 h-5 text-emerald-500" />
            Call Store
          </a>
          <a
            href={STORE_INFO.smsUrl}
            className="px-7 py-4 glass hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-900 dark:text-white font-bold rounded-2xl transition-all border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2.5 text-base sm:text-lg"
          >
            <MessageSquareQuote className="w-5 h-5 text-blue-500" />
            Text Jay / Check Stock
          </a>
        </div>
      </div>
    </section>
  );
}
