import React from 'react';
import { MapPin, Clock, CheckCircle2, Phone } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const regions = [
    {
      state: 'New York',
      badge: 'Residential & Commercial',
      areas: [
        'New York City (All 5 Boroughs)',
        'Manhattan & Brownstone Districts',
        'Brooklyn & Queens',
        'Westchester County',
        'Long Island (Nassau & Suffolk)',
        'Rockland & Orange Counties',
      ],
    },
    {
      state: 'New Jersey',
      badge: 'Northern & Central NJ',
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
      state: 'Connecticut',
      badge: 'Tri-State Coverage',
      areas: [
        'Meriden & Central CT',
        'Fairfield County (Greenwich, Stamford)',
        'New Haven & Shoreline',
        'Hartford County',
        'Norwalk, Westport & Darien',
        'Waterbury & Surrounding Towns',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-50 text-[#C92227] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Tri-State Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            Service Areas Across NY, NJ & CT.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            We provide on-site evaluations, timber consultations, and precision installations throughout the greater metropolitan and suburban Tri-State area.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F7] rounded-3xl p-8 border border-gray-200/80 shadow-apple-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-extrabold text-[#111111] flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-[#C92227]" />
                    <span>{region.state}</span>
                  </h3>
                  <span className="text-[11px] font-bold text-[#C92227] bg-white px-3 py-1 rounded-full border border-gray-200">
                    {region.badge}
                  </span>
                </div>

                <div className="space-y-2.5 mt-6">
                  {region.areas.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-center space-x-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C92227] flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60 text-xs text-gray-500 flex items-center justify-between">
                <span>Free On-Site Travel</span>
                <span className="font-semibold text-gray-800">Prompt Scheduling</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Hours & Dispatch Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111111] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C92227]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C92227] font-bold">Business Operating Hours</p>
              <p className="text-base font-bold text-white">Monday – Saturday: 7:00 AM – 6:00 PM</p>
              <p className="text-xs text-gray-400">Emergency & Commercial Weekend Appointments Available</p>
            </div>
          </div>

          <a
            href="tel:9179304105"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold bg-[#C92227] hover:bg-[#AB1B20] text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call (917) 930-4105</span>
          </a>
        </div>
      </div>
    </section>
  );
};
