import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, HelpCircle } from 'lucide-react';

interface CinematicEstimatorProps {
  onSelectEstimate: (service: string, sqft: number) => void;
}

export const CinematicEstimator: React.FC<CinematicEstimatorProps> = ({
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
    <section id="estimator" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-[#E5A93C]/40 text-[#E5A93C] text-[11px] font-mono tracking-wider uppercase mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>02 // COMPUTATIONAL BUDGET ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ESTIMATE YOUR INVESTMENT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            Real-time projection matrix calibrated to current Tri-State materials, moisture barriers, and master labor.
          </p>
        </div>

        {/* Estimator Console */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#121217] border border-white/10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <label className="block text-xs font-mono font-bold text-[#E5A93C] uppercase tracking-wider mb-3">
                  01 / SELECT FLOORING DISCIPLINE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all text-xs ${
                        selectedService === srv.id
                          ? 'bg-[#E5A93C]/10 border-[#E5A93C] text-white shadow-[0_0_15px_rgba(229,169,60,0.2)]'
                          : 'bg-black/40 hover:bg-black/70 border-white/10 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{srv.name}</span>
                        {selectedService === srv.id && (
                          <span className="w-4 h-4 rounded-full bg-[#E5A93C] text-black flex items-center justify-center font-bold">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">{srv.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Footage Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold text-[#E5A93C] uppercase tracking-wider">
                    02 / SQUARE FOOTAGE CALIBRATION
                  </label>
                  <span className="text-xl font-black text-white font-mono">
                    {sqft.toLocaleString()} <span className="text-xs text-[#E5A93C] uppercase font-bold">SQ. FT.</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="50"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2.5 bg-black rounded-lg appearance-none cursor-pointer accent-[#E5A93C]"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500 mt-2">
                  <span>Single Room (200 sq ft)</span>
                  <span>Average Home (1,200 sq ft)</span>
                  <span>Estate (3,500 sq ft)</span>
                </div>
              </div>

              {/* Stairs Checkbox */}
              <div>
                <label className="flex items-center space-x-3 cursor-pointer text-xs font-medium text-gray-300 select-none">
                  <input
                    type="checkbox"
                    checked={includeStairs}
                    onChange={(e) => setIncludeStairs(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-700 text-[#E5A93C] focus:ring-[#E5A93C] bg-black"
                  />
                  <span>Include Hardwood Staircase / Treads & Risers Refinishing (+$750 est.)</span>
                </label>
              </div>
            </div>

            {/* Live Operational Result HUD */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0B0B0E] border border-[#E5A93C]/40 shadow-[0_0_30px_rgba(229,169,60,0.15)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono">
                  <span className="text-[#E5A93C] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>INVESTMENT MATRIX</span>
                  </span>
                  <span className="text-emerald-400 font-bold">LIVE CALC</span>
                </div>

                <div className="my-4">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    ESTIMATED TOTAL INVESTMENT
                  </p>
                  <div className="text-3xl sm:text-4xl font-black text-[#E5A93C] font-mono tracking-tight mt-1 drop-shadow-[0_0_20px_rgba(229,169,60,0.25)]">
                    ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5 font-mono">
                    Based on {sqft} sq ft for {currentService.name}
                  </p>
                </div>

                <div className="bg-[#121217] rounded-xl p-4 text-xs text-gray-300 space-y-2 my-6 border border-white/5 font-mono">
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>Labor, tools & site dust protection included</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>Free on-site laser precision inspection</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Check className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>10+ Years Licensed & Insured Contractor</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleLockIn}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-xs font-mono font-black uppercase tracking-wider text-black bg-[#E5A93C] hover:bg-[#F3C978] shadow-[0_0_25px_rgba(229,169,60,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>LOCK IN THIS FREE ESTIMATE</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <p className="text-[10px] text-gray-500 font-mono text-center mt-2.5 flex items-center justify-center space-x-1">
                  <HelpCircle className="w-3 h-3" />
                  <span>Exact quotation confirmed during complimentary on-site visit</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
