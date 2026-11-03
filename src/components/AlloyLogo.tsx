import React from 'react';

interface AlloyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showGlow?: boolean;
}

export const AlloyLogo: React.FC<AlloyLogoProps> = ({
  size = 'md',
  className = '',
  showGlow = true,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  return (
    <div
      className={`relative rounded-full flex items-center justify-center shrink-0 group select-none ${sizeMap[size]} ${className}`}
    >
      {/* Ambient Sea Green Glow Behind Wheel */}
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-[#00df82] opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* High-Precision SVG Alloy Wheel Rim */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 transition-transform duration-700 ease-out group-hover:rotate-45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Chrome Metallic Rim Gradient */}
          <linearGradient id="chromeOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#475569" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Deep Sea Green Neon Halo */}
          <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#00df82" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#004d2c" stopOpacity="0.2" />
          </radialGradient>

          {/* Spoke Metallic Bevel */}
          <linearGradient id="spokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          {/* Center Cap Gradient */}
          <radialGradient id="centerCap" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#090d10" />
          </radialGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Rim Lip with Chrome Bevel */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="url(#chromeOuter)"
          strokeWidth="3.5"
          className="drop-shadow-sm"
        />

        {/* Step-down Inner Rim Barrel */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="#0f172a"
          strokeWidth="2"
        />

        {/* Luminous Sea-Green Neon Disc Behind Spokes */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke="#00df82"
          strokeWidth="1.5"
          filter="url(#glowFilter)"
          opacity="0.9"
        />

        <circle
          cx="50"
          cy="50"
          r="38"
          fill="#06080a"
          stroke="#1e293b"
          strokeWidth="1"
        />

        {/* 5-Pair Double V-Spokes (10 Spoke Luxury Detailing Wheel) */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            {/* Left branch of split spoke */}
            <path
              d="M48 37 L45 13 L47 13 L50 36 Z"
              fill="url(#spokeGrad)"
            />
            {/* Right branch of split spoke */}
            <path
              d="M52 37 L55 13 L53 13 L50 36 Z"
              fill="url(#chromeOuter)"
            />
            {/* Spoke face diamond highlight */}
            <line
              x1="50"
              y1="36"
              x2="50"
              y2="13"
              stroke="#00df82"
              strokeWidth="0.8"
              opacity="0.75"
            />
            {/* Outer Rim Stud / Bolt notch */}
            <circle cx="50" cy="11.5" r="1" fill="#e2e8f0" />
            <circle cx="43" cy="12.5" r="0.75" fill="#64748b" />
            <circle cx="57" cy="12.5" r="0.75" fill="#64748b" />
          </g>
        ))}

        {/* Hub Mounting Collar with Lug Nuts */}
        <circle
          cx="50"
          cy="50"
          r="16"
          stroke="url(#chromeOuter)"
          strokeWidth="2"
          fill="#0a0f12"
        />

        {/* 5 Lug Nut Holes */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <g key={`bolt-${i}`} transform={`rotate(${angle} 50 50)`}>
            <circle cx="50" cy="39" r="1.5" fill="#000" stroke="#94a3b8" strokeWidth="0.5" />
          </g>
        ))}

        {/* Center Cap with Chrome Bevel and NG Badge */}
        <circle
          cx="50"
          cy="50"
          r="9.5"
          fill="url(#centerCap)"
          stroke="#00df82"
          strokeWidth="1"
        />

        {/* Center Cap NG Monogram */}
        <text
          x="50"
          y="53.5"
          fontSize="6.5"
          fontWeight="900"
          fontFamily="'Orbitron', 'Syne', sans-serif"
          fill="#00df82"
          textAnchor="middle"
          letterSpacing="-0.2"
          className="drop-shadow-[0_0_2px_#00df82]"
        >
          NG
        </text>
      </svg>
    </div>
  );
};
