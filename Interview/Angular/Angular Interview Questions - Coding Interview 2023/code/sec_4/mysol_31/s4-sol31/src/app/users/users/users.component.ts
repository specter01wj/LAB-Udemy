import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';
import { AppState } from '../../types/appState';
import * as UsersActions from '../../store/actions';
import { User } from '../../model/user';
import { errorSelector, isLoadingSelector, usersSelector } from '../../store/selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ =  this.store.pipe(select(isLoadingSelector));
    this.error$ =  this.store.pipe(select(errorSelector));
    this.users$ =  this.store.pipe(select(usersSelector));
  }


  ngOnInit(): void {
    this.store.dispatch(UsersActions.getUsers())
  }


}
