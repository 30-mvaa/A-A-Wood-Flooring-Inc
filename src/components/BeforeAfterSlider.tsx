import React, { useState, useRef, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-50 text-[#C92227] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Restoration Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            See the Transformation.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Drag the interactive slider below to inspect our dustless sanding and deep-tone refinishing results on aged oak.
          </p>
        </div>

        {/* Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative max-w-5xl mx-auto aspect-[16/9] sm:aspect-[21/10] rounded-3xl overflow-hidden shadow-apple-lg border border-gray-200 select-none cursor-ew-resize"
        >
          {/* AFTER Image (Background) */}
          <img
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=85"
            alt="After Refinishing - A&A Wood Flooring"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            AFTER: Sanded, Stained & Sealed
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
              alt="Before Refinishing - A&A Wood Flooring"
              className="absolute inset-y-0 left-0 w-full h-full object-cover filter contrast-75 brightness-75 sepia-[0.3]"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                maxWidth: 'none',
              }}
            />
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              BEFORE: Scratched & Dull Oak
            </div>
          </div>

          {/* Divider Handle */}
          <div
            className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-apple-md border-2 border-[#C92227] flex items-center justify-center text-[#111111]">
              <div className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 border-l-2 border-b-2 border-gray-700 rotate-45 transform" />
                <span className="w-1.5 h-1.5 border-r-2 border-t-2 border-gray-700 rotate-45 transform" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Click and drag anywhere on the image to compare Before & After
        </p>
      </div>
    </section>
  );
};
