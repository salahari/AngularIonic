import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventTemplatePage } from './event-template';

@NgModule({
  declarations: [
    EventTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(EventTemplatePage),
  ],
})
export class EventTemplatePageModule {}
