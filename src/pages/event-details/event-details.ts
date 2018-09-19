import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { EventInvitePage } from '../event-invite/event-invite';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  public eventType:any;
  public hostedBy:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

  continue(){
      console.log('Invoking Next Page :: '+this.eventType+" hosted by :: "+this.hostedBy);
      alert("Event Name "+this.eventType+" hosted by "+this.hostedBy)
      this.navCtrl.push(EventInvitePage,{eventType:this.eventType,hostedBy:this.hostedBy});
    }
}
