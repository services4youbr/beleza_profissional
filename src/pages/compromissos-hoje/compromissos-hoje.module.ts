import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompromissosHojePage } from './compromissos-hoje';

@NgModule({
  declarations: [
    CompromissosHojePage,
  ],
  imports: [
    IonicPageModule.forChild(CompromissosHojePage),
  ],
})
export class CompromissosHojePageModule {}
