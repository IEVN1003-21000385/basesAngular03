//Contiene la lógica matemática para calcular los valores

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resistenciaFilter',
  standalone: false
})
export class ResistenciaFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  calcularResistencia(num1: number, num2: number, num3: number, num4: number) {
    const valor = (Number(`${num1}${num2}`) || 0) * Math.pow(10, num3 || 0);
    const tol = valor * ((num4 || 0) / 100);

    return {
      valor: valor || 0,
      max: valor + tol || 0,
      min: Math.max(0, valor - tol) || 0 // Evita valores negativos
    };
  }
}
