import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroServicoPage } from './cadastro-servico';

@NgModule({
  declarations: [
    CadastroServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroServicoPage),
  ],
})
export class CadastroServicoPageModule {}
