import React, { useState, useEffect } from 'react';

interface EscudoColegioProps {
  className?: string;
  allowUpload?: boolean;
}

export const EscudoColegio: React.FC<EscudoColegioProps> = ({ 
  className = "w-16 h-16",
  allowUpload = false 
}) => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ruu_custom_logo');
    if (saved) {
      setCustomLogo(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomLogo(result);
          localStorage.setItem('ruu_custom_logo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCustomLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomLogo(null);
    localStorage.removeItem('ruu_custom_logo');
  };

  // SVG Emblema Institucional Oficial I.E. Rafael Uribe Uribe
  const OfficialSvgShield = (
    <svg
      viewBox="0 0 400 440"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain p-0.5"
    >
      <defs>
        <path id="shieldOutlinePath" d="M 200 14 C 150 0 80 22 45 36 C 68 80 72 120 48 145 C 36 160 30 200 30 230 C 30 320 110 390 200 426 C 290 390 370 320 370 230 C 370 200 364 160 352 145 C 328 120 332 80 355 36 C 320 22 250 0 200 14 Z" />
        
        <clipPath id="shieldShapeClip">
          <use href="#shieldOutlinePath" />
        </clipPath>

        <path id="mottoArcTextPath" d="M 96 308 A 128 128 0 0 0 304 308" fill="none" />
        <path id="nameArcTextPath" d="M 58 355 A 165 165 0 0 0 342 355" fill="none" />
      </defs>

      <use href="#shieldOutlinePath" fill="#E10600" stroke="#000000" strokeWidth="8" strokeLinejoin="round" />

      <g clipPath="url(#shieldShapeClip)">
        <rect x="0" y="0" width="400" height="82" fill="#E10600" />
        <text x="200" y="58" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="'Arial Black', Impact, Arial, sans-serif" textAnchor="middle" letterSpacing="0.8">INSTITUCION EDUCATIVA</text>
        <line x1="0" y1="82" x2="400" y2="82" stroke="#000000" strokeWidth="5" />

        <rect x="0" y="82" width="400" height="24" fill="#FFEA00" />
        <line x1="0" y1="106" x2="400" y2="106" stroke="#000000" strokeWidth="5" />

        <polygon points="0,106 400,106 400,265 0,265" fill="#FFEA00" />
        <polygon points="400,106 400,265 0,265" fill="#009EE3" />
        <line x1="400" y1="106" x2="0" y2="265" stroke="#000000" strokeWidth="5" />

        <g transform="translate(120, 142)">
          <path d="M 10 5 Q 40 0 78 10 L 78 102 Q 40 94 10 98 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <path d="M 82 10 Q 120 0 150 5 L 150 98 Q 120 94 82 102 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <line x1="80" y1="10" x2="80" y2="102" stroke="#000000" strokeWidth="3.5" />
          <path d="M 20 22 Q 45 18 68 22 M 20 32 Q 45 28 68 32 M 20 42 Q 45 38 68 42 M 20 52 Q 45 48 68 52 M 20 62 Q 45 58 68 62 M 20 72 Q 45 68 68 72 M 20 82 Q 45 78 68 82" stroke="#000000" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 92 22 Q 115 18 140 22 M 92 32 Q 115 28 140 32 M 92 42 Q 115 38 140 42 M 92 52 Q 115 48 140 52 M 92 62 Q 115 58 140 62 M 92 72 Q 115 68 140 72 M 92 82 Q 115 78 140 82" stroke="#000000" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </g>

        <g fill="#000000" stroke="#000000">
          <circle cx="200" cy="112" r="15" fill="#000000" />
          <circle cx="200" cy="112" r="6.5" fill="#FFEA00" stroke="#000000" strokeWidth="2" />
          <rect x="122" y="136" width="156" height="15" rx="3" fill="#000000" />
          <circle cx="122" cy="143.5" r="8" fill="#000000" />
          <circle cx="278" cy="143.5" r="8" fill="#000000" />
          <rect x="192" y="120" width="16" height="155" fill="#000000" />
          <path d="M 130 228 C 130 308 270 308 270 228" fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" />
          <path d="M 130 210 L 112 242 L 144 242 Z" fill="#000000" />
          <path d="M 270 210 L 256 242 L 288 242 Z" fill="#000000" />
        </g>

        <path d="M 75 258 C 135 298 265 298 325 258 L 315 298 C 245 338 155 338 85 298 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
        <text fill="#000000" fontSize="15" fontWeight="900" fontFamily="'Arial Black', Impact, Arial, sans-serif" letterSpacing="0.5">
          <textPath href="#mottoArcTextPath" startOffset="50%" textAnchor="middle">DIOS, CIENCIA Y LABOR</textPath>
        </text>

        <path d="M 52 298 C 120 348 280 348 348 298 L 360 350 C 275 410 125 410 40 350 Z" fill="#E10600" stroke="#000000" strokeWidth="3.5" />
        <text fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="'Arial Black', Impact, Arial, sans-serif" letterSpacing="1">
          <textPath href="#nameArcTextPath" startOffset="50%" textAnchor="middle">RAFAEL URIBE URIBE</textPath>
        </text>
      </g>

      <use href="#shieldOutlinePath" fill="none" stroke="#000000" strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className={`relative group inline-flex items-center justify-center shrink-0 ${className}`}>
      {/* Marco Circular Blanco con borde dorado sofisticado */}
      <div className="w-full h-full rounded-full bg-white border-2 border-amber-400 p-1 shadow-md flex items-center justify-center overflow-hidden ring-2 ring-amber-500/30">
        {customLogo ? (
          <img
            src={customLogo}
            alt="Escudo Institucional Personalizado"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain rounded-full"
            onError={() => setCustomLogo(null)}
          />
        ) : (
          OfficialSvgShield
        )}
      </div>

      {/* Botón para desvincular logo personalizado si existe */}
      {customLogo && allowUpload && (
        <button
          onClick={handleRemoveCustomLogo}
          title="Restaurar escudo por defecto"
          className="absolute -top-1 -right-1 bg-red-600 hover:bg-red-700 text-white p-0.5 rounded-full text-[10px] shadow z-20 print:hidden"
        >
          ✕
        </button>
      )}

      {/* Botón Flotante para subir logo propio si se permite */}
      {allowUpload && (
        <label
          title="Haz clic para subir un logo oficial PNG/JPG de la institución"
          className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[9px] font-bold text-amber-300 text-center rounded-full cursor-pointer transition p-1 border border-amber-400 z-10 print:hidden"
        >
          <span>Subir Logo</span>
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp, image/svg+xml"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

