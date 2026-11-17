import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export const CinematicCoverage: React.FC = () => {
  const regions = [
    {
      state: 'NEW YORK',
      badge: 'RESIDENTIAL & COMMERCIAL',
      areas: [
        'New York City (All 5 Boroughs)',
        'Manhattan & Historic Brownstones',
        'Brooklyn & Queens',
        'Westchester County',
        'Long Island (Nassau & Suffolk)',
        'Rockland & Orange Counties',
      ],
    },
    {
      state: 'NEW JERSEY',
      badge: 'NORTHERN & CENTRAL NJ',
      areas: [
        'Hoboken & Jersey City',
        'Bergen County',
        'Hudson & Essex Counties',
        'Union & Morris Counties',
        'Passaic & Middlesex',
        'Monmouth County',
      ],
    },
    {
      state: 'CONNECTICUT',
      badge: 'TRI-STATE HUB',
      areas: [
        'Meriden & Central CT Hub',
        'Fairfield County (Greenwich, Stamford)',
        'New Haven & Shoreline',
        'Hartford County',
        'Norwalk, Westport & Darien',
        'Waterbury & Surrounding Towns',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-[#E5A93C]/40 text-[#E5A93C] text-[11px] font-mono tracking-wider uppercase mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>09 // TRI-STATE COVERAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            SERVICE AREAS ACROSS NY, NJ & CT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 font-light">
            We deploy specialized crews with in-home timber displays directly throughout the metropolitan and suburban Tri-State region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#E5A93C]/40 shadow-card-dark transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <h3 className="text-xl font-black text-white font-mono flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#E5A93C]" />
                    <span>{region.state}</span>
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#E5A93C] bg-[#E5A93C]/10 border border-[#E5A93C]/30 px-2 py-0.5 rounded">
                    {region.badge}
                  </span>
                </div>

                <div className="space-y-2 mt-4 text-xs font-mono text-gray-300">
                  {region.areas.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C] flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Free On-Site Travel</span>
                <span className="text-emerald-400 font-bold">● Active Dispatch</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
