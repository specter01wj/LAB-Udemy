import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {
  data$ = interval(1000);
  dataSubscription?: Subscription;

  ngOnInit(): void {
      this.dataSubscription = this.data$.subscribe((data) => {
        console.log('data:', data);
      });
  }


  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

}
