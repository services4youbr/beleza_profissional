import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider,
    public navParams: NavParams
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
    console.log('ionViewDidLoad PerfilPage');
  }

}
