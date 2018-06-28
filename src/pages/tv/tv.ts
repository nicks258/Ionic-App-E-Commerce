import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharpPage } from '../sharp/sharp';
import { OrcaPage } from '../orca/orca';
import { SkyPage } from '../sky/sky';

/**
 * Generated class for the TvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
  template: `
  <ion-tabs>
    <ion-tab tabTitle="Sharp"  [root]="tab1" ></ion-tab>
    <ion-tab tabTitle="Orca"  [root]="tab2"></ion-tab>
    <ion-tab tabTitle="Sky"  [root]="tab3"></ion-tab>
  </ion-tabs>`
})
export class TvPage {

  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = SharpPage;
    this.tab2 = OrcaPage;
    this.tab3 = SkyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvPage');
  }

}
