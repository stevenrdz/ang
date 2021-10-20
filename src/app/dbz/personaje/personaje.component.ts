import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})

export class PersonajeComponent{

  // @Input() personajes: any[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor( private dbzService : DbzService){
    console.log("Servicio Inicializando");
  }

}
