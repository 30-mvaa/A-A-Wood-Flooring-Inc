import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, SlidersHorizontal, Phone } from 'lucide-react';

interface MacMenuBarProps {
  onToggleSpotlight: () => void;
  onToggleControlCenter: () => void;
  onOpenQuote: () => void;
  activeSection: string;
}

export const MacMenuBar: React.FC<MacMenuBarProps> = ({
  onToggleSpotlight,
  onToggleControlCenter,
  onOpenQuote,
  activeSection,
}) => {
  const [timeString, setTimeString] = useState('');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      };
      setTimeString(now.toLocaleDateString('en-US', options).replace(/,/g, ''));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mac-menubar-container')) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const scrollTo = (id: string) => {
    setActiveMenu(null);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-8 px-3.5 bg-white/70 dark:bg-[#111111]/75 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 text-xs text-gray-900 dark:text-gray-100 flex items-center justify-between select-none shadow-sm mac-menubar-container">
      {/* Left Menu Items */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        {/* Apple/A&A Logo Button */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveMenu(activeMenu === 'apple' ? null : 'apple');
            }}
            className={`px-2 py-0.5 rounded flex items-center space-x-1.5 transition-colors ${
              activeMenu === 'apple' ? 'bg-black/10 dark:bg-white/15' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            <img src="/images/logo.png" alt="A&A" className="h-4 w-auto object-contain" />
            <span className="font-bold hidden sm:inline tracking-tight">A&A Wood Floors</span>
          </button>

          {activeMenu === 'apple' && (
            <div className="absolute top-8 left-0 w-64 bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-black/10 dark:border-white/15 py-1.5 z-50 text-xs">
              <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800">
                <p className="font-bold text-sm text-[#111111] dark:text-white">A&A Wood Flooring, Inc.</p>
                <p className="text-[11px] text-gray-500">macOS Sequoia Digital Edition</p>
                <p className="text-[10px] text-[#C92227] font-semibold mt-0.5">Licensed & Insured • NY, NJ, CT</p>
              </div>
              <button
                onClick={() => scrollTo('home')}
                className="w-full text-left px-3 py-1.5 hover:bg-[#C92227] hover:text-white transition-colors"
              >
                About This Flooring Company
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="w-full text-left px-3 py-1.5 hover:bg-[#C92227] hover:text-white transition-colors"
              >
                Services & Spec Sheets...
              </button>
              <button
                onClick={() => scrollTo('estimator')}
                className="w-full text-left px-3 py-1.5 hover:bg-[#C92227] hover:text-white transition-colors"
              >
                Launch Project Cost Estimator
              </button>
              <div className="my-1 border-t border-gray-200 dark:border-gray-800" />
              <button
                onClick={() => {
                  setActiveMenu(null);
                  onOpenQuote();
                }}
                className="w-full text-left px-3 py-1.5 font-bold text-[#C92227] hover:bg-[#C92227] hover:text-white transition-colors"
              >
                Request Free On-Site Consultation...
              </button>
              <a
                href="tel:9179304105"
                className="w-full block text-left px-3 py-1.5 hover:bg-[#C92227] hover:text-white transition-colors"
              >
                Dial (917) 930-4105
              </a>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-1 font-medium">
          <button
            onClick={() => scrollTo('home')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeSection === 'home' ? 'font-bold text-[#C92227]' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('services')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeSection === 'services' ? 'font-bold text-[#C92227]' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('estimator')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeSection === 'estimator' ? 'font-bold text-[#C92227]' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Estimator
          </button>
          <button
            onClick={() => scrollTo('gallery')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeSection === 'gallery' ? 'font-bold text-[#C92227]' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeSection === 'reviews' ? 'font-bold text-[#C92227]' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeSection === 'contact' ? 'font-bold text-[#C92227]' : 'hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Right Status Items */}
      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-800 dark:text-gray-200">
        {/* Quick Phone Call Action */}
        <a
          href="tel:9179304105"
          className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 hover:bg-[#C92227] text-[#C92227] hover:text-white font-bold text-[11px] transition-all"
          title="Direct Line (917) 930-4105"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C92227] animate-ping" />
          <Phone className="w-3 h-3" />
          <span className="hidden sm:inline">(917) 930-4105</span>
        </a>

        {/* Battery Indicator */}
        <div className="hidden lg:flex items-center space-x-1" title="100% Quality Guaranteed">
          <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400 rotate-90" />
          <span className="text-[10px] font-mono">100%</span>
        </div>

        {/* Wi-Fi */}
        <div className="hidden sm:block" title="Tri-State Connected: NY, NJ, CT">
          <Wifi className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
        </div>

        {/* Spotlight Search Icon */}
        <button
          onClick={onToggleSpotlight}
          className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          title="Search Spotlight (⌘K)"
          aria-label="Spotlight Search"
        >
          <Search className="w-3.5 h-3.5" />
        </button>

        {/* Control Center Toggle */}
        <button
          onClick={onToggleControlCenter}
          className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          title="macOS Control Center"
          aria-label="Control Center"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </button>

        {/* Live Digital Clock */}
        <span className="font-medium text-[11px] tabular-nums pl-1">
          {timeString || 'Mon Nov 16 9:50 PM'}
        </span>
      </div>
    </div>
  );
};
