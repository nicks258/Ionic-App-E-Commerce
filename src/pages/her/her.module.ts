import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HerPage } from './her';

@NgModule({
  declarations: [
    HerPage,
  ],
  imports: [
    IonicPageModule.forChild(HerPage),
  ],
})
export class HerPageModule {}
