import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Cluster on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Scroll To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:border-[#00df82] flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 backdrop-blur-md"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Action Button with Glow */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Direct WhatsApp Chat with N.G SHINING ALLOY"
        >
          {/* Subtle radiating ripple effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          <MessageCircle className="w-7 h-7 fill-current relative z-10" />

          {/* Hover Tooltip on desktop */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0d1216] text-white border border-[#25D366]/40 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Chat on WhatsApp · 9779755256
          </span>
        </a>
      </div>

      {/* Floating Quick Call Pill for Mobile Viewports (Stick to bottom or bottom left) */}
      <div className="sm:hidden fixed bottom-6 left-6 z-40">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#00df82] text-black font-extrabold text-xs rounded-full shadow-[0_4px_20px_rgba(0,223,130,0.5)] active:scale-95 transition-transform"
          aria-label="Call Business directly"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call 9779755256</span>
        </a>
      </div>
    </>
  );
};
