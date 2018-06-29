import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HisPage } from '../his/his';
import { HerPage } from '../her/her';
import { SetPage } from '../set/set';



/**
 * Generated class for the PerfumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfume',
  templateUrl: 'perfume.html',
  template: `
  <ion-tabs>
    <ion-tab tabTitle="His"  [root]="tab1" ></ion-tab>
    <ion-tab tabTitle="Her"  [root]="tab2"></ion-tab>
    <ion-tab tabTitle="Set"  [root]="tab3"></ion-tab>
  </ion-tabs>`
})
export class PerfumePage {
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HisPage;
    this.tab2 = HerPage;
    this.tab3 = SetPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfumePage');
  }

}
