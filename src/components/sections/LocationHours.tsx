'use client';

import React, { useState, useEffect } from 'react';
import { STORE_INFO, STORE_SCHEDULE } from '@/data/storeHours';
import { MapPin, Phone, Clock, MessageSquareQuote, Navigation } from 'lucide-react';
import LiveStatusBadge from '@/components/ui/LiveStatusBadge';
import { getStoreStatus } from '@/lib/timeUtils';

export default function LocationHours() {
  const [todayName, setTodayName] = useState<string>('');

  useEffect(() => {
    const status = getStoreStatus();
    setTodayName(status.currentDayName);
  }, []);

  // Ordered Monday through Sunday for clean display
  const orderedSchedule = [
    STORE_SCHEDULE[1], // Monday
    STORE_SCHEDULE[2], // Tuesday
    STORE_SCHEDULE[3], // Wednesday
    STORE_SCHEDULE[4], // Thursday
    STORE_SCHEDULE[5], // Friday
    STORE_SCHEDULE[6], // Saturday
    STORE_SCHEDULE[0], // Sunday
  ];

  return (
    <section id="location" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 bg-white dark:bg-slate-900/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Visit Us Today
                </h2>
                <LiveStatusBadge />
              </div>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">
                      Store Address
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {STORE_INFO.address}<br />
                      {STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.zip}
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 font-medium">
                      Near Foothill Blvd & Citrus Ave
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">
                      Phone & Text Line
                    </h3>
                    <a
                      href={'tel:' + STORE_INFO.phoneRaw}
                      className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-semibold block"
                    >
                      {STORE_INFO.phone}
                    </a>
                    <a
                      href={STORE_INFO.smsUrl}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-xs mt-1 inline-flex items-center gap-1 font-medium"
                    >
                      <MessageSquareQuote className="w-3.5 h-3.5" />
                      Text Jay to check stock
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-3">
                      Weekly Store Hours
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm w-full">
                      {orderedSchedule.map((item) => {
                        const isToday = item.day === todayName;
                        return (
                          <li
                            key={item.day}
                            className={'flex justify-between items-center py-1.5 px-2.5 rounded-lg border-b border-slate-200/50 dark:border-slate-800 transition-colors ' + (isToday ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold border-l-2 border-l-emerald-500' : 'text-slate-700 dark:text-slate-300 font-medium')}
                          >
                            <span>{item.day} {isToday && <span className="text-[10px] uppercase font-extrabold bg-emerald-500 text-white px-1.5 py-0.5 rounded-md ml-1">Today</span>}</span>
                            <span>{item.open} – {item.close}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={'tel:' + STORE_INFO.phoneRaw}
                className="flex-1 py-3 px-4 glass hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm rounded-xl transition-all border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                Call Store
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 min-h-[420px] w-full relative dark:grayscale dark:hover:grayscale-0 transition-all duration-500 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800">
            <iframe
              src={STORE_INFO.googleMapsEmbedUrl || "https://maps.google.com/maps?q=A1%20Smoke%20Shop,%2016075%20Foothill%20Blvd%20Ste-K%2011,%20Fontana,%20CA%2092335&t=&z=15&ie=UTF8&iwloc=&output=embed"}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for A1 Smoke Shop Fontana"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
