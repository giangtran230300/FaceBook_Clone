import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { StoriesModule } from './stories/stories.module';
import { PostsModule } from './posts/posts.module';
import { NewStatusModule } from './new-status/new-status.module';
import { NewMeetingModule } from './new-meeting/new-meeting.module';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    StoriesModule,
    PostsModule,
    NewStatusModule,
    NewMeetingModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
