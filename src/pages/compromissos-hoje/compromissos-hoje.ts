import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Evento } from '../evento/evento.model';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Observable } from '../../../node_modules/rxjs';
import * as firebase from 'firebase';

/**
 * Generated class for the CompromissosHojePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compromissos-hoje',
  templateUrl: 'compromissos-hoje.html',
})
export class CompromissosHojePage {

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
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);
    let fim = new Date();
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
