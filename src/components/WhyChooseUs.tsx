import React from 'react';
import { Hammer, Sparkles, Sliders, HeartHandshake, Building2, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Hammer,
      title: 'Professional Workmanship',
      description: 'Over a decade of seasoned artisanal experience. Every cut, joint, and perimeter transition is executed with unwavering pride in the trade.',
      badge: 'Master Artisans',
      colSpan: 'md:col-span-2 lg:col-span-1',
    },
    {
      icon: Sparkles,
      title: 'Uncompromising Attention to Detail',
      description: 'Laser-guided subfloor alignment, exact expansion gap engineering, and micro-sanding that guarantees zero swirl marks or uneven textures.',
      badge: 'Zero Flaws',
      colSpan: 'md:col-span-1 lg:col-span-1',
    },
    {
      icon: Sliders,
      title: 'Personalized Flooring Solutions',
      description: 'We offer variety not only in style options but also in price points. From premium exotic hardwoods to cost-effective luxury vinyl, we adjust to your project and budget needs.',
      badge: 'Tailored Budgets',
      colSpan: 'md:col-span-1 lg:col-span-1',
    },
    {
      icon: HeartHandshake,
      title: 'Guaranteed Customer Satisfaction',
      description: 'Our flooring services are fulfilled to your exact specifications every single time. We walk every square foot with you before concluding any project.',
      badge: '100% Commitment',
      colSpan: 'md:col-span-1 lg:col-span-1',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial Services',
      description: 'Equipped to handle luxury high-rise condos, suburban estates, historic brownstones, and commercial spaces throughout NY, NJ, and CT.',
      badge: 'Full Scale',
      colSpan: 'md:col-span-1 lg:col-span-1',
    },
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind knowing your property is protected by comprehensive liability coverage and certified flooring professionals.',
      badge: 'Fully Protected',
      colSpan: 'md:col-span-2 lg:col-span-1',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C92227] mb-2">
            WHY HIRE US
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            WHY CHOOSE A&A WOOD FLOORING?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            If you decide to work with us, you will get way more than just a beautifully installed floor. You get the peace of mind that comes from knowing everything is taken care of by dedicated professionals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-apple-sm hover:shadow-apple-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] group-hover:bg-red-50 text-[#111111] group-hover:text-[#C92227] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#C92227] uppercase tracking-wider transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center space-x-2 text-xs font-semibold text-[#C92227]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C92227]" />
                  <span>A&A Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
