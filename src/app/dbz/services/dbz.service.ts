import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    private _personajes: Personaje[] = [
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
      ];

    get personajes() : Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje){
        this._personajes.push(personaje);
    }

}