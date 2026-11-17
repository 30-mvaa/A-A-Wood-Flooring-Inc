import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#111111] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#C92227]" />
              <span>Serving New York, New Jersey & Connecticut</span>
            </span>
            <span className="flex items-center space-x-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#C92227]" />
              <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
            </span>
            <span className="flex items-center space-x-1.5 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C92227]" />
              <span>10+ Years Licensed & Insured Experience</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:9179304105" 
              className="text-gray-200 hover:text-white font-medium flex items-center space-x-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C92227]" />
              <span>(917) 930-4105</span>
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="tel:9178611492" 
              className="text-gray-200 hover:text-white font-medium flex items-center space-x-1 transition-colors"
            >
              <span>(917) 861-1492</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-apple-md border-b border-black/5 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-black/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-auto flex items-center">
              <img
                src="/images/logo.png"
                alt="A&A Wood Flooring, Inc. Logo"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-[14px] font-medium text-gray-700 hover:text-[#111111] hover:bg-black/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:9179304105"
              className="flex items-center space-x-2 px-3.5 py-2 text-sm font-semibold text-[#111111] hover:text-[#C92227] bg-[#F5F5F7] hover:bg-gray-200/70 rounded-full transition-all duration-200"
              title="Call Us Directly"
            >
              <Phone className="w-4 h-4 text-[#C92227]" />
              <span className="hidden md:inline">(917) 930-4105</span>
              <span className="md:hidden">Call</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-full shadow-apple-red transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href="tel:9179304105"
              className="p-2 bg-[#F5F5F7] text-[#C92227] rounded-full"
              aria-label="Call (917) 930-4105"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-black rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-[#C92227] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:9179304105"
                className="flex items-center justify-center space-x-2 w-full py-3 text-sm font-semibold text-[#111111] bg-gray-100 rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#C92227]" />
                <span>Call (917) 930-4105</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 text-sm font-semibold text-white bg-[#C92227] hover:bg-[#AB1B20] rounded-xl shadow-apple-red"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
