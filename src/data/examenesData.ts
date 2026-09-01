import { Asignatura, DocumentoEscolar, Grado, PeriodoId, PreguntaICFES, PlanSemana } from '../types';
import { getPlanSemana, mallaCurricular } from './mallaCurricular';

/**
 * Genera un taller o evaluación asegurando que CADA ejercicio y pregunta
 * coincida rigurosamente con la temática indicada en la malla curricular.
 */
export function generarDocumentoOffline(
  tipo: 'taller' | 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final',
  grado: Grado,
  asignatura: Asignatura,
  periodo: PeriodoId,
  semana: number
): DocumentoEscolar {
  const asigEfectiva: Asignatura = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado) ? 'Matemáticas' : asignatura;
  const plan = getPlanSemana(grado, asigEfectiva, periodo, semana);

  let titulo = '';
  let porcentaje = '';

  if (tipo === 'taller') {
    titulo = `TALLER FORMATIVO - SEMANA ${semana}: ${plan.titulo.toUpperCase()}`;
    porcentaje = 'Formativo (Guía de Ejercitación semanal)';
    return generarTallerEspecifico(plan, grado, asigEfectiva, periodo, semana, titulo, porcentaje);
  } else if (tipo === 'evaluacion_seg1') {
    titulo = `EVALUACIÓN DE SEGUIMIENTO 1 (35%) - PERIODO ${periodo}`;
    porcentaje = '35% del Periodo';
    return generarEvaluacionPeriodo(grado, asigEfectiva, periodo, 1, 4, tipo, titulo, porcentaje);
  } else if (tipo === 'evaluacion_seg2') {
    titulo = `EVALUACIÓN DE SEGUIMIENTO 2 (70%) - PERIODO ${periodo}`;
    porcentaje = '70% del Periodo';
    return generarEvaluacionPeriodo(grado, asigEfectiva, periodo, 1, 8, tipo, titulo, porcentaje);
  } else {
    titulo = `PRUEBA ACUMULATIVA FINAL TIPO ICFES SABER (100%) - PERIODO ${periodo}`;
    porcentaje = '100% Acumulativo Periodo';
    return generarEvaluacionPeriodo(grado, asigEfectiva, periodo, 1, 14, tipo, titulo, porcentaje);
  }
}

/**
 * Construye un Taller Formativo de 8 a 10 ejercicios 100% alineados con el tema de la semana.
 */
function generarTallerEspecifico(
  plan: PlanSemana,
  grado: Grado,
  asignatura: Asignatura,
  periodo: PeriodoId,
  semana: number,
  titulo: string,
  porcentajeEvaluación: string
): DocumentoEscolar {
  const tipo: 'taller' = 'taller';
  const preguntas: PreguntaICFES[] = [];
  const ejercicios = plan.estructuracionTeorica.ejerciciosPracticos || [];
  const formulas = plan.estructuracionTeorica.formulas || [];
  const concepto = plan.estructuracionTeorica.concepto;
  const ejemplo = plan.estructuracionTeorica.ejemploPasoAPaso;

  let idCounter = 1;

  // 1. Actividad de apertura contextualizada en Medellín con el concepto de la semana
  preguntas.push({
    id: idCounter++,
    tipo: 'seleccion_multiple',
    contexto: `${plan.exploracionMedellin}`,
    enunciado: `A partir de la situación planteada y aplicando los conceptos de "${plan.titulo}", ¿cuál es el análisis o planteamiento cuantitativo correcto?`,
    opciones: [
      {
        key: 'A',
        texto: `Aplicar el concepto: ${concepto.substring(0, 110)}... garantizando la modelación adecuada.`
      },
      {
        key: 'B',
        texto: `Sumar los valores numéricos sin verificar las unidades de medida ni la coherencia del problema.`
      },
      {
        key: 'C',
        texto: `Asumir un valor arbitrario sin considerar las condiciones o variables de la situación.`
      },
      {
        key: 'D',
        texto: `Descartar la información contextual por no ser relevante para el cálculo formal.`
      }
    ],
    respuestaCorrecta: 'A',
    justificacionPedagogica: `Respuesta A correcta: En el tema "${plan.titulo}", la resolución parte de identificar las variables del contexto y aplicar rigurosamente el concepto: ${concepto}`,
    competenciaICFES: 'Interpretación y Representación',
    procesoMatematico: 'Comunicación',
    nivelBloom: 'Conocimiento/Comprensión'
  });

  // 2. Ejercicio modelado / paso a paso del docente adaptado a pregunta
  if (ejemplo && ejemplo.enunciado) {
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `En el ejemplo explicativo de la clase sobre ${plan.titulo}, se propone: "${ejemplo.enunciado}"`,
      enunciado: `Siguiendo el procedimiento formal paso a paso, ¿cuál es el resultado correcto y su fundamentación?`,
      opciones: [
        { key: 'A', texto: `Resultado comprobado: ${ejemplo.solucionFinal}` },
        { key: 'B', texto: `Resultado alternativo con omisión de signos o simplificación parcial.` },
        { key: 'C', texto: `Valor duplicado por error en la aplicación de la propiedad operacional.` },
        { key: 'D', texto: `Resultado con inversión del orden en las operaciones fundamentales.` }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: `Respuesta A correcta: Procedimiento paso a paso:\n${ejemplo.pasos.join('\n')}\nSolución final: ${ejemplo.solucionFinal}`,
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Aplicación/Análisis'
    });
  }

  // 3. Convertir los ejercicios prácticos de la semana en preguntas del taller
  ejercicios.forEach((ej) => {
    const esDesafio = (ej.nivel as string).includes('Desafío');
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `Tema: ${plan.titulo} (Nivel ${ej.nivel}). ${ej.pistaDUA ? `Pista DUA: ${ej.pistaDUA}` : ''}`,
      enunciado: `${ej.enunciado}`,
      opciones: [
        { key: 'A', texto: `${ej.solucionFinal}` },
        { key: 'B', texto: `Resultado obtenido al operar con signo contrario o sin despejar la variable.` },
        { key: 'C', texto: `Valor aproximado sin aplicar la propiedad distributiva o simplificación.` },
        { key: 'D', texto: `Resultado nulo por cancelación indebida de términos.` }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: `Respuesta A correcta: ${ej.pasosExplicativos.join(' -> ')}. Solución final: ${ej.solucionFinal}`,
      competenciaICFES: ej.nivel === 'Fácil' ? 'Interpretación y Representación' : 'Formulación y Ejecución',
      procesoMatematico: 'Resolución de Problemas',
      nivelBloom: esDesafio ? 'Evaluación/Creación' : 'Aplicación/Análisis'
    });
  });

  // 4. Pregunta sobre fórmulas y propiedades si existen
  if (formulas.length > 0) {
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `En el marco teórico de ${plan.titulo} se utiliza la expresión: ${formulas.join(' y ')}.`,
      enunciado: `¿Bajo qué condiciones matemáticas es válida y cómo se interpreta la aplicación de la fórmula ${formulas[0]}?`,
      opciones: [
        { key: 'A', texto: `Es válida en los números reales y permite calcular el valor exacto manteniendo la igualdad de la ecuación.` },
        { key: 'B', texto: `Solo aplica cuando todos los términos tienen valor cero o son enteros negativos.` },
        { key: 'C', texto: `Modifica las unidades de medida originales de forma no proporcional.` },
        { key: 'D', texto: `Requiere ignorar los signos operacionales para simplificar el procedimiento.` }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: `Respuesta A correcta: La fórmula ${formulas[0]} preserva la coherencia y equivalencia algebraica dentro del conjunto numérico y las condiciones del tema ${plan.titulo}.`,
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Conocimiento/Comprensión'
    });
  }

  // 5. Ejercicios abiertos de desarrollo práctico y tarea barrial
  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `ACTIVIDAD PRÁCTICA COLABORATIVA DUA - TEMA: ${plan.titulo.toUpperCase()}.`,
    enunciado: `${plan.ejercitacionYCierre.colaborativo}\n\nDesarrolla en tu cuaderno el procedimiento completo con justificación matemática, incluyendo:\n1) Datos conocidos y planteamiento.\n2) Procedimiento ordenado paso a paso.\n3) Comprobación del resultado obtenido.`,
    justificacionPedagogica: `CRITERIO DE EVALUACIÓN DOCENTE:\n- Plantea correctamente el problema aplicando los conceptos de ${plan.titulo} (1.5 Pts).\n- Ejecuta las operaciones y fórmulas matemáticas sin errores de cálculo (2.0 Pts).\n- Socializa y redacta la conclusión con sentido contextual (1.5 Pts).`,
    competenciaICFES: 'Formulación y Ejecución',
    procesoMatematico: 'Resolución de Problemas',
    nivelBloom: 'Evaluación/Creación'
  });

  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `APLICACIÓN EN EL ENTORNO BARRIAL Y COMUNIDAD (IE RAFAEL URIBE URIBE).`,
    enunciado: `${plan.ejercitacionYCierre.tareaBarrial}\n\nExplica con tus propias palabras cómo el tema "${plan.titulo}" te permite interpretar o resolver una situación real en tu barrio de Medellín.`,
    justificacionPedagogica: `CRITERIO DE EVALUACIÓN DOCENTE:\n- Identifica una situación real pertinente al tema (2.5 Pts).\n- Aplica la matemática aprendida para formular una solución o análisis cuantitativo claro (2.5 Pts).`,
    competenciaICFES: 'Argumentación',
    procesoMatematico: 'Modelación',
    nivelBloom: 'Evaluación/Creación'
  });

  return {
    tipo,
    titulo,
    asignatura,
    grado,
    periodo,
    semanaRef: semana,
    porcentajeEvaluación,
    preguntas,
    tablaEspecificaciones: {
      totalPreguntas: preguntas.length,
      interpretacionCount: preguntas.filter(p => p.competenciaICFES === 'Interpretación y Representación').length,
      formulacionCount: preguntas.filter(p => p.competenciaICFES === 'Formulación y Ejecución').length,
      argumentacionCount: preguntas.filter(p => p.competenciaICFES === 'Argumentación').length
    }
  };
}

/**
 * Construye una Evaluación de Periodo (Seguimiento 1, Seguimiento 2 o Acumulativa Final)
 * tomando equitativamente las temáticas reales de las semanas evaluadas.
 */
function generarEvaluacionPeriodo(
  grado: Grado,
  asignatura: Asignatura,
  periodo: PeriodoId,
  semanaInicio: number,
  semanaFin: number,
  tipo: 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final',
  titulo: string,
  porcentajeEvaluación: string
): DocumentoEscolar {
  const semanasDelPeriodo = mallaCurricular[grado]?.[asignatura]?.[periodo] || mallaCurricular[grado]?.['Matemáticas']?.[periodo] || [];
  const semanasFiltradas = semanasDelPeriodo.filter(s => s.semana >= semanaInicio && s.semana <= semanaFin);

  const planesDisponibles = semanasFiltradas.length > 0 ? semanasFiltradas : [getPlanSemana(grado, asignatura, periodo, semanaInicio)];
  const preguntas: PreguntaICFES[] = [];

  let idCounter = 1;

  // Generar preguntas rotando por las semanas y temáticas reales
  planesDisponibles.forEach((p, idx) => {
    const ej1 = p.estructuracionTeorica.ejerciciosPracticos?.[0];
    const ej2 = p.estructuracionTeorica.ejerciciosPracticos?.[1];

    if (ej1 && idCounter <= 8) {
      preguntas.push({
        id: idCounter++,
        tipo: 'seleccion_multiple',
        contexto: `[Semana ${p.semana} - ${p.titulo}] Situación contextualizada: ${p.exploracionMedellin.substring(0, 140)}...`,
        enunciado: `${ej1.enunciado}`,
        opciones: [
          { key: 'A', texto: `${ej1.solucionFinal}` },
          { key: 'B', texto: `Resultado con error en el orden de operaciones.` },
          { key: 'C', texto: `Valor duplicado por omisión de simplificación.` },
          { key: 'D', texto: `Valor obtenido al usar signo contrario.` }
        ],
        respuestaCorrecta: 'A',
        justificacionPedagogica: `Respuesta A correcta: En ${p.titulo}: ${ej1.pasosExplicativos.join(' -> ')}. Solución: ${ej1.solucionFinal}`,
        competenciaICFES: idx % 3 === 0 ? 'Interpretación y Representación' : (idx % 3 === 1 ? 'Formulación y Ejecución' : 'Argumentación'),
        procesoMatematico: 'Resolución de Problemas',
        nivelBloom: 'Aplicación/Análisis'
      });
    }

    if (ej2 && idCounter <= 8) {
      preguntas.push({
        id: idCounter++,
        tipo: 'seleccion_multiple',
        contexto: `[Semana ${p.semana} - ${p.titulo}] Concepto clave: ${p.estructuracionTeorica.concepto.substring(0, 120)}...`,
        enunciado: `${ej2.enunciado}`,
        opciones: [
          { key: 'A', texto: `${ej2.solucionFinal}` },
          { key: 'B', texto: `Resultado sin sustitución correcta de variables.` },
          { key: 'C', texto: `Estimación cualitativa no fundamentada.` },
          { key: 'D', texto: `Resultado con cálculo incompleto.` }
        ],
        respuestaCorrecta: 'A',
        justificacionPedagogica: `Respuesta A correcta: Aplicación directa de ${p.titulo}: ${ej2.pasosExplicativos.join(' -> ')}. Solución: ${ej2.solucionFinal}`,
        competenciaICFES: 'Formulación y Ejecución',
        procesoMatematico: 'Modelación',
        nivelBloom: 'Aplicación/Análisis'
      });
    }
  });

  // Completar hasta 8 preguntas de selección múltiple si hay menos semanas
  while (preguntas.length < 8) {
    const planRef = planesDisponibles[preguntas.length % planesDisponibles.length];
    const formulasStr = planRef.estructuracionTeorica.formulas.join(', ') || 'f(x) = ax + b';
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `[Tema: ${planRef.titulo}] En el análisis de problemas se aplica la fórmula o propiedad: ${formulasStr}.`,
      enunciado: `¿Cuál de las siguientes afirmaciones sustenta con rigor matemático la validez del procedimiento en ${planRef.titulo}?`,
      opciones: [
        { key: 'A', texto: `Preserva la equivalencia matemática y respeta las propiedades de los números reales.` },
        { key: 'B', texto: `Es válida únicamente para números enteros positivos menores que 10.` },
        { key: 'C', texto: `Modifica arbitrariamente las variables sin comprobación.` },
        { key: 'D', texto: `Reemplaza la deducción analítica por un tanteo aleatorio.` }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: `Respuesta A correcta: La estructura formal de ${planRef.titulo} garantiza la preservación de la igualdad y la coherencia lógica.`,
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Conocimiento/Comprensión'
    });
  }

  // Agregar 2 preguntas abiertas de desarrollo al final
  const pApertura = planesDisponibles[0];
  const pCierre = planesDisponibles[planesDisponibles.length - 1];

  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `PROBLEMA DE APLICACIÓN - SEMANA ${pApertura.semana}: ${pApertura.titulo.toUpperCase()}.`,
    enunciado: `${pApertura.estructuracionTeorica.ejemploPasoAPaso?.enunciado || pApertura.ejercitacionYCierre.colaborativo}\n\nPresente el procedimiento formal con datos, desarrollo algebraico o numérico y justificación final.`,
    justificacionPedagogica: `CRITERIO DE CALIFICACIÓN:\n- Planteamiento correcto del problema en ${pApertura.titulo} (2.0 Pts).\n- Procedimiento matemático exacto y sin errores operacionales (2.0 Pts).\n- Interpretación contextual del resultado (1.0 Pt).`,
    competenciaICFES: 'Formulación y Ejecución',
    procesoMatematico: 'Resolución de Problemas',
    nivelBloom: 'Evaluación/Creación'
  });

  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `SITUACIÓN PROBLEMA INTEGRADORA - SEMANA ${pCierre.semana}: ${pCierre.titulo.toUpperCase()}.`,
    enunciado: `${pCierre.estructuracionTeorica.ejemploPasoAPaso?.enunciado || pCierre.ejercitacionYCierre.tareaBarrial}\n\nJustifique el resultado analíticamente y explique qué significado tiene la solución en el contexto evaluado.`,
    justificacionPedagogica: `CRITERIO DE CALIFICACIÓN:\n- Modelación y uso correcto de propiedades en ${pCierre.titulo} (2.5 Pts).\n- Argumentación lógica del resultado obtenido (2.5 Pts).`,
    competenciaICFES: 'Argumentación',
    procesoMatematico: 'Razonamiento',
    nivelBloom: 'Evaluación/Creación'
  });

  return {
    tipo,
    titulo,
    asignatura,
    grado,
    periodo,
    semanaRef: semanaInicio,
    porcentajeEvaluación,
    preguntas,
    tablaEspecificaciones: {
      totalPreguntas: preguntas.length,
      interpretacionCount: preguntas.filter(p => p.competenciaICFES === 'Interpretación y Representación').length,
      formulacionCount: preguntas.filter(p => p.competenciaICFES === 'Formulación y Ejecución').length,
      argumentacionCount: preguntas.filter(p => p.competenciaICFES === 'Argumentación').length
    }
  };
}
