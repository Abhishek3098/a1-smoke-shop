'use client';

import React from 'react';
import { REVIEWS_DATA } from '@/data/reviews';
import { STORE_INFO } from '@/data/storeHours';
import { Star, Quote, ExternalLink, Heart } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-100 dark:bg-slate-850/50 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold text-xs mb-3">
            <Heart className="w-4 h-4 fill-amber-500 text-amber-500" />
            Customer Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Don&apos;t Just Take Our Word For It
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-3 text-xl">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-500" />
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-6">
            Real feedback from our amazing Fontana community.
          </p>

          <a
            href={STORE_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
            Leave Us a Review on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="glass p-8 rounded-3xl relative flex flex-col justify-between border border-slate-200 dark:border-slate-800 transition-transform hover:-translate-y-1"
            >
              <div>
                <Quote className="w-10 h-10 text-slate-300 dark:text-slate-700 opacity-60 mb-4" />
                <p className="text-slate-700 dark:text-slate-200 italic mb-6 text-base leading-relaxed">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <div className={'w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shadow-sm ' + review.avatarColor}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm">
                    {review.author}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
