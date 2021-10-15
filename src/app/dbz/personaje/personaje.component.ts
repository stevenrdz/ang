import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})

export class PersonajeComponent{

  @Input() personajes: any[] = [];

}
