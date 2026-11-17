import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { MacWindowFrame } from './MacWindowFrame';

interface MacEstimatorWindowProps {
  onSelectEstimate: (service: string, sqft: number) => void;
}

export const MacEstimatorWindow: React.FC<MacEstimatorWindowProps> = ({
  onSelectEstimate,
}) => {
  const [selectedService, setSelectedService] = useState('refinishing');
  const [sqft, setSqft] = useState(850);
  const [includeStairs, setIncludeStairs] = useState(false);

  const services = [
    {
      id: 'hardwood',
      name: 'Hardwood Flooring',
      desc: 'Solid or Engineered Wood Installation',
      baseMin: 8,
      baseMax: 14,
    },
    {
      id: 'refinishing',
      name: 'Sanding & Refinishing',
      desc: 'Dustless Sanding, Staining & Clear Polyurethane',
      baseMin: 4,
      baseMax: 7,
    },
    {
      id: 'vinyl',
      name: 'Luxury Vinyl Plank (LVP)',
      desc: '100% Waterproof Rigid Core & Underlayment',
      baseMin: 5,
      baseMax: 9,
    },
    {
      id: 'herringbone',
      name: 'Herringbone & Custom Patterns',
      desc: 'Geometric Parquet & Precision Inlay Borders',
      baseMin: 12,
      baseMax: 19,
    },
    {
      id: 'repair',
      name: 'Precision Floor Repair',
      desc: 'Board Weaving, Squeak & Water Restoration',
      baseMin: 6,
      baseMax: 10,
    },
  ];

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const stairCost = includeStairs ? 750 : 0;
  const estimatedMin = Math.round(sqft * currentService.baseMin + stairCost);
  const estimatedMax = Math.round(sqft * currentService.baseMax + stairCost);

  const handleLockIn = () => {
    onSelectEstimate(currentService.name, sqft);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS Utility Calculator
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          PROJECT COST ESTIMATOR
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Compute real-time project estimate ranges tailored for New York, New Jersey, and Connecticut.
        </p>
      </div>

      <MacWindowFrame
        title="Calculator — Flooring Investment Estimator"
        subtitle="Version 2.0"
        headerRight={
          <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
            <span>Tri-State Rates</span>
          </div>
        }
      >
        <div className="p-6 sm:p-10 bg-white dark:bg-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Area */}
            <div className="lg:col-span-7 space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2.5">
                  1. Select Flooring Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        selectedService === srv.id
                          ? 'bg-[#C92227]/5 border-[#C92227] text-gray-900 dark:text-white ring-1 ring-[#C92227]'
                          : 'bg-[#F9F9FA] dark:bg-[#252525] hover:bg-gray-100 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold">{srv.name}</span>
                        {selectedService === srv.id && (
                          <span className="w-4 h-4 rounded-full bg-[#C92227] text-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{srv.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    2. Approximate Area
                  </label>
                  <span className="text-lg font-black text-[#C92227]">
                    {sqft.toLocaleString()} <span className="text-xs font-semibold text-gray-500 uppercase">sq. ft.</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="50"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C92227]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>Small Room (200 sq ft)</span>
                  <span>Average Home (1,200 sq ft)</span>
                  <span>Estate (3,500 sq ft)</span>
                </div>
              </div>

              {/* Staircase Checkbox */}
              <div>
                <label className="flex items-center space-x-2.5 cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300 select-none">
                  <input
                    type="checkbox"
                    checked={includeStairs}
                    onChange={(e) => setIncludeStairs(e.target.checked)}
                    className="w-4 h-4 text-[#C92227] rounded border-gray-300 focus:ring-[#C92227]"
                  />
                  <span>Include Hardwood Staircase / Treads & Risers Refinishing</span>
                </label>
              </div>
            </div>

            {/* macOS Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F6F6F6] dark:bg-[#252525] border border-gray-200 dark:border-gray-700 text-center flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/10 text-[#C92227] text-xs font-bold mb-3 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Estimated Investment Range</span>
                </div>

                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Total Estimate</p>
                <div className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight mt-1">
                  ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Based on {sqft} sq ft for {currentService.name}
                </p>

                <div className="bg-white dark:bg-[#1f1f1f] rounded-xl p-3 text-xs text-gray-600 dark:text-gray-300 text-left space-y-1.5 my-5 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>Includes labor, equipment & clean-up</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>Free in-person laser measurement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>Licensed, insured & guaranteed</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleLockIn}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-xl shadow-apple-red transition-all duration-200 hover:scale-[1.01] active:scale-95"
                >
                  <span>Lock In This Free Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <p className="text-[10px] text-gray-400 mt-2 flex items-center justify-center space-x-1">
                  <HelpCircle className="w-3 h-3 text-gray-400" />
                  <span>Actual price confirmed after free on-site consultation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MacWindowFrame>
    </section>
  );
};
