import { Component} from '@angular/core';

interface Personaje{
  nombre : string;
  poder : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo : Personaje = {
    nombre: 'Trunck',
    poder: 1500,
  }

  agregar(){
    console.log("Esta es una prueba")
  }
}
