import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [service, setService] = useState('Alloy Wheel Polishing');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Build prefilled WhatsApp message
    const waText = encodeURIComponent(
      `Hello N.G SHINING ALLOY,\n\nI want to book an alloy wheel detailing service.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Vehicle / Rim Model:* ${carModel || 'Not specified'}\n*Service Requested:* ${service}\n*Message / Query:* ${message || 'Please provide pricing & time estimate.'}`
    );

    const targetUrl = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${waText}`;

    // Open WhatsApp
    window.open(targetUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0d10] border-t border-slate-900 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#00df82]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00df82] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Response</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
            Connect With Our Experts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have scratched, bent or dull rims? Send us your car details or reach out directly via call or WhatsApp for an instant price estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Calling Card */}
            <div className="bg-[#0f1418] border border-slate-800 rounded-2xl p-6 hover:border-[#00df82]/40 transition-colors shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Call Directly (One-Click)
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-2xl font-extrabold text-white font-['Outfit'] hover:text-[#00df82] transition-colors block mb-2"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-slate-400 mb-4">
                    Speak directly with our senior technician for consultation, repair advice, and shop scheduling.
                  </p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#00df82] text-black text-xs font-bold rounded-lg hover:bg-[#00c572] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 9779755256 Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="bg-[#0f1418] border border-slate-800 rounded-2xl p-6 hover:border-[#25D366]/40 transition-colors shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    WhatsApp Chat & Photo Assessment
                  </span>
                  <div className="text-xl font-bold text-white font-['Outfit'] mb-2">
                    Send Rim Photos on WhatsApp
                  </div>
                  <p className="text-xs text-slate-400 mb-4">
                    Take a quick photo of your damaged or dull alloy wheel and send it to our WhatsApp for a rapid quote.
                  </p>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Workshop Address Card */}
            <div className="bg-[#0f1418] border border-slate-800 rounded-2xl p-6 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#00df82]" />
                <span>Workshop Location</span>
              </div>
              <p className="leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
              <div className="flex items-center gap-2 pt-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#00df82]" />
                <span>{BUSINESS_INFO.timings}</span>
              </div>
            </div>
          </div>

          {/* Contact Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0f1418] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
                Send an Online Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill out the details below. It will open directly in WhatsApp so we can provide an accurate quote and turnaround window.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-[#00df82]/10 border border-[#00df82] rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#00df82] mx-auto" />
                <h4 className="text-lg font-bold text-white font-['Outfit']">
                  Enquiry Created!
                </h4>
                <p className="text-xs text-slate-300">
                  Your details have been compiled. If WhatsApp did not open automatically, tap below to chat with us directly:
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00df82] text-black font-bold text-xs rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Car / Rim Model (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thar 18-inch / Fortuner / Mercedes"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-black/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#00df82] transition-colors"
                    >
                      <option value="Alloy Wheel Polishing">Alloy Wheel Polishing</option>
                      <option value="Alloy Wheel Buffing">Alloy Wheel Buffing</option>
                      <option value="Damage Repairing">Damage & Scratch Repairing</option>
                      <option value="Full Complete Package">Full Polish + Buff + Protection</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message / Damage Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any scratch, curb rash, bend or dullness you'd like us to examine..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#00df82] hover:bg-[#00c572] text-black font-bold text-sm rounded-lg shadow-[0_0_25px_rgba(0,223,130,0.35)] transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quick Enquiry on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
