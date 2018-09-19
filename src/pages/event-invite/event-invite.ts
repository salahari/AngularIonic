import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventInvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-invite',
  templateUrl: 'event-invite.html',
})
export class EventInvitePage {
  public userName:any;
  public eventType:any;
  public hostedBy:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventType = this.navParams.get("eventType");
    this.hostedBy = this.navParams.get("hostedBy");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInvitePage');
  }

  login(){
    console.log('in the log in method :: '+this.userName);
    console.log('Invoking Next Page :: '+this.eventType+" hosted by :: "+this.hostedBy);
    if(this.userName == ""){
      alert("Please enter user name");
    }
  }
}
