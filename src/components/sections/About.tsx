'use client';

import React from 'react';
import { Tag, Boxes, Users, HeartHandshake } from 'lucide-react';

export default function About() {
  const valueProps = [
    {
      icon: Tag,
      title: 'Best Prices in Town',
      description: 'We keep our margins low so you get the maximum value for your money every time.',
      bgClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-l-emerald-500',
    },
    {
      icon: Boxes,
      title: 'Massive Product Variety',
      description: 'From premium hand-blown glass and hookahs to the freshest disposables and e-juice.',
      bgClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-l-amber-500',
    },
    {
      icon: Users,
      title: 'Family-Style Service',
      description: 'Customer satisfaction is our #1 priority. We treat every single customer like family.',
      bgClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-l-blue-500',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold text-xs mb-4">
              <HeartHandshake className="w-4 h-4" />
              About Our Store
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              More Than Just a Smoke Shop
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              At A1 Smoke Shop, we pride ourselves on delivering an exceptional experience every time you walk through our doors. Whether you are a daily regular or a first-time visitor, you can always count on genuine friendliness, high-quality inventory, and the most competitive prices in Fontana.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-5 py-3 my-6 glass rounded-r-2xl shadow-sm">
              <p className="text-xl italic font-medium text-amber-600 dark:text-amber-400">
                &ldquo;How are you my friend?&rdquo;
              </p>
              <footer className="mt-2 text-slate-500 dark:text-slate-400 text-sm font-semibold">
                — Jay & The A1 Smoke Shop Team
              </footer>
            </blockquote>
          </div>

          <div className="grid gap-5">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div
                  key={idx}
                  className={'glass p-6 rounded-2xl flex items-start gap-4 border-l-4 ' + prop.bgClass + ' transition-transform hover:-translate-y-1'}
                >
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
