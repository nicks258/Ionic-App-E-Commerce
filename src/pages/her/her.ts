import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {PerfumePage} from "../perfume/perfume";
import {SharpPage} from "../sharp/sharp";
import {ProductPage} from "../product/product";
import {OrcaPage} from "../orca/orca";
import {SkyPage} from "../sky/sky";
import {CartPage} from "../cart/cart";
import {TvPage} from "../tv/tv";
import {SetPage} from "../set/set";
import {HisPage} from "../his/his";

/**
 * Generated class for the HerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-her',
  templateUrl: 'her.html',
})
export class HerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerPage');
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
