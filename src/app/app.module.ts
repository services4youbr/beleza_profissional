import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPageModule } from '../pages/login/login.module';
import { PerfilPage } from '../pages/perfil/perfil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DadosPessoaisProvider } from '../providers/dados-pessoais/dados-pessoais';
import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EventoPageModule } from '../pages/evento/evento.module';
import { EventoProvider } from '../providers/evento/evento';
import { AirbrakeErrorHandler } from '../erroHandler/AirBrakeErrorHandler';
import { CalendarioPageModule } from '../pages/calendario/calendario.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CompromissosHojePageModule } from '../pages/compromissos-hoje/compromissos-hoje.module';
import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
import { CompromissosAmanhaPageModule } from '../pages/compromissos-amanha/compromissos-amanha.module';
import { CompromissosProximosPageModule } from '../pages/compromissos-proximos/compromissos-proximos.module';
import { FinanceiroProvider } from '../providers/financeiro/financeiro';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroClientePage } from '../pages/cadastro-cliente/cadastro-cliente';
import { CadastroServicoPage } from '../pages/cadastro-servico/cadastro-servico';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    CadastroPage,
    CadastroClientePage,
    CadastroServicoPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    NgCalendarModule,
    EventoPageModule,
    CalendarioPageModule,
    CompromissosHojePageModule,
    CompromissosAmanhaPageModule,
    CompromissosProximosPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    CadastroPage,
    CadastroClientePage,
    CadastroServicoPage
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
    EventoProvider,
    AuthServiceProvider,
    FinanceiroProvider
  ]
})
export class AppModule { }
