import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home.module').then((m) => m.HomeModule),
  },
  {
    path: 'suggestion',
    loadChildren: () =>
      import('./suggestion/suggestion.module').then(
        (m) => m.SuggestionModule
      ),
  },
  {
    path: 'content',
    loadChildren: () =>
      import('./content/content.module').then(
        (m) => m.ContentModule
      ),
  },
  {
    path: 'advertisement',
    loadChildren: () =>
      import('./advertisement/advertisement.module').then(
        (m) => m.AdvertisementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
