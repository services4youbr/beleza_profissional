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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.isEtapa1 = true;
    this.isEtapa2 = false;
    this.isEtapa3 = false;
    this.isEtapa4 = false;
    this.isEtapa5 = false;
    
  }
  etapa1(){
    this.isEtapa1 = true;
    this.isEtapa2 = false;
  }
  etapa2(){
    this.isEtapa1 = false;
    this.isEtapa2 = true;
  }

}
