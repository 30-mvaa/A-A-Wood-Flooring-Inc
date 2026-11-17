import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'installation', label: 'Hardwood & Patterns' },
    { id: 'restoration', label: 'Sanding & Refinishing' },
    { id: 'resilient', label: 'Luxury Vinyl & Modern' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'installation') {
      return service.id === 'hardwood-flooring' || service.id === 'herringbone-custom-designs' || service.id === 'remodeling-renovations';
    }
    if (activeFilter === 'restoration') {
      return service.id === 'floor-sanding-refinishing' || service.id === 'floor-repair' || service.id === 'scraping-buffing' || service.id === 'custom-staining';
    }
    if (activeFilter === 'resilient') {
      return service.id === 'vinyl-flooring';
    }
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C92227] mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            PROFESSIONAL FLOORING SERVICES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Delivering peerless precision, premium timber selections, and dustless finishing techniques tailored to residential and commercial properties throughout New York, New Jersey, and Connecticut.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-apple-sm hover:shadow-apple-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={`${service.title} by A&A Wood Flooring`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {service.popular && (
                    <div className="absolute top-3 right-3 inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#C92227] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Requested</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlight feature pills */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#C92227] flex-shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-xs font-bold text-[#111111] hover:text-[#C92227] tracking-wider uppercase transition-colors"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#C92227] bg-red-50 hover:bg-[#C92227] hover:text-white transition-all duration-200"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Reminder Strip */}
        <div className="mt-16 bg-[#111111] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">Need a Custom Wood Species or Pattern?</h4>
            <p className="text-sm text-gray-300 mt-1">
              We source custom milled timber, exotic hardwoods, and bespoke geometric designs for residential and commercial spaces.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:9179304105"
              className="px-6 py-3 rounded-full text-sm font-bold bg-white text-[#111111] hover:bg-gray-100 transition-colors"
            >
              Call (917) 930-4105
            </a>
            <button
              onClick={() => onSelectServiceForQuote('Custom Flooring Specification')}
              className="px-6 py-3 rounded-full text-sm font-bold bg-[#C92227] hover:bg-[#AB1B20] text-white shadow-apple-red transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onSelectServiceForQuote}
      />
    </section>
  );
};
