import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SailorRoutingModule } from './sailor-routing.module';
import { SailorComponent } from './sailor/sailor.component';


@NgModule({
  declarations: [
    SailorComponent
  ],
  imports: [
    CommonModule,
    SailorRoutingModule
  ]
})
export class SailorModule { }
