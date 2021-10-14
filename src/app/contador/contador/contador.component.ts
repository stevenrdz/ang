import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h3>La base es: <strong> 5 </strong></h3>
        <h1>{{ title }}</h1>
        <button (click) = "acumular(base)"> {{ base }} </button>
        <span> {{ number }} </span>
        <button (click) = "acumular(-base)"> {{ base }} </button>    
    `
})


export class ContadorComponent {
    title: string = 'contador - app';
    number: number = 10;
    base: number = 5;
  
    sumar(){
      this.number += 1;
    }
  
    restar(){
      this.number -= 1;
    }
  
    acumular( valor: number){
      this.number += valor;
    }
  
}