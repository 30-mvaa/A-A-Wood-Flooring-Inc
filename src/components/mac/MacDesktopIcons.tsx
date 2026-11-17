import React from 'react';
import { FileText, Folder, MapPin, Phone, Sparkles } from 'lucide-react';

interface MacDesktopIconsProps {
  onOpenQuote: () => void;
}

export const MacDesktopIcons: React.FC<MacDesktopIconsProps> = ({ onOpenQuote }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const icons = [
    {
      id: 'quote-app',
      label: 'Instant Quote.app',
      icon: Sparkles,
      iconBg: 'bg-gradient-to-b from-[#C92227] to-red-800 text-white',
      action: onOpenQuote,
    },
    {
      id: 'services-folder',
      label: 'Services Portfolio.folder',
      icon: Folder,
      iconBg: 'bg-gradient-to-b from-blue-500 to-blue-700 text-white',
      action: () => scrollTo('services'),
    },
    {
      id: 'specs-pdf',
      label: 'Hardwood Specs.pdf',
      icon: FileText,
      iconBg: 'bg-gradient-to-b from-amber-500 to-orange-600 text-white',
      action: () => scrollTo('services'),
    },
    {
      id: 'coverage-map',
      label: 'NY-NJ-CT Coverage.map',
      icon: MapPin,
      iconBg: 'bg-gradient-to-b from-emerald-500 to-teal-700 text-white',
      action: () => scrollTo('contact'),
    },
    {
      id: 'call-app',
      label: 'Call Direct.app',
      icon: Phone,
      iconBg: 'bg-gradient-to-b from-green-500 to-emerald-700 text-white',
      action: () => {
        window.location.href = 'tel:9179304105';
      },
    },
  ];

  return (
    <div className="fixed top-12 right-4 z-20 hidden xl:flex flex-col space-y-4 pointer-events-none select-none">
      {icons.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={item.action}
            className="pointer-events-auto flex flex-col items-center justify-center p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 group transition-all cursor-pointer w-24 text-center focus:outline-none"
          >
            <div
              className={`w-12 h-12 rounded-xl p-2.5 flex items-center justify-center shadow-md border border-white/30 group-hover:scale-105 transition-transform ${item.iconBg}`}
            >
              <Icon className="w-full h-full" />
            </div>
            <span className="text-[10px] font-semibold text-gray-800 dark:text-gray-100 mt-1 px-1.5 py-0.5 rounded bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-xs border border-white/20 line-clamp-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
