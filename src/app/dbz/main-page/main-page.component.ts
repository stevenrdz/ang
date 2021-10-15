import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo : Personaje = {
    nombre: '',
    poder: 0,
  }

  personajes: Personaje[] = [
    {
      nombre: 'Piccolo',
      poder: 1500
    },
    {
      nombre: 'Goku',
      poder: 2550
    },
    {
      nombre: 'Yamcha',
      poder:  800
    },
  ]

  agregar(){

    if(this.nuevo.nombre.trim().length === 0){ return; }
    this.personajes.push(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0,
    }
    console.log(this.personajes)
  }
}
