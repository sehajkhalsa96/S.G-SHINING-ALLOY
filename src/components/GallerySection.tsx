import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Upload,
  Eye,
  Maximize2,
  X,
  MessageCircle,
  Play,
  RotateCcw,
  CheckCircle2,
  Image as ImageIcon,
  Film,
  Plus
} from 'lucide-react';
import { INITIAL_GALLERY, GalleryItem, BUSINESS_INFO } from '../data/initialData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const STORAGE_KEY = 'ng_shining_alloy_gallery';

export const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading gallery from storage', e);
    }
    return INITIAL_GALLERY;
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeCompareItem, setActiveCompareItem] = useState<GalleryItem>(items[0]);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxShowBefore, setLightboxShowBefore] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Upload Form State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'Polishing' | 'Buffing' | 'Damage Repair'>('Polishing');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadTurnaround, setUploadTurnaround] = useState('Same Day');
  const [uploadAfterImage, setUploadAfterImage] = useState<string>('');
  const [uploadBeforeImage, setUploadBeforeImage] = useState<string>('');
  const [uploadIsVideo, setUploadIsVideo] = useState(false);
  const [uploadVideoUrl, setUploadVideoUrl] = useState('');
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState('');

  const afterInputRef = useRef<HTMLInputElement>(null);
  const beforeInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Save gallery to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Storage quota reached or disabled', e);
    }
  }, [items]);

  const categories = ['All', 'Polishing', 'Buffing', 'Damage Repair', 'Videos'];

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Videos') return item.isVideo;
    return item.category === activeCategory;
  });

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setter(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadAfterImage && !uploadVideoUrl) {
      alert('Please upload at least an After photo or Video');
      return;
    }

    const newItem: GalleryItem = {
      id: `custom-${Date.now()}`,
      title: uploadTitle || 'Alloy Wheel Transformation',
      category: uploadCategory,
      description: uploadDescription || 'Restored to perfection at N.G SHINING ALLOY workshop.',
      beforeImage: uploadBeforeImage || undefined,
      afterImage: uploadAfterImage,
      isVideo: uploadIsVideo,
      videoUrl: uploadVideoUrl || undefined,
      turnaround: uploadTurnaround,
    };

    const updated = [newItem, ...items];
    setItems(updated);
    setActiveCompareItem(newItem);
    setUploadSuccessMessage('Transformation uploaded successfully!');

    setTimeout(() => {
      setUploadSuccessMessage('');
      setIsUploadModalOpen(false);
      // Reset form
      setUploadTitle('');
      setUploadDescription('');
      setUploadAfterImage('');
      setUploadBeforeImage('');
      setUploadVideoUrl('');
      setUploadIsVideo(false);
    }, 1200);
  };

  const handleResetGallery = () => {
    if (confirm('Reset gallery to default showcase photos?')) {
      setItems(INITIAL_GALLERY);
      setActiveCompareItem(INITIAL_GALLERY[0]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#06080a] relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00df82]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00df82]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00df82] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Customer Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
              OUR WORK – SEE THE TRANSFORMATION
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect our before-and-after results. Drag the interactive comparison slider or browse our workshop gallery of polished, buffed, and repaired alloy wheels.
            </p>
          </div>

          {/* Action buttons: Upload Your Work & Reset */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#00df82]/15 hover:bg-[#00df82]/25 text-[#00df82] border border-[#00df82]/40 rounded-md text-xs sm:text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,223,130,0.3)]"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Work Photos / Videos</span>
            </button>
            {items.length !== INITIAL_GALLERY.length && (
              <button
                onClick={handleResetGallery}
                className="p-2.5 text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded-md text-xs"
                title="Reset to default photos"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Featured Interactive Comparison Spotlight */}
        {activeCompareItem && activeCompareItem.beforeImage && (
          <div className="mb-16 bg-[#0d1216] border border-[#00df82]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-3/5">
                <BeforeAfterSlider
                  beforeImage={activeCompareItem.beforeImage}
                  afterImage={activeCompareItem.afterImage}
                  title={activeCompareItem.title}
                  className="aspect-[4/3] sm:aspect-[16/10] w-full"
                />
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="text-xs font-semibold text-[#00df82] uppercase tracking-wider mb-2">
                  Featured Interactive Comparison
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] mb-3">
                  {activeCompareItem.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {activeCompareItem.description}
                </p>

                <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-500">Service Category:</span>
                    <span className="text-slate-200 font-medium">{activeCompareItem.category}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-500">Workshop Turnaround:</span>
                    <span className="text-[#00df82] font-semibold">{activeCompareItem.turnaround || 'Same Day'}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-500">Workshop Location:</span>
                    <span className="text-slate-200">Patiala, Punjab</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello N.G SHINING ALLOY, I like this transformation: "${activeCompareItem.title}". Can you achieve a similar mirror finish for my wheels?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#00df82] text-black font-bold text-xs sm:text-sm rounded-md shadow-lg hover:bg-[#00c572] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Similar Finish on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setLightboxItem(activeCompareItem);
                      setLightboxShowBefore(false);
                    }}
                    className="p-3 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-md"
                    title="Fullscreen zoom"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#00df82] text-black shadow-[0_0_15px_rgba(0,223,130,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'Videos' ? '🎬 Videos' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0d1216] border border-slate-800/90 hover:border-[#00df82]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden cursor-pointer"
                   onClick={() => {
                     setLightboxItem(item);
                     setLightboxShowBefore(false);
                   }}>
                {item.isVideo && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                )}

                {/* Video Indicator */}
                {item.isVideo && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/80 border border-[#00df82] text-[#00df82] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                )}

                {/* Comparison Available Indicator */}
                {item.beforeImage && (
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-[#00df82]">
                    Before / After Available
                  </div>
                )}

                {/* Hover Quick Action Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Maximize2 className="w-3.5 h-3.5 text-[#00df82]" />
                    Click to enlarge & inspect
                  </span>
                </div>
              </div>

              {/* Card Meta & Controls */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-2">
                  <span className="text-[#00df82] font-semibold">{item.category}</span>
                  <span>{item.turnaround || 'Professional Finish'}</span>
                </div>
                <h4 className="text-base font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#00df82] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                  {item.beforeImage && (
                    <button
                      onClick={() => setActiveCompareItem(item)}
                      className="flex-1 py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded transition-colors text-center"
                    >
                      Compare in Slider
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setLightboxItem(item);
                      setLightboxShowBefore(false);
                    }}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded transition-colors"
                    title="Enlarge"
                    aria-label={`Enlarge photo of ${item.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello N.G SHINING ALLOY, I want an inquiry about "${item.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#00df82] hover:text-white hover:bg-[#00df82] bg-[#00df82]/10 rounded transition-colors"
                    title="Inquire on WhatsApp"
                    aria-label={`Inquire about ${item.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Click and enlarge photographs) */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full max-h-[95vh] flex flex-col bg-[#0b0f12] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white font-['Outfit']">
                  {lightboxItem.title}
                </h3>
                <div className="text-xs text-slate-400">
                  {lightboxItem.category} · {lightboxItem.turnaround || 'Workshop Result'}
                </div>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[460px]">
              {lightboxItem.isVideo && lightboxItem.videoUrl ? (
                <video
                  src={lightboxItem.videoUrl}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-auto max-w-full"
                />
              ) : (
                <img
                  src={
                    lightboxShowBefore && lightboxItem.beforeImage
                      ? lightboxItem.beforeImage
                      : lightboxItem.afterImage
                  }
                  alt={lightboxItem.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Before/After Toggle if both exist */}
              {lightboxItem.beforeImage && !lightboxItem.isVideo && (
                <div className="absolute top-4 left-4 flex gap-1 p-1 bg-black/80 backdrop-blur-md rounded-lg border border-white/10">
                  <button
                    onClick={() => setLightboxShowBefore(true)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      lightboxShowBefore
                        ? 'bg-rose-500/80 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Before (Damaged)
                  </button>
                  <button
                    onClick={() => setLightboxShowBefore(false)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      !lightboxShowBefore
                        ? 'bg-[#00df82] text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    After (Polished)
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
                {lightboxItem.description}
              </p>
              <div className="flex gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hello N.G SHINING ALLOY, I saw your work on "${lightboxItem.title}" and would like to get a quote for my car wheels.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 py-2.5 px-5 bg-[#00df82] text-black font-bold text-xs sm:text-sm rounded-md shadow-md hover:bg-[#00c572]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Photos & Videos Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-xl w-full max-h-[90vh] overflow-y-auto bg-[#0d1216] border border-[#00df82]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsUploadModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
              aria-label="Close upload modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#00df82] font-semibold mb-1">
              <Upload className="w-4 h-4" />
              <span>Workshop Content Manager</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
              Upload Work Photos & Videos
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Add your workshop before-and-after photographs or videos. Uploaded items will appear immediately in your live gallery and are saved in your browser storage.
            </p>

            {uploadSuccessMessage && (
              <div className="mb-4 p-3 bg-[#00df82]/20 border border-[#00df82] text-[#00df82] text-xs font-semibold rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{uploadSuccessMessage}</span>
              </div>
            )}

            <form onSubmit={handleAddNewItem} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Wheel / Car Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BMW 19-inch M-Sport Diamond-Cut Polish"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Category
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) =>
                      setUploadCategory(
                        e.target.value as 'Polishing' | 'Buffing' | 'Damage Repair'
                      )
                    }
                    className="w-full px-3 py-2 text-sm bg-black/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#00df82]"
                  >
                    <option value="Polishing">Alloy Wheel Polishing</option>
                    <option value="Buffing">Alloy Wheel Buffing</option>
                    <option value="Damage Repair">Damage Repairing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Turnaround Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4 Hours / Same Day"
                    value={uploadTurnaround}
                    onChange={(e) => setUploadTurnaround(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82]"
                  />
                </div>
              </div>

              {/* Media Type Toggle: Image vs Video */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setUploadIsVideo(false)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border ${
                    !uploadIsVideo
                      ? 'bg-[#00df82]/20 border-[#00df82] text-[#00df82]'
                      : 'bg-black/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  Photo (Before & After)
                </button>
                <button
                  type="button"
                  onClick={() => setUploadIsVideo(true)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border ${
                    uploadIsVideo
                      ? 'bg-[#00df82]/20 border-[#00df82] text-[#00df82]'
                      : 'bg-black/40 border-slate-700 text-slate-400'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  Video Showcase
                </button>
              </div>

              {!uploadIsVideo ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Before Image Upload */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Before Image (Optional)
                    </label>
                    <div
                      onClick={() => beforeInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-700 hover:border-[#00df82]/60 rounded-xl p-4 text-center cursor-pointer bg-black/40 transition-colors"
                    >
                      {uploadBeforeImage ? (
                        <div className="relative aspect-video rounded overflow-hidden">
                          <img
                            src={uploadBeforeImage}
                            alt="Before preview"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1.5 py-0.5 rounded text-white">
                            Change
                          </span>
                        </div>
                      ) : (
                        <div className="py-3 text-slate-400 text-xs">
                          <Upload className="w-5 h-5 mx-auto mb-1 text-slate-500" />
                          <span>Upload Before Photo</span>
                        </div>
                      )}
                      <input
                        ref={beforeInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, setUploadBeforeImage)}
                      />
                    </div>
                  </div>

                  {/* After Image Upload */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      After (Finished) Image *
                    </label>
                    <div
                      onClick={() => afterInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-700 hover:border-[#00df82] rounded-xl p-4 text-center cursor-pointer bg-black/40 transition-colors"
                    >
                      {uploadAfterImage ? (
                        <div className="relative aspect-video rounded overflow-hidden">
                          <img
                            src={uploadAfterImage}
                            alt="After preview"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 right-1 bg-[#00df82] text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                            Uploaded
                          </span>
                        </div>
                      ) : (
                        <div className="py-3 text-slate-400 text-xs">
                          <Upload className="w-5 h-5 mx-auto mb-1 text-[#00df82]" />
                          <span>Upload Polished Photo</span>
                        </div>
                      )}
                      <input
                        ref={afterInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, setUploadAfterImage)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-2 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Upload Video File (MP4, WebM)
                    </label>
                    <div
                      onClick={() => videoInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-700 hover:border-[#00df82] rounded-xl p-4 text-center cursor-pointer bg-black/40"
                    >
                      <Film className="w-6 h-6 mx-auto mb-1 text-[#00df82]" />
                      <span className="text-xs text-slate-300">
                        {uploadVideoUrl ? 'Video Loaded' : 'Click to select wheel detailing video'}
                      </span>
                      <input
                        ref={videoInputRef}
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, setUploadVideoUrl)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Or Paste Video URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://... (mp4 link)"
                      value={uploadVideoUrl}
                      onChange={(e) => setUploadVideoUrl(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Description / Process Details
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Scratches removed, 3-stage mirror buffing, ceramic seal coating applied."
                  value={uploadDescription}
                  onChange={(e) => setUploadDescription(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00df82]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#00df82] hover:bg-[#00c572] text-black font-bold text-sm rounded-lg shadow-[0_0_20px_rgba(0,223,130,0.4)] transition-all"
                >
                  Publish to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
