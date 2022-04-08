import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SuggestionModule } from './suggestion/suggestion.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { ContentModule } from './content/content.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SuggestionModule,
    AdvertisementModule,
    ContentModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
