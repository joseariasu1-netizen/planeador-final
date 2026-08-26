import React from 'react';
import { Asignatura, Grado, PeriodoId } from '../types';
import { mallaCurricular } from '../data/mallaCurricular';
import { Table, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TabMallaProps {
  grado: Grado;
  asignatura: Asignatura;
  periodo: PeriodoId;
  onSelectSemanaForPlan: (semanaNum: number) => void;
}

export const TabMalla: React.FC<TabMallaProps> = ({
  grado,
  asignatura,
  periodo,
  onSelectSemanaForPlan
}) => {
  const asigEfectiva: Asignatura = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado) ? 'Matemáticas' : asignatura;
  const planesSemana = mallaCurricular[grado]?.[asigEfectiva]?.[periodo] || [];

  return (
    <div className="w-full space-y-6">
      {/* Cabecera Informativa de la Malla */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Table className="w-4 h-4" />
            <span>Malla Curricular Institucional Priorizada</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {asigEfectiva} — Grado {grado} (Periodo {periodo})
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Secuencia temática semanal priorizada con estándares curriculares del Ministerio de Educación Nacional (MEN) y pruebas ICFES Saber.
          </p>
        </div>

        <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 text-right shrink-0">
          <div className="text-xs text-slate-400 font-semibold">Total Semanas Periodo {periodo}</div>
          <div className="text-lg font-black text-amber-400">{planesSemana.length} Semanas</div>
        </div>
      </div>

      {/* Tabla General del Periodo */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-300 uppercase font-bold text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-4 py-3.5 text-center w-16">Sem</th>
                <th className="px-4 py-3.5 min-w-[220px]">Secuencia Temática Priorizada</th>
                <th className="px-4 py-3.5 min-w-[180px]">Pensamiento Matemático</th>
                <th className="px-4 py-3.5 min-w-[240px]">Competencia & Evidencia</th>
                <th className="px-4 py-3.5 text-center w-28">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {planesSemana.map((plan) => (
                <tr 
                  key={plan.semana}
                  className="hover:bg-slate-800/50 transition group"
                >
                  <td className="px-4 py-3 text-center font-black text-amber-400 text-sm">
                    <span className="inline-block w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 leading-8 text-center">
                      {plan.semana}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-semibold text-slate-100">
                    <div className="text-sm font-bold group-hover:text-amber-300 transition">
                      {plan.titulo}
                    </div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                      Tiempo: {plan.tiempoEstimado}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-300">
                    <span className="inline-block px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-[11px] font-medium text-amber-200">
                      {plan.pensamiento}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-slate-300 text-[11px] space-y-1">
                    <div className="font-bold text-slate-200">{plan.competencia}</div>
                    <div className="text-slate-400 text-[10px]">{plan.evidencia}</div>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => onSelectSemanaForPlan(plan.semana)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition shadow group-hover:scale-105"
                      title="Ver plan de clase completo para esta semana"
                    >
                      <span>Planear</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
