import { EjercicioPractico, PlanSemana } from '../types';

interface ContenidoTematicoEspecifico {
  pensamiento?: string;
  dba?: string;
  competencia?: string;
  evidencia?: string;
  exploracionMedellin: string;
  concepto: string;
  formulas: string[];
  ejemploPasoAPaso: {
    enunciado: string;
    pasos: string[];
    solucionFinal: string;
  };
  ejerciciosPracticos: EjercicioPractico[];
  colaborativo?: string;
  tareaBarrial?: string;
}

/**
 * Clasifica y genera el contenido matemático y pedagógico exacto para cada semana
 * según su título temático, grado y asignatura, garantizando alineación 100% con
 * los DBA V2 del MEN, Estándares Básicos de Competencias y Expedición Currículo Medellín.
 */
export function enriquecerPlanSemana(
  grado: string,
  asignatura: string,
  periodo: number,
  planBase: PlanSemana
): PlanSemana {
  const t = planBase.titulo.toLowerCase();
  const sem = planBase.semana;
  const esPosteriorASaber11 = grado === '11°' && (periodo === 3 || (periodo === 2 && sem >= 20));
  const nivel3: EjercicioPractico['nivel'] = esPosteriorASaber11
    ? 'Profundización'
    : grado === '11°' || grado === '10°' || grado === '9°'
    ? 'Desafío ICFES'
    : 'Desafío Avanzado';

  const esp = obtenerContenidoPorTema(t, grado, asignatura, periodo, sem, planBase.titulo, nivel3);

  return {
    ...planBase,
    pensamiento: esp.pensamiento || determinarPensamientoExacto(t, asignatura, planBase.pensamiento),
    dba: esp.dba || determinarDBAOficial(grado, asignatura, t, planBase.dba),
    competencia: esp.competencia || determinarCompetenciaMedellin(grado, asignatura, t, planBase.competencia),
    evidencia: esp.evidencia || generarEvidenciaEspecifica(planBase.titulo, esp.concepto),
    exploracionMedellin: esp.exploracionMedellin,
    estructuracionTeorica: {
      concepto: esp.concepto,
      formulas: esp.formulas,
      ejemploPasoAPaso: esp.ejemploPasoAPaso,
      ejerciciosPracticos: esp.ejerciciosPracticos,
    },
    ejercitacionYCierre: {
      colaborativo:
        esp.colaborativo ||
        `En parejas, resolver y verificar los 3 ejercicios graduados sobre "${planBase.titulo}" socializando el paso a paso en el tablero.`,
      tareaBarrial:
        esp.tareaBarrial ||
        `Identificar y resolver una situación real en su hogar o barrio de la Comuna 12 (Medellín) aplicando directamente "${planBase.titulo}".`,
    },
  };
}

function determinarPensamientoExacto(t: string, asignatura: string, fallback: string): string {
  if (asignatura === 'Estadística') return 'Aleatorio y Sistemas de Datos';
  if (
    t.includes('encuesta') ||
    t.includes('tabla de conteo') ||
    t.includes('frecuencia') ||
    t.includes('pictograma') ||
    t.includes('gráfico') ||
    t.includes('estadístic') ||
    t.includes('probabilidad') ||
    t.includes('azar') ||
    t.includes('moda') ||
    t.includes('espacio muestral') ||
    t.includes('combinac') ||
    t.includes('permutac') ||
    t.includes('dispersión') ||
    t.includes('percentil') ||
    t.includes('correlación') ||
    t.includes('bayes')
  ) {
    return 'Aleatorio y Sistemas de Datos';
  }
  if (
    t.includes('longitud') ||
    t.includes('medición') ||
    t.includes('metro') ||
    t.includes('perímetro') ||
    t.includes('área') ||
    t.includes('volumen') ||
    t.includes('capacidad') ||
    t.includes('masa') ||
    t.includes('peso') ||
    t.includes('reloj') ||
    t.includes('calendario') ||
    t.includes('tiempo') ||
    t.includes('sistema métrico') ||
    t.includes('conversión de unidades') ||
    t.includes('radianes')
  ) {
    return 'Métrico y Sistemas de Medida';
  }
  if (
    t.includes('figura') ||
    t.includes('cuerpos geométricos') ||
    t.includes('sólidos') ||
    t.includes('polígono') ||
    t.includes('triángulo') ||
    t.includes('cuadrilátero') ||
    t.includes('paralela') ||
    t.includes('perpendicular') ||
    t.includes('ángulo') ||
    t.includes('plano cartesiano') ||
    t.includes('traslación') ||
    t.includes('rotación') ||
    t.includes('reflexión') ||
    t.includes('simetría') ||
    t.includes('homotecia') ||
    t.includes('pitágoras') ||
    t.includes('tales') ||
    t.includes('semejanza') ||
    t.includes('circunferencia') ||
    t.includes('parábola') ||
    t.includes('elipse') ||
    t.includes('hipérbola') ||
    t.includes('cónicas') ||
    t.includes('distancia entre dos puntos') ||
    t.includes('vector') ||
    t.includes('ubicac') ||
    t.includes('trayectoria') ||
    t.includes('euler')
  ) {
    return 'Espacial y Sistemas Geométricos';
  }
  if (
    t.includes('patrones') ||
    t.includes('secuencia') ||
    t.includes('igualdad') ||
    t.includes('ecuación') ||
    t.includes('ecuaciones') ||
    t.includes('inecuac') ||
    t.includes('incógnita') ||
    t.includes('faltante') ||
    t.includes('variación') ||
    t.includes('proporcion') ||
    t.includes('regla de tres') ||
    t.includes('álgebra') ||
    t.includes('algebraic') ||
    t.includes('polinomio') ||
    t.includes('productos notables') ||
    t.includes('factorización') ||
    t.includes('función') ||
    t.includes('funciones') ||
    t.includes('sucesiones') ||
    t.includes('límite') ||
    t.includes('continuidad') ||
    t.includes('derivada') ||
    t.includes('optimización') ||
    t.includes('integral')
  ) {
    return 'Variacional y Sistemas Algebraicos y Analíticos';
  }
  return fallback || 'Numérico y Sistemas Numéricos';
}

function determinarDBAOficial(grado: string, asignatura: string, t: string, fallback: string): string {
  const pensamiento = determinarPensamientoExacto(t, asignatura, '');
  const mapaDBA: Record<string, Record<string, string>> = {
    '1°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 1°): Identifica los usos de los números (como código, cardinal, medida y ordinal) y utiliza las características posicionales del Sistema de Numeración Decimal.',
      var: 'DBA 8 / DBA 9 (MEN V2 1°): Describe cualitativamente situaciones para identificar el cambio y la variación y reconoce el signo igual como una equivalencia.',
      met: 'DBA 4 / DBA 5 (MEN V2 1°): Reconoce y compara atributos que pueden ser medidos en objetos y eventos (longitud, duración, rapidez, masa, peso, capacidad).',
      esp: 'DBA 6 / DBA 7 (MEN V2 1°): Compara objetos del entorno y establece semejanzas y diferencias empleando características geométricas de las formas bidimensionales y tridimensionales.',
      ale: 'DBA 10 (MEN V2 1°): Clasifica y organiza datos de acuerdo con cualidades y atributos y los presenta en tablas y pictogramas.',
    },
    '2°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 2°): Interpreta, propone y resuelve problemas aditivos y multiplicativos sencillos utilizando el Sistema de Numeración Decimal.',
      var: 'DBA 8 / DBA 9 (MEN V2 2°): Propone e identifica patrones y utiliza propiedades de los números y de las operaciones para calcular valores desconocidos.',
      met: 'DBA 4 / DBA 5 (MEN V2 2°): Compara y explica características que se pueden medir en el proceso de resolución de problemas relativos a longitud, superficie, capacidad o tiempo.',
      esp: 'DBA 6 / DBA 7 (MEN V2 2°): Clasifica, describe y representa objetos del entorno a partir de sus propiedades geométricas para establecer relaciones entre las formas bidimensionales y tridimensionales.',
      ale: 'DBA 10 / DBA 11 (MEN V2 2°): Clasifica y organiza datos, los representa utilizando tablas de conteo y pictogramas con escalas, y explica la posibilidad de ocurrencia de eventos cotidianos.',
    },
    '3°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 3°): Interpreta, formula y resuelve problemas aditivos, multiplicativos y fraccionarios en diferentes contextos.',
      var: 'DBA 8 / DBA 9 (MEN V2 3°): Describe y representa los aspectos que cambian y permanecen constantes en secuencias y en otras situaciones de variación.',
      met: 'DBA 4 / DBA 5 (MEN V2 3°): Describe y argumenta posibles relaciones entre los valores del área y el perímetro de figuras planas y realiza estimaciones de volumen y capacidad.',
      esp: 'DBA 6 / DBA 7 (MEN V2 3°): Describe y representa formas bidimensionales y tridimensionales de acuerdo con las propiedades geométricas y formula trayectorias y simetrías.',
      ale: 'DBA 10 / DBA 11 (MEN V2 3°): Lee e interpreta información contenida en tablas de frecuencia, gráficos de barras y pictogramas con escala, y plantea y resuelve preguntas sobre la posibilidad de ocurrencia de situaciones.',
    },
    '4°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 4°): Interpreta las fracciones como razón, relación parte todo, cociente y operador, y describe y justifica diferentes estrategias para representar y operar con decimales.',
      var: 'DBA 8 / DBA 9 (MEN V2 4°): Identifica, documenta e interpreta variaciones de dependencia entre cantidades en diferentes fenómenos y patrones numéricos.',
      met: 'DBA 4 / DBA 5 (MEN V2 4°): Caracteriza y compara atributos medibles de los objetos (densidad, dureza, peso, capacidad) y elige instrumentos y unidades estandarizadas.',
      esp: 'DBA 6 / DBA 7 (MEN V2 4°): Identifica, describe y representa figuras bidimensionales y tridimensionales, arma desarrollos planos y aplica movimientos en el plano.',
      ale: 'DBA 10 / DBA 11 (MEN V2 4°): Recopila y organiza datos en tablas de doble entrada y los representa en gráficos de barras agrupadas o gráficos de líneas, y comprende la probabilidad simple.',
    },
    '5°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 5°): Interpreta y utiliza los números naturales, racionales (fracciones y decimales), potenciación y radicación para formular y resolver problemas.',
      var: 'DBA 8 / DBA 9 (MEN V2 5°): Describe e interpreta variaciones de dependencia entre cantidades y las representa por medio de gráficas y ecuaciones lineales sencillas.',
      met: 'DBA 4 / DBA 5 (MEN V2 5°): Justifica relaciones entre superficie y volumen, respecto a dimensiones de figuras y sólidos, y explica las relaciones entre el perímetro y el área.',
      esp: 'DBA 6 / DBA 7 (MEN V2 5°): Identifica y describe propiedades que caracterizan un cuerpo en términos de la bidimensionalidad y la tridimensionalidad y localiza puntos en el plano cartesiano.',
      ale: 'DBA 10 / DBA 11 / DBA 12 (MEN V2 5°): Formula preguntas que requieren comparar dos grupos de datos, utiliza la media y la mediana, y predice la posibilidad de ocurrencia de un evento simple.',
    },
    '6°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 6°): Interpreta los números enteros y racionales (en sus representaciones de fracción y de decimal) con sus operaciones, en diferentes contextos.',
      var: 'DBA 8 / DBA 9 (MEN V2 6°): Identifica y analiza propiedades de covariación directa e inversa entre variables y opera sobre números desconocidos.',
      met: 'DBA 4 / DBA 5 (MEN V2 6°): Utiliza y explica diferentes estrategias (desarrollo de la forma o plantillas) e instrumentos para la construcción de figuras planas y cuerpos y el cálculo de áreas y volúmenes.',
      esp: 'DBA 6 / DBA 7 (MEN V2 6°): Representa y construye formas bidimensionales y tridimensionales con el apoyo en instrumentos de medida y aplica transformaciones en el plano.',
      ale: 'DBA 10 / DBA 11 / DBA 12 (MEN V2 6°): Interpreta información estadística presentada en diversas fuentes, calcula medidas de tendencia central y estima probabilidades.',
    },
    '7°': {
      num: 'DBA 1 / DBA 2 / DBA 3 (MEN V2 7°): Comprende y resuelve problemas que involucran los números racionales y enteros con las operaciones (suma, resta, multiplicación, división, potenciación, radicación).',
      var: 'DBA 7 (MEN V2 7°): Plantea y resuelve ecuaciones, las describe verbalmente y representa situaciones de variación proporcional directa e inversa.',
      met: 'DBA 4 / DBA 5 (MEN V2 7°): Utiliza escalas apropiadas para representar e interpretar planos, mapas y maquetas, y calcula áreas superficiales y volúmenes de cuerpos geométricos.',
      esp: 'DBA 6 (MEN V2 7°): Representa en el plano cartesiano la variación de magnitudes y relaciona características de poliedros y cuerpos redondos.',
      ale: 'DBA 8 / DBA 9 (MEN V2 7°): Plantea preguntas para realizar estudios estadísticos en los que representa información mediante histogramas, polígonos de frecuencia y usa el principio multiplicativo.',
    },
    '8°': {
      num: 'DBA 1 / DBA 2 (MEN V2 8°): Reconoce la existencia de los números irracionales y construye representaciones geométricas y numéricas de los números reales.',
      var: 'DBA 3 / DBA 8 / DBA 9 (MEN V2 8°): Reconoce los diferentes usos y significados de las operaciones (convencionales y no convencionales) y utiliza expresiones algebraicas, polinomios, factorización y ecuaciones lineales.',
      met: 'DBA 4 / DBA 5 (MEN V2 8°): Describe atributos medibles de diferentes sólidos y explica relaciones entre ellos por medio del lenguaje algebraico.',
      esp: 'DBA 6 / DBA 7 (MEN V2 8°): Identifica relaciones de congruencia y semejanza entre las formas geométricas que configuran el diseño de un objeto y aplica los teoremas de Pitágoras y Tales.',
      ale: 'DBA 10 / DBA 11 / DBA 12 (MEN V2 8°): Interpreta información presentada en tablas de frecuencia y gráficos con datos agrupados, halla medidas de dispersión y aplica técnicas de conteo y probabilidad.',
    },
    '9°': {
      num: 'DBA 1 / DBA 2 (MEN V2 9°): Utiliza los números reales (sus operaciones, relaciones y representaciones) para resolver problemas con expresiones polinómicas y radicales.',
      var: 'DBA 2 / DBA 8 (MEN V2 9°): Propone y desarrolla expresiones algebraicas en el conjunto de los números reales y utiliza las propiedades de la igualdad para resolver sistemas de ecuaciones y funciones cuadráticas, exponenciales y lineales.',
      met: 'DBA 4 / DBA 5 (MEN V2 9°): Identifica y utiliza relaciones entre el volumen y la capacidad de algunos cuerpos redondos y aplica teoremas métricos.',
      esp: 'DBA 5 / DBA 6 (MEN V2 9°): Utiliza teoremas, propiedades y relaciones geométricas (teorema de Tales, teorema de Pitágoras y razones trigonométricas) para proponer y justificar estrategias de medición.',
      ale: 'DBA 10 / DBA 11 (MEN V2 9°): Propone un diseño estadístico adecuado para resolver una pregunta que indaga por la comparación sobre las distribuciones de dos grupos de datos y calcula probabilidades compuestas.',
    },
    '10°': {
      num: 'DBA 1 / DBA 2 (MEN V2 10°): Utiliza las propiedades de los números reales para justificar procedimientos y diferentes representaciones de subconjuntos de ellos.',
      var: 'DBA 4 / DBA 7 (MEN V2 10°): Comprende y utiliza funciones ( particular las trigonométricas y periódicas) para modelar fenómenos periódicos y justifica las soluciones.',
      met: 'DBA 3 / DBA 4 (MEN V2 10°): Resuelve problemas que involucran el significado de medidas de magnitudes relacionales y sistemas de medición angular (sexagesimal y cíclico).',
      esp: 'DBA 5 / DBA 6 (MEN V2 10°): Explora y describe las propiedades de los lugares geométricos y de sus transformaciones a partir de diferentes representaciones (rectas y secciones cónicas en el plano cartesiano).',
      ale: 'DBA 8 / DBA 9 (MEN V2 10°): Selecciona muestras aleatorias, calcula e interpreta medidas de dispersión, percentiles y correlación lineal entre variables.',
    },
    '11°': {
      num: 'DBA 1 / DBA 2 (MEN V2 11°): Utiliza las propiedades de los números reales (desigualdades, intervalos y valor absoluto) para justificar procedimientos y resolver inecuaciones.',
      var: 'DBA 3 / DBA 4 / DBA 5 / DBA 7 (MEN V2 11°): Utiliza instrumentos, unidades de medida, sus relaciones y la noción de límite, derivada e integral para determinar razones de cambio y optimizar funciones reales.',
      met: 'DBA 4 / DBA 6 (MEN V2 11°): Interpreta la noción de derivada como razón de cambio y como valor de la pendiente de la tangente a una curva en contextos físicos y geométricos.',
      esp: 'DBA 6 (MEN V2 11°): Modela objetos geométricos en diversos sistemas de coordenadas (cartesiano, polar, esférico) y analiza cortes cónicos.',
      ale: 'DBA 9 / DBA 10 (MEN V2 11°): Plantea y resuelve situaciones problemáticas del contexto real y de las matemáticas mediante el uso de la probabilidad condicional, distribución de probabilidad y medidas estadísticas.',
    },
  };

  const gMap = mapaDBA[grado] || mapaDBA['8°'];
  if (pensamiento.includes('Aleatorio')) return gMap.ale;
  if (pensamiento.includes('Métrico')) return gMap.met;
  if (pensamiento.includes('Espacial')) return gMap.esp;
  if (pensamiento.includes('Variacional')) return gMap.var;
  return gMap.num || fallback;
}

function determinarCompetenciaMedellin(grado: string, asignatura: string, t: string, fallback: string): string {
  const p = determinarPensamientoExacto(t, asignatura, '');
  return `Expedición Currículo Medellín (${grado}) — ${p}: Interpretación, Formulación, Ejecución y Argumentación Matemática.`;
}

function generarEvidenciaEspecifica(titulo: string, concepto: string): string {
  return `SABER: Comprende los conceptos y propiedades de "${titulo}". HACER: Resuelve ejercicios y problemas contextualizados aplicando los procedimientos formales del tema. SER: Demuestra rigor, autonomía y trabajo colaborativo en el aula.`;
}

/**
 * Motor temático exhaustivo que devuelve fórmulas, ejemplo resuelto y 3 ejercicios graduados
 * 100% correspondientes al título de la semana.
 */
function obtenerContenidoPorTema(
  t: string,
  grado: string,
  asignatura: string,
  periodo: number,
  sem: number,
  tituloOriginal: string,
  nivel3: EjercicioPractico['nivel']
): ContenidoTematicoEspecifico {
  // =========================================================================
  // 1. PRIMARIA GRADO 1° Y 2°: CONTEO, DECENAS, CENTENAS, SUMA, RESTA, RELOJ
  // =========================================================================
  if (t.includes('conteo del 1 al 5')) {
    return {
      exploracionMedellin: 'En el aula de 1° de la IE Rafael Uribe Uribe contamos cuántos lápices, borradores y cuadernos hay sobre cada pupitre (del 1 al 5).',
      concepto: 'Los números del 1 al 5 nos permiten contar colecciones pequeñas asignando un número a cada objeto (correspondencia uno a uno).',
      formulas: ['Secuencia: 1 (uno), 2 (dos), 3 (tres), 4 (cuatro), 5 (cinco)', 'Cada número siguiente agrega 1 unidad: n + 1'],
      ejemploPasoAPaso: {
        enunciado: 'En una mesa hay 3 manzanas rojas y 2 manzanas verdes. ¿Cuántas manzanas hay de cada color y cuántas en total?',
        pasos: [
          'Paso 1: Señalar y contar las manzanas rojas: 1, 2, 3.',
          'Paso 2: Señalar y contar las manzanas verdes: 1, 2.',
          'Paso 3: Contar todas las manzanas juntas: 1, 2, 3, 4, 5.'
        ],
        solucionFinal: 'Hay 3 rojas, 2 verdes y 5 manzanas en total.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Cuenta cuántos dedos hay levantados en una mano abierta y escribe el número correspondiente.',
          pistaDUA: 'Toca cada dedo de tu mano mientras cuentas en voz alta.',
          pasosExplicativos: ['Contar dedo por dedo: 1, 2, 3, 4, 5.', 'Escribir el símbolo numérico 5.'],
          solucionFinal: '5 dedos.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Salomé tiene 4 crayolas amarillas. Si guarda 1 crayola en su bolso, ¿cuántas crayolas quedan sobre la mesa?',
          pistaDUA: 'Dibuja 4 palitos y tacha 1.',
          pasosExplicativos: ['Dibujar 4 crayolas: | | | |.', 'Quitar 1 crayola.', 'Contar las que quedan: 1, 2, 3.'],
          solucionFinal: 'Quedan 3 crayolas sobre la mesa.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'En el jardín escolar hay 2 mariposas azules y llegan 2 mariposas blancas más. ¿Es cierto que ahora hay 4 mariposas?',
          pistaDUA: 'Usa 2 fichas de un color y 2 de otro color y cuéntalas todas.',
          pasosExplicativos: ['Contar el primer grupo: 1, 2.', 'Seguir contando con el segundo grupo: 3, 4.', 'Comprobar que el total es 4.'],
          solucionFinal: 'Sí, es cierto: 2 y 2 forman 4 mariposas.'
        }
      ]
    };
  }

  if (t.includes('del 6 al 9')) {
    return {
      exploracionMedellin: 'Contar las cabinas de Metrocable que pasan por la estación San Javier en grupos de 6, 7, 8 y 9 cabinas.',
      concepto: 'Los números 6, 7, 8 y 9 representan colecciones mayores que 5 y menores que una decena.',
      formulas: ['5 + 1 = 6 (seis) | 5 + 2 = 7 (siete)', '5 + 3 = 8 (ocho) | 5 + 4 = 9 (nueve)'],
      ejemploPasoAPaso: {
        enunciado: 'En una canasta hay 5 bananos y agregamos 3 bananos más. ¿Cuántos bananos hay ahora?',
        pasos: [
          'Paso 1: Partimos de 5 bananos (una mano completa).',
          'Paso 2: Contamos 3 más hacia adelante: 6, 7, 8.',
          'Paso 3: Escribimos el número 8.'
        ],
        solucionFinal: 'En la canasta hay 8 bananos.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Dibuja 7 estrellas y encierra un grupo de 5. ¿Cuántas estrellas quedaron por fuera del grupo?',
          pistaDUA: 'Recuerda que 7 se forma con 5 y 2.',
          pasosExplicativos: ['Dibujar 7 estrellas.', 'Encerrar 5 estrellas.', 'Contar las restantes: 2 estrellas.'],
          solucionFinal: 'Quedaron 2 estrellas por fuera (5 + 2 = 7).'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'En una fila para el restaurante escolar hay 6 niñas y 3 niños. ¿Cuántos estudiantes hay en la fila?',
          pistaDUA: 'Empieza en 6 y da 3 pasos adelante.',
          pasosExplicativos: ['Partir de 6.', 'Agregar 3 contando: 7, 8, 9.', 'Total = 9.'],
          solucionFinal: 'Hay 9 estudiantes en total.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Juan tiene 8 canicas y Ana tiene 6 canicas. ¿Quién tiene más canicas y cuántas le faltan a Ana para igualar a Juan?',
          pistaDUA: 'Compara dos filas de fichas: una de 8 y otra de 6.',
          pasosExplicativos: ['8 es mayor que 6, por tanto Juan tiene más.', 'Contar desde 6 hasta 8: 7, 8 (faltan 2).'],
          solucionFinal: 'Juan tiene más canicas y a Ana le faltan 2 canicas.'
        }
      ]
    };
  }

  if (t.includes('número cero') || t.includes('decena (10)') || t.includes('11 al 19') || t.includes('familia del 20') || t.includes('hasta el 50') || t.includes('hasta el 99')) {
    return {
      exploracionMedellin: 'Agrupar tapas plásticas recolectadas en el proyecto ambiental de la IE Rafael Uribe Uribe en paquetes de 10 (decenas) y unidades sueltas.',
      concepto: `Estudio de "${tituloOriginal}". En el Sistema de Numeración Decimal, 10 unidades forman 1 decena (1D = 10U), y el cero (0) indica ausencia de unidades sueltas.`,
      formulas: ['1 Decena (D) = 10 Unidades (U)', 'Número de 2 cifras: D × 10 + U (ej. 24 = 2D + 4U = 20 + 4)', 'Comparación: > (Mayor que), < (Menor que), = (Igual a)'],
      ejemploPasoAPaso: {
        enunciado: 'Camila recogió 27 semillas en el patio. ¿Cuántas decenas completas puede armar y cuántas semillas quedan sueltas?',
        pasos: [
          'Paso 1: Formar grupos de 10 semillas: con 27 semillas armamos 2 bolsas de 10 (20 semillas).',
          'Paso 2: Contar las semillas que sobran: quedan 7 semillas sueltas.',
          'Paso 3: Ubicar en la tabla posicional: 2 Decenas (D) y 7 Unidades (U).'
        ],
        solucionFinal: 'Arma 2 decenas completas y quedan 7 unidades sueltas (27 = 20 + 7).'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Descompón el número 18 en decenas y unidades e indica cómo se escribe en suma.',
          pistaDUA: 'El primer dígito indica las decenas y el segundo las unidades.',
          pasosExplicativos: ['El 1 ocupa las decenas (10).', 'El 8 ocupa las unidades (8).', 'Suma: 10 + 8 = 18.'],
          solucionFinal: '1 Decena y 8 Unidades (10 + 8 = 18).'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Compara los números 19 y 23 usando el signo > o <, y explica cuál tiene más decenas.',
          pistaDUA: 'Observa primero la cifra de las decenas de cada número.',
          pasosExplicativos: ['19 tiene 1 decena y 9 unidades.', '23 tiene 2 decenas y 3 unidades.', 'Como 1 decena < 2 decenas, entonces 19 < 23.'],
          solucionFinal: '19 < 23; el número 23 es mayor porque tiene 2 decenas.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Si tienes 3 cajas con 10 colores cada una y 5 colores sueltos, y regalas 1 caja completa, ¿cuántos colores te quedan?',
          pistaDUA: 'Cuenta cuántas cajas de 10 quedan después de regalar una.',
          pasosExplicativos: ['Total inicial: 3 decenas + 5 unidades = 35 colores.', 'Al regalar 1 decena quedan 2 decenas + 5 unidades.', 'Total final: 20 + 5 = 25 colores.'],
          solucionFinal: 'Te quedan 25 colores (2 decenas y 5 unidades).'
        }
      ]
    };
  }

  // =========================================================================
  // 2. MEDICIÓN INICIAL, LONGITUD, TIEMPO, RELOJ, MASA Y CAPACIDAD (1° a 4°)
  // =========================================================================
  if (t.includes('largo, corto') || t.includes('pasos, cuartas') || (t.includes('metro y centímetro') && grado === '2°')) {
    return {
      exploracionMedellin: 'Medir el ancho del salón de clase en la IE Rafael Uribe Uribe usando primero pasos y cuartas, y luego compararlo con una cinta métrica en centímetros.',
      concepto: `Desarrollo de "${tituloOriginal}". Medir una longitud es compararla con una unidad de referencia (no estandarizada como la cuarta o el lápiz, o estandarizada como el metro y el centímetro).`,
      formulas: ['1 Metro (m) = 100 Centímetros (cm)', 'Medio metro = 50 cm', '1 Decímetro (dm) = 10 cm'],
      ejemploPasoAPaso: {
        enunciado: 'El tablero del salón mide 2 metros de largo. ¿Cuántos centímetros mide el tablero?',
        pasos: [
          'Paso 1: Recordar que 1 metro equivale a 100 centímetros.',
          'Paso 2: Sumar dos veces 100 cm: 100 cm + 100 cm = 200 cm.'
        ],
        solucionFinal: 'El tablero mide 200 centímetros.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Una cartuchera mide 22 cm y un cuaderno mide 28 cm. ¿Cuál objeto es más largo y por cuántos centímetros?',
          pistaDUA: 'Resta al número mayor el número menor.',
          pasosExplicativos: ['Comparar 28 cm > 22 cm (el cuaderno es más largo).', 'Restar: 28 - 22 = 6 cm.'],
          solucionFinal: 'El cuaderno es más largo por 6 cm.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Lucas midió su mesa con un lápiz de 10 cm y cupo exactamente 8 veces. ¿Cuántos centímetros mide la mesa?',
          pistaDUA: 'Suma 10 ocho veces o multiplica 8 por 10.',
          pasosExplicativos: ['Cada lápiz mide 10 cm.', 'En 8 lápices hay: 8 × 10 cm = 80 cm.'],
          solucionFinal: 'La mesa mide 80 centímetros.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Una cinta decorativa mide 1 metro y 35 centímetros. Si se corta un trozo de 50 centímetros, ¿cuántos centímetros de cinta quedan?',
          pistaDUA: 'Convierte primero 1 metro y 35 cm todo a centímetros.',
          pasosExplicativos: ['1 m + 35 cm = 100 cm + 35 cm = 135 cm.', 'Restar el corte: 135 cm - 50 cm = 85 cm.'],
          solucionFinal: 'Quedan 85 centímetros de cinta.'
        }
      ]
    };
  }

  if (t.includes('reloj') || t.includes('días de la semana') || t.includes('calendario')) {
    return {
      exploracionMedellin: 'Organizar el horario de clases y recreo de la IE Rafael Uribe Uribe leyendo el reloj de manecillas y el calendario escolar de Medellín.',
      concepto: `Estudio de "${tituloOriginal}". En el reloj analógico, la manecilla corta (horario) marca las horas y la larga (minutero) marca los minutos de 5 en 5.`,
      formulas: ['1 Hora = 60 minutos | Media hora = 30 min | Un cuarto de hora = 15 min', '1 Día = 24 horas | 1 Semana = 7 días | 1 Año = 12 meses'],
      ejemploPasoAPaso: {
        enunciado: 'El descanso escolar inicia a las 9:30 a.m. y dura 30 minutos. ¿A qué hora termina el descanso?',
        pasos: [
          'Paso 1: Hora de inicio: 9 horas y 30 minutos.',
          'Paso 2: Sumar los 30 minutos de duración: 30 min + 30 min = 60 minutos.',
          'Paso 3: Como 60 minutos forman 1 hora completa, pasamos de las 9 a las 10:00 a.m.'
        ],
        solucionFinal: 'El descanso termina a las 10:00 a.m.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'En un reloj de manecillas, el horario apunta al 4 y el minutero apunta al 12. ¿Qué hora es?',
          pistaDUA: 'Cuando el minutero está en el 12, son las horas en punto.',
          pasosExplicativos: ['Horario en 4 = 4 horas.', 'Minutero en 12 = 00 minutos.', 'Hora: 4:00 en punto.'],
          solucionFinal: 'Son las 4:00 en punto.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Un viaje en el Metro de Medellín desde San Javier hasta Parque Berrío tarda 15 minutos. Si abordas el tren a las 2:10 p.m., ¿a qué hora llegas?',
          pistaDUA: 'Suma los minutos: 10 + 15.',
          pasosExplicativos: ['Hora de salida: 2:10 p.m.', 'Sumar 15 minutos a los 10 minutos iniciales: 10 + 15 = 25 minutos.', 'Hora de llegada: 2:25 p.m.'],
          solucionFinal: 'Llegas a las 2:25 p.m.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'La Feria de las Flores dura 10 días. Si comienza un viernes 2 de agosto, ¿en qué fecha termina contando el día de inicio?',
          pistaDUA: 'Cuenta los 10 días en el calendario empezando desde el día 2.',
          pasosExplicativos: ['Días: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 de agosto.', 'Al contar 10 días incluyendo el 2, el décimo día es el 11 de agosto.'],
          solucionFinal: 'Termina el 11 de agosto.'
        }
      ]
    };
  }

  // =========================================================================
  // 3. VALOR POSICIONAL, SUMA, RESTA Y ESTRUCTURAS ADITIVAS (1° a 4°)
  // =========================================================================
  if (
    t.includes('centenas') ||
    t.includes('3 cifras') ||
    t.includes('tres cifras') ||
    t.includes('estructuras aditivas') ||
    t.includes('noción de adición') ||
    t.includes('noción de sustracción') ||
    t.includes('recta numérica con saltos') ||
    t.includes('suma y resta sencillos') ||
    t.includes('2 cifras') ||
    t.includes('cuatro y cinco cifras') ||
    t.includes('hasta 99.999') ||
    t.includes('aditivos combinados') ||
    t.includes('millones') ||
    t.includes('cálculo mental') ||
    t.includes('estimación, redondeo') ||
    t.includes('calculadora')
  ) {
    const esGrande = grado === '3°' || grado === '4°' || grado === '5°';
    return {
      exploracionMedellin: esGrande
        ? 'Analizar el número de pasajeros movilizados diariamente en las estaciones San Javier y San Antonio del Metro de Medellín y calcular totales y diferencias.'
        : 'Contar y reagrupar puntos obtenidos por los equipos del salón en las olimpiadas matemáticas de la IE Rafael Uribe Uribe.',
      concepto: `Desarrollo de "${tituloOriginal}". El Sistema de Numeración Decimal es posicional de base 10: cada posición a la izquierda vale 10 veces más (Unidades, Decenas, Centenas, Unidades de Mil). En la adición reagrupamos cuando una columna suma 10 o más, y en la sustracción desagrupamos de la unidad de orden superior.`,
      formulas: [
        '1 UM = 10 C = 100 D = 1.000 U',
        'Adición: Sumando + Sumando = Suma o Total',
        'Sustracción: Minuendo - Sustraendo = Diferencia (Prueba: Diferencia + Sustraendo = Minuendo)'
      ],
      ejemploPasoAPaso: esGrande
        ? {
            enunciado: 'Una familia de la Comuna 12 tenía ahorrados $45.800 COP, depositó $27.500 COP más y luego pagó $18.300 COP en útiles escolares. ¿Cuánto dinero le quedó?',
            pasos: [
              'Paso 1: Sumar el ahorro inicial y el depósito: 45.800 + 27.500 = 73.300 COP.',
              'Paso 2: Restar el gasto en útiles escolares: 73.300 - 18.300 = 55.000 COP.',
              'Paso 3: Verificar: 55.000 + 18.300 = 73.300 COP.'
            ],
            solucionFinal: 'Le quedaron exactamente $55.000 COP.'
          }
        : {
            enunciado: 'En el colegio hay 368 estudiantes en la jornada de la mañana y 275 en la tarde. ¿Cuántos estudiantes hay en total y cuántos más hay en la mañana que en la tarde?',
            pasos: [
              'Paso 1: Para hallar el total sumamos: 368 + 275. Unidades: 8+5=13 (va 1); Decenas: 1+6+7=14 (va 1); Centenas: 1+3+2=6 => 643.',
              'Paso 2: Para comparar restamos: 368 - 275. Unidades: 8-5=3; Decenas: 16-7=9; Centenas: 2-2=0 => 93.'
            ],
            solucionFinal: 'Hay 643 estudiantes en total y en la mañana hay 93 estudiantes más.'
          },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: esGrande
            ? 'Escribe la descomposición polinómica del número 34.725 y calcula cuánto le falta para llegar a 35.000.'
            : 'Descompón el número 549 en centenas, decenas y unidades, y súmale 150.',
          pistaDUA: 'Alinea las cifras por Unidades, Decenas, Centenas y Unidades de Mil antes de operar.',
          pasosExplicativos: esGrande
            ? ['34.725 = 30.000 + 4.000 + 700 + 20 + 5.', 'Restar: 35.000 - 34.725 = 275.']
            : ['549 = 500 + 40 + 9 (5C + 4D + 9U).', 'Sumar: 549 + 150 = 699.'],
          solucionFinal: esGrande ? '30.000 + 4.000 + 700 + 20 + 5; le faltan 275.' : '5C + 4D + 9U; la suma da 699.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: esGrande
            ? 'En una biblioteca barrial de Medellín había 12.450 libros. Se prestaron 3.680 libros y se recibieron 1.230 en donación. ¿Cuántos libros hay actualmente?'
            : 'En un bus viajan 42 pasajeros. En la primera parada bajan 15 y suben 18. ¿Cuántos pasajeros quedan en el bus?',
          pistaDUA: 'Realiza primero la resta de lo que sale y luego suma lo que ingresa.',
          pasosExplicativos: esGrande
            ? ['Restar libros prestados: 12.450 - 3.680 = 8.770.', 'Sumar donación: 8.770 + 1.230 = 10.000 libros.']
            : ['Restar los que bajan: 42 - 15 = 27 pasajeros.', 'Sumar los que suben: 27 + 18 = 45 pasajeros.'],
          solucionFinal: esGrande ? 'Hay 10.000 libros actualmente.' : 'Quedan 45 pasajeros en el bus.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: esGrande
            ? 'Tres cursos recolectaron fondos: 4°A reunió $28.400, 4°B reunió $3.600 más que 4°A, y entre los tres cursos reunieron $90.000. ¿Cuánto reunió 4°C?'
            : 'Sofía tiene 125 cromos y Tomás tiene 38 cromos menos que Sofía. ¿Cuántos cromos tienen entre los dos?',
          pistaDUA: 'Primero averigua el valor del segundo grupo antes de calcular el total final.',
          pasosExplicativos: esGrande
            ? ['4°B reunió: 28.400 + 3.600 = $32.000.', 'Entre 4°A y 4°B: 28.400 + 32.000 = $60.400.', '4°C reunió: 90.000 - 60.400 = $29.600.']
            : ['Cromos de Tomás: 125 - 38 = 87 cromos.', 'Total entre los dos: 125 + 87 = 212 cromos.'],
          solucionFinal: esGrande ? 'El curso 4°C reunió $29.600.' : 'Entre los dos tienen 212 cromos.'
        }
      ]
    };
  }

  // =========================================================================
  // 4. MULTIPLICACIÓN Y DIVISIÓN EN NATURALES (2° a 6°)
  // =========================================================================
  if (
    t.includes('multiplicación') ||
    t.includes('tablas de multiplicar') ||
    t.includes('reparto') ||
    t.includes('división') ||
    t.includes('problemas multiplicativos')
  ) {
    if (!t.includes('fraccion') && !t.includes('decimal') && !t.includes('enteros') && !t.includes('racionales') && !t.includes('polinomio') && !t.includes('algebraic')) {
      return {
        exploracionMedellin: 'Organizar las sillas del auditorio de la IE Rafael Uribe Uribe en filas y columnas iguales y repartir refrigerios equitativamente entre los salones.',
        concepto: `Estudio de "${tituloOriginal}". La multiplicación abrevia una suma de sumandos iguales (Factores → Producto) y cumple las propiedades conmutativa, asociativa y distributiva. La división reparte una cantidad en partes iguales cumpliendo que Dividendo = (Divisor × Cociente) + Residuo.`,
        formulas: [
          'Multiplicación: a × b = b + b + ... + b (a veces)',
          'Propiedad Distributiva: a × (b + c) = (a × b) + (a × c)',
          'Relación fundamental de la división: D = (d × c) + r, con 0 ≤ r < d'
        ],
        ejemploPasoAPaso: {
          enunciado: 'Para una jornada deportiva en Medellín se compraron 18 cajas con 24 botellas de agua cada una. Si se reparten entre 9 equipos por igual, ¿cuántas botellas recibe cada equipo?',
          pasos: [
            'Paso 1: Calcular el total de botellas multiplicando cajas por botellas: 18 × 24 = 432 botellas.',
            'Paso 2: Dividir el total de botellas entre los 9 equipos: 432 ÷ 9.',
            'Paso 3: Tomamos 43 ÷ 9 = 4 (sobran 7); bajamos el 2 → 72 ÷ 9 = 8 (residuo 0).',
            'Paso 4: Comprobar: 9 × 48 = 432.'
          ],
          solucionFinal: 'Se compraron 432 botellas y cada equipo recibe exactamente 48 botellas.'
        },
        ejerciciosPracticos: [
          {
            numero: 1,
            nivel: 'Fácil',
            enunciado: 'Un cultivo de flores en Santa Elena tiene 15 filas con 12 plantas de hortensias en cada fila. ¿Cuántas plantas hay en total?',
            pistaDUA: 'Aplica la propiedad distributiva: 15 × (10 + 2).',
            pasosExplicativos: ['Multiplicar 15 × 10 = 150.', 'Multiplicar 15 × 2 = 30.', 'Sumar ambos productos: 150 + 30 = 180 plantas.'],
            solucionFinal: 'Hay 180 plantas en total.'
          },
          {
            numero: 2,
            nivel: 'Intermedio',
            enunciado: 'Se desean empacar 250 cuadernos en paquetes de 8 cuadernos cada uno. ¿Cuántos paquetes completos se arman y cuántos cuadernos sobran?',
            pistaDUA: 'Realiza la división 250 ÷ 8 e identifica el cociente y el residuo.',
            pasosExplicativos: ['Dividir 25 ÷ 8 = 3 (sobra 1).', 'Bajar el 0 para formar 10: 10 ÷ 8 = 1 (sobran 2).', 'Cociente = 31 paquetes; Residuo = 2 cuadernos.'],
            solucionFinal: 'Se arman 31 paquetes completos y sobran 2 cuadernos.'
          },
          {
            numero: 3,
            nivel: nivel3,
            enunciado: 'En una división inexacta, el divisor es 14, el cociente es 25 y el residuo es 6. ¿Cuál es el valor del dividendo?',
            pistaDUA: 'Usa la fórmula de la prueba de la división: D = (d × c) + r.',
            pasosExplicativos: ['Multiplicar divisor por cociente: 14 × 25 = 350.', 'Sumar el residuo: 350 + 6 = 356.'],
            solucionFinal: 'El dividendo es 356.'
          }
        ]
      };
    }
  }

  // =========================================================================
  // 5. TEORÍA DE NÚMEROS: MÚLTIPLOS, DIVISORES, PRIMOS, MCM Y MCD (4°, 5°, 6°)
  // =========================================================================
  if (
    t.includes('múltiplos') ||
    t.includes('divisores') ||
    t.includes('divisibilidad') ||
    t.includes('primos') ||
    t.includes('factores primos') ||
    t.includes('m.c.m') ||
    t.includes('m.c.d') ||
    t.includes('mcd') ||
    t.includes('mcm') ||
    t.includes('teoría de números')
  ) {
    return {
      exploracionMedellin: 'En la estación San Antonio del Metro de Medellín, un tren hacia Niquía sale cada 6 minutos y un tren hacia La Estrella cada 8 minutos. Usamos el m.c.m. para saber cada cuánto salen al mismo tiempo.',
      concepto: `Fundamentación de "${tituloOriginal}". Todo número compuesto se expresa de forma única como producto de números primos (Teorema Fundamental de la Aritmética). El m.c.m. resuelve problemas de coincidencia temporal y el M.C.D. resuelve problemas de división en partes máximas iguales.`,
      formulas: [
        'Divisibilidad: por 2 (termina en par), por 3 (suma de cifras múltiplo de 3), por 5 (termina en 0 o 5)',
        'm.c.m.(a, b) = Factores primos comunes y no comunes con su MAYOR exponente',
        'M.C.D.(a, b) = Factores primos comunes con su MENOR exponente'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Hallar el Mínimo Común Múltiplo (m.c.m.) y el Máximo Común Divisor (M.C.D.) de los números 24 y 36.',
        pasos: [
          'Paso 1: Descomponer en factores primos: 24 = 2³ × 3¹  y  36 = 2² × 3².',
          'Paso 2: Para el m.c.m. tomamos los mayores exponentes: 2³ × 3² = 8 × 9 = 72.',
          'Paso 3: Para el M.C.D. tomamos los comunes con menor exponente: 2² × 3¹ = 4 × 3 = 12.'
        ],
        solucionFinal: 'm.c.m.(24, 36) = 72 y M.C.D.(24, 36) = 12.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Descompón el número 60 en sus factores primos y verifica si es divisible por 2, por 3 y por 5.',
          pistaDUA: 'Divide sucesivamente por los números primos 2, 3, 5...',
          pasosExplicativos: ['60 ÷ 2 = 30; 30 ÷ 2 = 15; 15 ÷ 3 = 5; 5 ÷ 5 = 1.', '60 = 2² × 3 × 5. Termina en 0 (divisible por 2 y 5) y 6+0=6 (divisible por 3).'],
          solucionFinal: '60 = 2² × 3 × 5; es divisible por 2, 3 y 5.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Dos rutas de buses de Robledo pasan por el colegio cada 15 minutos y cada 20 minutos respectivamente. Si coinciden a las 7:00 a.m., ¿a qué hora volverán a coincidir?',
          pistaDUA: 'Calcula el m.c.m. entre 15 y 20.',
          pasosExplicativos: ['15 = 3 × 5 y 20 = 2² × 5.', 'm.c.m.(15, 20) = 2² × 3 × 5 = 60 minutos (1 hora).', '7:00 a.m. + 1 hora = 8:00 a.m.'],
          solucionFinal: 'Volverán a coincidir a las 8:00 a.m. (60 minutos después).'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Un carpintero tiene dos listones de madera de 48 cm y 72 cm y desea cortarlos en trozos iguales de la mayor longitud posible sin que sobre madera. ¿Cuánto debe medir cada trozo y cuántos trozos obtendrá en total?',
          pistaDUA: 'Calcula el M.C.D.(48, 72) para hallar la medida máxima de cada trozo.',
          pasosExplicativos: ['48 = 2⁴ × 3 y 72 = 2³ × 3².', 'M.C.D.(48, 72) = 2³ × 3 = 24 cm por trozo.', 'Número de trozos: (48 ÷ 24) + (72 ÷ 24) = 2 + 3 = 5 trozos.'],
          solucionFinal: 'Cada trozo debe medir 24 cm y se obtendrán 5 trozos en total.'
        }
      ]
    };
  }

  // =========================================================================
  // 6. POTENCIACIÓN, RADICACIÓN, LOGARITMACIÓN Y POLINOMIOS ARITMÉTICOS (5°, 6°, 7°)
  // =========================================================================
  if (
    (t.includes('potenciación') || t.includes('radicación') || t.includes('jerarquía de las operaciones') || t.includes('operaciones combinadas')) &&
    !t.includes('reales') &&
    !t.includes('racionales') &&
    !t.includes('fraccion')
  ) {
    return {
      exploracionMedellin: 'Modelar el crecimiento por duplicación en un torneo intercolegiado de Medellín (2¹, 2², 2³, 2⁴ equipos) y el cálculo del lado de un patio cuadrado conociendo su área.',
      concepto: `Estudio de "${tituloOriginal}". La potenciación abrevia un producto de factores iguales (aⁿ = b), la radicación halla la base conociendo la potencia y el exponente (ⁿ√b = a), y la logaritmación halla el exponente (log_a(b) = n).`,
      formulas: [
        'Potenciación: aⁿ = b  ⟺  Radicación: ⁿ√b = a  ⟺  Logaritmación: log_a(b) = n',
        'Propiedades: aᵐ × aⁿ = a^(m+n)  |  aᵐ ÷ aⁿ = a^(m-n)  |  (aᵐ)ⁿ = a^(m·n)',
        'Jerarquía: 1° Paréntesis ( ), 2° Potencias y Raíces, 3° Multiplicación y División, 4° Suma y Resta'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Resolver aplicando propiedades y jerarquía de operaciones: 2³ × 2² + √81 - (15 ÷ 3) × 4.',
        pasos: [
          'Paso 1: Aplicar producto de potencias de igual base: 2³ × 2² = 2^(3+2) = 2⁵ = 32.',
          'Paso 2: Calcular la raíz cuadrada y el paréntesis: √81 = 9  y  (15 ÷ 3) = 5.',
          'Paso 3: Sustituir y efectuar la multiplicación: 32 + 9 - 5 × 4 = 32 + 9 - 20.',
          'Paso 4: Operar sumas y restas de izquierda a derecha: 41 - 20 = 21.'
        ],
        solucionFinal: 'El valor exacto de la expresión es 21.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Calcula el valor de: 3⁴ + ³√27 - log₂(16).',
          pistaDUA: 'Recuerda que 3⁴ = 3×3×3×3, ³√27 busca qué número al cubo da 27, y log₂(16) busca a qué exponente se eleva 2 para dar 16.',
          pasosExplicativos: ['3⁴ = 81.', '³√27 = 3 (porque 3³ = 27).', 'log₂(16) = 4 (porque 2⁴ = 16).', 'Operar: 81 + 3 - 4 = 80.'],
          solucionFinal: '80'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Un salón cuadrado de la institución está embaldosado con 144 baldosas cuadradas iguales. ¿Cuántas baldosas hay en cada lado del salón?',
          pistaDUA: 'El lado de un cuadrado es la raíz cuadrada de su área.',
          pasosExplicativos: ['Área = Lado² = 144 baldosas.', 'Lado = √144 = 12 baldosas (porque 12 × 12 = 144).'],
          solucionFinal: 'Hay 12 baldosas en cada lado del salón.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Simplifica usando leyes de los exponentes y calcula el resultado numérico de: (5⁶ × 5³) ÷ (5⁷) + 4⁰ × 10.',
          pistaDUA: 'Suma los exponentes del numerador, réstale el exponente del denominador y recuerda que todo número elevado a la cero es 1.',
          pasosExplicativos: ['Numerador: 5^(6+3) = 5⁹.', 'Cociente: 5⁹ ÷ 5⁷ = 5^(9-7) = 5² = 25.', 'Potencia cero: 4⁰ = 1 → 1 × 10 = 10.', 'Suma final: 25 + 10 = 35.'],
          solucionFinal: '35'
        }
      ]
    };
  }

  // =========================================================================
  // 7. FRACCIONES, DECIMALES Y PORCENTAJES (3°, 4°, 5°, 6°, 7°)
  // =========================================================================
  if (
    (t.includes('fraccion') || t.includes('decimal') || t.includes('racionales') || t.includes('porcentaje')) &&
    !t.includes('algebraic') &&
    !t.includes('inecuac')
  ) {
    return {
      exploracionMedellin: 'Repartir porciones de alimentos en un emprendimiento gastronómico de Medellín, comparar pesos en kilogramos con decimales y calcular descuentos comerciales.',
      concepto: `Desarrollo de "${tituloOriginal}". Los números racionales pueden expresarse como fracción a/b (con b ≠ 0), como número decimal o como porcentaje (%). Para sumar o restar fracciones heterogéneas se halla el común denominador (m.c.m.), para multiplicar se opera numerador con numerador y denominador con denominador.`,
      formulas: [
        'Suma/Resta de fracciones: a/b ± c/d = (a·d ± b·c) / (b·d)',
        'Multiplicación: (a/b) × (c/d) = (a·c) / (b·d)  |  División: (a/b) ÷ (c/d) = (a·d) / (b·c)',
        'Operador y Porcentaje: (a/b) de N = (N × a)/b  |  k% de N = (k / 100) × N'
      ],
      ejemploPasoAPaso: {
        enunciado: 'De un tanque de reserva de 600 litros de agua en el colegio, en la mañana se consumen 2/5 de su capacidad y en la tarde 1/4 de la capacidad total. ¿Qué fracción total se consumió y cuántos litros quedan en el tanque?',
        pasos: [
          'Paso 1: Sumar las fracciones consumidas: 2/5 + 1/4 = (2×4 + 5×1) / (5×4) = (8 + 5) / 20 = 13/20.',
          'Paso 2: Determinar la fracción restante: 20/20 - 13/20 = 7/20 del tanque.',
          'Paso 3: Calcular los litros que quedan aplicando la fracción como operador: (7/20) de 600 = (600 × 7) / 20 = 30 × 7 = 210 litros.'
        ],
        solucionFinal: 'Se consumieron 13/20 del tanque y quedan 210 litros de agua.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Resuelve la operación combinada de fracciones y simplifica: (3/4 + 5/6) × 2/5.',
          pistaDUA: 'Resuelve primero la suma dentro del paréntesis usando el m.c.m.(4, 6) = 12.',
          pasosExplicativos: [
            'Suma en paréntesis: 3/4 + 5/6 = 9/12 + 10/12 = 19/12.',
            'Multiplicar por 2/5: (19/12) × (2/5) = 38/60.',
            'Simplificar dividiendo entre 2: 19/30.'
          ],
          solucionFinal: '19/30'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Camila compra en el supermercado 2,75 kg de arroz a $4.000 el kilo y 1,5 kg de frijol a $8.000 el kilo. Si paga con un billete de $50.000, ¿cuánto dinero le devuelven?',
          pistaDUA: 'Multiplica cada cantidad decimal por su precio unitario y suma los subtotales.',
          pasosExplicativos: [
            'Costo del arroz: 2,75 × 4.000 = $11.000.',
            'Costo del frijol: 1,5 × 8.000 = $12.000.',
            'Gasto total: 11.000 + 12.000 = $23.000.',
            'Devuelta: 50.000 - 23.000 = $27.000.'
          ],
          solucionFinal: 'Le devuelven $27.000 COP.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Un computador portátil cuesta $1.600.000 COP. En una jornada de descuentos en Medellín tiene una rebaja del 15%. ¿Cuál es el valor del descuento y cuánto se paga finalmente?',
          pistaDUA: 'Calcula el 15% multiplicando por 15 y dividiendo entre 100.',
          pasosExplicativos: [
            'Descuento = (15 / 100) × 1.600.000 = 15 × 16.000 = $240.000 COP.',
            'Precio final = 1.600.000 - 240.000 = $1.360.000 COP.'
          ],
          solucionFinal: 'El descuento es de $240.000 COP y se paga finalmente $1.360.000 COP.'
        }
      ]
    };
  }

  // =========================================================================
  // 8. NÚMEROS ENTEROS (Z): VALOR ABSOLUTO, LEY DE SIGNOS, OPERACIONES (7°)
  // =========================================================================
  if (t.includes('enteros') || t.includes('valor absoluto') || t.includes('polinomios aritméticos con signos')) {
    return {
      exploracionMedellin: 'Analizar el balance contable (ingresos positivos y gastos/deudas negativos) de una tienda escolar en la Comuna 12 y las variaciones de temperatura en Santa Elena.',
      concepto: `Estudio de "${tituloOriginal}". El conjunto de los Números Enteros Z = {..., -3, -2, -1, 0, 1, 2, 3, ...} incluye los enteros negativos, el cero y los positivos. El valor absoluto |a| representa la distancia del número al origen 0 (siempre no negativa).`,
      formulas: [
        'Valor absoluto: |a| = a (si a ≥ 0) ; |-a| = a',
        'Suma en Z: Signos iguales se suman y conservan el signo; signos diferentes se restan y queda el signo del mayor valor absoluto',
        'Ley de signos (Multiplicación/División): (+)·(+) = + | (-)·(-) = + | (+)·(-) = - | (-)·(+) = -'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Resolver el polinomio aritmético en Z: -18 + (-4) × (-5) - [ 12 ÷ (-3) + |-7| ].',
        pasos: [
          'Paso 1: Resolver dentro del corchete la división y el valor absoluto: 12 ÷ (-3) = -4  y  |-7| = 7.',
          'Paso 2: Calcular el valor del corchete: [-4 + 7] = +3.',
          'Paso 3: Resolver la multiplicación aplicando ley de signos: (-4) × (-5) = +20.',
          'Paso 4: Operar la suma algebraica resultante: -18 + 20 - 3 = 2 - 3 = -1.'
        ],
        solucionFinal: 'El resultado del polinomio aritmético es -1.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Ordena de menor a mayor los siguientes números enteros: -12, 5, -3, 0, -19, 8 y calcula |-19| + |-3|.',
          pistaDUA: 'En los números negativos, es menor el que está más lejos del cero a la izquierda.',
          pasosExplicativos: ['Orden ascendente: -19 < -12 < -3 < 0 < 5 < 8.', 'Valores absolutos: |-19| + |-3| = 19 + 3 = 22.'],
          solucionFinal: 'Orden: -19, -12, -3, 0, 5, 8; y la suma de valores absolutos es 22.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Un comerciante del centro de Medellín inicia el día con una deuda de $120.000 (-120.000), realiza ventas por $350.000, paga a un proveedor $95.000 y cobra una factura de $40.000. ¿Cuál es su balance al final del día?',
          pistaDUA: 'Agrupa los valores positivos (ingresos) y réstales la suma de los valores negativos (deudas y pagos).',
          pasosExplicativos: [
            'Ingresos positivos: +350.000 + 40.000 = +390.000.',
            'Egresos negativos: -120.000 - 95.000 = -215.000.',
            'Balance neto: 390.000 - 215.000 = +$175.000 COP.'
          ],
          solucionFinal: 'Su balance final es positivo: +$175.000 COP.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Halla el valor numérico de la expresión: (-2)⁴ + (-3)³ - (-5)² ÷ 5.',
          pistaDUA: 'Cuidado con los signos en las potencias: base negativa con exponente par da positivo, y con exponente impar da negativo.',
          pasosExplicativos: [
            '(-2)⁴ = +16 (exponente par).',
            '(-3)³ = -27 (exponente impar).',
            '(-5)² = +25 → 25 ÷ 5 = 5.',
            'Operar: 16 + (-27) - 5 = 16 - 32 = -16.'
          ],
          solucionFinal: '-16'
        }
      ]
    };
  }

  // =========================================================================
  // 9. RAZONES, PROPORCIONES Y REGLA DE TRES DIRECTA E INVERSA (5°, 6°, 7°)
  // =========================================================================
  if (t.includes('proporcion') || t.includes('razones') || t.includes('regla de tres') || t.includes('escalas')) {
    return {
      exploracionMedellin: 'Analizar la relación entre la cantidad de viajes en la tarjeta Cívica del Metro y el costo total (proporcionalidad directa), y el tiempo que tardan varias cuadrillas en pintar el colegio (proporcionalidad inversa).',
      concepto: `Estudio de "${tituloOriginal}". Dos magnitudes son directamente proporcionales si su cociente es constante (y/x = k) y son inversamente proporcionales si su producto es constante (x · y = k). En toda proporción a/b = c/d se cumple que el producto de extremos es igual al producto de medios (a·d = b·c).`,
      formulas: [
        'Propiedad Fundamental de las Proporciones: a / b = c / d  ⟺  a · d = b · c',
        'Proporcionalidad Directa: y / x = k  ⇒  x = (b · c) / a',
        'Proporcionalidad Inversa: x · y = k  ⇒  x = (a · b) / c'
      ],
      ejemploPasoAPaso: {
        enunciado: '6 obreros tardan 10 días en construir un muro escolar en Medellín. Si se contratan 4 obreros más (10 obreros en total) trabajando al mismo ritmo, ¿en cuántos días terminarán el muro?',
        pasos: [
          'Paso 1: Identificar el tipo de relación: a MÁS obreros, MENOS días tardarán → Proporcionalidad Inversa.',
          'Paso 2: El producto Obreros × Días es constante: 6 × 10 = 10 × x.',
          'Paso 3: Despejar x: x = (6 × 10) / 10 = 60 / 10 = 6 días.'
        ],
        solucionFinal: 'Los 10 obreros terminarán el muro en 6 días.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Halla el término desconocido x en la proporción: 12 / 18 = x / 45.',
          pistaDUA: 'Aplica el producto cruzado: 18 · x = 12 · 45.',
          pasosExplicativos: ['Multiplicar extremos: 12 × 45 = 540.', 'Dividir entre el medio conocido: x = 540 ÷ 18 = 30.'],
          solucionFinal: 'x = 30'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Un bus intermunicipal que viaja de Medellín a Rionegro recorre 36 kilómetros con 3 galones de combustible. ¿Cuántos galones necesitará para recorrer 120 kilómetros?',
          pistaDUA: 'Es una regla de tres directa porque a mayor distancia se requiere más combustible.',
          pasosExplicativos: ['Plantear proporción directa: 36 km / 3 gal = 120 km / x gal.', 'Despejar x: x = (120 × 3) / 36 = 360 / 36 = 10 galones.'],
          solucionFinal: 'Necesitará 10 galones de combustible.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'En un mapa turístico del Valle de Aburrá a escala 1 : 50.000, la distancia en línea recta entre dos parques es de 6 cm. ¿Cuál es la distancia real en kilómetros?',
          pistaDUA: 'Multiplica los 6 cm por 50.000 y luego convierte de centímetros a kilómetros (1 km = 100.000 cm).',
          pasosExplicativos: ['Distancia real en cm: 6 × 50.000 = 300.000 cm.', 'Convertir a metros (÷ 100): 3.000 m.', 'Convertir a kilómetros (÷ 1.000): 3 km.'],
          solucionFinal: 'La distancia real es de 3 kilómetros.'
        }
      ]
    };
  }

  // =========================================================================
  // 10. ÁLGEBRA DE OCTAVO: POLINOMIOS, PRODUCTOS NOTABLES, RUFFINI (8°)
  // =========================================================================
  if (
    t.includes('expresiones algebraicas') ||
    t.includes('términos semejantes') ||
    t.includes('adición y sustracción de polinomios') ||
    t.includes('multiplicación de polinomios')
  ) {
    return {
      exploracionMedellin: 'Expresar algebraicamente el perímetro y el área de las canchas y zonas verdes de la IE Rafael Uribe Uribe en función de una longitud variable x.',
      concepto: `Fundamentos de "${tituloOriginal}". Dos o más términos son semejantes si poseen exactamente la misma parte literal con los mismos exponentes. Para sumar o restar polinomios se reducen términos semejantes; para multiplicar se aplica la propiedad distributiva y la ley de exponentes (xᵐ · xⁿ = x^(m+n)).`,
      formulas: [
        'Reducción de términos semejantes: axⁿ + bxⁿ = (a + b)xⁿ',
        'Multiplicación de monomios: (axᵐ) · (bxⁿ) = (a · b)x^(m+n)',
        'Propiedad distributiva: A · (B + C) = A·B + A·C'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Dados los polinomios P(x) = 4x² - 3x + 7 y Q(x) = 2x² + 5x - 4, calcular: 1) P(x) - Q(x) y 2) el valor numérico del resultado cuando x = 2.',
        pasos: [
          'Paso 1: Plantear la resta cambiando los signos del sustraendo Q(x): (4x² - 3x + 7) - (2x² + 5x - 4) = 4x² - 3x + 7 - 2x² - 5x + 4.',
          'Paso 2: Agrupar y reducir términos semejantes: (4 - 2)x² + (-3 - 5)x + (7 + 4) = 2x² - 8x + 11.',
          'Paso 3: Evaluar para x = 2: 2(2)² - 8(2) + 11 = 2(4) - 16 + 11 = 8 - 16 + 11 = 3.'
        ],
        solucionFinal: 'P(x) - Q(x) = 2x² - 8x + 11, y su valor numérico en x = 2 es 3.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Reduce los términos semejantes del polinomio: 7a²b - 5ab² + 3a²b + 9ab² - 4a²b.',
          pistaDUA: 'Separa en dos grupos: los que tienen a²b y los que tienen ab².',
          pasosExplicativos: ['Grupo a²b: (7 + 3 - 4)a²b = 6a²b.', 'Grupo ab²: (-5 + 9)ab² = +4ab².', 'Resultado: 6a²b + 4ab².'],
          solucionFinal: '6a²b + 4ab²'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Un solar rectangular en el barrio La América tiene de largo (3x + 4) metros y de ancho (2x - 1) metros. Halla el polinomio que representa su área.',
          pistaDUA: 'Multiplica (3x + 4)(2x - 1) aplicando la propiedad distributiva término a término.',
          pasosExplicativos: ['Multiplicar: 3x(2x - 1) + 4(2x - 1) = 6x² - 3x + 8x - 4.', 'Reducir términos centrales: 6x² + 5x - 4.'],
          solucionFinal: 'Área = (6x² + 5x - 4) m².'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'El perímetro total de un triángulo es (12x² + 5x + 18). Si dos de sus lados miden (4x² - 2x + 6) y (5x² + 4x + 3), ¿cuál es la expresión algebraica del tercer lado?',
          pistaDUA: 'Suma los dos lados conocidos y réstalos del perímetro total.',
          pasosExplicativos: [
            'Suma de los dos lados: (4x² + 5x²) + (-2x + 4x) + (6 + 3) = 9x² + 2x + 9.',
            'Restar del perímetro: (12x² + 5x + 18) - (9x² + 2x + 9) = 3x² + 3x + 9.'
          ],
          solucionFinal: 'El tercer lado mide 3x² + 3x + 9.'
        }
      ]
    };
  }

  if (t.includes('productos notables')) {
    return {
      exploracionMedellin: 'Calcular el área de una plazoleta cuadrada ampliada en el Parque Biblioteca San Javier dividiéndola en dos cuadrados y dos rectángulos laterales para visualizar (a + b)².',
      concepto: `Estudio de "${tituloOriginal}". Los productos notables son multiplicaciones algebraicas cuyo desarrollo se obtiene por reglas fijas sin necesidad de efectuar toda la multiplicación término a término.`,
      formulas: [
        'Cuadrado de un binomio: (a ± b)² = a² ± 2ab + b²',
        'Suma por diferencia (conjugados): (a + b)(a - b) = a² - b²',
        'Cubo de un binomio: (a ± b)³ = a³ ± 3a²b + 3ab² ± b³',
        'Producto de la forma (x + a)(x + b) = x² + (a + b)x + a·b'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Desarrollar la expresión combinada y simplificar: (3x + 4)² - (3x + 2)(3x - 2).',
        pasos: [
          'Paso 1: Desarrollar el binomio al cuadrado: (3x + 4)² = (3x)² + 2(3x)(4) + 4² = 9x² + 24x + 16.',
          'Paso 2: Desarrollar la suma por diferencia: (3x + 2)(3x - 2) = (3x)² - 2² = 9x² - 4.',
          'Paso 3: Restar ambos resultados cuidando el signo: (9x² + 24x + 16) - (9x² - 4) = 9x² + 24x + 16 - 9x² + 4.',
          'Paso 4: Reducir términos semejantes: 24x + 20.'
        ],
        solucionFinal: 'La expresión simplificada es 24x + 20.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Desarrolla el cuadrado del binomio: (5m - 3n)².',
          pistaDUA: 'Aplica (a - b)² = a² - 2ab + b² con a = 5m y b = 3n.',
          pasosExplicativos: ['Primer término al cuadrado: (5m)² = 25m².', 'Doble producto: -2(5m)(3n) = -30mn.', 'Segundo al cuadrado: (3n)² = 9n².', 'Total: 25m² - 30mn + 9n².'],
          solucionFinal: '25m² - 30mn + 9n²'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Halla el área de un terreno rectangular cuyas dimensiones son (4x + 7) metros y (4x - 7) metros. Si x = 5 m, ¿cuántos m² tiene el terreno?',
          pistaDUA: 'Es una suma por diferencia: (a + b)(a - b) = a² - b².',
          pasosExplicativos: ['Área algebraica: (4x)² - 7² = 16x² - 49.', 'Sustituir x = 5: 16(5)² - 49 = 16(25) - 49 = 400 - 49 = 351 m².'],
          solucionFinal: 'Polinomio: 16x² - 49; Área real: 351 m².'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Desarrolla el cubo del binomio: (2x + 3)³.',
          pistaDUA: 'Usa la fórmula a³ + 3a²b + 3ab² + b³ con a = 2x y b = 3.',
          pasosExplicativos: [
            '(2x)³ = 8x³.',
            '3(2x)²(3) = 9(4x²) = 36x².',
            '3(2x)(3)² = 6x(9) = 54x.',
            '3³ = 27.'
          ],
          solucionFinal: '8x³ + 36x² + 54x + 27'
        }
      ]
    };
  }

  if (t.includes('división de polinomios') || t.includes('ruffini') || t.includes('teorema del residuo')) {
    return {
      exploracionMedellin: 'Conociendo el área polinómica de un salón rectangular en Medellín y la medida de su base (x - a), hallar algebraicamente la medida de su altura mediante división sintética.',
      concepto: `Estudio de "${tituloOriginal}". La Regla de Ruffini (división sintética) permite dividir rápidamente cualquier polinomio P(x) entre un binomio lineal de la forma (x - c). El Teorema del Residuo establece que el residuo de dividir P(x) entre (x - c) es exactamente igual al valor numérico P(c).`,
      formulas: [
        'Algoritmo de la división: P(x) = d(x) · Q(x) + R(x)',
        'Teorema del Residuo: Si P(x) se divide entre (x - c), entonces Residuo R = P(c)',
        'Teorema del Factor: (x - c) es factor de P(x)  ⟺  P(c) = 0'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Dividir el polinomio P(x) = x³ - 4x² + 5x - 2 entre (x - 2) y verificar el residuo con el Teorema del Residuo.',
        pasos: [
          'Paso 1: Escribir los coeficientes del dividendo: [1, -4, 5, -2] y el valor de c = 2.',
          'Paso 2: Bajar el 1; multiplicar 1×2=2 y sumar: -4+2 = -2.',
          'Paso 3: Multiplicar -2×2=-4 y sumar: 5+(-4) = 1; multiplicar 1×2=2 y sumar: -2+2 = 0.',
          'Paso 4: Coeficientes del cociente: [1, -2, 1] → Q(x) = x² - 2x + 1 y Residuo R = 0. Verificación: P(2) = 2³ - 4(2²) + 5(2) - 2 = 8 - 16 + 10 - 2 = 0.'
        ],
        solucionFinal: 'Cociente Q(x) = x² - 2x + 1 y Residuo R = 0.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Sin hacer la división larga, usa el Teorema del Residuo para hallar el residuo de dividir P(x) = 2x³ - 5x² + 3x - 4 entre (x - 3).',
          pistaDUA: 'Sustituye x = 3 en el polinomio P(x).',
          pasosExplicativos: ['Evaluar P(3) = 2(3)³ - 5(3)² + 3(3) - 4.', 'P(3) = 2(27) - 5(9) + 9 - 4 = 54 - 45 + 9 - 4 = 14.'],
          solucionFinal: 'El residuo es R = 14.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Divide por Regla de Ruffini: (x³ + 2x² - 11x - 12) ÷ (x + 4).',
          pistaDUA: 'Como el divisor es (x + 4), toma c = -4 para la tabla de Ruffini.',
          pasosExplicativos: [
            'Coeficientes: [1, 2, -11, -12] con c = -4.',
            'Bajar 1 → 1(-4) = -4 → 2 + (-4) = -2.',
            '(-2)(-4) = 8 → -11 + 8 = -3.',
            '(-3)(-4) = 12 → -12 + 12 = 0.',
            'Cociente: x² - 2x - 3, Residuo: 0.'
          ],
          solucionFinal: 'Cociente: x² - 2x - 3 (Residuo 0).'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Determina el valor de la constante k para que el polinomio P(x) = x³ - 3x² + kx - 6 sea exactamente divisible entre (x - 2).',
          pistaDUA: 'Por el Teorema del Factor, si es divisible entre (x - 2), entonces P(2) debe ser igual a 0.',
          pasosExplicativos: [
            'Plantear P(2) = 0: (2)³ - 3(2)² + k(2) - 6 = 0.',
            'Calcular potencias: 8 - 12 + 2k - 6 = 0 → 2k - 10 = 0.',
            'Despejar k: 2k = 10 → k = 5.'
          ],
          solucionFinal: 'k = 5'
        }
      ]
    };
  }

  // =========================================================================
  // 11. FACTORIZACIÓN (CASOS I AL VI) Y FRACCIONES ALGEBRAICAS (8°)
  // =========================================================================
  if (t.includes('factorización') || t.includes('factor común') || t.includes('diferencia de cuadrados') || t.includes('trinomio') || t.includes('cubos perfectos')) {
    return {
      exploracionMedellin: 'Determinar las dimensiones (largo y ancho) de paneles solares rectangulares instalados en la IE Rafael Uribe Uribe a partir del polinomio que modela su superficie total.',
      concepto: `Estudio de "${tituloOriginal}". Factorizar un polinomio consiste en expresarlo como el producto indicado de dos o más factores primos irreducibles, siendo el proceso inverso a la multiplicación algebraica y a los productos notables.`,
      formulas: [
        'Factor Común: ab + ac = a(b + c)',
        'Diferencia de Cuadrados: a² - b² = (a + b)(a - b)',
        'Trinomio Cuadrado Perfecto (TCP): a² ± 2ab + b² = (a ± b)²',
        'Trinomio x² + bx + c = (x + p)(x + q) con p + q = b y p · q = c',
        'Suma/Diferencia de Cubos: a³ ± b³ = (a ± b)(a² ∓ ab + b²)'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Factorizar completamente el polinomio de tercer grado: P(x) = 3x³ - 3x² - 18x.',
        pasos: [
          'Paso 1: Extraer primero el Factor Común Monomio (M.C.D. de coeficientes = 3, menor potencia = x): 3x(x² - x - 6).',
          'Paso 2: Factorizar el trinomio x² - x - 6 buscando dos números que multiplicados den -6 y sumados den -1: son -3 y +2.',
          'Paso 3: Escribir la factorización completa como producto de tres factores: 3x(x - 3)(x + 2).'
        ],
        solucionFinal: '3x(x - 3)(x + 2)'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Factoriza la siguiente diferencia de cuadrados perfectos: 16x⁴ - 81y².',
          pistaDUA: 'Extrae la raíz cuadrada de cada término: √(16x⁴) = 4x² y √(81y²) = 9y.',
          pasosExplicativos: ['Raíz del primero: 4x².', 'Raíz del segundo: 9y.', 'Escribir suma por diferencia: (4x² + 9y)(4x² - 9y).'],
          solucionFinal: '(4x² + 9y)(4x² - 9y)'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'El área de un mural rectangular en la Comuna 12 está dada por el trinomio x² - 11x + 28. Factorízalo para hallar sus dimensiones y calcula el perímetro si x = 10 m.',
          pistaDUA: 'Busca dos números que multiplicados den +28 y sumados den -11.',
          pasosExplicativos: [
            'Los números son -7 y -4 porque (-7)(-4) = 28 y -7 - 4 = -11.',
            'Dimensiones factorizadas: (x - 7) y (x - 4).',
            'Para x = 10: lados de (10 - 7) = 3 m y (10 - 4) = 6 m. Perímetro = 2(3 + 6) = 18 m.'
          ],
          solucionFinal: 'Factorización: (x - 7)(x - 4); Perímetro para x = 10 m: 18 metros.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Factoriza el trinomio de la forma ax² + bx + c:  6x² + 7x - 3.',
          pistaDUA: 'Multiplica y divide por 6 o usa el método de aspa simple.',
          pasosExplicativos: [
            'Multiplicar y dividir por 6: [(6x)² + 7(6x) - 18] / 6.',
            'Dos números que multiplicados den -18 y sumados +7: son +9 y -2.',
            'Escribir: (6x + 9)(6x - 2) / 6 = [3(2x + 3) · 2(3x - 1)] / 6 = (2x + 3)(3x - 1).'
          ],
          solucionFinal: '(2x + 3)(3x - 1)'
        }
      ]
    };
  }

  if (t.includes('fracciones algebraicas')) {
    return {
      exploracionMedellin: 'Simplificar razones entre áreas y volúmenes de estructuras arquitectónicas del Parque Explora expresadas mediante polinomios.',
      concepto: `Desarrollo de "${tituloOriginal}". Una fracción algebraica P(x)/Q(x) está definida para todo x donde Q(x) ≠ 0. Para simplificarla, multiplicarla o sumarla se factorizan primero los numeradores y denominadores y se cancelan únicamente factores comunes completos.`,
      formulas: [
        'Simplificación: [A(x) · C(x)] / [B(x) · C(x)] = A(x) / B(x), con C(x) ≠ 0',
        'Multiplicación: (A/B) · (C/D) = (A·C) / (B·D)  |  División: (A/B) ÷ (C/D) = (A·D) / (B·C)',
        'Suma heterogénea: Hallar el m.c.m. de los denominadores factorizados'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Simplificar a su mínima expresión la fracción algebraica: (x² - 9) / (x² + 5x + 6) e indicar sus restricciones de dominio.',
        pasos: [
          'Paso 1: Factorizar el numerador (diferencia de cuadrados): x² - 9 = (x - 3)(x + 3).',
          'Paso 2: Factorizar el denominador (trinomio x²+bx+c): x² + 5x + 6 = (x + 3)(x + 2).',
          'Paso 3: Identificar restricciones del denominador: x ≠ -3 y x ≠ -2.',
          'Paso 4: Cancelar el factor común (x + 3): queda (x - 3) / (x + 2).'
        ],
        solucionFinal: '(x - 3) / (x + 2), con x ≠ -3 y x ≠ -2.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Simplifica la expresión racional: (2x² - 8x) / (x² - 16).',
          pistaDUA: 'Saca factor común 2x en el numerador y diferencia de cuadrados en el denominador.',
          pasosExplicativos: [
            'Numerador: 2x(x - 4).',
            'Denominador: (x - 4)(x + 4).',
            'Cancelar (x - 4): resulta 2x / (x + 4).'
          ],
          solucionFinal: '2x / (x + 4), con x ≠ ±4.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Efectúa la suma de fracciones algebraicas: 3 / (x - 2) + 5 / (x + 2).',
          pistaDUA: 'El mínimo común denominador es (x - 2)(x + 2) = x² - 4.',
          pasosExplicativos: [
            'Numerador común: 3(x + 2) + 5(x - 2) = 3x + 6 + 5x - 10 = 8x - 4.',
            'Fracción resultante: (8x - 4) / (x² - 4).'
          ],
          solucionFinal: '(8x - 4) / (x² - 4)'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Efectúa la división y simplifica: [ (x² - 25) / (x + 1) ] ÷ [ (x - 5) / (x² - 1) ].',
          pistaDUA: 'Invierte la segunda fracción para convertir en multiplicación y factoriza cada término.',
          pasosExplicativos: [
            'Invertir y factorizar: [(x - 5)(x + 5) / (x + 1)] × [(x - 1)(x + 1) / (x - 5)].',
            'Cancelar los factores comunes (x - 5) y (x + 1).',
            'Queda: (x + 5)(x - 1) = x² + 4x - 5.'
          ],
          solucionFinal: '(x + 5)(x - 1) = x² + 4x - 5'
        }
      ]
    };
  }

  // =========================================================================
  // 12. ECUACIONES LINEALES DE PRIMER GRADO (3° a 8°)
  // =========================================================================
  if (
    t.includes('ecuaciones lineales') ||
    t.includes('ecuaciones aditivas') ||
    t.includes('signo igual (=) como equilibrio') ||
    t.includes('números faltantes') ||
    t.includes('lenguaje algebraico')
  ) {
    return {
      exploracionMedellin: 'Plantear una ecuación de equilibrio para descubrir el precio de un cuaderno escolar comprado en una papelería de La América conociendo el pago total y el vuelto.',
      concepto: `Estudio de "${tituloOriginal}". Una ecuación lineal es una igualdad algebraica de primer grado que se satisface para un único valor de la incógnita. Por la propiedad uniforme de la igualdad, lo que se suma, resta, multiplica o divide en un miembro debe aplicarse igual en el otro.`,
      formulas: [
        'Forma general de primer grado: ax + b = c  ⇒  x = (c - b) / a  (con a ≠ 0)',
        'Traducción algebraica: El doble de un número = 2x | El consecutivo = x + 1 | La mitad = x/2'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Resolver la ecuación lineal con paréntesis: 5(2x - 3) + 4 = 3(x + 6) - 1.',
        pasos: [
          'Paso 1: Aplicar la propiedad distributiva para eliminar paréntesis: 10x - 15 + 4 = 3x + 18 - 1.',
          'Paso 2: Reducir términos constantes en cada lado: 10x - 11 = 3x + 17.',
          'Paso 3: Transponer términos con x a la izquierda y constantes a la derecha: 10x - 3x = 17 + 11.',
          'Paso 4: Simplificar y despejar: 7x = 28 ⇒ x = 28 / 7 = 4.'
        ],
        solucionFinal: 'La solución única de la ecuación es x = 4.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Resuelve la ecuación lineal y comprueba el resultado: 4x - 9 = 27.',
          pistaDUA: 'Suma 9 en ambos lados de la igualdad y luego divide entre 4.',
          pasosExplicativos: ['4x = 27 + 9 = 36.', 'x = 36 / 4 = 9.', 'Comprobación: 4(9) - 9 = 36 - 9 = 27.'],
          solucionFinal: 'x = 9'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'La suma de las edades de dos hermanos en Medellín es 38 años. Si el hermano mayor tiene 6 años más que el menor, ¿qué edad tiene cada uno?',
          pistaDUA: 'Llama x a la edad del menor y (x + 6) a la edad del mayor.',
          pasosExplicativos: [
            'Plantear ecuación: x + (x + 6) = 38.',
            'Reducir: 2x + 6 = 38 ⇒ 2x = 32 ⇒ x = 16 años (hermano menor).',
            'Hermano mayor: 16 + 6 = 22 años.'
          ],
          solucionFinal: 'El menor tiene 16 años y el mayor tiene 22 años.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Resuelve la ecuación lineal con coeficientes fraccionarios: (x / 2) + (x / 3) = 15.',
          pistaDUA: 'Multiplica toda la ecuación por el mínimo común múltiplo de los denominadores: m.c.m.(2, 3) = 6.',
          pasosExplicativos: [
            'Multiplicar por 6: 6(x/2) + 6(x/3) = 6(15).',
            'Simplificar: 3x + 2x = 90 ⇒ 5x = 90.',
            'Despejar: x = 90 / 5 = 18.'
          ],
          solucionFinal: 'x = 18'
        }
      ]
    };
  }

  // =========================================================================
  // 13. INECUACIONES, INTERVALOS, VALOR ABSOLUTO Y REALES (8°, 9°, 11°)
  // =========================================================================
  if (
    t.includes('inecuac') ||
    t.includes('intervalos') ||
    t.includes('axiomas de cuerpo') ||
    (t.includes('números reales') && !t.includes('radicación'))
  ) {
    const esOnce = grado === '11°';
    return {
      exploracionMedellin: 'Determinar el rango permitido de velocidad en las vías escolares de Medellín y el intervalo de unidades que debe vender una microempresa paisa para obtener ganancias positivas.',
      concepto: `Estudio de "${tituloOriginal}". Una inecuación es una desigualdad algebraica cuyo conjunto solución es un intervalo de números reales. Si se multiplica o divide ambos miembros de una desigualdad por un número negativo, el sentido del signo de desigualdad se invierte.`,
      formulas: [
        'Lineal: ax + b ≥ c  (Si a < 0, al dividir entre a se invierte el sentido de la desigualdad)',
        'Valor Absoluto: |x| ≤ a ⟺ -a ≤ x ≤ a  |  |x| ≥ a ⟺ x ≤ -a  ∪  x ≥ a',
        'Inecuación Cuadrática/Racional: Factorizar, hallar puntos críticos y evaluar tabla de signos'
      ],
      ejemploPasoAPaso: esOnce
        ? {
            enunciado: 'Resolver la inecuación con valor absoluto |2x - 5| ≤ 7 y expresar su solución como intervalo.',
            pasos: [
              'Paso 1: Aplicar la propiedad |u| ≤ a ⟺ -a ≤ u ≤ a:  -7 ≤ 2x - 5 ≤ 7.',
              'Paso 2: Sumar 5 en los tres miembros de la desigualdad: -7 + 5 ≤ 2x ≤ 7 + 5  ⇒  -2 ≤ 2x ≤ 12.',
              'Paso 3: Dividir todo entre 2: -1 ≤ x ≤ 6.',
              'Paso 4: Escribir en notación de intervalo cerrado: x ∈ [-1, 6].'
            ],
            solucionFinal: 'Conjunto solución: Intervalo cerrado [-1, 6].'
          }
        : {
            enunciado: 'Resolver la inecuación lineal: 4 - 3x > 16 y representar su conjunto solución como intervalo.',
            pasos: [
              'Paso 1: Restar 4 en ambos lados: -3x > 16 - 4  ⇒  -3x > 12.',
              'Paso 2: Dividir entre -3 invirtiendo el sentido de la desigualdad: x < 12 / (-3)  ⇒  x < -4.',
              'Paso 3: Expresar en notación de intervalo: (-∞, -4).'
            ],
            solucionFinal: 'Conjunto solución: x ∈ (-∞, -4).'
          },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Resuelve la inecuación lineal 5x - 8 ≥ 2x + 7 y escribe el intervalo solución.',
          pistaDUA: 'Agrupa las x a la izquierda y los números a la derecha.',
          pasosExplicativos: ['5x - 2x ≥ 7 + 8  ⇒  3x ≥ 15.', 'x ≥ 15 / 3  ⇒  x ≥ 5.', 'Intervalo: [5, +∞).'],
          solucionFinal: 'x ∈ [5, +∞)'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: esOnce
            ? 'Resuelve la inecuación cuadrática x² - 4x - 12 < 0 utilizando factorización y puntos críticos.'
            : 'Un ascensor de carga en un edificio de Medellín soporta máximo 500 kg. Si el operario pesa 80 kg y lleva cajas de 35 kg cada una, ¿cuántas cajas como máximo puede subir en un viaje?',
          pistaDUA: esOnce ? 'Factoriza (x - 6)(x + 2) < 0 y analiza el signo entre -2 y 6.' : 'Plantea la inecuación 80 + 35x ≤ 500.',
          pasosExplicativos: esOnce
            ? ['Factorizar: (x - 6)(x + 2) < 0.', 'Puntos críticos: x = -2 y x = 6.', 'El producto es negativo en el intervalo abierto (-2, 6).']
            : ['80 + 35x ≤ 500  ⇒  35x ≤ 420.', 'x ≤ 420 / 35  ⇒  x ≤ 12 cajas.'],
          solucionFinal: esOnce ? 'x ∈ (-2, 6)' : 'Puede subir como máximo 12 cajas.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: esOnce
            ? 'Halla el conjunto solución de la inecuación racional: (x - 4) / (x + 2) ≥ 0.'
            : 'Resuelve la desigualdad doble: -5 ≤ 3x + 4 < 19.',
          pistaDUA: esOnce
            ? 'Recuerda que el denominador (x + 2) nunca puede ser cero, por lo que -2 siempre va abierto.'
            : 'Resta 4 en las tres partes de la desigualdad y luego divide entre 3.',
          pasosExplicativos: esOnce
            ? ['Puntos críticos: numerador x = 4 (cerrado), denominador x = -2 (abierto).', 'Es positivo para x < -2 y para x ≥ 4.', 'Solución: (-∞, -2) ∪ [4, +∞).']
            : ['Restar 4: -9 ≤ 3x < 15.', 'Dividir entre 3: -3 ≤ x < 5  ⇒  Intervalo [-3, 5).'],
          solucionFinal: esOnce ? '(-∞, -2) ∪ [4, +∞)' : 'x ∈ [-3, 5)'
        }
      ]
    };
  }

  // =========================================================================
  // 14. RADICACIÓN EN REALES, RACIONALIZACIÓN Y NOTACIÓN CIENTÍFICA (9°)
  // =========================================================================
  if (t.includes('radicación en') || t.includes('racionalización') || t.includes('notación científica')) {
    return {
      exploracionMedellin: 'Expresar distancias astronómicas en el Planetario de Medellín con notación científica y simplificar medidas irracionales exactas con radicales.',
      concepto: `Estudio de "${tituloOriginal}". Los radicales se pueden escribir como potencias de exponente fraccionario: ⁿ√(aᵐ) = a^(m/n). Racionalizar una fracción consiste en eliminar los radicales del denominador multiplicando numerador y denominador por el factor racionalizante o el conjugado.`,
      formulas: [
        'Exponente fraccionario: ⁿ√(aᵐ) = a^(m/n)  |  √(a · b) = √a · √b',
        'Racionalización simple: k / √a = (k · √a) / a',
        'Racionalización con conjugado: k / (√a ± √b) = k(√a ∓ √b) / (a - b)'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Simplificar por extracción de factores y reducir los radicales semejantes: √75 + 2√12 - √27.',
        pasos: [
          'Paso 1: Descomponer cada radicando buscando cuadrados perfectos: 75 = 25×3 ; 12 = 4×3 ; 27 = 9×3.',
          'Paso 2: Extraer raíces cuadradas exactas: √(25×3) = 5√3 ; 2√(4×3) = 2(2√3) = 4√3 ; √(9×3) = 3√3.',
          'Paso 3: Sumar y restar los radicales semejantes: (5 + 4 - 3)√3 = 6√3.'
        ],
        solucionFinal: '6√3'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Racionaliza el denominador y simplifica la fracción: 12 / √6.',
          pistaDUA: 'Multiplica numerador y denominador por √6.',
          pasosExplicativos: ['(12 · √6) / (√6 · √6) = 12√6 / 6.', 'Simplificar 12/6 = 2 → 2√6.'],
          solucionFinal: '2√6'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Racionaliza utilizando el binomio conjugado: 10 / (√7 - √2).',
          pistaDUA: 'Multiplica arriba y abajo por el conjugado (√7 + √2).',
          pasosExplicativos: [
            'Numerador: 10(√7 + √2).',
            'Denominador (diferencia de cuadrados): (√7)² - (√2)² = 7 - 2 = 5.',
            'Simplificar: 10(√7 + √2) / 5 = 2(√7 + √2).'
          ],
          solucionFinal: '2(√7 + √2)'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Expresa en notación científica el producto: (4 × 10⁵) × (3,5 × 10⁴).',
          pistaDUA: 'Multiplica las mantisas (4 × 3,5), suma los exponentes de base 10 y ajusta para que la mantisa quede entre 1 y 10.',
          pasosExplicativos: [
            'Multiplicar coeficientes: 4 × 3,5 = 14.',
            'Sumar exponentes de 10: 10^(5+4) = 10⁹ → 14 × 10⁹.',
            'Normalizar: 1,4 × 10¹⁰.'
          ],
          solucionFinal: '1,4 × 10¹⁰'
        }
      ]
    };
  }

  // =========================================================================
  // 15. SISTEMAS DE ECUACIONES LINEALES 2x2 Y 3x3 (9°)
  // =========================================================================
  if (t.includes('sistemas de ecuaciones') || t.includes('sistemas 2x2') || t.includes('sistemas lineales')) {
    return {
      exploracionMedellin: 'Encontrar el precio de una entrada de adulto y una de estudiante en el Parque Norte de Medellín planteando un sistema de 2 ecuaciones lineales con 2 incógnitas.',
      concepto: `Estudio de "${tituloOriginal}". Un sistema lineal 2x2 busca los valores (x, y) que satisfacen simultáneamente dos ecuaciones lineales. Geométricamente representa el punto de intersección de dos rectas y puede resolverse por Reducción (Eliminación), Sustitución, Igualación o Regla de Cramer.`,
      formulas: [
        'Sistema 2x2: { a₁x + b₁y = c₁ ; a₂x + b₂y = c₂ }',
        'Determinante del sistema (Cramer): Δ = a₁b₂ - a₂b₁  |  x = Δ_x / Δ  |  y = Δ_y / Δ',
        'Tipos de solución: Única (rectas secantes), Infinitas (rectas coincidentes), Sin solución (rectas paralelas)'
      ],
      ejemploPasoAPaso: {
        enunciado: 'En una cafetería de Medellín, 2 pasteles de pollo y 3 jugos cuestan $19.000, mientras que 4 pasteles y 1 jugo cuestan $23.000. ¿Cuánto cuesta cada pastel (x) y cada jugo (y)?',
        pasos: [
          'Paso 1: Plantear el sistema: (1) 2x + 3y = 19.000 ; (2) 4x + y = 23.000.',
          'Paso 2: Multiplicar la ecuación (1) por -2 para eliminar x: -4x - 6y = -38.000.',
          'Paso 3: Sumar con la ecuación (2): -5y = -15.000 ⇒ y = 3.000 COP (precio de cada jugo).',
          'Paso 4: Sustituir y = 3.000 en (2): 4x + 3.000 = 23.000 ⇒ 4x = 20.000 ⇒ x = 5.000 COP (precio de cada pastel).'
        ],
        solucionFinal: 'Cada pastel cuesta $5.000 COP y cada jugo cuesta $3.000 COP.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Resuelve el sistema 2x2 por reducción: { x + y = 14 ; x - y = 4 }.',
          pistaDUA: 'Suma directamente ambas ecuaciones miembro a miembro para cancelar la variable y.',
          pasosExplicativos: ['Sumar ecuaciones: 2x = 18 ⇒ x = 9.', 'Sustituir en la primera: 9 + y = 14 ⇒ y = 5.'],
          solucionFinal: 'x = 9, y = 5'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Resuelve el sistema por sustitución o Cramer: { 3x + 2y = 16 ; 5x - 3y = 14 }.',
          pistaDUA: 'Multiplica la primera por 3 y la segunda por 2 para eliminar y.',
          pasosExplicativos: [
            '3(3x + 2y) = 48  ⇒  9x + 6y = 48.',
            '2(5x - 3y) = 28  ⇒  10x - 6y = 28.',
            'Sumar: 19x = 76 ⇒ x = 4.',
            'Sustituir x = 4: 3(4) + 2y = 16 ⇒ 2y = 4 ⇒ y = 2.'
          ],
          solucionFinal: 'x = 4, y = 2'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'En un parqueadero del centro de Medellín hay 35 vehículos entre motos (2 llantas) y carros (4 llantas). Si en total se cuentan 110 llantas, ¿cuántos carros y cuántas motos hay?',
          pistaDUA: 'Plantea: m + c = 35 (vehículos) y 2m + 4c = 110 (llantas).',
          pasosExplicativos: [
            'Despejar m = 35 - c.',
            'Sustituir: 2(35 - c) + 4c = 110 ⇒ 70 - 2c + 4c = 110.',
            '2c = 40 ⇒ c = 20 carros.',
            'Motos: m = 35 - 20 = 15 motos.'
          ],
          solucionFinal: 'Hay 20 carros y 15 motos.'
        }
      ]
    };
  }

  // =========================================================================
  // 16. ECUACIÓN CUADRÁTICA, FUNCIÓN CUADRÁTICA Y NÚMEROS COMPLEJOS (9°)
  // =========================================================================
  if (t.includes('cuadrática') || t.includes('parábola') && grado === '9°' || t.includes('números complejos')) {
    return {
      exploracionMedellin: 'Modelar la altura de un balón lanzado en el estadio Atanasio Girardot mediante una parábola h(t) = -5t² + 20t y hallar su altura máxima y tiempo de vuelo.',
      concepto: `Estudio de "${tituloOriginal}". Toda ecuación cuadrática ax² + bx + c = 0 (con a ≠ 0) se resuelve por factorización o con la fórmula general cuadrática. La gráfica de f(x) = ax² + bx + c es una parábola cuyo vértice determina el valor máximo (si a < 0) o mínimo (si a > 0).`,
      formulas: [
        'Fórmula general cuadrática: x = [ -b ± √(b² - 4ac) ] / (2a)',
        'Discriminante: Δ = b² - 4ac (Δ > 0: 2 raíces reales; Δ = 0: 1 raíz doble; Δ < 0: 2 raíces complejas con i = √-1)',
        'Vértice de la parábola: x_v = -b / (2a)  ;  y_v = f(x_v)'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Dada la función cuadrática f(x) = x² - 6x + 5: 1) Hallar las coordenadas del vértice. 2) Encontrar los puntos de corte con el eje X (raíces).',
        pasos: [
          'Paso 1: Identificar coeficientes: a = 1, b = -6, c = 5.',
          'Paso 2: Calcular abscisa del vértice: x_v = -(-6) / [2(1)] = 6 / 2 = 3.',
          'Paso 3: Evaluar f(3) para hallar la ordenada del vértice: y_v = (3)² - 6(3) + 5 = 9 - 18 + 5 = -4 → Vértice V(3, -4).',
          'Paso 4: Hallar raíces igualando a cero: x² - 6x + 5 = 0 ⇒ (x - 5)(x - 1) = 0 ⇒ x₁ = 5 y x₂ = 1.'
        ],
        solucionFinal: 'Vértice en V(3, -4) y raíces en x₁ = 1 y x₂ = 5.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Resuelve la ecuación cuadrática x² - 7x + 10 = 0 y verifica la suma y producto de sus raíces.',
          pistaDUA: 'Factoriza buscando dos números que multiplicados den 10 y sumados den -7.',
          pasosExplicativos: ['(x - 5)(x - 2) = 0.', 'Raíces: x₁ = 5 y x₂ = 2.', 'Verificación: 5 + 2 = 7 y 5 × 2 = 10.'],
          solucionFinal: 'x₁ = 5 y x₂ = 2'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'La altura (en metros) de un proyectil de agua en el Parque de los Pies Descalzos está dada por h(t) = -4t² + 16t, donde t es el tiempo en segundos. ¿En qué segundo alcanza su altura máxima y cuál es dicha altura?',
          pistaDUA: 'Calcula el vértice de la parábola usando t_v = -b / (2a).',
          pasosExplicativos: [
            'Con a = -4 y b = 16: t_v = -16 / [2(-4)] = -16 / (-8) = 2 segundos.',
            'Altura máxima: h(2) = -4(2)² + 16(2) = -16 + 32 = 16 metros.'
          ],
          solucionFinal: 'Alcanza la altura máxima a los 2 segundos y es de 16 metros.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'Resuelve en el conjunto de los números complejos la ecuación: x² - 4x + 13 = 0.',
          pistaDUA: 'Aplica la fórmula cuadrática y recuerda que √(-36) = 6i.',
          pasosExplicativos: [
            'Discriminante: Δ = (-4)² - 4(1)(13) = 16 - 52 = -36.',
            'x = [ 4 ± √(-36) ] / 2 = (4 ± 6i) / 2 = 2 ± 3i.'
          ],
          solucionFinal: 'x₁ = 2 + 3i  y  x₂ = 2 - 3i'
        }
      ]
    };
  }

  // =========================================================================
  // 17. FUNCIÓN LINEAL, AFÍN, EXPONENCIAL Y LOGARÍTMICA (8°, 9°, 10°, 11°)
  // =========================================================================
  if (
    t.includes('función lineal') ||
    t.includes('función afín') ||
    t.includes('concepto formal de función') ||
    t.includes('la recta') ||
    t.includes('ecuación explícita de la recta') ||
    t.includes('exponenciales') ||
    t.includes('logarítmicas') ||
    t.includes('álgebra de funciones') ||
    t.includes('función inversa') ||
    t.includes('familias de funciones')
  ) {
    const esExp = t.includes('exponencial') || t.includes('logarítmica');
    return {
      exploracionMedellin: esExp
        ? 'Modelar el crecimiento poblacional del Área Metropolitana del Valle de Aburrá y el interés compuesto de un ahorro estudiantil mediante funciones exponenciales.'
        : 'Modelar la factura mensual de servicios públicos de EPM (cargo fijo más costo por m³ consumido) mediante una función lineal afín f(x) = mx + b.',
      concepto: `Estudio de "${tituloOriginal}". ${
        esExp
          ? 'La función exponencial f(x) = a·bˣ modela crecimientos o decaimientos porcentuales constantes, y su función inversa es la función logarítmica: y = bˣ ⟺ x = log_b(y).'
          : 'En la función afín y = mx + b, la pendiente m representa la razón de cambio constante por cada unidad que aumenta x, y b es el intercepto con el eje vertical Y.'
      }`,
      formulas: esExp
        ? [
            'Función Exponencial: f(x) = C₀ · aˣ  (Crecimiento si a > 1; Decaimiento si 0 < a < 1)',
            'Definición de Logaritmo: log_b(N) = x  ⟺  bˣ = N',
            'Propiedades: log(A·B) = log(A) + log(B)  |  log(A/B) = log(A) - log(B)  |  log(Aⁿ) = n·log(A)'
          ]
        : [
            'Pendiente entre dos puntos: m = (y₂ - y₁) / (x₂ - x₁)',
            'Ecuación explícita de la recta: y = mx + b',
            'Rectas paralelas: m₁ = m₂  |  Rectas perpendiculares: m₁ · m₂ = -1'
          ],
      ejemploPasoAPaso: esExp
        ? {
            enunciado: 'Un cultivo de bacterias en el laboratorio escolar se duplica cada hora siguiendo la función P(t) = 500 · 2ᵗ, donde t son las horas. 1) ¿Cuántas bacterias hay a las 4 horas? 2) ¿En cuántas horas llegará a 16.000 bacterias?',
            pasos: [
              'Paso 1: Evaluar para t = 4: P(4) = 500 · 2⁴ = 500 × 16 = 8.000 bacterias.',
              'Paso 2: Igualar P(t) = 16.000: 500 · 2ᵗ = 16.000 ⇒ 2ᵗ = 16.000 / 500 = 32.',
              'Paso 3: Expresar 32 como potencia de 2: 2ᵗ = 2⁵ ⇒ t = 5 horas.'
            ],
            solucionFinal: 'A las 4 horas hay 8.000 bacterias y alcanza las 16.000 bacterias a las 5 horas.'
          }
        : {
            enunciado: 'Hallar la ecuación explícita de la recta que pasa por los puntos A(2, 5) y B(6, 17), e identificar su pendiente e intercepto con el eje Y.',
            pasos: [
              'Paso 1: Calcular la pendiente: m = (17 - 5) / (6 - 2) = 12 / 4 = 3.',
              'Paso 2: Usar la forma punto-pendiente con A(2, 5): y - 5 = 3(x - 2).',
              'Paso 3: Despejar y: y = 3x - 6 + 5 ⇒ y = 3x - 1.'
            ],
            solucionFinal: 'La ecuación es y = 3x - 1 (pendiente m = 3, intercepto b = -1).'
          },
      ejerciciosPracticos: esExp
        ? [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Resuelve la ecuación exponencial: 3^(2x - 1) = 81.',
              pistaDUA: 'Expresa 81 como una potencia de base 3 (81 = 3⁴) e iguala los exponentes.',
              pasosExplicativos: ['3^(2x - 1) = 3⁴.', 'Igualar exponentes: 2x - 1 = 4 ⇒ 2x = 5 ⇒ x = 5/2 = 2,5.'],
              solucionFinal: 'x = 2,5'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Calcula el valor exacto de la expresión logarítmica: log₂(32) + log₃(27) - log₁₀(100).',
              pistaDUA: 'Halla el exponente al que debe elevarse cada base.',
              pasosExplicativos: ['log₂(32) = 5 (2⁵=32).', 'log₃(27) = 3 (3³=27).', 'log₁₀(100) = 2 (10²=100).', 'Operar: 5 + 3 - 2 = 6.'],
              solucionFinal: '6'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Resuelve aplicando propiedades de logaritmos: log₂(x) + log₂(x - 2) = 3 (para x > 2).',
              pistaDUA: 'Convierte la suma de logaritmos en el logaritmo de un producto: log₂[x(x-2)] = 3.',
              pasosExplicativos: [
                'log₂(x² - 2x) = 3 ⇒ x² - 2x = 2³ = 8.',
                'x² - 2x - 8 = 0 ⇒ (x - 4)(x + 2) = 0.',
                'Como el argumento debe ser positivo (x > 2), la única solución válida es x = 4.'
              ],
              solucionFinal: 'x = 4'
            }
          ]
        : [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Determina la pendiente y el corte con el eje Y de la recta 2x + y - 8 = 0, y calcula el valor de y cuando x = 3.',
              pistaDUA: 'Despeja la variable y para llevarla a la forma y = mx + b.',
              pasosExplicativos: ['Despejar y: y = -2x + 8.', 'Pendiente m = -2, corte b = 8.', 'Para x = 3: y = -2(3) + 8 = 2.'],
              solucionFinal: 'm = -2, b = 8; para x = 3, y = 2.'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Una empresa de mensajería en Medellín cobra $6.000 de tarifa base más $1.500 por cada kilogramo enviado. Formula la función lineal C(x) y calcula cuántos kilos se enviaron si se pagaron $24.000.',
              pistaDUA: 'Plantea C(x) = 1.500x + 6.000 e iguala a 24.000.',
              pasosExplicativos: [
                'Función: C(x) = 1.500x + 6.000.',
                '1.500x + 6.000 = 24.000 ⇒ 1.500x = 18.000.',
                'x = 18.000 / 1.500 = 12 kg.'
              ],
              solucionFinal: 'C(x) = 1.500x + 6.000; se enviaron 12 kg.'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Halla la ecuación de la recta que pasa por el punto P(4, -1) y es perpendicular a la recta y = (2/3)x + 5.',
              pistaDUA: 'La pendiente perpendicular cumple m₂ = -1 / m₁.',
              pasosExplicativos: [
                'Pendiente dada m₁ = 2/3 ⇒ Pendiente perpendicular m₂ = -3/2.',
                'Usar punto-pendiente con P(4, -1): y - (-1) = (-3/2)(x - 4).',
                'y + 1 = (-3/2)x + 6 ⇒ y = (-3/2)x + 5.'
              ],
              solucionFinal: 'y = (-3/2)x + 5'
            }
          ]
    };
  }

  // =========================================================================
  // 18. GEOMETRÍA PLANA Y ESPACIAL: PERÍMETRO, ÁREA, VOLUMEN, POLÍGONOS (1° a 7°)
  // =========================================================================
  if (
    t.includes('perímetro') ||
    t.includes('área') ||
    t.includes('volumen') ||
    t.includes('polígono') ||
    t.includes('sólidos') ||
    t.includes('cuerpos geométricos') ||
    t.includes('cuerpos redondos') ||
    t.includes('figuras geométricas') ||
    t.includes('euler') ||
    t.includes('círculo y la circunferencia') ||
    t.includes('ángulos') && (grado === '4°' || grado === '6°')
  ) {
    const esVolumen = t.includes('volumen') || t.includes('sólidos') || t.includes('cuerpos') || t.includes('euler') || t.includes('empaque');
    return {
      exploracionMedellin: esVolumen
        ? 'Calcular el volumen y capacidad en litros de los tanques de almacenamiento de agua de EPM y analizar los poliedros arquitectónicos del Parque Explora.'
        : 'Medir y calcular el perímetro de cerramiento y el área de las canchas polideportivas y jardines de la IE Rafael Uribe Uribe en la Comuna 12.',
      concepto: `Estudio de "${tituloOriginal}". ${
        esVolumen
          ? 'Los sólidos geométricos ocupan un volumen en el espacio tridimensional medido en unidades cúbicas (m³, cm³). En todo poliedro convexo se cumple la relación de Euler: Caras + Vértices = Aristas + 2.'
          : 'El perímetro mide la longitud total del contorno de una figura plana (unidades lineales), mientras que el área mide la superficie interior encerrada (unidades cuadradas).'
      }`,
      formulas: esVolumen
        ? [
            'Volumen Prisma / Cilindro: V = Área_base × Altura  |  Volumen Pirámide / Cono: V = (Área_base × h) / 3',
            'Teorema de Euler para Poliedros: C + V = A + 2',
            'Equivalencias de Capacidad: 1 m³ = 1.000 Litros  |  1 dm³ = 1 Litro = 1.000 cm³'
          ]
        : [
            'Área Rectángulo: A = b × h  |  Área Triángulo: A = (b × h) / 2  |  Área Trapecio: A = [(B + b) × h] / 2',
            'Polígono Regular: P = n × L  ;  A = (P × apotema) / 2',
            'Círculo: Longitud C = 2π·r  ;  Área A = π·r²  (π ≈ 3,1416)'
          ],
      ejemploPasoAPaso: esVolumen
        ? {
            enunciado: 'Una piscina escolar tiene forma de prisma rectangular de 10 m de largo, 4 m de ancho y 1,5 m de profundidad. ¿Cuál es su volumen en m³ y cuántos litros de agua se necesitan para llenarla?',
            pasos: [
              'Paso 1: Calcular el área de la base rectangular: A_base = 10 m × 4 m = 40 m².',
              'Paso 2: Multiplicar por la profundidad para hallar el volumen: V = 40 m² × 1,5 m = 60 m³.',
              'Paso 3: Convertir m³ a litros multiplicando por 1.000: 60 × 1.000 = 60.000 litros.'
            ],
            solucionFinal: 'El volumen es de 60 m³ y requiere 60.000 litros de agua.'
          }
        : {
            enunciado: 'Un jardín escolar tiene forma de trapecio con base mayor B = 12 m, base menor b = 8 m, altura h = 5 m y lados laterales de 6 m cada uno. Hallar su perímetro y su área.',
            pasos: [
              'Paso 1: Sumar los 4 lados para hallar el perímetro: P = 12 + 8 + 6 + 6 = 32 metros.',
              'Paso 2: Aplicar la fórmula del área del trapecio: A = [(12 + 8) × 5] / 2.',
              'Paso 3: Operar: A = (20 × 5) / 2 = 100 / 2 = 50 m².'
            ],
            solucionFinal: 'El perímetro es 32 m y el área es 50 m².'
          },
      ejerciciosPracticos: esVolumen
        ? [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Un prisma hexagonal tiene 8 caras y 12 vértices. Usando el Teorema de Euler (C + V = A + 2), ¿cuántas aristas tiene?',
              pistaDUA: 'Sustituye C = 8 y V = 12 en la fórmula y despeja A.',
              pasosExplicativos: ['8 + 12 = A + 2 ⇒ 20 = A + 2.', 'A = 20 - 2 = 18 aristas.'],
              solucionFinal: 'Tiene 18 aristas.'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Calcula el volumen de una caja cúbica cuya arista mide 6 cm y determina cuántas de estas cajitas caben en un cajón de 1.080 cm³.',
              pistaDUA: 'El volumen del cubo es V = L³.',
              pasosExplicativos: ['Volumen de una cajita: V = 6³ = 6 × 6 × 6 = 216 cm³.', 'Cantidad de cajitas: 1.080 ÷ 216 = 5 cajitas.'],
              solucionFinal: 'Cada cajita tiene 216 cm³ y caben exactamente 5 cajitas.'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Un tanque cilíndrico tiene un radio de 2 m y una altura de 5 m. Calcula su volumen exacto usando π ≈ 3,14.',
              pistaDUA: 'Aplica V = π · r² · h.',
              pasosExplicativos: ['r² = 2² = 4 m².', 'V = 3,14 × 4 × 5 = 3,14 × 20 = 62,8 m³.'],
              solucionFinal: '62,8 m³ (62.800 litros).'
            }
          ]
        : [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Halla el área y el perímetro de un triángulo rectángulo cuya base mide 8 cm, su altura 6 cm y su hipotenusa 10 cm.',
              pistaDUA: 'Recuerda que el área del triángulo es (Base × Altura) / 2.',
              pasosExplicativos: ['Perímetro: P = 8 + 6 + 10 = 24 cm.', 'Área: A = (8 × 6) / 2 = 48 / 2 = 24 cm².'],
              solucionFinal: 'Perímetro = 24 cm y Área = 24 cm².'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Se desea cercar con 3 vueltas de alambre un lote rectangular de 15 m de frente por 9 m de fondo. ¿Cuántos metros de alambre se necesitan y cuál es el área del lote?',
              pistaDUA: 'Halla primero el perímetro de una vuelta y multiplícalo por 3.',
              pasosExplicativos: [
                'Perímetro de 1 vuelta: P = 2(15) + 2(9) = 30 + 18 = 48 m.',
                'Alambre para 3 vueltas: 48 × 3 = 144 metros.',
                'Área: 15 m × 9 m = 135 m².'
              ],
              solucionFinal: 'Se necesitan 144 m de alambre y el área es 135 m².'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Una glorieta circular en Medellín tiene un radio de 10 metros. ¿Cuál es la longitud de su borde (circunferencia) y cuál es su área total? (Usa π = 3,14).',
              pistaDUA: 'Usa C = 2·π·r para el borde y A = π·r² para la superficie.',
              pasosExplicativos: [
                'Longitud de la circunferencia: C = 2 × 3,14 × 10 = 62,8 metros.',
                'Área del círculo: A = 3,14 × (10)² = 3,14 × 100 = 314 m².'
              ],
              solucionFinal: 'Longitud = 62,8 m y Área = 314 m².'
            }
          ]
    };
  }

  // =========================================================================
  // 19. TEOREMA DE PITÁGORAS, TEOREMA DE TALES Y SEMEJANZA (8° Y 9°)
  // =========================================================================
  if (t.includes('pitágoras') || t.includes('tales') || t.includes('semejanza') || t.includes('congruencia')) {
    const esPitagoras = t.includes('pitágoras');
    return {
      exploracionMedellin: esPitagoras
        ? 'Calcular la longitud del cable tensor de una torre del Metrocable de San Javier conociendo la altura de la pilona y la distancia horizontal de anclaje.'
        : 'Calcular la altura real de la fachada de la IE Rafael Uribe Uribe midiendo su sombra en el patio y comparándola a la misma hora con la sombra de un estudiante.',
      concepto: `Estudio de "${tituloOriginal}". ${
        esPitagoras
          ? 'En todo triángulo rectángulo, el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de las longitudes de los catetos (c² = a² + b²).'
          : 'El Teorema de Tales y los criterios de semejanza de triángulos (AA, LAL, LLL) establecen que dos triángulos semejantes tienen ángulos homólogos congruentes y lados correspondientes proporcionales.'
      }`,
      formulas: esPitagoras
        ? [
            'Teorema de Pitágoras: c² = a² + b²  ⇒  Hipotenusa c = √(a² + b²)',
            'Despeje de un cateto: a = √(c² - b²)',
            'Ternas pitagóricas clásicas: (3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 15, 17)'
          ]
        : [
            'Teorema de Tales: AB / A\'B\' = BC / B\'C\' = k (razón de semejanza)',
            'Proporción de sombras: Altura_1 / Sombra_1 = Altura_2 / Sombra_2',
            'Relación de áreas en figuras semejantes: Área_1 / Área_2 = k²'
          ],
      ejemploPasoAPaso: esPitagoras
        ? {
            enunciado: 'Una escalera de bomberos de 13 metros de longitud se apoya contra la fachada de un edificio en Medellín. Si el pie de la escalera está a 5 metros de la base del muro, ¿qué altura alcanza la escalera?',
            pasos: [
              'Paso 1: Identificar datos en el triángulo rectángulo: hipotenusa c = 13 m, cateto base b = 5 m, cateto altura a = ?.',
              'Paso 2: Despejar el cateto en el Teorema de Pitágoras: a² = c² - b² = 13² - 5².',
              'Paso 3: Calcular cuadrados y restar: a² = 169 - 25 = 144.',
              'Paso 4: Extraer raíz cuadrada: a = √144 = 12 metros.'
            ],
            solucionFinal: 'La escalera alcanza una altura exacta de 12 metros.'
          }
        : {
            enunciado: 'A las 10:00 a.m. en Medellín, un edificio proyecta una sombra de 18 metros. Al mismo tiempo, un poste vertical de 3 metros proyecta una sombra de 2 metros. ¿Cuál es la altura del edificio?',
            pasos: [
              'Paso 1: Por semejanza de triángulos rectángulos (criterio AA), plantear la proporción: H / 18 = 3 / 2.',
              'Paso 2: Despejar la altura H: H = (18 × 3) / 2.',
              'Paso 3: Operar: H = 54 / 2 = 27 metros.'
            ],
            solucionFinal: 'La altura del edificio es de 27 metros.'
          },
      ejerciciosPracticos: esPitagoras
        ? [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Calcula la medida de la diagonal de una cancha rectangular que mide 12 metros de largo y 9 metros de ancho.',
              pistaDUA: 'La diagonal divide el rectángulo en dos triángulos rectángulos de catetos 12 m y 9 m.',
              pasosExplicativos: ['d² = 12² + 9² = 144 + 81 = 225.', 'd = √225 = 15 metros.'],
              solucionFinal: 'La diagonal mide 15 metros.'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Un dron despega desde el patio escolar, se desplaza 16 metros hacia el norte y luego se eleva verticalmente 12 metros. ¿A qué distancia en línea recta se encuentra del punto de partida?',
              pistaDUA: 'Aplica Pitágoras con catetos 16 m y 12 m.',
              pasosExplicativos: ['c² = 16² + 12² = 256 + 144 = 400.', 'c = √400 = 20 metros.'],
              solucionFinal: 'Se encuentra a 20 metros en línea recta.'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Halla la altura h y el área de un triángulo equilátero cuyo lado mide 10 cm.',
              pistaDUA: 'La altura parte la base en dos segmentos de 5 cm formando un triángulo rectángulo de hipotenusa 10 cm y cateto 5 cm.',
              pasosExplicativos: [
                'h = √(10² - 5²) = √(100 - 25) = √75 = 5√3 ≈ 8,66 cm.',
                'Área = (Base × h) / 2 = (10 × 5√3) / 2 = 25√3 ≈ 43,3 cm².'
              ],
              solucionFinal: 'Altura h = 5√3 ≈ 8,66 cm y Área = 25√3 ≈ 43,3 cm².'
            }
          ]
        : [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Dos triángulos son semejantes. Los lados del primero miden 4 cm, 6 cm y 8 cm. Si el lado menor del segundo triángulo mide 12 cm, ¿cuánto miden sus otros dos lados?',
              pistaDUA: 'Halla primero la razón de semejanza k = 12 / 4 = 3.',
              pasosExplicativos: ['Razón de ampliación: k = 12 ÷ 4 = 3.', 'Segundo lado: 6 × 3 = 18 cm.', 'Tercer lado: 8 × 3 = 24 cm.'],
              solucionFinal: 'Miden 18 cm y 24 cm.'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Tres rectas paralelas cortan a dos secantes determinando en la primera segmentos de 5 cm y 8 cm, y en la segunda un segmento de 15 cm y otro desconocido x. Halla x por el Teorema de Tales.',
              pistaDUA: 'Plantea la proporción 5 / 8 = 15 / x.',
              pasosExplicativos: ['5 / 8 = 15 / x  ⇒  5x = 8 × 15 = 120.', 'x = 120 / 5 = 24 cm.'],
              solucionFinal: 'x = 24 cm'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Para medir el ancho de la quebrada La Hueso en Medellín se trazan dos triángulos rectángulos semejantes en la orilla con catetos de 4 m y 3 m en tierra, y base de 16 m hacia la otra orilla. ¿Cuál es el ancho x de la quebrada?',
              pistaDUA: 'Plantea x / 16 = 3 / 4.',
              pasosExplicativos: ['Por semejanza: x / 16 = 3 / 4.', 'x = (16 × 3) / 4 = 4 × 3 = 12 metros.'],
              solucionFinal: 'El ancho de la quebrada es de 12 metros.'
            }
          ]
    };
  }

  // =========================================================================
  // 20. TRIGONOMETRÍA (9° Y 10°): ÁNGULOS, RAZONES, LEY DE SENO/COSENO, IDENTIDADES
  // =========================================================================
  if (
    t.includes('trigonométric') ||
    t.includes('radianes') ||
    t.includes('círculo unitario') ||
    t.includes('ángulos de referencia') ||
    t.includes('teorema del seno') ||
    t.includes('teorema del coseno') ||
    t.includes('identidades') ||
    t.includes('ángulos de elevación')
  ) {
    const esSenoCoseno = t.includes('teorema del seno') || t.includes('teorema del coseno');
    const esIdentidad = t.includes('identidades');
    return {
      exploracionMedellin: 'Determinar alturas de edificios en el centro de Medellín e inclinaciones de las laderas del Metrocable aplicando razones trigonométricas y los teoremas del Seno y del Coseno.',
      concepto: `Estudio de "${tituloOriginal}". En el sistema cíclico, 180° equivalen a π radianes. En todo triángulo rectángulo las razones Seno, Coseno y Tangente relacionan los ángulos agudos con los lados; para triángulos oblicuángulos se emplean la Ley del Seno y la Ley del Coseno.`,
      formulas: [
        'Conversión angular: π rad = 180°  |  Longitud de arco: s = r · θ (θ en rad)',
        'Triángulo Rectángulo: Sen(θ) = Op/Hip  |  Cos(θ) = Ady/Hip  |  Tan(θ) = Op/Ady',
        'Ley del Seno: a/Sen(A) = b/Sen(B) = c/Sen(C)  |  Ley del Coseno: c² = a² + b² - 2ab·Cos(C)',
        'Identidades Pitagóricas: Sen²(θ) + Cos²(θ) = 1  |  1 + Tan²(θ) = Sec²(θ)'
      ],
      ejemploPasoAPaso: esSenoCoseno
        ? {
            enunciado: 'Dos senderos rectos parten de un mirador en Santa Elena formando un ángulo de 60° entre sí. Si un caminante recorre 5 km por el primero y otro recorre 8 km por el segundo, ¿qué distancia los separa?',
            pasos: [
              'Paso 1: Identificar el caso LAL (Lado-Ángulo-Lado): a = 5 km, b = 8 km, ángulo comprendido C = 60°.',
              'Paso 2: Aplicar el Teorema del Coseno: c² = a² + b² - 2ab · Cos(60°).',
              'Paso 3: Sustituir sabiendo que Cos(60°) = 0,5: c² = 5² + 8² - 2(5)(8)(0,5) = 25 + 64 - 40 = 49.',
              'Paso 4: Extraer raíz cuadrada: c = √49 = 7 km.'
            ],
            solucionFinal: 'Los dos caminantes están separados por una distancia exacta de 7 km.'
          }
        : esIdentidad
        ? {
            enunciado: 'Simplificar y demostrar la identidad trigonométrica: Cos(θ) · Tan(θ) + Sen(θ) = 2·Sen(θ).',
            pasos: [
              'Paso 1: Expresar Tan(θ) en términos de Seno y Coseno: Tan(θ) = Sen(θ) / Cos(θ).',
              'Paso 2: Sustituir en el miembro izquierdo: Cos(θ) · [Sen(θ) / Cos(θ)] + Sen(θ).',
              'Paso 3: Cancelar Cos(θ) y sumar términos semejantes: Sen(θ) + Sen(θ) = 2·Sen(θ) (Queda demostrado).'
            ],
            solucionFinal: 'La expresión equivale idénticamente a 2·Sen(θ).'
          }
        : {
            enunciado: 'Desde un punto a 40 metros de la base de una torre en Medellín se observa su parte más alta con un ángulo de elevación de 30°. Si el observador mide 1,6 m, ¿cuál es la altura total de la torre?',
            pasos: [
              'Paso 1: Usar la razón tangente: Tan(30°) = Cateto Opuesto (y) / Cateto Adyacente (40 m).',
              'Paso 2: Despejar y sabiendo que Tan(30°) = √3 / 3 ≈ 0,577: y = 40 × 0,577 = 23,1 m.',
              'Paso 3: Sumar la estatura del observador: Altura Total = 23,1 m + 1,6 m = 24,7 metros.'
            ],
            solucionFinal: 'La altura total de la torre es de 24,7 metros.'
          },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Convierte 135° a radianes y convierte (5π / 6) radianes a grados sexagesimales.',
          pistaDUA: 'Multiplica los grados por (π / 180°) y reemplaza π rad por 180°.',
          pasosExplicativos: [
            '135° × (π / 180°) = (135/180)π = (3π / 4) rad.',
            '(5 × 180°) / 6 = 5 × 30° = 150°.'
          ],
          solucionFinal: '135° = 3π/4 rad  y  5π/6 rad = 150°.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Un cable del Metrocable de 100 metros de longitud forma un ángulo de inclinación de 30° con la horizontal. ¿Cuántos metros asciende verticalmente la cabina en ese tramo?',
          pistaDUA: 'Usa la razón Seno: Sen(30°) = Altura / Hipotenusa, recordando que Sen(30°) = 1/2 = 0,5.',
          pasosExplicativos: ['Sen(30°) = h / 100 m.', 'h = 100 m × Sen(30°) = 100 × 0,5 = 50 metros.'],
          solucionFinal: 'Asciende verticalmente 50 metros.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'En un triángulo oblicuángulo ABC se conoce que el ángulo A = 30°, el ángulo B = 45° y el lado a = 10 m. Halla la medida del lado b aplicando el Teorema del Seno.',
          pistaDUA: 'Plantea b / Sen(45°) = 10 / Sen(30°) con Sen(30°) = 1/2 y Sen(45°) = √2/2.',
          pasosExplicativos: [
            'b / (√2/2) = 10 / (1/2) = 20.',
            'b = 20 × (√2 / 2) = 10√2 ≈ 14,14 metros.'
          ],
          solucionFinal: 'b = 10√2 ≈ 14,14 metros.'
        }
      ]
    };
  }

  // =========================================================================
  // 21. GEOMETRÍA ANALÍTICA, DISTANCIA, CÓNICAS Y VECTORES (10° Y 11°)
  // =========================================================================
  if (
    t.includes('distancia entre dos puntos') ||
    t.includes('punto medio') ||
    t.includes('circunferencia') ||
    t.includes('parábola') ||
    t.includes('elipse') ||
    t.includes('hipérbola') ||
    t.includes('cónicas') ||
    t.includes('vectores') ||
    t.includes('plano cartesiano') ||
    t.includes('traslación') ||
    t.includes('homotecia')
  ) {
    const esConica = t.includes('circunferencia') || t.includes('parábola') || t.includes('elipse') || t.includes('hipérbola') || t.includes('cónicas');
    return {
      exploracionMedellin: 'Representar en un sistema de coordenadas cartesianas la ubicación de estaciones del Metro de Medellín, antenas parabólicas de telecomunicaciones y trayectorias vectoriales.',
      concepto: `Estudio de "${tituloOriginal}". La Geometría Analítica describe lugares geométricos mediante ecuaciones algebraicas en el plano cartesiano R². Las secciones cónicas (circunferencia, parábola, elipse e hipérbola) se definen a partir de propiedades de distancia a puntos fijos llamados focos y rectas directrices.`,
      formulas: [
        'Distancia: d(A,B) = √[(x₂ - x₁)² + (y₂ - y₁)²]  |  Punto Medio: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
        'Circunferencia: (x - h)² + (y - k)² = r²  |  Parábola vertical: (x - h)² = 4p(y - k)',
        'Elipse: (x-h)²/a² + (y-k)²/b² = 1 (a² = b² + c²)  |  Hipérbola: (x-h)²/a² - (y-k)²/b² = 1 (c² = a² + b²)'
      ],
      ejemploPasoAPaso: esConica
        ? {
            enunciado: 'Dada la ecuación general de una circunferencia x² + y² - 6x + 8y = 0, hallar las coordenadas de su centro C(h, k) y la medida de su radio r completando cuadrados.',
            pasos: [
              'Paso 1: Agrupar términos en x y términos en y: (x² - 6x) + (y² + 8y) = 0.',
              'Paso 2: Completar trinomios cuadrados perfectos sumando (6/2)² = 9 y (8/2)² = 16 en ambos lados: (x² - 6x + 9) + (y² + 8y + 16) = 9 + 16.',
              'Paso 3: Factorizar a la forma ordinaria: (x - 3)² + (y + 4)² = 25.',
              'Paso 4: Identificar Centro C(3, -4) y Radio r = √25 = 5.'
            ],
            solucionFinal: 'Centro en C(3, -4) y radio r = 5 unidades.'
          }
        : {
            enunciado: 'Dados los puntos A(-2, 1) y B(4, 9) en el plano cartesiano, calcular la distancia exacta entre A y B y las coordenadas de su punto medio M.',
            pasos: [
              'Paso 1: Aplicar fórmula de distancia: d = √[(4 - (-2))² + (9 - 1)²] = √[6² + 8²].',
              'Paso 2: Calcular: d = √(36 + 64) = √100 = 10 unidades.',
              'Paso 3: Calcular el punto medio: M = ( (-2 + 4)/2 , (1 + 9)/2 ) = (1, 5).'
            ],
            solucionFinal: 'Distancia d = 10 unidades y Punto Medio M(1, 5).'
          },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Escribe la ecuación ordinaria de la circunferencia con centro en C(-2, 5) y radio r = 6.',
          pistaDUA: 'Sustituye h = -2, k = 5 y r = 6 en (x - h)² + (y - k)² = r².',
          pasosExplicativos: ['(x - (-2))² + (y - 5)² = 6².', '(x + 2)² + (y - 5)² = 36.'],
          solucionFinal: '(x + 2)² + (y - 5)² = 36'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'Halla las coordenadas del foco y la ecuación de la directriz de la parábola x² = 12y.',
          pistaDUA: 'Compara con x² = 4py para despejar el parámetro p.',
          pasosExplicativos: [
            '4p = 12 ⇒ p = 3 (abre hacia arriba con vértice en (0, 0)).',
            'Foco en F(0, p) = F(0, 3) y directriz en y = -p ⇒ y = -3.'
          ],
          solucionFinal: 'Foco F(0, 3) y directriz y = -3.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'En la elipse x²/100 + y²/64 = 1, determina la longitud del eje mayor, la distancia focal c y la excentricidad e = c/a.',
          pistaDUA: 'Usa a² = 100, b² = 64 y la relación c² = a² - b².',
          pasosExplicativos: [
            'a = √100 = 10 (eje mayor 2a = 20) y b = √64 = 8.',
            'c = √(100 - 64) = √36 = 6.',
            'Excentricidad: e = c / a = 6 / 10 = 0,6.'
          ],
          solucionFinal: 'Eje mayor = 20, distancia focal c = 6 y excentricidad e = 0,6.'
        }
      ]
    };
  }

  // =========================================================================
  // 22. CÁLCULO GRADO 11°: SUCESIONES, LÍMITES, CONTINUIDAD, DERIVADAS, INTEGRALES
  // =========================================================================
  if (
    t.includes('sucesiones') ||
    t.includes('límite') ||
    t.includes('continuidad') ||
    t.includes('derivada') ||
    t.includes('derivación') ||
    t.includes('recta tangente') ||
    t.includes('regla de la cadena') ||
    t.includes('optimización') ||
    t.includes('integral')
  ) {
    const esLimite = t.includes('sucesiones') || t.includes('límite') || t.includes('continuidad');
    const esIntegral = t.includes('integral');
    return {
      exploracionMedellin: esLimite
        ? 'Analizar la velocidad instantánea de un tren del Metro de Medellín al aproximarse a una estación y la tendencia a largo plazo de una inversión.'
        : esIntegral
        ? 'Calcular la distancia total recorrida por un vehículo eléctrico en Medellín a partir del área bajo la curva de su función de velocidad v(t).'
        : 'Optimizar el diseño de envases industriales en empresas del Valle de Aburrá y maximizar la función de utilidad comercial mediante el criterio de la primera y segunda derivada.',
      concepto: `Estudio de "${tituloOriginal}". ${
        esLimite
          ? 'El límite lim(x→a) f(x) = L describe el valor al que se aproxima f(x) cuando x tiende a "a". Una función es continua en x = a si f(a) existe, el límite existe y ambos coinciden.'
          : esIntegral
          ? 'La antiderivada o integral indefinida ∫f(x)dx = F(x) + C es el proceso inverso de la derivación (F\'(x) = f(x)). Por el Teorema Fundamental del Cálculo, la integral definida cuantifica el área neta bajo la curva.'
          : 'La derivada f\'(x) representa geométricamente la pendiente de la recta tangente a la curva y físicamente la razón de cambio instantánea. En los puntos máximos o mínimos locales se cumple que f\'(x) = 0.'
      }`,
      formulas: esLimite
        ? [
            'Indeterminación 0/0: Factorizar o racionalizar para cancelar el factor (x - a)',
            'Límite al infinito racional: Dividir entre la mayor potencia de x del denominador',
            'Condición de Continuidad en x = a: lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)'
          ]
        : esIntegral
        ? [
            'Regla de la potencia para integrales: ∫ xⁿ dx = x^(n+1) / (n + 1) + C  (para n ≠ -1)',
            'Linealidad: ∫ [a·f(x) ± b·g(x)] dx = a∫f(x)dx ± b∫g(x)dx',
            'Teorema Fundamental del Cálculo: ∫_a^b f(x) dx = F(b) - F(a)'
          ]
        : [
            'Derivada de potencia: d/dx(xⁿ) = n·xⁿ⁻¹  |  Producto: (u·v)\' = u\'v + uv\'  |  Cociente: (u/v)\' = (u\'v - uv\')/v²',
            'Regla de la cadena: d/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
            'Criterio de optimización: Punto crítico en f\'(x) = 0 (Máximo si f\'\'(x) < 0; Mínimo si f\'\'(x) > 0)'
          ],
      ejemploPasoAPaso: esLimite
        ? {
            enunciado: 'Calcular el límite indeterminado: lim(x→4) (x² - x - 12) / (x - 4).',
            pasos: [
              'Paso 1: Evaluar en x = 4: (16 - 4 - 12) / (4 - 4) = 0/0 (indeterminación removible).',
              'Paso 2: Factorizar el trinomio del numerador: x² - x - 12 = (x - 4)(x + 3).',
              'Paso 3: Cancelar el factor común (x - 4) para x ≠ 4: lim(x→4) (x + 3).',
              'Paso 4: Sustituir x = 4: 4 + 3 = 7.'
            ],
            solucionFinal: 'El valor del límite es 7.'
          }
        : esIntegral
        ? {
            enunciado: 'Calcular la integral indefinida ∫ (6x² - 8x + 5) dx y evaluar la integral definida en el intervalo [0, 2].',
            pasos: [
              'Paso 1: Integrar término a término con la regla de la potencia: F(x) = 6(x³/3) - 8(x²/2) + 5x + C = 2x³ - 4x² + 5x + C.',
              'Paso 2: Aplicar la Regla de Barrow entre x = 0 y x = 2: F(2) - F(0).',
              'Paso 3: Evaluar F(2) = 2(2)³ - 4(2)² + 5(2) = 16 - 16 + 10 = 10; y F(0) = 0.'
            ],
            solucionFinal: 'Antiderivada: 2x³ - 4x² + 5x + C; Integral definida en [0, 2] = 10.'
          }
        : {
            enunciado: 'Hallar la ecuación de la recta tangente a la curva f(x) = x³ - 4x + 5 en el punto donde x = 2.',
            pasos: [
              'Paso 1: Evaluar la función en x = 2 para hallar el punto de tangencia: f(2) = 2³ - 4(2) + 5 = 8 - 8 + 5 = 5 → P(2, 5).',
              'Paso 2: Derivar la función: f\'(x) = 3x² - 4.',
              'Paso 3: Evaluar la derivada en x = 2 para obtener la pendiente tangente: m = f\'(2) = 3(2)² - 4 = 12 - 4 = 8.',
              'Paso 4: Usar punto-pendiente: y - 5 = 8(x - 2) ⇒ y = 8x - 11.'
            ],
            solucionFinal: 'La recta tangente es y = 8x - 11.'
          },
      ejerciciosPracticos: esLimite
        ? [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Calcula el límite por factorización: lim(x→5) (x² - 25) / (x - 5).',
              pistaDUA: 'Factoriza x² - 25 = (x - 5)(x + 5) y simplifica.',
              pasosExplicativos: ['lim(x→5) [(x - 5)(x + 5)] / (x - 5) = lim(x→5) (x + 5).', 'Sustituir x = 5: 5 + 5 = 10.'],
              solucionFinal: '10'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Calcula el límite al infinito: lim(x→∞) (6x² + 4x - 1) / (2x² - 5).',
              pistaDUA: 'Cuando los grados del numerador y denominador son iguales, el límite al infinito es el cociente de sus coeficientes principales.',
              pasosExplicativos: ['Dividir cada término entre x²: (6 + 4/x - 1/x²) / (2 - 5/x²).', 'Cuando x → ∞, los términos con x en el denominador tienden a 0 → 6 / 2 = 3.'],
              solucionFinal: '3'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Halla el valor de la constante k para que la función a trozos f(x) = { 3x + 2 si x < 2 ; kx² - 4 si x ≥ 2 } sea continua en x = 2.',
              pistaDUA: 'Iguala el límite lateral izquierdo con el límite lateral derecho en x = 2.',
              pasosExplicativos: [
                'Límite por la izquierda: 3(2) + 2 = 8.',
                'Límite por la derecha: k(2)² - 4 = 4k - 4.',
                'Igualar: 4k - 4 = 8 ⇒ 4k = 12 ⇒ k = 3.'
              ],
              solucionFinal: 'k = 3'
            }
          ]
        : esIntegral
        ? [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Halla la antiderivada general de: ∫ (4x³ - 6x + 7) dx.',
              pistaDUA: 'Suma 1 al exponente y divide por el nuevo exponente.',
              pasosExplicativos: ['∫4x³dx = 4(x⁴/4) = x⁴.', '∫-6xdx = -6(x²/2) = -3x².', '∫7dx = 7x + C.'],
              solucionFinal: 'x⁴ - 3x² + 7x + C'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Calcula el área exacta bajo la curva f(x) = 3x² en el intervalo [1, 3].',
              pistaDUA: 'Evalúa la integral definida ∫₁³ 3x² dx = [x³]₁³.',
              pasosExplicativos: ['Antiderivada de 3x² es F(x) = x³.', 'Evaluar F(3) - F(1) = 3³ - 1³ = 27 - 1 = 26 u².'],
              solucionFinal: '26 unidades cuadradas.'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Un móvil parte del reposo desde el origen con velocidad v(t) = 4t + 2 (m/s). ¿Qué distancia recorre durante los primeros 5 segundos?',
              pistaDUA: 'Integra v(t) entre t = 0 y t = 5.',
              pasosExplicativos: ['Posición s(t) = ∫(4t + 2)dt = 2t² + 2t.', 'Evaluar en t = 5: 2(5)² + 2(5) = 50 + 10 = 60 metros.'],
              solucionFinal: 'Recorre 60 metros.'
            }
          ]
        : [
            {
              numero: 1,
              nivel: 'Fácil',
              enunciado: 'Halla la derivada f\'(x) de la función f(x) = 5x⁴ - 3x³ + 7x - 12 y evalúa f\'(1).',
              pistaDUA: 'Aplica la regla de la potencia d/dx(xⁿ) = n·xⁿ⁻¹ a cada término.',
              pasosExplicativos: ['f\'(x) = 20x³ - 9x² + 7.', 'Evaluar en x = 1: f\'(1) = 20(1) - 9(1) + 7 = 18.'],
              solucionFinal: 'f\'(x) = 20x³ - 9x² + 7  y  f\'(1) = 18.'
            },
            {
              numero: 2,
              nivel: 'Intermedio',
              enunciado: 'Deriva aplicando la regla de la cadena: f(x) = (3x² + 5)⁴.',
              pistaDUA: 'Deriva la potencia externa 4(3x² + 5)³ y multiplícala por la derivada interna (6x).',
              pasosExplicativos: ['Derivada externa: 4(3x² + 5)³.', 'Derivada interna: d/dx(3x² + 5) = 6x.', 'Producto: 24x(3x² + 5)³.'],
              solucionFinal: 'f\'(x) = 24x(3x² + 5)³'
            },
            {
              numero: 3,
              nivel: nivel3,
              enunciado: 'Se dispone de 80 metros de malla para cercar un jardín rectangular en Medellín. Halla las dimensiones del rectángulo que maximizan el área encerrada y calcula dicha área máxima.',
              pistaDUA: 'Con 2x + 2y = 80 ⇒ y = 40 - x. Maximiza la función Área A(x) = x(40 - x) = 40x - x² derivando e igualando a cero.',
              pasosExplicativos: [
                'Función objetivo: A(x) = 40x - x².',
                'Derivar e igualar a cero: A\'(x) = 40 - 2x = 0 ⇒ x = 20 m.',
                'Como y = 40 - 20 = 20 m, el área máxima es 20 m × 20 m = 400 m².'
              ],
              solucionFinal: 'Dimensiones óptimas: 20 m × 20 m; Área máxima: 400 m².'
            }
          ]
    };
  }

  // =========================================================================
  // 23. ESTADÍSTICA Y PROBABILIDAD (1° a 11°): TABLAS, MEDIDAS, CONTEO, PROBABILIDAD
  // =========================================================================
  if (
    asignatura === 'Estadística' ||
    t.includes('datos') ||
    t.includes('frecuencia') ||
    t.includes('pictograma') ||
    t.includes('gráfico') ||
    t.includes('estadístic') ||
    t.includes('media') ||
    t.includes('mediana') ||
    t.includes('moda') ||
    t.includes('cuartil') ||
    t.includes('percentil') ||
    t.includes('dispersión') ||
    t.includes('rango') ||
    t.includes('varianza') ||
    t.includes('correlación') ||
    t.includes('regresión') ||
    t.includes('ipc') ||
    t.includes('probabilidad') ||
    t.includes('azar') ||
    t.includes('conteo') ||
    t.includes('permutac') ||
    t.includes('combinac') ||
    t.includes('factorial') ||
    t.includes('espacio muestral') ||
    t.includes('bayes') ||
    t.includes('esperanza') ||
    t.includes('binomial')
  ) {
    const esProbabilidad =
      t.includes('probabilidad') ||
      t.includes('azar') ||
      t.includes('conteo') ||
      t.includes('permutac') ||
      t.includes('combinac') ||
      t.includes('factorial') ||
      t.includes('espacio muestral') ||
      t.includes('bayes') ||
      t.includes('esperanza') ||
      t.includes('binomial') ||
      t.includes('árbol');

    const esDispersion =
      t.includes('dispersión') ||
      t.includes('rango') ||
      t.includes('varianza') ||
      t.includes('desviación') ||
      t.includes('cuartil') ||
      t.includes('percentil') ||
      t.includes('caja y bigotes') ||
      t.includes('correlación') ||
      t.includes('regresión') ||
      t.includes('ipc') ||
      t.includes('índice');

    if (esProbabilidad) {
      return {
        exploracionMedellin: 'Analizar la cantidad de rutas y combinaciones de transporte integrado en Medellín y calcular probabilidades en sorteos y estudios escolares de la IE Rafael Uribe Uribe.',
        concepto: `Estudio de "${tituloOriginal}". El principio multiplicativo multiplica las opciones de etapas sucesivas. En las permutaciones sí importa el orden de selección, mientras que en las combinaciones no importa el orden. La Regla de Laplace define P(A) = Casos Favorables / Casos Totales.`,
        formulas: [
          'Regla de Laplace: P(A) = Casos Favorables / Casos Totales  |  Complemento: P(A\') = 1 - P(A)',
          'Principio Multiplicativo: N = n₁ × n₂ × ... × n_k  |  Factorial: n! = n × (n-1) × ... × 1',
          'Permutación: P(n, r) = n! / (n - r)!  |  Combinación: C(n, r) = n! / [r! · (n - r)!]'
        ],
        ejemploPasoAPaso: {
          enunciado: 'En una urna del salón hay 5 balotas rojas, 3 azules y 2 verdes. Si se extrae una balota al azar: 1) ¿Cuál es la probabilidad de que sea azul? 2) ¿Cuál es la probabilidad de que NO sea verde?',
          pasos: [
            'Paso 1: Contar el total de casos posibles: N = 5 + 3 + 2 = 10 balotas.',
            'Paso 2: Probabilidad de azul: P(Azul) = 3 / 10 = 0,3 = 30%.',
            'Paso 3: Probabilidad de verde: P(Verde) = 2 / 10 = 0,2. Por suceso complementario, P(No Verde) = 1 - 0,2 = 0,8 = 80%.'
          ],
          solucionFinal: 'P(Azul) = 30% y P(No Verde) = 80%.'
        },
        ejerciciosPracticos: [
          {
            numero: 1,
            nivel: 'Fácil',
            enunciado: 'Al lanzar un dado común de 6 caras numeradas del 1 al 6, ¿cuál es la probabilidad de obtener un número par mayor que 2?',
            pistaDUA: 'Lista el espacio muestral S = {1, 2, 3, 4, 5, 6} e identifica cuáles cumplen ambas condiciones.',
            pasosExplicativos: [
              'Casos totales = 6.',
              'Números pares mayores que 2: {4, 6} → 2 casos favorables.',
              'P = 2 / 6 = 1 / 3 ≈ 33,3%.'
            ],
            solucionFinal: '1/3 (33,3%)'
          },
          {
            numero: 2,
            nivel: 'Intermedio',
            enunciado: 'En un curso de la IE Rafael Uribe Uribe hay 6 candidatos para elegir un comité de 3 representantes estudiantiles (sin jerarquía de cargos). ¿De cuántas formas distintas se puede elegir el comité?',
            pistaDUA: 'Como no importa el orden, aplica la fórmula de Combinación C(6, 3).',
            pasosExplicativos: [
              'C(6, 3) = 6! / (3! · 3!) = (6 × 5 × 4) / (3 × 2 × 1).',
              'C(6, 3) = 120 / 6 = 20 formas distintas.'
            ],
            solucionFinal: 'Se puede elegir de 20 formas distintas.'
          },
          {
            numero: 3,
            nivel: nivel3,
            enunciado: 'Se lanzan simultáneamente dos monedas y un dado de 6 caras. ¿Cuántos elementos tiene el espacio muestral y cuál es la probabilidad de obtener exactamente dos caras y el número 5?',
            pistaDUA: 'Usa el principio multiplicativo para el total de casos: 2 × 2 × 6.',
            pasosExplicativos: [
              'Total de resultados posibles: 2 × 2 × 6 = 24 resultados.',
              'Caso favorable único: (Cara, Cara, 5) → 1 solo caso.',
              'Probabilidad: P = 1 / 24.'
            ],
            solucionFinal: 'Espacio muestral de 24 elementos y probabilidad de 1/24.'
          }
        ]
      };
    }

    if (esDispersion) {
      return {
        exploracionMedellin: 'Comparar la regularidad y dispersión en los puntajes de simulacros académicos y las mediciones ambientales del SIATA en el Valle de Aburrá.',
        concepto: `Estudio de "${tituloOriginal}". Mientras las medidas de tendencia central buscan el centro de los datos, las medidas de posición (cuartiles, percentiles) dividen la muestra ordenada y las medidas de dispersión (rango, varianza s², desviación estándar s y coeficiente de variación CV) cuantifican la homogeneidad del grupo.`,
        formulas: [
          'Rango: R = X_máx - X_mín  |  Rango Intercuartílico: RIC = Q₃ - Q₁',
          'Varianza: s² = Σ(x_i - x̄)² / n  |  Desviación Estándar: s = √(s²)',
          'Coeficiente de Variación: CV = (s / x̄) × 100% (Homogéneo si CV < 15%)'
        ],
        ejemploPasoAPaso: {
          enunciado: 'Las edades de 5 integrantes de un semillero de investigación escolar son: 12, 14, 15, 16 y 18 años. Calcular la media (x̄), el rango, la varianza y la desviación estándar.',
          pasos: [
            'Paso 1: Calcular la media: x̄ = (12 + 14 + 15 + 16 + 18) / 5 = 75 / 5 = 15 años.',
            'Paso 2: Calcular el rango: R = 18 - 12 = 6 años.',
            'Paso 3: Suma de cuadrados de desviaciones respecto a 15: (-3)² + (-1)² + 0² + 1² + 3² = 9 + 1 + 0 + 1 + 9 = 20.',
            'Paso 4: Varianza poblacional: σ² = 20 / 5 = 4; Desviación estándar: σ = √4 = 2 años.'
          ],
          solucionFinal: 'Media = 15 años, Rango = 6 años, Varianza = 4 y Desviación estándar = 2 años.'
        },
        ejerciciosPracticos: [
          {
            numero: 1,
            nivel: 'Fácil',
            enunciado: 'Halla el rango y los cuartiles Q₁, Q₂ (mediana) y Q₃ del conjunto ordenado de 7 datos: {10, 12, 14, 18, 20, 22, 25}.',
            pistaDUA: 'Q₂ es el dato central (posición 4), Q₁ es el central de la primera mitad y Q₃ el de la segunda mitad.',
            pasosExplicativos: [
              'Rango = 25 - 10 = 15.',
              'Q₂ (posición 4) = 18; Q₁ (posición 2) = 12; Q₃ (posición 6) = 22.'
            ],
            solucionFinal: 'Rango = 15, Q₁ = 12, Q₂ = 18 y Q₃ = 22.'
          },
          {
            numero: 2,
            nivel: 'Intermedio',
            enunciado: 'El curso 8°A tiene un promedio de 4,0 con desviación estándar de 0,2; el curso 8°B tiene promedio de 4,0 con desviación estándar de 0,8. Calcula el Coeficiente de Variación (CV) de cada curso e indica cuál es más homogéneo.',
            pistaDUA: 'Aplica CV = (s / x̄) × 100%.',
            pasosExplicativos: [
              'CV(8°A) = (0,2 / 4,0) × 100% = 5%.',
              'CV(8°B) = (0,8 / 4,0) × 100% = 20%.',
              'El curso 8°A es mucho más homogéneo por tener menor CV.'
            ],
            solucionFinal: 'CV(8°A) = 5%, CV(8°B) = 20%; el curso 8°A es más homogéneo.'
          },
          {
            numero: 3,
            nivel: nivel3,
            enunciado: 'El precio de un producto de la canasta familiar en Medellín pasó de $8.000 en el año base a $9.200 este año. ¿Cuál es el Número Índice Simple y la variación porcentual de inflación?',
            pistaDUA: 'Divide el precio actual entre el precio base y multiplica por 100.',
            pasosExplicativos: [
              'Índice = (9.200 / 8.000) × 100 = 1,15 × 100 = 115.',
              'Inflación porcentual: 115 - 100 = +15%.'
            ],
            solucionFinal: 'Número Índice = 115 (incremento del 15%).'
          }
        ]
      };
    }

    // Tablas de frecuencia, gráficos y medidas de tendencia central (Media, Mediana, Moda)
    return {
      exploracionMedellin: 'Encuestar a los estudiantes de la IE Rafael Uribe Uribe sobre su deporte favorito y el tiempo de desplazamiento escolar en Medellín, organizando los datos en tablas de frecuencia y calculando media, mediana y moda.',
      concepto: `Estudio de "${tituloOriginal}". La frecuencia absoluta (f_i) cuenta cuántas veces se repite un dato; la frecuencia relativa (f_r = f_i / N) indica su proporción y multiplicada por 100 da el porcentaje. La Media es el promedio aritmético, la Mediana es el dato central ordenado y la Moda es el dato de mayor frecuencia.`,
      formulas: [
        'Frecuencia Relativa: f_r = f_i / N  |  Porcentaje: % = f_r × 100%  |  Ángulo circular: α = f_r × 360°',
        'Media Aritmética: x̄ = (x₁ + x₂ + ... + x_n) / N',
        'Moda: Valor con mayor frecuencia f_i  |  Mediana: Valor central con los datos ordenados de menor a mayor'
      ],
      ejemploPasoAPaso: {
        enunciado: 'Las notas obtenidas por un estudiante en 5 talleres de matemáticas fueron: 3,5 ; 4,0 ; 4,5 ; 4,0 y 5,0. Calcular la moda, la mediana y la media aritmética.',
        pasos: [
          'Paso 1: Ordenar los datos de menor a mayor: 3,5 - 4,0 - 4,0 - 4,5 - 5,0.',
          'Paso 2: Identificar la Moda (dato que más se repite): 4,0 (aparece 2 veces).',
          'Paso 3: Identificar la Mediana (dato central en la posición 3): 4,0.',
          'Paso 4: Calcular la Media sumando los 5 datos y dividiendo entre 5: (3,5 + 4,0 + 4,0 + 4,5 + 5,0) / 5 = 21,0 / 5 = 4,2.'
        ],
        solucionFinal: 'Moda = 4,0 ; Mediana = 4,0 y Media = 4,2.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'En una encuesta a 50 estudiantes sobre su fruta favorita, 15 eligieron el mango. ¿Cuál es la frecuencia relativa, el porcentaje y el ángulo en un diagrama circular para el mango?',
          pistaDUA: 'Divide 15 entre 50 para hallar la frecuencia relativa.',
          pasosExplicativos: [
            'Frecuencia relativa: f_r = 15 / 50 = 0,30.',
            'Porcentaje: 0,30 × 100% = 30%.',
            'Ángulo central: 0,30 × 360° = 108°.'
          ],
          solucionFinal: 'f_r = 0,30 ; Porcentaje = 30% y Ángulo = 108°.'
        },
        {
          numero: 2,
          nivel: 'Intermedio',
          enunciado: 'En un pictograma escolar cada símbolo de balón equivale a 4 goles. Si el equipo de 6°A tiene 5 símbolos dibujados y el de 6°B tiene 3 símbolos y medio, ¿cuántos goles anotó cada equipo y cuántos en total?',
          pistaDUA: 'Multiplica la cantidad de símbolos por la escala (4 goles).',
          pasosExplicativos: [
            'Goles de 6°A: 5 × 4 = 20 goles.',
            'Goles de 6°B: 3,5 × 4 = 14 goles.',
            'Total entre ambos: 20 + 14 = 34 goles.'
          ],
          solucionFinal: '6°A anotó 20 goles, 6°B anotó 14 goles y en total anotaron 34 goles.'
        },
        {
          numero: 3,
          nivel: nivel3,
          enunciado: 'El promedio de 4 exámenes de un estudiante es 3,8. ¿Qué nota debe sacar en el quinto examen para que su promedio final suba exactamente a 4,0?',
          pistaDUA: 'Para que el promedio de 5 notas sea 4,0, la suma de las 5 notas debe ser 5 × 4,0 = 20,0.',
          pasosExplicativos: [
            'Suma actual de las 4 notas: 4 × 3,8 = 15,2.',
            'Suma necesaria para 5 notas con media 4,0: 5 × 4,0 = 20,0.',
            'Nota faltante: 20,0 - 15,2 = 4,8.'
          ],
          solucionFinal: 'Debe obtener una nota de 4,8 en el quinto examen.'
        }
      ]
    };
  }

  // =========================================================================
  // 24. PATRONES, SECUENCIAS, SISTEMAS DE NUMERACIÓN Y TALLERES INTEGRADORES
  // =========================================================================
  return {
    exploracionMedellin: `Aplicación integradora de "${tituloOriginal}" en situaciones cotidianas de movilidad, comercio y arquitectura de la ciudad de Medellín y la Comuna 12.`,
    concepto: `Consolidación curricular de "${tituloOriginal}". Integra el razonamiento cuantitativo, la identificación de regularidades numéricas y geométricas y la resolución estructurada de problemas paso a paso.`,
    formulas: [
      'Término general de una progresión lineal: a_n = a₁ + (n - 1)·d',
      'Modelación y verificación: Datos → Planteamiento → Operación → Comprobación'
    ],
    ejemploPasoAPaso: {
      enunciado: `En una secuencia de ahorro estudiantil en Medellín, un alumno guarda $2.000 en la semana 1, $3.500 en la semana 2, $5.000 en la semana 3 y así sucesivamente aumentando un valor constante. ¿Cuánto ahorrará en la semana 8?`,
      pasos: [
        'Paso 1: Identificar el primer término a₁ = 2.000 y la diferencia constante d = 3.500 - 2.000 = 1.500.',
        'Paso 2: Aplicar la regla del término n-ésimo para n = 8: a₈ = 2.000 + (8 - 1) × 1.500.',
        'Paso 3: Calcular: a₈ = 2.000 + 7 × 1.500 = 2.000 + 10.500 = $12.500 COP.'
      ],
      solucionFinal: 'En la semana 8 ahorrará exactamente $12.500 COP.'
    },
    ejerciciosPracticos: [
      {
        numero: 1,
        nivel: 'Fácil',
        enunciado: 'Encuentra el patrón de cambio y los dos términos siguientes de la secuencia numérica: 4, 11, 18, 25, 32, __, __.',
        pistaDUA: 'Resta dos términos consecutivos para encontrar cuánto se suma en cada paso.',
        pasosExplicativos: [
          'Patrón de cambio: 11 - 4 = +7 (se suma 7 en cada paso).',
          'Siguientes términos: 32 + 7 = 39  y  39 + 7 = 46.'
        ],
        solucionFinal: 'El patrón es sumar 7; los términos siguientes son 39 y 46.'
      },
      {
        numero: 2,
        nivel: 'Intermedio',
        enunciado: 'Un teatro de Medellín tiene 12 sillas en la primera fila, 15 en la segunda, 18 en la tercera y así sucesivamente. ¿Cuántas sillas tiene la fila número 10?',
        pistaDUA: 'Usa a_n = a₁ + (n - 1)·d con a₁ = 12, d = 3 y n = 10.',
        pasosExplicativos: [
          'a₁₀ = 12 + (10 - 1) × 3.',
          'a₁₀ = 12 + 9 × 3 = 12 + 27 = 39 sillas.'
        ],
        solucionFinal: 'La fila 10 tiene 39 sillas.'
      },
      {
        numero: 3,
        nivel: nivel3,
        enunciado: 'En una prueba diagnóstica institucional de 20 preguntas, cada respuesta correcta suma 5 puntos y cada incorrecta resta 2 puntos. Si un estudiante respondió todas las preguntas y obtuvo 72 puntos, ¿cuántas respuestas correctas tuvo?',
        pistaDUA: 'Si todas fueran correctas tendría 100 puntos; cada incorrecta le hace perder 5 + 2 = 7 puntos respecto al máximo.',
        pasosExplicativos: [
          'Puntaje máximo posible: 20 × 5 = 100 puntos.',
          'Puntos perdidos: 100 - 72 = 28 puntos.',
          'Preguntas incorrectas: 28 ÷ 7 = 4 incorrectas ⇒ Correctas: 20 - 4 = 16 correctas.',
          'Comprobación: 16(5) - 4(2) = 80 - 8 = 72 puntos.'
        ],
        solucionFinal: 'Tuvo 16 respuestas correctas y 4 incorrectas.'
      }
    ]
  };
}
