import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: string;
  public senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loginProvider: LoginProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    if (this.loginProvider.login) {

    }
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
  }

  public cadastrar() {
    this.loginProvider.cadastrar(this.login, this.senha);
  }

}
