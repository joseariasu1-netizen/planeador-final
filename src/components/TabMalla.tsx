import React, { useState } from 'react';
import { Asignatura, Grado, PeriodoId } from '../types';
import { mallaCurricular } from '../data/mallaCurricular';
import { Table, ArrowRight, CheckCircle2, Download, FileText, BookOpen } from 'lucide-react';
import { generarPDFMallasCompleto } from '../utils/exportarMallaPDF';

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
  const [generandoPDF, setGenerandoPDF] = useState(false);
  const asigEfectiva: Asignatura = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado) ? 'Matemáticas' : asignatura;
  const planesSemana = mallaCurricular[grado]?.[asigEfectiva]?.[periodo] || [];

  const handleDescargarMallaPeriodo = () => {
    setGenerandoPDF(true);
    setTimeout(() => {
      generarPDFMallasCompleto({ grado, periodo });
      setGenerandoPDF(false);
    }, 100);
  };

  const handleDescargarTodaLaMalla = () => {
    setGenerandoPDF(true);
    setTimeout(() => {
      generarPDFMallasCompleto();
      setGenerandoPDF(false);
    }, 100);
  };

  return (
    <div className="w-full space-y-6">
      {/* Cabecera Informativa de la Malla y Botones de Descarga de PDF */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Table className="w-4 h-4" />
            <span>Malla Curricular Oficial Verificada (MEN DBA V2 + Expedición Currículo Medellín)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {asigEfectiva} — Grado {grado} (Periodo {periodo})
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Secuencia temática semanal de 1° a 11° alineada con los Estándares Básicos de Competencias, Derechos Básicos de Aprendizaje (DBA V2 del MEN) y Expedición Currículo (Secretaría de Educación de Medellín), con ejemplo modelado y 3 ejercicios graduados exclusivos por semana.
          </p>
        </div>

        {/* Botones de Descarga PDF */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <button
            onClick={handleDescargarMallaPeriodo}
            disabled={generandoPDF}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl border border-slate-700 shadow-md transition hover:scale-102"
            title={`Descargar en PDF la malla de Grado ${grado} Periodo ${periodo}`}
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>PDF Grado {grado} (P{periodo})</span>
          </button>

          <button
            onClick={handleDescargarTodaLaMalla}
            disabled={generandoPDF}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition hover:scale-102"
            title="Descargar en PDF la malla completa de 1° a 11° para todos los periodos y asignaturas"
          >
            <FileText className="w-4 h-4 text-slate-950" />
            <span>{generandoPDF ? 'Generando PDF...' : 'Descargar Malla Completa (1° a 11°)'}</span>
          </button>
        </div>
      </div>

      {/* Tabla General del Periodo */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-300 uppercase font-bold text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-4 py-3.5 text-center w-16">Sem</th>
                <th className="px-4 py-3.5 min-w-[230px]">Secuencia Temática & Ejemplo</th>
                <th className="px-4 py-3.5 min-w-[180px]">Pensamiento & DBA V2 (MEN)</th>
                <th className="px-4 py-3.5 min-w-[250px]">Expedición Medellín & Ejercicios</th>
                <th className="px-4 py-3.5 text-center w-28">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {planesSemana.map((plan) => (
                <tr
                  key={plan.semana}
                  className="hover:bg-slate-800/50 transition group"
                >
                  <td className="px-4 py-3 text-center font-black text-amber-400 text-sm tabular-nums align-top">
                    <span className="inline-block w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 leading-8 text-center">
                      {plan.semana}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-semibold text-slate-100 align-top space-y-1.5">
                    <div className="text-sm font-bold group-hover:text-amber-300 transition">
                      {plan.titulo}
                    </div>
                    <div className="text-[11px] text-emerald-300/90 bg-slate-950/80 border border-slate-800 rounded-lg p-2 font-normal">
                      <span className="font-bold text-emerald-400">Ejemplo de clase: </span>
                      {plan.estructuracionTeorica.ejemploPasoAPaso.enunciado}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-300 align-top space-y-1.5">
                    <span className="inline-block px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-[11px] font-bold text-amber-300">
                      {plan.pensamiento}
                    </span>
                    <div className="text-[11px] text-slate-300 leading-relaxed">
                      {plan.dba}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-slate-300 text-[11px] space-y-1.5 align-top">
                    <div className="font-bold text-slate-200">{plan.competencia}</div>
                    <div className="text-slate-400 text-[10px]">{plan.evidencia}</div>
                    {plan.estructuracionTeorica.ejerciciosPracticos && (
                      <div className="pt-1 flex items-center gap-1.5 text-[10px] text-amber-300 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>
                          {plan.estructuracionTeorica.ejerciciosPracticos.length} ejercicios prácticos del tema (1: {plan.estructuracionTeorica.ejerciciosPracticos[0]?.enunciado.substring(0, 52)}...)
                        </span>
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center align-top">
                    <button
                      onClick={() => onSelectSemanaForPlan(plan.semana)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition shadow group-hover:scale-105"
                      title="Ver plan de clase completo, ejemplo resuelto y 3 ejercicios para esta semana"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
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
