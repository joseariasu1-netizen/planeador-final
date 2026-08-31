import { PlanSemana } from '../types';

export const mallaSecundaria8y9: {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
} = {
  // ==========================================
  // GRADO OCTAVO (8°)
  // ==========================================
  '8°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosM8P1 = [
          'Expresiones Algebraicas, Variables y Polinomios: Clasificación y Grado (Semana 1: Concepto)',
          'Expresiones Algebraicas y Polinomios: Reducción de Términos Semejantes y Valor Numérico (Semana 2: Ejercitación)',
          'Adición y Sustracción de Polinomios Algebraicos: Planteamiento y Estructura (Semana 1)',
          'Adición y Sustracción de Polinomios: Supresión de Signos de Agrupación y Problemas Reales (Semana 2)',
          'Multiplicación de Polinomios: Monomios por Polinomios y Ley de Exponentes (Semana 1)',
          'Multiplicación de Polinomios: Polinomio por Polinomio y Modelación de Áreas en Medellín (Semana 2)',
          'Productos Notables I: Cuadrado de un Binomio (a ± b)² - Interpretación Geométrica (Semana 1)',
          'Productos Notables I: Cuadrado de un Binomio - Ejercitación y Problemas de Aplicación (Semana 2)',
          'Productos Notables II: Producto de la Suma por la Diferencia (a + b)(a - b) (Semana 1)',
          'Productos Notables II: Cubo de un Binomio (a ± b)³ y Productos Combinados (Semana 2)',
          'División de Polinomios: División Sintética y Regla de Ruffini (Semana 1)',
          'División de Polinomios: Teorema del Residuo y Aplicaciones Algebraicas (Semana 2)',
          'Repaso General de Polinomios, Nivelación y Evaluación Acumulativa P1 Matemáticas 8°'
        ];
        return {
          semana: i + 1,
          titulo: titulosM8P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Variacional y Sistemas Algebraicos',
          dba: 'DBA 1: Identifica y utiliza relaciones algebraicas para generalizar patrones numéricos y geométricos.',
          competencia: 'Pensamiento Variacional y Álgebra',
          evidencia: 'SABER: Reconoce la estructura de polinomios y productos notables. HACER: Resuelve operaciones combinadas y modela áreas. SER: Participa con respeto y perseverancia.',
          dua: {
            representacion: 'Álgebra tiles digitales y bloques geométricos con código de colores para visualizar productos notables.',
            expresion: 'Construcción física y gráfica de áreas cuadradas y rectangulares que demuestran (a+b)²',
            implicacion: 'Modelación de planos de viviendas y locales comerciales en el barrio Robledo.'
          },
          exploracionMedellin: 'Modelar el área de una plazoleta rectangular en el Parque de los Deseos mediante el producto de binomios (x + 6)(x + 4).',
          estructuracionTeorica: {
            concepto: `Desarrollo temático de '${titulosM8P1[i]}'. El álgebra permite generalizar patrones aritméticos y modelar relaciones cuantitativas variables.`,
            formulas: [
              '(a + b)² = a² + 2ab + b²',
              '(a - b)² = a² - 2ab + b²',
              '(a + b)(a - b) = a² - b²',
              '(a + b)³ = a³ + 3a²b + 3ab² + b³'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Desarrollar el producto notable para el área de un terreno cuadrado de lado (3x + 5) metros en la Comuna 12.',
              pasos: [
                'Paso 1: Aplicar la regla del cuadrado de un binomio: (3x + 5)² = (3x)² + 2(3x)(5) + (5)²',
                'Paso 2: Elevar al cuadrado el primer término: (3x)² = 9x²',
                'Paso 3: Calcular el término intermedio: 2 × 3x × 5 = 30x',
                'Paso 4: Elevar al cuadrado el segundo término: 5² = 25'
              ],
              solucionFinal: 'El área polinómica total es (9x² + 30x + 25) m².'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, resolver 4 ejercicios de productos notables y comprobarlos geométricamente con recortes de cartulina.',
            tareaBarrial: 'Medir el largo y ancho de una habitación en casa y plantear su área como una expresión algebraica ficticia (x + a)(x + b).'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM8P2 = [
          'Factorización I: Factor Común Monomio y Polinomio (Semana 1: Identificación y Método)',
          'Factorización I: Factor Común por Agrupación de Términos (Semana 2: Ejercitación Guiada)',
          'Factorización II: Diferencia de Cuadrados Perfectos a² - b² = (a+b)(a-b) (Semana 1: Concepto)',
          'Factorización II: Casos Combinados de Factor Común y Diferencia de Cuadrados (Semana 2: Aplicación)',
          'Factorización III: Trinomio Cuadrado Perfecto a² ± 2ab + b² = (a ± b)² (Semana 1: Identificación)',
          'Factorización III: Trinomio Cuadrado Perfecto por Adición y Sustracción (Semana 2: Ejercitación)',
          'Factorización IV: Trinomio de la Forma x² + bx + c (Semana 1: Método de los Factores p y q)',
          'Factorización IV: Trinomio x² + bx + c en Problemas de Áreas y Geometría (Semana 2: Afianzamiento)',
          'Factorización V: Trinomio de la Forma ax² + bx + c (Semana 1: Método de Aspa Simple y Descomposición)',
          'Factorización V: Trinomio ax² + bx + c y Casos Especiales (Semana 2: Ejercitación Intensiva)',
          'Factorización VI: Suma y Diferencia de Cubos Perfectos a³ ± b³ (Semana 1: Fórmulas y Reglas)',
          'Factorización VI: Taller Integrador de Todos los Casos de Factorización (Semana 2: Consolidación)',
          'Repaso General de Métodos de Factorización y Evaluación Acumulativa P2 Matemáticas 8°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM8P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Variacional y Sistemas Algebraicos',
          dba: 'DBA 2: Simplifica expresiones racionales y factoriza polinomios aplicando propiedades algebraicas.',
          competencia: 'Pensamiento Variacional y Factorización',
          evidencia: 'SABER: Identifica el caso de factorización correspondiente. HACER: Descompone polinomios en factores primos. SER: Valora el trabajo metódico y colaborativo.',
          dua: {
            representacion: 'Diagrama de flujo visual con preguntas guía para identificar qué caso de factorización aplicar.',
            expresion: 'Resolución por pasos estructurados en pizarras individuales o papel cuadriculado.',
            implicacion: 'Juegos de emparejamiento entre trinomios expandidos y binomios factorizados.'
          },
          exploracionMedellin: 'Factorizar el trinomio x² + 9x + 20 que describe la distribución de puestos de venta en la Plaza Minorista de Medellín.',
          estructuracionTeorica: {
            concepto: `Estudio temático de '${titulosM8P2[i]}'. Factorizar es transformar una suma de términos algebraicos en una multiplicación equivalente de factores irreducibles.`,
            formulas: [
              'Factor Común: ax + ay = a(x + y)',
              'Diferencia de Cuadrados: a² - b² = (a + b)(a - b)',
              'TCP: a² ± 2ab + b² = (a ± b)²',
              'Trinomio x²+bx+c: x² + (p+q)x + pq = (x + p)(x + q)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Factorizar completamente el trinomio 2x² + 7x + 3.',
              pasos: [
                'Paso 1: Multiplicar y dividir por el coeficiente principal a = 2: [2(2x²) + 7(2x) + 2(3)] / 2',
                'Paso 2: Expresar en términos de (2x): [(2x)² + 7(2x) + 6] / 2',
                'Paso 3: Buscar dos números que sumados den 7 y multiplicados den 6: son 6 y 1.',
                'Paso 4: Factorizar el numerador: (2x + 6)(2x + 1) / 2',
                'Paso 5: Extraer factor común 2 del primer binomio y simplificar: 2(x + 3)(2x + 1) / 2 = (x + 3)(2x + 1)'
              ],
              solucionFinal: 'La factorización resultante es (x + 3)(2x + 1).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 5 ejercicios en equipos de 3 aplicando el árbol de decisión de factorización.',
            tareaBarrial: 'Comprobar algebraicamente el producto de las edades de dos familiares expresadas como binomios.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM8P3 = [
          'Fracciones Algebraicas I: Concepto, Dominio de Definición y Simplificación (Semana 1)',
          'Fracciones Algebraicas I: Multiplicación y División de Expresiones Racionales (Semana 2)',
          'Fracciones Algebraicas II: Adición y Sustracción con Denominadores Homogéneos y Heterogéneos (Semana 1)',
          'Fracciones Algebraicas II: Operaciones Combinadas y Fracciones Complejas (Semana 2)',
          'Ecuaciones Lineales Enteras y Fraccionarias: Despeje y Propiedades de la Igualdad (Semana 1)',
          'Ecuaciones Lineales: Modelación y Resolución de Problemas Cotidianos en Medellín (Semana 2)',
          'Inecuaciones Lineales: Desigualdades, Propiedades de Orden e Intervalos en la Recta (Semana 1)',
          'Inecuaciones Lineales: Resolución de ax + b > c y Aplicaciones en Restricciones (Semana 2)',
          'Geometría: Triángulos y Teorema de Pitágoras - Deducción y Demostración (Semana 1)',
          'Geometría: Teorema de Pitágoras en Problemas Reales de Construcción y Topografía (Semana 2)',
          'Geometría: Congruencia y Semejanza de Triángulos - Criterios y Teorema de Tales (Semana 1)',
          'Geometría: Teorema de Tales en Medición Indirecta de Alturas y Sombras (Semana 2)',
          'Taller de Entrenamiento Saber 8°: Razonamiento Cuantitativo y Resolución de Problemas',
          'Repaso General, Evaluación Acumulativa Final P3 y Cierre del Grado Octavo'
        ];
        return {
          semana: i + 27,
          titulo: titulosM8P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: i < 8 ? 'Variacional y Sistemas Algebraicos' : (i < 12 ? 'Espacial y Sistemas Geométricos' : 'Aleatorio y Sistemas de Datos'),
          dba: 'DBA 3: Resuelve ecuaciones e inecuaciones lineales y aplica el Teorema de Pitágoras en problemas de medición.',
          competencia: 'Pensamiento Variacional y Geométrico',
          evidencia: 'SABER: Comprende el concepto de inecuación y semejanza. HACER: Resuelve inecuaciones y calcula longitudes con Pitágoras. SER: Escucha y trabaja en equipo.',
          dua: {
            representacion: 'Intervalos en la recta numérica con colores y esquemas de triángulos en GeoGebra.',
            expresion: 'Planteamiento simbólico justificado paso a paso en formato digital o manual.',
            implicacion: 'Cálculo de pendientes en las calles de la comuna 12 de Medellín.'
          },
          exploracionMedellin: 'Calcular la longitud de una rampa accesible para personas con movilidad reducida en una estación del Tranvía de Ayacucho.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulosM8P3[i]}'. Las ecuaciones, inecuaciones y teoremas geométricos permiten cuantificar restricciones y distancias en el entorno.`,
            formulas: [
              'Teorema de Pitágoras: a² + b² = c²',
              'Inecuación lineal: ax + b > c ⇒ ax > c - b ⇒ x > (c - b)/a (si a > 0)',
              'Teorema de Tales: a / a\' = b / b\''
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un poste de alumbrado de 8 metros proyecta una sombra de 6 metros en el barrio La América. ¿Cuál es la distancia en línea recta desde la punta del poste hasta el extremo de la sombra?',
              pasos: [
                'Paso 1: Identificar el triángulo rectángulo formado: cateto a = 8 m, cateto b = 6 m, hipotenusa c = ?',
                'Paso 2: Aplicar Teorema de Pitágoras: c² = a² + b² = 8² + 6²',
                'Paso 3: Calcular potencias: c² = 64 + 36 = 100',
                'Paso 4: Extraer raíz cuadrada: c = √100 = 10 metros'
              ],
              solucionFinal: 'La distancia en línea recta es exactamente 10 metros.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 4 problemas de aplicación de Pitágoras y Tales en grupos de trabajo.',
            tareaBarrial: 'Medir la sombra de un árbol o poste cercano a casa y estimar la hipotenusa imaginaria.'
          }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosE8P1 = [
          'Estadística Descriptiva: Variables Cuantitativas y Población (Semana 1)',
          'Organización de Datos Continuos: Regla de Sturges e Intervalos (Semana 2)',
          'Tablas de Frecuencia para Datos Agrupados: Frecuencia Absoluta y Relativa (Semana 1)',
          'Tablas de Frecuencia Agrupadas: Frecuencias Acumuladas y Marcas de Clase (Semana 2)',
          'Representaciones Gráficas: Construcción de Histogramas (Semana 1)',
          'Representaciones Gráficas: Polígonos de Frecuencia y Ojivas Porcentuales (Semana 2)',
          'Medidas de Tendencia Central Agrupadas: Media Aritmética Ponderada (Semana 1)',
          'Medidas de Tendencia Central Agrupadas: Mediana e Intervalo Mediano (Semana 2)',
          'Medidas de Tendencia Central Agrupadas: Moda y Clase Modal (Semana 1)',
          'Análisis Comparativo y Sesgo de Distribuciones Estadísticas (Semana 2)',
          'Uso de Hojas de Cálculo (Excel/Calc) para Tabulación Estadística (Semana 1)',
          'Taller Práctico de Análisis de Datos Institucionales de la RUU (Semana 2)',
          'Evaluación Acumulativa P1 Estadística 8°'
        ];
        return {
          semana: i + 1,
          titulo: titulosE8P1[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 5: Diseña experimentos aleatorios y analiza datos agrupados mediante medidas de tendencia central.',
          competencia: 'Pensamiento Aleatorio y Estadística',
          evidencia: 'SABER: Interpreta datos en tablas y gráficos agrupados. HACER: Calcula la media y mediana agrupadas. SER: Demuestra actitud positiva.',
          dua: { representacion: 'Hojas de cálculo dinámicas y gráficos interactivos.', expresion: 'Informe escrito o presentación en cartelera.', implicacion: 'Análisis de movilidad escolar.' },
          exploracionMedellin: 'Agrupar los tiempos de viaje de los estudiantes hacia la institución en intervalos de 10 minutos.',
          estructuracionTeorica: {
            concepto: 'La estadística para datos agrupados permite procesar muestras amplias continuas dividiéndolas en intervalos de clase.',
            formulas: ['Marca de clase: x_i = (L_inf + L_sup)/2', 'Media agrupada: x̄ = Σ(x_i · f_i) / N'],
            ejemploPasoAPaso: {
              enunciado: 'Para N = 40 y Σ(x_i · f_i) = 6400, calcular la media.',
              pasos: ['x̄ = 6400 / 40 = 160'],
              solucionFinal: 'La media es 160.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Construir una tabla agrupada en parejas.', tareaBarrial: 'Registrar edades de 15 vecinos.' }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosE8P2 = [
          'Medidas de Dispersión: Concepto de Variabilidad y Rango (Semana 1)',
          'Medidas de Dispersión: Desviación Media y Desviación Respecto a la Media (Semana 2)',
          'Varianza Muestral y Poblacional: Fórmulas y Procedimiento (Semana 1)',
          'Desviación Estándar: Cálculo e Interpretación Práctica (Semana 2)',
          'Coeficiente de Variación (CV): Comparación de Homogeneidad de Grupos (Semana 1)',
          'Medidas de Posición: Cuartiles (Q1, Q2, Q3) en Datos Agrupados (Semana 2)',
          'Deciles y Percentiles: Aplicación en Resultados Saber (Semana 1)',
          'Diagramas de Caja y Bigotes (Boxplot): Interpretación y Outliers (Semana 2)',
          'Distribución Bivariada y Diagramas de Dispersión (Semana 1)',
          'Asociación Lineal Intuitiva y Tendencias en Datos Urbanos (Semana 2)',
          'Proyecto Estadístico de Aula: Recolección y Depuración (Semana 1)',
          'Proyecto Estadístico de Aula: Informe y Socialización (Semana 2)',
          'Evaluación Acumulativa P2 Estadística 8°'
        ];
        return {
          semana: i + 14,
          titulo: titulosE8P2[i],
          tiempoEstimado: '60 minutos (1 hora semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 6: Utiliza medidas de dispersión y posición para comparar conjuntos de datos.',
          competencia: 'Pensamiento Aleatorio',
          evidencia: 'SABER: Explica la varianza y percentiles. HACER: Construye diagramas de caja y calcula la desviación estándar. SER: Comunica con claridad y rigor.',
          dua: { representacion: 'Boxplots interactivos', expresion: 'Póster estadístico', implicacion: 'Monitoreo de calidad del aire SIATA Medellín' },
          exploracionMedellin: 'Comparar la dispersión en los tiempos de recorrido de buses alimentadores del Metro.',
          estructuracionTeorica: {
            concepto: 'Las medidas de dispersión cuantifican qué tan concentrados o alejados están los datos respecto a su media.',
            formulas: ['s² = Σ f_i(x_i - x̄)² / (N - 1)', 's = √(s²)', 'CV = (s / x̄) × 100%'],
            ejemploPasoAPaso: {
              enunciado: 'Promedio = 80 puntos, desviación estándar = 8 puntos. Hallar CV.',
              pasos: ['CV = (8 / 80) × 100% = 10% (Datos altamente homogéneos)'],
              solucionFinal: 'El CV es 10%.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de boxplot en parejas.', tareaBarrial: 'Comparar el consumo de energía de 3 bimestres.' }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosE8P3 = [
          'Principios de Conteo: Principio Multiplicativo y Diagramas de Árbol (Semana 1)',
          'Principios de Conteo: Principio Aditivo y Conjuntos Excluyentes (Semana 2)',
          'Notación Factorial (n!) y Propiedades Fundamentales (Semana 1)',
          'Permutaciones Simples: Fórmulas y Orden de Elementos (Semana 2)',
          'Combinaciones Simples: Diferencia Clave entre Importar o No el Orden (Semana 1)',
          'Combinaciones: Aplicación en Selección de Muestras y Equipos (Semana 2)',
          'Probabilidad Clásica (Regla de Laplace) y Propiedades (Semana 1)',
          'Probabilidad del Evento Complementario: P(A\') = 1 - P(A) (Semana 2)',
          'Regla de la Adición para Eventos Mutuamente Excluyentes y Compatibles (Semana 1)',
          'Probabilidad Condicional Elemental e Independencia de Eventos (Semana 2)',
          'Extracciones Con Reemplazo y Sin Reemplazo en Urnas (Semana 1)',
          'Tablas de Contingencia y Probabilidades Cruzadas (Semana 2)',
          'Taller Integrador de Conteo y Probabilidad Tipo Saber 8°',
          'Evaluación Acumulativa Final P3 Estadística 8°'
        ];
        return {
          semana: i + 27,
          titulo: titulosE8P3[i],
          tiempoEstimado: '60 minutos (1 hora semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 7: Reconoce y aplica técnicas de conteo y conceptos de probabilidad en situaciones problema.',
          competencia: 'Pensamiento Aleatorio y Probabilidad',
          evidencia: 'SABER: Diferencia permutaciones de combinaciones. HACER: Calcula probabilidades compuestas. SER: Escucha con respeto.',
          dua: { representacion: 'Árboles de decisión interactivos', expresion: 'Formulación simbólica justificada', implicacion: 'Juegos de mesa estratégicos' },
          exploracionMedellin: 'Calcular el número de combinaciones para elegir personero y contralor estudiantil en la IE Rafael Uribe Uribe.',
          estructuracionTeorica: {
            concepto: 'La combinatoria permite contar configuraciones sin enumerarlas una a una.',
            formulas: ['P(n, r) = n! / (n - r)!', 'C(n, r) = n! / [r!(n - r)!]', 'P(A) = Casos Favorables / Casos Totales'],
            ejemploPasoAPaso: {
              enunciado: 'Seleccionar 3 representantes de un grupo de 8 estudiantes.',
              pasos: ['Como el orden no importa: C(8, 3) = 8! / (3! · 5!) = (8 · 7 · 6) / 6 = 56 formas'],
              solucionFinal: '56 formas distintas.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de 5 ejercicios combinatorios.', tareaBarrial: 'Analizar combinaciones de placas vehiculares.' }
        };
      })
    }
  },

  // ==========================================
  // GRADO NOVENO (9°) - SIN DISTANCIA ENTRE DOS PUNTOS (Pasa a 10°)
  // BLOQUES DE 2 SEMANAS PARA PROFUNDIZAR
  // ==========================================
  '9°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosM9P1 = [
          'Números Reales (R): Clasificación (Q e I), Orden y Representación en la Recta (Semana 1: Conceptos)',
          'Números Reales: Operaciones, Aproximación vs Exactitud y Notación Científica (Semana 2: Ejercitación)',
          'Radicación en los Números Reales y Exponentes Racionales: Propiedades Fundamentales (Semana 1)',
          'Radicación en Reales: Operaciones con Radicales, Racionalización y Simplificación (Semana 2)',
          'Sistemas de Ecuaciones Lineales 2x2: Concepto, Modelación Gráfica y Punto de Intersección (Semana 1)',
          'Sistemas 2x2: Método Analítico de Sustitución y Reducción (Eliminación) (Semana 2)',
          'Sistemas 2x2: Método de Igualación y Regla de Cramer (Determinantes 2x2) (Semana 1)',
          'Sistemas 2x2: Modelación y Resolución de Problemas Comerciales y Cotidianos en Medellín (Semana 2)',
          'Sistemas de Ecuaciones 3x3: Planteamiento y Resolución por Eliminación Gaussiana Sencilla (Semana 1)',
          'Ecuación Cuadrática: Concepto, Forma General (ax² + bx + c = 0) y Solución por Factorización (Semana 1)',
          'Ecuación Cuadrática: Fórmula General, Discriminante (Δ = b² - 4ac) y Tipos de Raíces (Semana 2)',
          'Números Complejos: Unidad Imaginaria (i), Representación y Operaciones Básicas (Suma y Multiplicación)',
          'Repaso General de Sistemas y Ecuaciones Cuadráticas, Taller de Consolidación y Evaluación Acumulativa P1'
        ];
        return {
          semana: i + 1,
          titulo: titulosM9P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Variacional y Sistemas Algebraicos',
          dba: 'DBA 1 / DBA 2: Utiliza números reales, expresiones polinómicas y sistemas de ecuaciones lineales y cuadráticas para resolver problemas contextualizados.',
          competencia: 'Pensamiento Variacional y Modelación',
          evidencia: 'SABER: Identifica la diferencia entre exactitud y aproximación en R y comprende la estructura de sistemas 2x2 y cuadráticas. HACER: Resuelve sistemas lineales y ecuaciones cuadráticas aplicando métodos algebraicos. SER: Participa con respeto y perseverancia.',
          dua: {
            representacion: 'Graficadores digitales (GeoGebra) para verificar la intersección de rectas de sistemas 2x2 y la recta real interactiva.',
            expresion: 'Resolución analítica en pasos numerados, mapas conceptuales y justificación argumentada.',
            implicacion: 'Modelación de costos de producción y ventas en microempresas de confección de Medellín.'
          },
          exploracionMedellin: 'Calcular el punto de equilibrio comercial de una cooperativa textil de Guayaquil (Medellín) formulando un sistema de ecuaciones 2x2.',
          estructuracionTeorica: {
            concepto: `Fundamentos de '${titulosM9P1[i]}'. Un sistema de ecuaciones 2x2 modela dos condiciones lineales simultáneas. Su solución única corresponde al punto geométrico (x, y) donde se cruzan ambas rectas.`,
            formulas: [
              'Fórmula cuadrática: x = [-b ± √(b² - 4ac)] / (2a)',
              'Discriminante: Δ = b² - 4ac (Δ > 0: 2 reales; Δ = 0: 1 real doble; Δ < 0: 2 complejas)',
              'Unidad imaginaria: i = √(-1), i² = -1',
              'Determinante: |a b; c d| = ad - bc'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Resolver el sistema 2x2 por reducción: (1) 2x + 3y = 20; (2) 4x - y = 12.',
              pasos: [
                'Paso 1: Multiplicar la ecuación (2) por 3 para igualar coeficientes de y: 3(4x - y) = 3(12) => 12x - 3y = 36.',
                'Paso 2: Sumar verticalmente con la ecuación (1): (2x + 12x) + (3y - 3y) = 20 + 36 => 14x = 56.',
                'Paso 3: Despejar x: x = 56 / 14 = 4.',
                'Paso 4: Sustituir x = 4 en la ecuación (2): 4(4) - y = 12 => 16 - y = 12 => y = 16 - 12 = 4.'
              ],
              solucionFinal: 'La solución del sistema es el punto (4, 4).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, resolver 2 sistemas de ecuaciones 2x2 (uno por sustitución y otro por reducción) y comprobarlos gráficamente en GeoGebra.',
            tareaBarrial: 'Plantear un sistema 2x2 sencillo que relacione los precios de dos productos comprados en la tienda del barrio.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM9P2 = [
          'Función Cuadrática I: Concepto, Ecuación General f(x) = ax² + bx + c y la Parábola (Semana 1: Concepto)',
          'Función Cuadrática I: Vértice V(-b/2a, f(-b/2a)), Eje de Simetría y Gráfica en GeoGebra (Semana 2: Trazado)',
          'Función Cuadrática II: Interceptos con los Ejes (Raíces) y Concavidad (Semana 1)',
          'Función Cuadrática II: Modelación del Movimiento Parabólico y Máximos/Mínimos en Deportes y Física (Semana 2)',
          'Funciones Exponenciales: Concepto, Base, Dominio, Rango y Comportamiento Asintótico (Semana 1)',
          'Funciones Logarítmicas: Propiedades y Relación de Inversa con la Función Exponencial (Semana 2)',
          'Problemas Aplicados de Exponenciales y Logaritmos: Crecimiento Poblacional e Interés Compuesto en Medellín',
          'Teoremas Geométricos en R: Teorema de Pitágoras - Demostración y Cálculo de Lados (Semana 1)',
          'Teorema de Pitágoras: Aplicaciones en Problemas Tridimensionales y Estructuras Urbanas (Semana 2)',
          'Semejanza de Triángulos: Concepto, Razón de Semejanza y Criterios AA, LAL, LLL (Semana 1: Criterios)',
          'Teorema de Tales: Proporcionalidad de Segmentos entre Rectas Paralelas (Semana 2: Teorema)',
          'Teorema de Tales: Aplicaciones Prácticas en Medición Indirecta de Alturas de Edificios y Sombras en Medellín',
          'Repaso General de Funciones y Geometría, Nivelación Formativa y Evaluación Acumulativa P2 Matemáticas 9°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM9P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: i < 7 ? 'Variacional y Sistemas Algebraicos' : 'Espacial y Sistemas Geométricos',
          dba: 'DBA 3 / DBA 4 / DBA 5: Identifica propiedades de funciones cuadráticas, exponenciales y aplica teoremas de semejanza y Pitágoras en situaciones reales.',
          competencia: 'Pensamiento Espacial, Geométrico y Variacional',
          evidencia: 'SABER: Reconoce la diferencia entre los conjuntos numéricos y describe regularidades en triángulos y funciones. HACER: Resuelve operaciones combinadas y clasifica triángulos según sus teoremas. SER: Manifiesta sus dudas con respeto.',
          dua: {
            representacion: 'Visualización dinámica de la parábola y triángulos semejantes en GeoGebra manipulando deslizadores.',
            expresion: 'Cálculo analítico paso a paso con esquemas gráficos y justificación de razones.',
            implicacion: 'Medición real de alturas inaccesibles en el patio de la institución mediante sombras solares.'
          },
          exploracionMedellin: 'Modelar la trayectoria de un lanzamiento de balón en las canchas de la Unidad Deportiva Atanasio Girardot usando una función cuadrática.',
          estructuracionTeorica: {
            concepto: `Estudio temático de '${titulosM9P2[i]}'. El Teorema de Tales y la semejanza permiten calcular dimensiones inaccesibles mediante proporciones exactas.`,
            formulas: [
              'Vértice parábola: x_v = -b / (2a) ; y_v = f(x_v)',
              'Teorema de Tales: AB / A\'B\' = BC / B\'C\'',
              'Semejanza: a/a\' = b/b\' = c/c\' = k (Razón de semejanza)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un árbol proyecta una sombra de 4 metros al mismo tiempo que una vara vertical de 1,5 metros proyecta una sombra de 0,6 metros. Calcular la altura del árbol.',
              pasos: [
                'Paso 1: Plantear la proporción por semejanza de triángulos: Altura Árbol / Sombra Árbol = Altura Vara / Sombra Vara',
                'Paso 2: Sustituir valores: H / 4 = 1,5 / 0,6',
                'Paso 3: Despejar H: H = (1,5 × 4) / 0,6 = 6 / 0,6 = 10 metros'
              ],
              solucionFinal: 'La altura del árbol es de 10 metros.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 3 problemas de aplicación del Teorema de Tales y parábolas en equipos.',
            tareaBarrial: 'Estimar la altura de una vivienda midiendo la sombra propia y la de la fachada.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM9P3 = [
          'Concepto Formal de Función: Dominio, Rango, Variable Dependiente e Independiente (Semana 1)',
          'Función Lineal y Función Afín: Pendiente (m), Intercepto con el Eje Y (b) y Tabla de Valores (Semana 2)',
          'Ecuación Explícita de la Recta y = mx + b y Representación Gráfica en el Plano Cartesiano (Semana 1)',
          'Modelación de Fenómenos Cotidianos mediante Funciones Lineales: Tarifas de Servicios EPM y Transporte (Semana 2)',
          'Sistemas de Ecuaciones Lineales: Interpretación de Tipos de Solución (Única, Infinitas o Incompatible) (Semana 1)',
          'Sistemas Lineales: Modelación y Comparación de Planes de Telefonía y Servicios en Medellín (Semana 2)',
          'Transformaciones Geométricas en el Plano: Traslación y Rotación de Figuras Poligonales (Semana 1)',
          'Transformaciones Geométricas: Simetría Axial, Reflexión y Homotecias (Escalas y Ampliación/Reducción) (Semana 2)',
          'Teoremas Fundamentales de Triángulos: Suma de Ángulos Interiores (180°) y Desigualdad Triangular (Semana 1)',
          'Introducción a las Razones Trigonométricas en el Triángulo Rectángulo: Seno, Coseno y Tangente (Semana 2: Concepto)',
          'Razones Trigonométricas en Triángulos Notables (30°, 45°, 60°) y Tabla de Valores Especiales (Semana 1)',
          'Resolución de Problemas con Ángulos de Elevación y Depresión en Topografía Urbana de Medellín (Semana 2)',
          'Taller Integrador de Fortalecimiento y Preparación Prueba Saber / ICFES 9°',
          'Evaluación Acumulativa Final P3 y Cierre Académico del Grado Noveno'
        ];
        return {
          semana: i + 27,
          titulo: titulosM9P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: i < 6 ? 'Variacional y Sistemas Algebraicos' : 'Espacial y Sistemas Geométricos',
          dba: 'DBA 8 / DBA 2 / DBA 4: Utiliza expresiones algebraicas y gráficas para describir situaciones y argumenta equivalencias en sistemas y geometría.',
          competencia: 'Pensamiento Variacional, Espacial y Métrico',
          evidencia: 'SABER: Interpreta expresiones algebraicas y describe relaciones entre gráficas y funciones. HACER: Resuelve ecuaciones lineales y clasifica triángulos. SER: Participa activamente en clase con respeto.',
          dua: {
            representacion: 'Gráficas lineales comparativas en pantalla y triángulos rectángulos interactivos.',
            expresion: 'Explicación oral argumentada y resolución estructurada paso a paso.',
            implicacion: 'Análisis de la factura de servicios públicos de EPM en los hogares de los estudiantes.'
          },
          exploracionMedellin: 'Modelar el costo mensual del servicio de acueducto y energía de EPM como una función afín con cargo fijo y consumo por unidad.',
          estructuracionTeorica: {
            concepto: `Desarrollo curricular de '${titulosM9P3[i]}'. La función lineal modela razones de cambio constante entre dos magnitudes.`,
            formulas: [
              'Función afín: f(x) = mx + b',
              'Pendiente: m = (y₂ - y₁) / (x₂ - x₁)',
              'Razones trigonométricas: Sen(θ) = Opuesto/Hipotenusa ; Cos(θ) = Adyacente/Hipotenusa ; Tan(θ) = Opuesto/Adyacente'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un taxi en Medellín cobra $4.500 COP de arranque (cargo fijo b) y $1.200 COP por cada kilómetro recorrido (pendiente m). Escribir la función de costo y calcular el valor para un viaje de 8 km.',
              pasos: [
                'Paso 1: Identificar la pendiente m = 1.200 y el intercepto b = 4.500.',
                'Paso 2: Escribir la función de costo: C(x) = 1.200x + 4.500.',
                'Paso 3: Evaluar para x = 8 km: C(8) = 1.200(8) + 4.500 = 9.600 + 4.500 = 14.100 COP.'
              ],
              solucionFinal: 'La función es C(x) = 1.200x + 4.500 y el costo del viaje de 8 km es $14.100 COP.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 4 problemas de funciones lineales y razones trigonométricas en parejas.',
            tareaBarrial: 'Identificar una situación del barrio modelable con una función afín (ej. minutos de celular, cobro de parqueadero).'
          }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosE9P1 = [
          'Diseño de Investigaciones Estadísticas: Población, Muestra y Métodos de Muestreo (Semana 1)',
          'Técnicas de Recolección: Encuestas, Observación y Prevención de Sesgos (Semana 2)',
          'Consolidación de Tablas de Frecuencia y Gráficos para Datos Continuos (Semana 1)',
          'Puntuaciones Estandarizadas (Z-Scores) y Comparación de Datos Heterogéneos (Semana 2)',
          'Introducción a la Distribución Normal: Simetría, Campana de Gauss y Regla Empírica (Semana 1)',
          'Distribución Normal: Aplicación de la Regla 68-95-99.7 en Datos Escolares (Semana 2)',
          'Relación Bivariada entre Dos Variables Cuantitativas: Nubes de Puntos y Covarianza (Semana 1)',
          'Coeficiente de Correlación Lineal de Pearson (r): Concepto, Rango (-1 a 1) e Intensidad (Semana 2)',
          'Regresión Lineal Simple: Método de Mínimos Cuadrados y Ecuación de la Recta de Ajuste (Semana 1)',
          'Recta de Regresión: Pronósticos y Estimaciones en Contextos Sociales de Medellín (Semana 2)',
          'Coeficiente de Determinación (R²) y Bondad de Ajuste del Modelo (Semana 1)',
          'Taller Práctico de Análisis de Correlación con Datos Reales de la Ciudad (Semana 2)',
          'Evaluación Acumulativa P1 Estadística 9°'
        ];
        return {
          semana: i + 1,
          titulo: titulosE9P1[i],
          tiempoEstimado: '60 minutos (1 hora semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 5: Propone un diseño estadístico adecuado para comparar distribuciones de dos grupos usando diagramas de dispersión y correlación.',
          competencia: 'Pensamiento Aleatorio y Estadística Bivariada',
          evidencia: 'SABER: Define el método de recolección e identifica la población y muestra. HACER: Construye diagramas y describe correlaciones entre datos. SER: Participa aportando ideas.',
          dua: { representacion: 'Gráficos de dispersión dinámicos en GeoGebra/Calc.', expresion: 'Informe técnico escrito con interpretación de la correlación.', implicacion: 'Análisis de la relación entre horas de estudio y desempeño escolar.' },
          exploracionMedellin: 'Analizar la correlación entre la distancia a estaciones del Metro y los tiempos de llegada de los estudiantes.',
          estructuracionTeorica: {
            concepto: 'El análisis de correlación cuantifica la fuerza y dirección de la relación lineal entre dos variables cuantitativas.',
            formulas: ['Recta de regresión: y = mx + b', 'Coeficiente de Pearson: r ∈ [-1, 1]', 'R² = (r)²'],
            ejemploPasoAPaso: {
              enunciado: 'Si la recta de ajuste entre horas de estudio (X) y nota (Y sobre 100) es Y = 5X + 50, estimar la nota para 7 horas de estudio.',
              pasos: ['Y = 5(7) + 50 = 35 + 50 = 85 puntos.'],
              solucionFinal: 'La nota estimada es de 85 puntos.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de correlación en parejas.', tareaBarrial: 'Recolectar 5 pares de datos familiares (edad y estatura) y graficar.' }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosE9P2 = [
          'Series de Tiempo y Datos Longitudinales: Tendencia y Estacionalidad (Semana 1)',
          'Números Índice Simples y Ponderados en la Economía Nacional (Semana 2)',
          'Índice de Precios al Consumidor (IPC), Inflación y Poder Adquisitivo en Colombia (Semana 1)',
          'Análisis del IPC y Costo de la Canasta Familiar en Medellín (Semana 2)',
          'Tablas de Contingencia Avanzadas para Variables Cualitativas Cruzadas (Semana 1)',
          'Prueba Intuitiva de Independencia entre Variables en Políticas Públicas (Semana 2)',
          'Diseño del Proyecto Estadístico Escolar en la IE Rafael Uribe Uribe: Formulación (Semana 1)',
          'Proyecto Estadístico Escolar: Diseño del Instrumento y Validación (Semana 2)',
          'Recolección de Datos de Campo en la Comunidad Educativa (Semana 1)',
          'Depuración, Limpieza y Tabulación Computarizada de Datos (Semana 2)',
          'Análisis Estadístico Completo y Redacción del Informe Final (Semana 1)',
          'Sustentación de Proyectos Estadísticos ante el Grupo (Semana 2)',
          'Evaluación Acumulativa P2 Estadística 9°'
        ];
        return {
          semana: i + 14,
          titulo: titulosE9P2[i],
          tiempoEstimado: '60 minutos (1 hora semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 6: Propone un diseño estadístico y elabora conclusiones a partir de medidas de tendencia central y de dispersión.',
          competencia: 'Pensamiento Aleatorio e Investigación Estadística',
          evidencia: 'SABER: Compara distribuciones de datos. HACER: Elabora conclusiones para responder el problema planteado. SER: Comunica con orden y responsabilidad.',
          dua: { representacion: 'Paneles de visualización de datos (dashboards).', expresion: 'Póster de investigación escolar.', implicacion: 'Propuestas de mejora comunitaria en la comuna 12.' },
          exploracionMedellin: 'Analizar la variación porcentual del precio del transporte público en Medellín en los últimos años.',
          estructuracionTeorica: {
            concepto: 'Un proyecto estadístico aplica el ciclo de indagación: pregunta, recolección, análisis y conclusiones fundamentadas.',
            formulas: ['Índice Simple = (Valor Actual / Valor Base) × 100', 'Variación Porcentual = [(Actual - Base) / Base] × 100%'],
            ejemploPasoAPaso: {
              enunciado: 'Un artículo costaba $50.000 COP y subió a $58.000 COP. Calcular el índice y la variación porcentual.',
              pasos: ['Índice = (58.000 / 50.000) × 100 = 116', 'Variación = 116 - 100 = +16%'],
              solucionFinal: 'El índice es 116 (aumento del 16%).'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Estructurar el informe del proyecto en equipos.', tareaBarrial: 'Consultar el precio histórico de un alimento básico.' }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosE9P3 = [
          'Experimentos Aleatorios con y sin Reemplazo: Espacio Muestral (Semana 1)',
          'Técnicas de Conteo: Permutaciones, Combinaciones y Regla del Producto (Semana 2)',
          'Probabilidad Compuesta: Eventos Dependientes e Independientes (Semana 1)',
          'Regla de la Multiplicación Formal: P(A ∩ B) = P(A) · P(B|A) (Semana 2)',
          'Probabilidad Condicional y Partición del Espacio Muestral (Semana 1)',
          'Introducción al Teorema de Bayes: Actualización de Probabilidades (Semana 2)',
          'Aplicaciones del Teorema de Bayes en Diagnósticos y Decisiones Urbanas (Semana 1)',
          'Variables Aleatorias Discretas: Función de Probabilidad f(x) (Semana 2)',
          'Esperanza Matemática (Valor Esperado E[X]) en Juegos y Finanzas (Semana 1)',
          'Varianza y Desviación de una Variable Aleatoria Discreta (Semana 2)',
          'Introducción a la Distribución Binomial: Ensayos de Bernoulli y Parámetros (n, p) (Semana 1)',
          'Cálculo de Probabilidades Binomiales en Problemas Cotidianos (Semana 2)',
          'Taller Preparatorio Tipo Saber 9° en Probabilidad e Inferencia',
          'Evaluación Acumulativa Final P3 Estadística 9°'
        ];
        return {
          semana: i + 27,
          titulo: titulosE9P3[i],
          tiempoEstimado: '60 minutos (1 hora semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 7: Encuentra el número de posibles resultados usando técnicas de conteo y calcula la probabilidad de eventos aleatorios compuestos.',
          competencia: 'Pensamiento Aleatorio y Probabilidad Compuesta',
          evidencia: 'SABER: Diferencia experimentos con y sin reemplazo. HACER: Encuentra resultados con diagramas de árbol y combinaciones. SER: Escucha y respeta opiniones.',
          dua: { representacion: 'Simuladores probabilísticos interactivos', expresion: 'Árboles bayesianos paso a paso', implicacion: 'Toma racional de decisiones bajo riesgo' },
          exploracionMedellin: 'Calcular el valor esperado en una rifa benéfica escolar de la institución.',
          estructuracionTeorica: {
            concepto: 'La probabilidad compuesta y la esperanza matemática permiten cuantificar el resultado promedio esperado a largo plazo.',
            formulas: ['E[X] = Σ [x_i · P(X = x_i)]', 'P(A|B) = P(A ∩ B) / P(B)', 'Binomial: P(X=k) = C(n, k) · p^k · (1-p)^(n-k)'],
            ejemploPasoAPaso: {
              enunciado: 'Un juego cuesta $1.000 COP. Con probabilidad 0,2 se ganan $4.000 COP (ganancia neta +$3.000 COP) y con 0,8 no se gana nada (pérdida -$1.000 COP). Calcular E[X].',
              pasos: ['E[X] = (3000 × 0,2) + (-1000 × 0,8) = 600 - 800 = -200 COP.'],
              solucionFinal: 'La esperanza es -$200 COP (juego desfavorable para el apostador).'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de árboles de probabilidad en parejas.', tareaBarrial: 'Analizar la probabilidad de un juego de azar barrial.' }
        };
      })
    }
  }
};
