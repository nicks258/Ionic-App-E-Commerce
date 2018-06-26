import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';



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
    <ion-tab tabIcon="heart"  [root]="tab1"></ion-tab>
    <ion-tab tabIcon="contact"  [root]="tab2"></ion-tab>
    <ion-tab tabIcon="star"  [root]="tab3"></ion-tab>
  </ion-tabs>`
})
export class PerfumePage {
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = HomePage;
    this.tab3 = ProductPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfumePage');
  }

}
