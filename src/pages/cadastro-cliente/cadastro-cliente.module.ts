import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroClientePage } from './cadastro-cliente';

@NgModule({
  declarations: [
    CadastroClientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroClientePage),
  ],
})
export class CadastroClientePageModule {}
