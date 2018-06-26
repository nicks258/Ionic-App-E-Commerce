import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HisPage } from './his';

@NgModule({
  declarations: [
    HisPage,
  ],
  imports: [
    IonicPageModule.forChild(HisPage),
  ],
})
export class HisPageModule {}
