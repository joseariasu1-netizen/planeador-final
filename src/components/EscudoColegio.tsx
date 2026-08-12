import React from 'react';

interface EscudoColegioProps {
  className?: string;
}

export const EscudoColegio: React.FC<EscudoColegioProps> = ({ className = "w-14 h-14" }) => {
  return (
    <div className={`${className} rounded-full border-2 border-amber-500/80 bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center shadow-md`}>
      <img
        src="/escudo.png"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/escudo.jpg';
        }}
        alt="Escudo Institución Educativa Rafael Uribe Uribe"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
