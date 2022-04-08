import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotComponent } from './chatbot.component';


@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule
  ],
  exports: [
    ChatbotComponent
  ]
})
export class ChatbotModule { }
