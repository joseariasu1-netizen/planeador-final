import { Asignatura, Grado, PeriodoId, PlanSemana } from '../types';
import { mallaPrimaria } from './mallaPrimaria';

export interface MallaDB {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
}

export const mallaCurricular: MallaDB = {
  ...mallaPrimaria,
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
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosE6P2 = [
          'Medidas de Tendencia Central: Concepto de Media Aritmética (Promedio)',
          'Cálculo de la Mediana en Conjuntos de Datos Pares e Impares',
          'La Moda: Identificación de Datos Unimodales, Bimodales y Multimodales',
          'Comparación entre Media, Mediana y Moda en Situaciones Reales',
          'Tablas de Contingencia para Variables Cualitativas Cruzadas',
          'Análisis de Datos Estadísticos sobre Consumo de Agua en Medellín (EPM)',
          'Diagramas de Puntos (Dot Plots) y Distribución de Datos',
          'Diagrama de Tallo y Hojas para Organización de Datos cuantitativos',
          'Medidas de Posición Básicas: Noción de Cuartiles',
          'Interpretación de Diagramas de Caja y Bigotes (Boxplot)',
          'Errores Comunes en la Interpretación de Gráficos Estadísticos',
          'Taller Integrado de Análisis de Datos de la Comunidad Escolar',
          'Evaluación Acumulativa P2 Estadística 6°'
        ];
        return {
          semana: i + 14,
          titulo: titulosE6P2[i],
          tiempoEstimado: '60 minutos (1 hora académica)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 5: Aplica medidas de tendencia central para caracterizar un conjunto de datos.',
          competencia: 'Formulación y Ejecución',
          evidencia: 'Calcula e interpreta la media, mediana y moda en datos no agrupados.',
          dua: { representacion: 'Línea numérica con pivotes de colores', expresion: 'Resolución de problemas cotidianos', implicacion: 'Análisis de datos deportivos de la ciudad' },
          exploracionMedellin: 'Análisis de las temperaturas medias diarias en el Valle de Aburrá.',
          estructuracionTeorica: {
            concepto: 'Las medidas de tendencia central (Media, Mediana, Moda) resumen en un solo valor el centro de la distribución.',
            formulas: ['Media = Σ x / N', 'Moda = Dato con mayor frecuencia'],
            ejemploPasoAPaso: {
              enunciado: 'Calcular la media de las edades de 5 estudiantes: 11, 12, 11, 13, 13 años.',
              pasos: ['Suma: 11+12+11+13+13 = 60', 'Dividir por 5: 60 / 5 = 12'],
              solucionFinal: 'La edad media es 12 años.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Calcular la moda y la mediana del grupo.', tareaBarrial: 'Registrar las horas de estudio en casa durante la semana.' }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosE6P3 = [
          'Experimentos Aleatorios y Deterministas: Concepto y Diferencias',
          'Espacio Muestral y Eventos o Sucesos',
          'Clasificación de Eventos: Evento Seguro, Posible e Imposible',
          'Probabilidad Cualitativa: Altamente Probable, Poco Probable y Equiprobable',
          'Introducción a la Regla de Laplace para Eventos Equiprobables',
          'Lanzamiento de Monedas y Dados: Frecuencia Relativa y Azar',
          'Probabilidad en Extracción de Canicas/Bolas de Urnas',
          'Experimentos Aleatorios en el Clima de Medellín (Lluvia/Sol)',
          'Simulación de Juegos de Azar Justos e Injustos',
          'Conteo de Resultados Mediante Diagramas de Árbol Sencillos',
          'Tablas de Frecuencia de Experimentos Repetidos',
          'Análisis Crítico del Azar en Decisiones Cotidianas',
          'Taller Práctico de Juegos de Probabilidad',
          'Evaluación Acumulativa Final P3 Estadística 6°'
        ];
        return {
          semana: i + 27,
          titulo: titulosE6P3[i],
          tiempoEstimado: '60 minutos (1 hora académica)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 6: Anticipa la ocurrencia de eventos en experimentos aleatorios sencillos.',
          competencia: 'Argumentación y Análisis de Probabilidades',
          evidencia: 'Clasifica eventos como imposibles, posibles o seguros y calcula probabilidades simples.',
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
        };
      })
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
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM7P2 = [
          'El Conjunto de los Números Racionales (Q): Representación en la Recta y Fracciones Equivalentes',
          'Adición y Sustracción de Números Racionales (Fraccionarios y Decimales)',
          'Multiplicación y División de Números Racionales',
          'Potenciación y Radicación en los Números Racionales',
          'Ecuaciones de Primer Grado con Números Racionales',
          'Razones y Proporciones: Concepto, Términos y Propiedad Fundamental',
          'Magnitudes Directamente Proporcionales y Su Constante de Proporcionalidad',
          'Magnitudes Inversamente Proporcionales y Representación Gráfica',
          'Regla de Tres Simple Directa en Contextos de Comercio y Transporte',
          'Regla de Tres Simple Inversa en Tiempos de Trabajo y Velocidad',
          'Regla de Tres Compuesta y Problemas Multivariables',
          'Porcentajes, Interés Simple y Aplicaciones Financieras Cotidianas',
          'Evaluación Acumulativa P2 Matemáticas 7°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM7P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: i < 5 ? 'Numérico y Sistemas Numéricos' : 'Variacional y Sistemas Algebraicos',
          dba: 'DBA 2: Describe situaciones de variación proporcional utilizando expresiones algebraicas y numéricas.',
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
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM7P3 = [
          'Concepto de Perímetro y Área en Polígonos Regulares e Irregulares',
          'Área de Triángulos, Cuadriláteros (Paralelogramos, Trapecios) y Círculos',
          'Teorema de Pitágoras: Demostración Geométrica e Interpretación',
          'Cálculo de Hipotenusa y Catetos en Triángulos Rectángulos',
          'Sólidos Geométricos: Prismas Rectos, Pirámides y Cilindros',
          'Área Superficial Lateral y Total de Prismas y Cilindros',
          'Volumen de Prismas Rectos y Cilindros',
          'Relación Entre Unidades de Volumen (m³, cm³) y Capacidad (Litros)',
          'Semejanza y Escalas en Dibujo Técnico y Mapas Urbanos de Medellín',
          'Estadística: Frecuencias Agrupadas e Intervalos de Clase',
          'Construcción e Interpretación de Histogramas y Polígonos de Frecuencia',
          'Medidas de Tendencia Central para Datos Agrupados (Media y Moda)',
          'Probabilidad Simple: Experimentos Aleatorios y Regla de Laplace',
          'Repaso General y Evaluación Acumulativa Final P3 Matemáticas 7°'
        ];
        return {
          semana: i + 27,
          titulo: titulosM7P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: i < 9 ? 'Espacial y Sistemas Geométricos' : 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 4: Aplica el Teorema de Pitágoras y fórmulas de volumen para resolver problemas de medición.',
          competencia: 'Formulación y Ejecución',
          evidencia: 'Resuelve problemas geométricos calculando longitudes, áreas, volúmenes y probabilidades.',
          dua: { representacion: 'Demostración con cuadrados sobre lados', expresion: 'Resolución de problemas', implicacion: 'Arquitectura tradicional antioqueña' },
          exploracionMedellin: 'Calcular la longitud del cable de soporte en una estructura del Metrocable.',
          estructuracionTeorica: {
            concepto: 'En todo triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.',
            formulas: ['a² + b² = c²', 'V = Base × Altura (Volumen Prismas)'],
            ejemploPasoAPaso: {
              enunciado: 'Un cateto mide 6 m y el otro 8 m. Hallar la hipotenusa c.',
              pasos: ['c² = 6² + 8² = 36 + 64 = 100', 'c = √100 = 10 m'],
              solucionFinal: 'La hipotenusa mide 10 m.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de aplicación geométrica.', tareaBarrial: 'Medición de la diagonal de un televisor o ventana.' }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosE7P1 = [
          'Población, Muestra Representativa y Variables Cualitativas/Cuantitativas',
          'Métodos de Muestreo y Prevención de Sesgos en Encuestas Escolares',
          'Tablas de Frecuencias para Datos No Agrupados (Absoluta, Relativa, Porcentual)',
          'Frecuencias Acumuladas y Distribución de Respuestas',
          'Diagramas de Barras Dobles y Comparativas por Sedes o Género',
          'Histogramas y Polígonos de Frecuencia: Construcción e Interpretación',
          'Diagramas Circulares (Sectores) y su Relación con Razones y Proporciones',
          'Interpretación de Gráficos Estadísticos en Medios de Comunicación de Medellín',
          'Diagramas de Líneas y Análisis de Series Temporales (Consumo EPM)',
          'Medidas de Tendencia Central: Media Aritmética (Promedio Ponderado)',
          'Cálculo e Interpretación de la Mediana en Conjuntos Pares e Impares',
          'La Moda y Comparación Crítica entre Media, Mediana y Moda',
          'Repaso General y Evaluación Acumulativa P1 Estadística 7°'
        ];
        return {
          semana: i + 1,
          titulo: titulosE7P1[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 5: Plantea preguntas para realizar estudios estadísticos, selecciona el método de recolección de datos y organiza la información en tablas y gráficos pertinentes.',
          competencia: 'Interpretación y Representación',
          evidencia: 'Recolecta, clasifica y representa datos en tablas y gráficos, calculando medidas de tendencia central.',
          dua: {
            representacion: 'Tablas dinámicas con código de colores e infografías estadísticas interactivas.',
            expresion: 'Elaboración de carteleras informativas o exposiciones orales sobre problemáticas barriales.',
            implicacion: 'Encuestas sobre movilidad y uso del espacio público en la comuna 12 de Medellín.'
          },
          exploracionMedellin: `Realizar un sondeo sobre el número de viajes semanales en Metro o Metrocable de las familias de la IE Rafael Uribe Uribe.`,
          estructuracionTeorica: {
            concepto: `Fundamentos de estadística descriptiva en '${titulosE7P1[i]}'. Permite sintetizar y extraer conclusiones objetivas de un conjunto de observaciones.`,
            formulas: [
              'Frecuencia Relativa: f_r = f_i / N',
              'Porcentaje: % = f_r × 100',
              'Media: x̄ = (Σ x_i) / N',
              'Ángulo Gráfico Circular = f_r × 360°'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Se registran los minutos de traslado diario hacia la escuela de 5 estudiantes: 15, 20, 25, 20, 30 min. Calcular la media, mediana y moda.',
              pasos: [
                'Paso 1: Sumar los datos y dividir entre 5 para la media: (15 + 20 + 25 + 20 + 30)/5 = 110/5 = 22 minutos.',
                'Paso 2: Ordenar los datos de menor a mayor: 15, 20, 20, 25, 30. El valor central es 20 minutos (Mediana).',
                'Paso 3: El dato con mayor frecuencia es 20 minutos (Moda).'
              ],
              solucionFinal: 'Media: 22 min, Mediana: 20 min, Moda: 20 min.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Diseñar y tabular en parejas una encuesta sobre hábitos de lectura escolar.',
            tareaBarrial: 'Consultar en casa el consumo de gas natural de los últimos 3 meses y promediarlo.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosE7P2 = [
          'Medidas de Dispersión Básica: Rango o Recorrido de los Datos',
          'Noción de Variabilidad y Desviación Respecto a la Media',
          'Medidas de Posición No Central: Noción de Cuartiles (Q1, Q2, Q3)',
          'Cálculo de Cuartiles y Rango Intercuartílico (RIC)',
          'Diagramas de Caja y Bigotes (Boxplot): Interpretación Visual',
          'Comparación de Dos Grupos Mediante Boxplots y Diagramas de Puntos',
          'Tablas de Doble Entrada y Frecuencias Cruzadas para Variables Cualitativas',
          'Análisis de Tablas de Contingencia en Contextos Sociales de Medellín',
          'Gráficos de Dispersión Simples y Asociación Positiva/Negativa',
          'Análisis de Datos Ambientales: Calidad del Aire (ICA) en el Valle de Aburrá',
          'Detección de Errores y Manipulación en Gráficos de la Publicidad',
          'Taller de Proyectos Estadísticos: Análisis de Encuestas Institucionales',
          'Evaluación Acumulativa P2 Estadística 7°'
        ];
        return {
          semana: i + 14,
          titulo: titulosE7P2[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 6: Interpreta información que involucra medidas de posición y dispersión para caracterizar poblaciones.',
          competencia: 'Formulación y Ejecución',
          evidencia: 'Calcula medidas de dispersión y posición, construyendo e interpretando diagramas de caja y tablas de contingencia.',
          dua: {
            representacion: 'Diagramas de caja con segmentos táctiles y esquemas comparativos en pantalla.',
            expresion: 'Informe de análisis escrito o infografía digital comparativa.',
            implicacion: 'Análisis de datos de consumo responsable de agua en Medellín (EPM).'
          },
          exploracionMedellin: 'Comparación del rango de temperaturas máximas y mínimas registradas en el Valle de Aburrá.',
          estructuracionTeorica: {
            concepto: `Estudio temático de '${titulosE7P2[i]}'. Las medidas de dispersión y posición permiten conocer qué tan agrupados o dispersos están los datos alrededor del centro.`,
            formulas: [
              'Rango = Valor Máximo - Valor Mínimo',
              'RIC = Q3 - Q1',
              'Q2 = Mediana'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En una muestra de 7 lecturas de consumo eléctrico (kWh) ordenadas: 40, 45, 50, 60, 70, 85, 90. Hallar el rango y el rango intercuartílico (RIC).',
              pasos: [
                'Paso 1: Rango = 90 - 40 = 50 kWh.',
                'Paso 2: Mediana (Q2) = 60. Mitad inferior: {40, 45, 50} => Q1 = 45.',
                'Paso 3: Mitad superior: {70, 85, 90} => Q3 = 85.',
                'Paso 4: RIC = Q3 - Q1 = 85 - 45 = 40 kWh.'
              ],
              solucionFinal: 'Rango: 50 kWh, Q1: 45, Q2: 60, Q3: 85, RIC: 40 kWh.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Elaborar un diagrama de caja comparativo en papel milimetrado.',
            tareaBarrial: 'Registrar la cantidad de integrantes por hogar en 5 familias vecinas y calcular el rango.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosE7P3 = [
          'Experimentos Aleatorios y Deterministas: Espacio Muestral (Ω)',
          'Eventos Simples, Compuestos, Seguros, Posibles e Imposibles',
          'Técnicas de Conteo: Diagramas de Árbol y Principio Multiplicativo',
          'Principio Aditivo en Reglas de Conteo para Opciones Excluyentes',
          'Concepto Clásico de Probabilidad: Regla de Laplace',
          'Propiedades de la Probabilidad: Valores entre 0 y 1',
          'Probabilidad del Evento Contrario o Complementario (P(A\') = 1 - P(A))',
          'Experimentos Aleatorios con Dados, Monedas y Ruletas',
          'Enfoque Frecuentista de la Probabilidad y Ley de los Grandes Números',
          'Eventos Mutuamente Excluyentes y Regla de la Suma',
          'Probabilidad en Situaciones Cotidianas de la Ciudad (Clima y Transporte)',
          'Análisis Crítico de Juegos de Azar y Rifas Populares',
          'Taller de Juegos de Azar Justos y Simulaciones Estadísticas',
          'Repaso General y Evaluación Acumulativa Final P3 Estadística 7°'
        ];
        return {
          semana: i + 27,
          titulo: titulosE7P3[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 7: Predice la probabilidad de ocurrencia de eventos simples en experimentos aleatorios.',
          competencia: 'Argumentación y Razonamiento Probabilístico',
          evidencia: 'Determina el espacio muestral y calcula probabilidades clásicas y frecuentistas de eventos aleatorios.',
          dua: {
            representacion: 'Simuladores digitales interactivos de dados, monedas y ruletas de colores.',
            expresion: 'Construcción de diagramas de árbol ilustrados paso a paso.',
            implicacion: 'Reflexión ética sobre el impacto social de los juegos de azar en la comunidad.'
          },
          exploracionMedellin: 'Calcular la probabilidad clásica de extraer un tiquete premiado en la Feria de las Flores de Medellín.',
          estructuracionTeorica: {
            concepto: `Teoría elemental de la probabilidad en '${titulosE7P3[i]}'. Modela matemáticamente el azar y la incertidumbre en la toma de decisiones.`,
            formulas: [
              'P(A) = Casos Favorables / Casos Totales',
              '0 ≤ P(A) ≤ 1',
              'P(A\') = 1 - P(A)',
              'P(A ∪ B) = P(A) + P(B) (si son mutuamente excluyentes)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En una urna hay 12 balotas del Metro: 6 azules, 4 verdes y 2 rojas. ¿Cuál es la probabilidad de extraer una balota que NO sea roja?',
              pasos: [
                'Paso 1: Casos totales en la urna: 6 + 4 + 2 = 12 balotas.',
                'Paso 2: Casos favorables a NO ser roja (azules + verdes): 6 + 4 = 10 balotas.',
                'Paso 3: Aplicar Regla de Laplace: P = 10 / 12 = 5 / 6 ≈ 0,833 (83,3%).',
                'Paso 4: Por complemento: P(No Roja) = 1 - P(Roja) = 1 - (2/12) = 10/12.'
              ],
              solucionFinal: 'La probabilidad de no sacar una balota roja es de 5/6 (83,3%).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Experimento en parejas: 30 lanzamientos de dos monedas y cálculo de frecuencia relativa.',
            tareaBarrial: 'Observar los colores de 15 autos estacionados en la cuadra y estimar la probabilidad empírica de encontrar un auto blanco.'
          }
        };
      })
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
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM8P2 = [
          'Trinomio Cuadrado Perfecto: Reconocimiento y Factorización (a² ± 2ab + b²)',
          'Trinomio Cuadrado Perfecto por Adición y Sustracción',
          'Trinomio de la Forma x² + bx + c: Método de Factorización',
          'Trinomio de la Forma ax² + bx + c: Descomposición y Método de Aspa',
          'Suma y Diferencia de Cubos Perfectos (a³ + b³ y a³ - b³)',
          'Cubo Perfecto de Binomios (a³ ± 3a²b + 3ab² ± b³)',
          'Casos Combinados de Factorización y Métodos Mixtos',
          'Concepto de Fracción Algebraica, Dominio de Definición y Restricciones',
          'Simplificación de Fracciones Algebraicas Mediante Factorización',
          'Multiplicación de Fracciones Algebraicas y Simplificación Cruzada',
          'División de Fracciones Algebraicas y Operaciones Combinadas',
          'Adición y Sustracción de Fracciones Algebraicas Homogéneas y Heterogéneas (m.c.m)',
          'Repaso General de Factorización/Fracciones Algebraicas y Evaluación Acumulativa P2'
        ];
        return {
          semana: i + 14,
          titulo: titulosM8P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: 'Variacional y Sistemas Algebraicos',
          dba: 'DBA 2: Simplifica expresiones racionales complejas aplicando técnicas avanzadas de factorización.',
          competencia: 'Razonamiento y Comunicación Algebraica',
          evidencia: 'Factoriza trinomios de la forma x² + bx + c y ax² + bx + c y simplifica fracciones algebraicas.',
          dua: { 
            representacion: 'Modelación algebraica gráfica con bloques y código de colores', 
            expresion: 'Ejercitación estructurada con mapas de ruta algebraicos', 
            implicacion: 'Diseño de estructuras modulares en construcciones arquitectónicas' 
          },
          exploracionMedellin: 'Cálculo de resistencia de materiales en estructuras del puente de la Madre Laura sobre el río Medellín.',
          estructuracionTeorica: {
            concepto: `Factorización avanzada: '${titulosM8P2[i]}'. Permite descomponer trinomios y expresiones compuestas en producto de factores primos.`,
            formulas: [
              'a² ± 2ab + b² = (a ± b)²',
              'x² + (p+q)x + pq = (x+p)(x+q)',
              'a³ ± b³ = (a ± b)(a² ∓ ab + b²)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Factorizar el trinomio x² + 7x + 12 que representa el área de un parque rectangular en el barrio Robledo.',
              pasos: [
                'Paso 1: Identificar coeficientes: b = 7, c = 12.',
                'Paso 2: Buscar dos números p y q que sumados den 7 y multiplicados den 12: (3 y 4).',
                'Paso 3: Escribir como producto de binomios: (x + 3)(x + 4).'
              ],
              solucionFinal: 'La expresión factorizada es (x + 3)(x + 4).'
            }
          },
          ejercitacionYCierre: { 
            colaborativo: 'Resolución de guías de factorización y simplificación en parejas.', 
            tareaBarrial: 'Comprobar dimensiones de un terreno cuadrangular multiplicando binomios.' 
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM8P3 = [
          'Ecuaciones Lineales Enteras con Una Incógnita y Propiedades de la Igualdad',
          'Ecuaciones Lineales Fraccionarias y Despeje de Variables',
          'Problemas de Aplicación con Ecuaciones Lineales en la Economía Local',
          'Concepto de Desigualdad e Inecuaciones Lineales Simples',
          'Inecuaciones Lineales con Propiedades de Orden e Intervalos en la Recta Real',
          'Problemas de Aplicación con Inecuaciones Lineales (Límites y Restricciones)',
          'Concepto de Función: Variable Independiente/Dependiente, Dominio y Rango',
          'Función Lineal y Función Afín: Pendiente (m) e Intercepto (b)',
          'Representación Gráfica de Funciones Lineales en el Plano Cartesiano',
          'Congruencia de Triángulos y Criterios de Semejanza (LLL, LAL, ALA)',
          'Teorema de Tales y Aplicaciones en Medición Indirecta de Alturas',
          'Teorema de Pitágoras en Triángulos Rectángulos y Solución de Problemas',
          'Estadística: Tablas de Frecuencia y Medidas de Tendencia Central para Datos Agrupados',
          'Repaso General, Muestra de Proyectos y Evaluación Acumulativa Final P3 8°'
        ];
        return {
          semana: i + 27,
          titulo: titulosM8P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: i < 9 ? 'Variacional y Sistemas Algebraicos' : (i < 12 ? 'Espacial y Sistemas Geométricos' : 'Aleatorio y Sistemas de Datos'),
          dba: 'DBA 3: Resuelve inecuaciones lineales y modela situaciones de variación lineal en el plano cartesiano.',
          competencia: 'Argumentación, Modelación y Resolución de Problemas',
          evidencia: 'Resuelve inecuaciones lineales, grafica funciones lineales e interpreta tablas estadísticas para datos agrupados.',
          dua: { 
            representacion: 'Intervalos en la recta real con código de colores e interpretación gráfica en GeoGebra', 
            expresion: 'Redacción de justificaciones y planteamiento simbólico', 
            implicacion: 'Análisis de rangos permisibles de contaminación ambiental en el Área Metropolitana' 
          },
          exploracionMedellin: 'Monitoreo del índice de calidad del aire (ICA) del Área Metropolitana de Medellín usando rangos numéricos.',
          estructuracionTeorica: {
            concepto: `Desarrollo temático de '${titulosM8P3[i]}'. Las ecuaciones e inecuaciones establecen relaciones cuantitativas exactas o de rango.`,
            formulas: [
              'y = mx + b (Ecuación de la recta)',
              'Pendiente m = (y₂ - y₁) / (x₂ - x₁)',
              'ax + b > c ⇒ ax > c - b'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Resolver la inecuación 2x - 4 > 10 que representa la restricción de presupuesto en una salida pedagógica.',
              pasos: [
                'Paso 1: Sumar 4 a ambos lados de la desigualdad: 2x > 10 + 4.',
                'Paso 2: Simplificar: 2x > 14.',
                'Paso 3: Dividir entre 2: x > 7.'
              ],
              solucionFinal: 'Solución en notación de intervalo: x ∈ (7, +∞).'
            }
          },
          ejercitacionYCierre: { 
            colaborativo: 'Taller de inecuaciones y funciones lineales en equipos.', 
            tareaBarrial: 'Representar en la recta el límite de velocidad en la vía principal de su barrio.' 
          }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosE8P1 = [
          'Técnicas de Muestreo Probabilístico (Aleatorio Simple, Sistemático, Estratificado)',
          'Tipos de Variables y Escalas de Medición (Nominal, Ordinal, Intervalo, Razón)',
          'Organización de Datos Cuantitativos Continuos en Intervalos de Clase',
          'Regla de Sturges, Amplitud de Intervalo y Marca de Clase (x_i)',
          'Tabulación Completa para Datos Agrupados: Frecuencias Simples y Acumuladas',
          'Construcción de Histogramas y Polígonos de Frecuencias para Datos Continuos',
          'Ojivas Porcentuales (Curvas de Frecuencias Acumuladas) y su Lectura',
          'Media Aritmética para Datos Agrupados: Cálculo Ponderado con Marcas de Clase',
          'Mediana para Datos Agrupados: Intervalo Mediano e Interpolación',
          'Moda para Datos Agrupados: Identificación de la Clase Modal',
          'Análisis de Sesgo y Asimetría en la Distribución de Datos Escolares',
          'Uso de Hojas de Cálculo (Excel/Sheets) para Tabulación Estadística de Grupos',
          'Repaso General y Evaluación Acumulativa P1 Estadística 8°'
        ];
        return {
          semana: i + 1,
          titulo: titulosE8P1[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 5: Diseña experimentos aleatorios y analiza datos agrupados mediante medidas de tendencia central y gráficos pertinentes.',
          competencia: 'Interpretación, Modelación y Razonamiento Estadístico',
          evidencia: 'Agrupa datos continuos en tablas con intervalos, elabora histogramas y calcula media, mediana y moda agrupadas.',
          dua: {
            representacion: 'Plantillas de hojas de cálculo con gráficos interactivos y tablas dinámicas paso a paso.',
            expresion: 'Informe estadístico digital con análisis de frecuencias y conclusiones justificadas.',
            implicacion: 'Estudio sobre los tiempos de espera y frecuencias en las rutas alimentadoras del Metro de Medellín.'
          },
          exploracionMedellin: `Registrar y agrupar en intervalos de 10 minutos los tiempos de viaje de estudiantes que residen en distintas comunas de Medellín hacia la IE Rafael Uribe Uribe.`,
          estructuracionTeorica: {
            concepto: `Tratamiento de datos continuos agrupados en intervalos en '${titulosE8P1[i]}'. Facilita el análisis de grandes volúmenes de observaciones numéricas.`,
            formulas: [
              'Regla de Sturges: k = 1 + 3.322 × log₁₀(N)',
              'Amplitud: A = Rango / k',
              'Marca de Clase: x_i = (L_inf + L_sup) / 2',
              'Media Agrupada: x̄ = (Σ x_i × f_i) / N'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Para una muestra de 40 estudiantes con estaturas agrupadas, se tiene que la sumatoria Σ(x_i × f_i) = 6400 cm. Hallar la estatura media del grupo.',
              pasos: [
                'Paso 1: Identificar la suma de productos marca de clase por frecuencia: Σ(x_i × f_i) = 6400.',
                'Paso 2: Identificar el tamaño total de la muestra: N = 40.',
                'Paso 3: Aplicar fórmula de media agrupada: x̄ = 6400 / 40 = 160 cm.'
              ],
              solucionFinal: 'La estatura media estimada del grupo es de 160 cm (1,60 m).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Construir en grupos una tabla de frecuencias agrupadas con 30 datos de pulsaciones cardíacas.',
            tareaBarrial: 'Recolectar 15 datos del peso aproximado en kg de reciclaje producido por familias vecinas.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosE8P2 = [
          'Medidas de Dispersión para Datos Agrupados: Rango y Desviación Media',
          'Varianza Muestral (s²) y Poblacional (σ²): Concepto y Cálculo',
          'Desviación Estándar (s) e Interpretación de la Variabilidad',
          'Coeficiente de Variación (CV) y Comparación de Homogeneidad',
          'Medidas de Posición para Datos Agrupados: Cuartiles (Q1, Q2, Q3)',
          'Deciles y Percentiles: Aplicación en Pruebas Estandarizadas Saber',
          'Diagramas de Caja y Bigotes para Datos Continuos y Detección de Outliers',
          'Distribución Bivariada y Tablas de Doble Entrada para Datos Cuantitativos',
          'Diagrama de Dispersión (Scatter Plot) y Correlación Lineal Intuitiva',
          'Análisis de Datos Socioeconómicos y Ambientales de la Ciudad de Medellín',
          'Formularios Digitales y Tratamiento Ético de Datos (Habeas Data Escolar)',
          'Proyecto de Aula: Investigación Estadística de Hábitos Juveniles',
          'Evaluación Acumulativa P2 Estadística 8°'
        ];
        return {
          semana: i + 14,
          titulo: titulosE8P2[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 6: Utiliza medidas de dispersión y posición para comparar conjuntos de datos y extraer conclusiones válidas.',
          competencia: 'Formulación y Ejecución',
          evidencia: 'Calcula e interpreta la varianza, desviación estándar, percentiles y coeficientes de correlación en datos escolares.',
          dua: {
            representacion: 'Diagramas de dispersión con líneas de tendencia visuales y calculadoras de desviación en pantalla.',
            expresion: 'Sustentación de póster científico con interpretación de dispersión y cuartiles.',
            implicacion: 'Análisis de datos de calidad del aire suministrados por el sistema SIATA del Valle de Aburrá.'
          },
          exploracionMedellin: 'Comparar la dispersión en los tiempos de recorrido de las líneas A y B del Metro de Medellín mediante el coeficiente de variación.',
          estructuracionTeorica: {
            concepto: `Análisis de variabilidad y posición en '${titulosE8P2[i]}'. El coeficiente de variación permite comparar la dispersión relativa de conjuntos con distintas unidades de medida.`,
            formulas: [
              'Varianza: s² = Σ [f_i × (x_i - x̄)²] / (N - 1)',
              'Desviación Estándar: s = √(s²)',
              'Coeficiente de Variación: CV = (s / x̄) × 100%'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un grupo escolar tiene un promedio de 80 puntos con desviación estándar de 8 puntos. Hallar su Coeficiente de Variación (CV).',
              pasos: [
                'Paso 1: Identificar datos: x̄ = 80, s = 8.',
                'Paso 2: Aplicar fórmula del CV: CV = (8 / 80) × 100% = 0,10 × 100% = 10%.',
                'Paso 3: Interpretar: Un CV del 10% indica una distribución altamente homogénea (menor al 15%).'
              ],
              solucionFinal: 'El Coeficiente de Variación es del 10% (conjunto de datos homogéneo).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Calcular la desviación estándar de las notas de un taller evaluativo en equipos de trabajo.',
            tareaBarrial: 'Consultar el recibo de energía eléctrica y calcular la variación en kWh de los últimos 6 periodos de facturación.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosE8P3 = [
          'Fundamentos de Probabilidad Axiomática y Operaciones con Conjuntos (Unión e Intersección)',
          'Principios Avanzados de Conteo: Principio Fundamental de Conteo',
          'Notación Factorial (n!) y Principio de las Casillas',
          'Permutaciones Lineales Sin Repetición (P_n = n!)',
          'Permutaciones con Elementos Seleccionados (nPr)',
          'Combinaciones Simples (nCr) y Diferencias Clave con Permutaciones',
          'Aplicación de Combinatoria al Cálculo de Probabilidades en Juegos',
          'Regla General de la Adición: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
          'Concepto de Probabilidad Condicional: P(A|B) = P(A ∩ B) / P(B)',
          'Eventos Independientes y Regla de la Multiplicación',
          'Eventos Dependientes y Extracciones Sin Reemplazo',
          'Tablas de Contingencia para el Cálculo de Probabilidades Cruzadas',
          'Taller Integrador de Combinatoria y Probabilidad Tipo Saber 8°',
          'Repaso General y Evaluación Acumulativa Final P3 Estadística 8°'
        ];
        return {
          semana: i + 27,
          titulo: titulosE8P3[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 7: Reconoce y aplica técnicas de conteo y conceptos de probabilidad condicional e independencia en situaciones problema.',
          competencia: 'Argumentación y Razonamiento Probabilístico',
          evidencia: 'Resuelve problemas combinatorios con factoriales, permutaciones y combinaciones, y calcula probabilidades condicionales.',
          dua: {
            representacion: 'Diagramas de Venn interactivos, árboles de decisión y cajas combinatorias manipulables.',
            expresion: 'Planteamiento simbólico justificado de problemas de conteo y probabilidad.',
            implicacion: 'Evaluación del riesgo en apuestas deportivas y juegos de azar urbanos.'
          },
          exploracionMedellin: 'Calcular de cuántas formas distintas se puede conformar el comité estudiantil de 3 personas de la IE Rafael Uribe Uribe a partir de 10 candidatos.',
          estructuracionTeorica: {
            concepto: `Cálculo combinatorio y probabilidad condicionada en '${titulosE8P3[i]}'. Permite cuantificar configuraciones y probabilidades bajo condiciones específicas.`,
            formulas: [
              'Permutación: P(n, r) = n! / (n - r)!',
              'Combinación: C(n, r) = n! / [r! × (n - r)!]',
              'Probabilidad Condicional: P(A|B) = P(A ∩ B) / P(B)',
              'Regla del Producto: P(A ∩ B) = P(A) × P(B|A)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En un grupo de 8 deportistas de la institución, ¿de cuántas formas se puede seleccionar un equipo de 3 integrantes para los Juegos Intercolegiados de Medellín?',
              pasos: [
                'Paso 1: Determinar si importa el orden: Como los 3 puestos son equivalentes, el orden no importa => Combinaciones.',
                'Paso 2: Identificar n = 8, r = 3.',
                'Paso 3: Aplicar fórmula: C(8, 3) = 8! / [3! × (8-3)!] = 8! / (3! × 5!).',
                'Paso 4: Simplificar: (8 × 7 × 6 × 5!) / (6 × 5!) = (8 × 7 × 6) / 6 = 56 formas.'
              ],
              solucionFinal: 'Existen exactamente 56 formas diferentes de conformar el equipo.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Resolver guía de 5 problemas de conteo clasificando entre permutaciones y combinaciones.',
            tareaBarrial: 'Calcular cuántas combinaciones posibles de placas de vehículos existen en Medellín con 3 letras y 3 números.'
          }
        };
      })
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
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM9P2 = [
          'Potenciación y Radicación con Exponentes Racionales',
          'Función Exponencial: Concepto, Dominio, Rango y Gráfica en GeoGebra',
          'Crecimiento y Decrecimiento Exponencial en Poblaciones y Finanzas',
          'Concepto de Logaritmo y Propiedades de los Logaritmos',
          'Función Logarítmica y su Relación de Inversión con la Exponencial',
          'Ecuaciones Exponenciales y Logarítmicas Sencillas',
          'Función Cuadrática: Forma General f(x) = ax² + bx + c y la Parábola',
          'Vértice, Eje de Simetría e Interceptos con los Ejes Cartesianos',
          'Solución de Ecuaciones Cuadráticas por Factorización',
          'Solución de Ecuaciones Cuadráticas por la Fórmula General y Discriminante',
          'Modelación del Movimiento Parabólico en Físicas Cortas y Deportes',
          'Sistemas de Ecuaciones No Lineales (Intersección de Recta y Parábola)',
          'Repaso General y Evaluación Acumulativa P2 Matemáticas 9°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM9P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: 'Variacional y Sistemas Algebraicos',
          dba: 'DBA 2: Identifica las características de las funciones exponenciales, logarítmicas y cuadráticas.',
          competencia: 'Modelación y Razonamiento',
          evidencia: 'Modela crecimiento poblacional, interés compuesto y movimiento parabólico.',
          dua: { representacion: 'Gráficas de crecimiento exponencial en GeoGebra', expresion: 'Explicación del comportamiento de curvas', implicacion: 'Proyecciones demográficas de Medellín' },
          exploracionMedellin: 'Modelado del crecimiento de usuarios de la tarjeta Cívica del Metro de Medellín.',
          estructuracionTeorica: {
            concepto: 'Una función exponencial es de la forma f(x) = a^x con a > 0 y a ≠ 1. Su inversa es la función logarítmica.',
            formulas: ['y = a^x ⇔ log_a(y) = x', 'Interés Compuesto: A = P(1 + r/n)^(nt)', 'Vértice x_v = -b / (2a)'],
            ejemploPasoAPaso: {
              enunciado: 'Un capital de $1.000.000 COP se invierte al 10% anual. ¿Cuánto se tendrá en 2 años?',
              pasos: ['A = 1.000.000 × (1 + 0.10)²', 'A = 1.000.000 × 1.21 = 1.210.000 COP'],
              solucionFinal: '$1.210.000 COP.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Ejercicios de logaritmos y parábolas aplicados.', tareaBarrial: 'Consultar la tasa de interés de un microcrédito bancario.' }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM9P3 = [
          'Distancia Entre Dos Puntos y Punto Medio en el Plano Cartesiano',
          'La Recta en el Plano: Pendiente (m) y Ecuación Punto-Pendiente',
          'Rectas Paralelas y Perpendiculares en Geometría Analítica',
          'Semejanza de Triángulos y Criterios de Semejanza (AA, LLL, LAL)',
          'Teorema de Tales y División Proporcional de Segmentos',
          'Aplicaciones del Teorema de Tales en Medición de Sombras y Edificios',
          'Razones Trigonométricas Básicas en Triángulos Rectángulos (Seno, Coseno, Tangente)',
          'Técnicas de Conteo: Principio Multiplicativo y Sumativo',
          'Factoriales y Permutaciones Sin Repetición',
          'Combinaciones y Diferencia Entre Permutaciones y Combinaciones',
          'Probabilidad Condicional e Introducción a Eventos Compuestos',
          'Análisis de Experimentos Aleatorios en la Ciudad',
          'Taller Integrado de Geometría y Estadística Tipo ICFES',
          'Repaso General y Evaluación Acumulativa Final P3 Matemáticas 9°'
        ];
        return {
          semana: i + 27,
          titulo: titulosM9P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: i < 7 ? 'Espacial y Sistemas Geométricos' : 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 3: Aplica criterios de semejanza, Teorema de Tales y técnicas combinatorias en la resolución de problemas.',
          competencia: 'Resolución de Problemas y Razonamiento',
          evidencia: 'Demuestra semejanzas, calcula sombras relativas y resuelve problemas combinatorios y probabilísticos.',
          dua: { representacion: 'Triángulos semejantes superpuestos en GeoGebra', expresion: 'Cálculo de escalas', implicacion: 'Arquitectura del Tranvía de Ayacucho' },
          exploracionMedellin: 'Determinar la altura del Museo de Arte Moderno de Medellín (MAMM) mediante la sombra proyectada.',
          estructuracionTeorica: {
            concepto: 'Dos triángulos son semejantes si sus ángulos correspondientes son iguales y sus lados homólogos son proporcionales.',
            formulas: ['a/a\' = b/b\' = c/c\'', 'Permutaciones: P(n, k) = n! / (n-k)!', 'Combinaciones: C(n, k) = n! / (k!(n-k)!)'],
            ejemploPasoAPaso: {
              enunciado: 'Un poste de 3 m proyecta una sombra de 2 m. A la misma hora, un edificio proyecta una sombra de 12 m. ¿Cuál es la altura del edificio?',
              pasos: ['Proporción: 3 / 2 = H / 12', 'H = (3 × 12) / 2 = 36 / 2 = 18 m'],
              solucionFinal: 'La altura es 18 metros.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de Teorema de Tales en el patio escolar.', tareaBarrial: 'Medir la sombra de un árbol de su cuadra.' }
        };
      })
    },
    'Estadística': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulosE9P1 = [
          'Fundamentos de la Estadística Inferencial: Del Muestreo a la Población General',
          'Técnicas de Muestreo Aleatorio Simple, Estratificado y por Conglomerados',
          'Tamaño de Muestra Representativa y Sesgos de Selección en Estudios Urbanos',
          'Revisión Consolidada de Tendencia Central, Dispersión y Posición para Datos Agrupados',
          'Puntuaciones Estandarizadas (Z-Scores) y Comparación de Observaciones Heterogéneas',
          'Introducción a la Forma de las Distribuciones: Simetría, Curtosis y Curva Normal',
          'Regla Empírica de Gauss (68-95-99.7) y Teorema de Chebyshev',
          'Relación Bivariada entre Variables Cuantitativas: Covarianza Muestral',
          'Coeficiente de Correlación Lineal de Pearson (r) e Interpretación de Intensidad',
          'Regresión Lineal Simple: Método de Mínimos Cuadrados y Ecuación de la Recta',
          'Recta de Regresión: Pronósticos y Estimaciones en Contextos Socioeconómicos',
          'Coeficiente de Determinación (R²) y Bondad de Ajuste del Modelo Lineal',
          'Repaso General y Evaluación Acumulativa P1 Estadística 9°'
        ];
        return {
          semana: i + 1,
          titulo: titulosE9P1[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 5: Modela relaciones bivariadas mediante diagramas de dispersión, coeficientes de correlación y rectas de regresión lineal.',
          competencia: 'Interpretación, Modelación y Formulación de Hipótesis',
          evidencia: 'Calcula el coeficiente de Pearson, halla la recta de mínimos cuadrados e interpreta pronósticos y coeficientes de correlación.',
          dua: {
            representacion: 'Modelación interactiva en GeoGebra/Calc de rectas de ajuste y nubes de puntos.',
            expresion: 'Elaboración de informes econométricos sencillos con gráficos de dispersión.',
            implicacion: 'Modelado de la relación entre horas de estudio y puntaje ICFES obtenido.'
          },
          exploracionMedellin: `Analizar la correlación entre la distancia a las estaciones del Metro y el valor del arriendo comercial en diferentes barrios de Medellín.`,
          estructuracionTeorica: {
            concepto: `Modelación lineal bivariada en '${titulosE9P1[i]}'. El análisis de correlación y regresión permite cuantificar la relación estadística entre dos fenómenos continuos.`,
            formulas: [
              'Puntuación Z: Z = (x - μ) / σ',
              'Coeficiente de Pearson: r = Σ [(x_i - x̄)(y_i - ȳ)] / [√Σ(x_i - x̄)² × √Σ(y_i - ȳ)²]',
              'Recta de Regresión: y = mx + b',
              'Pendiente: m = r × (s_y / s_x)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Se analiza la relación entre horas de repaso semanal (X) y calificación (Y, sobre 100). Si la recta obtenida es Y = 6X + 40, predecir la nota de un estudiante que repasa 8 horas semanales.',
              pasos: [
                'Paso 1: Identificar el modelo lineal estimado: Y = 6X + 40.',
                'Paso 2: Sustituir el valor de la variable independiente: X = 8.',
                'Paso 3: Calcular el valor esperado: Y = 6(8) + 40 = 48 + 40 = 88 puntos.'
              ],
              solucionFinal: 'La calificación esperada para 8 horas de repaso es de 88 puntos.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller en parejas: Graficar una nube de 10 puntos y trazar la recta de mejor ajuste en papel milimetrado.',
            tareaBarrial: 'Recolectar datos de edad y estatura de 6 familiares y estimar el grado de correlación lineal.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosE9P2 = [
          'Series de Tiempo y Datos Longitudinales: Tendencia, Estacionalidad y Variación',
          'Números Índice Simples y Ponderados en la Economía Nacional',
          'Índice de Precios al Consumidor (IPC), Inflación y Poder Adquisitivo en Colombia',
          'Tablas de Contingencia Avanzadas y Prueba Intuitiva de Independencia',
          'Diagramas de Mosaico y Representaciones Multivariadas en Políticas Públicas',
          'Análisis de Datos Masivos (Big Data), Minería de Datos y Algoritmos en Redes',
          'Ética de los Algoritmos, Protección de Datos y Privacidad Digital',
          'Diseño de un Proyecto Estadístico de Investigación Institucional en la RUU',
          'Prueba Piloto y Validación de Encuestas Digitales para la Comunidad Escolar',
          'Recolección de Datos de Campo, Depuración y Limpieza de Bases de Datos',
          'Análisis Estadístico Computarizado con Tablas y Gráficos Profesionales',
          'Redacción del Informe Final con Conclusiones y Propuestas para Medellín',
          'Evaluación Acumulativa P2 Estadística 9° y Sustentación de Proyectos'
        ];
        return {
          semana: i + 14,
          titulo: titulosE9P2[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 6: Diseña y ejecuta investigaciones estadísticas completas sobre fenómenos sociales, ambientales o económicos de su entorno.',
          competencia: 'Formulación, Ejecución y Comunicación Científica',
          evidencia: 'Formula problemas de investigación, recolecta y procesa datos multivariados y redacta informes técnicos con rigor ético.',
          dua: {
            representacion: 'Tableros de control (dashboards) interactivos con visualización de series temporales.',
            expresion: 'Sustentación de proyectos de investigación en formato de póster científico escolar.',
            implicacion: 'Propuestas de mejora urbana basadas en datos reales para la comunidad del barrio Robledo/Manrique.'
          },
          exploracionMedellin: 'Analizar la evolución del Índice de Precios al Consumidor (IPC) y la canasta familiar básica en Medellín en los últimos 5 años.',
          estructuracionTeorica: {
            concepto: `Metodología de la investigación estadística aplicada en '${titulosE9P2[i]}'. El análisis de series y números índice permite medir el cambio relativo en el tiempo.`,
            formulas: [
              'Índice Simple: I_t = (P_t / P_0) × 100',
              'Tasa de Variación: %Δ = [(P_t - P_{t-1}) / P_{t-1}] × 100%'
            ],
            ejemploPasoAPaso: {
              enunciado: 'El tiquete del Metro de Medellín costaba $2.550 COP en 2021 (año base) y $3.200 COP en 2024. Calcular el número índice relativo de 2024 respecto a 2021.',
              pasos: [
                'Paso 1: Identificar P_0 = $2.550 y P_t = $3.200.',
                'Paso 2: Aplicar fórmula: I = ($3.200 / $2.550) × 100.',
                'Paso 3: Calcular: I = 1,2549 × 100 = 125,5.',
                'Paso 4: Interpretar: Representa un incremento acumulado del 25,5% en la tarifa.'
              ],
              solucionFinal: 'El índice relativo es 125,5 (incremento del 25,5%).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Estructurar en equipos de 4 el plan de recolección para el proyecto de investigación escolar.',
            tareaBarrial: 'Comparar el precio actual de 3 productos básicos en la tienda de la esquina respecto al año anterior.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosE9P3 = [
          'Espacios Muestrales Discretos y Continuos: Probabilidad Axiomática de Kolmogorov',
          'Técnicas de Conteo Avanzadas: Permutaciones con Repetición y Circulares',
          'Combinaciones con Repetición y Particiones de Conjuntos',
          'Probabilidad Condicional Formal y Teorema de la Multiplicación: P(A ∩ B)',
          'Partición de un Espacio Muestral y Teorema de la Probabilidad Total',
          'Teorema de Bayes: Actualización de Probabilidades a Priori y a Posteriori',
          'Aplicaciones del Teorema de Bayes en Diagnósticos Médicos y Filtros Digitales',
          'Variables Aleatorias Discretas: Función de Probabilidad f(x) y Acumulada F(x)',
          'Valor Esperado (Esperanza Matemática E[X]) en Juegos de Azar y Finanzas',
          'Varianza y Desviación Estándar de una Variable Aleatoria Discreta',
          'Introducción a la Distribución Binomial: Ensayos de Bernoulli y Parámetros (n, p)',
          'Cálculo de Probabilidades Binomiales en Control de Calidad y Eventos Urbanos',
          'Taller Integrador de Probabilidad Avanzada e Inferencia Tipo ICFES Saber 9°/11°',
          'Repaso General y Evaluación Acumulativa Final P3 Estadística 9°'
        ];
        return {
          semana: i + 27,
          titulo: titulosE9P3[i],
          tiempoEstimado: '60 minutos (1 hora académica semanal)',
          pensamiento: 'Aleatorio y Sistemas de Datos',
          dba: 'DBA 7: Aplica el Teorema de Bayes, distribuciones de probabilidad discretas y la noción de esperanza matemática para tomar decisiones bajo incertidumbre.',
          competencia: 'Argumentación, Modelación y Toma de Decisiones Probabilísticas',
          evidencia: 'Aplica el Teorema de Bayes, calcula la esperanza matemática de variables aleatorias y resuelve problemas con la distribución binomial.',
          dua: {
            representacion: 'Árboles bayesianos interactivos y simuladores de distribuciones discretas binomiales.',
            expresion: 'Resolución analítica y justificación conceptual de problemas de probabilidad compuesta.',
            implicacion: 'Análisis de confiabilidad de pruebas diagnósticas y decisiones financieras racionales.'
          },
          exploracionMedellin: 'Calcular el valor esperado de ganancia en una rifa benéfica organizada para mejorar las instalaciones deportivas de la institución.',
          estructuracionTeorica: {
            concepto: `Probabilidad avanzada, Teorema de Bayes y esperanza matemática en '${titulosE9P3[i]}'. Provee las herramientas analíticas para cuantificar la incertidumbre y optimizar decisiones.`,
            formulas: [
              'Teorema de Bayes: P(A_i|B) = [P(B|A_i) × P(A_i)] / [Σ P(B|A_k) × P(A_k)]',
              'Esperanza Matemática: E[X] = Σ [x_i × P(X = x_i)]',
              'Distribución Binomial: P(X = k) = C(n, k) × p^k × (1-p)^(n-k)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un juego cuesta $2.000 COP para participar. Si se gana, se reciben $10.000 COP con probabilidad de 1/10 (10%), y en caso contrario no se recibe nada. Calcular la esperanza matemática de la ganancia neta.',
              pasos: [
                'Paso 1: Ganancia neta si gana: +$8.000 COP (probabilidad 0,10).',
                'Paso 2: Pérdida neta si pierde: -$2.000 COP (probabilidad 0,90).',
                'Paso 3: Calcular E[X] = (8.000 × 0,10) + (-2.000 × 0,90) = 800 - 1.800 = -$1.000 COP.',
                'Paso 4: Interpretar: En promedio, el jugador pierde $1.000 COP por cada partida (juego desfavorable).'
              ],
              solucionFinal: 'La esperanza matemática es -$1.000 COP (indica juego no equitativo y desfavorable para el apostador).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller grupal: Calcular e interpretar probabilidades a posteriori con el Teorema de Bayes en situaciones de diagnóstico.',
            tareaBarrial: 'Analizar las probabilidades matemáticas y el valor esperado de los juegos de lotería más comunes en Medellín.'
          }
        };
      })
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
      2: Array.from({ length: 13 }, (_, i) => {
        const titulosM10P2 = [
          'Funciones Trigonométricas Inversas (Arcsen, Arccos, Arctan)',
          'Ecuaciones Trigonométricas Simples y Métodos de Solución',
          'Ecuaciones Trigonométricas Cuadráticas en el Intervalo [0, 2π)',
          'Identidades Trigonométricas para la Suma y Diferencia de Ángulos',
          'Identidades para el Ángulo Doble y Ángulo Mitad',
          'Geometría Analítica: La Distancia Entre Puntos y Ecuación de la Recta',
          'La Circunferencia: Ecuación Canónica con Centro en el Origen (0,0)',
          'La Circunferencia: Ecuación Ordinaria con Centro (h, k) y Ecuación General',
          'La Parábola: Definición, Foco, Directriz y Ecuación Canónica (0,0)',
          'La Parábola con Vértice (h, k) Horizontal y Vertical',
          'Conversión de Ecuación General a Forma Ordinaria Completando Cuadrados',
          'Aplicaciones de la Parábola en Antenas Satelitales y Puentes',
          'Evaluación Acumulativa P2 Trigonometría y Geometría Analítica 10°'
        ];
        return {
          semana: i + 14,
          titulo: titulosM10P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: 'Espacial y Sistemas Geométricos',
          dba: 'DBA 2: Identifica los elementos de las secciones cónicas y sus ecuaciones cartesianas.',
          competencia: 'Interpretación y Representación',
          evidencia: 'Grafica e identifica centro, radio, foco y directriz en cónicas.',
          dua: { representacion: 'Simulador dinámico de secciones cónicas en GeoGebra', expresion: 'Representación gráfica y analítica', implicacion: 'Diseño de antenas parabólicas en la ciudad' },
          exploracionMedellin: 'Análisis de la forma parabólica de los arcos del Estadio Atanasio Girardot.',
          estructuracionTeorica: {
            concepto: 'La circunferencia es el lugar geométrico de los puntos que equidistan de un centro. La parábola es el lugar geométrico de los puntos que equidistan de un foco y una directriz.',
            formulas: ['(x - h)² + (y - k)² = r²', 'Parábola vertical: (x - h)² = 4p(y - k)'],
            ejemploPasoAPaso: {
              enunciado: 'Hallar la ecuación de la circunferencia con centro en (2, -3) y radio r = 5.',
              pasos: ['(x - 2)² + (y - (-3))² = 5²', '(x - 2)² + (y + 3)² = 25'],
              solucionFinal: '(x - 2)² + (y + 3)² = 25.'
            }
          },
          ejercitacionYCierre: { colaborativo: 'Taller de cónicas en GeoGebra.', tareaBarrial: 'Identificar 2 formas cónicas en construcciones del barrio.' }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulosM10P3 = [
          'La Elipse: Definición, Focos, Eje Mayor y Menor con Centro en (0,0)',
          'La Elipse con Centro en (h, k) y Conversión de Ecuación General a Ordinaria',
          'La Hipérbola: Definición, Focos, Asíntotas y Ecuación Canónica',
          'La Hipérbola con Centro (h, k) y Aplicaciones en Trayectorias',
          'Identificación y Clasificación de Secciones Cónicas mediante el Discriminante',
          'Introducción a los Vectores en R²: Magnitud, Dirección y Sentido',
          'Operaciones con Vectores: Suma, Resta y Producto por un Escalar',
          'Producto Escalar y Ángulo Entre Dos Vectores',
          'Estadística: Medidas de Dispersión (Rango, Varianza y Desviación Estándar)',
          'Coeficiente de Variación y Comparación de Distribuciones',
          'Diagramas de Dispersión y Correlación Lineal',
          'Regresión Lineal Simple y Límite de Tendencia',
          'Taller de Entrenamiento ICFES Saber 11 en Geometría y Estadística',
          'Evaluación Acumulativa Final P3 Trigonometría y Estadística 10°'
        ];
        return {
          semana: i + 27,
          titulo: titulosM10P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas)',
          pensamiento: i < 8 ? 'Espacial y Sistemas Geométricos' : 'Aleatorio y Sistemas de Datos',
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
        };
      })
    }
  },
  '11°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
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
      }),
      2: Array.from({ length: 13 }, (_, i) => {
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
      }),
      3: Array.from({ length: 14 }, (_, i) => {
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
      })
    }
  }
};

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
