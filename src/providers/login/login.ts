import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Login } from './LoginInterface';

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
