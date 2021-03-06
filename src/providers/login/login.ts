import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Login } from './LoginInterface';

@Injectable()
export class LoginProvider {

  public loginPrefix = 'login-';

  public login: any;

  constructor(public http: HttpClient, private storage: Storage) {
    this.login = null
  }

  public logar(login: string, senha: string) {
    return this.storage.get(`${this.loginPrefix}`).then(l => {
      if (!l) {
        throw new Error('Sem login.');
      }
      this.login = l;
      return this.login;
    });
  }

  public logarFacebook(user: any) {
    return this.storage.get(`${this.loginPrefix}`).then(l => {
      if (!l) {
        throw new Error('Sem login.');
      }
      this.login = l;
      return this.login;
    });
  }

  public cadastrar(login: string, senha: string) {
    return this.storage.set(`${this.loginPrefix}`, JSON.stringify({ login: login, senha: senha })).then(l => this.logar(login, senha));
  }

  public usuarioLogado() {
    return this.storage.get(`${this.loginPrefix}`);
  }

}
