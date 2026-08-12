import React, { useState, useEffect } from 'react';
import { DocumentoEscolar } from '../types';
import { 
  Printer, Eye, EyeOff, Sparkles, X, School, Calendar, CheckCircle, RefreshCw, AlertCircle 
} from 'lucide-react';
import { EscudoColegio } from './EscudoColegio';
import { callGemini } from '../lib/gemini';

interface ModalDocumentoProps {
  documento: DocumentoEscolar;
  autoGenerarIA?: boolean;
  onClose: () => void;
  userApiKey: string;
}

export const ModalDocumento: React.FC<ModalDocumentoProps> = ({
  documento,
  autoGenerarIA,
  onClose,
  userApiKey
}) => {
  const [esModoDocente, setEsModoDocente] = useState(false);
  const [docActual, setDocActual] = useState<DocumentoEscolar>(documento);
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  useEffect(() => {
    if (autoGenerarIA) {
      handleRegenerarConGemini();
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleRegenerarConGemini = async () => {
    setLoadingAi(true);
    setAiError(null);

    const esTaller = docActual.tipo === 'taller';

    const promptText = esTaller
      ? `
Actúa como un Licenciado en Matemáticas y Experto en DUA (Diseño Universal para el Aprendizaje).
Genera un TALLER FORMATIVO Y GUÍA PRÁCTICA DUA en JSON para la IE Rafael Uribe Uribe (Medellín, Colombia):
- Tipo: taller
- Grado: ${docActual.grado}
- Asignatura: ${docActual.asignatura}
- Periodo: ${docActual.periodo}
- Semana Ref: ${docActual.semanaRef || 1}

REGLAS OBLIGATORIAS:
- NUNCA utilices notación o expresiones en LaTeX (NO utilices \\frac, \\sqrt, \\begin, $, $$).
- Escribe todas las fórmulas e igualdades en texto plano comprensible para estudiantes de ${docActual.grado} usando caracteres estándar (ej. a / b, x², √x, ×, ÷, ±, π).
- Diseña 8 ejercicios o actividades prácticas graduadas por nivel de dificultad (2 Fácil, 4 Intermedio, 2 Desafío) contextualizados en Medellín (Metro, Tranvía de Ayacucho, Comuna 12, EPM, Parques Biblioteca).
- Incluye 6 preguntas de selección múltiple (A, B, C, D) y 2 de desarrollo abierto con procedimiento guiado.

Responde ÚNICAMENTE en JSON válido con la siguiente estructura:
{
  "tipo": "taller",
  "titulo": "TALLER GUÍA DE APRENDIZAJE DUA - ${docActual.asignatura} ${docActual.grado} (SEMANA ${docActual.semanaRef || 1})",
  "asignatura": "${docActual.asignatura}",
  "grado": "${docActual.grado}",
  "periodo": ${docActual.periodo},
  "semanaRef": ${docActual.semanaRef || 1},
  "porcentajeEvaluación": "Formativo (Guía de Ejercitación y Trabajo DUA)",
  "preguntas": [
    {
      "id": 1,
      "tipo": "seleccion_multiple",
      "contexto": "Situación práctica real en Medellín...",
      "enunciado": "Ejercicio o problema claro para ${docActual.grado}...",
      "opciones": [
        {"key": "A", "texto": "Opción 1"},
        {"key": "B", "texto": "Opción 2"},
        {"key": "C", "texto": "Opción 3"},
        {"key": "D", "texto": "Opción 4"}
      ],
      "respuestaCorrecta": "A",
      "justificacionPedagogica": "Paso a paso de la resolución...",
      "competenciaICFES": "Interpretación y Representación",
      "procesoMatematico": "Resolución de Problemas",
      "nivelBloom": "Aplicación/Análisis"
    }
  ],
  "tablaEspecificaciones": {
    "totalPreguntas": 8,
    "interpretacionCount": 3,
    "formulacionCount": 3,
    "argumentacionCount": 2
  }
}
`
      : `
Actúa como un Experto en Evaluación Educativa Colombiana del ICFES y Licenciado en Matemáticas.
Genera una EVALUACIÓN PRUEBA TIPO ICFES SABER completa en JSON para la IE Rafael Uribe Uribe de Medellín:
- Tipo: ${docActual.tipo}
- Grado: ${docActual.grado}
- Asignatura: ${docActual.asignatura}
- Periodo: ${docActual.periodo}
- Semana Ref: ${docActual.semanaRef || 1}

REGLAS OBLIGATORIAS:
- NUNCA utilices notación o expresiones en LaTeX (NO utilices \\frac, \\sqrt, \\begin, $, $$).
- Escribe todas las fórmulas e igualdades en texto plano comprensible para estudiantes de ${docActual.grado} usando caracteres estándar (ej. a / b, x², √x, ×, ÷, ±, π).
- Genera 10 preguntas (8 de selección múltiple tipo ICFES con 4 opciones A, B, C, D + 2 abiertas de desarrollo) contextualizadas en Medellín (Metro, EPM, Comuna 13, Parque Explora, Atanasio Girardot).

Responde ÚNICAMENTE en JSON válido con el siguiente esquema:
{
  "tipo": "${docActual.tipo}",
  "titulo": "PRUEBA TIPO ICFES SABER - ${docActual.asignatura} ${docActual.grado} (PERIODO ${docActual.periodo})",
  "asignatura": "${docActual.asignatura}",
  "grado": "${docActual.grado}",
  "periodo": ${docActual.periodo},
  "semanaRef": ${docActual.semanaRef || 1},
  "porcentajeEvaluación": "${docActual.porcentajeEvaluación || '100%'}",
  "preguntas": [
    {
      "id": 1,
      "tipo": "seleccion_multiple",
      "contexto": "Texto breve de la situación en Medellín...",
      "enunciado": "Pregunta clara...",
      "opciones": [
        {"key": "A", "texto": "Opción 1"},
        {"key": "B", "texto": "Opción 2"},
        {"key": "C", "texto": "Opción 3"},
        {"key": "D", "texto": "Opción 4"}
      ],
      "respuestaCorrecta": "A",
      "justificacionPedagogica": "Por qué es correcta la opción A...",
      "competenciaICFES": "Interpretación y Representación",
      "procesoMatematico": "Resolución de Problemas",
      "nivelBloom": "Aplicación/Análisis"
    }
  ],
  "tablaEspecificaciones": {
    "totalPreguntas": 10,
    "interpretacionCount": 3,
    "formulacionCount": 4,
    "argumentacionCount": 3
  }
}
`;

    try {
      const rawText = await callGemini({
        prompt: promptText,
        systemInstruction: 'Responde exclusivamente en JSON válido sin marcadores markdown. NUNCA uses fórmulas ni código LaTeX (sin \\frac, \\sqrt, $, $$). Usa texto plano y símbolos estándar.',
        responseMimeType: 'application/json',
        userApiKey: userApiKey || undefined,
      });

      // Limpiar y extraer únicamente el bloque JSON entre llaves { ... }
      let jsonStr = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
      const firstBrace = jsonStr.indexOf('{');
      const lastBrace = jsonStr.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
      }

      const parsedJson = JSON.parse(jsonStr);
      setDocActual(parsedJson);
    } catch (err: any) {
      console.error(err);
      setAiError(err.message || 'Error al generar la evaluación inédita con Gemini AI.');
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm overflow-y-auto p-2 sm:p-4 md:p-6 flex justify-center items-start print:p-0 print:bg-white print:static print:block">
      {/* Estilos CSS nativos para impresión limpia @media print */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
          }
          /* Ocultar elementos de UI no imprimibles */
          header, nav, footer, button, .print\\:hidden {
            display: none !important;
          }
          /* Ajustes de Hoja A4 para la impresión */
          .printable-paper {
            width: 100% !important;
            max-width: none !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Contenedor Principal del Modal */}
      <div className="w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden print:bg-white print:border-none print:shadow-none print:rounded-none">
        {/* Barra Superior de Herramientas del Modal (No imprimible) */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setEsModoDocente(!esModoDocente)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
                esModoDocente
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
              }`}
            >
              {esModoDocente ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4" />}
              <span>{esModoDocente ? 'Versión Docente (Respuestas Visibles)' : 'Versión Estudiante (Limpio)'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRegenerarConGemini}
              disabled={loadingAi}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-900 hover:bg-purple-800 text-purple-100 text-xs font-bold rounded-lg border border-purple-700 shadow transition disabled:opacity-50"
            >
              {loadingAi ? <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" /> : <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
              <span>{loadingAi ? 'Generando...' : '✨ Generar Nuevo con IA'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg shadow transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mensaje de Error de IA si existe */}
        {aiError && (
          <div className="bg-rose-950 text-rose-200 p-3 text-xs flex items-center gap-2 border-b border-rose-800 print:hidden">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{aiError}</span>
          </div>
        )}

        {/* HOJA DE PAPEL ESTILO A4 IMPRIMIBLE */}
        <div className="printable-paper bg-white text-slate-900 p-6 sm:p-10 font-sans space-y-6">
          {/* Membrete Oficial Institucional */}
          <div className="border-2 border-slate-900 p-4 rounded-sm space-y-3">
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <EscudoColegio className="w-14 h-14 shrink-0" />

              <div className="text-center flex-1 px-2">
                <h1 className="font-black text-base sm:text-lg uppercase tracking-tight leading-tight text-slate-900">
                  INSTITUCIÓN EDUCATIVA RAFAEL URIBE URIBE
                </h1>
                <p className="text-[11px] font-semibold text-slate-700">
                  Medellín, Colombia • DANE 105001001880 • NIT 811019283-4
                </p>
                <p className="text-xs font-bold text-red-900 uppercase mt-0.5">
                  {docActual.titulo}
                </p>
              </div>

              <div className="text-right text-[11px] font-mono border-l-2 border-slate-900 pl-3 shrink-0">
                <div><strong>AÑO:</strong> 2026</div>
                <div><strong>PERIODO:</strong> {docActual.periodo}</div>
                <div><strong>VALOR:</strong> {docActual.porcentajeEvaluación}</div>
              </div>
            </div>

            {/* Campos de Identificación del Estudiante */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium pt-1">
              <div className="border-b border-slate-400 pb-1">
                <span className="font-bold">Estudiante:</span> __________________________
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="font-bold">Grado/Grupo:</span> {docActual.grado}
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="font-bold">Asignatura:</span> {docActual.asignatura}
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="font-bold">Docente:</span> Lic. Matemáticas IE RUU
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="font-bold">Fecha:</span> ____/____/2026
              </div>
              <div className="border-b border-slate-400 pb-1 font-bold text-red-900">
                <span>Calificación:</span> _____ / 5.0
              </div>
            </div>
          </div>

          {/* Indicador de Versión Docente en la Hoja */}
          {esModoDocente && (
            <div className="bg-emerald-100 border-l-4 border-emerald-600 p-3 text-xs text-emerald-900 font-medium rounded-r-sm print:bg-emerald-50">
              <strong>DOCUMENTO DE USO EXCLUSIVO DOCENTE:</strong> Incluye respuestas correctas en verde, justificación pedagógica y tabla de especificaciones.
            </div>
          )}

          {/* CUESTIONARIO / CUERPO DE PREGUNTAS */}
          <div className="space-y-6 pt-2">
            <h2 className="font-bold text-sm uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
              Cuestionario Tipo ICFES Saber ({docActual.preguntas.length} Preguntas)
            </h2>

            {docActual.preguntas.map((preg, index) => (
              <div key={preg.id || index} className="space-y-2 border-b border-slate-200 pb-4">
                {/* Contexto y Enunciado */}
                <div className="text-xs text-slate-800 font-medium leading-relaxed">
                  <span className="font-black text-slate-900 text-sm mr-1">
                    {index + 1}.
                  </span>
                  <span className="italic text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">
                    [{preg.contexto}]
                  </span>
                  <strong className="text-slate-900">{preg.enunciado}</strong>
                </div>

                {/* Opciones de Selección Múltiple */}
                {preg.tipo === 'seleccion_multiple' && preg.opciones && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 text-xs font-medium pt-1">
                    {preg.opciones.map((opc) => {
                      const esCorrecta = preg.respuestaCorrecta === opc.key;
                      return (
                        <div
                          key={opc.key}
                          className={`p-2 rounded border transition ${
                            esModoDocente && esCorrecta
                              ? 'bg-emerald-100 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-500'
                              : 'bg-slate-50 border-slate-200 text-slate-800'
                          }`}
                        >
                          <span className="font-bold mr-1.5">{opc.key})</span>
                          <span>{opc.texto}</span>
                          {esModoDocente && esCorrecta && (
                            <span className="ml-2 text-[10px] bg-emerald-800 text-white px-1.5 py-0.5 rounded uppercase font-bold">
                              Correcta
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Espacio para Preguntas Abiertas */}
                {preg.tipo === 'desarrollo' && (
                  <div className="my-3 p-3 border-2 border-dashed border-slate-300 rounded bg-slate-50 text-xs text-slate-400 h-24 flex items-center justify-center font-mono">
                    [ Espacio asignado para la resolución escrita y procedimiento del estudiante ]
                  </div>
                )}

                {/* Justificación Pedagógica y Metadatos Docentes (Modo Docente) */}
                {esModoDocente && (
                  <div className="mt-2 bg-slate-100 p-3 rounded text-xs space-y-1 text-slate-800 border-l-4 border-indigo-600">
                    <div className="font-bold text-indigo-900">
                      Justificación Pedagógica & Criterio de Calificación:
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {preg.justificacionPedagogica}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-semibold text-slate-600">
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-300">
                        Competencia: {preg.competenciaICFES}
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-300">
                        Proceso: {preg.procesoMatematico}
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded border border-slate-300">
                        Bloom: {preg.nivelBloom}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* TABLA DE ESPECIFICACIONES DOCENTE (Visible solo en Modo Docente) */}
          {esModoDocente && docActual.tablaEspecificaciones && (
            <div className="pt-6 page-break">
              <div className="border-2 border-slate-900 p-4 rounded-sm space-y-3 bg-slate-50">
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1">
                  Tabla de Especificaciones Pedagógicas para el Docente (ICFES Saber)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center font-semibold">
                  <div className="bg-white p-2 rounded border border-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase">Total Ítems</div>
                    <div className="text-lg font-black text-slate-900">{docActual.tablaEspecificaciones.totalPreguntas}</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase">Interpretación</div>
                    <div className="text-lg font-black text-indigo-900">{docActual.tablaEspecificaciones.interpretacionCount}</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase">Formulación</div>
                    <div className="text-lg font-black text-indigo-900">{docActual.tablaEspecificaciones.formulacionCount}</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase">Argumentación</div>
                    <div className="text-lg font-black text-indigo-900">{docActual.tablaEspecificaciones.argumentacionCount}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pie de Página Institucional */}
          <div className="text-center text-[10px] text-slate-500 border-t border-slate-300 pt-3">
            IE Rafael Uribe Uribe • Medellín, Colombia • Área de Matemáticas y Estadística • Formato DUA / Pruebas ICFES
          </div>
        </div>
      </div>
    </div>
  );
};
