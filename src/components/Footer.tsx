import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/initialData';
import { AlloyLogo } from './AlloyLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050709] border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <AlloyLogo size="sm" />
              <span className="text-2xl font-brush italic text-white tracking-wide">
                N.G <span className="text-[#00df82]">Shining</span> Alloy
              </span>
            </div>

            <p className="text-slate-300 font-medium italic text-base">
              "Your Alloy Wheels, Our Passion for Perfection."
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Professional alloy wheel polishing, buffing, and damage repairing workshop in Patiala. Transforming road-worn, scratched rims into showroom mirror-finish masterpieces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 text-[#00df82] border border-slate-800 rounded-lg transition-colors"
                aria-label="Call business"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#128C7E]/20 hover:bg-[#128C7E]/40 text-[#25D366] border border-[#128C7E]/50 rounded-lg transition-colors"
                aria-label="Open WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services List (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-[#00df82] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#00df82]">·</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="hover:text-[#00df82] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#00df82]">·</span>
                  <span>Curb Rash & Scratch Rectification</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#00df82] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#00df82]">·</span>
                  <span>Diamond-Cut Wheel Face Restoration</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Contact & Workshop
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00df82] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#00df82] font-semibold text-white">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#00df82] shrink-0 mt-0.5" />
                <div className="text-slate-400 leading-relaxed">
                  <span className="text-slate-200 block font-medium">Workshop Location:</span>
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00df82] hover:underline font-semibold"
                >
                  Get Directions in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 N.G SHINING ALLOY. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-slate-400 transition-colors">Transformations</a>
            <a href="#workshop" className="hover:text-slate-400 transition-colors">Location</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
