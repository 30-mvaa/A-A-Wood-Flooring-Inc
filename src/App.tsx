import React, { useState, useEffect } from 'react';
import { CinematicNavbar } from './components/cinematic/CinematicNavbar';
import { CinematicHero } from './components/cinematic/CinematicHero';
import { CinematicServices } from './components/cinematic/CinematicServices';
import { CinematicEstimator } from './components/cinematic/CinematicEstimator';
import { CinematicBeforeAfter } from './components/cinematic/CinematicBeforeAfter';
import { CinematicGallery } from './components/cinematic/CinematicGallery';
import { CinematicAbout } from './components/cinematic/CinematicAbout';
import { CinematicWhyUs } from './components/cinematic/CinematicWhyUs';
import { CinematicReviews } from './components/cinematic/CinematicReviews';
import { CinematicCoverage } from './components/cinematic/CinematicCoverage';
import { CinematicContact } from './components/cinematic/CinematicContact';
import { CinematicFooter } from './components/cinematic/CinematicFooter';
import { FloatingCallButton } from './components/FloatingCallButton';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('Hardwood Flooring');
  const [estimatedSqft, setEstimatedSqft] = useState<number | undefined>(undefined);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'services', 'estimator', 'before-after', 'gallery', 'about', 'why-us', 'reviews', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleOpenQuote();
  };

  const handleSelectEstimate = (serviceName: string, sqft: number) => {
    setSelectedService(serviceName);
    setEstimatedSqft(sqft);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white font-sans selection:bg-[#E5A93C] selection:text-black">
      {/* Cinematic Top Navigation Bar */}
      <CinematicNavbar
        activeSection={activeSection}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Canvas Sections */}
      <main className="relative z-10">
        {/* Cinematic Hero (Matching Reference Image Layout) */}
        <CinematicHero onOpenQuote={handleOpenQuote} />

        {/* Specialized Disciplines / Services */}
        <CinematicServices onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Computational Cost Estimator */}
        <CinematicEstimator onSelectEstimate={handleSelectEstimate} />

        {/* Optical Comparison / Before & After Slider */}
        <CinematicBeforeAfter />

        {/* Architectural Project Gallery */}
        <CinematicGallery />

        {/* Heritage, Credentials & Marketing Flyer */}
        <CinematicAbout onOpenQuote={handleOpenQuote} />

        {/* Bento Grid: 6 Pillars of Excellence */}
        <CinematicWhyUs />

        {/* Verified Customer Reviews */}
        <CinematicReviews />

        {/* Tri-State Regional Coverage */}
        <CinematicCoverage />

        {/* Active Dispatch & Quotation Request Console */}
        <CinematicContact initialService={selectedService} initialSqft={estimatedSqft} />
      </main>

      {/* Cinematic Footer */}
      <CinematicFooter />

      {/* Floating Action Button */}
      <FloatingCallButton onOpenQuote={handleOpenQuote} />
    </div>
  );
};

export default App;
