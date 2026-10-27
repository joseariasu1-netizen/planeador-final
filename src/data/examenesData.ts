import { Asignatura, DocumentoEscolar, Grado, PeriodoId, PreguntaICFES, PlanSemana } from '../types';
import { getPlanSemana, mallaCurricular } from './mallaCurricular';

/**
 * Genera distractores matemáticos verosímiles a partir de la solución real
 * y asigna la respuesta correcta de forma balanceada entre A, B, C y D.
 */
function construirOpcionesMatematicas(
  solucionCorrecta: string,
  semilla: number,
  contextoExtra?: string
): {
  opciones: { key: 'A' | 'B' | 'C' | 'D'; texto: string }[];
  respuestaCorrecta: 'A' | 'B' | 'C' | 'D';
} {
  const limpio = solucionCorrecta.trim();
  const distractores: string[] = [];

  // Intentar extraer el primer número relevante para crear variaciones numéricas plausibles
  const matchNum = limpio.match(/-?\d+(?:[.,]\d+)?/);
  if (matchNum) {
    const rawNum = matchNum[0];
    const valor = parseFloat(rawNum.replace(/\./g, '').replace(',', '.'));
    if (!isNaN(valor) && valor !== 0) {
      const formatear = (n: number) => {
        if (rawNum.includes('.')) {
          return Math.round(n).toLocaleString('es-CO');
        }
        if (rawNum.includes(',')) {
          return n.toFixed(1).replace('.', ',');
        }
        return String(Math.round(n * 100) / 100);
      };

      const d1 = limpio.replace(rawNum, formatear(valor * 2));
      const d2 = limpio.replace(rawNum, formatear(Math.max(1, Math.round(valor * 0.5))));
      const d3 = limpio.replace(rawNum, formatear(valor + (valor > 50 ? 15 : 4)));

      if (d1 !== limpio) distractores.push(d1);
      if (d2 !== limpio && !distractores.includes(d2)) distractores.push(d2);
      if (d3 !== limpio && !distractores.includes(d3)) distractores.push(d3);
    }
  }

  const respaldos = [
    contextoExtra || `Se obtiene un valor reducido a la mitad por omisión de un factor en el planteamiento.`,
    `No es posible determinarlo con exactitud porque las variables cambian de signo.`,
    `Se obtiene el doble del valor real al sumar los coeficientes sin despejar la incógnita.`,
    `El resultado se invierte al intercambiar el numerador y el denominador en la operación.`
  ];

  let idxRespaldo = 0;
  while (distractores.length < 3) {
    const candidato = respaldos[idxRespaldo % respaldos.length];
    if (candidato !== limpio && !distractores.includes(candidato)) {
      distractores.push(candidato);
    }
    idxRespaldo++;
  }

  const letras: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const posCorrecta = semilla % 4;
  const respuestaCorrecta = letras[posCorrecta];

  let dIdx = 0;
  const opciones = letras.map((key, idx) => {
    if (idx === posCorrecta) {
      return { key, texto: limpio };
    }
    return { key, texto: distractores[dIdx++] };
  });

  return { opciones, respuestaCorrecta };
}

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

  const semanaInicioPeriodo = periodo === 1 ? 1 : periodo === 2 ? 14 : 27;
  const semanaFinPeriodo = periodo === 1 ? 13 : periodo === 2 ? 26 : 40;

  let titulo = '';
  let porcentaje = '';

  if (tipo === 'taller') {
    titulo = `TALLER FORMATIVO - SEMANA ${semana}: ${plan.titulo.toUpperCase()}`;
    porcentaje = 'Formativo (Guía de Ejercitación semanal)';
    return generarTallerEspecifico(plan, grado, asigEfectiva, periodo, semana, titulo, porcentaje);
  } else if (tipo === 'evaluacion_seg1') {
    const semFinSeg1 = semanaInicioPeriodo + 3;
    titulo = `EVALUACIÓN DE SEGUIMIENTO 1 (35%) - PERIODO ${periodo} (SEMANAS ${semanaInicioPeriodo} A ${semFinSeg1})`;
    porcentaje = '35% del Periodo';
    return generarEvaluacionPeriodo(grado, asigEfectiva, periodo, semanaInicioPeriodo, semFinSeg1, tipo, titulo, porcentaje);
  } else if (tipo === 'evaluacion_seg2') {
    const semFinSeg2 = semanaInicioPeriodo + 7;
    titulo = `EVALUACIÓN DE SEGUIMIENTO 2 (70%) - PERIODO ${periodo} (SEMANAS ${semanaInicioPeriodo} A ${semFinSeg2})`;
    porcentaje = '70% del Periodo';
    return generarEvaluacionPeriodo(grado, asigEfectiva, periodo, semanaInicioPeriodo, semFinSeg2, tipo, titulo, porcentaje);
  } else {
    titulo = `PRUEBA ACUMULATIVA FINAL TIPO ICFES SABER (100%) - PERIODO ${periodo} (SEMANAS ${semanaInicioPeriodo} A ${semanaFinPeriodo})`;
    porcentaje = '100% Acumulativo Periodo';
    return generarEvaluacionPeriodo(grado, asigEfectiva, periodo, semanaInicioPeriodo, semanaFinPeriodo, tipo, titulo, porcentaje);
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
  const op1 = construirOpcionesMatematicas(
    `Identificar las magnitudes del problema y aplicar las propiedades de "${plan.titulo}".`,
    semana + 1,
    `Sumar directamente los datos numéricos sin verificar las unidades ni la relación matemática.`
  );
  preguntas.push({
    id: idCounter++,
    tipo: 'seleccion_multiple',
    contexto: `${plan.exploracionMedellin}`,
    enunciado: `A partir de la situación planteada en Medellín y aplicando los fundamentos de "${plan.titulo}", ¿cuál es el planteamiento cuantitativo correcto para resolverla?`,
    opciones: op1.opciones,
    respuestaCorrecta: op1.respuestaCorrecta,
    justificacionPedagogica: `Respuesta ${op1.respuestaCorrecta} correcta: En el tema "${plan.titulo}", la resolución rigurosa parte de identificar las variables del contexto y aplicar el concepto: ${concepto}`,
    competenciaICFES: 'Interpretación y Representación',
    procesoMatematico: 'Comunicación',
    nivelBloom: 'Conocimiento/Comprensión'
  });

  // 2. Ejercicio modelado / paso a paso del docente adaptado a pregunta
  if (ejemplo && ejemplo.enunciado) {
    const op2 = construirOpcionesMatematicas(ejemplo.solucionFinal, semana + 2);
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `Situación modelada sobre ${plan.titulo}: "${ejemplo.enunciado}"`,
      enunciado: `Al desarrollar el procedimiento matemático paso a paso, ¿cuál es el resultado exacto?`,
      opciones: op2.opciones,
      respuestaCorrecta: op2.respuestaCorrecta,
      justificacionPedagogica: `Respuesta ${op2.respuestaCorrecta} correcta: Procedimiento paso a paso:\n${ejemplo.pasos.join('\n')}\nSolución final: ${ejemplo.solucionFinal}`,
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Aplicación/Análisis'
    });
  }

  // 3. Convertir los ejercicios prácticos de la semana en preguntas del taller
  ejercicios.forEach((ej, idx) => {
    const esDesafio = (ej.nivel as string).includes('Desafío') || (ej.nivel as string).includes('Profundización');
    const opEj = construirOpcionesMatematicas(ej.solucionFinal, semana + idx + 3);
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `Aplicación de ${plan.titulo} (Nivel ${ej.nivel}). ${ej.pistaDUA ? `Pista pedagógica DUA: ${ej.pistaDUA}` : ''}`,
      enunciado: `${ej.enunciado}`,
      opciones: opEj.opciones,
      respuestaCorrecta: opEj.respuestaCorrecta,
      justificacionPedagogica: `Respuesta ${opEj.respuestaCorrecta} correcta: ${ej.pasosExplicativos.join(' -> ')}. Solución final: ${ej.solucionFinal}`,
      competenciaICFES: ej.nivel === 'Fácil' ? 'Interpretación y Representación' : 'Formulación y Ejecución',
      procesoMatematico: 'Resolución de Problemas',
      nivelBloom: esDesafio ? 'Evaluación/Creación' : 'Aplicación/Análisis'
    });
  });

  // 4. Pregunta sobre fórmulas y propiedades si existen
  if (formulas.length > 0) {
    const opForm = construirOpcionesMatematicas(
      `Cumple la relación formal ${formulas[0]} respetando la equivalencia y las unidades del problema.`,
      semana + 6
    );
    preguntas.push({
      id: idCounter++,
      tipo: 'seleccion_multiple',
      contexto: `En el estudio de "${plan.titulo}" se emplea la propiedad o relación matemática: ${formulas.join('  |  ')}.`,
      enunciado: `¿Cuál de las siguientes afirmaciones justifica correctamente la aplicación de la expresión ${formulas[0]}?`,
      opciones: opForm.opciones,
      respuestaCorrecta: opForm.respuestaCorrecta,
      justificacionPedagogica: `Respuesta ${opForm.respuestaCorrecta} correcta: La expresión ${formulas[0]} preserva la coherencia matemática dentro de las condiciones del tema ${plan.titulo}.`,
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Conocimiento/Comprensión'
    });
  }

  // 5. Ejercicios abiertos de desarrollo práctico y tarea barrial
  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `ACTIVIDAD PRÁCTICA COLABORATIVA DUA - SEMANA ${semana}: ${plan.titulo.toUpperCase()}.`,
    enunciado: `${plan.ejercitacionYCierre.colaborativo}\n\nDesarrolla en tu cuaderno o en el espacio asignado el procedimiento completo con justificación matemática, incluyendo:\n1) Datos conocidos e incógnitas.\n2) Procedimiento ordenado paso a paso.\n3) Respuesta redactada y comprobación del resultado.`,
    justificacionPedagogica: `CRITERIO DE EVALUACIÓN DOCENTE:\n- Plantea correctamente el problema aplicando los conceptos de ${plan.titulo} (1.5 Pts).\n- Ejecuta las operaciones y fórmulas matemáticas sin errores de cálculo (2.0 Pts).\n- Socializa y redacta la conclusión con sentido contextual (1.5 Pts).`,
    competenciaICFES: 'Formulación y Ejecución',
    procesoMatematico: 'Resolución de Problemas',
    nivelBloom: 'Evaluación/Creación'
  });

  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `TRANSFERENCIA AL ENTORNO BARRIAL Y COMUNIDAD (IE RAFAEL URIBE URIBE - MEDELLÍN).`,
    enunciado: `${plan.ejercitacionYCierre.tareaBarrial}\n\nExplica paso a paso cómo el tema "${plan.titulo}" te permite interpretar y resolver esta situación real en tu barrio o hogar.`,
    justificacionPedagogica: `CRITERIO DE EVALUACIÓN DOCENTE:\n- Recolecta o identifica los datos reales solicitados en la actividad barrial (2.5 Pts).\n- Aplica la matemática de la Semana ${semana} para formular una solución o conclusión argumentada (2.5 Pts).`,
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
 * tomando equitativamente las temáticas reales de las semanas evaluadas del periodo activo.
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

  const planesDisponibles = semanasFiltradas.length > 0 ? semanasFiltradas : semanasDelPeriodo;
  const preguntas: PreguntaICFES[] = [];

  let idCounter = 1;

  // Primera pasada: 1 pregunta por cada semana evaluada usando su ejercicio práctico o ejemplo modelado
  for (let i = 0; i < planesDisponibles.length && preguntas.length < 8; i++) {
    const p = planesDisponibles[i];
    const ej = p.estructuracionTeorica.ejerciciosPracticos?.[i % 3] || p.estructuracionTeorica.ejerciciosPracticos?.[0];

    if (ej) {
      const op = construirOpcionesMatematicas(ej.solucionFinal, p.semana + i);
      preguntas.push({
        id: idCounter++,
        tipo: 'seleccion_multiple',
        contexto: `[Semana ${p.semana} — ${p.titulo}] En el contexto de Medellín: ${p.exploracionMedellin}`,
        enunciado: `${ej.enunciado}`,
        opciones: op.opciones,
        respuestaCorrecta: op.respuestaCorrecta,
        justificacionPedagogica: `Respuesta ${op.respuestaCorrecta} correcta (Semana ${p.semana} - ${p.titulo}): ${ej.pasosExplicativos.join(' -> ')}. Solución comprobada: ${ej.solucionFinal}`,
        competenciaICFES: i % 3 === 0 ? 'Interpretación y Representación' : (i % 3 === 1 ? 'Formulación y Ejecución' : 'Argumentación'),
        procesoMatematico: 'Resolución de Problemas',
        nivelBloom: 'Aplicación/Análisis'
      });
    }
  }

  // Segunda pasada si faltan preguntas para llegar a 8 (ej. Seguimiento 1 evalúa 4 semanas -> 2 preguntas por semana)
  for (let i = 0; i < planesDisponibles.length && preguntas.length < 8; i++) {
    const p = planesDisponibles[i];
    const ej2 = p.estructuracionTeorica.ejerciciosPracticos?.[1] || p.estructuracionTeorica.ejerciciosPracticos?.[2];
    const ejemplo = p.estructuracionTeorica.ejemploPasoAPaso;

    if (ej2) {
      const op = construirOpcionesMatematicas(ej2.solucionFinal, p.semana + i + 2);
      preguntas.push({
        id: idCounter++,
        tipo: 'seleccion_multiple',
        contexto: `[Semana ${p.semana} — ${p.titulo}] Fundamento teórico: ${p.estructuracionTeorica.concepto}`,
        enunciado: `${ej2.enunciado}`,
        opciones: op.opciones,
        respuestaCorrecta: op.respuestaCorrecta,
        justificacionPedagogica: `Respuesta ${op.respuestaCorrecta} correcta (Semana ${p.semana} - ${p.titulo}): ${ej2.pasosExplicativos.join(' -> ')}. Solución comprobada: ${ej2.solucionFinal}`,
        competenciaICFES: 'Formulación y Ejecución',
        procesoMatematico: 'Modelación',
        nivelBloom: 'Aplicación/Análisis'
      });
    } else if (ejemplo) {
      const op = construirOpcionesMatematicas(ejemplo.solucionFinal, p.semana + i + 3);
      preguntas.push({
        id: idCounter++,
        tipo: 'seleccion_multiple',
        contexto: `[Semana ${p.semana} — ${p.titulo}] Situación problema: ${ejemplo.enunciado}`,
        enunciado: `Aplicando el método analítico revisado en la Semana ${p.semana}, ¿cuál es la solución correcta?`,
        opciones: op.opciones,
        respuestaCorrecta: op.respuestaCorrecta,
        justificacionPedagogica: `Respuesta ${op.respuestaCorrecta} correcta: ${ejemplo.pasos.join(' -> ')}. Solución: ${ejemplo.solucionFinal}`,
        competenciaICFES: 'Argumentación',
        procesoMatematico: 'Razonamiento',
        nivelBloom: 'Aplicación/Análisis'
      });
    }
  }

  // Agregar 2 preguntas abiertas de desarrollo integradoras al final
  const pApertura = planesDisponibles[0];
  const pCierre = planesDisponibles[Math.min(planesDisponibles.length - 1, Math.floor(planesDisponibles.length / 2))];

  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `PREGUNTA ABIERTA 1 — SEMANA ${pApertura.semana}: ${pApertura.titulo.toUpperCase()}.`,
    enunciado: `${pApertura.estructuracionTeorica.ejemploPasoAPaso?.enunciado || pApertura.ejercitacionYCierre.colaborativo}\n\nResuelva mostrando todos los pasos, operaciones, fórmulas empleadas y la interpretación de la respuesta.`,
    justificacionPedagogica: `CRITERIO DE CALIFICACIÓN (SIEE):\n- Planteamiento correcto de los datos en ${pApertura.titulo} (1.5 Pts).\n- Desarrollo paso a paso(${pApertura.estructuracionTeorica.ejemploPasoAPaso?.pasos.join(' / ') || 'procedimiento completo'}) (2.5 Pts).\n- Respuesta verificada: ${pApertura.estructuracionTeorica.ejemploPasoAPaso?.solucionFinal || 'Conclusión coherente'} (1.0 Pt).`,
    competenciaICFES: 'Formulación y Ejecución',
    procesoMatematico: 'Resolución de Problemas',
    nivelBloom: 'Evaluación/Creación'
  });

  preguntas.push({
    id: idCounter++,
    tipo: 'desarrollo',
    contexto: `PREGUNTA ABIERTA 2 — SEMANA ${pCierre.semana}: ${pCierre.titulo.toUpperCase()}.`,
    enunciado: `${pCierre.estructuracionTeorica.ejerciciosPracticos?.[2]?.enunciado || pCierre.ejercitacionYCierre.tareaBarrial}\n\nJustifique analíticamente su procedimiento y explique por qué la solución obtenida es coherente con las condiciones del problema.`,
    justificacionPedagogica: `CRITERIO DE CALIFICACIÓN (SIEE):\n- Modelación y uso de propiedades en ${pCierre.titulo} (2.5 Pts).\n- Argumentación matemática y solución exacta (${pCierre.estructuracionTeorica.ejerciciosPracticos?.[2]?.solucionFinal || 'Verificación completa'}) (2.5 Pts).`,
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
    semanaRef: semanaFin,
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
