import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';
import { AlloyLogo } from './AlloyLogo';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Measured Scrim for WCAG AA compliance */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_alloy_wheels_1793722761546.jpg"
          alt="Luxury car with shiny, polished forged alloy wheels in dark detailing studio"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay with subtle sea-green atmospheric wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080a] via-[#06080a]/90 to-[#06080a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080a] via-transparent to-[#06080a]/80" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00df82]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00df82]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle text kicker with separator */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest text-[#00df82] uppercase mb-4">
            <span>Precision Detailing</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Patiala Workshop</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Est. Excellence</span>
          </div>

          {/* Stylish Shop Name Brand Badge with Alloy Wheel Logo and Brush Italic Structure */}
          <div className="flex items-center gap-3.5 sm:gap-5 mb-5 p-2 sm:p-2.5 pr-4 rounded-2xl bg-black/40 border border-[#00df82]/25 backdrop-blur-md w-fit shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <AlloyLogo size="lg" className="shadow-[0_0_25px_rgba(0,223,130,0.4)]" />
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-brush italic tracking-wide text-white leading-tight">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">N.G </span>
                <span className="text-[#00df82] drop-shadow-[0_0_18px_rgba(0,223,130,0.7)]">Shining </span>
                <span className="text-slate-100">Alloy</span>
              </h2>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#00df82] uppercase mt-0.5">
                Alloy Wheel Polishing · Buffing · Repair
              </span>
            </div>
          </div>

          {/* Primary Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-['Outfit'] leading-[1.1] text-balance">
            Restore the Shine.{' '}
            <span className="text-gradient-sea drop-shadow-md">
              Revive Your Rims.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed font-light">
            {BUSINESS_INFO.subtitle}
          </p>

          {/* 3 Prominent Required Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {/* Button 1: Explore Our Services */}
            <a
              href="#services"
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black bg-[#00df82] hover:bg-[#00c572] rounded-md transition-all shadow-[0_0_25px_rgba(0,223,130,0.5)] hover:shadow-[0_0_35px_rgba(0,223,130,0.8)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Button 2: Call Now */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-[#00df82]/60 rounded-md transition-all hover:-translate-y-0.5 whitespace-nowrap shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#00df82]" />
              <span>Call Now</span>
              <span className="text-xs text-slate-400 font-normal">({BUSINESS_INFO.phone})</span>
            </a>

            {/* Button 3: WhatsApp Us */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 hover:border-[#25D366] rounded-md transition-all hover:-translate-y-0.5 whitespace-nowrap backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Attributes Row */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00df82] shrink-0" />
              <span>100% Structural Safety & Balance Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00df82] shrink-0" />
              <span>Factory Diamond-Cut & Mirror Polishing</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00df82] shrink-0" />
              <span>Near Nadi Wala Pull, Patiala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
