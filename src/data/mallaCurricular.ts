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

export function getPlanSemana(grado: string, asignatura: string, periodo: number, semana: number): PlanSemana | undefined {
  const semanas = mallaCurricular[grado]?.[asignatura]?.[periodo];
  if (!semanas) return undefined;
  return semanas.find(s => s.semana === semana);
}

