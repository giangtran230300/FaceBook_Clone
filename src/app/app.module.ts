import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { GameModule } from './screens/game/game.module';
import { GroupModule } from './screens/group/group.module';
import { HomeModule } from './screens/home/home.module';
import { MarketModule } from './screens/market/market.module';
import { PersonalModule } from './screens/personal/personal.module';
import { WatchModule } from './screens/watch/watch.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    GroupModule,
    GameModule,
    MarketModule,
    PersonalModule,
    WatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
