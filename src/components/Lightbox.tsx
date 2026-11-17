import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items, onClose]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white max-w-7xl w-full mx-auto pb-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C92227] font-bold">
            {item.categoryLabel}
          </span>
          <h4 className="text-lg sm:text-xl font-bold">{item.title}</h4>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image with Navigation Arrows */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-auto overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="max-w-7xl w-full mx-auto pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-300 gap-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-[#C92227]" />
            <span>{item.location}</span>
          </span>
          {item.woodType && (
            <span className="flex items-center space-x-1.5 hidden sm:flex">
              <Tag className="w-4 h-4 text-[#C92227]" />
              <span>{item.woodType}</span>
            </span>
          )}
          {item.finish && (
            <span className="text-gray-400 hidden md:inline">
              Finish: {item.finish}
            </span>
          )}
        </div>

        <span className="text-gray-400 font-mono text-xs">
          {currentIndex + 1} of {items.length}
        </span>
      </div>
    </div>
  );
};
