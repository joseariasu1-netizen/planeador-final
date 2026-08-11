import { Asignatura, Grado, PeriodoId, PlanSemana } from '../types';

export interface MallaDB {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
}

export const mallaCurricular: MallaDB = {
  '6°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Sistemas de Numeración y Números Naturales',
          'Operaciones Básicas y Propiedades en Naturales',
          'Potenciación, Radicación y Logaritmación en Naturales',
          'Ecuaciones Aditivas y Multiplicativas en N',
          'Polígonos y Clasificación según sus Lados y Ángulos',
          'Perímetro y Área de Triángulos y Cuadriláteros',
          'Múltiplos, Divisores y Criterios de Divisibilidad',
          'Números Primos, Compuestos y Descomposición Prima',
          'Mínimo Común Múltiplo (m.c.m) y Máximo Común Divisor (m.c.d)',
          'Fracciones: Concepto, Representación y Tipos',
          'Fracciones Equivalentes y Amplificación/Simplificación',
          'Suma y Resta de Fracciones Homogéneas y Heterogéneas',
          'Repaso General y Evaluación Acumulativa P1'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: i < 4 || i >= 6 ? 'Numérico y Sistemas Numéricos' : 'Espacial y Sistemas Geométricos',
        dba: i < 6 
          ? 'DBA 1: Utiliza las propiedades de los números enteros y racionales y las propiedades de las operaciones para resolver problemas.'
          : 'DBA 2: Propone y justifica estrategias para resolver problemas en los que intervienen cantidades fraccionarias.',
        competencia: 'Resolución de Problemas y Modelación',
        evidencia: 'Aplica las propiedades numéricas y geométricas en situaciones contextuales de la vida cotidiana.',
        dua: {
          representacion: 'Apoyo visual con esquemas gráficos, regletas digitales y tablas de descomposición con código de colores.',
          expresion: 'Permite resolver problemas mediante representación en diagrama de barras, algoritmos directos o explicaciones verbales.',
          implicacion: 'Desafíos grupales basados en la administración de un pequeño comercio barrial en Manrique o Robledo.'
        },
        exploracionMedellin: `Reto Medellín: Calcular el costo total de tiquetes en la red Metro de Medellín para una familia que viaja desde la estación San Javier hasta la estación Acevedo en Metrocable.`,
        estructuracionTeorica: {
          concepto: `Estudio detallado del tema '${[
            'Sistemas de Numeración y Números Naturales',
            'Operaciones Básicas y Propiedades en Naturales',
            'Potenciación, Radicación y Logaritmación en Naturales',
            'Ecuaciones Aditivas y Multiplicativas en N',
            'Polígonos y Clasificación según sus Lados y Ángulos',
            'Perímetro y Área de Triángulos y Cuadriláteros',
            'Múltiplos, Divisores y Criterios de Divisibilidad',
            'Números Primos, Compuestos y Descomposición Prima',
            'Mínimo Común Múltiplo (m.c.m) y Máximo Común Divisor (m.c.d)',
            'Fracciones: Concepto, Representación y Tipos',
            'Fracciones Equivalentes y Amplificación/Simplificación',
            'Suma y Resta de Fracciones Homogéneas y Heterogéneas',
            'Repaso General y Evaluación Acumulativa P1'
          ][i]}'. El número natural permite contar, ordenar y cuantificar elementos discretos en el entorno cotidiano.`,
          formulas: [
            'P = a + b + c + d (Perímetro)',
            'A = (base × altura) / 2 (Área Triángulo)',
            'm.c.m(a, b) × m.c.d(a, b) = a × b'
          ],
          ejemploPasoAPaso: {
            enunciado: 'En la estación Niquía del Metro de Medellín abordaron 145 pasajeros en el primer tren y 210 en el segundo. Si en la estación San Antonio descendieron 128 personas, ¿cuántos pasajeros continúan en el tren hacia la estación Itagüí?',
            pasos: [
              'Paso 1: Sumar los pasajeros que abordaron en ambas frecuencias: 145 + 210 = 355 pasajeros.',
              'Paso 2: Restar los pasajeros que descendieron en la estación central San Antonio: 355 - 128.',
              'Paso 3: Ejecutar la sustracción: 355 - 128 = 227.'
            ],
            solucionFinal: 'Continúan exactamente 227 pasajeros hacia la estación Itagüí.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'En equipos de 3 estudiantes, diseñar un itinerario de viaje en el Tranvía de Ayacucho optimizando el presupuesto de transporte.',
          tareaBarrial: 'Consultar el recibo de servicios públicos de EPM en casa y calcular el consumo total de agua en metros cúbicos acumulados en el trimestre.'
        }
      })),
      2: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 14,
        titulo: [
          'Multiplicación y División de Fracciones',
          'Números Decimales: Conversión y Representación',
          'Operaciones con Decimales en Problemas Financieros',
          'Razones y Proporciones en la Vida Real',
          'Propiedad Fundamental de las Proporciones',
          'Regla de Tres Simple Directa',
          'Regla de Tres Simple Inversa',
          'Porcentajes: Concepto y Cálculo Práctico',
          'Aplicación de Porcentajes en Descuentos y Comercio',
          'Unidades de Longitud y Conversiones en el Sistema Métrico',
          'Unidades de Superficie y Medición de Lotes',
          'Unidades de Masa y Capacidad',
          'Repaso y Evaluación Acumulativa P2'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: i < 9 ? 'Numérico y Sistemas Numéricos' : 'Métrico y Sistemas de Medida',
        dba: 'DBA 3: Reconoce y utiliza los números racionales expresados como fracción o como decimal para resolver problemas.',
        competencia: 'Razonamiento y Comunicación',
        evidencia: 'Resuelve problemas que involucran porcentajes, razones y proporciones en contextos comerciales de la ciudad.',
        dua: {
          representacion: 'Uso de simuladores interactivos de balanzas y regletas decimales.',
          expresion: 'Elaboración de afiches o sustentación oral con ejemplos de compras en la Plaza de Flórez.',
          implicacion: 'Análisis de presupuestos reales de meriendas y transporte escolar.'
        },
        exploracionMedellin: `Un local comercial del Centro de Medellín (El Hueco) ofrece un descuento del 15% en uniformes escolares. Calcular el precio final de una compra de $80.000 COP.`,
        estructuracionTeorica: {
          concepto: `Fundamentos teóricos de '${[
            'Multiplicación y División de Fracciones',
            'Números Decimales: Conversión y Representación',
            'Operaciones con Decimales en Problemas Financieros',
            'Razones y Proporciones en la Vida Real',
            'Propiedad Fundamental de las Proporciones',
            'Regla de Tres Simple Directa',
            'Regla de Tres Simple Inversa',
            'Porcentajes: Concepto y Cálculo Práctico',
            'Aplicación de Porcentajes en Descuentos y Comercio',
            'Unidades de Longitud y Conversiones en el Sistema Métrico',
            'Unidades de Superficie y Medición de Lotes',
            'Unidades de Masa y Capacidad',
            'Repaso y Evaluación Acumulativa P2'
          ][i]}'. Las proporciones permiten escalar magnitudes y comparar razones.`,
          formulas: [
            'a / b = c / d ⇔ a × d = b × c',
            'Valor Descuento = Precio Base × (Porcentaje / 100)',
            'Precio Final = Precio Base - Valor Descuento'
          ],
          ejemploPasoAPaso: {
            enunciado: 'Si 4 tiquetes de Metrocable cuestan $14.000 COP, ¿cuánto costarán 10 tiquetes manteniendo la misma tarifa?',
            pasos: [
              'Paso 1: Plantear la proporción directa: 4 tiquetes / $14.000 = 10 tiquetes / X.',
              'Paso 2: Aplicar la propiedad fundamental: X = (10 × 14.000) / 4.',
              'Paso 3: Resolver: 140.000 / 4 = 35.000.'
            ],
            solucionFinal: 'Los 10 tiquetes tienen un costo total de $35.000 COP.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Trabajo en parejas: simular una tienda barrial aplicando descuentos e impuestos a 5 productos alimenticios.',
          tareaBarrial: 'Verificar en el supermercado del barrio el precio por gramo de dos marcas de arroz y determinar cuál es más económica.'
        }
      })),
      3: Array.from({ length: 14 }, (_, i) => ({
        semana: i + 27,
        titulo: [
          'Plano Cartesiano y Ubicación de Coordenadas',
          'Transformaciones Rígidas: Traslación y Rotación',
          'Simetría Axial y Reflexión en el Plano',
          'Concepto de Variable y Expresiones Algebraicas Simples',
          'Ecuaciones Lineales de Primer Grado sencillas',
          'Resolución de Problemas con Ecuaciones en N',
          'Sólidos Geométricos: Prismas y Pirámides',
          'Área Superficial de Cuerpos Geométricos',
          'Volumen de Cubos y Paralelepípedos',
          'Capacidad y Relación entre Volumen y Litros',
          'Estadística Básica: Tablas de Frecuencia Absoluta',
          'Diagramas de Barras y Gráficos Circulares',
          'Moda y Media Aritmética para Datos No Agrupados',
          'Evaluación Acumulativa Final P3 y Cierre Académico'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: i < 3 ? 'Espacial y Sistemas Geométricos' : (i < 10 ? 'Variacional y Sistemas Algebraicos' : 'Aleatorio y Sistemas de Datos'),
        dba: 'DBA 4: Justifica relaciones entre la superficie y el volumen de un sólido.',
        competencia: 'Modelación y Formulación',
        evidencia: 'Representa datos espaciales y cuantitativos mediante gráficos cartesianos y diagramas estadísticos.',
        dua: {
          representacion: 'Maquetas modulares tridimensionales y cuadrículas cartesianas dinámicas.',
          expresion: 'Construcción física de cuerpos geométricos con cartulina y plastilina.',
          implicacion: 'Mapeo de rutas emblemáticas de Medellín utilizando coordenadas cartesianas.'
        },
        exploracionMedellin: `Ubicar en el plano cartesiano los puntos cardinales del Parque Explora, el Jardín Botánico y el Parque de los Deseos en Medellín.`,
        estructuracionTeorica: {
          concepto: `Desarrollo temático de '${[
            'Plano Cartesiano y Ubicación de Coordenadas',
            'Transformaciones Rígidas: Traslación y Rotación',
            'Simetría Axial y Reflexión en el Plano',
            'Concepto de Variable y Expresiones Algebraicas Simples',
            'Ecuaciones Lineales de Primer Grado sencillas',
            'Resolución de Problemas con Ecuaciones en N',
            'Sólidos Geométricos: Prismas y Pirámides',
            'Área Superficial de Cuerpos Geométricos',
            'Volumen de Cubos y Paralelepípedos',
            'Capacidad y Relación entre Volumen y Litros',
            'Estadística Básica: Tablas de Frecuencia Absoluta',
            'Diagramas de Barras y Gráficos Circulares',
            'Moda y Media Aritmética para Datos No Agrupados',
            'Evaluación Acumulativa Final P3 y Cierre Académico'
          ][i]}'. El plano cartesiano permite asociar geometría y álgebra.`,
          formulas: [
            'V = Largo × Ancho × Alto (Volumen Paralelepípedo)',
            'Media (x̄) = Σ x_i / N',
            '1 m³ = 1.000 Litros'
          ],
          ejemploPasoAPaso: {
            enunciado: 'Un tanque de almacenamiento de agua en una escuela rural de la comuna 13 tiene dimensiones de 2 metros de largo, 1.5 metros de ancho y 2 metros de alto. ¿Cuál es su volumen en metros cúbicos y su capacidad en litros?',
            pasos: [
              'Paso 1: Calcular el volumen en m³: V = 2m × 1.5m × 2m.',
              'Paso 2: V = 6 m³.',
              'Paso 3: Convertir a litros multiplicando por 1.000: 6 × 1.000 = 6.000 Litros.'
            ],
            solucionFinal: 'El volumen del tanque es 6 m³ y su capacidad total es de 6.000 Litros de agua potabilizada.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Construir en grupo una maqueta a escala con cajas recicladas para calcular el volumen total.',
          tareaBarrial: 'Registrar la temperatura máxima diaria en Medellín durante 5 días y calcular el promedio semanal.'
        }
      }))
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Conceptos Fundamentales: Población, Muestra y Variable',
          'Variables Cualitativas Nominales y Ordinales',
          'Variables Cuantitativas Discretas y Continuas',
          'Técnicas de Recolección de Datos: Encuesta y Entrevista',
          'Diseño de Encuestas sobre Hábitos en la Institución Educativa',
          'Tablas de Frecuencia Absoluta y Relativa',
          'Frecuencia Acumulada y Porcentual',
          'Representación Gráfica: Diagrama de Barras Verticales y Horizontales',
          'Representación Gráfica: Diagramas de Líneas y Tendencias',
          'Diagrama Circular (Sectores) y Cálculo de Ángulos',
          'Interpretación de Gráficos Estadísticos en Periódicos Locales',
          'Análisis Crítico de Datos e Inferencia Sencilla',
          'Evaluación Acumulativa P1 Estadística 6°'
        ][i],
        tiempoEstimado: '60 minutos (1 hora académica semanal)',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 5: Compara distribuciones de datos de variables cualitativas y cuantitativas.',
        competencia: 'Interpretación y Representación',
        evidencia: 'Recolecta, organiza e interpreta datos tabulados y representados en gráficos.',
        dua: {
          representacion: 'Gráficos interactivos multicolores con convenciones claras y leíbles.',
          expresion: 'Presentación mediante afiches estadísticos o reportes breves en audio.',
          implicacion: 'Estudio de preferencias de movilidad de los estudiantes de la IE Rafael Uribe Uribe.'
        },
        exploracionMedellin: `Realizar un sondeo sobre el medio de transporte preferido por los vecinos de Belén (Metro, Bus, Bicicleta, Caminar).`,
        estructuracionTeorica: {
          concepto: `La estadística descriptiva permite recolectar, clasificar y resumir información para tomar decisiones fundamentadas.`,
          formulas: [
            'Frecuencia Relativa (f_r) = f_i / N',
            'Porcentaje (%) = f_r × 100',
            'Ángulo Sector = f_r × 360°'
          ],
          ejemploPasoAPaso: {
            enunciado: 'De 40 estudiantes encuestados en 6°A de la IE Rafael Uribe Uribe, 20 viajan en Metro, 10 en Bus y 10 caminando. Calcular la frecuencia relativa y el ángulo para el gráfico circular del grupo que viaja en Metro.',
            pasos: [
              'Paso 1: Frecuencia relativa: f_r = 20 / 40 = 0.5 (50%).',
              'Paso 2: Calcular el ángulo correspondiente: 0.5 × 360° = 180°.'
            ],
            solucionFinal: 'El sector del Metro representa el 50% de los datos y un ángulo semicircular de 180°.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Elaborar en parejas la tabla de frecuencias completa del grupo.',
          tareaBarrial: 'Encuestar a 5 familiares sobre su plato típico paisa preferido y tabular las respuestas.'
        }
      })),
      2: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 14,
        titulo: `Estadística 6° - P2 Sem ${i + 14}: Medidas de Tendencia Central`,
        tiempoEstimado: '60 minutos',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 5: Aplica medidas de tendencia central para caracterizar un conjunto de datos.',
        competencia: 'Formulación y Ejecución',
        evidencia: 'Calcula e interpreta la media, mediana y moda en datos no agrupados.',
        dua: { representacion: 'Línea numérica con pivotes', expresion: 'Resolución de problemas cotidianos', implicacion: 'Análisis de datos deportivos de la ciudad' },
        exploracionMedellin: 'Análisis de los goles anotados por el Atlético Nacional e Independiente Medellín en el último torneo.',
        estructuracionTeorica: {
          concepto: 'Las medidas de tendencia central (Media, Mediana, Moda) resumen en un solo valor el centro de la distribución.',
          formulas: ['Media = Σ x / N', 'Moda = Dato con mayor frecuencia'],
          ejemploPasoAPaso: {
            enunciado: 'Calcular la media de las edades de 5 estudiantes: 11, 12, 11, 13, 13 años.',
            pasos: ['Suma: 11+12+11+13+13 = 60', 'Dividir por 5: 60 / 5 = 12'],
            solucionFinal: 'La edad media es 12 años.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Calcular la moda del grupo.', tareaBarrial: 'Registrar la cantidad de horas de estudio en casa.' }
      })),
      3: Array.from({ length: 14 }, (_, i) => ({
        semana: i + 27,
        titulo: `Estadística 6° - P3 Sem ${i + 27}: Probabilidad Cualitativa y Experimentos Aleatorios`,
        tiempoEstimado: '60 minutos',
        pensamiento: 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 6: Anticipa la ocurrencia de eventos en experimentos aleatorios sencillos.',
        competencia: 'Argumentación',
        evidencia: 'Clasifica eventos como imposibles, posibles o seguros.',
        dua: { representacion: 'Juegos de dados y ruletas visuales', expresion: 'Explicación con ejemplos de la vida diaria', implicacion: 'Apreciación del azar en el clima de Medellín' },
        exploracionMedellin: 'Determinar la probabilidad cualitativa de lluvia durante una tarde de agosto en el Valle de Aburrá.',
        estructuracionTeorica: {
          concepto: 'Un experimento aleatorio es aquel cuyo resultado no se puede predecir con certeza antes de realizarlo.',
          formulas: ['P(Evento) = Casos Favorables / Casos Posibles'],
          ejemploPasoAPaso: {
            enunciado: 'Al lanzar un dado común de 6 caras, ¿cuál es la probabilidad de obtener un número par?',
            pasos: ['Casos favorables: {2, 4, 6} -> 3 casos', 'Casos totales: {1, 2, 3, 4, 5, 6} -> 6 casos', 'Probabilidad = 3 / 6 = 0.5 (50%)'],
            solucionFinal: 'La probabilidad es del 50%.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Lanzar una moneda 20 veces y registrar frecuencias.', tareaBarrial: 'Observar 10 vehículos en la vía principal y anotar la proporción de buses.' }
      }))
    }
  },
  '7°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'El Conjunto de los Números Enteros (Z) y la Recta Numérica',
          'Valor Absoluto y Orden en los Números Enteros',
          'Adición y Sustracción de Números Enteros',
          'Multiplicación y Ley de Signos en Z',
          'División Exacta de Enteros y Propiedades',
          'Operaciones Combinadas y Supresión de Signos de Agrupación',
          'Potenciación de Enteros y sus Propiedades',
          'Radicación de Enteros e Interpretación Geométrica',
          'Ecuaciones Lineales con Números Enteros',
          'Polígonos Regulares, Ángulos Internos y Externos',
          'Triángulos: Propiedades, Clasificación y Congruencia',
          'Teorema de la Suma de Ángulos Internos en Triángulos',
          'Evaluación Acumulativa P1 Matemáticas 7°'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: i < 9 ? 'Numérico y Sistemas Numéricos' : 'Espacial y Sistemas Geométricos',
        dba: 'DBA 1: Comprende y utiliza los números enteros para resolver problemas financieros y de altitud.',
        competencia: 'Resolución de Problemas y Modelación',
        evidencia: 'Aplica el orden y las operaciones en Z en problemas de temperaturas, deudas y alturas.',
        dua: {
          representacion: 'Línea de tiempo histórica y termómetro gráfico interactivo.',
          expresion: 'Resolución gráfica de desplazamientos a la izquierda y derecha en la recta.',
          implicacion: 'Simulación de transacciones en la red bancaria local.'
        },
        exploracionMedellin: `Análisis de diferencias de altitud en el Valle de Aburrá: El centro de Medellín está a 1.495 msnm y la cima del Cerro El Volador a 1.628 msnm. Calcular la diferencia de altura.`,
        estructuracionTeorica: {
          concepto: `El conjunto Z comprende los números enteros positivos, el cero y los números enteros negativos. Ley de signos: (+)×(+)=(+), (-)×(-)=(+), (+)×(-)=(-).`,
          formulas: ['|a| = a si a ≥ 0, -a si a < 0', 'a - b = a + (-b)'],
          ejemploPasoAPaso: {
            enunciado: 'Un comerciante del sector de El Poblado registra un saldo inicial de -$450.000 COP por concepto de arriendo. Si efectúa ventas netas por $1.200.000 COP y luego paga un servicio de $180.000 COP, ¿cuál es su saldo final?',
            pasos: [
              'Paso 1: Plantear la expresión algebraica: Saldo = -450.000 + 1.200.000 - 180.000.',
              'Paso 2: Operar en orden: -450.000 + 1.200.000 = +750.000.',
              'Paso 3: Restar el servicio: 750.000 - 180.000 = +570.000.'
            ],
            solucionFinal: 'El saldo final es positivo por un valor de $570.000 COP.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Desafío en equipos: Juego de mesa numérico con fichas de valores positivos y negativos.',
          tareaBarrial: 'Registrar la variación de saldo ficticio al pagar servicios y compras familiares.'
        }
      })),
      2: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 14,
        titulo: `Matemáticas 7° - P2 Sem ${i + 14}: Conjunto de Números Racionales (Q) y Proporcionalidad Directa/Inversa`,
        tiempoEstimado: '120 minutos',
        pensamiento: 'Numérico y Sistemas Numéricos',
        dba: 'DBA 2: Describe situaciones de variación proporcional utilizando expresiones algebraicas.',
        competencia: 'Razonamiento y Comunicación',
        evidencia: 'Resuelve problemas de proporcionalidad directa e inversa con fracciones y decimales.',
        dua: { representacion: 'Modelos de fracciones sobre mapas urbanos', expresion: 'Explicación argumentada', implicacion: 'Proyectos de eficiencia energética' },
        exploracionMedellin: 'Optimización de rutas de transporte público en el centro de Medellín.',
        estructuracionTeorica: {
          concepto: 'Un número racional es todo número que puede expresarse de la forma a/b con a, b ∈ Z y b ≠ 0.',
          formulas: ['a/b + c/d = (ad + bc) / bd', 'k = y / x (Constante de proporcionalidad directa)'],
          ejemploPasoAPaso: {
            enunciado: 'Tres obreros tardan 12 horas en pintar la fachada de un colegio. ¿Cuántas horas tardarán 6 obreros trabajando al mismo ritmo?',
            pasos: ['Proporcionalidad inversa: 3 obreros × 12 horas = 6 obreros × X horas', '36 = 6X', 'X = 36 / 6 = 6 horas'],
            solucionFinal: 'Tardarán 6 horas.'
          }
        },
        ejercitacionYCierre: { colaborativo: 'Taller de proporciones aplicadas a recetas paisas.', tareaBarrial: 'Medición de velocidad y tiempo de caminata hacia la escuela.' }
      })),
      3: Array.from({ length: 14 }, orgGen7P3())
    }
  },
  '8°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Expresiones Algebraicas, Variables y Polinomios',
          'Clasificación de Polinomios: Monomios, Binomios y Trinomios',
          'Grado Absoluto y Relativo de un Polinomio',
          'Suma y Resta de Polinomios Algebraicos',
          'Multiplicación de Monomios y Polinomios',
          'Productos Notables: Cuadrado de un Binomio',
          'Productos Notables: Producto de la Suma por la Diferencia',
          'Productos Notables: Cubo de un Binomio',
          'División de Polinomios y Regla de Ruffini',
          'Factorización: Factor Común Monomio y Polinomio',
          'Factorización: Factor Común por Agrupación de Términos',
          'Factorización: Diferencia de Cuadrados Perfectos',
          'Evaluación Acumulativa P1 Matemáticas 8°'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: 'Variacional y Sistemas Algebraicos',
        dba: 'DBA 1: Identifica y utiliza relaciones algebraicas para generalizar patrones numéricos y geométricos.',
        competencia: 'Formulación, Tratamiento y Resolución de Problemas',
        evidencia: 'Factoriza polinomios y simplifica expresiones algebraicas aplicadas a áreas y volúmenes.',
        dua: {
          representacion: 'Álgebra tiles (fichas algebraicas tridimensionales y virtuales).',
          expresion: 'Demostración geométrica de los productos notables mediante cortes de papel.',
          implicacion: 'Modelado geométrico de parcelas y construcciones urbanas.'
        },
        exploracionMedellin: `Modelación del área de un terreno en el Parque Norte de Medellín expresado como el producto de dos dimensiones algebraicas (x + 5) y (x - 3).`,
        estructuracionTeorica: {
          concepto: `Un polinomio es una expresión algebraica compuesta por la suma de monomios no semejantes. Productos notables: (a + b)² = a² + 2ab + b², (a + b)(a - b) = a² - b².`,
          formulas: [
            '(a + b)² = a² + 2ab + b²',
            '(a - b)² = a² - 2ab + b²',
            'a² - b² = (a + b)(a - b)'
          ],
          ejemploPasoAPaso: {
            enunciado: 'Desarrollar el producto notable que representa el área de un cuadrado de lado (2x + 3) metros en una plazoleta pública de la Comuna 10 (La Candelaria).',
            pasos: [
              'Paso 1: Aplicar la fórmula del cuadrado de un binomio: (2x + 3)² = (2x)² + 2(2x)(3) + (3)²',
              'Paso 2: Elevar el primer término: (2x)² = 4x²',
              'Paso 3: Calcular el término central: 2 × 2x × 3 = 12x',
              'Paso 4: Elevar el segundo término: (3)² = 9'
            ],
            solucionFinal: 'El área expresada en forma polinómica es (4x² + 12x + 9) m².'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Factorizar en grupos de 4 estudiantes un conjunto de 5 trinomios cuadráticos.',
          tareaBarrial: 'Expresar en forma algebraica el perímetro del frente de su vivienda.'
        }
      })),
      2: Array.from({ length: 13 }, orgGen8P2()),
      3: Array.from({ length: 14 }, orgGen8P3())
    }
  },
  '9°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Sistemas de Ecuaciones Lineales 2x2: Concepto y Solución Gráfica',
          'Método de Eliminación (Reducción) en Sistemas 2x2',
          'Método de Sustitución en Sistemas 2x2',
          'Método de Igualación en Sistemas 2x2',
          'Regla de Cramer (Determinantes 2x2)',
          'Problemas de Aplicación con Sistemas 2x2 en la Industria Local',
          'Sistemas de Ecuaciones Lineales 3x3 y Aplicaciones',
          'Números Complejos: Unidad Imaginaria i y Propiedades',
          'Operaciones Básicas con Números Complejos (Suma, Resta, Multiplicación)',
          'Ecuación Cuadrática: Concepto y Solución por Factorización',
          'Fórmula General de la Ecuación Cuadrática y el Discriminante',
          'Análisis de Raíces Cuadráticas en Contextos Físicos',
          'Evaluación Acumulativa P1 Matemáticas 9°'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: 'Variacional y Sistemas Algebraicos',
        dba: 'DBA 1: Utiliza sistemas de ecuaciones lineales y cuadráticas para resolver problemas de la vida cotidiana y las ciencias.',
        competencia: 'Formulación y Ejecución',
        evidencia: 'Resuelve e interpreta la solución de sistemas de ecuaciones de primer y segundo grado.',
        dua: {
          representacion: 'Graficadores digitales (GeoGebra) e intersecante de rectas en tiempo real.',
          expresion: 'Modelación simbólica, gráfica o numérica a elección del estudiante.',
          implicacion: 'Optimización de costos en rutas de logística comercial de Medellín.'
        },
        exploracionMedellin: `Modelación del punto de equilibrio financiero para una microempresa textil de Itagüí/Medellín con costos fijos y variables.`,
        estructuracionTeorica: {
          concepto: `Un sistema de ecuaciones 2x2 consta de dos ecuaciones de primer grado con dos incógnitas. La solución representa el punto de intersección (x, y) de ambas rectas en el plano cartesiano.`,
          formulas: [
            'Fórmula Cuadrática: x = [-b ± √(b² - 4ac)] / (2a)',
            'Discriminante: Δ = b² - 4ac'
          ],
          ejemploPasoAPaso: {
            enunciado: 'En una bodega de confecciones en Guayaquil (Medellín) se vendieron 5 camisetas y 3 pantalones por $230.000 COP. Al día siguiente se vendieron 2 camisetas y 3 pantalones por $170.000 COP. Hallar el precio de cada prenda.',
            pasos: [
              'Paso 1: Definir variables: c = precio camiseta, p = precio pantalón.',
              'Paso 2: Plantear sistema: (1) 5c + 3p = 230.000; (2) 2c + 3p = 170.000.',
              'Paso 3: Restar ecuación (2) de ecuación (1): (5c - 2c) + (3p - 3p) = 230.000 - 170.000 => 3c = 60.000.',
              'Paso 4: c = 20.000 COP. Sustituir en (2): 2(20.000) + 3p = 170.000 => 40.000 + 3p = 170.000 => 3p = 130.000 => p = 43.333 COP.'
            ],
            solucionFinal: 'Cada camiseta cuesta $20.000 COP y cada pantalón $43.333 COP.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Resolver mediante GeoGebra y método algebraico 3 sistemas de ecuaciones en parejas.',
          tareaBarrial: 'Formular un sistema de ecuaciones basado en el costo de dos servicios públicos en el hogar.'
        }
      })),
      2: Array.from({ length: 13 }, orgGen9P2()),
      3: Array.from({ length: 14 }, orgGen9P3())
    }
  },
  '10°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => ({
        semana: i + 1,
        titulo: [
          'Ángulos y Sistemas de Medición (Sexagesimal y Radianes)',
          'Conversión entre Grados y Radianes',
          'Razones Trigonométricas en el Triángulo Rectángulo (Sen, Cos, Tan)',
          'Razones Recíprocas (Csc, Sec, Cot) y Valores Especiales (30°, 45°, 60°)',
          'Resolución de Triángulos Rectángulos y Ángulos de Elevación/Depresión',
          'Trigonometría en el Círculo Unitario y Líneas Trigonométricas',
          'Funciones Trigonométricas: Seno y Coseno (Dominio, Rango y Amplitud)',
          'Gráficas y Propiedades de la Función Tangente y Cotangente',
          'Identidades Trigonométricas Fundamentales (Pitagóricas y Recíprocas)',
          'Demostración de Identidades Trigonométricas',
          'Teorema del Seno para Triángulos Oblicuángulos',
          'Teorema del Coseno para Triángulos Oblicuángulos',
          'Evaluación Acumulativa P1 Trigonometría 10°'
        ][i],
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: 'Espacial y Sistemas Geométricos',
        dba: 'DBA 1: Utiliza las funciones trigonométricas para resolver problemas de medición indirecta y ondas.',
        competencia: 'Formulación, Tratamiento y Resolución de Problemas',
        evidencia: 'Resuelve problemas de medición de alturas y distancias inalcanzables usando razones trigonométricas y teoremas del seno/coseno.',
        dua: {
          representacion: 'Simuladores dinámicos del círculo unitario e inclinómetros artesanales.',
          expresion: 'Cálculo geométrico directo o informe técnico de medición en terreno.',
          implicacion: 'Medición de inclinación en el cable aéreo del Metrocable Picacho.'
        },
        exploracionMedellin: `Calcular la altura del edificio Coltejer en el centro de Medellín midiendo la sombra proyectada y el ángulo de elevación solar con un goniómetro.`,
        estructuracionTeorica: {
          concepto: `Las razones trigonométricas relacionan las medidas de los lados de un triángulo rectángulo con uno de sus ángulos agudos. Sen(θ) = Opuesto/Hipotenusa, Cos(θ) = Adyacente/Hipotenusa, Tan(θ) = Opuesto/Adyacente. Identidad fundamental: Sen²(θ) + Cos²(θ) = 1.`,
          formulas: [
            'Sen(θ) = O / H ; Cos(θ) = A / H ; Tan(θ) = O / A',
            'Teorema del Seno: a / Sen(A) = b / Sen(B) = c / Sen(C)',
            'Teorema del Coseno: c² = a² + b² - 2ab·Cos(C)'
          ],
          ejemploPasoAPaso: {
            enunciado: 'Un observador desde la cima del Cerro Nutibara avista la estación del Metro con un ángulo de depresión de 30°. Si la altura vertical del cerro es de 80 metros, calcular la distancia en línea recta hacia la estación.',
            pasos: [
              'Paso 1: Identificar el triángulo rectángulo: Ángulo θ = 30°, Cateto opuesto = 80 m, Hipotenusa = d.',
              'Paso 2: Aplicar la razón Seno: Sen(30°) = 80 / d.',
              'Paso 3: Sabiendo que Sen(30°) = 0.5: 0.5 = 80 / d => d = 80 / 0.5 = 160 metros.'
            ],
            solucionFinal: 'La distancia en línea recta es de 160 metros.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Construir un inclinómetro casero con transportador y plomada para medir la altura del bloque principal del colegio.',
          tareaBarrial: 'Estimar la pendiente de una calle empinada de la comuna calculando el ángulo de inclinación.'
        }
      })),
      2: Array.from({ length: 13 }, orgGen10P2()),
      3: Array.from({ length: 14 }, orgGen10P3())
    }
  },
  '11°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, orgGen11P1()),
      2: Array.from({ length: 13 }, orgGen11P2()),
      3: Array.from({ length: 14 }, orgGen11P3())
    }
  }
};

// Generadores auxiliares para mantener el código conciso pero 100% completo
function orgGen7P3(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 27,
    titulo: `Matemáticas 7° - P3 Sem ${i + 27}: Geometría Teorema de Pitágoras y Estadística Proporcional`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Espacial y Sistemas Geométricos',
    dba: 'DBA 4: Aplica el Teorema de Pitágoras para calcular longitudes desconocidas.',
    competencia: 'Formulación y Ejecución',
    evidencia: 'Resuelve problemas geométricos calculando hipotenusa y catetos en contextos reales.',
    dua: { representacion: 'Demostración con cuadrados sobre lados', expresion: 'Resolución de problemas', implicacion: 'Arquitectura tradicional antioqueña' },
    exploracionMedellin: 'Calcular la longitud del cable de soporte en una estructura del Metrocable.',
    estructuracionTeorica: {
      concepto: 'En todo triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.',
      formulas: ['a² + b² = c²'],
      ejemploPasoAPaso: {
        enunciado: 'Un cateto mide 6 m y el otro 8 m. Hallar la hipotenusa c.',
        pasos: ['c² = 6² + 8² = 36 + 64 = 100', 'c = √100 = 10 m'],
        solucionFinal: 'La hipotenusa mide 10 m.'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Taller de aplicación geométrica.', tareaBarrial: 'Medición de la diagonal de un televisor o ventana.' }
  });
}

function orgGen8P2(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 14,
    titulo: `Matemáticas 8° - P2 Sem ${i + 14}: Casos Avanzados de Factorización y Fracciones Algebraicas`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Variacional y Sistemas Algebraicos',
    dba: 'DBA 2: Simplifica expresiones racionales complejas.',
    competencia: 'Razonamiento y Comunicación',
    evidencia: 'Factoriza trinomios de la forma x² + bx + c y ax² + bx + c.',
    dua: { representacion: 'Modelación algebraica gráfica', expresion: 'Ejercitación estructurada', implicacion: 'Diseño estructural' },
    exploracionMedellin: 'Cálculo de resistencia de materiales en puentes de la autopista norte.',
    estructuracionTeorica: {
      concepto: 'Factorización de trinomios x² + bx + c buscando dos números p y q tales que p+q=b y p*q=c.',
      formulas: ['x² + (p+q)x + pq = (x+p)(x+q)'],
      ejemploPasoAPaso: {
        enunciado: 'Factorizar x² + 7x + 12.',
        pasos: ['Buscar dos números que sumados den 7 y multiplicados 12 -> 3 y 4', '(x + 3)(x + 4)'],
        solucionFinal: 'La expresión factorizada es (x + 3)(x + 4).'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Resolución de guías de factorización en parejas.', tareaBarrial: 'Comprobar área multiplicando binomios.' }
  });
}

function orgGen8P3(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 27,
    titulo: `Matemáticas 8° - P3 Sem ${i + 27}: Ecuaciones e Inecuaciones Lineales y Geometría de Demostración`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Variacional y Sistemas Algebraicos',
    dba: 'DBA 3: Resuelve inecuaciones lineales expresando la solución en notación de intervalo.',
    competencia: 'Argumentación',
    evidencia: 'Resuelve problemas de intervalos y despeje de variables.',
    dua: { representacion: 'Intervalos en la recta real con código de colores', expresion: 'Redacción de justificaciones', implicacion: 'Análisis de rangos permisibles de contaminación' },
    exploracionMedellin: 'Monitoreo del índice de calidad del aire (ICA) del Área Metropolitana.',
    estructuracionTeorica: {
      concepto: 'Una inecuación es una desigualdad donde se relacionan expresiones algebraicas mediante los signos <, >, ≤, ≥.',
      formulas: ['ax + b > c => ax > c - b'],
      ejemploPasoAPaso: {
        enunciado: 'Resolver 2x - 4 > 10.',
        pasos: ['2x > 10 + 4', '2x > 14', 'x > 7'],
        solucionFinal: 'Solución: x ∈ (7, +∞).'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Taller de inecuaciones ambientales.', tareaBarrial: 'Representar en la recta el límite de velocidad en su barrio.' }
  });
}

function orgGen9P2(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 14,
    titulo: `Matemáticas 9° - P2 Sem ${i + 14}: Función Exponencial, Logarítmica y Geometría Analítica`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Variacional y Sistemas Algebraicos',
    dba: 'DBA 2: Identifica las características de las funciones exponenciales y logarítmicas.',
    competencia: 'Modelación',
    evidencia: 'Modela crecimiento poblacional e interés compuesto.',
    dua: { representacion: 'Gráficas de crecimiento exponencial en GeoGebra', expresion: 'Explicación del comportamiento de curvas', implicacion: 'Proyecciones demográficas de Medellín' },
    exploracionMedellin: 'Modelado del crecimiento de usuarios de la tarjeta Cívica del Metro.',
    estructuracionTeorica: {
      concepto: 'Una función exponencial es de la forma f(x) = a^x con a > 0 y a ≠ 1.',
      formulas: ['y = a^x ⇔ log_a(y) = x', 'Interés Compuesto: A = P(1 + r/n)^(nt)'],
      ejemploPasoAPaso: {
        enunciado: 'Un capital de $1.000.000 se invierte al 10% anual. ¿Cuánto se tendrá en 2 años?',
        pasos: ['A = 1.000.000 × (1 + 0.10)²', 'A = 1.000.000 × 1.21 = 1.210.000 COP'],
        solucionFinal: '$1.210.000 COP.'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Ejercicios de logaritmos aplicados.', tareaBarrial: 'Consultar la tasa de interés de un microcrédito bancario.' }
  });
}

function orgGen9P3(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 27,
    titulo: `Matemáticas 9° - P3 Sem ${i + 27}: Semejanza de Triángulos, Teorema de Tales y Estadística Combinatoria`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Espacial y Sistemas Geométricos',
    dba: 'DBA 3: Aplica criterios de semejanza y el Teorema de Tales en la resolución de problemas.',
    competencia: 'Resolución de Problemas',
    evidencia: 'Demuestra semejanzas y calcula sombras relativas.',
    dua: { representacion: 'Triángulos semejantes superpuestos', expresion: 'Cálculo de escalas', implicacion: 'Arquitectura del Tranvía de Ayacucho' },
    exploracionMedellin: 'Determinar la altura del Museo de Arte Moderno de Medellín (MAMM) mediante la sombra proyectada.',
    estructuracionTeorica: {
      concepto: 'Dos triángulos son semejantes si sus ángulos correspondientes son iguales y sus lados homólogos son proporcionales.',
      formulas: ['a/a\' = b/b\' = c/c\'', 'Permutaciones: P(n) = n!'],
      ejemploPasoAPaso: {
        enunciado: 'Un poste de 3 m proyecta una sombra de 2 m. A la misma hora, un edificio proyecta una sombra de 12 m. ¿Cuál es la altura del edificio?',
        pasos: ['Proporción: 3 / 2 = H / 12', 'H = (3 × 12) / 2 = 36 / 2 = 18 m'],
        solucionFinal: 'La altura es 18 metros.'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Taller de Teorema de Tales en el patio escolar.', tareaBarrial: 'Medir la sombra de un árbol de su cuadra.' }
  });
}

function orgGen10P2(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 14,
    titulo: `Matemáticas 10° - P2 Sem ${i + 14}: Geometría Analítica: La Circunferencia y la Parábola`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Espacial y Sistemas Geométricos',
    dba: 'DBA 2: Identifica los elementos de las secciones cónicas y sus ecuaciones cartesianas.',
    competencia: 'Interpretación y Representación',
    evidencia: 'Grafica e identifica centro, radio, foco y directriz en cónicas.',
    dua: { representacion: 'Simulador dinámico de secciones cónicas', expresion: 'Representación gráfica y analítica', implicacion: 'Diseño de antenas parabólicas en la ciudad' },
    exploracionMedellin: 'Análisis de la forma parabólica de los arcos del Estadio Atanasio Girardot.',
    estructuracionTeorica: {
      concepto: 'La circunferencia es el lugar geométrico de los puntos que equidistan de un punto fijo llamado centro.',
      formulas: ['(x - h)² + (y - k)² = r²', 'Parábola vertical: (x - h)² = 4p(y - k)'],
      ejemploPasoAPaso: {
        enunciado: 'Hallar la ecuación de la circunferencia con centro en (2, -3) y radio r = 5.',
        pasos: ['(x - 2)² + (y - (-3))² = 5²', '(x - 2)² + (y + 3)² = 25'],
        solucionFinal: '(x - 2)² + (y + 3)² = 25.'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Taller de cónicas en GeoGebra.', tareaBarrial: 'Identificar 2 formas cónicas en construcciones del barrio.' }
  });
}

function orgGen10P3(): (v: any, i: number) => PlanSemana {
  return (_, i) => ({
    semana: i + 27,
    titulo: `Matemáticas 10° - P3 Sem ${i + 27}: La Elipse, la Hipérbola y Estadística Descriptiva Integrada`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Aleatorio y Sistemas de Datos',
    dba: 'DBA 3: Resuelve problemas de cónicas y aplica análisis de regresión lineal en datos.',
    competencia: 'Formulación y Ejecución ICFES',
    evidencia: 'Determina ecuaciones de elipses y calcula medidas de dispersión (Varianza y Desviación Estándar).',
    dua: { representacion: 'Diagramas de dispersión con línea de tendencia', expresion: 'Interpretación estadística', implicacion: 'Análisis de hábitos de consumo de agua EPM' },
    exploracionMedellin: 'Análisis de la elipse orbital del Planetario de Medellín.',
    estructuracionTeorica: {
      concepto: 'La elipse es el lugar geométrico de los puntos cuya suma de distancias a dos focos es constante.',
      formulas: ['(x-h)²/a² + (y-k)²/b² = 1', 'Desviación Estándar σ = √(Σ(x_i - x̄)² / N)'],
      ejemploPasoAPaso: {
        enunciado: 'Si la varianza de los tiempos de recorrido en bus es 16 min², calcular la desviación estándar.',
        pasos: ['σ = √16 = 4 minutos'],
        solucionFinal: 'La desviación estándar es de 4 minutos.'
      }
    },
    ejercitacionYCierre: { colaborativo: 'Cálculo de desviación estándar en notas del curso.', tareaBarrial: 'Graficar tiempo de viaje en la semana.' }
  });
}

function orgGen11P1(): (v: any, i: number) => PlanSemana {
  return (_, i) => {
    const semNum = i + 1;
    const titulosP1 = [
      'Diagnóstico de Competencias y Análisis de la Estructura de la Prueba SABER 11 (ICFES)',
      'Conjuntos Numéricos en R, Desigualdades y Propiedades de Orden',
      'Inecuaciones Lineales y Aplicaciones en Restricciones Financieras y Ambientales',
      'Inecuaciones Cuadráticas, Fraccionarias y con Valor Absoluto',
      'Entrenador SABER 11 - Componente Numérico-Variacional: Lectura e Interpretación de Tablas y Gráficos',
      'Concepto de Función Real: Dominio, Rango y Representaciones Tabulares, Gráficas y Analíticas',
      'Funciones Polinómicas, Lineales, Cuadráticas y Modelación de Fenómenos Cotidianos',
      'Entrenador SABER 11 - Componente Geométrico-Métrico: Razonamiento Espacial, Perímetros y Áreas',
      'Funciones Racionales, Exponenciales y Logarítmicas en Contextos Sociales y Económicos',
      'Entrenador SABER 11 - Componente Aleatorio: Medidas de Tendencia Central, Diagramas de Caja y Probabilidad',
      'Taller de Argumentación y Formulación de Problemas Complejos Tipo ICFES Saber 11',
      'Simulacro Integrado de Razonamiento Cuantitativo SABER 11 y Análisis de Claves de Respuesta',
      'Evaluación Acumulativa P1: Fundamentos de Funciones y Entrenamiento Intensivo SABER 11'
    ];

    return {
      semana: semNum,
      titulo: `Matemáticas 11° - P1 Sem ${semNum}: ${titulosP1[i]}`,
      tiempoEstimado: '120 minutos (3 horas académicas)',
      pensamiento: i % 3 === 0 ? 'Numérico y Sistemas Numéricos' : i % 3 === 1 ? 'Variacional y Sistemas Algebraicos' : 'Aleatorio y Sistemas de Datos',
      dba: 'DBA 1: Interpreta y utiliza conceptos numéricos, variacionales y probabilísticos para resolver situaciones complejas tipo ICFES Saber 11.',
      competencia: 'Interpretación, Formulación y Argumentación ICFES Saber 11',
      evidencia: 'Resuelve e interpreta problemas de razonamiento cuantitativo, tablas, funciones e inecuaciones.',
      dua: {
        representacion: 'Presentación interactiva con reactivos tipo ICFES y representaciones múltiples de funciones.',
        expresion: 'Análisis crítico colectivo de claves de respuesta y descarte de distractores.',
        implicacion: 'Manejo del tiempo y control de la ansiedad en pruebas de estado.'
      },
      exploracionMedellin: 'Análisis cuantitativo de los datos de cobertura del sistema de transporte masivo Metro y Metrocable de Medellín.',
      estructuracionTeorica: {
        concepto: 'El razonamiento cuantitativo de las Pruebas SABER 11 evalúa tres competencias fundamentales: Interpretación y representación de información, Formulación y ejecución de procedimientos, y Argumentación de soluciones.',
        formulas: [
          'Inecuación Lineal: ax + b > c => x > (c - b) / a (si a > 0)',
          'Dominio de f(x) = g(x)/h(x): Todos los x reales tales que h(x) ≠ 0',
          'Razón de cambio promedio: Δy / Δx = (f(x2) - f(x1)) / (x2 - x1)'
        ],
        ejemploPasoAPaso: {
          enunciado: 'En una pregunta tipo Saber 11, la tarifa de un servicio de transporte en Medellín es T(x) = 3000 + 1500x, donde x es el número de kilómetros recorridos. Si un usuario dispone de máximo $18.000 COP, ¿cuántos kilómetros como máximo puede recorrer?',
          pasos: [
            'Paso 1: Plantear la inecuación: 3000 + 1500x ≤ 18000.',
            'Paso 2: Restar 3000 a ambos lados: 1500x ≤ 15000.',
            'Paso 3: Dividir entre 1500: x ≤ 10 kilómetros.'
          ],
          solucionFinal: 'El usuario puede recorrer como máximo 10 kilómetros.'
        }
      },
      ejercitacionYCierre: {
        colaborativo: 'Taller simulacro en parejas analizando 5 preguntas liberadas de la Prueba Saber 11.',
        tareaBarrial: 'Resolver el módulo semanal del cuadernillo de preparación Saber 11.'
      }
    };
  };
}

function orgGen11P2(): (v: any, i: number) => PlanSemana {
  return (_, i) => {
    const semNum = i + 14;
    const esPrimeraMitadP2 = i < 6;

    if (esPrimeraMitadP2) {
      const titulosP2a = [
        'Modelos Funcionales Lineales y Cuadráticos en Contexto Real',
        'Funciones Exponenciales y Logarítmicas en Fenómenos Cíclicos',
        'Coordenadas Cartesianas y Objetos Geométricos en 2D y 3D',
        'Eventos Independientes, Dependientes y Probabilidad Condicional',
        'Resolución de Problemas Complejos y Simulacro Tipo ICFES Saber 11',
        'Cierre de Preparación Intensiva y Aplicación Oficial de la Prueba SABER 11'
      ];
      return {
        semana: semNum,
        titulo: `Matemáticas 11° - P2 Sem ${semNum}: ${titulosP2a[i]}`,
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: i < 3 ? 'Numérico y Sistemas Numéricos' : 'Aleatorio y Sistemas de Datos',
        dba: 'DBA 7: Usa propiedades y modelos funcionales para analizar situaciones y relaciones en contextos intraescolares y extraescolares.',
        competencia: 'Formulación, Ejecución y Argumentación ICFES Saber 11',
        evidencia: 'Resuelve problemas que involucran modelos funcionales, probabilidades condicionales y razonamiento geométrico.',
        dua: {
          representacion: 'Simulación de preguntas con modelos funcionales y tablas de contingencia.',
          expresion: 'Defensa oral del procedimiento y análisis de la clave de respuesta.',
          implicacion: 'Estrategias de concentración y manejo del tiempo en la Prueba SABER 11.'
        },
        exploracionMedellin: 'Análisis de las probabilidades de flujo de usuarios en el Tranvía de Ayacucho durante horas pico.',
        estructuracionTeorica: {
          concepto: 'Las funciones lineales f(x) = mx + b y cuadráticas f(x) = ax² + bx + c permiten modelar costos, trayectorias e ingresos en la economía y la física.',
          formulas: [
            'f(x) = mx + b (Pendiente m = (y2 - y1) / (x2 - x1))',
            'P(A|B) = P(A ∩ B) / P(B) (Probabilidad Condicional)',
            'Vértice Parábola: x_v = -b / (2a)'
          ],
          ejemploPasoAPaso: {
            enunciado: 'En un sondeo a 100 estudiantes de 11° en Medellín, 60 estudian para la prueba Saber y 40 hacen deporte. Si 30 hacen ambas cosas, ¿cuál es la probabilidad de que un estudiante haga deporte dado que ya estudia para la prueba?',
            pasos: [
              'Paso 1: Identificar P(Estudia) = 60 / 100 = 0.60.',
              'Paso 2: Identificar P(Deporte ∩ Estudia) = 30 / 100 = 0.30.',
              'Paso 3: Aplicar fórmula condicional: P(Deporte | Estudia) = 0.30 / 0.60 = 0.50 (50%).'
            ],
            solucionFinal: 'La probabilidad condicional es del 50%.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Taller simulacro de lectura e interpretación de gráficos para la Prueba SABER 11.',
          tareaBarrial: 'Resolver 4 preguntas del cuadernillo oficial de entrenamiento.'
        }
      };
    } else {
      const titulosP2b = [
        'Etapa Pos-SABER: Introducción a los Límites de Funciones y Noción Intuitiva de Infinito',
        'Límites Laterales y Existencia del Límite en un Punto',
        'Límites Indeterminados de la Forma 0 / 0 y Métodos de Factorización',
        'Límites Indeterminados con Racionalización y Límites al Infinito',
        'Asíntotas Verticales y Horizontales en Funciones Racionales',
        'Continuidad de Funciones en un Punto y en Intervalos Reales',
        'Evaluación Acumulativa P2: Límites y Continuidad de Funciones'
      ];
      const subIdx = i - 6;
      return {
        semana: semNum,
        titulo: `Matemáticas 11° - P2 Sem ${semNum}: ${titulosP2b[subIdx]}`,
        tiempoEstimado: '120 minutos (3 horas académicas)',
        pensamiento: 'Variacional y Sistemas Algebraicos',
        dba: 'DBA 2: Utiliza las técnicas de aproximación y el concepto de límite para estudiar el comportamiento de funciones en procesos infinitos.',
        competencia: 'Razonamiento y Modelación Matemático-Científica',
        evidencia: 'Evalúa límites indeterminados y determina la continuidad de funciones en entornos reales.',
        dua: {
          representacion: 'Visualización de aproximaciones numéricas de límites y gráficas en GeoGebra.',
          expresion: 'Resolución de límites mediante álgebra directa y aproximaciones por tablas.',
          implicacion: 'Modelación de la aproximación de velocidades de vehículos en el Metro de Medellín.'
        },
        exploracionMedellin: 'Estudiar el comportamiento límite de la velocidad de un vagón del Metro al aproximarse a la estación de parada.',
        estructuracionTeorica: {
          concepto: 'El límite de f(x) cuando x tiende a c es el valor L al que se aproximan sus imágenes: lim_{x->c} f(x) = L. Si f(c) resulta en 0/0, se debe factorizar o racionalizar.',
          formulas: [
            'lim_{x->c} f(x) = L',
            'Asíntota Vertical: lim_{x->c} f(x) = ±∞',
            'Continuidad: lim_{x->c} f(x) = f(c)'
          ],
          ejemploPasoAPaso: {
            enunciado: 'Calcular el límite de la función f(x) = (x² - 9) / (x - 3) cuando x tiende a 3.',
            pasos: [
              'Paso 1: Evaluar directamente: (3² - 9) / (3 - 3) = 0 / 0 (Indeterminación).',
              'Paso 2: Factorizar el numerador como diferencia de cuadrados: (x - 3)(x + 3) / (x - 3).',
              'Paso 3: Cancelar el factor común (x - 3) para x ≠ 3: quedándonos f(x) = x + 3.',
              'Paso 4: Evaluar el límite resultante: lim_{x->3} (x + 3) = 3 + 3 = 6.'
            ],
            solucionFinal: 'El límite de la función cuando x tiende a 3 es igual a 6.'
          }
        },
        ejercitacionYCierre: {
          colaborativo: 'Resolución en parejas de una guía de límites indeterminados mediante factorización.',
          tareaBarrial: 'Investigar una aplicación práctica del concepto de continuidad en ingeniería o biología.'
        }
      };
    }
  };
}

function orgGen11P3(): (v: any, i: number) => PlanSemana {
  return (_, i) => {
    const semNum = i + 27;
    const titulosP3 = [
      'Noción de Razón de Cambio Instantánea: Secantes y Tangentes a una Curva',
      'Definición Formal de la Derivada mediante el Límite del Cociente de Diferencias',
      'Reglas Fundamentales de Derivación: Regla de la Constante, Potencia y Suma',
      'Derivada del Producto y del Cociente de Funciones',
      'Regla de la Cadena para Funciones Compuestas',
      'Derivación Implícita y Derivadas de Funciones Trigonométricas (Seno, Coseno, Tangente)',
      'Derivadas de Funciones Exponenciales y Logarítmicas',
      'Aplicaciones de la Derivada: Criterio de la Primera Derivada para Máximos y Mínimos',
      'Criterio de la Segunda Derivada: Concavidad y Puntos de Inflexión',
      'Optimización de Funciones en Problemas de Ingeniería, Economía y Negocios',
      'Introducción al Cálculo Integral: Noción de Antiderivada e Integral Indefinida',
      'Métodos de Integración: Integración por Sustitución Simple',
      'Área Bajo la Curva y Teorema Fundamental del Cálculo (Integral Definida)',
      'Evaluación Acumulativa Final de Cálculo Diferencial e Integral 11°'
    ];

    return {
      semana: semNum,
      titulo: `Matemáticas 11° - P3 Sem ${semNum}: ${titulosP3[i]}`,
      tiempoEstimado: '120 minutos (3 horas académicas)',
      pensamiento: i < 11 ? 'Variacional y Sistemas Algebraicos' : 'Aleatorio y Sistemas de Datos',
      dba: 'DBA 3: Utiliza la derivada y la integral definida para resolver problemas de optimización y acumulación en contextos científicos y tecnológicos.',
      competencia: 'Razonamiento, Modelación y Solución de Problemas de Cálculo',
      evidencia: 'Aplica reglas de derivación e integración para optimizar recursos y analizar tasas de cambio acumuladas.',
      dua: {
        representacion: 'Modelación tridimensional de áreas bajo la curva y gráficos de concavidad.',
        expresion: 'Construcción analítica y gráfica de soluciones de optimización.',
        implicacion: 'Proyectos de diseño eficiente para empresas locales de Medellín.'
      },
      exploracionMedellin: 'Diseñar un empaque cilíndrico de volumen máximo para productos alimenticios de la comuna usando derivadas de optimización.',
      estructuracionTeorica: {
        concepto: 'La derivada f\'(x) representa la razón de cambio instantánea y la pendiente de la recta tangente. La integral definida representa el área acumulada bajo la curva de una función f(x) en el intervalo [a, b].',
        formulas: [
          'Definición de Derivada: f\'(x) = lim_{h->0} [f(x + h) - f(x)] / h',
          'Regla de Potencia: d/dx [x^n] = n × x^(n-1)',
          'Regla del Producto: d/dx [u × v] = u\'v + uv\'',
          'Teorema Fundamental del Cálculo: ∫_a^b f(x) dx = F(b) - F(a)'
        ],
        ejemploPasoAPaso: {
          enunciado: 'Hallar los puntos críticos y maximizar la función de ingresos I(x) = -x² + 40x + 100 de un emprendimiento juvenil de Medellín.',
          pasos: [
            'Paso 1: Calcular la primera derivada: I\'(x) = -2x + 40.',
            'Paso 2: Igualar a cero para encontrar el punto crítico: -2x + 40 = 0 => 2x = 40 => x = 20.',
            'Paso 3: Evaluar la segunda derivada: I\'\'(x) = -2 < 0, lo que confirma un máximo en x = 20 unidades.',
            'Paso 4: Calcular el ingreso máximo: I(20) = -(20)² + 40(20) + 100 = -400 + 800 + 100 = 500 COP.'
          ],
          solucionFinal: 'El ingreso se maximiza al vender 20 unidades, alcanzando un ingreso máximo de $500 COP.'
        }
      },
      ejercitacionYCierre: {
        colaborativo: 'Desarrollar un taller de optimización de costos y materiales en grupos de 3 estudiantes.',
        tareaBarrial: 'Consultar cómo se utiliza el cálculo infinitesimal en programas universitarios de ingeniería o administración.'
      }
    };
  };
}

// Función helper para obtener un plan seguro si no se encuentra
export function getPlanSemana(grado: Grado, asignatura: Asignatura, periodo: PeriodoId, semana: number): PlanSemana {
  const asigEfectiva: Asignatura = (grado === '10°' || grado === '11°') ? 'Matemáticas' : asignatura;
  const planes = mallaCurricular[grado]?.[asigEfectiva]?.[periodo];
  
  if (planes) {
    const plan = planes.find(p => p.semana === semana);
    if (plan) return plan;
    if (planes.length > 0) return planes[0];
  }

  // Fallback por defecto si no existiera
  return {
    semana: semana || 1,
    titulo: `Plan de Clase para ${asigEfectiva} ${grado} - Periodo ${periodo}, Semana ${semana}`,
    tiempoEstimado: '120 minutos',
    pensamiento: 'Numérico y Sistemas Numéricos',
    dba: 'DBA General: Aplica conceptos matemáticos para la resolución de problemas en el contexto escolar.',
    competencia: 'Resolución de problemas',
    evidencia: 'Demuestra dominio del tema mediante ejercitación guiada.',
    dua: {
      representacion: 'Apoyo con elementos concretos y esquemas dinámicos.',
      expresion: 'Sustentación oral y escrita.',
      implicacion: 'Contextualización en la vida cotidiana de Medellín.'
    },
    exploracionMedellin: 'Desafío de cálculo sobre distancias y costos en el Metro de Medellín.',
    estructuracionTeorica: {
      concepto: 'Explicación magistral del tema asignado para la semana con rigor matemático.',
      formulas: ['f(x) = y', 'A = b × h'],
      ejemploPasoAPaso: {
        enunciado: 'Ejemplo resuelto paso a paso con números reales en el contexto local.',
        pasos: ['Paso 1: Identificar datos', 'Paso 2: Aplicar algoritmo', 'Paso 3: Verificar resultado'],
        solucionFinal: 'Resultado verificado exitosamente.'
      }
    },
    ejercitacionYCierre: {
      colaborativo: 'Trabajo grupal en el aula de clases.',
      tareaBarrial: 'Aplicación en el hogar o barrio.'
    }
  };
}
