import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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
import { DadosPessoaisPageModule } from '../pages/dados-pessoais/dados-pessoais.module';

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
    DadosPessoaisPageModule,
    IonicStorageModule.forRoot()
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
    LoginProvider,
    HttpClient,
    DadosPessoaisProvider
  ]
})
export class AppModule { }
