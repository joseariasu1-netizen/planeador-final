import React, { useState, useEffect } from 'react';
import { Key, Sparkles, School, Calendar, CheckCircle2 } from 'lucide-react';
import { EscudoColegio } from './EscudoColegio';

interface HeaderProps {
  userApiKey: string;
  setUserApiKey: (key: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ userApiKey, setUserApiKey }) => {
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempKey, setTempKey] = useState(userApiKey);

  useEffect(() => {
    setTempKey(userApiKey);
  }, [userApiKey]);

  const handleSaveKey = () => {
    setUserApiKey(tempKey.trim());
    localStorage.setItem('gemini_api_key_ruu', tempKey.trim());
    setShowKeyInput(false);
  };

  return (
    <header className="w-full bg-slate-900 text-white shadow-xl print:hidden">
      {/* Barra Superior de IA Gemini (Morado Oscuro / Indigo) */}
      <div className="bg-purple-950 border-b border-purple-800/50 px-4 py-2 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-purple-200">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="font-semibold text-purple-100">Motor de Inteligencia Artificial Gemini:</span>
            {userApiKey ? (
              <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700 text-xs font-mono">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Clave Docente Activa
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded border border-purple-700 text-xs">
                <CheckCircle2 className="w-3 h-3 text-purple-300" /> Servidor AI Studio / Clave Opcional
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-900 hover:bg-purple-800 text-purple-100 rounded text-xs transition border border-purple-700 shadow-sm"
              title="Configurar tu API Key personal de Google Gemini para IA ilimitada"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              {showKeyInput ? 'Ocultar Campo Key' : userApiKey ? 'Modificar API Key' : 'Ingresar API Key Personal'}
            </button>
          </div>
        </div>

        {/* Formulario Desplegable para Pegar API Key */}
        {showKeyInput && (
          <div className="max-w-7xl mx-auto mt-2 p-3 bg-purple-900/90 rounded border border-purple-700 flex flex-col sm:flex-row items-center gap-2">
            <div className="flex-1 w-full">
              <label className="block text-xs text-purple-200 mb-1 font-medium">
                Pega tu API Key de Google Gemini (se guarda localmente en tu navegador):
              </label>
              <input
                type="password"
                value={tempKey}
                onChange={(e) => setTempKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3 py-1.5 bg-slate-950 text-white text-xs rounded border border-purple-600 focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto self-end">
              <button
                onClick={handleSaveKey}
                className="w-full sm:w-auto px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs shadow transition"
              >
                Guardar Key
              </button>
              {userApiKey && (
                <button
                  onClick={() => {
                    setUserApiKey('');
                    localStorage.removeItem('gemini_api_key_ruu');
                    setTempKey('');
                  }}
                  className="px-3 py-1.5 bg-rose-900 hover:bg-rose-800 text-rose-200 rounded text-xs border border-rose-700 transition"
                >
                  Borrar
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Cabecera Principal Institucional */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-slate-900 border-b-4 border-amber-500 px-4 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Escudo e Identidad Institucional */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <EscudoColegio className="w-14 h-14 sm:w-16 sm:h-16" allowUpload={true} />
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-0.5">
                <School className="w-3.5 h-3.5" />
                <span>Medellín, Colombia • Sede Principal</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                IE RAFAEL URIBE URIBE
              </h1>
              <p className="text-xs sm:text-sm text-red-200 font-medium mt-0.5">
                Sistema Curricular DUA & Evaluador Pruebas ICFES Saber
              </p>
            </div>
          </div>

          {/* Indicador del Ciclo Académico */}
          <div className="bg-slate-950/80 border border-amber-500/30 rounded-lg p-3 flex items-center gap-3 text-right">
            <Calendar className="w-8 h-8 text-amber-400 shrink-0 hidden sm:block" />
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Ciclo Académico Anual
              </div>
              <div className="text-sm font-bold text-amber-400 flex items-center gap-1.5 justify-end">
                <span>40 Semanas</span>
                <span className="text-xs font-normal text-slate-300 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                  (13 - 13 - 14)
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                P1: 13 sem • P2: 13 sem • P3: 14 sem
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
