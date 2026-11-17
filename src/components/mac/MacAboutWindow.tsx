import React from 'react';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { MacWindowFrame } from './MacWindowFrame';

interface MacAboutWindowProps {
  onOpenQuote: () => void;
}

export const MacAboutWindow: React.FC<MacAboutWindowProps> = ({ onOpenQuote }) => {
  const stats = [
    { value: '10+', label: 'Years in Industry', sub: 'Serving NY, NJ & CT' },
    { value: '1,500+', label: 'Floors Installed', sub: 'Residential & Commercial' },
    { value: '100%', label: 'Licensed & Insured', sub: 'Complete Peace of Mind' },
    { value: '5.0★', label: 'Customer Rating', sub: 'Top-Rated Workmanship' },
  ];

  return (
    <section id="about" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS Company Profile
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          CRAFTSMANSHIP YOU CAN TRUST
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Discover the history, dedication, and artisanal standards behind A&A Wood Flooring, Inc.
        </p>
      </div>

      <MacWindowFrame
        title="About — A&A Wood Flooring, Inc. / Master Artisans"
        subtitle="10+ Years Heritage"
        headerRight={
          <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
            <span>Official Profile</span>
          </div>
        }
      >
        <div className="p-6 sm:p-10 lg:p-12 bg-white dark:bg-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Flyer Media Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-apple-lg border border-gray-200 dark:border-gray-700 bg-black">
                <img
                  src="/images/flyer.png"
                  alt="A&A Wood Flooring, Inc. Official Flyer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C92227]">
                  About The Company
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] dark:text-white mt-1 leading-snug">
                  Precision in Every Board. Dedication in Every Project.
                </h3>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  With over <strong className="text-gray-900 dark:text-white font-bold">10 years in the Flooring Industry</strong>, A&A Wood Flooring, Inc. has been providing flooring services to residential and commercial properties in Eastern NY and surrounding areas with flawless precision and dedication.
                </p>
                <p>
                  From simple tasks like your floor repair to bigger projects like flooring installation at your home, rest assured we are fully licensed and insured to tackle any floor project!
                </p>
                <p>
                  <strong className="text-[#C92227] font-bold">Customer satisfaction is our goal!</strong> We guarantee that our flooring services will be fulfilled to your specifications and expectations every single time.
                </p>
              </div>

              {/* Checklist */}
              <div className="pt-2 space-y-2">
                {[
                  'Fully Licensed & Comprehensively Insured',
                  'Dustless Sanding with HEPA Particle Containment',
                  'Direct In-Person Wood Species and Stain Consultations',
                  'Residential Homes, Luxury Condos & Commercial Venues',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C92227] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center space-x-2 px-6 py-3 text-xs font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-xl shadow-apple-red transition-all"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:9179304105"
                  className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-bold text-gray-900 dark:text-white bg-[#F6F6F6] dark:bg-white/10 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C92227]" />
                  <span>Call (917) 930-4105</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#F6F6F6] dark:bg-[#202020]">
                <div className="text-2xl font-black text-[#111111] dark:text-white">{s.value}</div>
                <div className="text-xs font-bold text-gray-700 dark:text-gray-300 mt-0.5">{s.label}</div>
                <div className="text-[10px] text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </MacWindowFrame>
    </section>
  );
};
