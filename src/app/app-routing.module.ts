import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('./components/header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./screens/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./screens/game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'group',
    loadChildren: () =>
      import('./screens/group/group.module').then((m) => m.GroupModule),
  },
  {
    path: 'market',
    loadChildren: () =>
      import('./screens/market/market.module').then((m) => m.MarketModule),
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('./screens/personal/personal.module').then(
        (m) => m.PersonalModule
      ),
  },
  {
    path: 'watch',
    loadChildren: () =>
      import('./screens/watch/watch.module').then(
        (m) => m.WatchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
