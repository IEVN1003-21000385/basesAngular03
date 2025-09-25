import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  color1: number = 0;
  color2: number = 0;
  mult: number = 1;
  tolerancia: number = 0.05;
  valorCam: string = "";
  multsimple: number = 0;
  vlorsf: number = 0;

  resultado: number | null = null;
  valorMax: number | null = null;
  valorMin: number | null = null;

  calcular() {
    this.multsimple =  10 ** this.mult;
    this.valorCam = ""+this.color1+this.color2;
    this.vlorsf = Number(this.valorCam) * this.multsimple;

    const valorBase = (this.color1 * 10 + this.color2) * this.mult;
    this.resultado = valorBase;
    this.valorMax = valorBase * (1 + this.tolerancia);
    this.valorMin = valorBase * (1 - this.tolerancia);
  }
}
