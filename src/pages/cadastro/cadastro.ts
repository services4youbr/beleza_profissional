import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit {

  isEtapa1 : boolean;
  isEtapa2 : boolean;
  isEtapa3 : boolean;
  isEtapa4 : boolean;
  isEtapa5 : boolean;
  backEtapa1 : boolean;
  backEtapa2 : boolean;
  backEtapa3 : boolean;
  backEtapa4 : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.isEtapa1 = true;
    this.isEtapa2 = false;
    this.isEtapa3 = false;
    this.isEtapa4 = false;
    this.isEtapa5 = false;
    this.backEtapa1 = false;
    this.backEtapa2= false;
    this.backEtapa3 = false;
    this.backEtapa4 = false;
    
  }
  goToEtapa1(){
    this.isEtapa1 = true;
    this.isEtapa2 = false;
  }
  goToEtapa2(){
    this.isEtapa1 = false;
    this.backEtapa1 = false;
    this.isEtapa2 = true;
  }
  goToEtapa3(){
    this.isEtapa2 = false;
    this.isEtapa3 = true;
  }
  goToEtapa4(){
    this.isEtapa3 = false;
    this.isEtapa4 = true;
  }
  goToEtapa5(){
    this.isEtapa4 = false;
    this.isEtapa5 = true;
  }
  backToEtapa1(){
    this.backEtapa2 = false;
    this.isEtapa2 = false;
    this.backEtapa1 = true;
  }
  backToEtapa2(){
    this.backEtapa3 = false;
    this.backEtapa2 = true;
  }
  backToEtapa3(){
    this.backEtapa4 = false;
    this.backEtapa3 = true;
  }
  backToEtapa4(){
    this.isEtapa5 = false;
    this.backEtapa4 = true;
  }

}
