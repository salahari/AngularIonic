import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventInvitePage } from './event-invite';

@NgModule({
  declarations: [
    EventInvitePage,
  ],
  imports: [
    IonicPageModule.forChild(EventInvitePage),
  ],
})
export class EventInvitePageModule {}
