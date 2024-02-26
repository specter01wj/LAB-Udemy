import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor() { }

  getToday(): Date {
    const startOfDateTimestamp = new Date().setHours(0, 0, 0, 0);
    return new Date(startOfDateTimestamp);
  }

  getTomorrow(): Date {
    const today = this.getToday();
    return new Date(today.setDate(today.getDate() + 1));
  }

  getYesterday(): Date {
    const today = this.getToday();
    return new Date(today.setDate(today.getDate() - 1));
  }



}
