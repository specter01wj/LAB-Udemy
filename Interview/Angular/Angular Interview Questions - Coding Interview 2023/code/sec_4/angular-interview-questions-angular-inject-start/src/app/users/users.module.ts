import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './services/users.service';
import { UsersEffects } from './store/effects';
import { reducers } from './store/reducers';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UsersEffects]),
  ],
  declarations: [UsersComponent],
  providers: [UsersService],
  exports: [UsersComponent],
})
export class UsersModule {}
