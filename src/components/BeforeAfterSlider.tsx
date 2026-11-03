import React, { useState, useRef, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  initialPosition?: number;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  initialPosition = 50,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative select-none overflow-hidden rounded-xl border border-slate-800 bg-black cursor-ew-resize group ${className}`}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={`${title || 'Alloy Wheel'} - After Polishing`}
        className="w-full h-full object-cover pointer-events-none select-none block"
        referrerPolicy="no-referrer"
      />

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={`${title || 'Alloy Wheel'} - Before Repair`}
          className="w-full h-full object-cover pointer-events-none select-none block filter brightness-90 contrast-95"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Before Tag */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/60 text-[11px] font-semibold text-slate-300">
          BEFORE (Damage / Dull)
        </div>
      </div>

      {/* After Tag */}
      <div className="absolute top-4 right-4 bg-[#00df82]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#00df82] text-[11px] font-bold text-black shadow-lg">
        AFTER (N.G Mirror Shine)
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00df82] via-white to-[#00df82] pointer-events-none shadow-[0_0_12px_#00df82]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Central Drag Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#00df82] text-[#00df82] flex items-center justify-center shadow-[0_0_15px_rgba(0,223,130,0.8)] group-hover:scale-110 transition-transform">
          <div className="flex gap-0.5 items-center">
            <span className="text-[10px] font-bold">‹</span>
            <span className="text-[10px] font-bold">›</span>
          </div>
        </div>
      </div>

      {/* Instructions footer */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] text-slate-300 pointer-events-none border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
        Drag slider left / right to compare
      </div>
    </div>
  );
};
