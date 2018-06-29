import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SetPage} from "../set/set";
import {LoginPage} from "../login/login";
import {PerfumePage} from "../perfume/perfume";
import {HerPage} from "../her/her";
import {ProductPage} from "../product/product";
import {CartPage} from "../cart/cart";
import {TvPage} from "../tv/tv";
import {SharpPage} from "../sharp/sharp";

/**
 * Generated class for the HisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-his',
  templateUrl: 'his.html',
})
export class HisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HisPage');
  }
  goToProductPage(){
    this.navCtrl.push(ProductPage);
  }
  goToTvPage(){
    this.navCtrl.push(SharpPage);
  }
  goToPerfumePage(){
    this.navCtrl.push(HerPage);
  }
  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  goToCartPage(){
    this.navCtrl.push(CartPage);
  }
  goToSetPage(){
    this.navCtrl.push(SetPage);
  }
  goToHisPage(){
    this.navCtrl.push(HisPage);
  }
  goToHerPage(){
    this.navCtrl.push(HerPage);
  }
}
