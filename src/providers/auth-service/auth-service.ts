import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '../../../node_modules/rxjs';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  faceBookProvider = new firebase.auth.FacebookAuthProvider();

  constructor(public http: HttpClient, public afAuth: AngularFireAuth, private storage: Storage) {

  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      
      this.afAuth.auth
        .signInWithPopup(this.faceBookProvider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  } 

  public getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
    })
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.login, value.senha)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(value.login, value.senha)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

}
