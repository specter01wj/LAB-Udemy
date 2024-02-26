import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './users.service';

@NgModule({
  providers: [UsersService],
  declarations: [UsersComponent],
  exports: [UsersComponent],
})
export class UsersModule {}
