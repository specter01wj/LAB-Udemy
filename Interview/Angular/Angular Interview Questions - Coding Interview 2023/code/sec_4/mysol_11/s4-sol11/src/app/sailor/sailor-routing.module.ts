import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SailorComponent } from './sailor/sailor.component';

const routes: Routes = [
  {
    path: '',
    component: SailorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SailorRoutingModule { }
