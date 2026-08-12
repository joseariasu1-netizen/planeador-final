import React, { useState, useEffect } from 'react';

interface EscudoColegioProps {
  className?: string;
  allowUpload?: boolean;
}

export const EscudoColegio: React.FC<EscudoColegioProps> = ({ 
  className = "w-14 h-14",
  allowUpload = false 
}) => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

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
          setImgError(false);
          localStorage.setItem('ruu_custom_logo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCustomLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomLogo(null);
    setImgError(false);
    localStorage.removeItem('ruu_custom_logo');
  };

  // SVG Emblema Institucional Definitivo para I.E. Rafael Uribe Uribe
  const SvgShield = (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-md"
    >
      <defs>
        <linearGradient id="shieldGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="shieldGreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
      </defs>

      {/* Escudo Cuerpo Principal */}
      <path
        d="M 100 12 L 175 35 C 175 130 150 195 100 222 C 50 195 25 130 25 35 Z"
        fill="url(#shieldGreen)"
        stroke="url(#shieldGold)"
        strokeWidth="6"
      />

      {/* Borde Interno punteado */}
      <path
        d="M 100 20 L 167 41 C 167 125 144 185 100 210 C 56 185 33 125 33 41 Z"
        fill="none"
        stroke="#fef08a"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />

      {/* Franja Superior Roja */}
      <path d="M 33 41 L 167 41 L 167 68 L 33 68 Z" fill="#991b1b" />
      <path d="M 33 68 L 167 68 L 167 72 L 33 72 Z" fill="#eab308" />

      {/* Texto Superior */}
      <text
        x="100"
        y="58"
        fill="#ffffff"
        fontSize="10.5"
        fontWeight="bold"
        fontFamily="sans-serif"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        I.E. RAFAEL URIBE URIBE
      </text>

      {/* División de Cuadrantes */}
      <line x1="100" y1="72" x2="100" y2="180" stroke="#eab308" strokeWidth="2" />
      <line x1="33" y1="126" x2="167" y2="126" stroke="#eab308" strokeWidth="2" />

      {/* C1: Libro Abierto de Sabiduría */}
      <g transform="translate(42, 78)">
        <path d="M 5 25 C 15 20 25 22 25 30 C 25 22 35 20 45 25 L 45 10 C 35 5 25 8 25 14 C 25 8 15 5 5 10 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
        <path d="M 25 14 L 25 30" stroke="#0f172a" strokeWidth="1.5" />
        <polygon points="25,2 27,6 31,6 28,9 29,13 25,10 21,13 22,9 19,6 23,6" fill="#eab308" />
      </g>

      {/* C2: Antorcha del Conocimiento */}
      <g transform="translate(112, 78)">
        <path d="M 25 5 C 32 12 30 20 25 24 C 20 20 18 12 25 5 Z" fill="#dc2626" />
        <path d="M 25 10 C 29 14 28 19 25 22 C 22 19 21 14 25 10 Z" fill="#f59e0b" />
        <polygon points="22,24 28,24 26,40 24,40" fill="#eab308" stroke="#78350f" strokeWidth="0.5" />
      </g>

      {/* C3: Bandera de Medellín */}
      <g transform="translate(42, 134)">
        <rect x="6" y="6" width="36" height="15" fill="#ffffff" rx="1" />
        <rect x="6" y="21" width="36" height="15" fill="#15803d" rx="1" />
        <rect x="6" y="6" width="36" height="30" fill="none" stroke="#eab308" strokeWidth="1" rx="1" />
      </g>

      {/* C4: Átomo Ciencia y Matemáticas */}
      <g transform="translate(112, 134)">
        <ellipse cx="23" cy="21" rx="16" ry="6" fill="none" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(30 23 21)" />
        <ellipse cx="23" cy="21" rx="16" ry="6" fill="none" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(-30 23 21)" />
        <circle cx="23" cy="21" r="3" fill="#f59e0b" />
      </g>

      {/* Listón Inferior: MEDELLÍN */}
      <g transform="translate(0, 10)">
        <path d="M 45 185 L 155 185 L 145 205 L 55 205 Z" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" />
        <text x="100" y="199" fill="#fef08a" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">MEDELLÍN</text>
      </g>
    </svg>
  );

  return (
    <div className={`relative group inline-flex items-center justify-center shrink-0 ${className}`}>
      {customLogo ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={customLogo}
            alt="Escudo Institucional Personalizado"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain rounded-full border-2 border-amber-500 bg-white shadow-md"
            onError={() => setCustomLogo(null)}
          />
          {allowUpload && (
            <button
              onClick={handleRemoveCustomLogo}
              title="Restaurar escudo por defecto"
              className="absolute -top-1 -right-1 bg-red-600 hover:bg-red-700 text-white p-0.5 rounded-full text-[10px] shadow z-10 print:hidden"
            >
              ✕
            </button>
          )}
        </div>
      ) : (
        SvgShield
      )}

      {/* Botón Flotante para subir logo propio si se permite */}
      {allowUpload && (
        <label
          title="Haz clic para subir un logo oficial PNG/JPG de la institución"
          className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[9px] font-bold text-amber-300 text-center rounded-full cursor-pointer transition p-1 border border-amber-400 z-10 print:hidden"
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
