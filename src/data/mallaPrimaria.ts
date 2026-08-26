import { PlanSemana } from '../types';

export const mallaPrimaria: {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
} = {
  // ==========================================
  // GRADO PRIMERO (1°)
  // ==========================================
  '1°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulos1P1 = [
          'Noción de Cantidad y Conteo del 1 al 5 en el Entorno Escolar',
          'Conteo y Representación Numérica del 6 al 9 con Material Concreto',
          'El Número Cero (0) y Agrupación de Colecciones de Objetos',
          'La Decena (10): Formación, Agrupación y Valor Posicional',
          'Lectura, Escritura y Comparación de Números del 11 al 19',
          'La Familia del 20: Relaciones de Mayor Que, Menor Que e Igual Que',
          'Comparación de Longitudes: Conceptos de Largo, Corto, Alto y Bajo',
          'Medición No Estandarizada: Medición con Pasos, Cuartas y Lápices',
          'Identificación de Objetos del Entorno por Color, Forma y Tamaño',
          'Recolección de Datos Sencillos en el Aula (Frutas y Juegos Favoritos)',
          'Organización de Información en Tablas de Conteo con Palotes',
          'Construcción e Interpretación de Pictogramas Sencillos',
          'Taller de Afianzamiento y Evaluación Formativa P1 Grado 1°'
        ];
        const pensamiento = i < 6 
          ? 'Numérico y Sistemas Numéricos'
          : i < 9 
          ? 'Métrico y Sistemas de Medida' 
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 1,
          titulo: titulos1P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 3 / DBA 5: Utiliza las características del Sistema de Numeración Decimal para comparar cantidades y realiza mediciones de longitud.',
          competencia: i < 6 ? 'Pensamiento Numérico (SND)' : i < 9 ? 'Pensamiento Métrico' : 'Pensamiento Aleatorio y Sistemas de Datos',
          evidencia: i < 6 
            ? 'SABER: Reconoce significados del número en conteo y comparación. HACER: Usa representaciones pictóricas para explicar el valor posicional. SER: Demuestra interés en comparaciones numéricas.'
            : i < 9
            ? 'SABER: Describe y estima longitudes de objetos cotidianos. HACER: Mide con pasos, cuartas y reglas escolares. SER: Trabaja cooperativamente.'
            : 'SABER: Identifica variables en su entorno. HACER: Organiza datos en pictogramas y tablas. SER: Socializa resultados con respeto.',
          dua: {
            representacion: 'Fichas de colores, tapas plásticas, bloques lógicos y tarjetas visuales ilustradas.',
            expresion: 'Modelado con plastilina, dibujo libre de colecciones y respuesta verbal guiada.',
            implicacion: 'Juegos de roles imitando una tiendita escolar y dinámicas de conteo grupal.'
          },
          exploracionMedellin: `Contar los vagones de un tren del Metro de Medellín y comparar longitudes entre estaciones usando material didáctico.`,
          estructuracionTeorica: {
            concepto: `Exploración vivencial de '${titulos1P1[i]}'. El número nos permite contar cuántos objetos hay en una colección y ordenarlos según su valor.`,
            formulas: [
              'Conteo progresivo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...',
              '1 Decena = 10 Unidades',
              'Relaciones: Mayor que (>), Menor que (<), Igual a (=)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En la mesa hay 7 fichas rojas y 4 fichas azules. ¿Cuántas fichas hay en total y de qué color hay más?',
              pasos: [
                'Paso 1: Contamos las fichas rojas: 1, 2, 3, 4, 5, 6, 7.',
                'Paso 2: Contamos las fichas azules: 1, 2, 3, 4.',
                'Paso 3: Juntamos y contamos todo: 7 + 4 = 11 fichas.',
                'Paso 4: Comparamos: 7 es mayor que 4 (7 > 4), hay más fichas rojas.'
              ],
              solucionFinal: 'Hay 11 fichas en total y el grupo de fichas rojas es mayor (7 > 4).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, armar 2 torres con bloques de madera y comparar cuál es más alta y cuántos bloques tiene.',
            tareaBarrial: 'Contar cuántas puertas y ventanas hay en su casa y dibujar la colección en el cuaderno.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulos1P2 = [
          'Estrategias de Conteo Progresivo y Regresivo (de 2 en 2 y de 5 en 5)',
          'Noción de Adición: Juntar y Agregar Cantidades hasta el 30',
          'La Suma en la Recta Numérica con Saltos de Rana',
          'Noción de Sustracción: Quitar, Separar y Comparar Cantidades',
          'Problemas Cotidianos de Suma y Resta Sencillos',
          'El Signo Igual (=) como Equilibrio y Equivalencia en la Balanza',
          'Números Faltantes en Expresiones Aditivas Sencillas (3 + ? = 7)',
          'Atributos Medibles: Comparación de Peso (Pesado/Liviano) y Capacidad',
          'Medición del Tiempo: Días de la Semana, Mañana, Tarde y Noche',
          'Ubicación Espacial: Arriba/Abajo, Delante/Detrás, Izquierda/Derecha',
          'Trayectorias y Recorridos en el Plano del Salón de Clase',
          'Lectura de Tablas de Conteo y Gráficos de Barras Ilustrados',
          'Evaluación Acumulativa P2 Grado 1°'
        ];
        const pensamiento = i < 5 
          ? 'Numérico y Sistemas Numéricos'
          : i < 7 
          ? 'Variacional y Sistemas Algebraicos'
          : i < 9 
          ? 'Métrico y Sistemas de Medida'
          : i < 11 
          ? 'Espacial y Sistemas Geométricos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 14,
          titulo: titulos1P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 4 / DBA 7 / DBA 10: Reconoce atributos medibles, describe trayectorias espaciales y organiza datos en tablas.',
          competencia: 'Resolución de Problemas Aditivos y Ubicación Espacial',
          evidencia: 'SABER: Comprende la suma y resta y nociones espaciales. HACER: Resuelve problemas aditivos y traza trayectorias. SER: Escucha y colabora activamente.',
          dua: {
            representacion: 'Balanzas de dos platillos, recta numérica en el suelo para saltar y flechas direccionales.',
            expresion: 'Dramatización de trayectorias con el cuerpo y uso de ábacos escolares.',
            implicacion: 'Misiones de exploración tipo búsqueda del tesoro en el aula.'
          },
          exploracionMedellin: 'Trazar el recorrido desde la puerta de la IE Rafael Uribe Uribe hasta la cancha principal usando pasos y giros.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulos1P2[i]}'. La adición permite agrupar colecciones y la sustracción permite encontrar diferencias y cantidades restantes.`,
            formulas: [
              'Adición: a + b = c (Parte + Parte = Todo)',
              'Sustracción: a - b = c (Todo - Parte = Otra Parte)',
              'Equivalencia: 4 + 2 = 6'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Mateo tiene 8 colores en su cartuchera y le presta 3 a Mariana. ¿Cuántos colores le quedan a Mateo?',
              pasos: [
                'Paso 1: Identificar la cantidad inicial: 8 colores.',
                'Paso 2: Identificar la acción: Quitar o prestar 3 colores.',
                'Paso 3: Realizar la resta: 8 - 3 = 5 colores.'
              ],
              solucionFinal: 'A Mateo le quedan 5 colores.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Juego de dados: lanzar 2 dados, sumar los puntos y avanzar en el tablero.',
            tareaBarrial: 'Ubicar 3 objetos en la sala de su casa: uno a la izquierda, uno a la derecha y uno encima de la mesa.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulos1P3 = [
          'Números hasta el 50 y la Familia de las Decenas (10, 20, 30, 40, 50)',
          'Lectura y Escritura de Números hasta el 99 en el Ábaco',
          'Usos de los Números: Códigos, Números Ordinales (1°, 2°, 3°...) y Medida',
          'Problemas de Juntar, Separar y Comparar con Números de 2 Cifras',
          'Propiedad Transitiva y Relaciones de Igualdad (Si A = B y B = C, entonces A = C)',
          'Medición de Capacidad: Llenar Recipientes con Vasos de Agua',
          'Estimación y Comparación de Masa con Balanza Casera',
          'Figuras Geométricas Bidimensionales: Círculo, Triángulo, Cuadrado y Rectángulo',
          'Cuerpos Geométricos Tridimensionales en el Entorno: Esfera, Cubo y Cilindro',
          'Construcción de Formas con Plastilina, Palitos de Paleta y Cajas Recicladas',
          'Patrones Geométricos y Secuencias de Figuras por Color y Forma',
          'Preguntas Estadísticas Escolares: Identificación de la Moda',
          'Taller Integrador de Matemáticas Grado 1°',
          'Evaluación Acumulativa Final P3 Grado 1°'
        ];
        const pensamiento = i < 4 
          ? 'Numérico y Sistemas Numéricos'
          : i === 4 
          ? 'Variacional y Sistemas Algebraicos'
          : i < 7 
          ? 'Métrico y Sistemas de Medida'
          : i < 11 
          ? 'Espacial y Sistemas Geométricos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 27,
          titulo: titulos1P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 1 / DBA 6 / DBA 9 / DBA 10: Reconoce usos del número, compara figuras 2D/3D y describe regularidades en secuencias.',
          competencia: 'Construcción Geométrica, Razonamiento Variacional y Conteo',
          evidencia: 'SABER: Identifica figuras 2D y sólidos 3D. HACER: Construye modelos con material didáctico. SER: Cuida los materiales y trabaja en equipo.',
          dua: {
            representacion: 'Cuerpos geométricos de madera/plástico, tangram infantil y videos animados interactivos.',
            expresion: 'Elaboración de títeres geométricos y clasificación de envases reciclables.',
            implicacion: 'Taller creativo de arte con sellos de figuras geométricas.'
          },
          exploracionMedellin: 'Observar los edificios y casas de la comuna 12 de Medellín e identificar qué figuras geométricas tienen sus techos y ventanas.',
          estructuracionTeorica: {
            concepto: `Profundización en '${titulos1P3[i]}'. Las formas geométricas componen todos los objetos construidos en nuestra ciudad.`,
            formulas: [
              'Círculo: Sin esquinas, línea curva cerrada',
              'Triángulo: 3 lados y 3 vértices',
              'Cuadrado: 4 lados iguales y 4 esquinas rectas',
              'Rectángulo: 4 lados (2 pares iguales)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Sofía quiere armar un robot de juguete. Utiliza 1 caja de zapatos para el cuerpo, 2 rollos de papel para las piernas y 1 pelota de icopor para la cabeza. ¿Qué cuerpos geométricos usó?',
              pasos: [
                'Paso 1: La caja de zapatos tiene forma de prisma rectangular (caja).',
                'Paso 2: Los rollos de papel tienen forma de cilindro.',
                'Paso 3: La pelota de icopor tiene forma de esfera.'
              ],
              solucionFinal: 'Utilizó 1 prisma rectangular, 2 cilindros y 1 esfera.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Construir un castillo en grupos de 3 combinando conos, cubos y cilindros de cartón.',
            tareaBarrial: 'Buscar en la cocina de la casa un objeto con forma de cilindro (ej. lata de atún) y uno con forma de cubo.'
          }
        };
      })
    }
  },

  // ==========================================
  // GRADO SEGUNDO (2°)
  // ==========================================
  '2°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulos2P1 = [
          'Sistema de Numeración Decimal: Unidades, Decenas y Centenas (hasta 999)',
          'Lectura, Escritura y Descomposición Polinómica de Números de 3 Cifras',
          'Comparación y Orden de Números de 3 Cifras en la Recta Numérica',
          'Adición con Reagrupación (Llevando) de Números de Tres Cifras',
          'Sustracción Desagrupando (Prestando) con Números de Tres Cifras',
          'Estructuras Aditivas: Problemas de Composición (Parte + Parte = Todo)',
          'Estructuras Aditivas: Problemas de Transformación y Cambio (Inicio ± Cambio = Final)',
          'Estructuras Aditivas: Problemas de Comparación e Igualación',
          'Introducción a la Multiplicación como Suma Repetitiva (Suma Iterada)',
          'Tablas de Multiplicar del 2, 3 y 4 con Arreglos Rectangulares',
          'Tablas de Conteo y Pictogramas con Escala (1 símbolo = 2 o 5 unidades)',
          'Construcción e Interpretación de Gráficos de Puntos',
          'Evaluación Acumulativa P1 Grado 2°'
        ];
        const pensamiento = i < 10 ? 'Numérico y Sistemas Numéricos' : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 1,
          titulo: titulos2P1[i],
          tiempoEstimado: '160 minutos (4 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 1 / DBA 10: Interpreta y resuelve problemas aditivos y multiplicativos sencillos, organizando datos en pictogramas con escala.',
          competencia: 'Resolución de Problemas Aditivos y Multiplicativos Iniciales',
          evidencia: 'SABER: Reconoce relaciones aditivas y multiplicativas. HACER: Resuelve adiciones con reagrupación y pictogramas con escala. SER: Trabaja con orden y precisión.',
          dua: {
            representacion: 'Base 10 (bloques multibase), tabla de posición U-D-C y billetes didácticos de $50, $100 y $500.',
            expresion: 'Cálculo mental guiado, resolución en tablero individual y trabajo con fichas encajables.',
            implicacion: 'Simulación de compras y vueltas en una tienda de comestibles de Medellín.'
          },
          exploracionMedellin: 'Calcular el dinero necesario para comprar 3 pasajes integrados de autobús en el barrio Robledo.',
          estructuracionTeorica: {
            concepto: `Fundamentos de '${titulos2P1[i]}'. El valor posicional establece que 1 Centena = 10 Decenas = 100 Unidades.`,
            formulas: [
              '1 Centena (C) = 10 Decenas (D) = 100 Unidades (U)',
              'Multiplicación como adición iterada: 3 × 4 = 4 + 4 + 4 = 12',
              'Descomposición: 348 = 300 + 40 + 8'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En la biblioteca de la escuela hay 245 libros de cuentos y llegan 187 libros nuevos de ciencias. ¿Cuántos libros hay en total?',
              pasos: [
                'Paso 1: Ubicar por columnas: C: 2, D: 4, U: 5  +  C: 1, D: 8, U: 7.',
                'Paso 2: Sumar unidades: 5 + 7 = 12 U (colocamos 2 y llevamos 1 D).',
                'Paso 3: Sumar decenas: 1 + 4 + 8 = 13 D (colocamos 3 y llevamos 1 C).',
                'Paso 4: Sumar centenas: 1 + 2 + 1 = 4 C.'
              ],
              solucionFinal: 'En total hay 432 libros en la biblioteca.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de cajas de cambio: canjear 10 unidades por una barrita de decena en parejas.',
            tareaBarrial: 'Averiguar los precios de 3 frutas en la tienda del barrio y ordenarlos de menor a mayor.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulos2P2 = [
          'Algoritmos No Convencionales para la Multiplicación (Duplicaciones y Descomposiciones)',
          'Tablas de Multiplicar del 5, 6 y 10: Regularidades y Patrones',
          'Noción de División como Reparto Equitativo y Agrupación en Partes Iguales',
          'Problemas de Reparto Exacto con Material Concreto',
          'Patrones Numéricos Crecientes y Decrecientes (Secuencias y Reglas)',
          'Propiedades de las Operaciones y Reversibilidad entre Suma y Resta',
          'Estimación y Medición de Longitudes con Metro y Centímetro',
          'Noción de Superficie: Cubrimiento de Cuadrículas con Baldosas',
          'Unidades de Capacidad (Litro y Vaso) y Peso (Kilo y Libra)',
          'Clasificación de Polígonos según el Número de Lados (Triángulos, Cuadriláteros, Pentágonos)',
          'Cuerpos Geométricos y sus Elementos: Caras, Aristas y Vértices',
          'Interpretación de Encuestas y Gráficos Estadísticos con Escala',
          'Evaluación Acumulativa P2 Grado 2°'
        ];
        const pensamiento = i < 4 
          ? 'Numérico y Sistemas Numéricos'
          : i < 6 
          ? 'Variacional y Sistemas Algebraicos'
          : i < 9 
          ? 'Métrico y Sistemas de Medida'
          : i < 11 
          ? 'Espacial y Sistemas Geométricos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 14,
          titulo: titulos2P2[i],
          tiempoEstimado: '160 minutos (4 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 2 / DBA 4 / DBA 6 / DBA 8 / DBA 10: Aplica reparto equitativo, reconoce patrones, mide magnitudes y clasifica figuras geométricas.',
          competencia: 'Modelación Geométrica, Métrica y Operaciones Básicas',
          evidencia: 'SABER: Conoce figuras, repartos y medidas. HACER: Mide con reglas y clasifica figuras 2D/3D. SER: Participa en el trabajo colaborativo.',
          dua: {
            representacion: 'Cinta métrica flexible, papel cuadriculado, cuerpos geométricos transparentes y geoplanos.',
            expresion: 'Construcción con palillos y plastilina, explicación oral de patrones numéricos.',
            implicacion: 'Medición de las dimensiones reales del escritorio y la puerta del salón.'
          },
          exploracionMedellin: 'Medir el largo de la jardinera del patio escolar usando una cinta métrica en centímetros.',
          estructuracionTeorica: {
            concepto: `Estudio de '${titulos2P2[i]}'. El reparto equitativo permite distribuir una cantidad en grupos iguales sin que sobre nada.`,
            formulas: [
              '1 Metro (m) = 100 Centímetros (cm)',
              'Reparto: 15 ÷ 3 = 5 (porque 5 × 3 = 15)',
              'Elementos de polígonos: Lados, Vértices, Ángulos'
            ],
            ejemploPasoAPaso: {
              enunciado: 'La profesora tiene 20 lápices y los quiere repartir en partes iguales entre 4 estudiantes. ¿Cuántos lápices recibe cada uno?',
              pasos: [
                'Paso 1: Cantidad total a repartir: 20 lápices.',
                'Paso 2: Cantidad de grupos iguales: 4 estudiantes.',
                'Paso 3: Repartir de uno en uno o buscar en la tabla del 4: 4 × 5 = 20.',
                'Paso 4: Cada estudiante recibe 5 lápices.'
              ],
              solucionFinal: 'Cada estudiante recibe 5 lápices.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En geoplanos, construir un triángulo, un cuadrado y un rectángulo y contar sus vértices.',
            tareaBarrial: 'Medir con una regla de 30 cm el largo de la mesa del comedor de su casa.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulos2P3 = [
          'Números hasta el 999: Lectura, Escritura y Comparación en Situaciones Reales',
          'Cálculo Mental y Estimación Rápida de Sumas y Restas',
          'Uso de la Calculadora Básica como Herramienta de Verificación',
          'Resolución de Problemas Multiplicativos de Filas y Columnas',
          'Ecuaciones Aditivas Simples con Incógnitas (? + 15 = 40)',
          'El Reloj de Manecillas y Digital: Horas en Punto, Medias Horas y Cuartos',
          'Lectura del Calendario: Meses, Semanas y Fechas Cívicas de Medellín',
          'Nociones de Horizontalidad, Verticalidad e Inclinación',
          'Líneas Paralelas y Líneas Perpendiculares en el Entorno Urbano',
          'Desplazamientos en Cuadrículas y Mapas Barriales Simples',
          'Noción Intuitiva de Azar: Eventos Seguros, Posibles e Imposibles',
          'Predicción de Resultados en Juegos de Dados y Monedas',
          'Taller Integrador de Matemáticas Grado 2°',
          'Evaluación Acumulativa Final P3 Grado 2°'
        ];
        const pensamiento = i < 4 
          ? 'Numérico y Sistemas Numéricos'
          : i === 4 
          ? 'Variacional y Sistemas Algebraicos'
          : i < 7 
          ? 'Métrico y Sistemas de Medida'
          : i < 10 
          ? 'Espacial y Sistemas Geométricos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 27,
          titulo: titulos2P3[i],
          tiempoEstimado: '160 minutos (4 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 3 / DBA 5 / DBA 7 / DBA 9 / DBA 11: Usa el SND, lee el reloj, reconoce paralelismo/perpendicularidad y predice eventos de azar.',
          competencia: 'Razonamiento Espacial, Métrico y Probabilidad Cotidiana',
          evidencia: 'SABER: Lee la hora y reconoce líneas paralelas/perpendiculares. HACER: Resuelve igualdades y clasifica eventos seguros/imposibles. SER: Argumenta con claridad.',
          dua: {
            representacion: 'Relojes didácticos con manecillas móviles, cuadrículas de coordenadas con pegatinas y ruletas de colores.',
            expresion: 'Lectura oral de la hora, dibujo de planos y predicción en juegos de feria.',
            implicacion: 'Diseño de un itinerario semanal de actividades preferidas en Medellín.'
          },
          exploracionMedellin: 'Identificar líneas paralelas en las vías del Tranvía de Ayacucho y líneas perpendiculares en los cruces semafóricos.',
          estructuracionTeorica: {
            concepto: `Profundización en '${titulos2P3[i]}'. Las líneas paralelas nunca se cruzan; las perpendiculares se cruzan formando esquinas rectas.`,
            formulas: [
              '1 Hora = 60 Minutos | Media hora = 30 min | Un cuarto = 15 min',
              'Líneas Paralelas: Mantienen la misma distancia ( || )',
              'Líneas Perpendiculares: Se cruzan formando ángulo de 90° ( ⊥ )',
              'Probabilidad: Seguro (siempre ocurre), Imposible (nunca ocurre)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Si una clase de música comienza a las 8:15 a.m. y dura 45 minutos, ¿a qué hora termina la clase?',
              pasos: [
                'Paso 1: Hora inicial: 8 horas y 15 minutos.',
                'Paso 2: Sumar los minutos: 15 min + 45 min = 60 minutos.',
                'Paso 3: Convertir 60 minutos en 1 hora adicional: 8 horas + 1 hora = 9:00 a.m.'
              ],
              solucionFinal: 'La clase termina exactamente a las 9:00 a.m.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, marcar en el reloj didáctico diferentes horas del día (recreo, almuerzo, salida).',
            tareaBarrial: 'Observar los cruces de calles en su barrio y dibujar un cruce con calles perpendiculares.'
          }
        };
      })
    }
  },

  // ==========================================
  // GRADO TERCERO (3°)
  // ==========================================
  '3°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulos3P1 = [
          'Números de Cuatro y Cinco Cifras: Unidades de Mil y Decenas de Mil',
          'Lectura, Escritura y Valor Posicional en el Ábaco y Tabla de Posición',
          'Algoritmo Estándar de la Adición y Sustracción con Cantidades hasta 99.999',
          'Resolución de Problemas Aditivos Combinados en Contextos Comerciales',
          'Propiedades de la Multiplicación: Conmutativa, Asociativa y Modulativa',
          'Propiedad Distributiva de la Multiplicación Respecto a la Suma',
          'Multiplicación por Una Cifra con Reagrupación',
          'Multiplicación por Dos Cifras y por Múltiplos de 10, 100 y 1.000',
          'División Exacta e Inexacta entre Una Cifra: Reparto y Algoritmo',
          'Términos de la División: Dividendo, Divisor, Cociente y Residuo',
          'Recolección de Datos, Tablas de Frecuencia y Gráficos de Barras con Escala',
          'Lectura e Interpretación de Pictogramas y Gráficos Estadísticos Escolares',
          'Evaluación Acumulativa P1 Grado 3°'
        ];
        const pensamiento = i < 10 ? 'Numérico y Sistemas Numéricos' : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 1,
          titulo: titulos3P1[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 1 / DBA 10: Formula y resuelve problemas aditivos y multiplicativos directos e inversos, e interpreta tablas de frecuencia y gráficos de barras.',
          competencia: 'Resolución de Problemas Multiplicativos y Análisis Estadístico',
          evidencia: 'SABER: Comprende el valor posicional y la división. HACER: Resuelve multiplicaciones y divisiones e interpreta gráficos. SER: Trabajo en equipo constructivo.',
          dua: {
            representacion: 'Tablas de multiplicar pitagóricas, billetes didácticos colombianos y diagramas de barras interactivos.',
            expresion: 'Resolución por pasos estructurados, creación de historias matemáticas y esquemas conceptuales.',
            implicacion: 'Presupuesto para una salida pedagógica al Parque Explora de Medellín.'
          },
          exploracionMedellin: 'Calcular el valor de 25 entradas escolares para el Jardín Botánico de Medellín.',
          estructuracionTeorica: {
            concepto: `Estructura de '${titulos3P1[i]}'. En la división inexacta se cumple siempre que: Dividendo = (Divisor × Cociente) + Residuo.`,
            formulas: [
              '1 Unidad de Mil (UM) = 1.000 U | 1 Decena de Mil (DM) = 10.000 U',
              'Prueba de la División: D = (d × c) + r (con r < d)',
              'Propiedad Distributiva: a × (b + c) = (a × b) + (a × c)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Se deben empacar 148 naranjas en bolsas de 6 unidades cada una. ¿Cuántas bolsas completas se llenan y cuántas naranjas sobran?',
              pasos: [
                'Paso 1: Dividir 148 entre 6.',
                'Paso 2: Tomar 14: 14 ÷ 6 = 2 (sobran 2).',
                'Paso 3: Bajar el 8 para formar 28: 28 ÷ 6 = 4 (porque 6 × 4 = 24, sobran 4).',
                'Paso 4: Cociente = 24, Residuo = 4.'
              ],
              solucionFinal: 'Se llenan 24 bolsas completas y sobran 4 naranjas.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En grupos de 3, resolver 4 problemas de compras y ventas con billetes didácticos.',
            tareaBarrial: 'Registrar la cantidad de personas que viven en 4 casas vecinas y construir una tabla de frecuencias.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulos3P2 = [
          'Estrategias de Estimación, Redondeo a la Decena y Centena Más Cercana',
          'Cálculo Mental Rápido y Descomposición Numérica Abreviada',
          'Operaciones Combinadas de Suma, Resta y Multiplicación con Paréntesis',
          'Secuencias Numéricas y Geométricas: Identificación del Patrón de Cambio',
          'Tablas de Variación Proporcional Simple (Doble, Triple, Mitad)',
          'Noción y Medición del Perímetro en Polígonos Regulares e Irregulares',
          'Cálculo del Área por Recubrimiento con Unidades Cuadradas (cm² y m²)',
          'Diferenciación Conceptual entre Perímetro y Área en Cuadriláteros',
          'Clasificación de Triángulos según sus Lados (Equilátero, Isósceles, Escaleno)',
          'Clasificación de Cuadriláteros (Cuadrado, Rectángulo, Rombo, Romboide, Trapecio)',
          'Sólidos Geométricos: Prismas, Pirámides, Cilindros, Conos y Esferas',
          'Análisis de Datos e Información en Medios Escolares',
          'Evaluación Acumulativa P2 Grado 3°'
        ];
        const pensamiento = i < 3 
          ? 'Numérico y Sistemas Numéricos'
          : i < 5 
          ? 'Variacional y Sistemas Algebraicos'
          : i < 8 
          ? 'Métrico y Sistemas de Medida'
          : i < 11 
          ? 'Espacial y Sistemas Geométricos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 14,
          titulo: titulos3P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 2 / DBA 4 / DBA 6 / DBA 8 / DBA 10: Justifica estimaciones, halla áreas y perímetros, describe secuencias y clasifica formas 2D y 3D.',
          competencia: 'Modelación Geométrica, Métrica y Patrones de Variación',
          evidencia: 'SABER: Distingue área de perímetro y clasifica polígonos. HACER: Calcula perímetros y recubre superficies. SER: Precisión y constancia.',
          dua: {
            representacion: 'Papel milimetrado, geoplanos, regletas Cuisenaire y poliedros armables en cartulina.',
            expresion: 'Cálculo de perímetros en el patio y elaboración de maquetas con figuras planas.',
            implicacion: 'Diseño del plano a escala de una huerta escolar para la institución.'
          },
          exploracionMedellin: 'Calcular el perímetro y área aproximada de una cancha múltiple de baloncesto en la comuna 12.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulos3P2[i]}'. El perímetro es la medida del contorno (unidades lineales) y el área es la medida de la superficie encerrada (unidades cuadradas).`,
            formulas: [
              'Perímetro del Polígono: P = Suma de todos los lados',
              'Área del Rectángulo: A = Base × Altura',
              'Área del Cuadrado: A = Lado × Lado'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un salón de clase rectangular mide 8 metros de largo y 5 metros de ancho. Hallar su perímetro y su área.',
              pasos: [
                'Paso 1: Perímetro = 8m + 5m + 8m + 5m = 26 metros de contorno.',
                'Paso 2: Área = Base × Altura = 8m × 5m = 40 metros cuadrados (m²).'
              ],
              solucionFinal: 'El perímetro es de 26 metros y el área es de 40 m².'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Diseñar en papel cuadriculado dos figuras diferentes que tengan la misma área (12 cuadritos).',
            tareaBarrial: 'Medir con un metro el perímetro de una ventana de su habitación.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulos3P3 = [
          'Concepto de Fracción: Relación Parte - Todo y Unidad Dividida',
          'Términos de la Fracción: Numerador y Denominador',
          'Representación Gráfica y en la Semirrecta Numérica de Fracciones',
          'Fracciones Propias, Impropias y Número Mixto Elemental',
          'Fracciones Homogéneas y Heterogéneas: Comparación y Orden',
          'Suma y Resta de Fracciones con Igual Denominador (Homogéneas)',
          'Ecuaciones Aditivas y Multiplicativas con Valores Desconocidos (? × 4 = 36)',
          'Medición y Estimación de Volumen con Cubos Unitarios (cm³)',
          'Empaque de Cajas y Capacidad de Almacenamiento',
          'Transformaciones en el Plano: Traslación y Reflexión (Simetría)',
          'Rotación de Figuras Alrededor de un Punto',
          'Escala Cualitativa de Probabilidad: Imposible, Poco Posible, Muy Posible, Seguro',
          'Taller Integrador de Matemáticas Grado 3°',
          'Evaluación Acumulativa Final P3 Grado 3°'
        ];
        const pensamiento = i < 6 
          ? 'Numérico y Sistemas Numéricos'
          : i === 6 
          ? 'Variacional y Sistemas Algebraicos'
          : i < 9 
          ? 'Métrico y Sistemas de Medida'
          : i < 11 
          ? 'Espacial y Sistemas Geométricos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 27,
          titulo: titulos3P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 3 / DBA 5 / DBA 7 / DBA 9 / DBA 11: Usa fracciones parte-todo, estima volumen, aplica transformaciones y predice eventos probables.',
          competencia: 'Razonamiento Fraccionario, Espacial y Probabilístico',
          evidencia: 'SABER: Comprende fracciones y transformaciones. HACER: Opera fracciones homogéneas y cuantifica probabilidades. SER: Argumenta con rigor.',
          dua: {
            representacion: 'Discos y barras de fracciones encajables, espejos para simetría y ruletas de probabilidad.',
            expresion: 'Representación en plastilina de cortes fraccionarios y dibujo de simetrías en cuadrícula.',
            implicacion: 'Juegos de reparto de pizzas y recetas de cocina colombiana.'
          },
          exploracionMedellin: 'Dividir una bandeja paisa o una torta en 8 porciones iguales y calcular la fracción que corresponde a 3 comensales.',
          estructuracionTeorica: {
            concepto: `Estudio de '${titulos3P3[i]}'. El denominador indica en cuántas partes iguales se divide la unidad y el numerador cuántas partes se toman.`,
            formulas: [
              'Fracción = Numerador (partes tomadas) / Denominador (partes totales)',
              'Suma homogénea: a/c + b/c = (a + b)/c',
              'Volumen con cubos: V = Largo × Ancho × Alto'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Camilo se come 2/6 de una pizza y su hermana se come 3/6. ¿Qué fracción de la pizza comieron entre los dos y cuánto sobra?',
              pasos: [
                'Paso 1: Sumar las fracciones: 2/6 + 3/6 = (2 + 3)/6 = 5/6.',
                'Paso 2: La pizza entera representa la unidad: 6/6.',
                'Paso 3: Restar para ver cuánto sobra: 6/6 - 5/6 = 1/6.'
              ],
              solucionFinal: 'Entre los dos comieron 5/6 de la pizza y sobró 1/6.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de simetría: completar la mitad derecha de una figura dibujada en papel cuadriculado.',
            tareaBarrial: 'Observar en casa un paquete de galletas fraccionado y escribir qué fracción representa una porción.'
          }
        };
      })
    }
  },

  // ==========================================
  // GRADO CUARTO (4°)
  // ==========================================
  '4°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulos4P1 = [
          'Los Números Naturales hasta los Millones y su Sistema de Numeración Decimal',
          'Operaciones Fundamentales y Algoritmos Avanzados de Multiplicación y División',
          'Resolución de Problemas Multi-Paso con Operaciones Combinadas',
          'Múltiplos, Divisores y Criterios de Divisibilidad (por 2, 3, 5 y 10)',
          'Números Primos, Números Compuestos y Descomposición Factorial',
          'Conceptos de Fracción: Razón, Parte-Todo, Cociente y Operador',
          'Fracción de una Cantidad (Operador Fraccionario: 3/4 de 120)',
          'Fracciones Equivalentes: Amplificación y Simplificación de Fracciones',
          'Relación entre Fracciones Decimales y Números Decimales (Décimos y Centésimos)',
          'Lectura, Escritura y Valor Posicional de los Números Decimales',
          'Tablas de Doble Entrada y Frecuencias Cruzadas',
          'Construcción e Interpretación de Gráficos de Barras Agrupadas y Gráficos de Líneas',
          'Evaluación Acumulativa P1 Grado 4°'
        ];
        const pensamiento = i < 10 ? 'Numérico y Sistemas Numéricos' : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 1,
          titulo: titulos4P1[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 1 / DBA 10: Interpreta fracciones y decimales en diversos contextos, y organiza datos en tablas de doble entrada y gráficos de líneas.',
          competencia: 'Razonamiento Numérico Fraccionario y Análisis Estadístico Bivariado',
          evidencia: 'SABER: Comprende fracciones como operador y decimales. HACER: Aplica algoritmos con decimales y construye gráficos. SER: Trabajo en equipo y responsabilidad.',
          dua: {
            representacion: 'Diagramas de tiras de fracciones, tablas de conversión decimal y software de hojas de cálculo.',
            expresion: 'Informes gráficos comparativos y resolución guiada de problemas comerciales.',
            implicacion: 'Análisis de presupuestos y facturación del consumo de energía en Medellín (EPM).'
          },
          exploracionMedellin: 'Calcular las 3/5 partes del aforo de un vagón del Metro de Medellín con capacidad para 200 pasajeros.',
          estructuracionTeorica: {
            concepto: `Tratamiento de '${titulos4P1[i]}'. Una fracción como operador multiplica la cantidad por el numerador y divide por el denominador.`,
            formulas: [
              'Operador Fraccionario: (a/b) de N = (N × a) / b',
              'Fracción Decimal: 3/10 = 0,3 | 25/100 = 0,25',
              'Amplificación: (a × k) / (b × k) = Fracción equivalente'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un supermercado tiene 120 paquetes de arroz y vende las 3/4 partes. ¿Cuántos paquetes vendió y cuántos le quedan?',
              pasos: [
                'Paso 1: Calcular 3/4 de 120: (120 × 3) / 4 = 360 / 4 = 90 paquetes vendidos.',
                'Paso 2: Restar del total para saber cuántos quedan: 120 - 90 = 30 paquetes.'
              ],
              solucionFinal: 'Vendió 90 paquetes y le quedan 30 paquetes.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, simplificar una lista de 6 fracciones hasta su mínima expresión irreductible.',
            tareaBarrial: 'Elaborar una encuesta en casa sobre el tiempo diario dedicado a la lectura y televisión y graficarlo en líneas.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulos4P2 = [
          'Comparación y Orden de Números Fraccionarios y Decimales',
          'Suma y Resta de Fracciones Heterogéneas mediante Mínimo Común Múltiplo',
          'Adición y Sustracción de Números Decimales con Alineación de Coma',
          'Multiplicación de Números Decimales por Enteros y por Decimales',
          'Atributos Medibles: Masa, Peso, Capacidad, Densidad y Temperatura',
          'Unidades de Medida de Masa (Gramo, Kilogramo, Tonelada) y Conversiones',
          'Área de Figuras Compuestas y Polígonos Regulares',
          'Desarrollos Planos de Cuerpos Redondos y Poliedros (Cubos, Prismas, Pirámides)',
          'Relación entre Caras, Vértices y Aristas (Teorema de Euler para Poliedros)',
          'Relaciones de Dependencia entre Variables y Tablas de Variación',
          'Representación Gráfica de Variaciones Lineales Simples',
          'Diseño y Aplicación de Encuestas Escolares',
          'Evaluación Acumulativa P2 Grado 4°'
        ];
        const pensamiento = i < 4 
          ? 'Numérico y Sistemas Numéricos'
          : i < 7 
          ? 'Métrico y Sistemas de Medida'
          : i < 9 
          ? 'Espacial y Sistemas Geométricos'
          : i < 11 
          ? 'Variacional y Sistemas Algebraicos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 14,
          titulo: titulos4P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 2 / DBA 4 / DBA 6 / DBA 8 / DBA 10: Opera con decimales, calcula áreas compuestas, arma poliedros y analiza relaciones de dependencia.',
          competencia: 'Modelación Geométrica, Magnitudes Físicas y Operaciones Decimales',
          evidencia: 'SABER: Reconoce algoritmos decimales y redes de poliedros. HACER: Opera con decimales y arma sólidos. SER: Rigor y cuidado experimental.',
          dua: {
            representacion: 'Plantillas recortables de poliedros, básculas digitales y termómetros escolares.',
            expresion: 'Construcción tridimensional de sólidos geométricos y sustentación de cálculos.',
            implicacion: 'Proyecto de reciclaje escolar y clasificación de envases por volumen y peso.'
          },
          exploracionMedellin: 'Calcular el peso total en kg de 15 bultos de café transportados desde el suroeste antioqueño a Medellín.',
          estructuracionTeorica: {
            concepto: `Estudio de '${titulos4P2[i]}'. En la suma y resta de decimales es fundamental alinear la coma decimal en la misma columna.`,
            formulas: [
              '1 Kilogramo (kg) = 1.000 Gramos (g)',
              '1 Tonelada (t) = 1.000 kg',
              'Teorema de Euler: C + V = A + 2 (Caras + Vértices = Aristas + 2)'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un cubo tiene 6 caras y 8 vértices. ¿Cuántas aristas tiene?',
              pasos: [
                'Paso 1: Aplicar el Teorema de Euler: C + V = A + 2.',
                'Paso 2: Sustituir los valores: 6 + 8 = A + 2 => 14 = A + 2.',
                'Paso 3: Despejar A: A = 14 - 2 = 12 aristas.'
              ],
              solucionFinal: 'El cubo tiene exactamente 12 aristas.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Recortar y armar en parejas una pirámide de base cuadrada y verificar el Teorema de Euler.',
            tareaBarrial: 'Consultar el peso en gramos de 3 productos empaquetados en la despensa del hogar.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulos4P3 = [
          'Multiplicación y División de Fracciones: Algoritmos y Aplicaciones',
          'Resolución de Problemas Combinados con Fracciones y Decimales',
          'Porcentajes Básicos (10%, 25%, 50%, 75%) y su Relación con Fracciones',
          'El Sistema Métrico Decimal: Múltiplos y Submúltiplos del Metro (km, hm, dam, m, dm, cm, mm)',
          'Conversión de Unidades de Longitud y Superficie',
          'Medición de Ángulos con el Transportador: Agudos, Rectos, Obtusos y Llanos',
          'Movimientos en el Plano: Rotación, Traslación y Reflexión con Vectores',
          'Homotecia: Ampliación y Reducción de Figuras en el Plano Cartesiano',
          'Patrones Numéricos y Expresiones Algebraicas Iniciales',
          'Conjeturas y Generalizaciones sobre Valores Futuros en Secuencias',
          'Diferenciación entre Fenómenos Aleatorios y Deterministas',
          'Cálculo de Probabilidad Clásica Simple (Casos Favorables / Casos Totales)',
          'Taller Integrador Tipo Saber Grado 4°',
          'Evaluación Acumulativa Final P3 Grado 4°'
        ];
        const pensamiento = i < 3 
          ? 'Numérico y Sistemas Numéricos'
          : i < 5 
          ? 'Métrico y Sistemas de Medida'
          : i < 8 
          ? 'Espacial y Sistemas Geométricos'
          : i < 10 
          ? 'Variacional y Sistemas Algebraicos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 27,
          titulo: titulos4P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 3 / DBA 5 / DBA 7 / DBA 9 / DBA 11: Opera fracciones, convierte unidades métricas, aplica homotecia/rotación y calcula probabilidades clásicas.',
          competencia: 'Razonamiento Variacional, Métrico y Probabilístico Avanzado',
          evidencia: 'SABER: Conoce el sistema métrico y probabilidades. HACER: Convierte unidades y rota figuras. SER: Comunica resultados con rigor.',
          dua: {
            representacion: 'Transportadores interactivos, cuadrículas cartesianas dinámicas y simuladores de ruletas.',
            expresion: 'Construcción con regla y compás y sustentación matemática paso a paso.',
            implicacion: 'Análisis de descuentos porcentuales en el comercio de la ciudad de Medellín.'
          },
          exploracionMedellin: 'Calcular el 50% y 25% de descuento en el valor de una prenda de vestir en el centro de Medellín (El Hueco).',
          estructuracionTeorica: {
            concepto: `Profundización en '${titulos4P3[i]}'. La probabilidad clásica de Laplace se define como la razón entre casos favorables y casos posibles totales.`,
            formulas: [
              'Multiplicación de fracciones: (a/b) × (c/d) = (a × c) / (b × d)',
              'División de fracciones: (a/b) ÷ (c/d) = (a × d) / (b × c)',
              'Probabilidad: P(A) = Casos Favorables / Casos Posibles Totales',
              'Porcentaje: 50% = 1/2 | 25% = 1/4 | 75% = 3/4'
            ],
            ejemploPasoAPaso: {
              enunciado: 'En una bolsa hay 4 balotas rojas, 3 balotas verdes y 5 balotas amarillas. Si se saca una balota sin mirar, ¿cuál es la probabilidad de que sea verde?',
              pasos: [
                'Paso 1: Contar los casos totales: 4 + 3 + 5 = 12 balotas.',
                'Paso 2: Contar los casos favorables (verdes): 3 balotas.',
                'Paso 3: Aplicar Regla de Laplace: P(Verde) = 3 / 12.',
                'Paso 4: Simplificar la fracción: 3/12 = 1/4 = 0,25 (25%).'
              ],
              solucionFinal: 'La probabilidad de extraer una balota verde es de 1/4 (25%).'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Taller de dibujo: ampliar al doble (escala 2:1) una figura poligonal en papel cuadriculado.',
            tareaBarrial: 'Medir con un transportador 3 ángulos presentes en puertas o ventanas de su vivienda.'
          }
        };
      })
    }
  },

  // ==========================================
  // GRADO QUINTO (5°)
  // ==========================================
  '5°': {
    'Matemáticas': {
      1: Array.from({ length: 13 }, (_, i) => {
        const titulos5P1 = [
          'Estructura de los Números Naturales Grandes y Notación Científica Elemental',
          'Operaciones Combinadas y Jerarquía de las Operaciones con Signos de Agrupación',
          'Potenciación de Números Naturales: Base, Exponente y Potencia',
          'Propiedades de la Potenciación: Producto y Cociente de Potencias de Igual Base',
          'Radicación y Logaritmación como Operaciones Inversas de la Potenciación',
          'Fracciones: Interpretación Parte-Todo, Razón, Cociente y Operador',
          'Fracciones Equivalentes y Orden en el Conjunto de los Racionales Positivos',
          'Operaciones Combinadas con Fracciones (Suma, Resta, Multiplicación y División)',
          'Números Decimales: Operaciones y Conversión a Fracción Generatriz Sencilla',
          'Resolución de Problemas Reales con Fracciones y Decimales en el Contexto Escolar',
          'Recolección de Datos y Comparación de Dos Grupos o Poblaciones',
          'Construcción e Interpretación de Tablas de Frecuencias y Diagramas Circulares',
          'Evaluación Acumulativa P1 Grado 5°'
        ];
        const pensamiento = i < 10 ? 'Numérico y Sistemas Numéricos' : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 1,
          titulo: titulos5P1[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 1 / DBA 10: Formula y resuelve problemas con números naturales, fracciones, decimales y potenciación, y compara grupos de datos con diagramas circulares.',
          competencia: 'Resolución de Problemas Numéricos Avanzados y Análisis Estadístico Comparativo',
          evidencia: 'SABER: Interpreta potencias, raíces y fracciones. HACER: Resuelve polinomios aritméticos y gráficos circulares. SER: Actitud analítica y perseverante.',
          dua: {
            representacion: 'Diagramas de sectores dinámicos, árboles de factores y calculadoras científicas iniciales.',
            expresion: 'Resolución justificada por pasos y sustentación de informes de análisis de datos.',
            implicacion: 'Estudio de estadísticas de consumo y ahorro energético institucional.'
          },
          exploracionMedellin: 'Comparar el porcentaje de usuarios que utilizan las distintas líneas del Metro y Metrocable mediante un diagrama circular.',
          estructuracionTeorica: {
            concepto: `Fundamentos de '${titulos5P1[i]}'. La jerarquía de operaciones establece: 1° Paréntesis, 2° Potencias y Raíces, 3° Multiplicaciones y Divisiones, 4° Sumas y Restas.`,
            formulas: [
              'Potenciación: a^n = a × a × ... × a (n veces)',
              'Producto de potencias de igual base: a^m × a^n = a^(m+n)',
              'Ángulo del sector circular: Ángulo = (Frecuencia Relativa) × 360°'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Resolver el polinomio aritmético: 5² + (18 - 6) ÷ 3 × 2.',
              pasos: [
                'Paso 1: Resolver el paréntesis: (18 - 6) = 12.',
                'Paso 2: Calcular la potencia: 5² = 25.',
                'Paso 3: Realizar división y multiplicación de izquierda a derecha: 12 ÷ 3 = 4, luego 4 × 2 = 8.',
                'Paso 4: Realizar la suma final: 25 + 8 = 33.'
              ],
              solucionFinal: 'El resultado final es 33.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En grupos de 3, resolver una guía de 4 problemas con potencias y raíces.',
            tareaBarrial: 'Construir un diagrama circular con la distribución de los gastos mensuales aproximados de su familia.'
          }
        };
      }),
      2: Array.from({ length: 13 }, (_, i) => {
        const titulos5P2 = [
          'Descomposición de Números en Factores Primos y Árbol de Factores',
          'Máximo Común Divisor (MCD) y Mínimo Común Múltiplo (mcm) en Problemas Reales',
          'Cálculo de Áreas de Polígonos Regulares: Apotema y Perímetro',
          'Relaciones entre Perímetro y Área: Figuras con Igual Perímetro y Distinta Área',
          'Medición de Superficies Agrícolas y Urbanas (Hectárea y Metro Cuadrado)',
          'Cuerpos Redondos (Cilindro, Cono, Esfera) y Poliedros Regulares (Platónicos)',
          'Construcción y Vistas de Sólidos: Vista Frontal, Lateral y Superior',
          'Concepto de Variable y Patrones de Covariación Numérica y Gráfica',
          'Tablas de Variación Directamente Proporcional y Regla de Tres Simple Directa',
          'Espacio Muestral y Enumeración Sistemática de Eventos Simples',
          'Diagramas de Árbol para el Conteo de Posibilidades en Experimentos Aleatorios',
          'Proyecto de Aula: Investigación Estadística sobre Hábitos Escolares',
          'Evaluación Acumulativa P2 Grado 5°'
        ];
        const pensamiento = i < 2 
          ? 'Numérico y Sistemas Numéricos'
          : i < 5 
          ? 'Métrico y Sistemas de Medida'
          : i < 7 
          ? 'Espacial y Sistemas Geométricos'
          : i < 9 
          ? 'Variacional y Sistemas Algebraicos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 14,
          titulo: titulos5P2[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 2 / DBA 5 / DBA 6 / DBA 8 / DBA 12: Aplica MCD/mcm, analiza variaciones área-perímetro, modela sólidos y calcula probabilidades.',
          competencia: 'Modelación Geométrica, Proporcionalidad y Razonamiento Probabilístico',
          evidencia: 'SABER: Comprende factores primos y proporcionalidad. HACER: Aplica regla de tres y dibuja vistas de sólidos. SER: Trabajo colaborativo riguroso.',
          dua: {
            representacion: 'Vistas 3D interactivas, bloques isométricos de madera y esquemas de proporcionalidad.',
            expresion: 'Dibujo isométrico en papel de puntos y sustentación de problemas de proporcionalidad.',
            implicacion: 'Cálculo del costo de pintura para remodelar las aulas de la IE Rafael Uribe Uribe.'
          },
          exploracionMedellin: 'Calcular el área de los jardines poligonales del Parque de los Pies Descalzos en Medellín.',
          estructuracionTeorica: {
            concepto: `Desarrollo de '${titulos5P2[i]}'. El área de un polígono regular depende de su perímetro y de su apotema: Área = (Perímetro × Apotema) / 2.`,
            formulas: [
              'Área Polígono Regular: A = (P × ap) / 2',
              'Regla de Tres Simple: x = (b × c) / a',
              'Probabilidad de Laplace: P(E) = Casos Favorables / Casos Posibles'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un hexágono regular tiene 6 lados de 5 cm cada uno y una apotema de 4,3 cm. Calcular su perímetro y su área.',
              pasos: [
                'Paso 1: Calcular el perímetro: P = 6 lados × 5 cm = 30 cm.',
                'Paso 2: Aplicar la fórmula del área: A = (30 cm × 4,3 cm) / 2.',
                'Paso 3: Multiplicar: 30 × 4,3 = 129.',
                'Paso 4: Dividir entre 2: 129 / 2 = 64,5 cm².'
              ],
              solucionFinal: 'El perímetro es de 30 cm y el área es de 64,5 cm².'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'En parejas, hallar el MCD y mcm de 24 y 36 usando descomposición simultánea.',
            tareaBarrial: 'Dibujar la vista frontal, lateral y superior de un electrodoméstico de la casa.'
          }
        };
      }),
      3: Array.from({ length: 14 }, (_, i) => {
        const titulos5P3 = [
          'Ubicación de Fracciones y Decimales en la Recta Numérica con Precisión',
          'Operaciones Combinadas Avanzadas con Racionales Positivos',
          'Problemas de Porcentajes y Descuentos Comerciales del IVA en Colombia',
          'Unidades de Volumen (m³, cm³) y Capacidad (Litro, Mililitro): Equivalencias',
          'Cálculo de Volumen y Superficie Total de Prismas y Cilindros',
          'El Plano Cartesiano en los Cuatro Cuadrantes: Coordenadas y Polígonos',
          'Traslación, Rotación y Reflexión de Polígonos en el Plano Cartesiano',
          'Operaciones No Convencionales y Resolución de Ecuaciones Lineales Básicas',
          'Lenguaje Algebraico Inicial: Traducción de Enunciados Verbales a Expresiones',
          'Probabilidad de Eventos Compuestos y Tablas de Contingencia',
          'Ley de los Grandes Números y Probabilidad Frecuentista con Simulaciones',
          'Taller de Proyectos Matemáticos de Transición a la Secundaria (6°)',
          'Taller Integrador de Matemáticas Tipo Saber 5°',
          'Evaluación Acumulativa Final P3 Grado 5°'
        ];
        const pensamiento = i < 3 
          ? 'Numérico y Sistemas Numéricos'
          : i < 5 
          ? 'Métrico y Sistemas de Medida'
          : i < 7 
          ? 'Espacial y Sistemas Geométricos'
          : i < 9 
          ? 'Variacional y Sistemas Algebraicos'
          : 'Aleatorio y Sistemas de Datos';

        return {
          semana: i + 27,
          titulo: titulos5P3[i],
          tiempoEstimado: '120 minutos (3 horas académicas semanales)',
          pensamiento,
          dba: 'DBA 3 / DBA 4 / DBA 7 / DBA 9 / DBA 12: Representa racionales en la recta, halla volúmenes, ubica coordenadas y resuelve ecuaciones lineales.',
          competencia: 'Razonamiento Algebraico, Espacial y Preparación para Secundaria',
          evidencia: 'SABER: Conoce el plano cartesiano y ecuaciones. HACER: Ubica puntos, calcula volúmenes y resuelve ecuaciones. SER: Autonomía y rigor.',
          dua: {
            representacion: 'GeoGebra interactivo en plano cartesiano, simuladores de dados y cubos de volumen.',
            expresion: 'Planteamiento simbólico de ecuaciones y sustentación de traslaciones geométricas.',
            implicacion: 'Mapeo de lugares emblemáticos de Medellín en un plano cartesiano interactivo.'
          },
          exploracionMedellin: 'Ubicar en el plano cartesiano las coordenadas de la IE Rafael Uribe Uribe, el Estadio Atanasio Girardot y el Parque Berrío.',
          estructuracionTeorica: {
            concepto: `Consolidación de '${titulos5P3[i]}'. El volumen de un prisma recto se calcula multiplicando el área de la base por su altura: V = A_base × h.`,
            formulas: [
              '1 Litro = 1.000 cm³ | 1 m³ = 1.000 Litros',
              'Volumen Prisma Rectangular: V = Largo × Ancho × Alto',
              'Plano Cartesiano: P(x, y) donde x es abscisa y y es ordenada',
              'Ecuación lineal: ax + b = c => x = (c - b) / a'
            ],
            ejemploPasoAPaso: {
              enunciado: 'Un tanque de agua de la escuela tiene forma de prisma rectangular con base de 2 metros de largo, 1,5 metros de ancho y 2 metros de profundidad. ¿Cuántos litros de agua puede almacenar?',
              pasos: [
                'Paso 1: Calcular el volumen en m³: V = 2m × 1,5m × 2m = 6 m³.',
                'Paso 2: Convertir m³ a litros sabiendo que 1 m³ = 1.000 Litros.',
                'Paso 3: Multiplicar: 6 m³ × 1.000 L/m³ = 6.000 Litros.'
              ],
              solucionFinal: 'El tanque puede almacenar exactamente 6.000 litros de agua.'
            }
          },
          ejercitacionYCierre: {
            colaborativo: 'Ubicar 5 parejas ordenadas en el plano cartesiano y unirlas para descubrir una figura oculta.',
            tareaBarrial: 'Calcular el volumen aproximado de una caja de zapatos midiendo sus tres dimensiones en cm.'
          }
        };
      })
    }
  }
};
