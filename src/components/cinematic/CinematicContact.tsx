import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { QuoteFormData } from '../../types';

interface CinematicContactProps {
  initialService?: string;
  initialSqft?: number;
}

export const CinematicContact: React.FC<CinematicContactProps> = ({
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
    <section id="contact" className="py-24 bg-[#0B0B0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Operational Dispatch Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-black/60 border border-[#E5A93C]/40 text-[#E5A93C] text-[11px] font-mono tracking-wider uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>07 // ACTIVE DISPATCH CONSOLE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                LET'S BRING YOUR FLOORING PROJECT TO LIFE.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                Connect directly with our master estimators. We arrive on-site with physical timber samples, stain swatches, and subfloor moisture measurement tools.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 font-mono text-xs">
              {/* Phone Lines */}
              <div className="p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#E5A93C]/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 text-[#E5A93C] flex items-center justify-center flex-shrink-0 border border-[#E5A93C]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">DIRECT HOTLINES</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-base font-black text-white mt-1">
                      <a href="tel:9179304105" className="hover:text-[#E5A93C] transition-colors">
                        (917) 930-4105
                      </a>
                      <span className="text-gray-600 hidden sm:inline">|</span>
                      <a href="tel:9178611492" className="hover:text-[#E5A93C] transition-colors">
                        (917) 861-1492
                      </a>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">Immediate consultation & estimate booking</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#E5A93C]/40 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 text-[#E5A93C] flex items-center justify-center flex-shrink-0 border border-[#E5A93C]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">EMAIL ESTIMATES</p>
                    <a
                      href="mailto:aawoodflooring22@gmail.com"
                      className="text-sm font-black text-white hover:text-[#E5A93C] transition-colors block mt-1"
                    >
                      aawoodflooring22@gmail.com
                    </a>
                    <p className="text-[11px] text-gray-400 mt-0.5">Send architectural blueprints or photos</p>
                  </div>
                </div>
              </div>

              {/* Hours & Coverage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#121217] border border-white/10">
                  <div className="flex items-center space-x-2 text-[#E5A93C] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold text-gray-400">REGIONS</span>
                  </div>
                  <p className="text-xs font-bold text-white">NY • NJ • CT</p>
                  <p className="text-[10px] text-gray-400">Meriden CT, Tri-State</p>
                </div>

                <div className="p-4 rounded-xl bg-[#121217] border border-white/10">
                  <div className="flex items-center space-x-2 text-[#E5A93C] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold text-gray-400">OPERATING HOURS</span>
                  </div>
                  <p className="text-xs font-bold text-white">MON–SAT: 7AM–6PM</p>
                  <p className="text-[10px] text-gray-400">Prompt turnaround</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quotation Request Form */}
          <div className="lg:col-span-7 bg-[#121217] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 max-w-md mx-auto animate-fadeIn font-mono">
                <div className="w-16 h-16 rounded-full bg-[#E5A93C]/10 text-[#E5A93C] flex items-center justify-center mx-auto border border-[#E5A93C]/30 shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  ESTIMATE REQUEST LOGGED!
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Our estimating coordinator will contact you at <strong className="text-white">{formData.phone}</strong> within 24 hours to schedule your free in-home measurement.
                </p>

                <div className="pt-4 space-y-2">
                  <a
                    href="tel:9179304105"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#E5A93C] hover:bg-[#F3C978] text-black font-black text-xs uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL DIRECTLY FOR IMMEDIATE RESPONSE</span>
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
                    className="w-full text-xs text-gray-500 hover:text-white py-2"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide">
                    Request a Free On-Site Estimate
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Complete this form and our field coordinator will reach out promptly.
                  </p>
                </div>

                {/* Property Configuration */}
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5A93C] mb-2">
                    PROPERTY TYPE
                  </label>
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                      className={`py-3 rounded-xl border transition-all ${
                        formData.propertyType === 'residential'
                          ? 'bg-[#E5A93C] text-black font-black border-[#E5A93C]'
                          : 'bg-black/50 text-gray-400 border-white/10 hover:border-white/25'
                      }`}
                    >
                      Residential Home / Condo
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                      className={`py-3 rounded-xl border transition-all ${
                        formData.propertyType === 'commercial'
                          ? 'bg-[#E5A93C] text-black font-black border-[#E5A93C]'
                          : 'bg-black/50 text-gray-400 border-white/10 hover:border-white/25'
                      }`}
                    >
                      Commercial Space
                    </button>
                  </div>
                </div>

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C] ${
                        errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-white/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (917) 000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C] ${
                        errors.phone ? 'border-red-500 bg-red-950/20' : 'border-white/10'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                      EMAIL ADDRESS (OPTIONAL)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                      PROJECT LOCATION * (CITY / ZIP)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Scarsdale, NY or 10583"
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C] ${
                        errors.location ? 'border-red-500 bg-red-950/20' : 'border-white/10'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service & Square Footage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                      SERVICE INTERESTED IN
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white focus:outline-none focus:border-[#E5A93C]"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-black">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                      APPROX. AREA (SQ. FT.)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1,000 sq ft"
                      value={formData.squareFootage}
                      onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-1">
                    PROJECT NOTES / TIMELINE
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe floor condition, preferred wood species, or scheduling needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-xs font-mono font-black uppercase tracking-widest text-black bg-[#E5A93C] hover:bg-[#F3C978] shadow-[0_0_25px_rgba(229,169,60,0.35)] transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>DISPATCHING REQUEST...</span>
                    </span>
                  ) : (
                    <>
                      <span>REQUEST A FREE ESTIMATE</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
