import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents/agents.component';


@NgModule({
  declarations: [
    AgentsComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
