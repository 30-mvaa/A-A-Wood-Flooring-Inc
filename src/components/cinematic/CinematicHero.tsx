import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface CinematicHeroProps {
  onOpenQuote: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenQuote }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0B0B0E]"
    >
      {/* Background Room with Hardwood Flooring in Perspective */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* User reference room with hardwood floor and window light */}
        <motion.div
          animate={{
            x: mousePos.x * -15,
            y: mousePos.y * -15,
            scale: 1.03,
          }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className="w-full h-full relative"
        >
          <img
            src="/images/room-mockup.png"
            alt="A&A Wood Flooring Luxury Room"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]"
          />
        </motion.div>

        {/* Ambient Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E]/80 via-transparent to-[#0B0B0E]/60" />

        {/* Soft Red Ambient Glows */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#C92227]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Floating 3D Emblem (Matching User's Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center relative select-none"
          >
            {/* Floating Emblem Container with Animated Physics */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateZ: [0, 1, 0, -1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              className="relative group cursor-pointer"
            >
              {/* Backglow behind emblem */}
              <div className="absolute inset-0 bg-[#C92227]/30 rounded-3xl blur-2xl group-hover:bg-[#C92227]/50 transition-all duration-500 scale-90" />

              {/* The Shield Logo Image */}
              <img
                src="/images/logo.png"
                alt="A&A Wood Flooring Emblem"
                className="relative z-10 w-64 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-105"
              />

              {/* Floating Dynamic Floor Shadow */}
              <motion.div
                animate={{
                  scale: [1, 0.85, 1],
                  opacity: [0.6, 0.35, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
                className="w-48 sm:w-60 h-6 bg-black/70 blur-md rounded-full mx-auto mt-2"
              />
            </motion.div>

            {/* Stylized Under-Title Matching Mockup: "WOOD FLOORING, INC" */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-3 text-center lg:text-left"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-widest uppercase text-white/90 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] font-mono">
                WOOD FLOORING, INC
              </h2>
              <p className="text-[11px] font-mono font-bold text-[#C92227] tracking-widest uppercase mt-0.5">
                QUALITY • DESIGN • DURABILITY
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Headline & Action Buttons (Matching User's Mockup) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#C92227]/40 text-[#C92227] text-xs font-mono tracking-wider uppercase shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C92227] animate-pulse" />
              <span>10+ YEARS EXPERIENCE • LICENSED & INSURED</span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="text-gray-300 hidden sm:inline">NY • NJ • CT</span>
            </motion.div>

            {/* Main Headline from User's Image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="space-y-1"
            >
              <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-200 tracking-wide">
                Welcome to
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#C92227] leading-[1.05] drop-shadow-[0_0_35px_rgba(201,34,39,0.45)]">
                A&A Wood Flooring, Inc
              </h1>
            </motion.div>

            {/* Subtitle from User's Image */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-base sm:text-xl text-white font-bold tracking-tight max-w-xl mx-auto lg:mx-0 drop-shadow-md"
            >
              Your Style — Our Quality Workmanship — The Perfect Match.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Specializing in solid hardwood installations, custom herringbone designs, dustless sanding, and waterproof luxury vinyl plank across New York, New Jersey, and Connecticut.
            </motion.p>

            {/* Dual Buttons (Matching the Red & Dark Buttons from Mockup) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* Red Phone Button with Animation */}
              <a
                href="tel:9179304105"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-[#C92227] hover:bg-[#AB1B20] shadow-[0_0_25px_rgba(201,34,39,0.45)] transition-all duration-200 hover:scale-[1.02] active:scale-95 group"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <Phone className="w-4 h-4 text-white" />
                <span>(917) 930-4105</span>
              </a>

              {/* Dark Button: Get A Free Quote */}
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-[#111111]/90 hover:bg-black border border-white/20 hover:border-[#C92227]/50 backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <span>Get A Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C92227]" />
              </button>
            </motion.div>

            {/* Quick Consultation Lines */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-gray-300">
              <span className="text-gray-400">Direct Lines:</span>
              <a href="tel:9179304105" className="hover:text-[#C92227] font-bold text-white transition-colors">
                (917) 930-4105
              </a>
              <span className="text-gray-600">|</span>
              <a href="tel:9178611492" className="hover:text-[#C92227] font-bold text-white transition-colors">
                (917) 861-1492
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metrics HUD Strip (with all numbers & highlights in RED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {/* Card 1 */}
          <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/10 hover:border-[#C92227]/50 transition-all flex flex-col justify-between shadow-card-dark">
            <p className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
              PROJECTS COMPLETED
            </p>
            <div className="my-2">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">1,500+</span>
              <span className="text-xs font-mono font-bold text-[#C92227] ml-1.5 uppercase">Homes</span>
            </div>
            <p className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
              <span>▲ +12% YoY Precision</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/10 hover:border-[#C92227]/50 transition-all flex flex-col justify-between shadow-card-dark">
            <p className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
              CLIENT SATISFACTION
            </p>
            <div className="my-2">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">99.8</span>
              <span className="text-base font-black text-[#C92227] ml-1">%</span>
            </div>
            <p className="text-[11px] font-mono text-gray-300">
              • 5-Star Certified Workmanship
            </p>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/10 hover:border-[#C92227]/50 transition-all flex flex-col justify-between shadow-card-dark">
            <p className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
              HEPA DUSTLESS RESTORATION
            </p>
            <div className="my-2">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">99.97</span>
              <span className="text-xs font-mono font-bold text-[#C92227] ml-1 uppercase">Air Clean</span>
            </div>
            <p className="text-[11px] font-mono text-gray-300">
              • Zero Airborne Dust Particles
            </p>
          </div>

          {/* Card 4: Right Live Operational HUD Card */}
          <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-[#121217]/95 backdrop-blur-2xl border border-[#C92227]/40 shadow-[0_0_25px_rgba(201,34,39,0.2)] flex flex-col justify-between text-xs font-mono">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                <span className="flex items-center space-x-1.5 text-emerald-400 font-bold uppercase text-[10px] tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>ACTIVE FIELD DISPATCH</span>
                </span>
                <span className="text-[10px] text-gray-400">NY • NJ • CT</span>
              </div>

              <div className="space-y-1 text-[11px] text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">REGION:</span>
                  <span className="font-bold text-white">TRI-STATE AREA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">HOURS:</span>
                  <span className="text-[#C92227] font-bold">MON–SAT 7AM–6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">STATUS:</span>
                  <span className="text-emerald-400 font-bold">OPTIMAL (100%)</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 mt-2 flex items-center justify-between">
              <a
                href="tel:9179304105"
                className="text-white hover:text-[#C92227] font-bold text-xs flex items-center space-x-1"
              >
                <Phone className="w-3 h-3 text-[#C92227]" />
                <span>(917) 930-4105</span>
              </a>
              <span className="text-[10px] text-gray-400">Direct Line</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-gray-400 gap-3">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="text-gray-500 font-bold">WORKFLOW:</span>
          <span><strong className="text-[#C92227]">01</strong> / IN-HOME ESTIMATE & MOISTURE TESTING</span>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <span><strong className="text-[#C92227]">02</strong> / BOARD ACCLIMATION & LASER LEVELING</span>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <span><strong className="text-[#C92227]">03</strong> / ARTISAN JOINERY & DUSTLESS FINISH</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-300">
          <ShieldCheck className="w-4 h-4 text-[#C92227]" />
          <span>Licensed & Comprehensively Insured</span>
        </div>
      </div>
    </section>
  );
};
