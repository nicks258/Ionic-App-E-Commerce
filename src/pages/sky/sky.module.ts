import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkyPage } from './sky';

@NgModule({
  declarations: [
    SkyPage,
  ],
  imports: [
    IonicPageModule.forChild(SkyPage),
  ],
})
export class SkyPageModule {}
