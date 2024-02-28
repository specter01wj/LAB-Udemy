import { Component, OnInit } from '@angular/core';
import { interval, takeUntil } from 'rxjs';
import { Unsub } from '../../model/unsub';

@Component({
  selector: 'app-sailor',
  templateUrl: './sailor.component.html',
  styleUrl: './sailor.component.scss'
})
export class SailorComponent extends Unsub implements OnInit {
  data$ = interval(1000);

  ngOnInit(): void {
      this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
        console.log('data:', data);
      });
  }

}
