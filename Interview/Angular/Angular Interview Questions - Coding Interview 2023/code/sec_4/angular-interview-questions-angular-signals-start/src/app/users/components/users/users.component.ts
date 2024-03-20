import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as UsersActions from '../../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  usersSelector,
} from '../../store/selectors';
import { UserInterface } from '../../types/user.interface';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<UserInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.users$ = this.store.pipe(select(usersSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.getUsers());
  }
}
