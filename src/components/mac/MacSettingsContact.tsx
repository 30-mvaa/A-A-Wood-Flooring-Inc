import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sliders,
} from 'lucide-react';
import { QuoteFormData } from '../../types';
import { MacWindowFrame } from './MacWindowFrame';

interface MacSettingsContactProps {
  initialService?: string;
  initialSqft?: number;
}

export const MacSettingsContact: React.FC<MacSettingsContactProps> = ({
  initialService = 'Hardwood Flooring',
  initialSqft,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: initialService,
    squareFootage: initialSqft ? initialSqft.toString() : '',
    location: '',
    propertyType: 'residential',
    message: '',
  });

  const [activeTab, setActiveTab] = useState<'quote' | 'phone' | 'coverage' | 'hours'>('quote');
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for quotes.';
    } else if (!/^[\d\s\-\+\(\)]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please specify your city or zip code.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const servicesList = [
    'Hardwood Flooring (Solid / Engineered)',
    'Herringbone & Custom Geometric Patterns',
    'Dustless Sanding & Refinishing',
    'Luxury Vinyl Plank (LVP)',
    'Precision Floor Repair & Board Weaving',
    'Scraping & Buffing Maintenance',
    'Custom Wood Staining & Color Matching',
    'Flooring Remodeling & Baseboard Trim',
  ];

  return (
    <section id="contact" className="py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#C92227] mb-1">
          macOS System Settings
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] dark:text-white tracking-tight">
          LET'S BRING YOUR FLOORING PROJECT TO LIFE.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Configure your flooring project estimate and connect directly with our master craftsmen.
        </p>
      </div>

      <MacWindowFrame
        title="System Settings — A&A Wood Flooring, Inc. Configuration"
        subtitle="Licensed Contractor Profile"
        headerRight={
          <div className="flex items-center space-x-1.5 text-xs text-emerald-500 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">Online Dispatch</span>
          </div>
        }
      >
        <div className="flex flex-col md:flex-row min-h-[580px] bg-white dark:bg-[#1a1a1a]">
          {/* macOS Settings Left Navigation Panel */}
          <div className="w-full md:w-72 bg-[#F6F6F6] dark:bg-[#202020] border-r border-black/10 dark:border-white/10 p-4 sm:p-5 flex-shrink-0 select-none space-y-5">
            {/* User Profile Card */}
            <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 shadow-sm">
              <img
                src="/images/logo.png"
                alt="A&A Wood Flooring, Inc."
                className="w-11 h-11 object-contain rounded-xl p-1 bg-white"
              />
              <div className="truncate">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                  A&A Wood Flooring
                </h4>
                <p className="text-[11px] text-[#C92227] font-semibold">Verified Contractor</p>
                <p className="text-[10px] text-gray-400">10+ Yrs Licensed & Insured</p>
              </div>
            </div>

            {/* Settings Categories */}
            <div className="space-y-1 text-xs">
              <button
                onClick={() => setActiveTab('quote')}
                className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'quote'
                    ? 'bg-[#C92227] text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <Sliders className="w-4 h-4 opacity-80" />
                <span>Estimate Generator</span>
              </button>

              <button
                onClick={() => setActiveTab('phone')}
                className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'phone'
                    ? 'bg-[#C92227] text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4 opacity-80" />
                <span>Phone & Hotlines</span>
              </button>

              <button
                onClick={() => setActiveTab('coverage')}
                className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'coverage'
                    ? 'bg-[#C92227] text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <MapPin className="w-4 h-4 opacity-80" />
                <span>Tri-State Coverage</span>
              </button>

              <button
                onClick={() => setActiveTab('hours')}
                className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  activeTab === 'hours'
                    ? 'bg-[#C92227] text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <Clock className="w-4 h-4 opacity-80" />
                <span>Business Hours</span>
              </button>
            </div>

            {/* Quick Contact Snapshot */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2.5 text-xs text-gray-600 dark:text-gray-400">
              <a
                href="tel:9179304105"
                className="flex items-center space-x-2 hover:text-[#C92227] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C92227]" />
                <span className="font-bold text-gray-900 dark:text-white">(917) 930-4105</span>
              </a>
              <a
                href="tel:9178611492"
                className="flex items-center space-x-2 hover:text-[#C92227] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C92227]" />
                <span className="font-bold text-gray-900 dark:text-white">(917) 861-1492</span>
              </a>
              <a
                href="mailto:aawoodflooring22@gmail.com"
                className="flex items-center space-x-2 hover:text-[#C92227] transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#C92227]" />
                <span className="truncate">aawoodflooring22@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Form / Settings View */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
            {submitted ? (
              <div className="py-12 text-center space-y-4 max-w-md mx-auto animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C92227] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Estimate Request Dispatched!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Thank you, <strong className="text-gray-900 dark:text-white">{formData.fullName}</strong>. Your project details have been logged. We will reach you at <strong className="text-gray-900 dark:text-white">{formData.phone}</strong> to confirm your complimentary in-person consultation.
                </p>

                <div className="pt-4 space-y-2">
                  <a
                    href="tel:9179304105"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#C92227] hover:bg-[#AB1B20] text-white font-bold text-sm shadow-apple-red transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Directly (917) 930-4105</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        service: 'Hardwood Flooring',
                        squareFootage: '',
                        location: '',
                        propertyType: 'residential',
                        message: '',
                      });
                    }}
                    className="w-full text-xs text-gray-500 hover:underline py-2"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Request a Free On-Site Consultation
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We bring physical timber samples and laser measurement tools directly to your home.
                  </p>
                </div>

                {/* Property Type Segmented Control */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Property Configuration
                  </label>
                  <div className="inline-flex p-1 rounded-xl bg-[#F0F0F2] dark:bg-[#282828] border border-gray-200 dark:border-gray-700 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                      className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        formData.propertyType === 'residential'
                          ? 'bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      Residential Home / Apartment
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                      className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        formData.propertyType === 'commercial'
                          ? 'bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      Commercial / Retail Space
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Smith"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C92227] ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (917) 000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C92227] ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. michael@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C92227]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Project Location * (City / Zip)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Scarsdale, NY or 10583"
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C92227] ${
                        errors.location ? 'border-red-500 bg-red-50' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service & Square Footage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#C92227]"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Approximate Area (Sq. Ft.)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1,000 sq ft"
                      value={formData.squareFootage}
                      onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#C92227]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                    Project Notes / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe existing floor condition, timeline, species preferences (White Oak, Red Oak, Vinyl)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F6] dark:bg-[#282828] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C92227]"
                  />
                </div>

                {/* Primary macOS Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] shadow-apple-red transition-all duration-200 hover:scale-[1.01] active:scale-95 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Dispatching Request...</span>
                    </span>
                  ) : (
                    <>
                      <span>REQUEST A FREE ESTIMATE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Settings Footer */}
        <div className="h-8 px-4 bg-[#F6F6F6] dark:bg-[#202020] border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 select-none">
          <span>Official Contractor License & Insurance Verified</span>
          <span className="font-mono">System Settings › A&A Wood Flooring</span>
        </div>
      </MacWindowFrame>
    </section>
  );
};
