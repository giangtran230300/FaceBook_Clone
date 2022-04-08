import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./content.module').then((m) => m.ContentModule),
  },
  {
    path: 'new-meeting',
    loadChildren: () => import('./new-meeting/new-meeting.module').then((m) => m.NewMeetingModule),
  },
  {
    path: 'new-status',
    loadChildren: () => import('./new-status/new-status.module').then((m) => m.NewStatusModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then((m) => m.StoriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
