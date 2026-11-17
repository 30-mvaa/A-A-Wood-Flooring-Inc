import React from 'react';
import { Award, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  const stats = [
    { value: '10+', label: 'Years in Industry', sub: 'Serving NY, NJ & CT' },
    { value: '1,500+', label: 'Floors Installed', sub: 'Residential & Commercial' },
    { value: '100%', label: 'Licensed & Insured', sub: 'Complete Peace of Mind' },
    { value: '5.0★', label: 'Customer Rating', sub: 'Top-Rated Workmanship' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-apple-lg border border-gray-200">
              <img
                src="/images/flyer.png"
                alt="A&A Wood Flooring Official Flyer"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>

            {/* Overlaid Experience Card */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-[#111111] text-white p-6 rounded-2xl shadow-apple-lg border border-white/10 max-w-xs hidden sm:block">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="w-6 h-6 text-[#C92227]" />
                <span className="font-extrabold text-2xl text-white">10+ Years</span>
              </div>
              <p className="text-xs text-gray-300">
                A decade of continuous flooring excellence across New York, New Jersey, and Connecticut.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C92227] mb-2">
                ABOUT A&A WOOD FLOORING, INC.
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                CRAFTSMANSHIP YOU CAN TRUST.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                With over <strong className="text-gray-900 font-semibold">10 years in the Flooring Industry</strong>, A&A Wood Flooring, Inc. has been providing premier flooring services to residential and commercial properties in Eastern New York and surrounding areas with flawless precision and unwavering dedication.
              </p>
              <p>
                From simple tasks like precision floor repairs and squeak elimination to grand architectural projects like custom herringbone and luxury hardwood installations throughout your home, rest assured we are fully licensed and insured to tackle any flooring project.
              </p>
              <p>
                <strong className="text-gray-900 font-semibold">Customer satisfaction is our goal!</strong> We guarantee that our flooring services will be fulfilled to your exact specifications and expectations every single time.
              </p>
            </div>

            {/* Key Value Checklist */}
            <div className="pt-2 space-y-3">
              {[
                'Full Residential & Commercial Licensing and Insurance Coverage',
                'Comprehensive Consultations & In-Home Wood Species Sampling',
                'Dust-Controlled Sanding & Low-VOC Non-Toxic Protective Coatings',
                'Dedicated Artisan Crews Treating Your Home with Utmost Respect'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#C92227] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-full shadow-apple-red transition-all duration-200 hover:scale-[1.02]"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href="tel:9179304105"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-bold text-[#111111] bg-[#F5F5F7] hover:bg-gray-200 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C92227]" />
                <span>Call (917) 930-4105</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#F5F5F7] border border-gray-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-800 mt-1">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
