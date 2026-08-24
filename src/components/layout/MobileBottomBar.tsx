'use client';

import React from 'react';
import { Phone, Navigation, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO } from '@/data/storeHours';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass border-t border-slate-200 dark:border-slate-800 shadow-[0_-10px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-10px_20px_rgba(0,0,0,0.4)] backdrop-blur-xl bg-white/90 dark:bg-slate-900/90">
      <div className="flex h-16 divide-x divide-slate-200 dark:divide-slate-800">
        <a
          href={'tel:' + STORE_INFO.phoneRaw}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold active:bg-emerald-50 dark:active:bg-emerald-500/10"
        >
          <Phone className="w-4 h-4 text-emerald-500" />
          <span>Call</span>
        </a>

        <a
          href={STORE_INFO.smsUrl}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold active:bg-blue-50 dark:active:bg-blue-500/10"
        >
          <MessageSquareQuote className="w-4 h-4 text-blue-500" />
          <span>Text Stock</span>
        </a>

        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold active:bg-amber-50 dark:active:bg-amber-500/10"
        >
          <Navigation className="w-4 h-4 text-amber-500" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}
