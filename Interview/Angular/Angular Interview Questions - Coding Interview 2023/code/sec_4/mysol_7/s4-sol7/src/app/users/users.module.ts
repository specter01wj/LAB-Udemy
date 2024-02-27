import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
