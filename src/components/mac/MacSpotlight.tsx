import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Phone, Sparkles } from 'lucide-react';

interface MacSpotlightProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const MacSpotlight: React.FC<MacSpotlightProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'Hardwood Flooring Installation', category: 'Services', target: 'services' },
    { title: 'Herringbone & Custom Patterns', category: 'Architectural', target: 'services' },
    { title: 'Dustless Sanding & Refinishing', category: 'Restoration', target: 'services' },
    { title: 'Luxury Vinyl Plank (LVP)', category: 'Flooring', target: 'services' },
    { title: 'Interactive Project Cost Estimator', category: 'Utility', target: 'estimator' },
    { title: 'Before & After Restoration Slider', category: 'Portfolio', target: 'before-after' },
    { title: 'Photo Gallery & Wood Species', category: 'Photos', target: 'gallery' },
    { title: 'Client Reviews & Ratings', category: 'Testimonials', target: 'reviews' },
    { title: 'Request a Free Estimate Form', category: 'Contact', target: 'contact' },
  ];

  const filtered = query.trim()
    ? quickLinks.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : quickLinks;

  const handleSelect = (targetId: string) => {
    onClose();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-24 sm:pt-32 px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-3xl rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-black/10 dark:border-white/15 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-200 dark:border-gray-800">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Spotlight Search A&A Wood Flooring (e.g. sanding, herringbone, phone)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-gray-400">
              No results found for "{query}". Try "sanding", "wood", or "quote".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.target)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#C92227] hover:text-white group text-left text-xs transition-colors"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C92227] group-hover:bg-white" />
                  <span className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-white">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white/80 text-[11px]">
                  <span>{item.category}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Bottom Actions */}
        <div className="px-4 py-2.5 bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-500">
          <div className="flex items-center space-x-3">
            <a
              href="tel:9179304105"
              className="flex items-center space-x-1 font-semibold text-[#C92227] hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>Call (917) 930-4105</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="flex items-center space-x-1 font-bold text-gray-800 dark:text-gray-200 hover:text-[#C92227]"
          >
            <Sparkles className="w-3 h-3 text-[#C92227]" />
            <span>Request Free Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
