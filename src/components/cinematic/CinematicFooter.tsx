import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

export const CinematicFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="A&A Wood Flooring, Inc."
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-black text-sm tracking-widest uppercase text-white block">
                  A&A WOOD FLOORS
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#C92227] uppercase block">
                  QUALITY • DESIGN • DURABILITY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed font-light">
              Your Style. Our Quality Workmanship. The Perfect Match. Delivering luxury hardwood installations, dustless sanding, custom herringbone patterns, and waterproof vinyl throughout New York, New Jersey, and Connecticut.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C92227] hover:text-white text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C92227] hover:text-white text-gray-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-widest text-[#C92227]">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services Portfolio</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Cost Calculator</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Restoration Matrix</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Project Archive</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Heritage & Quality</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Direct Estimates</a></li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-widest text-[#C92227]">Specialties</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Hardwood Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Herringbone Inlays</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">HEPA Dustless Sanding</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Vinyl Plank (LVP)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Wood Staining</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Subfloor Squeak Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Stairs & Baseboard Trim</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Coverage */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold uppercase tracking-widest text-[#C92227]">Dispatch & Hours</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C92227] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9179304105" className="hover:text-white font-bold text-white">(917) 930-4105</a>
                  <a href="tel:9178611492" className="hover:text-white font-bold text-white">(917) 861-1492</a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C92227] flex-shrink-0" />
                <a href="mailto:aawoodflooring22@gmail.com" className="hover:text-white truncate">
                  aawoodflooring22@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C92227] mt-0.5 flex-shrink-0" />
                <span>New York • New Jersey • Connecticut (Meriden CT)</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-3.5 h-3.5 text-[#C92227] mt-0.5 flex-shrink-0" />
                <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <p>© 2026 A&A Wood Flooring, Inc. All Rights Reserved. aawoodfloorsinc.com</p>

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C92227]" />
              <span>Licensed & Fully Insured Contractor</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-gray-400 hover:text-[#C92227] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 text-[#C92227]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
