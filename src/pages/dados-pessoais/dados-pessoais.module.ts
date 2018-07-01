import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosPessoaisPage } from './dados-pessoais';

@NgModule({
  declarations: [
    DadosPessoaisPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosPessoaisPage),
  ],
})
export class DadosPessoaisPageModule {}
