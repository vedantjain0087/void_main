import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MymapsPage } from '../mymaps/mymaps';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, private http: HTTP) {
    this.fetch_api();
  }
  async fetch_api(){
    this.http.post('', {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
  }

  navi(){
    this.navCtrl.push(MymapsPage);
  }
 
}
