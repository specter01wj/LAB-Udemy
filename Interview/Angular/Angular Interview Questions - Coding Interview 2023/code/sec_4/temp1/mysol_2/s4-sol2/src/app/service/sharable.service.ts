import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharableService {
  currentPage: number = 1;
  private pageData$: BehaviorSubject<number> =  new BehaviorSubject(this.currentPage);

  constructor() { }

  getPageData(): BehaviorSubject<number> {
    return this.pageData$;
  }

  setPageData(value: number): void {
    this.pageData$.next(value);
  }

}
