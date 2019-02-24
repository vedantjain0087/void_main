import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MymapsPage } from '../mymaps/mymaps';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {
  }

  navi(){
    this.navCtrl.push(MymapsPage);
  }
 
}
