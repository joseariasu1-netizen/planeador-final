export type Asignatura = 'Matemáticas' | 'Estadística';

export type Grado = '1°' | '2°' | '3°' | '4°' | '5°' | '6°' | '7°' | '8°' | '9°' | '10°' | '11°';

export type PeriodoId = 1 | 2 | 3;

export interface DUAConfig {
  representacion: string; // Múltiples formas de presentar la información (visual, auditiva, kinestésica)
  expresion: string;     // Múltiples formas de demostrar el aprendizaje
  implicacion: string;   // Múltiples formas de comprometerse y motivarse
}

export interface EjercicioPractico {
  numero: number;
  nivel: 'Fácil' | 'Intermedio' | 'Desafío ICFES';
  enunciado: string;
  pistaDUA?: string;
  pasosExplicativos: string[];
  solucionFinal: string;
}

export interface PasoDesarrolloClase {
  fase: string;
  tiempo: string;
  tituloPaso: string;
  descripcion: string;
  detalles: string[];
}

export interface PlanSemana {
  semana: number;
  titulo: string;
  tiempoEstimado: string;
  pensamiento: string;
  dba: string; // Derecho Básico de Aprendizaje
  competencia: string;
  evidencia: string;
  dua: DUAConfig;
  exploracionMedellin: string; // Reto contextualizado en Medellín (Metro, Atanasio, etc.)
  estructuracionTeorica: {
    concepto: string;
    formulas: string[];
    ejemploPasoAPaso: {
      enunciado: string;
      pasos: string[];
      solucionFinal: string;
    };
    ejerciciosPracticos?: EjercicioPractico[];
  };
  desarrolloPasoAPaso?: PasoDesarrolloClase[];
  ejercitacionYCierre: {
    colaborativo: string;
    tareaBarrial: string;
  };
}

export interface PreguntaICFES {
  id: number;
  tipo: 'seleccion_multiple' | 'desarrollo';
  contexto: string; // Situación problema (ej. tarifas del Metro, consumo de agua en EPM)
  enunciado: string;
  opciones?: { key: 'A' | 'B' | 'C' | 'D'; texto: string }[];
  respuestaCorrecta?: 'A' | 'B' | 'C' | 'D';
  justificacionPedagogica: string;
  competenciaICFES: 'Interpretación y Representación' | 'Formulación y Ejecución' | 'Argumentación';
  procesoMatematico: 'Razonamiento' | 'Resolución de Problemas' | 'Comunicación' | 'Modelación';
  nivelBloom: 'Conocimiento/Comprensión' | 'Aplicación/Análisis' | 'Evaluación/Creación';
}

export interface DocumentoEscolar {
  tipo: 'taller' | 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final';
  titulo: string;
  asignatura: Asignatura;
  grado: Grado;
  periodo: PeriodoId;
  semanaRef?: number;
  porcentajeEvaluación?: string;
  preguntas: PreguntaICFES[];
  tablaEspecificaciones?: {
    totalPreguntas: number;
    interpretacionCount: number;
    formulacionCount: number;
    argumentacionCount: number;
  };
}
