import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Sun, Moon, Volume2, Sparkles, X } from 'lucide-react';

interface MacControlCenterProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const MacControlCenter: React.FC<MacControlCenterProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
  isDarkMode,
  onToggleTheme,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-10 right-3 z-50 w-80 sm:w-88 p-4 bg-white/80 dark:bg-[#1a1a1a]/85 backdrop-blur-2xl rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] border border-black/10 dark:border-white/15 animate-fadeIn text-xs text-gray-900 dark:text-gray-100 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#C92227] animate-pulse" />
          <span className="font-bold text-sm tracking-tight">Control Center</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-500"
          aria-label="Close Control Center"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        {/* Quick Phone Call Card */}
        <a
          href="tel:9179304105"
          className="p-3 rounded-2xl bg-[#F6F6F6] dark:bg-white/10 hover:bg-[#C92227] hover:text-white transition-all duration-200 flex flex-col justify-between group"
        >
          <div className="w-7 h-7 rounded-xl bg-[#C92227] text-white flex items-center justify-center mb-2">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-bold text-xs">Call Direct</p>
            <p className="text-[10px] opacity-75">(917) 930-4105</p>
          </div>
        </a>

        {/* Free Estimate Card */}
        <button
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          className="p-3 rounded-2xl bg-[#F6F6F6] dark:bg-white/10 hover:bg-[#C92227] hover:text-white transition-all duration-200 text-left flex flex-col justify-between group"
        >
          <div className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-2">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-bold text-xs">Free Quote</p>
            <p className="text-[10px] opacity-75">Book On-Site Visit</p>
          </div>
        </button>
      </div>

      {/* Theme Toggle Strip */}
      <div className="mt-3 p-3 rounded-2xl bg-[#F6F6F6] dark:bg-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          {isDarkMode ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
          <div>
            <p className="font-bold text-xs">Interface Appearance</p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">{isDarkMode ? 'macOS Dark' : 'macOS Light'}</p>
          </div>
        </div>
        <button
          onClick={onToggleTheme}
          className="px-3 py-1 rounded-full bg-white dark:bg-white/20 text-[11px] font-semibold shadow-sm border border-black/5 dark:border-white/10"
        >
          Switch
        </button>
      </div>

      {/* Sound / Volume simulation */}
      <div className="mt-3 p-3 rounded-2xl bg-[#F6F6F6] dark:bg-white/10 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold flex items-center space-x-1.5">
            <Volume2 className="w-3.5 h-3.5 text-[#C92227]" />
            <span>Sound & Effects</span>
          </span>
          <span className="text-gray-500">100%</span>
        </div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden p-0.5">
          <div className="h-full bg-[#111111] dark:bg-white rounded-full w-4/5" />
        </div>
      </div>

      {/* Coverage & Credentials */}
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800 space-y-2">
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-[11px]">
          <MapPin className="w-3.5 h-3.5 text-[#C92227] flex-shrink-0" />
          <span>New York • New Jersey • Connecticut</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C92227] flex-shrink-0" />
          <span>Fully Licensed & Comprehensive Insurance</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-[11px]">
          <Mail className="w-3.5 h-3.5 text-[#C92227] flex-shrink-0" />
          <span className="truncate">aawoodflooring22@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
