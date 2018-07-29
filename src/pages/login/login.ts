import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, ViewController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CadastroPage } from '../cadastro/cadastro';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: string;
  public senha: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private loginProvider: LoginProvider, public alertCtrl: AlertController, public appCtrl: App,
    public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {

  }
  public goToCadastro() {
    this.appCtrl.getRootNav().push(CadastroPage, {
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
      this.navCtrl.push(HomePage);
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
      this.navCtrl.push(HomePage);

    });
  }

  public cadastrar() {
    this.loginProvider.cadastrar(this.login, this.senha).then(l => {
      this.showCadastro(this.login);
    });
  }

  tryRegister() {
    this.authService.doRegister({ login: this.login, senha: this.senha })
      .then(res => {
        console.log(res);
        this.showCadastro(this.login);
      }, err => {
        if (err && err.code === 'auth/weak-password') {
          const alert = this.alertCtrl.create({
            title: 'Senha fraca!',
            subTitle: `Sua senha deve ter pelo ao menos 6 caracteres!`,
            buttons: ['OK']
          });
          alert.present();
        } else if (err && err.code === 'auth/invalid-email') {
          const alert = this.alertCtrl.create({
            title: 'Email inválido!',
            subTitle: `Email em formato inválido!`,
            buttons: ['OK']
          });
          alert.present();
        } else {
          this.showFalhaLogin();
        }
        console.log(err);
      })
  }

  tryLogin() {
    this.authService.doLogin({ login: this.login, senha: this.senha })
      .then(res => {
        console.log(res);
        this.showLogin(this.login);
      }, err => {
        //auth/weak-password
        //auth/invalid-email
        console.log(err);
        this.showFalhaLogin();
      })
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
        console.log(res);
        this.showCadastro(res.additionalUserInfo.profile.first_name);
      }, err => {
        if (err && err.code === 'auth/account-exists-with-different-credential') {
          this.showLogin(err.email);
        } else {
          this.showFalhaLogin();
        }
        console.log(err);
      })
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        console.log(res);
        this.showCadastro(res.additionalUserInfo.profile.given_name); 
      }, err => {
        if (err && err.code === 'auth/account-exists-with-different-credential') {
          this.showLogin(err.email);
        } else {
          this.showFalhaLogin();
        }
        console.log(err);
      })
  }

}

