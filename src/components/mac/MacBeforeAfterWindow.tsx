import React, { useState, useRef, useCallback } from 'react';
import { MacWindowFrame } from './MacWindowFrame';

export const MacBeforeAfterWindow: React.FC = () => {
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
    <section id="before-after" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS Precision Inspector
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          DUSTLESS RESTORATION IN ACTION
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Drag the interactive divider to inspect the transformation from worn timber to showroom luster.
        </p>
      </div>

      <MacWindowFrame
        title="Inspector — Real Sanding & Refinishing Transformation"
        subtitle="Before & After Compare"
        headerRight={
          <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
            <span>50/50 Split</span>
          </div>
        }
      >
        <div className="p-4 sm:p-6 bg-white dark:bg-[#1a1a1a]">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-inner border border-gray-200 dark:border-gray-700 select-none cursor-ew-resize"
          >
            {/* AFTER Image (Background) */}
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=85"
              alt="After Refinishing - A&A Wood Flooring"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
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
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                BEFORE: Scratched & Dull Oak
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-apple-md border-2 border-[#C92227] flex items-center justify-center text-[#111111]">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 border-l-2 border-b-2 border-gray-700 rotate-45 transform" />
                  <span className="w-1.5 h-1.5 border-r-2 border-t-2 border-gray-700 rotate-45 transform" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">
            Click and drag anywhere to inspect the grain clarity and sheen quality
          </p>
        </div>
      </MacWindowFrame>
    </section>
  );
};
