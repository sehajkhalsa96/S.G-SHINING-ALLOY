import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Settings2, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/initialData';

const MAP_STORAGE_KEY = 'ng_shining_alloy_map_url';

export const LocationSection: React.FC = () => {
  const [mapUrl, setMapUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(MAP_STORAGE_KEY);
      if (saved && !saved.includes('Ludhiana') && !saved.includes('391a837462345a7d')) {
        return saved;
      }
    } catch (e) {
      console.error(e);
    }
    return BUSINESS_INFO.defaultMapEmbedUrl;
  });

  const [isEditingMap, setIsEditingMap] = useState(false);
  const [inputMapUrl, setInputMapUrl] = useState(mapUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(MAP_STORAGE_KEY, mapUrl);
    } catch (e) {
      console.warn(e);
    }
  }, [mapUrl]);

  const handleSaveMap = (e: React.FormEvent) => {
    e.preventDefault();
    let cleanUrl = inputMapUrl.trim();

    // If user pasted an entire iframe tag, extract the src attribute
    if (cleanUrl.includes('<iframe') && cleanUrl.includes('src="')) {
      const match = cleanUrl.match(/src="([^"]+)"/);
      if (match && match[1]) {
        cleanUrl = match[1];
      }
    }

    if (cleanUrl) {
      setMapUrl(cleanUrl);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setIsEditingMap(false);
      }, 1500);
    }
  };

  const handleResetMap = () => {
    setMapUrl(BUSINESS_INFO.defaultMapEmbedUrl);
    setInputMapUrl(BUSINESS_INFO.defaultMapEmbedUrl);
    localStorage.removeItem(MAP_STORAGE_KEY);
    setIsEditingMap(false);
  };

  return (
    <section id="workshop" className="py-24 bg-[#0a0d10] border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00df82]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00df82] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Patiala Detailing Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
            VISIT OUR WORKSHOP
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bring your vehicle directly to our workshop for an on-spot alloy inspection, damage evaluation, and mirror polishing demonstration.
          </p>
        </div>

        {/* 2-Column Content: Address & Highlights on Left, Google Maps on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Workshop Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0e1317] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div>
              {/* Address Box */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00df82] block mb-2">
                  Complete Workshop Address
                </span>
                <p className="text-lg sm:text-xl font-bold text-white font-['Outfit'] leading-snug mb-2">
                  {BUSINESS_INFO.address.street}
                </p>
                <p className="text-slate-300 font-medium text-sm">
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country}
                </p>
              </div>

              {/* Prominent Landmark Highlight */}
              <div className="bg-black/50 border border-[#00df82]/20 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00df82]/10 text-[#00df82] flex items-center justify-center shrink-0 mt-0.5">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#00df82] uppercase tracking-wider mb-1">
                      Key Landmarks
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Opposite Guru Teg Bahadur Tractor Market · Near Nadi Wala Pull · Block No. 11, Street No. 7. Easy wide road access for all passenger cars and SUVs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours & Contact quick row */}
              <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#00df82] shrink-0" />
                  <span>{BUSINESS_INFO.timings}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#00df82] shrink-0" />
                  <span className="font-semibold">{BUSINESS_INFO.phoneFormatted}</span>
                </div>
              </div>
            </div>

            {/* Three Required Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-slate-800">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#00df82] hover:bg-[#00c572] text-black font-bold text-sm rounded-lg shadow-[0_0_20px_rgba(0,223,130,0.35)] transition-all hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Get Directions in Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00df82]" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello N.G SHINING ALLOY, please share your workshop live location on WhatsApp.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-[#128C7E]/20 hover:bg-[#128C7E]/40 text-[#25D366] font-semibold text-xs sm:text-sm rounded-lg border border-[#128C7E]/50 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col bg-[#0e1317] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            {/* Map Top Bar with Custom Location Setting */}
            <div className="px-5 py-3.5 bg-black/60 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#00df82]" />
                <span>Live Workshop Map — Patiala, Punjab</span>
              </div>
              <button
                onClick={() => setIsEditingMap(!isEditingMap)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#00df82] px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-800 transition-colors"
                title="Paste your exact Google Maps location link or embed"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Update Map Location</span>
              </button>
            </div>

            {/* Space where owner can upload or paste their exact Google Maps location */}
            {isEditingMap && (
              <div className="p-4 bg-slate-900/95 border-b border-[#00df82]/30 animate-in fade-in duration-200">
                <form onSubmit={handleSaveMap} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Paste Exact Google Maps Embed URL or iframe code:
                    </label>
                    <textarea
                      rows={2}
                      value={inputMapUrl}
                      onChange={(e) => setInputMapUrl(e.target.value)}
                      placeholder='e.g. https://www.google.com/maps/embed?pb=... or <iframe src="...">'
                      className="w-full px-3 py-2 text-xs bg-black/80 border border-slate-700 rounded-lg text-white font-mono focus:outline-none focus:border-[#00df82]"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Tip: In Google Maps, search your shop, click "Share" → "Embed a map", and paste the link or iframe here.
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={handleResetMap}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Reset to Default
                    </button>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingMap(false)}
                        className="px-3 py-1.5 text-xs text-slate-400 bg-slate-800 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-xs font-bold text-black bg-[#00df82] rounded hover:bg-[#00c572] flex items-center gap-1"
                      >
                        {saveSuccess ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Saved!
                          </>
                        ) : (
                          'Save Map'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Embedded Responsive Map */}
            <div className="relative flex-1 min-h-[380px] lg:min-h-[460px] w-full bg-slate-950">
              <iframe
                title="N.G SHINING ALLOY Workshop Location"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />

              {/* Map floating overlay button */}
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/85 hover:bg-black text-white px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-700 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00df82]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
