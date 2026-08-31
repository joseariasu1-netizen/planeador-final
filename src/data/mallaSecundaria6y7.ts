import { PlanSemana } from '../types';

export const mallaSecundaria6y7: {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
} = {
  // ==========================================
  // GRADO SEXTO (6°)
  // ==========================================
  '6°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosM6P1 = [
          'Sistemas de Numeración: Sistema Decimal, Posicionalidad y Comparación con Otros Sistemas (Semana 1: Concepto)',
          'Operaciones Básicas en los Números Naturales (N): Propiedades de la Adición y Multiplicación (Semana 2: Propiedades)',
          'Sustracción y División en N: Algoritmos y Problemas de Reparto Equitativo en Medellín (Semana 1)',
          'Potenciación de Números Naturales: Base, Exponente y Propiedades del Producto/Cociente de Potencias (Semana 2)',
          'Radicación y Logaritmación en N: Interpretación Geométrica y Relación con la Potenciación (Semana 1)',
          'Operaciones Combinadas y Jerarquía de las Operaciones en N (Semana 2)',
          'Teoría de Números I: Múltiplos, Divisores y Criterios de Divisibilidad por 2, 3, 5, 6 y 10 (Semana 1)',
          'Teoría de Números I: Números Primos, Números Compuestos y Criba de Eratóstenes (Semana 2)',
          'Teoría de Números II: Descomposición de Números en Factores Primos (Semana 1)',
          'Teoría de Números II: Mínimo Común Múltiplo (m.c.m) y Problemas de Coincidencia Periódica (Semana 2)',
          'Teoría de Números III: Máximo Común Divisor (m.c.d) y Problemas de División Máxima en la Vida Diaria (Semana 1)',
          'Taller de Aplicación y Afianzamiento de Teoría de Números y Operaciones en N (Semana 2)',
          'Repaso General y Evaluación Acumulativa P1 Matemáticas 6°'
        ];
        return {
          semana: i + 1,
          titulo: titulosM6P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Numérico y Sistemas Numéricos',
          dba: 'DBA 1 / DBA 2: Utiliza las propiedades de los números naturales y sus operaciones para proponer estrategias y procedimientos de cálculo.',
          competencia: 'Pensamiento Numérico y Razonamiento Lógico',
          evidencia: 'SABER: Reconoce los significados del número natural y las propiedades operativas. HACER: Resuelve problemas con m.c.m y m.c.d en contextos cotidianos. SER: Demuestra perseverancia y respeto.',
          dua: {
            representacion: 'Ábacos visuales, bloques multibase y diagramas de árbol de factores primos con colores.',
            expresion: 'Construcción manual de la Criba de Eratóstenes y explicaciones orales de procedimientos.',
            implicacion: 'Juegos de coincidencia de rutas de buses urbanos en Medellín para modelar el m.c.m.'
          },
          exploracionMedellin: 'Calcular cada cuántos minutos coinciden en la estación San Antonio dos rutas de tren del Metro de Medellín usando el m.c.m.',
          estructuracionTeorica: {
            concepto: `Fundamentos de '${titulosM6P1[i]}'. Los números naturales nos permiten cuantificar, ordenar y resolver problemas de distribución exacta.`,
            formulas: [
              'a^m × a^n = a^(m+n)',
              'm.c.m(a, b) = Producto de factores primos comunes y no comunes con su mayor exponente',
              'm.c.d(a, b) = Producto de factores primos comunes con su menor exponente'
            ],
            ejemploPasoAPaso: {
              enunciado: 'La ruta A del Metroplús pasa cada 12 minutos y la ruta B cada 18 minutos. Si salieron juntas a las 6:00 a.m., ¿a qué hora volverán a coincidir?',
              pasos: [
                'Paso 1: Descomponer en factores primos: 12 = 2² × 3 ; 18 = 2 × 3².',
                'Paso 2: Calcular el m.c.m: m.c.m(12, 18) = 2² × 3² = 4 × 9 = 36 minutos.',
                'Paso 3: Sumar los 36 minutos a la hora inicial (6:00 a.m.): 6:00 + 36 min = 6:36 a.m.'
              ],
              solucionFinal: 'Volverán a coincidir exactamente a las 6:36 a.m. (cada 36 minutos).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, resolver 3 problemas de m.c.m y m.c.d contextualizados en situaciones del barrio.',
            tareaBarrial: 'Comprobar los criterios de divisibilidad con las placas de 5 vehículos observados en la cuadra.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM6P2 = [
          'Fracciones I: Concepto de Fracción como Parte-Todo, Cociente y Razón (Semana 1: Representación)',
          'Fracciones I: Clasificación de Fracciones (Propias, Impropias y Números Mixtos) en la Recta Numérica (Semana 2)',
          'Fracciones II: Fracciones Equivalentes por Amplificación y Simplificación (Semana 1)',
          'Fracciones II: Comparación y Orden de Fracciones con Diferente Denominador (Semana 2)',
          'Operaciones con Fracciones: Adición y Sustracción de Fracciones Homogéneas y Heterogéneas (Semana 1)',
          'Operaciones con Fracciones: Multiplicación y División de Fracciones con Modelos Geométricos (Semana 2)',
          'Problemas Cotidianos de Aplicación con Fracciones en Gastos y Recetas en Medellín (Semana 1)',
          'Números Decimales I: Valor Posicional (Décimas, Centésimas, Milésimas) y Conversión con Fracciones (Semana 2)',
          'Números Decimales II: Adición y Sustracción de Números Decimales en Situaciones Monetarias (Semana 1)',
          'Números Decimales II: Multiplicación y División de Números Decimales (Semana 2)',
          'Porcentajes Básicos (10%, 25%, 50%) como Expresión Fraccionaria y Decimal en el Comercio (Semana 1)',
          'Taller Práctico de Resolución de Problemas Financieros Escolares con Decimales y Fracciones (Semana 2)',
          'Repaso General y Evaluación Acumulativa P2 Matemáticas 6°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM6P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Numérico y Sistemas Numéricos',
          dba: 'DBA 2 / DBA 3: Utiliza fracciones y decimales para cuantificar magnitudes discretas y continuas en situaciones cotidianas.',
          competencia: 'Pensamiento Numérico y Cálculo',
          evidencia: 'SABER: Identifica fracciones equivalentes y decimales. HACER: Realiza operaciones con fracciones y decimales. SER: Trabaja en orden y colabora con sus pares.',
          dua: {
            representacion: 'Círculos fraccionarios interactivos, barras de chocolate y rectas numéricas graduadas.',
            expresion: 'Modelado con tiras de papel de colores dobladas y cálculos escritos paso a paso.',
            implicacion: 'Simulación de compras de mercado en la Plaza de Flórez o Plaza América.'
          },
          exploracionMedellin: 'Calcular el presupuesto para comprar 3/4 kg de queso y 1.5 kg de frutas en una plaza de mercado de Medellín.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulosM6P2[i]}'. Las fracciones y los decimales nos permiten expresar cantidades no enteras con exactitud.`,
            formulas: [
              'Suma heterogénea: a/b + c/d = (a·d + b·c) / (b·d)',
              'Multiplicación: (a/b) × (c/d) = (a·c) / (b·d)',
              'División: (a/b) ÷ (c/d) = (a·d) / (b·c)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En una receta de buñuelos paisas se usan 2/3 de taza de queso costeño y 3/4 de taza de almidón. ¿Cuánto insumo se usa en total?',
              pasos: [
                'Paso 1: Plantear la suma heterogénea: 2/3 + 3/4.',
                'Paso 2: Hallar el mínimo común denominador: m.c.m(3, 4) = 12.',
                'Paso 3: Convertir a fracciones equivalentes: 2/3 = 8/12 ; 3/4 = 9/12.',
                'Paso 4: Sumar numeradores: (8 + 9) / 12 = 17/12 = 1 taza y 5/12.'
              ],
              solucionFinal: 'En total se usan 17/12 de taza (1 entero y 5/12).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 4 problemas de fracciones y decimales en parejas.',
            tareaBarrial: 'Consultar los precios de 3 productos con decimales en la tienda y calcular el vuelto exacto.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM6P3 = [
          'Geometría Plana: Rectas Paralelas, Perpendiculares y Secantes en el Plano (Semana 1: Trazado)',
          'Ángulos: Clasificación (Agudo, Recto, Obtuso, Llano) y Medición con Transportador (Semana 2: Medición)',
          'Polígonos: Clasificación por Número de Lados, Regulares e Irregulares (Semana 1)',
          'Triángulos y Cuadriláteros: Propiedades Fundamentales y Cálculo de Perímetros (Semana 2)',
          'Área de Figuras Planas Básicas: Rectángulo, Cuadrado y Triángulo (Semana 1)',
          'Área de Cuadriláteros Especiales: Paralelogramo, Rombo y Trapecio (Semana 2)',
          'Plano Cartesiano: Coordenadas Cartesianas (x, y) en el Primer Cuadrante y Ubicación de Puntos (Semana 1)',
          'Transformaciones Rígidas en el Plano: Traslación y Reflexión de Polígonos (Semana 2)',
          'Sólidos Geométricos: Prismas, Pirámides, Cilindros y Conos - Caras, Vértices y Aristas (Semana 1)',
          'Unidades de Medida y Conversiones: Longitud (m, cm, km), Superficie (m², cm²) y Capacidad (Litros) (Semana 2)',
          'Volumen de Cuerpos Simples: Cubo y Paralelepípedo Rectangular (Semana 1)',
          'Taller Integrador de Geometría, Mediciones y Razonamiento Lógico (Semana 2)',
          'Taller de Fortalecimiento y Preparación Saber 6°',
          'Evaluación Acumulativa Final P3 y Cierre Académico del Grado Sexto'
        ];
        return {
          semana: i + 27,
          titulo: titulosM6P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Espacial y Métrico',
          dba: 'DBA 4 / DBA 5: Reconoce y construye figuras bidimensionales y tridimensionales, calculando áreas, perímetros y volúmenes.',
          competencia: 'Pensamiento Espacial y Métrico',
          evidencia: 'SABER: Clasifica polígonos y cuerpos geométricos. HACER: Calcula áreas, perímetros y volúmenes en situaciones reales. SER: Mantiene una actitud reflexiva y colaborativa.',
          dua: {
            representacion: 'Maquetas de sólidos geométricos desarmables y cuadrículas cartesianas dinámicas.',
            expresion: 'Construcción con regla, compás y cartulina de prismas y pirámides.',
            implicacion: 'Mapeo de las manzanas del barrio San Javier o La América usando coordenadas cartesianas.'
          },
          exploracionMedellin: 'Ubicar en un mapa con coordenadas cartesianas los sitios icónicos de Medellín: Parque Explora, Jardín Botánico y Museo de Antioquia.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulosM6P3[i]}'. La geometría métrica y espacial nos ayuda a comprender y diseñar las formas del mundo físico.`,
            formulas: [
              'Área Rectángulo = Base × Altura',
              'Área Triángulo = (Base × Altura) / 2',
              'Volumen Cubo = Lado³',
              '1 m³ = 1.000 Litros'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un jardín rectangular en la IE Rafael Uribe Uribe mide 6 metros de largo por 4 metros de ancho. Calcular su perímetro y su área.',
              pasos: [
                'Paso 1: Perímetro: P = 2(Largo) + 2(Ancho) = 2(6) + 2(4) = 12 + 8 = 20 metros.',
                'Paso 2: Área: A = Largo × Ancho = 6 m × 4 m = 24 m².'
              ],
              solucionFinal: 'El perímetro es 20 m y el área total es 24 m².'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Construir un sólido geométrico en cartulina y calcular su área total en parejas.',
            tareaBarrial: 'Medir el perímetro de la mesa de la casa y calcular su área aproximada.'
          }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Conceptos Fundamentales: Población, Muestra y Tipos de Variables (Semana 1: Conceptos)',
          'Variables Cualitativas (Nominales y Ordinales) y Cuantitativas (Discretas y Continuas) (Semana 2: Clasificación)',
          'Técnicas de Recolección de Datos: La Encuesta Escolar y el Cuestionario (Semana 1)',
          'Organización de la Información: Tablas de Frecuencia Absoluta y Conteo (Semana 2)',
          'Frecuencia Relativa, Frecuencia Acumulada y Cálculo Porcentual (Semana 1)',
          'Tabulación Completa de Datos Estadísticos sobre Hábitos de Estudio en la RUU (Semana 2)',
          'Representación Gráfica I: Diagramas de Barras Verticales y Horizontales (Semana 1)',
          'Representación Gráfica I: Gráficos de Líneas y Análisis de Tendencias Temporales (Semana 2)',
          'Representación Gráfica II: Diagrama Circular (Sectores) y Cálculo del Ángulo Central (Semana 1)',
          'Lectura e Interpretación Crítica de Gráficos en Medios Informativos de Medellín (Semana 2)',
          'Uso Básico de Herramientas Digitales para Creación de Gráficos (Semana 1)',
          'Taller Práctico de Recolección y Análisis de Datos Escolares (Semana 2)',
          'Evaluación Acumulativa P1 Estadística 6°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora académica semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 5: Compara distribuciones de datos de variables cualitativas y cuantitativas y las representa en gráficos.',
        competencia: 'Interpretación y Representación Estadística',
        evidencia: 'SABER: Clasifica variables estadísticas. HACER: Construye tablas de frecuencia y gráficos de barras y sectores. SER: Socializa con respeto.',
        dua: { representacion: 'Gráficos multicolores', expresion: 'Afiche estadístico', implicacion: 'Estudio de movilidad escolar en Medellín' },
        exploracionMedellin: 'Analizar las preferencias de transporte de los habitantes de la comuna 12.',
        estructuracionTeorica: {
          concepto: 'La estadística permite organizar datos para tomar decisiones informadas.',
          formulas: ['f_r = f_i / N', '% = f_r × 100', 'Ángulo = f_r × 360°'],
          ejemploPasoAPaso: {
            enunciado: 'En un grupo de 40 estudiantes, 20 usan Metro. Calcular % y ángulo.',
            pasos: ['f_r = 20/40 = 0.5', '% = 50%', 'Ángulo = 0.5 × 360° = 180°'],
            solucionFinal: 'El sector representa el 50% y 180°.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Elaborar una tabla de frecuencias en parejas.', tareaBarrial: 'Encuestar a 5 familiares.' }
      })),
      2: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 14,
        titulo: [
          'Medidas de Tendencia Central: Concepto y Cálculo de la Media Aritmética (Promedio) (Semana 1)',
          'Mediana: Cálculo para Conjuntos de Datos Pares e Impares (Semana 2)',
          'Moda: Identificación en Conjuntos Unimodales y Bimodales (Semana 1)',
          'Comparación entre Media, Mediana y Moda en Situaciones Reales (Semana 2)',
          'Diagramas de Puntos (Dot Plots) y Distribución de Datos (Semana 1)',
          'Diagramas de Tallo y Hojas para Datos Cuantitativos (Semana 2)',
          'Análisis Estadístico del Consumo de Agua en Hogares de Medellín (EPM) (Semana 1)',
          'Tablas de Doble Entrada y Tablas de Contingencia Básicas (Semana 2)',
          'Introducción a las Medidas de Posición: Noción de Cuartiles (Semana 1)',
          'Lectura de Diagramas de Caja y Bigotes Básicos (Semana 2)',
          'Detección de Errores Comunes en la Interpretación Gráfica (Semana 1)',
          'Taller Integrado de Análisis de Datos Escolares (Semana 2)',
          'Evaluación Acumulativa P2 Estadística 6°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 5: Aplica medidas de tendencia central para caracterizar un conjunto de datos.',
        competencia: 'Pensamiento Aleatorio',
        evidencia: 'SABER: Reconoce la diferencia entre media, mediana y moda. HACER: Calcula e interpreta estas medidas. SER: Trabaja con rigor.',
        dua: { representacion: 'Línea numérica interactiva', expresion: 'Informe breve de conclusiones', implicacion: 'Análisis de temperaturas de la ciudad' },
        exploracionMedellin: 'Calcular la temperatura media semanal en el Valle de Aburrá.',
        estructuracionTeorica: {
          concepto: 'Las medidas de tendencia central resumen la información en un valor central representativo.',
          formulas: ['Media = Σ x / N'],
          ejemploPasoAPaso: {
            enunciado: 'Calcular la media de: 12, 14, 16, 18.',
            pasos: ['Suma = 60', 'Media = 60 / 4 = 15'],
            solucionFinal: 'La media es 15.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Calcular media y mediana de estaturas en parejas.', tareaBarrial: 'Registrar notas de 4 materias y hallar el promedio.' }
      })),
      3: Array.from({ length: 14 }, (_, i) => ({
        semana: i + 27,
        titulo: [
          'Experimentos Aleatorios y Experimentos Deterministas: Concepto y Diferencias (Semana 1)',
          'Espacio Muestral (S) y Sucesos o Eventos (Semana 2)',
          'Clasificación de Eventos: Evento Seguro, Posible e Imposible (Semana 1)',
          'Noción Cualitativa de Probabilidad: Muy Probable, Poco Probable y Equiprobable (Semana 2)',
          'Probabilidad Clásica (Regla de Laplace): P(A) = Casos Favorables / Casos Posibles (Semana 1)',
          'Lanzamiento de Monedas y Dados: Azar y Frecuencia Relativa Empírica (Semana 2)',
          'Extracción de Bolas de Urnas y Ruletas de Colores (Semana 1)',
          'Diagramas de Árbol Sencillos para Listar Espacios Muestrales (Semana 2)',
          'El Clima de Medellín y la Estimación de Probabilidad de Lluvia (Semana 1)',
          'Juegos de Azar Justos vs Juegos Injustos (Semana 2)',
          'Análisis Crítico del Azar en Decisiones de la Vida Cotidiana (Semana 1)',
          'Taller Práctico de Simulaciones de Probabilidad en el Aula (Semana 2)',
          'Taller Integrador de Probabilidad Tipo Saber 6°',
          'Evaluación Acumulativa Final P3 Estadística 6°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 6: Anticipa la ocurrencia de eventos en experimentos aleatorios sencillos.',
        competencia: 'Pensamiento Aleatorio y Probabilidad',
        evidencia: 'SABER: Identifica espacios muestrales. HACER: Calcula probabilidades simples con la regla de Laplace. SER: Respeta las reglas en juegos.',
        dua: { representacion: 'Ruletas y dados virtuales', expresion: 'Formulación de hipótesis y comprobación', implicacion: 'Apreciación del azar en el entorno' },
        exploracionMedellin: 'Estimar la probabilidad de lluvia en Medellín en temporada de invierno.',
        estructuracionTeorica: {
          concepto: 'La probabilidad mide cuantitativamente la certeza o posibilidad de que ocurra un suceso.',
          formulas: ['P(A) = Casos Favorables / Casos Totales'],
          ejemploPasoAPaso: {
            enunciado: 'Probabilidad de sacar un as en una baraja de 40 cartas (hay 4 ases).',
            pasos: ['Casos favorables = 4', 'Casos totales = 40', 'P = 4/40 = 1/10 = 0.1 (10%)'],
            solucionFinal: 'La probabilidad es del 10%.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Lanzar un dado 30 veces y tabular resultados.', tareaBarrial: 'Anotar 10 eventos cotidianos y clasificarlos como seguros o posibles.' }
      }))
    }
  },

  // ==========================================
  // GRADO SÉPTIMO (7°)
  // ==========================================
  '7°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosM7P1 = [
          'El Conjunto de los Números Enteros (Z): Necesidad Histórica, Signo y Recta Numérica (Semana 1: Concepto)',
          'Valor Absoluto, Opuesto de un Entero y Relaciones de Orden en Z (Semana 2: Orden)',
          'Adición y Sustracción de Números Enteros: Reglas de Signos y Desplazamientos (Semana 1)',
          'Operaciones Combinadas de Suma y Resta con Supresión de Signos de Agrupación (Semana 2)',
          'Multiplicación de Números Enteros y Ley de Signos: (+)·(+)=(+), (-)·(-)=(+), (+)·(-)=(-) (Semana 1)',
          'División Exacta de Enteros y Propiedades Operativas en Z (Semana 2)',
          'Potenciación de Números Enteros: Exponentes Pares e Impares y sus Propiedades (Semana 1)',
          'Radicación de Números Enteros: Raíces Exactas e Interpretación Geométrica (Semana 2)',
          'Polinomios Aritméticos con Signos de Agrupación y Jerarquía de Operaciones en Z (Semana 1)',
          'Ecuaciones Lineales Básicas con Números Enteros: Despeje y Propiedad Uniforme (Semana 2)',
          'Resolución de Problemas Cotidianos de Finanzas, Deudas y Alturas en Medellín con Enteros (Semana 1)',
          'Taller de Aplicación y Afianzamiento de Operaciones en Z (Semana 2)',
          'Repaso General y Evaluación Acumulativa P1 Matemáticas 7°'
        ];
        return {
          semana: i + 1,
          titulo: titulosM7P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Numérico y Sistemas Numéricos',
          dba: 'DBA 1 / DBA 2: Comprende y utiliza los números enteros para resolver problemas financieros, de temperatura y altitud.',
          competencia: 'Pensamiento Numérico y Modelación',
          evidencia: 'SABER: Comprende el significado de los números negativos. HACER: Resuelve operaciones combinadas y ecuaciones en Z. SER: Manifiesta honestidad y respeto.',
          dua: {
            representacion: 'Termómetro interactivo y línea de tiempo histórica con coordenadas negativas y positivas.',
            expresion: 'Resolución de problemas con esquemas de ingresos y egresos monetarios.',
            implicacion: 'Análisis de saldos en cuentas bancarias y deudas de emprendimientos locales.'
          },
          exploracionMedellin: 'Calcular la diferencia de altitud entre el Centro de Medellín (1.495 msnm) y la cima del Cerro El Volador (1.628 msnm) usando enteros.',
          estructuracionTeorica: {
            concepto: `Fundamentos de '${titulosM7P1[i]}'. Los números enteros amplían los naturales para representar balances negativos y deudas.`,
            formulas: [
              '|a| = a si a ≥ 0, -a si a < 0',
              'Ley de signos: (+)×(+)=+ ; (-)×(-)=+ ; (+)×(-)=- ; (-)×(+)=-',
              '(-a)ⁿ = aⁿ si n es par, -aⁿ si n es impar'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un comerciante tiene una deuda de $350.000 COP (-350.000), recibe un pago de $800.000 COP y luego cancela un recibo de $120.000 COP. ¿Cuál es su saldo final?',
              pasos: [
                'Paso 1: Plantear la suma algebraica: Saldo = -350.000 + 800.000 - 120.000.',
                'Paso 2: Sumar los dos primeros términos: -350.000 + 800.000 = +450.000.',
                'Paso 3: Restar el recibo: +450.000 - 120.000 = +330.000 COP.'
              ],
              solucionFinal: 'El saldo final es positivo por un valor de $330.000 COP.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 4 polinomios aritméticos con enteros en parejas.',
            tareaBarrial: 'Registrar variaciones de gastos e ingresos del hogar en una semana usando enteros.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM7P2 = [
          'El Conjunto de los Números Racionales (Q): Representación en la Recta y Fracciones Equivalentes (Semana 1: Concepto)',
          'Expresiones Decimales Periódicas y Finitas: Conversión de Decimal a Fracción Generatriz (Semana 2: Conversión)',
          'Adición y Sustracción de Números Racionales: Fracciones y Decimales con Signo (Semana 1)',
          'Multiplicación y División de Números Racionales y Ley de Signos en Q (Semana 2)',
          'Potenciación y Radicación en Q: Propiedades con Exponentes Enteros (Semana 1)',
          'Ecuaciones Lineales de Primer Grado con Números Racionales (Semana 2)',
          'Razones y Proporciones: Concepto, Términos y Propiedad Fundamental de las Proporciones (Semana 1)',
          'Magnitudes Directamente Proporcionales: Constante de Proporcionalidad y Gráfica Lineal (Semana 2)',
          'Magnitudes Inversamente Proporcionales: Constante de Producto y Gráfica de Hipérbola (Semana 1)',
          'Regla de Tres Simple Directa e Inversa en Contextos de Comercio y Transporte en Medellín (Semana 2)',
          'Porcentajes, Descuentos Comerciales e Incrementos del IVA en el Comercio Local (Semana 1)',
          'Taller Práctico de Proporcionalidad y Aplicaciones Financieras (Semana 2)',
          'Repaso General y Evaluación Acumulativa P2 Matemáticas 7°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM7P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Numérico y Variacional',
          dba: 'DBA 3 / DBA 4: Resuelve problemas que involucran números racionales y relaciones de proporcionalidad directa e inversa.',
          competencia: 'Pensamiento Numérico, Proporcional y Variacional',
          evidencia: 'SABER: Identifica números racionales y relaciones de proporcionalidad. HACER: Resuelve problemas con regla de tres y porcentajes. SER: Valora la exactitud en los cálculos.',
          dua: {
            representacion: 'Tablas de proporcionalidad interactiva y gráficas en GeoGebra.',
            expresion: 'Planteamiento de proporciones formales a/b = c/d con justificación paso a paso.',
            implicacion: 'Cálculo de descuentos en promociones de centros comerciales de Medellín.'
          },
          exploracionMedellin: 'Calcular el tiempo que tardan 3 cuadrillas de obreros en pavimentar una vía de Belén usando proporcionalidad inversa.',
          estructuracionTeorica: {
            concepto: `Estudio temático de '${titulosM7P2[i]}'. La proporcionalidad modela cómo una magnitud cambia en respuesta al cambio de otra.`,
            formulas: [
              'Propiedad fundamental: a/b = c/d ⟺ a·d = b·c',
              'Directa: y = k·x (k = y/x)',
              'Inversa: y = k/x (k = x·y)',
              'Porcentaje: Valor Final = Valor Base × (1 ± %/100)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un par de zapatos cuesta $180.000 COP y tiene un descuento del 25% en una tienda del centro. ¿Cuánto se debe pagar?',
              pasos: [
                'Paso 1: Calcular el valor del descuento: 180.000 × (25 / 100) = 45.000 COP.',
                'Paso 2: Restar el descuento del precio original: 180.000 - 45.000 = 135.000 COP.'
              ],
              solucionFinal: 'El precio final a pagar con el 25% de descuento es $135.000 COP.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Resolver en parejas 3 problemas de regla de tres directa e inversa.',
            tareaBarrial: 'Consultar el precio de un artículo con y sin IVA del 19% en una factura del supermercado.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM7P3 = [
          'Polígonos Regulares: Elementos (Lado, Vértice, Apotema), Ángulos Internos y Diagonales (Semana 1: Concepto)',
          'Perímetro y Área de Polígonos Regulares y Compuestos (Semana 2: Cálculo)',
          'El Círculo y la Circunferencia: Longitud de la Circunferencia (C = 2πr) y Área del Círculo (A = πr²) (Semana 1)',
          'Área de Regiones Sombreadas y Coronas Circulares en Diseños Arquitectónicos de Medellín (Semana 2)',
          'Sólidos Geométricos: Prismas Rectos y Pirámides - Área Lateral y Total (Semana 1)',
          'Cuerpos Redondos: Cilindro, Cono y Esfera - Características y Áreas Superficiales (Semana 2)',
          'Volumen de Sólidos: Volumen de Prismas y Cilindros V = A_base × Altura (Semana 1)',
          'Volumen de Pirámides y Conos V = (A_base × Altura) / 3 (Semana 2)',
          'Relación entre Volumen y Capacidad (1 dm³ = 1 Litro, 1 m³ = 1.000 Litros) en Almacenamiento de Agua EPM (Semana 1)',
          'Escalas y Semejanza en Planos y Mapas Urbanos del Valle de Aburrá (Semana 2)',
          'Transformaciones en el Plano: Homotecias y Cambios de Escala (Semana 1)',
          'Taller Integrador de Geometría Espacial y Métrico-Proporcional (Semana 2)',
          'Taller de Fortalecimiento Saber 7°: Razonamiento Espacial y Métrico',
          'Evaluación Acumulativa Final P3 y Cierre Académico del Grado Séptimo'
        ];
        return {
          semana: i + 27,
          titulo: titulosM7P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Espacial y Métrico',
          dba: 'DBA 5 / DBA 6: Representa y construye cuerpos geométricos calculando sus áreas superficiales y volúmenes en contextos reales.',
          competencia: 'Pensamiento Espacial y Métrico',
          evidencia: 'SABER: Reconoce fórmulas de área y volumen de sólidos. HACER: Construye y calcula áreas y volúmenes de prismas y cilindros. SER: Trabaja con orden y precisión geométrica.',
          dua: {
            representacion: 'Modelos en 3D interactivos con rotación espacial en software digital.',
            expresion: 'Desarrollos planos de cartulina para recortar, armar y verificar áreas de prismas.',
            implicacion: 'Diseño de maquetas arquitectónicas inspiradas en los edificios de Medellín.'
          },
          exploracionMedellin: 'Calcular la capacidad en litros de un tanque cilíndrico de reserva de agua de EPM con 3 m de radio y 4 m de altura.',
          estructuracionTeorica: {
            concepto: `Desarrollo temático de '${titulosM7P3[i]}'. El cálculo de volúmenes y áreas superficiales es fundamental en la arquitectura, la ingeniería y el almacenamiento.`,
            formulas: [
              'Área Círculo = π·r²',
              'Longitud Circunferencia = 2π·r',
              'Volumen Cilindro = π·r²·h',
              '1 m³ = 1.000 Litros ; 1 dm³ = 1 Litro'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Calcular el volumen y la capacidad en litros de un tanque cilíndrico con radio r = 2 metros y altura h = 3 metros (usar π ≈ 3,1416).',
              pasos: [
                'Paso 1: Calcular el área de la base circular: A_b = π·r² = 3,1416 × (2)² = 3,1416 × 4 = 12,5664 m².',
                'Paso 2: Multiplicar por la altura para hallar el volumen: V = 12,5664 × 3 = 37,6992 m³.',
                'Paso 3: Convertir a litros multiplicando por 1.000: 37,6992 × 1.000 = 37.699,2 Litros.'
              ],
              solucionFinal: 'El volumen es de 37,7 m³ y almacena aproximadamente 37.700 Litros de agua.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de cálculo de volúmenes y capacidades en grupos de 3.',
            tareaBarrial: 'Medir las dimensiones de un tanque o recipiente cilíndrico en casa y calcular su volumen.'
          }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Variables Cuantitativas Discretas y Continuas en Estudios Sociales (Semana 1: Conceptos)',
          'Organización de Datos: Tablas de Frecuencia Agrupadas Básicas (Semana 2: Tabulación)',
          'Histogramas de Frecuencia y Polígonos de Frecuencia (Semana 1)',
          'Diagramas Circulares y Análisis Porcentual en Datos Urbanos de Medellín (Semana 2)',
          'Medidas de Tendencia Central: Media Ponderada en Evaluaciones Académicas (Semana 1)',
          'Mediana y Moda en Distribuciones de Frecuencia (Semana 2)',
          'Comparación de Medidas de Tendencia Central ante Datos Atípicos (Outliers) (Semana 1)',
          'Medidas de Posición: Cuartiles Q1, Q2 y Q3 en Datos No Agrupados (Semana 2)',
          'Diagramas de Caja y Bigotes (Boxplots) Sencillos (Semana 1)',
          'Interpretación de Resultados de Pruebas Estandarizadas (Semana 2)',
          'Uso de Hoja de Cálculo para Procesamiento de Encuestas Escolares (Semana 1)',
          'Taller Práctico de Análisis de Datos de la Comunidad Educativa (Semana 2)',
          'Evaluación Acumulativa P1 Estadística 7°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 7: Interpreta y produce información a partir de tablas y gráficos que contienen medidas de tendencia central y posición.',
        competencia: 'Pensamiento Aleatorio y Análisis de Datos',
        evidencia: 'SABER: Reconoce cuartiles y media ponderada. HACER: Construye histogramas e interpreta diagramas de caja. SER: Trabaja con orden.',
        dua: { representacion: 'Gráficos interactivos', expresion: 'Informe de análisis', implicacion: 'Análisis de rendimiento escolar' },
        exploracionMedellin: 'Analizar las notas del periodo de los estudiantes de 7° para calcular la media ponderada.',
        estructuracionTeorica: {
          concepto: 'Las medidas de posición y tendencia central permiten diagnosticar el comportamiento de un colectivo.',
          formulas: ['Media ponderada = Σ(x_i · w_i) / Σ w_i'],
          ejemploPasoAPaso: {
            enunciado: 'Nota 4.0 (peso 60%) y Nota 5.0 (peso 40%). Calcular media ponderada.',
            pasos: ['Media = (4.0 × 0.6) + (5.0 × 0.4) = 2.4 + 2.0 = 4.4'],
            solucionFinal: 'La nota final ponderada es 4.4.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Calcular cuartiles en parejas.', tareaBarrial: 'Calcular la nota ponderada de un periodo escolar.' }
      })),
      2: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 14,
        titulo: [
          'Medidas de Dispersión Básicas: El Rango Estadístico y su Significado (Semana 1)',
          'Desviación Respecto a la Media y Noción de Variabilidad (Semana 2)',
          'Comparación de Dos Grupos mediante Media y Rango (Semana 1)',
          'Tablas de Contingencia para Dos Variables Cualitativas Cruzadas (Semana 2)',
          'Gráficos de Barras Agrupadas y Apiladas (Semana 1)',
          'Análisis de la Encuesta de Calidad de Vida de Medellín (Semana 2)',
          'Diseño de un Cuestionario Estadístico sobre Medio Ambiente Escolar (Semana 1)',
          'Aplicación de Encuestas y Depuración de Datos en el Aula (Semana 2)',
          'Tabulación Digital y Elaboración de Conclusiones (Semana 1)',
          'Presentación Gráfica de Resultados ante la Comunidad (Semana 2)',
          'Análisis Crítico de Noticias Estadísticas en Prensa Local (Semana 1)',
          'Taller Práctico de Diagnóstico Comunitario (Semana 2)',
          'Evaluación Acumulativa P2 Estadística 7°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 7: Compara distribuciones de datos y plantea conclusiones fundamentadas.',
        competencia: 'Pensamiento Aleatorio',
        evidencia: 'SABER: Comprende el concepto de rango y tablas de contingencia. HACER: Realiza comparaciones estadísticas entre grupos. SER: Comunica resultados con respeto.',
        dua: { representacion: 'Gráficos comparativos de barras dobles', expresion: 'Póster escolar', implicacion: 'Propuestas de reciclaje en la IE' },
        exploracionMedellin: 'Comparar el consumo de agua entre diferentes comunas de Medellín usando gráficos agrupados.',
        estructuracionTeorica: {
          concepto: 'Las comparaciones entre grupos permiten identificar patrones y disparidades.',
          formulas: ['Rango = Valor Máximo - Valor Mínimo'],
          ejemploPasoAPaso: {
            enunciado: 'Grupo A notas: {3, 4, 5}. Grupo B: {1, 4, 7}. Ambos tienen media 4. Hallar rangos.',
            pasos: ['Rango A = 5 - 3 = 2', 'Rango B = 7 - 1 = 6 (Mayor variabilidad en B)'],
            solucionFinal: 'El Grupo A es más homogéneo (rango 2 vs rango 6).'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Taller de análisis comparativo en parejas.', tareaBarrial: 'Comparar dos conjuntos de datos de precios en el barrio.' }
      })),
      3: Array.from({ length: 14 }, (_, i) => ({
        semana: i + 27,
        titulo: [
          'Principios Básicos de Conteo: El Principio de Multiplicación (Semana 1: Concepto)',
          'Diagramas de Árbol para Experimentos de Dos o Más Etapas (Semana 2: Diagramas)',
          'Principio Aditivo para Eventos Excluyentes (Semana 1)',
          'Espacio Muestral en Experimentos Compuestos (Lanzar Dos Dados o Dos Monedas) (Semana 2)',
          'Probabilidad Clásica de Eventos Compuestos mediante Regla de Laplace (Semana 1)',
          'Probabilidad de Eventos Mutuamente Excluyentes: P(A ∪ B) = P(A) + P(B) (Semana 2)',
          'Probabilidad del Suceso Contrario o Complementario P(A\') = 1 - P(A) (Semana 1)',
          'Simulación de Juegos de Azar con Dos Dados y Tableros de Carrera (Semana 2)',
          'Extracciones con y sin Reemplazo en Urnas con Fichas de Colores (Semana 1)',
          'Introducción Intuitiva a la Probabilidad Condicional en Tablas de Doble Entrada (Semana 2)',
          'Toma Racional de Decisiones Frente a Promociones y Rifas (Semana 1)',
          'Taller Práctico de Juegos de Conteo y Probabilidad en el Aula (Semana 2)',
          'Taller Integrador Saber 7° en Probabilidad y Estadística',
          'Evaluación Acumulativa Final P3 Estadística 7°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 8: Determina el número de posibles resultados usando principios de conteo y calcula probabilidades compuestas.',
        competencia: 'Pensamiento Aleatorio y Conteo',
        evidencia: 'SABER: Utiliza diagramas de árbol y el principio multiplicativo. HACER: Calcula probabilidades de eventos compuestos. SER: Demuestra juego limpio.',
        dua: { representacion: 'Árboles de combinaciones interactivos', expresion: 'Modelación con dados y monedas', implicacion: 'Análisis de combinaciones de vestuario o menús' },
        exploracionMedellin: 'Calcular el número de menús distintos en un restaurante típico de Medellín combinando entrada, plato y bebida.',
        estructuracionTeorica: {
          concepto: 'El principio multiplicativo establece que si una tarea se realiza de n formas y otra de m formas, juntas se realizan de n × m formas.',
          formulas: ['Total resultados = n₁ × n₂ × ... × n_k', 'P(A\') = 1 - P(A)'],
          ejemploPasoAPaso: {
            enunciado: 'Un restaurante ofrece 3 opciones de sopa, 4 platos fuertes y 2 bebidas. ¿Cuántos almuerzos diferentes se pueden armar?',
            pasos: ['Total = 3 × 4 × 2 = 24 combinaciones diferentes.'],
            solucionFinal: 'Se pueden armar 24 almuerzos distintos.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Diseñar un diagrama de árbol para un experimento de 3 etapas.', tareaBarrial: 'Calcular cuántas combinaciones de ropa se pueden armar con 3 camisas y 2 pantalones.' }
      }))
    }
  }
};
