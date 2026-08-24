'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '@/data/faqs';
import { HelpCircle, ChevronDown, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO } from '@/data/storeHours';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-blue-500/30 text-blue-600 dark:text-blue-400 font-semibold text-xs mb-3">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about our store policies, age requirements, and products.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="glass rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base sm:text-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className={'p-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-800 flex-shrink-0 transition-transform duration-300 ' + (isOpen ? 'rotate-180 text-emerald-500' : 'text-slate-500')}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 glass rounded-3xl border border-slate-200 dark:border-slate-800 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Have a different question?</h4>
            <p className="text-slate-500 text-xs mt-0.5">Text Jay directly for an instant answer.</p>
          </div>
          <a
            href={STORE_INFO.smsUrl}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
          >
            <MessageSquareQuote className="w-4 h-4" />
            Text Jay Now
          </a>
        </div>
      </div>
    </section>
  );
}
