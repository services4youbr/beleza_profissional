import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from '../pages/login/login.module';
import { DadosPessoaisProvider } from '../providers/dados-pessoais/dados-pessoais';
import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EventoPageModule } from '../pages/evento/evento.module';
import { EventoProvider } from '../providers/evento/evento';
import { AirbrakeErrorHandler } from '../erroHandler/AirBrakeErrorHandler';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    NgCalendarModule,
    EventoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: ErrorHandler, useClass: AirbrakeErrorHandler },
    LoginProvider,
    HttpClient,
    DadosPessoaisProvider,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    EventoProvider
  ]
})
export class AppModule { }
