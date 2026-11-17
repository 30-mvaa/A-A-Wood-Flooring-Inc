import React from 'react';
import { Hammer, Sparkles, Sliders, HeartHandshake, Building2, ShieldCheck } from 'lucide-react';

export const CinematicWhyUs: React.FC = () => {
  const pillars = [
    {
      icon: Hammer,
      title: 'Professional Workmanship',
      description: 'Over a decade of seasoned artisanal experience. Every cut, joint, and perimeter transition is executed with unwavering pride in the trade.',
      badge: '01 / ARTISANS',
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'Laser-guided subfloor alignment, exact expansion gap engineering, and micro-sanding that guarantees zero swirl marks or uneven textures.',
      badge: '02 / TOLERANCE',
    },
    {
      icon: Sliders,
      title: 'Personalized Flooring Solutions',
      description: 'We offer variety not only in style options but also in price points. From premium exotic hardwoods to cost-effective luxury vinyl, we adjust to your project and budget needs.',
      badge: '03 / BUDGET',
    },
    {
      icon: HeartHandshake,
      title: 'Guaranteed Customer Satisfaction',
      description: 'Our flooring services are fulfilled to your exact specifications every single time. We walk every square foot with you before concluding any project.',
      badge: '04 / PLEDGE',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial Services',
      description: 'Equipped to handle luxury high-rise condos, suburban estates, historic brownstones, and commercial spaces throughout NY, NJ, and CT.',
      badge: '05 / SCALE',
    },
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind knowing your property is protected by comprehensive liability coverage and certified flooring professionals.',
      badge: '06 / PROTECTED',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-[#E5A93C]/40 text-[#E5A93C] text-[11px] font-mono tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 // WHY CHOOSE A&A WOOD FLOORING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ENGINEERED EXCELLENCE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Working with us delivers far more than just a beautifully installed floor. You gain total peace of mind backed by dedicated flooring specialists.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#E5A93C]/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-black/60 text-[#E5A93C] flex items-center justify-center border border-white/10 group-hover:border-[#E5A93C]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E5A93C] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/5 flex items-center space-x-2 text-[10px] font-mono font-bold text-[#E5A93C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                  <span>A&A QUALITY CRITERIA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
