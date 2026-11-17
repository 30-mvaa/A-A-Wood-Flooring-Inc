import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

interface FloatingCallButtonProps {
  onOpenQuote: () => void;
}

export const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({ onOpenQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 animate-fadeIn">
      {/* Quote Trigger */}
      <button
        onClick={onOpenQuote}
        className="hidden sm:flex items-center space-x-2 px-4 py-3 bg-[#111111] hover:bg-black text-white text-xs font-bold rounded-full shadow-apple-lg border border-white/20 transition-all duration-200 hover:scale-105"
        title="Request Free Quote"
      >
        <MessageSquare className="w-4 h-4 text-[#C92227]" />
        <span>Free Quote</span>
      </button>

      {/* Immediate Phone Call Dial Button */}
      <a
        href="tel:9179304105"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C92227] hover:bg-[#AB1B20] text-white shadow-apple-red transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Call (917) 930-4105"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
        </span>
        <Phone className="w-6 h-6 animate-pulse" />
      </a>
    </div>
  );
};
