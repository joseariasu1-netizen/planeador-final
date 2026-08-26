import { Asignatura, DocumentoEscolar, Grado, PeriodoId, PreguntaICFES } from '../types';
import { getPlanSemana } from './mallaCurricular';

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
  const formulaPrincipal = plan.estructuracionTeorica.formulas[0] || 'f(x) = k × x';
  const formulaSecundaria = plan.estructuracionTeorica.formulas[1] || 'A = base × altura';

  const preguntas: PreguntaICFES[] = [
    {
      id: 1,
      tipo: 'seleccion_multiple',
      contexto: `Un grupo de estudiantes de ${grado} de la IE Rafael Uribe Uribe analiza el sistema de transporte Metro de Medellín. Para viajar desde la estación Niquía hasta La Estrella se recorren 25,8 km a una velocidad media constante.`,
      enunciado: `Si un usuario realiza 12 viajes semanales utilizando la tarifa integrada estudiante de $1.650 COP por viaje, ¿cuál es el costo total mensual invertido en transporte durante un periodo de 4 semanas?`,
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
      contexto: `Una microempresa familiar de la Comuna 12 registra la relación de ingresos I(x) en función de las unidades producidas x mediante el modelo lineal I(x) = k × x, donde k es el precio unitario constante.`,
      enunciado: `Dada la expresión I(x) = k × x, si la constante k permanece fija y el volumen de producción x se triplica (es decir, pasa de x a 3x), ¿qué ocurre con el ingreso total resultante?`,
      opciones: [
        { key: 'A', texto: 'El ingreso total se triplica, pasando a ser 3 × I(x).' },
        { key: 'B', texto: 'Los costos fijos se triplican de manera inmediata.' },
        { key: 'C', texto: 'El ingreso disminuye a la tercera parte: I(x) / 3.' },
        { key: 'D', texto: 'El ingreso no cambia por ser un valor constante.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: En un modelo de proporcionalidad directa lineal I(3x) = k × (3x) = 3 × (k × x) = 3 × I(x), el ingreso se triplica.',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 3,
      tipo: 'seleccion_multiple',
      contexto: `En la guía de trabajo de matemáticas de la IE Rafael Uribe Uribe se presenta la siguiente fórmula matemática: ${formulaPrincipal}.`,
      enunciado: `¿Cuál de las siguientes afirmaciones justifica correctamente el uso y aplicación de la igualdad ${formulaPrincipal} en la resolución de problemas algebraicos o geométricos?`,
      opciones: [
        { key: 'A', texto: 'Conserva la equivalencia de la expresión al realizar operaciones homogéneas a ambos lados de la igualdad.' },
        { key: 'B', texto: 'Aplica únicamente cuando las variables toman valores numéricos negativos.' },
        { key: 'C', texto: 'Modifica de manera arbitraria las dimensiones originales de la figura o función.' },
        { key: 'D', texto: 'Sustituye la operación de suma por una división no permitida en los números reales.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Las propiedades algebraicas rigurosas garantizan que la igualdad se preserve mediante transformaciones válidas en los números reales.',
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Conocimiento/Comprensión'
    },
    {
      id: 4,
      tipo: 'seleccion_multiple',
      contexto: `Un estudio de las Empresas Públicas de Medellín (EPM) sobre el consumo de agua potable en un sector de la Comuna 12 reporta los siguientes estadígrafos: Media = 14 m³ y Mediana = 12 m³.`,
      enunciado: `Dada la distribución de datos con mediana igual a 12 m³, ¿cuál es la interpretación estadística correcta de este valor central?`,
      opciones: [
        { key: 'A', texto: 'Exactamente el 50% de los hogares encuestados consume 12 m³ o menos de agua al mes.' },
        { key: 'B', texto: 'Todos los hogares del sector consumen exactamente 12 m³ de agua mensualmente.' },
        { key: 'C', texto: 'El consumo máximo registrado en la muestra fue de 24 m³.' },
        { key: 'D', texto: 'La moda de la distribución es necesariamente igual a 14 m³.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: La mediana es el percentil 50, indicando que el 50% de las observaciones se encuentran en un valor menor o igual a 12 m³.',
      competenciaICFES: 'Interpretación y Representación',
      procesoMatematico: 'Comunicación',
      nivelBloom: 'Conocimiento/Comprensión'
    },
    {
      id: 5,
      tipo: 'seleccion_multiple',
      contexto: `Para remodelar la cancha deportiva de la IE Rafael Uribe Uribe, se calcula la superficie mediante la fórmula del área del rectángulo: A = base × altura.`,
      enunciado: `Si la dimensión de la base se incrementa en un 20% (multiplicándose por 1,20) y la altura permanece constante, ¿cuál es el porcentaje de variación final del área A?`,
      opciones: [
        { key: 'A', texto: 'Aumenta exactamente en un 20%.' },
        { key: 'B', texto: 'Aumenta en un 40% por ser una superficie plana.' },
        { key: 'C', texto: 'Permanece inalterada debido a la altura fija.' },
        { key: 'D', texto: 'Disminuye en un 10%.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: A_nueva = (1,20 × base) × altura = 1,20 × (base × altura) = 1,20 × A_original, lo que representa un incremento exacto del 20%.',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Resolución de Problemas',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 6,
      tipo: 'seleccion_multiple',
      contexto: `Un atleta de la IE Rafael Uribe Uribe realiza un entrenamiento en la pista del Estadio Atanasio Girardot. Su desplazamiento en metros respecto al tiempo t en segundos está dado por un modelo paso a paso.`,
      enunciado: `Dada la ecuación de solución ${formulaSecundaria}, si se requiere despejar una de las variables para hallar su valor exacto, ¿cuál es el procedimiento algebraico correcto?`,
      opciones: [
        { key: 'A', texto: 'Aplicar la operación inversa correspondiente a ambos lados de la igualdad.' },
        { key: 'B', texto: 'Eliminar las variables sin realizar ninguna operación matemática.' },
        { key: 'C', texto: 'Multiplicar ambos lados de la ecuación por cero.' },
        { key: 'D', texto: 'Invertir arbitrariamente los signos numéricos del resultado.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Para despejar una incógnita en una ecuación algebraica se deben aplicar operaciones inversas que mantengan la igualdad.',
      competenciaICFES: 'Argumentación',
      procesoMatematico: 'Razonamiento',
      nivelBloom: 'Evaluación/Creación'
    },
    {
      id: 7,
      tipo: 'seleccion_multiple',
      contexto: `Un arquitecto diseña una rampa de acceso peatonal en la IE Rafael Uribe Uribe. La pendiente m de la rampa se define como m = (altura vertical) / (distancia horizontal).`,
      enunciado: `Si la norma exige una pendiente máxima de m = 0,08 (8%) y se requiere salvar un desnivel vertical de 40 cm, ¿cuántos centímetros horizontales se necesitan para la rampa?`,
      opciones: [
        { key: 'A', texto: '500 cm (5 metros)' },
        { key: 'B', texto: '320 cm (3,2 metros)' },
        { key: 'C', texto: '100 cm (1 metro)' },
        { key: 'D', texto: '800 cm (8 metros)' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Despejando distancia horizontal = (altura vertical) / m = 40 cm / 0,08 = 500 cm.',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 8,
      tipo: 'seleccion_multiple',
      contexto: `En el proyecto ambiental escolar (PRAE) de la IE Rafael Uribe Uribe se registra la cantidad de kilogramos de plástico recolectados en 5 semanas: 15 kg, 18 kg, 20 kg, 22 kg y 35 kg.`,
      enunciado: `Calculando la media aritmética (promedio) de los datos x̄ = (15 + 18 + 20 + 22 + 35) / 5, ¿cuál es su valor y cómo afecta el valor atípico de 35 kg al resultado?`,
      opciones: [
        { key: 'A', texto: 'La media es 22 kg, la cual se ve elevada por el dato atípico de 35 kg superior a la mediana (20 kg).' },
        { key: 'B', texto: 'La media es 15 kg exactos.' },
        { key: 'C', texto: 'La media es igual a la mediana: 35 kg.' },
        { key: 'D', texto: 'No es posible calcular la media aritmética con 5 datos.' }
      ],
      respuestaCorrecta: 'A',
      justificacionPedagogica: 'Respuesta A correcta: Suma total = 110 kg. Dividido entre 5 datos = 22 kg. El dato extremo de 35 kg desplaza la media hacia la derecha respecto a la mediana de 20 kg.',
      competenciaICFES: 'Interpretación y Representación',
      procesoMatematico: 'Comunicación',
      nivelBloom: 'Aplicación/Análisis'
    },
    {
      id: 9,
      tipo: 'desarrollo',
      contexto: `DESAFÍO ABIERTO DE GEOMETRÍA Y ÁLGEBRA APLICADA EN MEDELLÍN.`,
      enunciado: `Un habitante del barrio San Javier (Comuna 13) desea impermeabilizar la cubierta rectangular de su vivienda. Las dimensiones de la superficie son de (x + 4) metros de largo por (x - 2) metros de ancho.\n\na) Escriba la expresión algebraica simplificada para el área total A(x) = largo × ancho.\nb) Si x = 6 metros, determine el área en m² y el costo total si cada m² cuesta $25.000 COP en el comercio local.`,
      justificacionPedagogica: 'CRITERIO DOCENTE DE CALIFICACIÓN:\n- Parte a) Producto algebraico A(x) = (x+4)(x-2) = x² + 2x - 8 (1.5 Pts).\n- Parte b) Sustitución x = 6: A(6) = (6)² + 2(6) - 8 = 36 + 12 - 8 = 40 m² (1.5 Pts).\n- Costo total: 40 m² × $25.000 = $1.000.000 COP (2.0 Pts).',
      competenciaICFES: 'Formulación y Ejecución',
      procesoMatematico: 'Modelación',
      nivelBloom: 'Evaluación/Creación'
    },
    {
      id: 10,
      tipo: 'desarrollo',
      contexto: `DEMOSTRACIÓN Y ANÁLISIS MATEMÁTICO EN CONTEXTO REAL.`,
      enunciado: `Dada la ecuación de proporcionalidad y conservación empleada en el análisis de movilidad del Metro de Medellín, explique paso a paso la validez matemática del procedimiento algebraico utilizado para determinar la incógnita y justifique por qué la verificación numérica con datos reales garantiza la exactitud del resultado.`,
      justificacionPedagogica: 'CRITERIO DOCENTE DE CALIFICACIÓN:\n- El estudiante explica con propiedad la validez del modelo algebraico empleado (2.5 Pts).\n- Argumenta de forma coherente la importancia de verificar unidades y valores en problemas reales (2.5 Pts).',
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
