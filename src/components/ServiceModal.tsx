import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
          <img
            loading="lazy"
            decoding="async"
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all duration-200"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#C92227] text-xs font-bold uppercase tracking-wider mb-2">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{service.title}</h3>
            <p className="text-sm text-gray-200 mt-1">{service.tagline}</p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-base text-gray-700 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Specifications & Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-2 text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#C92227] mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-[#F5F5F7] rounded-2xl p-5 border border-gray-200">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Our 5-Step Execution Process</h4>
            <ol className="space-y-2 text-sm text-gray-700">
              {service.process.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#111111] text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Ideal For */}
          <div className="border-l-4 border-[#C92227] pl-4 py-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ideal Application</p>
            <p className="text-sm text-gray-800 font-medium mt-0.5">{service.idealFor}</p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="tel:9179304105"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 text-sm font-semibold text-gray-800 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C92227]" />
            <span>(917) 930-4105</span>
          </a>

          <button
            onClick={() => {
              onRequestQuote(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 text-sm font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-xl shadow-apple-red transition-all duration-200 hover:scale-[1.02]"
          >
            <span>Request Free Estimate for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
