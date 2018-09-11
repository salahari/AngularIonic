import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventConclusionPage } from './event-conclusion';

@NgModule({
  declarations: [
    EventConclusionPage,
  ],
  imports: [
    IonicPageModule.forChild(EventConclusionPage),
  ],
})
export class EventConclusionPageModule {}
