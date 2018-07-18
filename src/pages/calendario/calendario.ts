import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponent } from "ionic2-calendar/calendar";
import { Evento } from '../evento/evento.model';
import { EventoPage } from '../evento/evento';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

  @ViewChild(CalendarComponent) public calendar: CalendarComponent;

  public eventSource: Evento[] = [];

  public diaSelecionado: Date;

  public onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    this.diaSelecionado = ev.selectedTime;
  };

  public onEventSelected = (event) => {
    this.navCtrl.push(EventoPage, { evento: event, diaSelecionado: this.diaSelecionado });
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventoProvider: EventoProvider) {
    if (this.navParams.get('data') === 'hoje') {
      this.eventSource = this.eventoProvider.getEventosHoje();
    }
  }

  ionViewDidLoad() {
    this.calendar.currentDate = new Date();
    this.calendar.noEventsLabel = "Sem eventos";
  }

}
