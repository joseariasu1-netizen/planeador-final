# Verificación Curricular Oficial (MEN y Medellín) y Coherencia Temática Semanal (1° a 11°)

Este plan corrige de raíz la desalineación entre los títulos semanales de la malla curricular y los ejemplos/ejercicios propuestos, garantizando que cada una de las 40 semanas de clase (grados 1° a 11° en Matemáticas y 6° a 9° en Estadística) cuente con su propio Derecho Básico de Aprendizaje (DBA V2 del MEN), estándar curricular de Expedición Currículo (Secretaría de Educación de Medellín), fórmulas específicas del tema, ejemplo modelado paso a paso y 3 ejercicios prácticos graduados con datos reales.

## User Review & Critical Decisions

> [!IMPORTANT]
> Se han consolidado las decisiones confirmadas para asegurar una cobertura rigurosa en toda la institución educativa sin respuestas genéricas ni temas cruzados entre semanas.

- **Cobertura Completa de Niveles (Confirmado)**: Se intervendrán todos los grados desde **Primaria (1° a 5°)**, **Secundaria (6° a 9°)** hasta **Media Académica (10° y 11°)** en sus 3 periodos académicos (40 semanas lectivas por grado).
- **Profundidad de Ejercitación por Semana (Confirmado)**: Cada semana incluirá **1 ejemplo modelado paso a paso** y una batería propia de **3 ejercicios prácticos graduados** (`Fácil`, `Intermedio` y `Desafío ICFES`) con enunciados matemáticos reales, datos numéricos concretos, pistas DUA, desarrollo paso a paso y solución verificada del tema exacto de esa semana.
- **Estructura de Asignaturas Institucional (Confirmado)**: Se mantiene **Matemáticas integrada** en Primaria (`1° a 5°`) y Media (`10° y 11°`), y **Matemáticas y Estadística separadas** en Básica Secundaria (`6° a 9°`), integrando los cinco pensamientos matemáticos del MEN en cada secuencia.

---

## 1. Overview & Core Concept

- **What It Does**:
  1. Audita y alinea las secuencias temáticas de 1° a 11° con los **Estándares Básicos de Competencias en Matemáticas**, los **Derechos Básicos de Aprendizaje (DBA V2)** del Ministerio de Educación Nacional y las guías de **Expedición Currículo de Medellín**.
  2. Reemplaza los bloques estáticos por periodo por un **Generador y Banco Curricular Semanal Temático**, de modo que cada semana tenga fórmulas, conceptos, exploración en Medellín, ejemplo modelado y 3 ejercicios prácticos exclusivos de su tema (eliminando por completo que una semana de *Fracciones Algebraicas* o *Ecuaciones* muestre ejemplos de *Pitágoras*, o que los ejercicios prácticos sean plantillas genéricas).
  3. Sincroniza automáticamente los **Talleres Estándar**, las **Evaluaciones de Seguimiento SIEE** y las **Guías PDF/Word** con los ejercicios reales de cada semana.
- **Target Audience / Persona**: Docentes de matemáticas y estadística, coordinadores académicos y estudiantes de 1° a 11° de la I.E. Rafael Uribe Uribe (Medellín).
- **Key Value**: Garantiza rigor matemático, pertinencia pedagógica 100% verificable ante auditorías de Secretaría de Educación de Medellín y coherencia total entre la malla curricular, el planeador semanal y los talleres imprimibles.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Exploración en la Malla Curricular**: El docente selecciona cualquier grado (`1°` a `11°`), asignatura (`Matemáticas` o `Estadística`) y periodo (`1`, `2` o `3`). En la tabla de la malla visualiza la secuencia semanal con su Pensamiento Matemático exacto, el DBA V2 específico de esa temática, las evidencias SABER-HACER-SER y un resumen del ejemplo matemático de esa semana.
  2. **Planeador de Clase Semanal**: Al hacer clic en cualquier semana (`1` a `40`), el docente observa:
     - Ficha técnica oficial (DBA V2 del MEN, Estándar de Competencia y Alineación Expedición Currículo Medellín).
     - Exploración contextualizada en Medellín vinculada directamente al tema de la semana.
     - Estructuración teórica con las fórmulas propias de ese tema y un **Ejemplo Modelado Paso a Paso** con números y solución exacta del tema.
     - **Batería de 3 Ejercicios Prácticos Graduados** (`Fácil`, `Intermedio`, `Desafío ICFES`) con problemas matemáticos reales del tema, desplegables con pista DUA, pasos explicativos y respuesta exacta.
  3. **Generación de Taller y Evaluaciones**: Al abrir el *Taller Estándar* de cualquier semana, las preguntas de selección múltiple y abiertas se construyen directamente con los 3 ejercicios prácticos, las fórmulas y el ejemplo modelado de esa semana exacta.
- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Editorial académica limpia de alto contraste, diseñada para lectura prolongada docente y proyección en aula.
  - *Color Palette & Mood*: Superficie dominante en pizarra profunda (`#0F172A` / `slate-900`), contenedores estructurales en `#020617` (`slate-950`) con bordes sutiles (`#1E293B`), y acentos semánticos en ámbar institucional (`#F59E0B`) y esmeralda de verificación curricular (`#10B981`).
  - *Typography & Hierarchy*: Títulos académicos estructurados con jerarquía clara, numeración tabular (`tabular-nums`) para semanas, fórmulas matemáticas legibles sin código LaTeX crudo y separación limpia de metadatos sin saturación visual.
- **Interactive Feedback & Motion**: Transiciones inmediatas al cambiar de semana (`< 150ms`), acordeones interactivos para inspeccionar el paso a paso de cada uno de los 3 ejercicios prácticos y actualización instantánea de talleres y PDFs.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Especificidad Semanal 100% Temática vs. Plantillas por Periodo**
  - *Chosen Approach*: Construir un motor de resolución y banco temático semanal que asigna a cada una de las ~600 semanas curriculares (11 grados × 3 periodos × 13-14 semanas + Estadística 6°-9°) su propio DBA V2, fórmulas exactas, ejemplo resuelto y 3 ejercicios graduados con cálculos reales correspondientes al título de la semana.
  - *Why*: Anteriormente, todas las semanas de un mismo periodo compartían un único ejemplo fijo y carecían de ejercicios prácticos propios, provocando incoherencias graves entre el título de la semana y los ejercicios mostrados.
  - *Alternatives Considered*: Generar los ejercicios únicamente cuando se invoca la IA; se descartó porque el modo estándar e imprimible debe funcionar de forma inmediata, determinista y sin depender de conexión externa.
- **Decision 2: Alineación Estricta con DBA V2 (MEN) y Expedición Currículo (Medellín)**
  - *Chosen Approach*: Mapear cada semana al pensamiento matemático real del tema (Numérico, Variacional, Espacial, Métrico o Aleatorio) y a su DBA V2 oficial por grado, respetando además la regla institucional de Grado 11° (preparación ICFES Saber 11 hasta mitad del Periodo 2 y enfoque puro en Cálculo Diferencial e Integral en la segunda mitad del Periodo 2 y Periodo 3).
  - *Why*: Asegura que la progresión vertical (1° a 11°) y horizontal (Periodos 1 a 3) coincida con los lineamientos oficiales del Ministerio de Educación Nacional y la Secretaría de Educación de Medellín.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌────────────────────────────────────────────────────────────────────────────┐
│                   BANCO CURRICULAR OFICIAL (MEN + MEDELLÍN)                │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────────┐  │
│  │ Primaria (1°-5°) │  │ Secundaria (6-9°)│  │   Media Académica (10-11)│  │
│  │  Matemáticas     │  │ Mat. + Estadíst. │  │  Trigonometría / Cálculo │  │
│  └────────┬─────────┘  └────────┬─────────┘  └─────────────┬────────────┘  │
│           └─────────────────────┼──────────────────────────┘               │
│                                 ▼                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │        MOTOR DE ENRIQUECIMIENTO TEMÁTICO SEMANA POR SEMANA           │  │
│  │ • Asigna DBA V2 oficial + Pensamiento Matemático exacto del tema     │  │
│  │ • Genera Fórmulas + Concepto + Exploración Medellín del tema exacto  │  │
│  │ • Genera 1 Ejemplo Modelado Paso a Paso con solución real del tema   │  │
│  │ • Genera 3 Ejercicios Prácticos Graduados (Fácil, Intermedio, ICFES) │  │
│  └──────────────┬───────────────────────────────┬───────────────────────┘  │
└─────────────────┼───────────────────────────────┼──────────────────────────┘
                  ▼                               ▼
┌──────────────────────────────────┐ ┌───────────────────────────────────────┐
│   VISTAS DE CONSULTA Y PLANEACIÓN│ │ GENERADOR DE TALLERES Y EVALUACIONES  │
│  • Vista Malla Curricular + PDF  │ │  • Taller Estándar Semanal (100% Tema)│
│  • Vista Planeador Semanal DUA   │ │  • Evaluaciones SIEE (Seg 1, 2, Final)│
│  • Acordeón de 3 Ejercicios/Sem  │ │  • Exportación Imprimible Oficio/Word │
└──────────────────────────────────┘ └───────────────────────────────────────┘
```

- **Data Model & State**:
  - Cada objeto `PlanSemana` contendrá obligatoriamente:
    - `semana`, `titulo`, `pensamiento`, `dba` (con referencia exacta al DBA V2 del grado y tema), `competencia` y `evidencia` (SABER, HACER, SER específicos del tema).
    - `exploracionMedellin` vinculada al tema exacto de la semana.
    - `estructuracionTeorica.concepto` y `estructuracionTeorica.formulas` propios del tema de la semana.
    - `estructuracionTeorica.ejemploPasoAPaso` con enunciado, pasos analíticos y solución final del tema de la semana.
    - `estructuracionTeorica.ejerciciosPracticos`: arreglo garantizado de 3 objetos `EjercicioPractico` (`Fácil`, `Intermedio`, `Desafío ICFES`) con enunciados matemáticos reales, pistas DUA, pasos explicativos y solución final comprobada sobre el tema de la semana.
- **Interactive Component & State Mapping**:
  - **Vista Malla (`TabMalla`)**: Muestra la secuencia semanal con su pensamiento matemático actualizado semana por semana y permite exportar el PDF curricular con los nuevos datos verificados.
  - **Vista Planeador (`TabPlaneador`)**: Consume directamente los 3 `ejerciciosPracticos` específicos de la semana desde la malla (eliminando el fallback genérico repetitivo) y permite desplegar el paso a paso de cada ejercicio o abrir el Taller Estándar con un clic.
  - **Generador de Documentos (`examenesData` y `ModalDocumento`)**: Transforma los 3 ejercicios prácticos reales, las fórmulas y el ejemplo modelado de la semana en preguntas de selección múltiple con distractores plausibles y preguntas de desarrollo alineadas 100% con el tema.
