import React, { useState, useRef, useCallback } from 'react';
import { Sliders } from 'lucide-react';

export const CinematicBeforeAfter: React.FC = () => {
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
    <section id="before-after" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-[#E5A93C]/40 text-[#E5A93C] text-[11px] font-mono tracking-wider uppercase mb-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>03 // OPTICAL COMPARISON MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            RESTORED TO SHOWROOM LUSTER
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Slide the interactive divider to inspect the surgical difference between sun-damaged scratched timber and our multi-stage dustless refinishing.
          </p>
        </div>

        {/* Cinematic Comparison Frame */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative max-w-5xl mx-auto aspect-[16/9] sm:aspect-[21/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize bg-black"
        >
          {/* AFTER Image */}
          <img
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=85"
            alt="After Refinishing - A&A Wood Flooring"
            className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1]"
          />
          <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md text-[#E5A93C] text-xs font-mono font-bold px-3.5 py-1.5 rounded-lg border border-[#E5A93C]/40 uppercase tracking-widest shadow-lg">
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
            <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-gray-300 text-xs font-mono font-bold px-3.5 py-1.5 rounded-lg border border-white/20 uppercase tracking-widest shadow-lg">
              BEFORE: Scratched & Dull Oak
            </div>
          </div>

          {/* Golden Handle */}
          <div
            className="absolute inset-y-0 w-1 bg-[#E5A93C] shadow-[0_0_15px_#E5A93C] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#E5A93C] shadow-[0_0_20px_rgba(229,169,60,0.6)] border-2 border-black flex items-center justify-center text-black">
              <div className="flex items-center space-x-1 font-bold">
                <span className="w-1.5 h-1.5 border-l-2 border-b-2 border-black rotate-45 transform" />
                <span className="w-1.5 h-1.5 border-r-2 border-t-2 border-black rotate-45 transform" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs font-mono text-gray-500 mt-4">
          Click and drag across the view to compare grain depth and surface reflectivity
        </p>
      </div>
    </section>
  );
};
