import { Component, ViewChild } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/index';
import { CalendarComponent } from "ionic2-calendar/calendar";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Evento } from '../evento/evento.model';
import { EventoPage } from '../evento/evento';
import { EventoProvider } from '../../providers/evento/evento';
import { CalendarioPage } from '../calendario/calendario';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  constructor(public navCtrl: NavController, public loginProvider: LoginProvider, public eventoProvider: EventoProvider,
    public appCtrl: App, public navParams: NavParams) {

  }

  ngOnInit(): void {

  }

  public navegarHoje() {
    this.navCtrl.push(CalendarioPage, {
      data: 'hoje'
    });
  }

}
