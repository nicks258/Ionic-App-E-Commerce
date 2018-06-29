import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductPage} from "../product/product";
import {PerfumePage} from "../perfume/perfume";
import {TvPage} from "../tv/tv";
import {LoginPage} from "../login/login";
import {CartPage} from "../cart/cart";

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
    this.navCtrl.push(TvPage);
  }
  goToPerfumePage(){
    this.navCtrl.push(PerfumePage);
  }
  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  goToCartPage(){
    this.navCtrl.push(CartPage);
  }
}
