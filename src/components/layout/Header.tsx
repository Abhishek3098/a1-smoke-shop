'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flame, Phone, Menu, X, MessageSquareQuote } from 'lucide-react';
import { STORE_INFO } from '@/data/storeHours';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQs' },
    { href: '#location', label: 'Location & Hours' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6 fill-amber-500" />
                </div>
                <span>A1 SMOKE SHOP</span>
              </Link>
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              <nav className="hidden md:flex space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <a
                  href={'tel:' + STORE_INFO.phoneRaw}
                  className="glass px-4 py-2.5 rounded-xl text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all border border-emerald-500/30 flex items-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {STORE_INFO.phone}
                </a>
              </div>

              <ThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-300 dark:border-slate-700"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-menu"
        className={'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out flex flex-col pt-20 px-8 border-l border-slate-200 dark:border-slate-800 shadow-2xl md:hidden ' + (mobileMenuOpen ? 'translate-x-0' : 'translate-x-full')}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-600 dark:text-slate-300"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col space-y-6 mt-8 text-xl font-bold text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto mb-12 flex flex-col gap-3">
          <a
            href={'tel:' + STORE_INFO.phoneRaw}
            className="glass px-6 py-3.5 rounded-xl text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all border border-emerald-500/30 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Store: {STORE_INFO.phone}
          </a>
          <a
            href={STORE_INFO.smsUrl}
            className="glass px-6 py-3.5 rounded-xl text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all border border-blue-500/30 flex items-center justify-center gap-2"
          >
            <MessageSquareQuote className="w-5 h-5" />
            Text Jay / Check Stock
          </a>
        </div>
      </div>
    </>
  );
}
