'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '@/data/products';
import { ProductCategory } from '@/types';
import { STORE_INFO } from '@/data/storeHours';
import { 
  Flame, 
  Wind, 
  Cigarette, 
  Sparkles, 
  Layers, 
  Gem, 
  Search, 
  MessageSquareQuote,
  Package
} from 'lucide-react';

const CATEGORIES: { label: string; value: ProductCategory }[] = [
  { label: 'All Products', value: 'all' },
  { label: 'Vapes & E-Juice', value: 'vapes' },
  { label: 'Glass & Water Pipes', value: 'glass' },
  { label: 'Cigars & Wraps', value: 'cigars' },
  { label: 'Hookah & Shisha', value: 'hookah' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Specialty & Kratom', value: 'specialty' },
];

function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case 'Flame': return Flame;
    case 'Wind': return Wind;
    case 'Cigarette': return Cigarette;
    case 'Sparkles': return Sparkles;
    case 'Layers': return Layers;
    case 'Gem': return Gem;
    default: return Package;
  }
}

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.popularBrands.some((brand) => brand.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold text-xs mb-3">
            <Package className="w-4 h-4" />
            Explore Our Selection
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Premium In-Stock Products
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Curated top-shelf brands, hand-blown glassware, and daily essentials priced right.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 space-y-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand (e.g. Geek Bar, RAW, Puffco, Lost Mary, Al Fakher)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 ' + (isActive ? 'bg-emerald-500 text-white shadow-emerald-500/25 shadow-md scale-105' : 'glass text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800')}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 glass rounded-3xl max-w-lg mx-auto p-8">
            <Package className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No items matched &ldquo;{searchQuery}&rdquo;</h3>
            <p className="text-slate-500 text-sm mb-4">We might still carry it in-store! Text Jay to check current stock:</p>
            <a
              href={'sms:' + STORE_INFO.phoneRaw + '?&body=' + encodeURIComponent('Hi Jay, do you have ' + searchQuery + ' in stock?')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition-all"
            >
              <MessageSquareQuote className="w-4 h-4" />
              Check Stock for &ldquo;{searchQuery}&rdquo;
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const Icon = getCategoryIcon(product.icon);
              return (
                <div
                  key={product.id}
                  className="glass glass-hover p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between border border-slate-200 dark:border-slate-800"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Popular Brands:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.popularBrands.map((brand, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={'sms:' + STORE_INFO.phoneRaw + '?&body=' + encodeURIComponent('Hi Jay, do you have ' + product.title + ' in stock?')}
                      className="w-full py-2.5 rounded-xl glass border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquareQuote className="w-4 h-4" />
                      Ask Jay About Stock
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
