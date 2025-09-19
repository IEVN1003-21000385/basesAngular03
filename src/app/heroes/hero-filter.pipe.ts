import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from './heroes';

@Pipe({
  name: 'heroFilter',
  standalone: false
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: Heroes[], arg: string): Heroes[] {
    let filter: string = arg ? arg.toLocaleLowerCase(): ''

    return filter ? value.filter((heroe: Heroes) =>
    heroe.nombre.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }

}

