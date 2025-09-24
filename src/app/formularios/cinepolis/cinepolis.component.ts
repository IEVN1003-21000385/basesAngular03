import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string ='';
  cantComp: number=0;

  tarjetaC: boolean= false;
  cantBoletos:number=0;

  descuento: number=0;
  total: number=0;
  montoDescuento: number=0;
  valorPagar:number=0;


  comprar():void
  {
    this.total = (this.cantBoletos * 12.00);

    if (this.cantBoletos >= 7){ // No puede comprar
      this.valorPagar = this.total;

    }else if (this.cantBoletos > 5){ // 15% de descuento
      if (this.tarjetaC == true)
      {
      this.descuento = 15 + 10; // mas 10% de descuento
      this.montoDescuento = (this.total / 100) * this.descuento;
      this.valorPagar = (this.total - this.montoDescuento);
      }else{ // no tiene tarjeta cineco
      this.descuento = 15;
      this.montoDescuento = (this.total / 100) * this.descuento;
      this.valorPagar = (this.total - this.montoDescuento);
      }

    }else if (this.cantBoletos <= 5){ // 10% de descuento
      if (this.tarjetaC == true)
      {
      this.descuento = 10 + 10; // mas 10% de descuento
      this.montoDescuento = (this.total / 100) * this.descuento;
      this.valorPagar = (this.total - this.montoDescuento);
      }else{ // no tiene tarjeta cineco
      this.descuento = 15;
      this.montoDescuento = (this.total / 100) * this.descuento;
      this.valorPagar = (this.total - this.montoDescuento);
      }

    }else if (this.cantBoletos <= 2){ //  no hay descuento
      if (this.tarjetaC == true)
      {
      this.descuento = 0 + 10; // mas 10% de descuento
      this.montoDescuento = (this.total / 100) * this.descuento;
      this.valorPagar = (this.total - this.montoDescuento);
      }else{ // no tiene tarjeta cineco
      this.descuento = 15;
      this.montoDescuento = (this.total / 100) * this.descuento;
      this.valorPagar = (this.total - this.montoDescuento);
      }
    }
  }

}
