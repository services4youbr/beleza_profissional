import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/index';
import { CalendarComponent } from "ionic2-calendar/calendar";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

export interface Event {
  title: string,
  startTime: Date,
  endTime: Date,
  allDay: boolean,

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  @ViewChild(CalendarComponent) calendar: CalendarComponent;

  public eventSource: Event[] = [];


  public onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {

  };

  public onEventSelected = (event) => {
    console.log(event.title);
  };

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {
    this.eventSource.push({
      title: 'Casa da dona julia',
      startTime: new Date(),
      endTime: new Date(),
      allDay: false
    });
  }

  ngOnInit(): void {
    this.calendar.currentDate = new Date();
    this.calendar.noEventsLabel = "Sem eventos";
  }

}
