import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProductPage } from '../pages/product/product';
import { PerfumePage } from '../pages/perfume/perfume';
import { HisPage } from '../pages/his/his';
import { HerPage } from '../pages/her/her';
import { SetPage } from '../pages/set/set';
import { TvPage } from '../pages/tv/tv';
import { SharpPage } from '../pages/sharp/sharp';
import { OrcaPage } from '../pages/orca/orca';
import { SkyPage } from '../pages/sky/sky';
import { CartPage } from '../pages/cart/cart';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = LoginPage;
  // rootPage: any = HomePage;
  // rootPage: any = ProductPage;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
// TODO CHeck this
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: LoginPage },
      { title: 'Perfumes', component: LoginPage },
      { title: 'TVs', component: LoginPage },
      { title: 'Settings', component: LoginPage },
      { title: 'Contact Us', component: LoginPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
