import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMeetingRoutingModule } from './new-meeting-routing.module';
import { NewMeetingComponent } from './new-meeting.component';


@NgModule({
  declarations: [
    NewMeetingComponent
  ],
  imports: [
    CommonModule,
    NewMeetingRoutingModule
  ],
  exports: [
    NewMeetingComponent
  ]
})
export class NewMeetingModule { }
