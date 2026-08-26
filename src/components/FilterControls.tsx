import React from 'react';
import { Asignatura, Grado, PeriodoId } from '../types';
import { BookOpen, Table, FileCheck2, Info } from 'lucide-react';

interface FilterControlsProps {
  asignatura: Asignatura;
  setAsignatura: (a: Asignatura) => void;
  grado: Grado;
  setGrado: (g: Grado) => void;
  periodo: PeriodoId;
  setPeriodo: (p: PeriodoId) => void;
  activeTab: 'planeador' | 'malla' | 'evaluacion';
  setActiveTab: (t: 'planeador' | 'malla' | 'evaluacion') => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  asignatura,
  setAsignatura,
  grado,
  setGrado,
  periodo,
  setPeriodo,
  activeTab,
  setActiveTab
}) => {
  const isEstadisticaDisabled = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado);

  const handleGradoChange = (newGrado: Grado) => {
    setGrado(newGrado);
    if (['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(newGrado) && asignatura === 'Estadística') {
      setAsignatura('Matemáticas');
    }
  };

  const gradosPrimaria: Grado[] = ['1°', '2°', '3°', '4°', '5°'];
  const gradosSecundaria: Grado[] = ['6°', '7°', '8°', '9°', '10°', '11°'];

  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 shadow-md print:hidden">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Panel de Filtros Interactivos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          {/* Selector 1: Grado (Primaria y Secundaria) */}
          <div className="lg:col-span-6 space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                1. Grado Escolar (1° a 11°):
              </label>
              <span className="text-[10px] text-amber-400 font-semibold">
                {gradosPrimaria.includes(grado) ? 'Primaria (RUU)' : 'Secundaria y Media (RUU)'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
              {/* Grupo Primaria */}
              <div className="flex-1">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">
                  Primaria
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {gradosPrimaria.map((g) => (
                    <button
                      key={g}
                      onClick={() => handleGradoChange(g)}
                      className={`py-1.5 text-xs font-bold rounded transition ${
                        grado === g
                          ? 'bg-amber-500 text-slate-950 shadow font-extrabold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden sm:block w-[1px] bg-slate-800 my-0.5" />

              {/* Grupo Secundaria */}
              <div className="flex-[1.2]">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">
                  Secundaria & Media
                </div>
                <div className="grid grid-cols-6 gap-1">
                  {gradosSecundaria.map((g) => (
                    <button
                      key={g}
                      onClick={() => handleGradoChange(g)}
                      className={`py-1.5 text-xs font-bold rounded transition ${
                        grado === g
                          ? 'bg-amber-500 text-slate-950 shadow font-extrabold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selector 2: Asignatura */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>2. Asignatura:</span>
              {isEstadisticaDisabled && (
                <span className="text-[10px] text-amber-400 font-normal flex items-center gap-1">
                  <Info className="w-3 h-3" /> Pensamiento Aleatorio
                </span>
              )}
            </label>
            <div className="grid grid-cols-2 gap-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setAsignatura('Matemáticas')}
                className={`py-2 text-xs font-bold rounded transition ${
                  asignatura === 'Matemáticas'
                    ? 'bg-red-900 text-white border border-red-700 shadow'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                Matemáticas
              </button>
              <button
                onClick={() => !isEstadisticaDisabled && setAsignatura('Estadística')}
                disabled={isEstadisticaDisabled}
                title={isEstadisticaDisabled ? 'Estadística está integrada en el componente Aleatorio para Primaria y Media (10°/11°)' : ''}
                className={`py-2 text-xs font-bold rounded transition ${
                  isEstadisticaDisabled
                    ? 'opacity-40 cursor-not-allowed bg-slate-900 text-slate-500 line-through'
                    : asignatura === 'Estadística'
                    ? 'bg-red-900 text-white border border-red-700 shadow'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                Estadística
              </button>
            </div>
          </div>

          {/* Selector 3: Periodo */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              3. Periodo Académico:
            </label>
            <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
              {([1, 2, 3] as PeriodoId[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriodo(p)}
                  className={`py-2 text-xs font-bold rounded transition ${
                    periodo === p
                      ? 'bg-slate-100 text-slate-950 shadow'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  P{p} <span className="font-normal text-[10px]">({p === 3 ? '14w' : '13w'})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bar de Pestañas Principales (Tabs) */}
        <div className="flex border-b border-slate-800 gap-2">
          <button
            onClick={() => setActiveTab('planeador')}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-lg transition border-t-2 ${
              activeTab === 'planeador'
                ? 'bg-slate-800 text-amber-400 border-amber-500 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border-transparent'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Pestaña 1: Planeador de Clase Explícito</span>
          </button>

          <button
            onClick={() => setActiveTab('malla')}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-lg transition border-t-2 ${
              activeTab === 'malla'
                ? 'bg-slate-800 text-amber-400 border-amber-500 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border-transparent'
            }`}
          >
            <Table className="w-4 h-4 text-amber-400" />
            <span>Pestaña 2: Malla Curricular del Periodo</span>
          </button>

          <button
            onClick={() => setActiveTab('evaluacion')}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-lg transition border-t-2 ${
              activeTab === 'evaluacion'
                ? 'bg-slate-800 text-amber-400 border-amber-500 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border-transparent'
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-amber-400" />
            <span>Pestaña 3: Evaluaciones Tipo ICFES Saber</span>
          </button>
        </div>
      </div>
    </div>
  );
};
