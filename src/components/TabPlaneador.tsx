import React, { useState } from 'react';
import { Asignatura, Grado, PeriodoId, PlanSemana, EjercicioPractico } from '../types';
import { getPlanSemana } from '../data/mallaCurricular';
import { callGemini } from '../lib/gemini';
import { 
  Sparkles, FileText, Clock, Compass, BookOpen, Layers, Users, Home, 
  ChevronRight, ChevronDown, Lightbulb, CheckCircle, RefreshCw, AlertCircle,
  HelpCircle, Target, ArrowRight, BookMarked
} from 'lucide-react';

interface TabPlaneadorProps {
  grado: Grado;
  asignatura: Asignatura;
  periodo: PeriodoId;
  semana: number;
  setSemana: (s: number) => void;
  onOpenModal: (
    tipo: 'taller' | 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final',
    semanaRef: number,
    autoGenerarIA?: boolean
  ) => void;
  userApiKey: string;
}

export const TabPlaneador: React.FC<TabPlaneadorProps> = ({
  grado,
  asignatura,
  periodo,
  semana,
  setSemana,
  onOpenModal,
  userApiKey
}) => {
  const asigEfectiva: Asignatura = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado) ? 'Matemáticas' : asignatura;
  const planOriginal = getPlanSemana(grado, asigEfectiva, periodo, semana);

  const [planActual, setPlanActual] = useState<PlanSemana>(planOriginal);
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiGeneratedHtml, setAiGeneratedHtml] = useState<string | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const [ejercicioAbierto, setEjercicioAbierto] = useState<number | null>(null);

  // Re-sincronizar con el plan original cuando cambien los filtros
  React.useEffect(() => {
    setPlanActual(getPlanSemana(grado, asigEfectiva, periodo, semana));
    setAiGeneratedHtml(null);
    setAiError(null);
    setEjercicioAbierto(null);
  }, [grado, asignatura, periodo, semana]);

  const maxSemanas = periodo === 3 ? 14 : 13;
  const semanasArray = Array.from({ length: maxSemanas }, (_, i) => {
    if (periodo === 1) return i + 1;
    if (periodo === 2) return i + 14;
    return i + 27;
  });

  const toggleEjercicio = (num: number) => {
    setEjercicioAbierto(ejercicioAbierto === num ? null : num);
  };

  // Generador dinámico de ejercicios de práctica para el tema si no viniesen explícitos
  const esPosteriorASaber11 = grado === '11°' && (periodo === 3 || (periodo === 2 && semana >= 20));

  const formulaGuia = planActual.estructuracionTeorica.formulas[0] || 'f(x) = a × x + b';

  const ejerciciosProcesados: EjercicioPractico[] = planActual.estructuracionTeorica.ejerciciosPracticos || [
    {
      numero: 1,
      nivel: 'Fácil',
      enunciado: `Ejercicio de Aplicación Directa: Partiendo de la expresión matemática fundamental ${formulaGuia}, sustituye los valores numéricos indicados y resuelve la igualdad paso a paso.`,
      pistaDUA: 'Identifica los datos conocidos y sustituye directamente en la fórmula principal.',
      pasosExplicativos: [
        'Paso 1: Identificar los datos iniciales del enunciado.',
        'Paso 2: Seleccionar la fórmula correspondiente del recuadro de propiedades.',
        'Paso 3: Sustituir los valores numéricos de forma ordenada.',
        'Paso 4: Realizar las operaciones aritméticas o algebraicas respetando la jerarquía.'
      ],
      solucionFinal: `Resultado directo comprobado mediante la igualdad ${formulaGuia}.`
    },
    {
      numero: 2,
      nivel: 'Intermedio',
      enunciado: `Problema del Entorno Real (Medellín): Un proyecto comunitario en la Comuna 12 de Medellín requiere calcular el valor de la variable en la igualdad ${formulaGuia}. Halla el resultado concreto y justifica tu procedimiento.`,
      pistaDUA: 'Dibuja un esquema gráfico o tabla de datos antes de plantear la ecuación.',
      pasosExplicativos: [
        'Paso 1: Extraer las variables cuantitativas del contexto.',
        'Paso 2: Formular el modelo matemático o ecuación que relaciona los datos.',
        'Paso 3: Despejar la variable desconocida paso a paso.',
        'Paso 4: Comprobar que el valor obtenido tenga sentido físico y económico en la ciudad.'
      ],
      solucionFinal: 'Respuesta contextualizada validada mediante verificación numérica directa.'
    },
    {
      numero: 3,
      nivel: esPosteriorASaber11 ? 'Profundización' : (grado === '11°' ? 'Desafío ICFES' : 'Desafío Avanzado'),
      enunciado: esPosteriorASaber11 
        ? `Desafío de Análisis Avanzado: Dada la función o relación algebraica ${formulaGuia}, demuestra el procedimiento matemático para comprobar la solución.`
        : (grado === '11°'
          ? `Pregunta de Razonamiento Cuantitativo Saber 11: Dada la relación matemática ${formulaGuia}, analiza los datos para determinar la validez de la afirmación y demuestra el procedimiento.`
          : `Problema de Razonamiento Matemático: Aplica la igualdad ${formulaGuia} para demostrar la solución paso a paso.`),
      pistaDUA: 'Analiza la tendencia de los datos o analiza las condiciones antes de realizar los cálculos.',
      pasosExplicativos: [
        'Paso 1: Leer atentamente las condiciones del problema.',
        'Paso 2: Aplicar el razonamiento algebraico, geométrico o de cálculo correspondiente.',
        'Paso 3: Realizar las simplificaciones numéricas o algebraicas paso a paso.',
        'Paso 4: Concluir con la solución justificada.'
      ],
      solucionFinal: esPosteriorASaber11 
        ? 'Demostración de Cálculo completada y verificada de forma analítica.'
        : 'Demostración matemática completada y argumentada paso a paso.'
    }
  ];

  const handleGenerarConGemini = async () => {
    setLoadingAi(true);
    setAiError(null);

    const reglaSaber1111 = esPosteriorASaber11
      ? '- REGLA ESTRICTA GRADO 11°: Las Pruebas SABER 11 ya se presentaron a mitad del segundo periodo. NUNCA menciones Pruebas SABER 11, ICFES ni simulacros en este plan. Enfócate estrictamente en el contenido curricular (Cálculo / Estadística).'
      : (grado === '11°' ? '- REGLA GRADO 11° PRE-SABER: Incorpora la preparación intensiva y razonamiento cuantitativo para las Pruebas SABER 11 (ICFES).' : '');

    const promptText = `
Actúa como un Licenciado en Matemáticas/Estadística y Experto en Currículo Colombiano con enfoque DUA (Diseño Universal para el Aprendizaje).
Genera una Planeación de Clase Explicita, Detallada e Inspiradora para la Institución Educativa Rafael Uribe Uribe (Medellín, Colombia).

PARÁMETROS OBLIGATORIOS DEL ENCABEZADO Y CURRÍCULO:
- MATERIA: ${asigEfectiva}
- GRADO: ${grado}
- PERIODO: ${periodo}
- SEMANA: ${semana}
- TEMA CURRICULAR OBLIGATORIO: "${planActual.titulo}"
- PENSAMIENTO MATEMÁTICO: ${planActual.pensamiento}
- TIEMPO ESTIMADO: ${planActual.tiempoEstimado || '120 minutos (2 sesiones)'}
- DBA (Derecho Básico de Aprendizaje): ${planActual.dba}
- COMPETENCIA: ${planActual.competencia}
- EVIDENCIA DE APRENDIZAJE: ${planActual.evidencia || 'Apropiar de forma significativa los conceptos matemáticos a través del modelo DUA y el entorno real de Medellín.'}
- CONCEPTOS Y PROPIEDADES TEÓRICAS: ${planActual.estructuracionTeorica.concepto}
- FÓRMULAS OFICIALES: ${planActual.estructuracionTeorica.formulas.join(', ') || 'N/A'}
- CONTEXTUALIZACIÓN MEDELLÍN BASE: ${planActual.exploracionMedellin}

REGLA CRÍTICA DE COHERENCIA TEMÁTICA:
La clase completa, la exploración, la teoría, el ejemplo modelado, los ejercicios prácticos y la tarea DEBEN SER ESTRICTAMENTE SOBRE EL TEMA "${planActual.titulo}". Queda terminantemente prohibido desviar la clase hacia otros temas no correspondientes a esta semana.

${reglaSaber1111}

ESTRUCTURA DE SECCIONES EXIGIDA (Sigue estrictamente estos títulos y contenido):

1. TÍTULO: DUA
   - Mención explícita del Principio DUA seleccionado (ej. Principio I: Proporcionar múltiples formas de representación, Principio II: Proporcionar múltiples formas de acción y expresión, o Principio III: Proporcionar múltiples formas de implicación).
   - Forma explícita y detallada de cómo se evidenciará en la clase el trabajo del DUA aplicado a "${planActual.titulo}".
   - Citas textuales directas según las pautas DUA oficiales.

2. TÍTULO: LA EXPLORACIÓN
   - Actividad lúdica, interactiva y motivadora que despierte la curiosidad sobre "${planActual.titulo}".
   - Contextualización amigable en Medellín (Metro de Medellín, Tranvía de Ayacucho, Parques Biblioteca, Comuna 12, EPM, etc.).
   - Preguntas problematizadoras que conecten con los saberes previos del estudiante sobre "${planActual.titulo}".

3. TÍTULO: ESTRUCTURACIÓN
   - Desarrollo conceptual y formal de la teoría de "${planActual.titulo}".
   - Recuadro de fórmulas y propiedades escritas en texto plano legible (SIN LaTeX, NO uses \\frac, \\sqrt, $, $$).
   - Actividades y preguntas que involucren el pensamiento crítico.
   - Ayudas visuales explícitas: Descripción detallada de una infografía esquemática visual, diagramas de flujo y propuesta de video/recurso audiovisual interactivo.
   - Ejemplo modelado por el docente paso a paso con números concretos y solución comprobada para "${planActual.titulo}".

4. TÍTULO: ACTIVIDADES PRÁCTICAS Y TRABAJO EN EQUIPO
   - Batería de 3 ejercicios prácticos graduados (Fácil, Intermedio, Desafío) sobre "${planActual.titulo}" con pistas DUA, procedimiento paso a paso y solución comprobada.
   - Dinámica explícita de colaboración en grupo (roles: Líder de consulta, Verificador numérico, Expositor).

5. TÍTULO: TAREA Y PROYECTO APLICADO
   - Tarea motivadora contextualizada en el barrio o ciudad sobre "${planActual.titulo}".

CONTEXTO Y TONO:
- Tono pedagógico, claro, cercano e inspirador.
- Colegio: Institución Educativa Rafael Uribe Uribe de Medellín.
- RESTRICCIONES: No omitir ni resumir de manera concisa la información. Entrega todos los elementos pedagógicos necesarios para el docente.

Escribe la respuesta directamente en HTML limpio listo para renderizar usando clases de Tailwind CSS (bg-slate-900, text-slate-100, border-slate-800, p-5, rounded-2xl). No agregues bloques de código markdown (\`\`\`html).
`;

    try {
      const text = await callGemini({
        prompt: promptText,
        systemInstruction: 'Eres un tutor experto en matemática escolar colombiana DUA y Pruebas ICFES Saber para la IE Rafael Uribe Uribe de Medellín. NUNCA uses código o etiquetas LaTeX (no usar \\frac, \\sqrt, $, $$). Escribe la matemática en texto claro y legible.',
        userApiKey: userApiKey || undefined,
      });

      // Limpiar markdown si viniera
      let cleanedText = text.replace(/```html/gi, '').replace(/```/g, '').trim();
      setAiGeneratedHtml(cleanedText);
    } catch (err: any) {
      console.error(err);
      setAiError(err.message || 'Error al conectar con la Inteligencia Artificial.');
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Barra de Selección de Semana y Botones de Acción */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Selector de Semanas */}
        <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Semana:
          </span>
          {semanasArray.map((sNum) => (
            <button
              key={sNum}
              onClick={() => setSemana(sNum)}
              className={`w-9 h-9 text-xs font-black rounded-lg transition shrink-0 flex items-center justify-center ${
                semana === sNum
                  ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-300 shadow-md font-bold'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {sNum}
            </button>
          ))}
        </div>

        {/* Botones de Acción Especial (IA y Modal) */}
        <div className="w-full md:w-auto flex flex-wrap items-center gap-2 shrink-0 justify-end">
          <button
            onClick={handleGenerarConGemini}
            disabled={loadingAi}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-purple-900 hover:bg-purple-800 text-purple-100 font-bold text-xs rounded-xl border border-purple-700 shadow-lg transition disabled:opacity-50"
            title="Genera un plan de clase inédito detallado DUA para esta semana con IA Gemini"
          >
            {loadingAi ? (
              <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
            ) : (
              <Sparkles className="w-4 h-4 text-amber-400" />
            )}
            <span>{loadingAi ? 'Generando Plan...' : '✨ IA Gemini: Plan Inédito'}</span>
          </button>

          <button
            onClick={() => onOpenModal('taller', semana, true)}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-indigo-900 hover:bg-indigo-800 text-indigo-100 font-bold text-xs rounded-xl border border-indigo-700 shadow-lg transition"
            title="Generar e imprimir un taller práctico inédito con IA Gemini en tamaño Oficio exportable a Word"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>✨ Taller Práctico IA (Oficio/Word)</span>
          </button>

          <button
            onClick={() => onOpenModal('taller', semana, false)}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-red-900 hover:bg-red-800 text-white font-bold text-xs rounded-xl border border-red-700 shadow-lg transition"
            title="Ver taller estándar en formato imprimible Tamaño Oficio"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Taller Estándar (Oficio)</span>
          </button>
        </div>
      </div>

      {/* Error de IA si existe */}
      {aiError && (
        <div className="bg-rose-950/80 border border-rose-800 text-rose-200 p-4 rounded-xl text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{aiError}</span>
        </div>
      )}

      {/* Si hay contenido generado por IA Gemini, mostrarlo arriba */}
      {aiGeneratedHtml ? (
        <div className="bg-slate-900 border-2 border-purple-800/80 rounded-2xl p-6 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-800/50">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Plan de Clase Generado Inéditamente por IA Gemini</span>
            </div>
            <button
              onClick={() => setAiGeneratedHtml(null)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded border border-slate-700"
            >
              Volver al Plan Predeterminado
            </button>
          </div>
          <div 
            className="prose prose-invert max-w-none text-slate-200 text-sm space-y-4"
            dangerouslySetInnerHTML={{ __html: aiGeneratedHtml }}
          />
        </div>
      ) : (
        /* Tarjeta Magistral de Plan de Clase Estructurado DUA */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header del Plan */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <span>IE Rafael Uribe Uribe</span>
                <span>•</span>
                <span>{asigEfectiva} {grado}</span>
                <span>•</span>
                <span className="text-slate-300">Periodo {periodo}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Semana {planActual.semana}: {planActual.titulo}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 shrink-0 self-start sm:self-center">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{planActual.tiempoEstimado}</span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Fila 1: Competencias y Evidencias */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> Competencia & Pensamiento
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">{planActual.pensamiento}</strong>. {planActual.competencia}
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Evidencia de Aprendizaje
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {planActual.evidencia}
                </p>
              </div>
            </div>

            {/* Fila 2: DUA (Diseño Universal para el Aprendizaje) */}
            <div className="bg-gradient-to-br from-indigo-950/50 via-slate-950 to-slate-950 p-5 rounded-2xl border border-indigo-900/40">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Estrategia DUA (Diseño Universal para el Aprendizaje)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-indigo-900/30">
                  <span className="font-bold text-amber-400 block mb-1">1. Múltiples Formas de Representación:</span>
                  <p className="text-slate-300">{planActual.dua.representacion}</p>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-indigo-900/30">
                  <span className="font-bold text-amber-400 block mb-1">2. Múltiples Formas de Expresión:</span>
                  <p className="text-slate-300">{planActual.dua.expresion}</p>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-indigo-900/30">
                  <span className="font-bold text-amber-400 block mb-1">3. Múltiples Formas de Implicación:</span>
                  <p className="text-slate-300">{planActual.dua.implicacion}</p>
                </div>
              </div>
            </div>

            {/* DESARROLLO DE LA TEMÁTICA PASO A PASO */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white tracking-tight uppercase">
                    Desarrollo Pedagógico de la Clase Paso a Paso
                  </h3>
                  <p className="text-xs text-slate-400">
                    Secuencia didáctica estructurada de 120 minutos con explicaciones teóricas, ejemplos modelados y ejercicios resueltos.
                  </p>
                </div>
              </div>

              {/* PASO 1: Inicio y Motivación Contextualizada */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-xs uppercase">
                      Paso 1
                    </span>
                    <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide">
                      Inicio y Motivación Contextualizada en Medellín
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    15 - 20 Min
                  </span>
                </div>
                <div className="bg-amber-950/20 border border-amber-800/30 p-4 rounded-xl text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4" /> Reto de Indagación y Exploración:
                  </div>
                  <p>{planActual.exploracionMedellin}</p>
                </div>
                <p className="text-xs text-slate-400 italic">
                  <strong>Acción del docente:</strong> Formular la pregunta problematizadora en el tablero, activar saberes previos mediante lluvia de ideas y conectar con la experiencia cotidiana de los estudiantes en la Comuna 12 y Medellín.
                </p>
              </div>

              {/* PASO 2: Conceptualización y Explicación Teórica */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-black text-xs uppercase">
                      Paso 2
                    </span>
                    <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wide">
                      Desarrollo Teórico y Explicación Conceptualmente Guiada
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    30 - 40 Min
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-slate-100 text-xs uppercase tracking-wider mb-1">
                    Definición Formal y Leyes Fundamentales:
                  </div>
                  <p>{planActual.estructuracionTeorica.concepto}</p>
                </div>

                {/* Recuadro Algebraico de Fórmulas */}
                {planActual.estructuracionTeorica.formulas.length > 0 && (
                  <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-blue-500 font-mono text-xs text-blue-300 space-y-2">
                    <div className="text-[10px] text-slate-400 uppercase font-sans font-bold flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-blue-400" />
                      Recuadro de Fórmulas / Propiedades Clave:
                    </div>
                    {planActual.estructuracionTeorica.formulas.map((form, fIdx) => (
                      <div key={fIdx} className="font-bold text-sm text-amber-300 bg-slate-950/70 p-2 rounded border border-slate-800">
                        {form}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* PASO 3: Ejemplo Modelado Paso a Paso */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs uppercase">
                      Paso 3
                    </span>
                    <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wide">
                      Ejemplo Demostrativo Modelado Paso a Paso (Docente)
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    20 - 25 Min
                  </span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="w-4 h-4" /> Enunciado del Problema Resuelto:
                  </div>
                  <div className="text-xs font-semibold text-white bg-slate-950 p-3 rounded-lg border border-slate-800">
                    {planActual.estructuracionTeorica.ejemploPasoAPaso.enunciado}
                  </div>
                  
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider pt-1">
                    Procedimiento de Resolución Paso a Paso:
                  </div>
                  <div className="space-y-2 pl-2">
                    {planActual.estructuracionTeorica.ejemploPasoAPaso.pasos.map((paso, pIdx) => (
                      <div key={pIdx} className="text-xs text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-850 flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {pIdx + 1}
                        </span>
                        <span className="leading-relaxed">{paso}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-800 p-3 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Solución Final Comprobada:</strong> {planActual.estructuracionTeorica.ejemploPasoAPaso.solucionFinal}</span>
                  </div>
                </div>
              </div>

              {/* PASO 4: Batería de Ejercicios Prácticos de Aplicación */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-600 text-white font-black text-xs uppercase">
                      Paso 4
                    </span>
                    <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wide">
                      Taller y Batería de Ejercicios Prácticos de Aplicación en Aula
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    30 - 35 Min
                  </span>
                </div>

                <p className="text-xs text-slate-300">
                  Ejercicios prácticos graduados para desarrollar en el cuaderno individualmente o en parejas. Haz clic en cada ejercicio para ver su guía de resolución paso a paso:
                </p>

                <div className="space-y-3">
                  {ejerciciosProcesados.map((ej) => {
                    const isOpen = ejercicioAbierto === ej.numero;
                    return (
                      <div 
                        key={ej.numero}
                        className="bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden transition"
                      >
                        <button
                          onClick={() => toggleEjercicio(ej.numero)}
                          className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-850 transition"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                              ej.nivel === 'Fácil' 
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                                : ej.nivel === 'Intermedio' 
                                ? 'bg-amber-950 text-amber-400 border border-amber-800' 
                                : 'bg-purple-950 text-purple-300 border border-purple-800'
                            }`}>
                              Ejercicio {ej.numero} • {ej.nivel}
                            </span>
                            <span className="text-xs font-bold text-slate-100 line-clamp-1">
                              {ej.enunciado}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 text-xs text-amber-400 font-bold">
                            <span>{isOpen ? 'Ocultar Solución' : 'Ver Solución Paso a Paso'}</span>
                            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
                            <div className="text-xs text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800">
                              <strong>Enunciado Completo:</strong> {ej.enunciado}
                            </div>

                            {ej.pistaDUA && (
                              <div className="text-xs text-indigo-300 bg-indigo-950/40 border border-indigo-900/50 p-2.5 rounded-lg flex items-center gap-2">
                                <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                                <span><strong>Pista DUA / Apoyo Pedagógico:</strong> {ej.pistaDUA}</span>
                              </div>
                            )}

                            <div className="space-y-1.5 pt-1">
                              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                                Resolución Paso a Paso:
                              </span>
                              {ej.pasosExplicativos.map((pasoEx, pxIdx) => (
                                <div key={pxIdx} className="text-xs text-slate-300 flex items-start gap-2 pl-2">
                                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                  <span>{pasoEx}</span>
                                </div>
                              ))}
                            </div>

                            <div className="text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-800 p-2.5 rounded-lg">
                              Solución Final: {ej.solucionFinal}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PASO 5: Cierre Formativo, Trabajo Colaborativo y Tarea Barrial */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-red-800 text-white font-black text-xs uppercase">
                      Paso 5
                    </span>
                    <h4 className="text-sm font-bold text-red-300 uppercase tracking-wide">
                      Cierre, Evaluación Formativa y Tarea Barrial
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    10 - 15 Min
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Users className="w-4 h-4" /> Trabajo Colaborativo en Aula:
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {planActual.ejercitacionYCierre.colaborativo}
                    </p>
                  </div>

                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Home className="w-4 h-4" /> Tarea Barrial (Entorno Real):
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {planActual.ejercitacionYCierre.tareaBarrial}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

