import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface CinematicNavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
}

export const CinematicNavbar: React.FC<CinematicNavbarProps> = ({
  onOpenQuote,
  activeSection,
}) => {
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
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'estimator', label: 'ESTIMATOR' },
    { id: 'gallery', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0E]/92 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#0B0B0E]/65 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center space-x-3 text-left group focus:outline-none"
        >
          <img
            src="/images/logo.png"
            alt="A&A Wood Flooring, Inc."
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="font-black text-sm tracking-widest uppercase text-white block leading-none">
              A&A WOOD FLOORS
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#C92227] uppercase block mt-1">
              QUALITY • DESIGN • DURABILITY
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-[#C92227]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 rounded-lg'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C92227] rounded-full shadow-[0_0_10px_#C92227]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-xs font-mono text-gray-400 border-r border-white/10 pr-4">
            <span className="text-[#C92227] font-bold">EN</span> | US
          </span>

          <a
            href="tel:9179304105"
            className="text-xs font-bold text-gray-300 hover:text-white flex items-center space-x-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C92227]" />
            <span className="font-mono">(917) 930-4105</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white border border-[#C92227] bg-[#C92227] hover:bg-[#AB1B20] transition-all duration-300 shadow-[0_0_20px_rgba(201,34,39,0.3)] hover:shadow-[0_0_25px_rgba(201,34,39,0.5)]"
          >
            GET A FREE QUOTE
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href="tel:9179304105"
            className="p-2 rounded-lg bg-white/10 text-[#C92227]"
            aria-label="Call (917) 930-4105"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-white border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0E]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-2.5 rounded-lg text-left text-xs font-bold tracking-wider uppercase text-gray-200 hover:text-[#C92227] hover:bg-white/5 border border-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:9179304105"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg text-xs font-bold text-white bg-white/10 border border-white/15"
            >
              <Phone className="w-4 h-4 text-[#C92227]" />
              <span>Call (917) 930-4105</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#C92227] hover:bg-[#AB1B20] shadow-[0_0_20px_rgba(201,34,39,0.4)]"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
