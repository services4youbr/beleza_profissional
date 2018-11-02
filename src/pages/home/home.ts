import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DadosPessoaisProvider } from '../../providers/dados-pessoais/dados-pessoais';
import { EventoProvider } from '../../providers/evento/evento';
import { LoginProvider } from '../../providers/index';
import { CadastroPage } from '../cadastro/cadastro';
import { CompromissosAmanhaPage } from '../compromissos-amanha/compromissos-amanha';
import { CompromissosHojePage } from '../compromissos-hoje/compromissos-hoje';
import { CompromissosProximosPage } from '../compromissos-proximos/compromissos-proximos';
import { Evento } from '../evento/evento.model';
import * as firebase from 'firebase/app';
import { FinanceiroProvider, EventoFinanceiro, TipoEventoFinaneiro } from '../../providers/financeiro/financeiro';
import { PerfilPage } from '../perfil/perfil';
import { CadastroServicoPage } from '../cadastro-servico/cadastro-servico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: any;
  public nomeUsuario: string;
  public photoUrl: string;
  public id: string;
  public countEventoHoje = 0;
  public countEventoAmanha = 0;
  public countEventoProximos = 0;
  public countHoje: Observable<number> = Observable.of(0);
  public valor = 0.0;

  constructor(
    public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public eventoProvider: EventoProvider,
    public appCtrl: App,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public dadosPessoais: DadosPessoaisProvider,
    public db: AngularFireDatabase,
    public financeiro: FinanceiroProvider
  ) {

  }

  ionViewWillEnter(): void {
    this.authService.getUser().subscribe(u => {
      if (u) {
        this.usuario = u
        this.authService.getNome().then(p => p.subscribe(nome => this.nomeUsuario = nome));
        this.authService.getPhotoURL().then(p => p.subscribe(url => this.photoUrl = url));
        this.authService.getId().subscribe(id => {
          this.id = id;


        });

        this.carregarHoje(u);
        this.carregarAmanha(u);
        this.carregarProximos(u);
        this.db.list<EventoFinanceiro>('/eventos/financeiro/' + u.uid, ref => ref)
          .valueChanges()
          .flatMap(es => {
            return es;
          })
          .map(e => {
            if (e.tipo === TipoEventoFinaneiro.PAGAMENTO) {
              return e.valor;
            } else {
              return e.valor * -1;
            }
          })
          .reduce((acc, value, indice) => {
            this.valor = acc + value;
            console.log(this.valor);
            return acc + value;
          }, 0).subscribe(c => {
            this.valor = c;
          },
            e => console.log(e),
            () => console.log("terminei de contar"));
        console.log(this.usuario);
      } else {
        this.photoUrl = 'assets/imgs/black-woman.jpg';
      }
    });
  }

  private carregarHoje(u: firebase.User) {
    let start = this.gerarInicio();
    let fim = this.gerarFim();
    this.db.list<Evento>('/eventos/compromissos-list/' + u.uid, ref => ref.orderByChild('startTime')
      .startAt(start.toISOString())
      .endAt(fim.toISOString()))
      .valueChanges().subscribe(c => {
        if (c) {
          this.countEventoHoje = c.length;
        }
      });
  }

  private gerarFim() {
    let fim = new Date();
    fim.setHours(23);
    fim.setMinutes(59);
    fim.setSeconds(59);
    fim.setMilliseconds(999);
    return fim;
  }

  private gerarInicio() {
    let start = new Date();
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    return start;
  }

  private carregarAmanha(u: firebase.User) {
    let start = this.gerarInicio();
    let fim = this.gerarFim();
    start.setDate(start.getDate() + 1);
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    fim.setDate(fim.getDate() + 1);
    fim.setHours(23);
    fim.setMinutes(59);
    fim.setSeconds(59);
    fim.setMilliseconds(999);
    this.db.list<Evento>('/eventos/compromissos-list/' + u.uid, ref => ref.orderByChild('startTime').startAt(start.toISOString()).endAt(fim.toISOString())).valueChanges()
      .subscribe(c => {
        if (c) {
          this.countEventoAmanha = c.length;
        }
      });
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
  public goToCadastroServico(){
    this.navCtrl.push(CadastroServicoPage, {

    });
  }

  public navegarPerfil() {
    this.navCtrl.push(PerfilPage, {});
  }

}
