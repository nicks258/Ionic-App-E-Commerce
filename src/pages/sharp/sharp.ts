import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {ProductPage} from "../product/product";
import {CartPage} from "../cart/cart";
import {PerfumePage} from "../perfume/perfume";
import {TvPage} from "../tv/tv";
import {OrcaPage} from "../orca/orca";
import {SkyPage} from "../sky/sky";
import {HerPage} from "../her/her";

/**
 * Generated class for the SharpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sharp',
  templateUrl: 'sharp.html',
})
export class SharpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharpPage');
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
  goToSharpPage(){
    this.navCtrl.push(SharpPage);
  }
  goToOrcaPage(){
    this.navCtrl.push(OrcaPage);
  }
  goToSkyPage(){
    this.navCtrl.push(SkyPage);
  }
}
