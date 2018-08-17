import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evento } from '../evento/evento.model';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireDatabase, AngularFireList } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';

/**
 * Generated class for the CompromissosProximosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compromissos-proximos',
  templateUrl: 'compromissos-proximos.html',
})
export class CompromissosProximosPage {
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
    start.setDate(start.getDate() + 2)
    start.setMinutes(0);
    start.setHours(0);
    start.setSeconds(0);
    start.setMilliseconds(0);

    this.auth.getId().subscribe(id => {
      this.eventosHoje = this.db.list<Evento>('/eventos/compromissos-list/' + id,
        ref => ref.orderByChild('startTime').startAt(start.toISOString()));
      this.eventosHojeLista = this.eventosHoje.valueChanges();
    })
  }
}
