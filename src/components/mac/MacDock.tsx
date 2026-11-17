import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import {
  Home,
  FolderKanban,
  Calculator,
  Image,
  Sliders,
  MessageSquare,
  Settings,
  Phone,
  Sparkles,
} from 'lucide-react';

interface DockItemData {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  targetId: string;
}

interface MacDockProps {
  activeSection: string;
  onOpenQuote: () => void;
}

function DockIcon({
  mouseX,
  item,
  isActive,
  onClick,
}: {
  mouseX: MotionValue<number>;
  item: DockItemData;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [48, 70, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 });

  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center rounded-2xl group transition-all focus:outline-none"
      aria-label={item.label}
    >
      {/* Tooltip on hover */}
      <div className="absolute -top-11 px-3 py-1 rounded-md bg-black/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10 dark:border-black/10">
        {item.label}
      </div>

      {/* App Icon Container */}
      <div
        className={`w-full h-full rounded-2xl p-2.5 flex items-center justify-center shadow-md transition-transform duration-200 border border-white/25 active:scale-90 ${item.bgColor}`}
      >
        <Icon className={`w-full h-full ${item.color}`} />
      </div>

      {/* Active Dot Indicator under running app */}
      <div className="h-1 mt-1 flex items-center justify-center">
        {isActive ? (
          <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-[#111111] shadow-sm" />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
        )}
      </div>
    </motion.button>
  );
}

export const MacDock: React.FC<MacDockProps> = ({ activeSection, onOpenQuote }) => {
  const mouseX = useMotionValue(Infinity);

  const dockItems: DockItemData[] = [
    {
      id: 'home',
      label: 'Finder / Home',
      icon: Home,
      color: 'text-white',
      bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700',
      targetId: 'home',
    },
    {
      id: 'services',
      label: 'Services Finder',
      icon: FolderKanban,
      color: 'text-white',
      bgColor: 'bg-gradient-to-b from-[#C92227] to-red-800',
      targetId: 'services',
    },
    {
      id: 'estimator',
      label: 'Cost Estimator',
      icon: Calculator,
      color: 'text-white',
      bgColor: 'bg-gradient-to-b from-amber-500 to-orange-600',
      targetId: 'estimator',
    },
    {
      id: 'gallery',
      label: 'Photos / Gallery',
      icon: Image,
      color: 'text-white',
      bgColor: 'bg-gradient-to-b from-teal-500 to-emerald-700',
      targetId: 'gallery',
    },
    {
      id: 'before-after',
      label: 'Restoration Slider',
      icon: Sliders,
      color: 'text-white',
      bgColor: 'bg-gradient-to-b from-purple-500 to-indigo-700',
      targetId: 'before-after',
    },
    {
      id: 'reviews',
      label: 'Reviews & Messages',
      icon: MessageSquare,
      color: 'text-white',
      bgColor: 'bg-gradient-to-b from-green-500 to-emerald-600',
      targetId: 'reviews',
    },
    {
      id: 'contact',
      label: 'System Settings / Contact',
      icon: Settings,
      color: 'text-gray-100',
      bgColor: 'bg-gradient-to-b from-gray-700 to-gray-900',
      targetId: 'contact',
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 flex justify-center pointer-events-none px-2">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end h-[68px] sm:h-[72px] gap-2 px-3 pb-2 rounded-2xl sm:rounded-3xl bg-black/45 dark:bg-white/20 backdrop-blur-3xl border border-white/20 dark:border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      >
        {dockItems.map((item) => (
          <DockIcon
            key={item.id}
            mouseX={mouseX}
            item={item}
            isActive={activeSection === item.id}
            onClick={() => scrollTo(item.targetId)}
          />
        ))}

        {/* Vertical Divider */}
        <div className="w-[1px] h-9 bg-white/20 mx-1 mb-3 self-center" />

        {/* Quick Phone Call Button */}
        <a
          href="tel:9179304105"
          className="relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl group transition-all"
          title="Call (917) 930-4105"
        >
          <div className="absolute -top-11 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10">
            Direct Line (917) 930-4105
          </div>
          <div className="w-full h-full rounded-2xl p-2.5 flex items-center justify-center shadow-md bg-gradient-to-b from-emerald-500 to-green-700 border border-white/25 active:scale-90 transition-transform">
            <Phone className="w-full h-full text-white" />
          </div>
          <div className="h-1 mt-1" />
        </a>

        {/* Request Quote Button */}
        <button
          onClick={onOpenQuote}
          className="relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl group transition-all"
          title="Request Free Quote"
        >
          <div className="absolute -top-11 px-3 py-1 rounded-md bg-[#C92227] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Free Estimate
          </div>
          <div className="w-full h-full rounded-2xl p-2.5 flex items-center justify-center shadow-md bg-gradient-to-b from-[#C92227] to-red-800 border border-white/25 active:scale-90 transition-transform">
            <Sparkles className="w-full h-full text-white" />
          </div>
          <div className="h-1 mt-1" />
        </button>
      </motion.div>
    </div>
  );
};
