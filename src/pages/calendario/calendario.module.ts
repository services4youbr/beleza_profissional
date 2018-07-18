import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioPage } from './calendario';
import { registerLocaleData } from '../../../node_modules/@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgCalendarModule } from '../../../node_modules/ionic2-calendar';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    CalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioPage),
    NgCalendarModule,
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class CalendarioPageModule {}
