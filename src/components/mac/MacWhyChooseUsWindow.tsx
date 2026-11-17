import React from 'react';
import { Hammer, Sparkles, Sliders, HeartHandshake, Building2, ShieldCheck } from 'lucide-react';
import { MacWindowFrame } from './MacWindowFrame';

export const MacWhyChooseUsWindow: React.FC = () => {
  const pillars = [
    {
      icon: Hammer,
      title: 'Professional Workmanship',
      description: 'Over a decade of seasoned artisanal experience. Every cut, joint, and perimeter transition is executed with unwavering pride in the trade.',
      badge: 'Master Artisans',
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'Laser-guided subfloor alignment, exact expansion gap engineering, and micro-sanding that guarantees zero swirl marks or uneven textures.',
      badge: 'Zero Flaws',
    },
    {
      icon: Sliders,
      title: 'Personalized Flooring Solutions',
      description: 'We offer variety not only in style options but also in price points. From premium exotic hardwoods to cost-effective luxury vinyl, we adjust to your project and budget needs.',
      badge: 'Tailored Budgets',
    },
    {
      icon: HeartHandshake,
      title: 'Guaranteed Customer Satisfaction',
      description: 'Our flooring services are fulfilled to your exact specifications every single time. We walk every square foot with you before concluding any project.',
      badge: '100% Commitment',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial Services',
      description: 'Equipped to handle luxury high-rise condos, suburban estates, historic brownstones, and commercial spaces throughout NY, NJ, and CT.',
      badge: 'Full Scale',
    },
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind knowing your property is protected by comprehensive liability coverage and certified flooring professionals.',
      badge: 'Fully Protected',
    },
  ];

  return (
    <section id="why-us" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS Architecture Bento
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          WHY CHOOSE A&A WOOD FLOORING?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          If you decide to work with us, you will get way more than just a beautifully installed floor. You get complete peace of mind.
        </p>
      </div>

      <MacWindowFrame
        title="Bento — 6 Pillars of Engineering Excellence"
        subtitle="A&A Quality Standard"
        headerRight={
          <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
            <span>6 Key Pillars</span>
          </div>
        }
      >
        <div className="p-6 sm:p-10 bg-white dark:bg-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F6F6F6] dark:bg-[#252525] border border-gray-200/80 dark:border-gray-700 hover:border-[#C92227]/40 shadow-sm hover:shadow-apple-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1f1f1f] text-[#111111] dark:text-white group-hover:text-[#C92227] flex items-center justify-center shadow-sm transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111111] dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200/60 dark:border-gray-700 flex items-center space-x-1.5 text-[11px] font-semibold text-[#C92227]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C92227]" />
                    <span>A&A Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MacWindowFrame>
    </section>
  );
};
