import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProductPage,
    PerfumePage,
    HisPage,
    HerPage,
    SetPage,
    TvPage,
    SharpPage,
    OrcaPage,
    SkyPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProductPage,
    PerfumePage,
    HisPage,
    HerPage,
    SetPage,
    TvPage,
    SharpPage,
    OrcaPage,
    SkyPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
