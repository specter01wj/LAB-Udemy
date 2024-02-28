import { Component } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-soldier',
  templateUrl: './soldier.component.html',
  styleUrl: './soldier.component.scss'
})
export class SoldierComponent {
  data$ = interval(1000);
  unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
      this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
        console.log('data:', data);
      });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
