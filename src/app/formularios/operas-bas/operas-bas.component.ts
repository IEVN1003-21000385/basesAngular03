import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
 numero1: string ='';
 numero2: string ='';
 resultado:number=0;

   sumar():void{
    this.resultado=parseInt(this.numero1) + parseInt(this.numero2);
  }
  restar():void{
    this.resultado=parseInt(this.numero1) - parseInt(this.numero2);
  }
  multiplicar():void{
    this.resultado=parseInt(this.numero1) * parseInt(this.numero2);
  }
  dividir():void{
    this.resultado=parseInt(this.numero1) / parseInt(this.numero2);
  }

}
