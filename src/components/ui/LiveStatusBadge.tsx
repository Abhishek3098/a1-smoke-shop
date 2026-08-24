'use client';

import React, { useState, useEffect } from 'react';
import { getStoreStatus } from '@/lib/timeUtils';
import { StoreStatus } from '@/types';
import { Clock } from 'lucide-react';

export default function LiveStatusBadge({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<StoreStatus | null>(null);

  useEffect(() => {
    setStatus(getStoreStatus());
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className={'inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-500 ' + className}>
        <Clock className="w-3.5 h-3.5 animate-spin" />
        Checking Store Hours...
      </div>
    );
  }

  const { isOpen, isClosingSoon, message, nextChangeText } = status;

  let badgeColor = 'border border-slate-400/30 bg-slate-500/10 text-slate-600 dark:text-slate-400';
  let pingColor = 'bg-slate-400';
  let dotColor = 'bg-slate-500';

  if (isOpen) {
    if (isClosingSoon) {
      badgeColor = 'border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400';
      pingColor = 'bg-amber-400';
      dotColor = 'bg-amber-500';
    } else {
      badgeColor = 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      pingColor = 'bg-emerald-400';
      dotColor = 'bg-emerald-500';
    }
  }

  return (
    <div className={'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold tracking-wide transition-all shadow-sm ' + badgeColor + ' ' + className}>
      <span className="relative flex h-2 w-2">
        <span className={'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ' + pingColor} />
        <span className={'relative inline-flex rounded-full h-2 w-2 ' + dotColor} />
      </span>
      <span>
        <strong className="font-bold">{message}:</strong> {nextChangeText}
      </span>
    </div>
  );
}
