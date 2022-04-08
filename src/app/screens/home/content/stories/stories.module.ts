import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { NewModule } from './new/new.module';
import { FriendsModule } from './friends/friends.module';


@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    NewModule,
    FriendsModule
  ],
  exports: [
    StoriesComponent
  ]
})
export class StoriesModule { }
