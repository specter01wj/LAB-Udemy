import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldierComponent } from './soldier/soldier.component';

const routes: Routes = [
  {
    path: '',
    component: SoldierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoldierRoutingModule { }
