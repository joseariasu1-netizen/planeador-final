import React from 'react';
import { Asignatura, Grado, PeriodoId } from '../types';
import { FileCheck2, Award, Percent, ChevronRight, CheckCircle, Sparkles } from 'lucide-react';

interface TabEvaluacionesProps {
  grado: Grado;
  asignatura: Asignatura;
  periodo: PeriodoId;
  semanaActual: number;
  onOpenModal: (
    tipo: 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final',
    semanaRef: number
  ) => void;
}

export const TabEvaluaciones: React.FC<TabEvaluacionesProps> = ({
  grado,
  asignatura,
  periodo,
  semanaActual,
  onOpenModal
}) => {
  const asigEfectiva: Asignatura = (grado === '10°' || grado === '11°') ? 'Matemáticas' : asignatura;

  return (
    <div className="w-full space-y-6">
      {/* Banner Superior de Evaluaciones */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <FileCheck2 className="w-4 h-4" />
            <span>Sistema Institucional de Evaluación Escolar (SIEE)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Pruebas Tipo ICFES Saber — {asigEfectiva} {grado} (Periodo {periodo})
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Evaluaciones estructuradas con tabla de especificaciones docente, justificación pedagógica y claves de respuesta.
          </p>
        </div>

        <div className="bg-amber-950/60 border border-amber-800/60 px-4 py-2.5 rounded-xl shrink-0 text-center sm:text-right">
          <div className="text-xs font-bold text-amber-300">Formato Estándar A4</div>
          <div className="text-[11px] text-amber-200/80">Impresión Nativa Limpia</div>
        </div>
      </div>

      {/* Grid con las 3 Pruebas Acumulativas del Periodo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Examen 1: Seguimiento 1 (35%) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-500/50 transition group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Percent className="w-3.5 h-3.5" /> 35% del Periodo
              </span>
              <span className="text-xs font-bold text-slate-400">Semanas 1 a 4</span>
            </div>

            <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition mb-2">
              Evaluación de Seguimiento 1
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Evalúa los conceptos fundamentales iniciales del Periodo {periodo} en {asigEfectiva} {grado}. Nivel de dificultad básico-intermedio.
            </p>

            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>10 Preguntas de Selección Múltiple con Única Respuesta</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Competencia de Interpretación y Representación</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Incluye Solucionario y Tabla de Especificaciones</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenModal('evaluacion_seg1', 4)}
            className="w-full py-3 bg-red-900 hover:bg-red-800 text-white font-bold text-xs rounded-xl border border-red-700 shadow-lg flex items-center justify-center gap-2 transition"
          >
            <span>Generar Examen Seguimiento 1 (A4)</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Examen 2: Seguimiento 2 (70%) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-500/50 transition group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Percent className="w-3.5 h-3.5" /> 70% del Periodo
              </span>
              <span className="text-xs font-bold text-slate-400">Semanas 1 a 8</span>
            </div>

            <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition mb-2">
              Evaluación de Seguimiento 2
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Examen acumulativo parcial hasta las dos terceras partes del Periodo {periodo}. Modela problemas contextualizados en Medellín.
            </p>

            <ul className="text-xs text-slate-400 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>10 Preguntas Selección Múltiple + 2 de Desarrollo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Competencias de Formulación y Ejecución</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Análisis de Distractores y Errores Frecuentes</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenModal('evaluacion_seg2', 8)}
            className="w-full py-3 bg-red-900 hover:bg-red-800 text-white font-bold text-xs rounded-xl border border-red-700 shadow-lg flex items-center justify-center gap-2 transition"
          >
            <span>Generar Examen Seguimiento 2 (A4)</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Examen 3: Prueba Acumulativa Final Tipo ICFES (100%) */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-red-950/40 border-2 border-amber-500/60 rounded-2xl p-6 shadow-2xl flex flex-col justify-between hover:border-amber-400 transition group relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-bl-lg">
            Prueba Oficial
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Award className="w-3.5 h-3.5" /> 100% Acumulativo
              </span>
              <span className="text-xs font-bold text-amber-300">Periodo {periodo} Completo</span>
            </div>

            <h3 className="text-lg font-black text-amber-400 group-hover:text-amber-300 transition mb-2">
              Prueba Final Tipo ICFES Saber
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed mb-4">
              Examen acumulativo integral del Periodo {periodo} diseñado estrictamente según los lineamientos de evaluación del ICFES Saber 11.
            </p>

            <ul className="text-xs text-slate-300 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>10 Preguntas ICFES + 2 Abiertas con Rúbrica</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>3 Componentes: Interpretación, Formulación y Argumentación</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Tabla de Especificaciones Docente + Taxonomía de Bloom</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenModal('evaluacion_final', 13)}
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl border border-amber-300 shadow-xl flex items-center justify-center gap-2 transition"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Generar Prueba Final Saber (A4)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
