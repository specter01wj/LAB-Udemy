import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, interval } from 'rxjs';
import { AppState } from '../../types/appState';
import * as UsersActions from '../../store/actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {
  // data$ = interval(1000);
  dataSubscription?: Subscription;


  constructor(private store: Store<AppState>) {}


  ngOnInit(): void {
      /* this.dataSubscription = this.data$.subscribe((data) => {
        console.log('data:', data);
      }); */
    this.store.dispatch(UsersActions.getUsers())
  }


  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

}
