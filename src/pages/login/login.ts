import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, ViewController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: string;
  public senha: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private loginProvider: LoginProvider, public alertCtrl: AlertController, public appCtrl: App) {
  }

  ionViewDidLoad() {

    this.loginProvider.usuarioLogado().then(l => {
      if (l) {
        this.appCtrl.getRootNav().push(HomePage)
      }
    });
  }

  public logar() {
    this.loginProvider.logar(this.login, this.senha).then(l => {
      this.showLogin(this.loginProvider.login.login);
    }).catch(e => {
      this.showFalhaLogin();
    });
  }


  showFalhaLogin() {
    const alert = this.alertCtrl.create({
      title: 'Login falhou!',
      subTitle: 'Seu login falhou, tente novamente!',
      buttons: ['OK']
    });
    alert.present();

  }

  showLogin(login: string) {
    const alert = this.alertCtrl.create({
      title: 'Logado com sucesso!',
      subTitle: `Bem vindo ${login}!`,
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss((data, role) => {
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(HomePage);
    });
  }

  showCadastro(login: string) {
    const alert = this.alertCtrl.create({
      title: 'Cadastrado com sucesso!',
      subTitle: `Bem vindo ${login}!`,
      buttons: ['OK']
    });
    alert.present();
    alert.onDidDismiss((data, role) => {
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(HomePage);
    });
  }

  public cadastrar() {
    this.loginProvider.cadastrar(this.login, this.senha).then(l => {
      this.showCadastro(this.login);
    });
  }

}
