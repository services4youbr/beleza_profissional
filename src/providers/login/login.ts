import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface Login {
  login: string,
  senha: string
}

@Injectable()
export class LoginProvider {

  public login: Login;

  constructor(public http: HttpClient, private storage: Storage) {
    this.login = null
  }

  public logar(login: string, senha: string) {
    return this.storage.get(login).then(l => {
      if (!l) {
        throw new Error('Sem login.');
      }
      this.login = l;
      return this.login;
    });
  }

  public cadastrar(login: string, senha: string) {
    this.storage.set(login, JSON.stringify({ login: login, senha: senha }));
  }

}
