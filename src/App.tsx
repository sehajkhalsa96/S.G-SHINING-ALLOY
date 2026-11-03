/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ShieldCheck, Sparkles, Clock, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06080a] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#00df82]/30 selection:text-[#00df82]">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Brand Proof / Why Choose Us Strip */}
        <section className="bg-[#080b0e] border-y border-slate-900 py-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    Diamond Mirror Gloss
                  </h4>
                  <p className="text-xs text-slate-400">
                    Liquid chrome reflection
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    Alloy Structural Trueing
                  </h4>
                  <p className="text-xs text-slate-400">
                    Bends & crack correction
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    Fast Turnaround
                  </h4>
                  <p className="text-xs text-slate-400">
                    Same-day service available
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    Patiala's Specialists
                  </h4>
                  <p className="text-xs text-slate-400">
                    Opp. Tractor Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Work & Transformation Gallery Section */}
        <GallerySection />

        {/* Visit Our Workshop & Google Maps Section */}
        <LocationSection />

        {/* Contact & Enquiry Section */}
        <ContactSection />
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
