import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductPage} from "../product/product";
import {PerfumePage} from "../perfume/perfume";
import {TvPage} from "../tv/tv";
import {LoginPage} from "../login/login";
import {CartPage} from "../cart/cart";
import {HisPage} from "../his/his";
import {HerPage} from "../her/her";
import {SetPage} from "../set/set";
import {SharpPage} from "../sharp/sharp";
import {OrcaPage} from "../orca/orca";
import {SkyPage} from "../sky/sky";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
}
