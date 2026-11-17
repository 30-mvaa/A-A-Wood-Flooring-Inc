import React, { useState } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

interface MacWindowFrameProps {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultMaximized?: boolean;
  headerRight?: React.ReactNode;
}

export const MacWindowFrame: React.FC<MacWindowFrameProps> = ({
  id,
  title,
  subtitle,
  icon,
  children,
  className = '',
  headerRight,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHoveringControls, setIsHoveringControls] = useState(false);

  return (
    <div
      id={id}
      className={`rounded-2xl sm:rounded-3xl overflow-hidden bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 ${
        isMinimized ? 'opacity-80' : ''
      } ${className}`}
    >
      {/* macOS Title Bar */}
      <div className="h-11 px-4 bg-[#F6F6F6]/90 dark:bg-[#252525]/90 border-b border-black/10 dark:border-white/10 flex items-center justify-between select-none">
        {/* Left: Traffic Light Buttons */}
        <div
          className="flex items-center space-x-2 w-20"
          onMouseEnter={() => setIsHoveringControls(true)}
          onMouseLeave={() => setIsHoveringControls(false)}
        >
          {/* Close (Red) */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-[#4c0000] transition-transform active:scale-90"
            title="Toggle Window"
          >
            {isHoveringControls && <X className="w-2 h-2" />}
          </button>

          {/* Minimize (Yellow) */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-[#5c3c00] transition-transform active:scale-90"
            title="Minimize"
          >
            {isHoveringControls && <Minus className="w-2 h-2" />}
          </button>

          {/* Fullscreen (Green) */}
          <button
            className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-[#004d00] transition-transform active:scale-90"
            title="Zoom / Fullscreen"
          >
            {isHoveringControls && <Maximize2 className="w-1.5 h-1.5" />}
          </button>
        </div>

        {/* Center: Window Title */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 dark:text-gray-200 truncate">
          {icon && <span className="opacity-80">{icon}</span>}
          <span>{title}</span>
          {subtitle && (
            <span className="text-gray-400 dark:text-gray-500 font-normal hidden sm:inline">
              — {subtitle}
            </span>
          )}
        </div>

        {/* Right: Window Controls / Actions */}
        <div className="w-20 flex justify-end items-center">
          {headerRight}
        </div>
      </div>

      {/* Window Body */}
      {!isMinimized && <div className="p-0">{children}</div>}
    </div>
  );
};
