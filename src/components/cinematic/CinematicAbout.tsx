import React from 'react';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface CinematicAboutProps {
  onOpenQuote: () => void;
}

export const CinematicAbout: React.FC<CinematicAboutProps> = ({ onOpenQuote }) => {
  const stats = [
    { value: '10+', label: 'Years in Industry', sub: 'NY • NJ • CT Coverage' },
    { value: '1,500+', label: 'Floors Completed', sub: 'Residential & Commercial' },
    { value: '100%', label: 'Licensed & Insured', sub: 'Complete Liability Protection' },
    { value: '5.0★', label: 'Certified Reviews', sub: 'Master Craftsmanship' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Media (Flyer in Cinematic Frame) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#121217] p-2">
              <img
                loading="lazy"
                decoding="async"
                src="/images/flyer.webp"
                alt="A&A Wood Flooring Official Flyer"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* Overlaid Badge */}
            <div className="absolute -bottom-5 -right-5 bg-black/90 backdrop-blur-xl border border-[#C92227]/40 p-4 rounded-2xl shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-6 h-6 text-[#C92227]" />
                <div>
                  <p className="font-mono font-bold text-xs text-white">10+ YEARS PROVEN</p>
                  <p className="text-[10px] text-gray-400">Licensed & Insured in NY, NJ & CT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#C92227] uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C92227]" />
                <span>05 // HERITAGE & CREDENTIALS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                CRAFTSMANSHIP YOU CAN TRUST.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              <p>
                With over <strong className="text-white font-bold">10 years in the Flooring Industry</strong>, A&A Wood Flooring, Inc. has been providing flooring services to residential and commercial properties in Eastern NY and surrounding areas with flawless precision and dedication.
              </p>
              <p>
                From simple tasks like your floor repair to bigger projects like flooring installation at your home, rest assured we are fully licensed and insured to tackle any floor project!
              </p>
              <p className="border-l-2 border-[#C92227] pl-4 text-white font-medium italic">
                "Customer satisfaction is our goal! We guarantee that our flooring services will be fulfilled to your specifications and expectations every single time."
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm font-mono text-gray-300">
              {[
                'Full Residential & Commercial Licensing and Insurance Coverage',
                'Comprehensive Consultations & In-Home Wood Species Sampling',
                'Dust-Controlled Sanding & Low-VOC Non-Toxic Protective Coatings',
                'Dedicated Artisan Crews Treating Your Home with Utmost Respect'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C92227] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-xs font-mono font-black uppercase tracking-wider text-white bg-[#C92227] hover:bg-[#E52228] shadow-[0_0_20px_rgba(201,34,39,0.3)] transition-all hover:scale-[1.02]"
              >
                <span>REQUEST FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:9179304105"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-xs font-mono font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C92227]" />
                <span>(917) 930-4105</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#121217] border border-white/5 text-center">
              <div className="text-3xl font-black text-white font-mono">{stat.value}</div>
              <div className="text-xs font-mono font-bold text-[#C92227] mt-1 uppercase">{stat.label}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
