
import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string ='';
  comprador:number=0;

  tarjetaC: boolean= false;
  cantBoletos:number=0;

  descuento: number=0;
  total: number=0;
  montoDescuento: number=0;
  valorPagar:number=0;
  limboletos: number= 0;

  salir():void{
    this.nombre = '';
    this.cantBoletos= 0;
    this.valorPagar = 0;
    this.descuento = 0;
    this.comprador = 0;
  }

  comprar():void
  {
    console.log("v7-4");

    this.total = (this.cantBoletos * 12);
    this.limboletos = this.cantBoletos / 7;

    if (this.comprador < this.limboletos){
      window.alert("No se puede comprar más de 7 boletos por persona");
      this.total = 0;
      return;
    }

    if (this.cantBoletos > 5){ // 15% de descuento
       this.total *= 0.85;
    }else if (this.cantBoletos >= 3){ // 10% de descuento
       this.total *= 0.90;
    }else if (this.cantBoletos <= 2){ //  no hay descuento
       this.total = 0;
    }

    if (this.tarjetaC){ this.total *= 0.90;} // 10% de descuento adicional

    this.montoDescuento = this.total * this.descuento;
    this.valorPagar = (this.total - this.montoDescuento);

    window.alert("Nombre del usuario: "+this.nombre+
      "\ncantidad de compradores: "+this.comprador+
      "\ncantidad de boletos: "+this.cantBoletos+
      "\ndescuento: "+this.descuento+"%"+
      "\nTotal: "+this.total);

    console.log("cantidad de boletos: "+this.cantBoletos);
    console.log("total sin descuento: "+this.total);
    console.log("tiene tarjeta: "+this.tarjetaC);
    console.log("descuento: "+this.descuento);
    console.log("Monto del descuento: " +this.montoDescuento);
  }
}

