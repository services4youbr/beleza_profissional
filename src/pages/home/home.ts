import { Component, ViewChild } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/index';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventoProvider } from '../../providers/evento/evento';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DadosPessoaisProvider } from '../../providers/dados-pessoais/dados-pessoais';
import { CadastroPage } from '../cadastro/cadastro';
import { CompromissosHojePage } from '../compromissos-hoje/compromissos-hoje';
import { CompromissosAmanhaPage } from '../compromissos-amanha/compromissos-amanha';
import { CompromissosProximosPage } from '../compromissos-proximos/compromissos-proximos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public usuario: any;
  public nomeUsuario: string;
  public photoUrl: string;
  public id: string;

  constructor(
    public navCtrl: NavController, 
    public loginProvider: LoginProvider, 
    public eventoProvider: EventoProvider,
    public appCtrl: App, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,
    public dadosPessoais: DadosPessoaisProvider
  ) {

  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(u => {
      if (u) {
        this.usuario = u
        this.authService.getNome().then(p => p.subscribe(nome => this.nomeUsuario = nome));
        this.authService.getPhotoURL().then(p => p.subscribe(url => this.photoUrl = url));
        this.authService.getId().subscribe(id => this.id = id);

        console.log(this.usuario);
      } else {
        this.photoUrl = 'assets/imgs/black-woman.jpg';
      }
    });
  }

  public navegarHoje() {
    this.navCtrl.push(CompromissosHojePage, {
      data: 'hoje'
    });
  }

  public navegarAmanha() {
    this.navCtrl.push(CompromissosAmanhaPage, {
      data: 'amanha'
    });
  }
  
  public navegarProximo() {
    this.navCtrl.push(CompromissosProximosPage, {
      data: 'proximo'
    });
  }
  
  public goToCadastro() {
    this.navCtrl.push(CadastroPage, {
    });
  }

}
