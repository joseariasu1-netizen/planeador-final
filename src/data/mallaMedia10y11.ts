import { PlanSemana } from '../types';

export const mallaMedia10y11: {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
} = {
  // ==========================================
  // GRADO DÉCIMO (10°)
  // TRIGONOMETRÍA Y GEOMETRÍA ANALÍTICA (Con Distancia entre dos puntos y Cónicas)
  // ==========================================
  '10°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosM10P1 = [
          'Ángulos y Sistemas de Medición Angular: Sistema Sexagesimal y Sistema Circular (Radianes) (Semana 1: Conceptos)',
          'Conversión entre Grados y Radianes, Ángulos Coterminales y Longitud de Arco s = r·θ (Semana 2: Aplicaciones)',
          'Razones Trigonométricas en el Triángulo Rectángulo: Seno, Coseno, Tangente y sus Recíprocas (Semana 1)',
          'Razones Trigonométricas en Triángulos Notables (30°, 45°, 60°) y Ángulos Especiales (Semana 2)',
          'Resolución de Triángulos Rectángulos: Problemas de Ángulos de Elevación y Depresión en Medellín (Semana 3)',
          'Círculo Unitario (Goniométrico): Definición de Funciones Trigonométricas y Signos por Cuadrante (Semana 1)',
          'Ángulos de Referencia y Reducción al Primer Cuadrante (Semana 2)',
          'Teorema del Seno: Deducción, Casos de Aplicación (LAA, LLA) y Caso Ambiguo (Semana 1)',
          'Teorema del Seno: Resolución de Triángulos Oblicuángulos y Problemas Topográficos Reales (Semana 2)',
          'Teorema del Coseno: Deducción y Casos de Aplicación (LLL, LAL) (Semana 1)',
          'Teorema del Coseno: Problemas de Navegación, Distancias Inaccesibles y Triangulación (Semana 2)',
          'Identidades Trigonométricas Fundamentales: Pitagóricas, Recíprocas y por Cociente (Demostraciones)',
          'Repaso General de Trigonometría de Triángulos y Evaluación Acumulativa P1 Matemáticas 10°'
        ];
        return {
          semana: i + 1,
          titulo: titulosM10P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Espacial y Métrico',
          dba: 'DBA 4: Resuelve y formula problemas usando las relaciones y razones trigonométricas en triángulos rectángulos y no rectángulos.',
          competencia: 'Pensamiento Espacial, Métrico y Trigonometría',
          evidencia: 'SABER: Reconoce los sistemas sexagesimal y cíclico y formula razones trigonométricas. HACER: Resuelve triángulos rectángulos y oblicuángulos con los teoremas del Seno y Coseno. SER: Demuestra responsabilidad y perseverancia.',
          dua: {
            representacion: 'Círculo unitario interactivo en GeoGebra y teodolito casero para medir ángulos de elevación.',
            expresion: 'Resolución gráfica y analítica paso a paso de triángulos oblicuángulos.',
            implicacion: 'Cálculo de la altura de la Torre Coltejer o el Cerro Nutibara usando trigonometría.'
          },
          exploracionMedellin: 'Calcular la altura de la Torre Coltejer en el centro de Medellín midiendo el ángulo de elevación desde una distancia conocida con un goniómetro.',
          estructuracionTeorica: {
            concepto: `Desarrollo temático de '${titulosM10P1[i]}'. La trigonometría relaciona las medidas angulares con las longitudes de los lados en figuras triangulares y en el círculo trigonométrico.`,
            formulas: [
              'Conversión: Radianes = Grados × (π / 180°)',
              'Teorema del Seno: a / Sen(A) = b / Sen(B) = c / Sen(C)',
              'Teorema del Coseno: a² = b² + c² - 2bc · Cos(A)',
              'Identidad Pitagórica Fundamental: Sen²(θ) + Cos²(θ) = 1'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Desde un punto en el suelo a 50 metros de la base de un edificio en Medellín, el ángulo de elevación a la cima es de 60°. ¿Cuál es la altura del edificio?',
              pasos: [
                'Paso 1: Identificar datos: Cateto adyacente = 50 m, Ángulo θ = 60°, Cateto opuesto (Altura H) = ?',
                'Paso 2: Aplicar la razón tangente: Tan(60°) = Opuesto / Adyacente = H / 50',
                'Paso 3: Despejar H: H = 50 × Tan(60°)',
                'Paso 4: Calcular: Tan(60°) = √3 ≈ 1,732 => H = 50 × 1,732 = 86,6 metros'
              ],
              solucionFinal: 'La altura del edificio es de aproximadamente 86,6 metros.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, resolver 3 problemas de triángulos oblicuángulos decidiendo si aplicar Teorema del Seno o del Coseno.',
            tareaBarrial: 'Construir un inclinómetro con transportador, hilo y tuerca, y medir el ángulo hacia la cima de un poste o casa.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM10P2 = [
          'Geometría Analítica: Distancia Entre Dos Puntos en el Plano Cartesiano d = √[(x₂-x₁)² + (y₂-y₁)²] (Semana 1: Concepto y Deducción)',
          'Geometría Analítica: Punto Medio de un Segmento, Perímetros y Áreas de Polígonos en el Plano (Semana 2: Ejercitación)',
          'La Recta en el Plano: Pendiente m = (y₂-y₁)/(x₂-x₁), Ecuación Punto-Pendiente y Ecuación Explícita (Semana 1)',
          'La Recta: Ecuación General Ax + By + C = 0, Rectas Paralelas (m₁=m₂) y Perpendiculares (m₁·m₂ = -1) (Semana 2)',
          'La Circunferencia I: Definición como Lugar Geométrico y Ecuación Canónica con Centro en el Origen (0, 0) (Semana 1)',
          'La Circunferencia II: Ecuación Ordinaria con Centro en (h, k) y Radio r: (x-h)² + (y-k)² = r² (Semana 2)',
          'La Circunferencia III: Conversión de Ecuación General a Ordinaria Completando Cuadrados y Gráfica (Semana 3)',
          'La Parábola I: Definición Geométrica (Foco, Vértice, Directriz y Parámetro p) con Vértice en (0, 0) (Semana 1)',
          'La Parábola II: Ecuaciones Ordinarias con Vértice en (h, k) con Eje Focal Horizontal y Vertical (Semana 2)',
          'La Parábola III: Propiedad Focal y Aplicaciones en Antenas Parabólicas, Faros y Puentes de Medellín (Semana 3)',
          'Identidades Trigonométricas de Adición y Sustracción: Sen(α ± β), Cos(α ± β) y Tan(α ± β) (Semana 1)',
          'Identidades de Ángulo Doble y Ecuaciones Trigonométricas Básicas en el Intervalo [0, 2π) (Semana 2)',
          'Repaso General de Geometría Analítica y Evaluación Acumulativa P2 Matemáticas 10°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM10P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Espacial y Métrico',
          dba: 'DBA 5: Resuelve problemas geométricos en el plano cartesiano utilizando ecuaciones algebraicas de rectas y secciones cónicas.',
          competencia: 'Pensamiento Espacial, Geometría Analítica y Razonamiento',
          evidencia: 'SABER: Deduce la fórmula de distancia entre dos puntos y reconoce las ecuaciones de la circunferencia y la parábola. HACER: Determina ecuaciones canónicas y ordinarias de cónicas y calcula distancias y puntos medios. SER: Trabaja con rigor geométrico y orden.',
          dua: {
            representacion: 'Construcción dinámica de lugares geométricos (cónicas) en GeoGebra con deslizadores de foco y directriz.',
            expresion: 'Completación analítica de trinomios cuadrados perfectos en el cuaderno de trabajo.',
            implicacion: 'Mapeo de trayectorias en el mapa vial y de transporte del Valle de Aburrá.'
          },
          exploracionMedellin: 'Ubicar las coordenadas GPS de la IE Rafael Uribe Uribe y del Parque de Berrío en el plano cartesiano y calcular la distancia euclidiana en línea recta.',
          estructuracionTeorica: {
            concepto: `Estudio detallado de '${titulosM10P2[i]}'. La geometría analítica unifica el álgebra y la geometría mediante el sistema de coordenadas cartesianas.`,
            formulas: [
              'Distancia entre dos puntos: d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
              'Punto medio: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
              'Ecuación recta punto-pendiente: y - y₁ = m(x - x₁)',
              'Circunferencia: (x - h)² + (y - k)² = r²',
              'Parábola vertical con vértice (h, k): (x - h)² = 4p(y - k)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Dados los puntos A(2, -3) y B(6, 1) en el plano cartesiano: 1) Calcular la distancia entre ellos. 2) Hallar las coordenadas del punto medio.',
              pasos: [
                'Paso 1: Aplicar fórmula de distancia: d = √[(6 - 2)² + (1 - (-3))²]',
                'Paso 2: Calcular diferencias: d = √[(4)² + (4)²] = √[16 + 16] = √32 ≈ 5,66 unidades.',
                'Paso 3: Aplicar fórmula de punto medio: M_x = (2 + 6) / 2 = 8 / 2 = 4 ; M_y = (-3 + 1) / 2 = -2 / 2 = -1.',
                'Paso 4: Coordinar resultado del punto medio: M(4, -1).'
              ],
              solucionFinal: 'La distancia es √32 ≈ 5,66 unidades y el punto medio es M(4, -1).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En grupos de 3, encontrar la ecuación ordinaria de una circunferencia completando cuadrados a partir de su forma general x² + y² - 6x + 4y - 12 = 0.',
            tareaBarrial: 'Ubicar dos puntos de referencia en el barrio y calcular la pendiente de la calle que los une.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM10P3 = [
          'La Elipse I: Definición como Lugar Geométrico (Suma de Distancias Constante a Dos Focos) (Semana 1: Concepto)',
          'La Elipse II: Ecuación Ordinaria con Centro en el Origen y en (h, k) Horizontal y Vertical (Semana 2: Ecuaciones)',
          'La Elipse III: Excentricidad e = c/a, Ecuación General y Aplicaciones en Órbitas Planetarias (Semana 3: Aplicaciones)',
          'La Hipérbola I: Definición como Lugar Geométrico (Diferencia de Distancias Constante) (Semana 1: Concepto)',
          'La Hipérbola II: Ecuaciones Ordinarias, Vértices, Focos y Ecuaciones de las Asíntotas (Semana 2: Asíntotas)',
          'La Hipérbola III: Ecuación General de Segundo Grado Ax² + Cy² + Dx + Ey + F = 0 y Clasificación de Cónicas (Semana 3)',
          'Vectores en el Plano R²: Magnitud, Dirección, Sentido y Componentes Rectangulares (Semana 1)',
          'Operaciones con Vectores: Suma Vectorial, Producto Escalar y Ángulo entre Vectores (Semana 2)',
          'Funciones Trigonométricas como Modelos Periódicos: Gráficas de y = A·Sen(Bx - C) + D (Amplitud, Periodo, Desfase) (Semana 3)',
          'Estadística Descriptiva para Grado 10°: Medidas de Dispersión (Varianza, Desviación Estándar y Coeficiente de Variación) (Semana 1)',
          'Estadística: Correlación Lineal, Diagramas de Dispersión y Regresión en Datos Demográficos de Antioquia (Semana 2)',
          'Taller Integrador Tipo Prueba Saber 11: Trigonometría, Secciones Cónicas y Razonamiento Cuantitativo (Semana 1)',
          'Taller de Simulacro y Retroalimentación de Preguntas de Selección Múltiple con Justificación (Semana 2)',
          'Evaluación Acumulativa Final P3 y Cierre Académico del Grado Décimo'
        ];
        return {
          semana: i + 27,
          titulo: titulosM10P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: i < 9 ? 'Espacial y Métrico' : (i < 11 ? 'Aleatorio y Sistemas de Datos' : 'Variacional y Numérico'),
          dba: 'DBA 6 / DBA 7: Modela fenómenos periódicos mediante funciones trigonométricas y caracteriza secciones cónicas y distribuciones estadísticas.',
          competencia: 'Pensamiento Espacial, Métrico y Variacional',
          evidencia: 'SABER: Identifica los elementos de la elipse y la hipérbola y comprende el significado de periodo y amplitud. HACER: Grafica cónicas y funciones sinusoidales y calcula medidas estadísticas. SER: Demuestra espíritu crítico y trabajo en equipo.',
          dua: {
            representacion: 'Simulación de órbitas elípticas y ondas periódicas en simuladores PhET y GeoGebra.',
            expresion: 'Elaboración de fichas técnicas para cada sección cónica con sus elementos.',
            implicacion: 'Modelación del ciclo de mareas, sonido y ondas de radio en telecomunicaciones.'
          },
          exploracionMedellin: 'Analizar la forma elíptica de las cúpulas de la Catedral Basílica Metropolitana de Medellín y sus propiedades acústicas focales.',
          estructuracionTeorica: {
            concepto: `Desarrollo temático de '${titulosM10P3[i]}'. Las cónicas son curvas obtenidas al intersectar un cono circular recto con un plano.`,
            formulas: [
              'Elipse horizontal: (x - h)² / a² + (y - k)² / b² = 1 (a > b, a² = b² + c²)',
              'Hipérbola horizontal: (x - h)² / a² - (y - k)² / b² = 1 (c² = a² + b²)',
              'Función periódica: y = A·Sen(Bx - C) + D ; Periodo T = 2π / |B| ; Amplitud = |A|',
              'Desviación estándar: s = √[ Σ(x_i - x̄)² / (N - 1) ]'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Para la elipse con ecuación x²/25 + y²/16 = 1: 1) Hallar los semiejes a y b. 2) Calcular la distancia focal c. 3) Determinar las coordenadas de los focos.',
              pasos: [
                'Paso 1: Identificar a² = 25 => a = 5 (semieje mayor horizontal) y b² = 16 => b = 4 (semieje menor vertical).',
                'Paso 2: Relación pitagórica en la elipse: c² = a² - b² = 25 - 16 = 9 => c = √9 = 3.',
                'Paso 3: El centro está en (0, 0). Como el eje mayor es horizontal, los focos están en (±c, 0).',
                'Paso 4: Coordenadas de los focos: F₁(-3, 0) y F₂(3, 0).'
              ],
              solucionFinal: 'Los semiejes son a = 5, b = 4; la distancia focal es c = 3 y los focos se ubican en (-3, 0) y (3, 0).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 3 ejercicios de elipses e hipérbolas determinando focos, vértices y asíntotas en parejas.',
            tareaBarrial: 'Buscar ejemplos de estructuras arquitectónicas en Medellín con forma elíptica o parabólica.'
          }
        };
      })
    }
  },

  // ==========================================
  // GRADO ONCE (11°)
  // CÁLCULO DIFERENCIAL, ANÁLISIS REAL Y PREPARACIÓN SABER 11
  // ==========================================
  '11°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosM11P1 = [
          'Estructura de los Números Reales (R): Axiomas de Cuerpo, Orden y Completitud (Semana 1: Fundamentación)',
          'Intervalos en la Recta Real: Notación de Intervalos, Desigualdades y Valor Absoluto (Semana 2: Notación)',
          'Inecuaciones Lineales con Una Incógnita: Propiedades de Monotonía y Conjuntos Solución (Semana 1)',
          'Inecuaciones Cuadráticas y Racionales: Método del Cementerio o Tabla de Signos (Semana 2)',
          'Inecuaciones con Valor Absoluto: Propiedades |x| ≤ a y |x| ≥ a y Aplicaciones en Márgenes de Error (Semana 1)',
          'Inecuaciones en Problemas de Optimización Básica y Restricciones Presupuestales en Medellín (Semana 2)',
          'Secciones Cónicas como Cortes Planos en Conos y Cilindros: Perspectiva Tridimensional (Semana 1)',
          'Secciones Cónicas: Intersecciones de Rectas con Cónicas y Ecuaciones Cuadráticas en Dos Variables (Semana 2)',
          'Estadística Descriptiva Avanzada: Medidas de Posición (Percentiles, Deciles y Cuartiles) en Resultados ICFES (Semana 1)',
          'Estadística: Medidas de Dispersión (Varianza, Desviación Estándar) y Análisis de Variabilidad (Semana 2)',
          'Taller Intensivo de Razonamiento Cuantitativo Saber 11: Competencia de Interpretación y Representación (Semana 1)',
          'Taller Saber 11: Competencia de Formulación, Ejecución y Argumentación con Preguntas Tipo ICFES (Semana 2)',
          'Repaso General y Evaluación Acumulativa P1 Matemáticas y Precálculo 11°'
        ];
        return {
          semana: i + 1,
          titulo: titulosM11P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Numérico y Variacional',
          dba: 'DBA 1 / DBA 2: Justifica la elección de métodos para resolver inecuaciones y utiliza propiedades de los números reales y funciones en situaciones complejas.',
          competencia: 'Pensamiento Numérico, Variacional y Razonamiento Cuantitativo',
          evidencia: 'SABER: Comprende las propiedades de orden de los reales y el método de signos para inecuaciones. HACER: Resuelve inecuaciones cuadráticas y racionales expresando soluciones en intervalos. SER: Demuestra autonomía y compromiso.',
          dua: {
            representacion: 'Rectas numéricas interactivas con sombreado dinámico de intervalos en software digital.',
            expresion: 'Tablas de signos estructuradas con justificación analítica en cada factor.',
            implicacion: 'Análisis de rangos de tolerancia en ingeniería y control de calidad en manufactura paisa.'
          },
          exploracionMedellin: 'Modelar las restricciones de capacidad y presupuesto de la flota de buses del Metroplús mediante un sistema de inecuaciones lineales.',
          estructuracionTeorica: {
            concepto: `Fundamentación de '${titulosM11P1[i]}'. Las inecuaciones permiten delimitar regiones de viabilidad y rangos de tolerancia en problemas de optimización.`,
            formulas: [
              '|x| ≤ a ⟺ -a ≤ x ≤ a (con a ≥ 0)',
              '|x| ≥ a ⟺ x ≤ -a  ó  x ≥ a',
              'Inecuación cuadrática: (x - r₁)(x - r₂) > 0',
              'Percentil k: Posición P_k = (k · N) / 100'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Resolver la inecuación cuadrática x² - 5x + 6 ≤ 0 y expresar la solución en notación de intervalo.',
              pasos: [
                'Paso 1: Factorizar el polinomio: (x - 2)(x - 3) ≤ 0.',
                'Paso 2: Identificar los puntos críticos (raíces): x = 2 y x = 3.',
                'Paso 3: Construir la tabla de signos evaluando los intervalos (-∞, 2), (2, 3), (3, ∞):',
                ' - Para x < 2: (negativo)(negativo) = Positivo (+)',
                ' - Para 2 < x < 3 (ej. x = 2,5): (positivo)(negativo) = Negativo (-)',
                ' - Para x > 3: (positivo)(positivo) = Positivo (+)',
                'Paso 4: Seleccionar el intervalo donde el producto es menor o igual a cero (signo negativo e incluyendo los extremos).'
              ],
              solucionFinal: 'El conjunto solución es el intervalo cerrado [2, 3].'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 3 inecuaciones racionales con valor absoluto en parejas con sustentación.',
            tareaBarrial: 'Resolver 4 preguntas tipo Saber 11 de la cartilla institucional sobre análisis de intervalos.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM11P2 = [
          'Concepto Formal de Función Real: Dominio, Rango y Criterio de la Recta Vertical (Semana 1: Concepto)',
          'Familias de Funciones: Polinómicas, Racionales, Radicales, Exponenciales y Logarítmicas (Semana 2: Clasificación)',
          'Álgebra de Funciones: Suma, Resta, Multiplicación, Cociente y Composición (f ∘ g)(x) (Semana 1)',
          'Función Inversa: Criterio de Inyectividad (Recta Horizontal), Dominio y Rango de f⁻¹(x) (Semana 2)',
          'Sucesiones Numéricas: Sucesiones Aritméticas, Geométricas y Noción de Convergencia (Semana 1)',
          'Límite de una Sucesión y Series Infinitas en Modelos Financieros de Capitalización (Semana 2)',
          'Noción Intuitiva y Geométrica del Límite de una Función: Acercamiento Lateral lim(x→a) f(x) (Semana 1)',
          'Límites Laterales: Teorema de Existencia del Límite lim(x→a⁻) = lim(x→a⁺) y Límites Infinitos (Semana 2)',
          'Cálculo Algebraico de Límites: Propiedades y Evaluación Directa (Semana 1)',
          'Límites Indeterminados de la Forma 0/0: Factorización y Racionalización (Semana 2)',
          'Límites al Infinito lim(x→±∞) f(x) y Asíntotas Horizontales y Verticales de Funciones Racionales (Semana 1)',
          'Continuidad de una Función: Definición en Tres Condiciones y Tipos de Discontinuidad (Removible y Esencial) (Semana 2)',
          'Repaso General de Funciones, Límites y Continuidad, y Evaluación Acumulativa P2 Matemáticas 11°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM11P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Variacional y Sistemas Analíticos',
          dba: 'DBA 3 / DBA 4: Modela fenómenos de cambio continuo mediante el concepto de función, límites y noción de continuidad.',
          competencia: 'Pensamiento Variacional, Cálculo y Modelación',
          evidencia: 'SABER: Define analíticamente el concepto de límite y continuidad. HACER: Calcula límites indeterminados aplicando técnicas algebraicas de factorización y racionalización. SER: Demuestra perseverancia en la resolución de problemas complejos.',
          dua: {
            representacion: 'Tablas de aproximación numérica con pasos decimales cada vez más pequeños y graficador GeoGebra.',
            expresion: 'Demostración paso a paso de la cancelación de factores que generan la indeterminación 0/0.',
            implicacion: 'Modelación de la velocidad límite de un vagón del Metro de Medellín.'
          },
          exploracionMedellin: 'Analizar el límite de la concentración de contaminantes en el aire del Valle de Aburrá a medida que aumenta la distancia a la fuente de emisión.',
          estructuracionTeorica: {
            concepto: `Estudio curricular de '${titulosM11P2[i]}'. El límite describe el comportamiento de una función en la vecindad inmediata de un punto, permitiendo salvar discontinuidades aparentes.`,
            formulas: [
              'Existencia de límite: lim_{x→a} f(x) = L ⟺ lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = L',
              'Continuidad en x = c: 1) f(c) existe, 2) lim_{x→c} f(x) existe, 3) lim_{x→c} f(x) = f(c)',
              'Indeterminación 0/0: Factorizar el factor (x - a) y simplificar.'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Calcular el límite indeterminado: lim_{x→3} (x² - 9) / (x - 3).',
              pasos: [
                'Paso 1: Evaluar directamente sustituyendo x = 3: (3² - 9)/(3 - 3) = 0/0 (Indeterminación).',
                'Paso 2: Factorizar la diferencia de cuadrados en el numerador: x² - 9 = (x - 3)(x + 3).',
                'Paso 3: Reescribir la expresión del límite: lim_{x→3} [(x - 3)(x + 3)] / (x - 3).',
                'Paso 4: Simplificar el factor común (x - 3) válido para x ≠ 3: lim_{x→3} (x + 3).',
                'Paso 5: Evaluar por sustitución directa: 3 + 3 = 6.'
              ],
              solucionFinal: 'El límite de la función cuando x tiende a 3 es igual a 6.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 4 límites algebraicos (2 por factorización y 2 por racionalización) en grupos.',
            tareaBarrial: 'Analizar gráficamente la continuidad de la tarifa del transporte integrado Metro en función de la distancia.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM11P3 = [
          'El Problema de la Recta Tangente: Tasa de Variación Media vs Tasa de Variación Instantánea (Semana 1: Concepto)',
          'Definición Formal de la Derivada como Límite del Cociente Incremental f\'(x) = lim(h→0) [f(x+h)-f(x)]/h (Semana 2: Deducción)',
          'Interpretación Geométrica y Física de la Derivada: Pendiente de la Tangente y Velocidad Instantánea (Semana 1)',
          'Reglas Básicas de Derivación: Derivada de una Constante, de la Potencia f(x)=xⁿ y Múltiplo Constante (Semana 2)',
          'Reglas de Derivación: Regla de la Suma, de la Resta y del Producto [f·g]\' = f\'·g + f·g\' (Semana 1)',
          'Reglas de Derivación: Regla del Cociente [f/g]\' = (f\'·g - f·g\') / g² (Semana 2)',
          'Regla de la Cadena para Funciones Compuestas: d/dx[f(g(x))] = f\'(g(x)) · g\'(x) (Semana 1)',
          'Aplicaciones de la Derivada I: Criterio de la Primera Derivada para Crecimiento, Decrecimiento y Puntos Críticos (Semana 2)',
          'Aplicaciones de la Derivada II: Concavidad, Puntos de Inflexión y Criterio de la Segunda Derivada (Semana 1)',
          'Optimización en Problemas Reales: Maximización de Utilidades y Minimización de Costos y Materiales en Medellín (Semana 2)',
          'Introducción al Cálculo Integral: Noción de Antiderivada e Integrales Indefinidas Inmediatas (Semana 1)',
          'Probabilidad Condicional, Teorema de Bayes y Distribuciones de Probabilidad en la Toma de Decisiones (Semana 2)',
          'Simulacro Final Intensivo Saber 11: Competencias de Matemáticas y Razonamiento Cuantitativo ICFES',
          'Evaluación Acumulativa Final P3 y Cierre Académico de la Educación Media'
        ];
        return {
          semana: i + 27,
          titulo: titulosM11P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas)',
          pensamiento: 'Variacional y Sistemas Analíticos',
          dba: 'DBA 5 / DBA 6: Utiliza la derivada para estudiar razones de cambio, optimizar funciones en situaciones de la vida real e interpretar probabilidades compuestas.',
          competencia: 'Pensamiento Variacional, Cálculo Diferencial y Modelación',
          evidencia: 'SABER: Comprende el concepto de derivada como límite de una razón de cambio y conoce las reglas de derivación. HACER: Deriva funciones polinómicas y racionales y resuelve problemas de máximos y mínimos. SER: Asume con responsabilidad su proyecto de vida académico y profesional.',
          dua: {
            representacion: 'Animación interactiva de la recta secante transformándose en tangente en GeoGebra.',
            expresion: 'Planteamiento analítico ordenado de problemas de optimización con formulación de la función objetivo.',
            implicacion: 'Diseño de envases óptimos con mínimo costo de material para productos alimenticios locales.'
          },
          exploracionMedellin: 'Optimizar las dimensiones de una caja de cartón rectangular producida en una fábrica de envases de Itagüí para maximizar su volumen con una cantidad fija de material.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulosM11P3[i]}'. La derivada cuantifica la tasa instantánea con la que cambia una variable dependiente respecto a una independiente.`,
            formulas: [
              'Definición: f\'(x) = lim_{h→0} [f(x + h) - f(x)] / h',
              'Regla de la potencia: d/dx [xⁿ] = n · xⁿ⁻¹',
              'Regla del producto: (u · v)\' = u\'v + uv\'',
              'Regla del cociente: (u / v)\' = (u\'v - uv\') / v²',
              'Optimización: Puntos críticos donde f\'(x) = 0'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Hallar los puntos críticos y determinar el valor máximo de la función de utilidad U(x) = -2x² + 40x - 50 (en miles de pesos), donde x es la cantidad de artículos producidos.',
              pasos: [
                'Paso 1: Calcular la primera derivada de la función: U\'(x) = d/dx[-2x² + 40x - 50] = -4x + 40.',
                'Paso 2: Igualar la derivada a cero para encontrar los puntos críticos: -4x + 40 = 0 => 4x = 40 => x = 10 artículos.',
                'Paso 3: Aplicar el criterio de la segunda derivada: U\'\'(x) = -4. Como U\'\'(x) < 0 para todo x, en x = 10 hay un Máximo Absoluto.',
                'Paso 4: Calcular la utilidad máxima evaluando en la función original: U(10) = -2(10)² + 40(10) - 50 = -200 + 400 - 50 = 150 miles de pesos.'
              ],
              solucionFinal: 'La producción óptima es de 10 artículos, generando una utilidad máxima de $150.000 COP.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de 3 problemas de optimización geométrica y económica en parejas.',
            tareaBarrial: 'Resolver 5 preguntas liberadas de la prueba Saber 11 sobre análisis de razones de cambio y máximos.'
          }
        };
      })
    }
  }
};
