import { Asignatura, DocumentoEscolar, Grado, PeriodoId, PreguntaICFES } from '../types';
import { getPlanSemana } from './mallaCurricular';

export function generarDocumentoOffline(
  tipo: 'taller' | 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final',
  grado: Grado,
  asignatura: Asignatura,
  periodo: PeriodoId,
  semana: number
): DocumentoEscolar {
  const asigEfectiva: Asignatura = (grado === '10°' || grado === '11°') ? 'Matemáticas' : asignatura;
  const plan = getPlanSemana(grado, asigEfectiva, periodo, semana);

  let titulo = '';
  let porcentaje = '';

  if (tipo === 'taller') {
    titulo = `TALLER FORMATIVO - SEMANA ${semana}: ${plan.titulo.toUpperCase()}`;
    porcentaje = 'Formativo (Guía de Ejercitación semanal)';
  } else if (tipo === 'evaluacion_seg1') {
    titulo = `EVALUACIÓN DE SEGUIMIENTO 1 (35%) - PERIODO ${periodo}`;
    porcentaje = '35% del Periodo';
  } else if (tipo === 'evaluacion_seg2') {
    titulo = `EVALUACIÓN DE SEGUIMIENTO 2 (70%) - PERIODO ${periodo}`;
    porcentaje = '70% del Periodo';
  } else {
    titulo = `PRUEBA ACUMULATIVA FINAL TIPO ICFES SABER (100%) - PERIODO ${periodo}`;
    porcentaje = '100% Acumulativo Periodo';
  }

  // Generamos 10 preguntas rigurosas contextualizadas en Medellín y la IE Rafael Uribe Uribe
  const preguntas: PreguntaICFES[] = [
    {
      id: 1,
      tipo: 'seleccion_multiple',
      contexto: `Un grupo de estudiantes de ${grado} de la IE Rafael Uribe Uribe analiza el sistema de transporte Metro de Medellín. Para viajar desde la estación Niquía hasta La Estrella se recorren 25,8 km a una velocidad media constante.`,
      enunciado: `Según el tema de '${plan.titulo}', si un usuario realiza 12 viajes semanales en la tarifa integrada estudiante ($1.650 COP por viaje), ¿cuál es el costo total aproximado que invierte al mes (4 semanas)?`,
      opciones: [
        { key: 'A', texto: '$79.200 COP' },
        { key: 'B', texto: '$19.800 COP' },
        { key: 'C', texto: '$158.400 COP' },
        { key: 'D', texto: '$95.000 COP' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Multiplicación de la tarifa por viajes semanales y por semanas al mes: $1.650 × 12 = $19.800 COP semanales; $19.800 × 4 = $79.200 COP.',
      competenciaICFES: 'Interpretación y Representación',
      procesoMatematico: 'Resolución de Problemas',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 2,
      tipo: 'seleccion_multiple',
      contexto: `En la feria de emprendimiento de la comuna de la IE Rafael Uribe Uribe, una microempresa familiar registra los costos e ingresos mediante la fórmula matemática explicada en clase.`,
      enunciado: `Al aplicar los conceptos de '${plan.titulo}', si la razón de crecimiento de ingresos respecto al costo fijo es constante, ¿qué ocurre si el volumen de producción se triplica?`,
      opciones: [
        { key: 'A', texto: 'Los ingresos aumentan proporcionalmente según la constante de escala definida.' },
        { key: 'B', texto: 'Los costos fijos se triplican de manera inmediata.' },
        { key: 'C', texto: 'La utilidad disminuye a cero automáticamente.' },
        { key: 'D', texto: 'No es posible determinar la variación sin conocer el IVA.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: En un modelo de proporcionalidad directa lineal, al multiplicar la variable independiente por una constante k=3, la variable dependiente de ingresos se multiplica por el mismo factor.',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 3,
      tipo: 'seleccion_multiple',
      contexto: `En el laboratorio de matemáticas de la IE Rafael Uribe Uribe, el docente presenta la siguiente propiedad algebraica recuadrada en la guía: ${plan.estructuracionTeorica.formulas[0] || 'A = b × h'}.`,
      enunciado: `¿Cuál de las siguientes afirmaciones justifica correctamente el uso de esta propiedad en la solución del problema de la Semana ${semana}?`,
      opciones: [
        { key: 'A', texto: 'Permite conservar la equivalencia de la expresión al transformar términos semejantes.' },
        { key: 'B', texto: 'Aplica únicamente cuando el resultado final es un número negativo.' },
        { key: 'C', texto: 'Modifica de forma arbitraria las dimensiones del triángulo base.' },
        { key: 'D', texto: 'Sustituye la suma por una división no permitida en los reales.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Las propiedades algebraicas rigurosas garantizan que la igualdad se preserve mediante transformaciones homogéneas a ambos lados de la ecuación o expresión.',
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Conocimiento/Comprensión'
    },
    {
      id: 4,
      tipo: 'seleccion_multiple',
      contexto: `Un estudio de movilidad realizado por las empresas públicas de Medellín (EPM) en el sector de la Comuna 11 muestra una distribución de frecuencias para el consumo de agua.`,
      enunciado: `De acuerdo con la evidencia de aprendizaje de '${plan.evidencia}', si el promedio es de 14 m³ y la mediana es 12 m³, ¿cuál es la interpretación correcta del valor central?`,
      opciones: [
        { key: 'A', texto: 'El 50% de los hogares encuestados consume 12 m³ o menos de agua al mes.' },
        { key: 'B', texto: 'Todos los hogares consumen exactamente 12 m³ mensuales.' },
        { key: 'C', texto: 'El consumo máximo registrado fue de 26 m³.' },
        { key: 'D', texto: 'La moda del sector es igual a 14 m³.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: La mediana divide la distribución ordenada de datos en dos partes de igual proporción (50% por debajo o igual y 50% por encima).',
      competenciaICFES: 'Interpretación y Representación',
      procesoMatematico: 'Comunicación',
      nivelBloom: 'Conocimiento/Comprensión'
    },
    {
      id: 5,
      tipo: 'seleccion_multiple',
      contexto: `Para remodelar el parqueadero interno de la IE Rafael Uribe Uribe, se requiere calcular las dimensiones de una superficie usando la fórmula: ${plan.estructuracionTeorica.formulas[1] || 'P = a + b + c'}.`,
      enunciado: `Si la base se incrementa en un 20% y la altura se mantiene fija, el porcentaje de variación final de la magnitud resultante corresponde a:`,
      opciones: [
        { key: 'A', texto: 'Un incremento exacto del 20%.' },
        { key: 'B', texto: 'Un incremento del 40% debido a la escala.' },
        { key: 'C', texto: 'Permanecer completamente inalterado.' },
        { key: 'D', texto: 'Una reducción del 10%.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Al ser una función lineal directamente proporcional con respecto a la variable base, un factor de multiplicación k=1.20 en la base produce un incremento idéntico del 20% en el resultado.',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Resolución de Problemas',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 6,
      tipo: 'seleccion_multiple',
      contexto: `Durante las competencias deportivas intercolegiales en el Estadio Atanasio Girardot, se mide el rendimiento de tres atletas de la IE Rafael Uribe Uribe en intervalos de tiempo.`,
      enunciado: `Analizando el ejemplo resuelto paso a paso (${plan.estructuracionTeorica.ejemploPasoAPaso.enunciado.substring(0, 60)}...), ¿cuál es el paso decisivo para obtener la solución final?`,
      opciones: [
        { key: 'A', texto: plan.estructuracionTeorica.ejemploPasoAPaso.pasos[1] || 'Sustituir los valores en la fórmula principal.' },
        { key: 'B', texto: 'Ignorar las unidades de medida originales.' },
        { key: 'C', texto: 'Multiplicar todas las magnitudes por cero.' },
        { key: 'D', texto: 'Cambiar el signo de todas las variables involucradas.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: La secuencia lógica del algoritmo en el paso 2 resuelve la incógnita mediante la operación inversa o sustitución directa.',
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Evaluación/Creación'
    },
    {
      id: 7,
      tipo: 'seleccion_multiple',
      contexto: `Un arquitecto diseña una rampa de acceso inclinado con el principio DUA para estudiantes con movilidad reducida en la IE Rafael Uribe Uribe.`,
      enunciado: `Si la rampa debe tener una pendiente máxima del 8% (sube 8 cm por cada 100 cm horizontales), ¿cuántos centímetros horizontales se necesitan para salvar un desnivel vertical de 40 cm?`,
      opciones: [
        { key: 'A', texto: '500 cm (5 metros)' },
        { key: 'B', texto: '320 cm (3.2 metros)' },
        { key: 'C', texto: '100 cm (1 metro)' },
        { key: 'D', texto: '800 cm (8 metros)' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Regla de tres directa: (40 cm × 100 cm) / 8 cm = 4000 / 8 = 500 cm.',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 8,
      tipo: 'seleccion_multiple',
      contexto: `En el marco del proyecto de educación ambiental de la comuna, se recopilan datos sobre la cantidad de kilogramos de plástico reciclado semanalmente en el colegio.`,
      enunciado: `Si los datos ordenados en kilogramos durante 5 semanas son: 15, 18, 20, 22, 35; la media aritmética e interpretación de la dispersión indican que:`,
      opciones: [
        { key: 'A', texto: 'El promedio semanal de reciclaje es de 22 kg, impulsado por el dato atípico de 35 kg.' },
        { key: 'B', texto: 'El promedio es de 15 kg exactos.' },
        { key: 'C', texto: 'La mediana es igual a 35 kg.' },
        { key: 'D', texto: 'No se puede calcular el promedio sin conocer el volumen.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Suma total = 15+18+20+22+35 = 110 kg. Dividido entre 5 = 22 kg. El valor 35 representa un extremo que eleva la media por encima de la mediana (20 kg).',
      competenciaICFES: 'Interpretación y Representación',
      procesoMatematico: 'Comunicación',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 9,
      tipo: 'desarrollo',
      contexto: `DESAFÍO ABIERTO DE MODELACIÓN LOCAL (MEDELLÍN): Planteamiento del problema contextualizado sobre ${plan.titulo}.`,
      enunciado: `Un habitante del barrio Manrique desea calcular el costo de impermeabilizar el techo de su vivienda. La superficie tiene forma rectangular con dimensiones de (x + 4) metros de largo por (x - 2) metros de ancho.\n\na) Escriba la expresión algebraica simplificada para el área total A(x).\nb) Si x = 6 metros, determine el área en m² y el costo total considerando que cada m² de impermeabilizante cuesta $25.000 COP en el comercio local.`,
      justificacionPedagogica: 'CRITERIO DOCENTE DE CALIFICACIÓN:\n- Parte a) Desarrollo del producto algebraico A(x) = (x+4)(x-2) = x² + 2x - 8 (1.5 Pts).\n- Parte b) Sustitución x = 6: A(6) = (6)² + 2(6) - 8 = 36 + 12 - 8 = 40 m² (1.5 Pts).\n- Cálculo del costo: 40 m² × $25.000 = $1.000.000 COP (2.0 Pts).',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Evaluación/Creación'
    },
    {
      id: 10,
      tipo: 'desarrollo',
      contexto: `ANÁLISIS PEDAGÓGICO Y JUSTIFICACIÓN CRÍTICA (PRUEBA SABER 11).`,
      enunciado: `Explique detalladamente utilizando los conceptos trabajados en la Semana ${semana} de ${plan.titulo}, por qué el método utilizado para resolver el problema del Metro / Medellín es matemáticamente válido y cómo el Diseño Universal para el Aprendizaje (DUA) ayuda a evitar errores comunes en el procedimiento.`,
      justificacionPedagogica: 'CRITERIO DOCENTE DE CALIFICACIÓN:\n- El estudiante argumenta con rigor formal el principio matemático aplicado (2.5 Pts).\n- Relaciona las estrategias de representación visual o simbólica con la verificación de soluciones y prevención de sesgos (2.5 Pts).',
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Evaluación/Creación'
    }
  ];

  return {
    tipo,
    titulo,
    asignatura: asigEfectiva,
    grado,
    periodo,
    semanaRef: semana,
    porcentajeEvaluación: porcentaje,
    preguntas,
    tablaEspecificaciones: {
      totalPreguntas: 10,
      interpretacionCount: 3,
      formulacionCount: 4,
      argumentacionCount: 3
    }
  };
}
