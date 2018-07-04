import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../../pages/evento/evento.model';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello EventoProvider Provider');
  }

  public createEvento(evento: Evento){
    // this.storage()
  }

}
