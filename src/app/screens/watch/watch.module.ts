import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from './watch.component';


@NgModule({
  declarations: [
    WatchComponent
  ],
  imports: [
    CommonModule,
    WatchRoutingModule
  ],
  exports: [
    WatchComponent
  ]
})
export class WatchModule { }
