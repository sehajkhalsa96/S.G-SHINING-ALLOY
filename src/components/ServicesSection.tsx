import React, { useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/initialData';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const encoded = encodeURIComponent(
      `Hello N.G SHINING ALLOY, I want to inquire about pricing and turnaround for ${serviceTitle}. Here are my car wheel details:`
    );
    return `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encoded}`;
  };

  return (
    <section id="services" className="relative py-24 bg-[#0a0d10] border-t border-slate-900 overflow-hidden">
      {/* Decorative ambient sea-green lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00df82]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00df82]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00df82] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Automotive Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4 text-balance">
            Our Premium Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Specialized precision restoration for luxury, sports, SUV, and OEM alloy rims in Patiala. We eliminate curb rash, gouges, oxidation, and restore flawless mirror reflection.
          </p>
        </div>

        {/* 3 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-[#0f1418] rounded-xl overflow-hidden border border-slate-800 hover:border-[#00df82]/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(0,223,130,0.2)] hover:-translate-y-1.5"
            >
              {/* Image Container with Glossy Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1418] via-transparent to-black/20" />
                
                {/* Number index indicator */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-[#00df82] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet features list */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <span className="w-4 h-4 rounded-full bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-black bg-[#00df82] hover:bg-[#00c572] rounded-md transition-all shadow-[0_0_15px_rgba(0,223,130,0.3)] hover:shadow-[0_0_25px_rgba(0,223,130,0.5)]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className="p-2.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors"
                    title="View process details"
                    aria-label={`View details for ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-[#0d1216] border border-[#00df82]/40 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-5 border border-slate-800">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs uppercase tracking-wider text-[#00df82] font-semibold mb-1">
              Process & Workshop Specifications
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-3">
              {selectedService.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {selectedService.description}
            </p>
            <div className="bg-black/40 border border-slate-800/80 rounded-lg p-4 mb-6">
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                What's included in every job:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#00df82]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3">
              <a
                href={getServiceWhatsAppUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#00df82] text-black font-bold text-sm rounded-md shadow-lg hover:bg-[#00c572]"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-md border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#00df82]" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
