import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,   AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage implements OnInit {

  isEtapa1 : boolean;
  isEtapa2 : boolean;
  isAltEtapa2: boolean;
  isEtapa3 : boolean;
  isEtapa4 : boolean;
  isEtapa5 : boolean;
  backEtapa1 : boolean;
  backEtapa2 : boolean;
  backEtapa3 : boolean;
  backEtapa4 : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
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
    this.isAltEtapa2 = false;
    
  }
  goToEtapa1(){
    this.isEtapa1 = true;
    this.isEtapa2 = false;
  }
  goToEtapa2(){
    this.backEtapa1 = false;
    this.isEtapa2 = true;
    this.isAltEtapa2 = false;
  }
  pulaEtapa2(){
    this.backEtapa1 = false;
    this.isEtapa2 = true;
    this.isAltEtapa2 = true;
  }
  goToEtapa3(){
    this.backEtapa2 = false;
    this.isEtapa3 = true;
  }
  goToEtapa4(){
    this.backEtapa3 = false;
    this.isEtapa4 = true;
  }
  goToEtapa5(){
    this.backEtapa4 = false;
    this.isEtapa5 = true;
  }
  backToEtapa1(){
    this.backEtapa2 = false;
    this.isEtapa2 = false;
    this.backEtapa1 = true;
  }
  backToEtapa2(){
    this.backEtapa3 = false;
    this.isEtapa3 = false;
    this.backEtapa2 = true;
  }
  backToEtapa3(){
    this.backEtapa4 = false;
    this.isEtapa4 = false;
    this.backEtapa3 = true;
  }
  backToEtapa4(){
    this.isEtapa5 = false;
    this.backEtapa4 = true;
  }
  showAlertMEI(){
    const alertMEI = this.alertController.create({
      title: 'O que é MEI?',
      subTitle: 'Significa microempreendedor individual.<br> Para ser um MEI é necessário faturar hoje até R$ 81.000,00 por ano, não ter participação em outra empresa como sócio ou titular e ter no máximo um empregado contratado que receba o salário-mínimo ou o piso da categoria.',
      buttons: ['Ok']
    });
    alertMEI.present();
  }
}
