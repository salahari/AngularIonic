import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform  } from 'ionic-angular';

import { EventDetailsPage } from '../event-details/event-details';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
 
  createEvent(){
      console.log('Invoking Create Event');
      this.navCtrl.push(EventDetailsPage);
    }

    contactEvent(){
        console.log('Invoking Contact Event');
        this.navCtrl.push(ContactPage);
      }
}
