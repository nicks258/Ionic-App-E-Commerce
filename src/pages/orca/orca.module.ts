import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrcaPage } from './orca';

@NgModule({
  declarations: [
    OrcaPage,
  ],
  imports: [
    IonicPageModule.forChild(OrcaPage),
  ],
})
export class OrcaPageModule {}
