import { PlanSemana } from '../types';
import { mallaPrimaria } from './mallaPrimaria';
import { mallaSecundaria6y7 } from './mallaSecundaria6y7';
import { mallaSecundaria8y9 } from './mallaSecundaria8y9';
import { mallaMedia10y11 } from './mallaMedia10y11';

export const mallaCurricular: {
  [grado: string]: {
    [asignatura: string]: {
      [periodo: number]: PlanSemana[];
    };
  };
} = {
  ...mallaPrimaria,
  ...mallaSecundaria6y7,
  ...mallaSecundaria8y9,
  ...mallaMedia10y11,
};

export function getPlanSemana(grado: string, asignatura: string, periodo: number, semana: number): PlanSemana {
  const asig = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado) ? 'Matemáticas' : asignatura;
  const semanas = mallaCurricular[grado]?.[asig]?.[periodo] || mallaCurricular[grado]?.['Matemáticas']?.[periodo] || [];
  
  const encontrado = semanas.find(s => s.semana === semana);
  if (encontrado) return encontrado;
  if (semanas.length > 0) return semanas[0];

  return {
    semana,
    titulo: `Secuencia Didáctica Curricular - Semana ${semana}`,
    tiempoEstimado: '120 minutos (2 sesiones)',
    pensamiento: 'Numérico y Sistemas Numéricos',
    dba: 'Aplica conocimientos y habilidades matemáticas en situaciones de la vida diaria.',
    competencia: 'Interpretación, representación y modelación en contexto.',
    evidencia: 'Resuelve y formula problemas a partir de situaciones cuantitativas.',
    dua: {
      representacion: 'Presentación mediante lenguaje formal, tablas gráficas y representaciones visuales.',
      expresion: 'Resolución individual y colaborativa en cuaderno y socialización.',
      implicacion: 'Contextualización con proyectos de Medellín y la IE Rafael Uribe Uribe.'
    },
    exploracionMedellin: `Situación de indagación inicial contextualizada en la ciudad de Medellín para motivar los saberes previos de la semana ${semana}.`,
    estructuracionTeorica: {
      concepto: 'Fundamentos teóricos, propiedades y leyes operacionales del tema matemático.',
      formulas: ['f(x) = k × x + b'],
      ejemploPasoAPaso: {
        enunciado: 'Ejemplo demostrativo modelado con datos concretos para la semana.',
        pasos: [
          'Paso 1: Identificar datos conocidos.',
          'Paso 2: Aplicar la propiedad o fórmula matemática.',
          'Paso 3: Realizar operaciones y simplificar.',
          'Paso 4: Verificar la solución obtenida.'
        ],
        solucionFinal: 'Solución comprobada y validada analíticamente.'
      },
      ejerciciosPracticos: [
        {
          numero: 1,
          nivel: 'Fácil',
          enunciado: 'Aplicación directa de propiedades y definiciones.',
          pistaDUA: 'Identifica la variable y despeja paso a paso.',
          pasosExplicativos: ['Sustituir datos', 'Efectuar la operación'],
          solucionFinal: 'Resultado verificado.'
        }
      ]
    },
    ejercitacionYCierre: {
      colaborativo: 'Trabajo en parejas con asignación de roles para resolución de problemas.',
      tareaBarrial: 'Indagación y registro de una situación cuantitativa en su entorno barrial.'
    }
  };
}

