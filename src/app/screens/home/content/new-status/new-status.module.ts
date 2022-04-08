import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewStatusRoutingModule } from './new-status-routing.module';
import { NewStatusComponent } from './new-status.component';


@NgModule({
  declarations: [
    NewStatusComponent
  ],
  imports: [
    CommonModule,
    NewStatusRoutingModule
  ],
  exports: [
    NewStatusComponent
  ]
})
export class NewStatusModule { }
