import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../../pages/evento/evento.model';
import { Storage } from '../../../node_modules/@ionic/storage';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  public static eventSource: Evento[] = [{
    title: 'Casa da dona julia',
    startTime: new Date(),
    endTime: new Date(),
    allDay: false
  },
  {
    title: 'Casa da dona julia 2: a revanche',
    startTime: new Date(),
    endTime: new Date(),
    allDay: false
  }];

  constructor() {
    console.log('Hello EventoProvider Provider');
  }

  public countEventosHoje() {
    return EventoProvider.eventSource.filter((v, i, a) => v.startTime.getDate() === new Date().getDate()
      && v.startTime.getMonth() === new Date().getMonth()
      && v.startTime.getFullYear() === new Date().getFullYear()).length;
  }

  public getEventosHoje(): Evento[] {
    return EventoProvider.eventSource.filter((v, i, a) => v.startTime.getDate() === new Date().getDate()
      && v.startTime.getMonth() === new Date().getMonth()
      && v.startTime.getFullYear() === new Date().getFullYear());
  }

  public countEventosAmanha() {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    return EventoProvider.eventSource.filter((v, i, a) => v.startTime.getDate() === amanha.getDate()
      && v.startTime.getMonth() === amanha.getMonth()
      && v.startTime.getFullYear() === amanha.getFullYear()).length;
  }

  public countEventosMaiorIgualHoje() {
    const hoje = new Date();
    return EventoProvider.eventSource.filter((v, i, a) => v.startTime.getDate() >= hoje.getDate()
      && v.startTime.getMonth() >= hoje.getMonth()
      && v.startTime.getFullYear() >= hoje.getFullYear()).length;
  }

}
