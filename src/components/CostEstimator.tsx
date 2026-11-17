import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, HelpCircle } from 'lucide-react';

interface CostEstimatorProps {
  onSelectEstimate: (service: string, sqft: number) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onSelectEstimate }) => {
  const [selectedService, setSelectedService] = useState('refinishing');
  const [sqft, setSqft] = useState(850);
  const [includeStairs, setIncludeStairs] = useState(false);

  const services = [
    {
      id: 'hardwood',
      name: 'Hardwood Flooring',
      desc: 'Installation of Solid or Engineered Wood',
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
    <section id="estimator" className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F5F5F7] text-[#C92227] text-xs font-bold tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            Estimate Your Flooring Investment.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Transparent pricing with zero surprises. Customize your room dimensions to see instant estimate ranges for the Tri-State area.
          </p>
        </div>

        <div className="bg-[#F5F5F7] rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-apple-md max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  1. Select Flooring Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 ${
                        selectedService === srv.id
                          ? 'bg-white border-[#C92227] shadow-sm text-gray-900 ring-1 ring-[#C92227]'
                          : 'bg-white/60 hover:bg-white border-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{srv.name}</span>
                        {selectedService === srv.id && (
                          <span className="w-5 h-5 rounded-full bg-[#C92227] text-white flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{srv.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Footage Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    2. Approximate Area
                  </label>
                  <span className="text-xl font-extrabold text-[#C92227]">
                    {sqft.toLocaleString()} <span className="text-xs font-semibold text-gray-600 uppercase">sq. ft.</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="50"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C92227]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                  <span>Small Room (200 sq ft)</span>
                  <span>Average Home (1,200 sq ft)</span>
                  <span>Large Estate (3,500 sq ft)</span>
                </div>
              </div>

              {/* Extra Add-on Checkbox */}
              <div className="pt-2">
                <label className="flex items-center space-x-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeStairs}
                    onChange={(e) => setIncludeStairs(e.target.checked)}
                    className="w-5 h-5 text-[#C92227] rounded border-gray-300 focus:ring-[#C92227]"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    Include Hardwood Staircase / Treads & Risers Refinishing
                  </span>
                </label>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-apple-lg text-center flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C92227] text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Estimated Budget Range</span>
                </div>

                <div className="my-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Estimated Total</p>
                  <div className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight mt-1">
                    ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Based on {sqft} sq ft for {currentService.name}
                  </p>
                </div>

                <div className="bg-[#F5F5F7] rounded-xl p-3.5 text-xs text-gray-600 text-left space-y-1.5 my-6">
                  <div className="flex items-center space-x-2 text-gray-800 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>Includes labor, equipment & clean-up</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-800 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>100% Free in-person precise measurement</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-800 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#C92227]" />
                    <span>Licensed, insured & satisfaction guaranteed</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleLockIn}
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-xl shadow-apple-red transition-all duration-200 hover:scale-[1.02] active:scale-95"
                >
                  <span>Lock In This Free Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <p className="text-[11px] text-gray-400 mt-2 flex items-center justify-center space-x-1">
                  <HelpCircle className="w-3 h-3 text-gray-400" />
                  <span>Actual price confirmed after free on-site consultation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
