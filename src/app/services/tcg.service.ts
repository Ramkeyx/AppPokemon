import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcgService {

  constructor(
    private http:HttpClient
  ) { }

  getCards(){
    return this.http.get('https://api.pokemontcg.io/v2/cards');
  }

  getCardsByType(tipo:string){//se crea la funcion para buscar por tipo, se le asigna el tipo en string por que es el parametro
    return this.http.get('https://api.pokemontcg.io/v2/cards?q=types:' + tipo); //se modifica la url y se concatena tipo
  }
}
