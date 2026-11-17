import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { MacWindowFrame } from './MacWindowFrame';

interface MacHeroWindowProps {
  onOpenQuote: () => void;
}

export const MacHeroWindow: React.FC<MacHeroWindowProps> = ({ onOpenQuote }) => {
  const flyerHighlights = [
    'Install Unfinished Wood',
    'Install Pre-Finished Wood',
    'Install Engineered Wood',
    'Install with Designs & Inlays',
    'Install Waterproof Laminates',
    'Install Precision Herringbone',
  ];

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-14 pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* MacBook Pro Window Frame */}
      <MacWindowFrame
        title="A&A Wood Flooring, Inc. — Keynote Presentation"
        subtitle="macOS Sequoia Edition"
        headerRight={
          <div className="flex items-center space-x-1.5 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="hidden sm:inline font-mono">NY • NJ • CT</span>
          </div>
        }
      >
        <div className="relative overflow-hidden bg-[#111111] text-white">
          {/* Subtle Ambient Apple Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#C92227]/20 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-red-950/25 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 z-10 space-y-6">
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C92227] animate-pulse" />
                <span className="text-[#C92227] tracking-wider uppercase font-extrabold">A&A Wood Flooring, Inc.</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-200">10+ Years Experience</span>
              </div>

              {/* Main Apple Heading */}
              <div>
                <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">
                  WELCOME TO A&A WOOD FLOORING, INC.
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  Floors That Make A <br />
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                    Statement.
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-300 tracking-wide uppercase">
                  YOUR STYLE. OUR QUALITY WORKMANSHIP. THE PERFECT MATCH.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                Experience luxury residential and commercial wood flooring across New York, New Jersey, and Connecticut. From bespoke herringbone inlays to dustless sanding and waterproof vinyl planks.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-2xl shadow-apple-red transition-all duration-200 hover:scale-[1.02] active:scale-95 group"
                >
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={scrollToServices}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-gray-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl backdrop-blur-md transition-all duration-200"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Direct Phone Numbers Callout */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300">
                <span className="text-gray-400">Direct Phone:</span>
                <a
                  href="tel:9179304105"
                  className="inline-flex items-center space-x-1.5 text-white hover:text-[#C92227] font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C92227]" />
                  <span>(917) 930-4105</span>
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="tel:9178611492"
                  className="inline-flex items-center space-x-1.5 text-white hover:text-[#C92227] font-bold transition-colors"
                >
                  <span>(917) 861-1492</span>
                </a>
              </div>
            </div>

            {/* Right Media / Authentic Herringbone Showcase */}
            <div className="lg:col-span-5 relative p-4 sm:p-8 flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src="/images/hero-herringbone.png"
                  alt="Authentic Herringbone Hardwood Flooring by A&A Wood Flooring"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Overlaid Details */}
                <div className="absolute bottom-5 left-5 right-5 space-y-3">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#C92227] text-white text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Master Herringbone Installation</span>
                  </div>

                  <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-1.5">
                    {flyerHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C92227] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Highlights Strip */}
          <div className="border-t border-white/10 bg-black/40 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#C92227]" />
              <span className="font-semibold text-gray-200">10+ Years Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C92227]" />
              <span className="font-semibold text-gray-200">Dustless HEPA Containment</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C92227]" />
              <span className="font-semibold text-gray-200">Free In-Person Measurement</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-gray-200">Serving NY, NJ & CT</span>
            </div>
          </div>
        </div>
      </MacWindowFrame>
    </section>
  );
};
