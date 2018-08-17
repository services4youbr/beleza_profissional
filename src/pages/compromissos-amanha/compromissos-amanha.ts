import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Evento } from '../evento/evento.model';
import { Observable } from '../../../node_modules/rxjs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the CompromissosAmanhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compromissos-amanha',
  templateUrl: 'compromissos-amanha.html',
})
export class CompromissosAmanhaPage {

  eventosHoje: AngularFireList<Evento>;
  eventosHojeLista: Observable<Evento[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public auth: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompromissosHojePage');
    let start = new Date();
    start.setDate(start.getDate()+1)
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    let fim = new Date();
    fim.setDate(fim.getDate()+1)
    fim.setHours(23);
    fim.setMinutes(59);
    fim.setSeconds(59);
    fim.setMilliseconds(999);
    this.auth.getId().subscribe(id => {
      this.eventosHoje = this.db.list<Evento>('/eventos/compromissos-list/' + id,
        ref => ref.orderByChild('startTime').startAt(start.toISOString()).endAt(fim.toISOString()));
      this.eventosHojeLista = this.eventosHoje.valueChanges();
    })
  }

}
