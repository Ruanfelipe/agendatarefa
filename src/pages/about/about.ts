import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private url:string = "http://localhost:3000/agenda";
  public dados: Array<{}>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http) {
    
        this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          this.dados = data;
        });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
}
}