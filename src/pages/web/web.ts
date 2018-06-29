import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitize: DomSanitizer) {
  }
  urlpaste(){
    this.url = "https://www.google.com";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WebPage');
  }

}
