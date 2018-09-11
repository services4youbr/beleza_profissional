import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DadosPessoaisProvider } from '../../providers/dados-pessoais/dados-pessoais';
import { EventoProvider } from '../../providers/evento/evento';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Evento } from '../evento/evento.model';
import * as firebase from 'firebase/app';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public usuario: any;
  public nomeUsuario: string;
  public photoUrl: string;
  public id: string;
  public countEventoProximos = 0;

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider,
    public navParams: NavParams,
    public dadosPessoais: DadosPessoaisProvider,
    public eventoProvider: EventoProvider,
    public db: AngularFireDatabase
  ) {
  }

  ionViewWillEnter(){
    this.authService.getUser().subscribe(u => {
      if (u) {
        this.usuario = u
        this.authService.getNome().then(p => p.subscribe(nome => this.nomeUsuario = nome));
        this.authService.getPhotoURL().then(p => p.subscribe(url => this.photoUrl = url));
        this.authService.getId().subscribe(id => {
          this.id = id;


        });
      }

    })
  }

  ionViewDidLoad() {
    
  }

  private carregarProximos(u: firebase.User) {
    let start = this.gerarInicio();
    start.setDate(start.getDate() + 2);
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    this.db.list<Evento>('/eventos/compromissos-list/' + u.uid, ref => ref.orderByChild('startTime').startAt(start.toISOString())).valueChanges().subscribe(c => {
      if (c) {
        this.countEventoProximos = c.length;
      }
    });
  }
  private gerarInicio() {
    let start = new Date();
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    return start;
  }

}
