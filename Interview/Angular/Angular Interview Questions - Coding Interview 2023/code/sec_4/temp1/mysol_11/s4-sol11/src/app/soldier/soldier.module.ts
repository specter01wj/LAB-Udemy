import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldierRoutingModule } from './soldier-routing.module';
import { SoldierComponent } from './soldier/soldier.component';


@NgModule({
  declarations: [
    SoldierComponent
  ],
  imports: [
    CommonModule,
    SoldierRoutingModule
  ]
})
export class SoldierModule { }
