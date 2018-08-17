import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../../pages/evento/evento.model';
import { Storage } from '../../../node_modules/@ionic/storage';
import { Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  public static eventSource: Evento[] = [];

  constructor() {
    console.log('Hello EventoProvider Provider');
  }

  public countEventosHoje() { 
    return 0;
  }

  public getEventosHoje(): Evento[] {
    return [];
  }

  public countEventosAmanha() {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    return 0;
  }

  public countEventosMaiorIgualHoje() {
    const hoje = new Date();
    return 0;
  }

}
