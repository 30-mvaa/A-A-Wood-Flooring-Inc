import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { QuoteFormData } from '../types';

interface ContactFormProps {
  initialService?: string;
  initialSqft?: number;
}

export const ContactForm: React.FC<ContactFormProps> = ({
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
      newErrors.location = 'Please provide your city, state, or zip code.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
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
    'Other / Commercial Project',
  ];

  return (
    <section id="contact" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C92227] mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                LET'S BRING YOUR FLOORING PROJECT TO LIFE.
              </h2>
              <p className="mt-4 text-base text-gray-300 leading-relaxed">
                Schedule your free on-site estimate. We bring actual wood samples, stain swatches, and moisture meters directly to your property.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C92227]/20 text-[#C92227] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Direct Phone Numbers</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-lg font-bold">
                      <a href="tel:9179304105" className="text-white hover:text-[#C92227] transition-colors">
                        (917) 930-4105
                      </a>
                      <span className="text-gray-600 hidden sm:inline">|</span>
                      <a href="tel:9178611492" className="text-white hover:text-[#C92227] transition-colors">
                        (917) 861-1492
                      </a>
                    </div>
                    <p className="text-xs text-gray-400">Call or text for immediate estimate scheduling</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C92227]/20 text-[#C92227] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</p>
                    <a
                      href="mailto:aawoodflooring22@gmail.com"
                      className="text-base font-bold text-white hover:text-[#C92227] transition-colors block mt-0.5"
                    >
                      aawoodflooring22@gmail.com
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">Send blueprints, floor plans or photos</p>
                  </div>
                </div>
              </div>

              {/* Coverage & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center space-x-2 text-[#C92227] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Service Area</span>
                  </div>
                  <p className="text-sm font-semibold text-white">NY, NJ & CT</p>
                  <p className="text-xs text-gray-400">Meriden CT, Tri-State Region</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center space-x-2 text-[#C92227] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Working Hours</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Mon – Sat: 7am – 6pm</p>
                  <p className="text-xs text-gray-400">Prompt response guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white text-[#111111] rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-red-50 text-[#C92227] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                  Estimate Request Received!
                </h3>
                <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. One of our flooring experts will contact you at <strong className="text-gray-900">{formData.phone}</strong> within 24 hours to confirm your free consultation.
                </p>

                <div className="pt-6 border-t border-gray-100 max-w-sm mx-auto space-y-3">
                  <a
                    href="tel:9179304105"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-xl shadow-apple-red transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now for Immediate Dispatch</span>
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
                    className="w-full text-xs font-semibold text-gray-500 hover:text-gray-800 py-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-100 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-[#111111]">
                    Request a Free On-Site Estimate
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out this form and our estimator will get back to you promptly.
                  </p>
                </div>

                {/* Property Type Radio */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                      className={`py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                        formData.propertyType === 'residential'
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-[#F5F5F7] text-gray-700 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      Residential Home / Condo
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                      className={`py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                        formData.propertyType === 'commercial'
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-[#F5F5F7] text-gray-700 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      Commercial / Retail Space
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227] ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
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
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227] ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227]"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
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
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227] ${
                        errors.location ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection & Square Footage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227]"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Approx. Area (Sq Ft)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 850 sq ft"
                      value={formData.squareFootage}
                      onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227]"
                    >
                    </input>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Project Details / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your project, current floor condition, wood preferences, or any specific timing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C92227]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-base font-bold text-white bg-[#C92227] hover:bg-[#AB1B20] shadow-apple-red transition-all duration-200 hover:scale-[1.01] active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Your Request...</span>
                    </span>
                  ) : (
                    <>
                      <span>REQUEST A FREE ESTIMATE</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  🔒 We respect your privacy. Your information is never shared or sold.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
