import { Component } from '@angular/core';
import {Heroes} from '../heroes'

@Component({
  selector: 'app-heroeslist',
  standalone: false,
  templateUrl: './heroeslist.component.html',
})
export class HeroeslistComponent {

  imagenWIDTH: number=40;
  imagenMARGIN: number=2;
  mostrarImage: boolean= true;
  listFilter:string='';

  showImage():void{
    this.mostrarImage=!this.mostrarImage;
  }

  heroes:Heroes []=[
    {
      Image: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      Descripcion:"Alien",
      race:"Alien",
      ki:99999999999999999999
    },
    {
      Image:"https://dragonball-api.com/characters/BuuGordo_Universo7.webp",
      nombre:"Majin buu",
      Descripcion:"Alien",
      race:"Alien",
      ki:222222222222222222
    },
    {
      Image:"https://dragonball-api.com/characters/Jiren.webp",
      nombre:"Jiren",
      Descripcion:"Alien",
      race:"Alien",
      ki:1111111111
    }
  ]

}
