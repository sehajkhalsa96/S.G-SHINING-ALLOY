import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';
import { AlloyLogo } from './AlloyLogo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080a]/95 backdrop-blur-md border-b border-[#00df82]/20 py-3 shadow-lg shadow-black/60'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark with Stylish Alloy Logo */}
          <a
            href="#"
            className="flex items-center gap-3 text-lg sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <AlloyLogo size="md" className="group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="font-brush italic text-lg sm:text-2xl tracking-wide leading-tight drop-shadow-md">
                <span className="text-white">N.G </span>
                <span className="text-[#00df82] drop-shadow-[0_0_15px_rgba(0,223,130,0.6)]">Shining </span>
                <span className="text-slate-100">Alloy</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#00df82]/80 uppercase -mt-0.5 hidden sm:block">
                Precision Wheel Detailing
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-[#00df82] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="hover:text-[#00df82] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Our Work
            </a>
            <a
              href="#workshop"
              className="hover:text-[#00df82] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Visit Workshop
            </a>
            <a
              href="#contact"
              className="hover:text-[#00df82] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-[#00df82] hover:bg-[#00c572] rounded-md transition-all shadow-[0_0_20px_rgba(0,223,130,0.4)] hover:shadow-[0_0_28px_rgba(0,223,130,0.65)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 text-black bg-[#00df82] rounded-md hover:bg-[#00c572]"
              aria-label="Call Business"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00df82]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0a0e12]/95 border border-[#00df82]/30 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#00df82]/10 hover:text-[#00df82] transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#00df82]/10 hover:text-[#00df82] transition-colors"
              >
                Our Work (Photo Gallery)
              </a>
              <a
                href="#workshop"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#00df82]/10 hover:text-[#00df82] transition-colors"
              >
                Visit Workshop & Map
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#00df82]/10 hover:text-[#00df82] transition-colors"
              >
                Contact & Enquiry
              </a>

              <div className="pt-3 border-t border-slate-800 flex gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#00df82] text-black font-semibold text-xs rounded-md shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call 9779755256
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#128C7E] hover:bg-[#075E54] text-white font-semibold text-xs rounded-md shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
