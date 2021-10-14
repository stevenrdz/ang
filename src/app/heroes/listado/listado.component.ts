import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Nova', 'Hulk', 'Iron Man'];
  borrado: string = "";

  borrarHeroe(){
    console.log('Borrando...');
    this.borrado = this.heroes[0];
    this.heroes.shift();
  }
}
