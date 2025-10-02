//Este es el cerebro de la aplicación que maneja: Arrays, variables y metodos
import { Component } from '@angular/core';
import {Resistencias, Tolerancias} from '../resistencias';
import { ResistenciaFilterPipe } from '../resistencia-filter.pipe';

@Component({
  selector: 'app-resistenciabandas',
  standalone: false,
  templateUrl: './resistenciabandas.component.html',
  styleUrl: './resistenciabandas.component.css',
  providers: [ResistenciaFilterPipe] // Provee el pipe
})
export class ResistenciabandasComponent {

  constructor(private resistenciaPipe: ResistenciaFilterPipe) {}

  valorBanda1: any;
  valorBanda2: any;
  valorBanda3: any;
  valorBanda4: any;

   // Variables para almacenar los resultados
  resultadoValor: number = 0;
  resultadoMax: number = 0;
  resultadoMin: number = 0;
  color1: string = "";
  color2: string = "";
  color3: string = "";
  color4: string = "";
  valorC4: number = 0;
  bc1: string = "";
  bc2: string = "";
  bc3: string = "";
  bc4: string = "";
  ct1: string = "";
  ct2: string = "";
  ct3: string = "";
  ct4: string = "";

    // Métodos que llaman a las funciones del pipe
  calcularResistencia(num1: number, num2: number, num3: number, num4: number): { valor: number, max: number, min: number } {
      return this.resistenciaPipe.calcularResistencia(num1, num2, num3, num4);
  }

  banTol : Tolerancias [] = [
    { numero: 5, codigoC: "#FFFF00", colorT: "#000000", nombre: "Dorado"},
    { numero: 10, codigoC: "#808080", colorT: "#FFFFFF", nombre: "Plata"},
  ]
//Array de objetos que implementan la interfaz "Resistencias"
  banRes : Resistencias [] = [ //Controla la lógica de la lista de resistencias
    {numero: 0, codigoC: "#000000", colorT: "#FFFFFF", nombre: "Negro"},
    {numero: 1, codigoC: "#6F4E37", colorT: "#FFFFFF", nombre: "Café"},
    {numero: 2, codigoC: "#FF0000", colorT: "#FFFFFF", nombre: "Rojo"},
    {numero: 3, codigoC: "#FF7F00", colorT: "#FFFFFF", nombre: "Naranja"},
    {numero: 4, codigoC: "#FFFF00", colorT: "#000000", nombre: "Amarillo"},
    {numero: 5, codigoC: "#00FF00", colorT: "#000000ff", nombre: "Verde"},
    {numero: 6, codigoC: "#0000FF", colorT: "#FFFFFF", nombre: "Azul"},
    {numero: 7, codigoC: "#8B00FF", colorT: "#FFFFFF", nombre: "Violeta"},
    {numero: 8, codigoC: "#808080", colorT: "#FFFFFF", nombre: "Gris"},
    {numero: 9, codigoC: "#FFFFFF", colorT: "#000000", nombre: "Blanco"}
  ]

    borrar(): void {
    this.resultadoValor = 0;
    this.resultadoMax = 0;
    this.resultadoMin = 0;
    this.color1 = "";
    this.color2 = "";
    this.color3 = "";
    this.color4 = "";
    this.valorC4 = 0;
    this.bc1 = "";
    this.bc2 = "";
    this.bc3 = "";
    this.bc4 = "";
    this.ct1 = "";
    this.ct2 = "";
    this.ct3 = "";
    this.ct4 = "";
  }

  calcular(): void {
    const resultados = this.calcularResistencia(
      this.valorBanda1?.numero,
      this.valorBanda2?.numero,
      this.valorBanda3?.numero,
      this.valorBanda4?.numero,
    );

    this.resultadoValor = resultados.valor;
    this.resultadoMax = resultados.max;
    this.resultadoMin = resultados.min;
    this.color1 = this.valorBanda1?.nombre;
    this.color2 = this.valorBanda2?.nombre;
    this.color3 = this.valorBanda3?.nombre;
    this.color4 = this.valorBanda3?.nombre;
    this.valorC4 = this.valorBanda4?.numero;
    this.bc1 = this.valorBanda1?.codigoC;
    this.bc2 = this.valorBanda2?.codigoC;
    this.bc3 = this.valorBanda3?.codigoC;
    this.bc4 = this.valorBanda4?.codigoC;
    this.ct1 = this.valorBanda1?.colorT;
    this.ct2 = this.valorBanda2?.colorT;
    this.ct3 = this.valorBanda3?.colorT;
    this.ct4 = this.valorBanda4?.colorT;
  }
}
