import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {ProductPage} from "../product/product";
import {CartPage} from "../cart/cart";
import {PerfumePage} from "../perfume/perfume";
import {TvPage} from "../tv/tv";
import {HerPage} from "../her/her";
import {HisPage} from "../his/his";
import {SharpPage} from "../sharp/sharp";

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
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
