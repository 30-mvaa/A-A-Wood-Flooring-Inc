import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const flyerHighlights = [
    'Install Unfinished Wood',
    'Install Pre-Finished Wood',
    'Install Engineered Wood',
    'Install with Designs',
    'Install Laminates',
    'Install Herringbone'
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#111111] text-white pt-8 pb-20 md:pt-14 md:pb-28">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#C92227]/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-red-950/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-gray-200">
            <span className="w-2 h-2 rounded-full bg-[#C92227] animate-pulse" />
            <span className="tracking-wide uppercase font-semibold text-gray-300">A&A Wood Flooring, Inc.</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">NY • NJ • CT</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#C92227] tracking-wider uppercase mb-3">
            Your Style • Our Quality Workmanship • The Perfect Match
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Floors That Make A <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Statement.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Beautiful craftsmanship. Lasting quality. From custom herringbone hardwood installations to dustless sanding and luxury vinyl plank across New York, New Jersey, and Connecticut.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-full shadow-apple-red transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full backdrop-blur-md transition-all duration-300"
            >
              <span>EXPLORE OUR SERVICES</span>
            </a>
          </div>

          {/* Direct Phone Numbers Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <span className="text-gray-400 font-medium">Direct Project Consultations:</span>
            <a 
              href="tel:9179304105" 
              className="inline-flex items-center space-x-2 text-white hover:text-[#C92227] font-bold text-base transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C92227]" />
              <span>(917) 930-4105</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a 
              href="tel:9178611492" 
              className="inline-flex items-center space-x-2 text-white hover:text-[#C92227] font-bold text-base transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C92227]" />
              <span>(917) 861-1492</span>
            </a>
          </div>
        </div>

        {/* Cinematic Flooring Visual Showcase */}
        <div className="relative mt-12 rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/60 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image Section */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[520px] overflow-hidden">
              <img
                src="/images/hero-herringbone.png"
                alt="Herringbone Hardwood Flooring Installation by A&A Wood Flooring"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111] hidden lg:block" />
              
              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/75 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl max-w-xs">
                <p className="text-xs text-[#C92227] font-bold uppercase tracking-wider">Authentic Project</p>
                <p className="text-sm font-semibold text-white">Precision Herringbone Pattern</p>
                <p className="text-xs text-gray-300">Installed with hand-milled borders & satin clear coat</p>
              </div>
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C92227]">
                  Master Craftsmanship
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Precision in Every Plank.
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Over 10 years delivering residential and commercial excellence with flawless tolerances.
                </p>
              </div>

              {/* Service Checkmarks from Flyer */}
              <div className="space-y-2.5">
                {flyerHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C92227] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#C92227] mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-gray-200">Expert Work</p>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <Sparkles className="w-5 h-5 text-[#C92227] mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-gray-200">Top Quality</p>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#C92227] mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-gray-200">100% Match</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            <span>Scroll to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C92227]" />
          </a>
        </div>
      </div>
    </section>
  );
};
