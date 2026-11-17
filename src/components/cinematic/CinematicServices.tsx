import React, { useState } from 'react';
import { Check, Eye } from 'lucide-react';
import { servicesData } from '../../data/services';
import { ServiceItem } from '../../types';
import { ServiceModal } from '../ServiceModal';

interface CinematicServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const CinematicServices: React.FC<CinematicServicesProps> = ({
  onSelectServiceForQuote,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL DISCIPLINES (8)' },
    { id: 'installation', label: 'HARDWOOD & PATTERNS' },
    { id: 'restoration', label: 'DUSTLESS SANDING & RESTORATION' },
    { id: 'vinyl', label: 'LUXURY VINYL PLANK' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'installation') {
      return (
        service.id === 'hardwood-flooring' ||
        service.id === 'herringbone-custom-designs' ||
        service.id === 'remodeling-renovations'
      );
    }
    if (activeCategory === 'restoration') {
      return (
        service.id === 'floor-sanding-refinishing' ||
        service.id === 'floor-repair' ||
        service.id === 'scraping-buffing' ||
        service.id === 'custom-staining'
      );
    }
    if (activeCategory === 'vinyl') {
      return service.id === 'vinyl-flooring';
    }
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5A93C] uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
              <span>01 // SPECIALIZED DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              ENGINEERED & ARTISANAL SERVICES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl font-light">
              Master timber joinery, subfloor laser calibration, and proprietary multi-coat protective finishes engineered for generations of durability.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#E5A93C] text-black font-black shadow-[0_0_15px_rgba(229,169,60,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-[#121217] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E5A93C]/50 shadow-card-dark transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image Section */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-90" />

                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-gray-300">
                    0{idx + 1} / 08
                  </div>

                  {service.popular && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#E5A93C] text-black text-[10px] font-bold uppercase tracking-wider font-mono shadow">
                      FEATURED
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-4 right-4">
                    <span className="text-[10px] font-mono text-[#E5A93C] uppercase tracking-widest block mb-0.5">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/5 text-[11px] text-gray-300">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 truncate">
                        <Check className="w-3.5 h-3.5 text-[#E5A93C] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-gray-300 hover:text-[#E5A93C] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>SPECS & DETAILS</span>
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-black bg-[#E5A93C] hover:bg-[#F3C978] transition-colors"
                >
                  QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onSelectServiceForQuote}
      />
    </section>
  );
};
