import React from 'react';

interface EscudoColegioProps {
  className?: string;
}

export const EscudoColegio: React.FC<EscudoColegioProps> = ({ className = "w-14 h-14" }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`${className} filter drop-shadow-md shrink-0 rounded-full`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Escudo Circular Institución Educativa Rafael Uribe Uribe"
    >
      <defs>
        {/* Clip path for inner circular emblem */}
        <clipPath id="circleInnerClip">
          <circle cx="200" cy="200" r="130" />
        </clipPath>

        {/* Circular text path for top header */}
        <path
          id="textRingTop"
          d="M 45,200 A 155,155 0 1,1 355,200"
          fill="none"
        />

        {/* Circular text path for bottom header */}
        <path
          id="textRingBottom"
          d="M 355,200 A 155,155 0 0,1 45,200"
          fill="none"
        />

        {/* Curved path for motto ribbon */}
        <path
          id="mottoPath"
          d="M 100,265 Q 200,310 300,265"
          fill="none"
        />
      </defs>

      {/* Base Outer Circular Frame */}
      <circle cx="200" cy="200" r="195" fill="#D31027" stroke="#111827" strokeWidth="6" />
      <circle cx="200" cy="200" r="185" fill="none" stroke="#FFD100" strokeWidth="3" />

      {/* Dark Red Outer Ring for Circular Legend */}
      <circle cx="200" cy="200" r="175" fill="#B91C1C" stroke="#111827" strokeWidth="4" />

      {/* Circular Legend Text (Top: INSTITUCION EDUCATIVA) */}
      <text fill="#FFFFFF" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">
        <textPath href="#textRingTop" startOffset="50%" textAnchor="middle">
          INSTITUCION EDUCATIVA
        </textPath>
      </text>

      {/* Circular Legend Text (Bottom: RAFAEL URIBE URIBE) */}
      <text fill="#FFD100" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">
        <textPath href="#textRingBottom" startOffset="50%" textAnchor="middle">
          ★ RAFAEL URIBE URIBE ★
        </textPath>
      </text>

      {/* Inner Gold Border Ring */}
      <circle cx="200" cy="200" r="132" fill="#111827" stroke="#FFD100" strokeWidth="5" />

      {/* Inner Circular Heraldic Center */}
      <g clipPath="url(#circleInnerClip)">
        {/* Upper Yellow Background */}
        <rect x="50" y="50" width="300" height="300" fill="#FFD100" />

        {/* Diagonal Blue Field */}
        <polygon points="50,330 350,150 350,330" fill="#1EA1DD" />

        {/* Open Book Symbol */}
        <g transform="translate(135, 125)">
          <rect x="0" y="0" width="130" height="110" fill="#FFFFFF" rx="4" stroke="#111827" strokeWidth="3" />
          <line x1="65" y1="0" x2="65" y2="110" stroke="#111827" strokeWidth="2" strokeDasharray="3 3" />
          {/* Book lines */}
          <line x1="12" y1="20" x2="52" y2="20" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="36" x2="52" y2="36" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="52" x2="52" y2="52" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="68" x2="52" y2="68" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="84" x2="52" y2="84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

          <line x1="78" y1="20" x2="118" y2="20" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="78" y1="36" x2="118" y2="36" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="78" y1="52" x2="118" y2="52" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="78" y1="68" x2="118" y2="68" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="78" y1="84" x2="118" y2="84" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Central Anchor-Cross Emblem (Crux Ansata / Anchor) */}
        <g stroke="#111827" strokeWidth="3.5" fill="#111827">
          {/* Vertical Shaft */}
          <rect x="191" y="85" width="18" height="175" rx="3" />
          {/* Horizontal Crossbar */}
          <rect x="140" y="110" width="120" height="18" rx="3" />
          {/* Top Ring */}
          <circle cx="200" cy="85" r="13" fill="#FFD100" stroke="#111827" strokeWidth="4" />

          {/* Bottom Anchor Flukes */}
          <path
            d="M 135 210 C 140 260 260 260 265 210"
            fill="none"
            stroke="#111827"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Fluke Pikes */}
          <polygon points="125,215 143,202 143,228" fill="#111827" />
          <polygon points="275,215 257,202 257,228" fill="#111827" />
        </g>

        {/* Ribbon for Motto: DIOS, CIENCIA Y LABOR */}
        <path
          d="M 80 250 C 130 295 270 295 320 250 C 330 280 300 315 200 325 C 100 315 70 280 80 250 Z"
          fill="#FFFFFF"
          stroke="#111827"
          strokeWidth="3.5"
        />
        <text fill="#111827" fontSize="14" fontWeight="900" fontFamily="sans-serif">
          <textPath href="#mottoPath" startOffset="50%" textAnchor="middle">
            DIOS, CIENCIA Y LABOR
          </textPath>
        </text>
      </g>

      {/* Crisp Inner Circular Overlay */}
      <circle cx="200" cy="200" r="130" fill="none" stroke="#111827" strokeWidth="5" />
    </svg>
  );
};
