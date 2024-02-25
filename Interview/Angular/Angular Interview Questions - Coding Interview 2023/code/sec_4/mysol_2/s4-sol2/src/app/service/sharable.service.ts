import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharableService {
  currentPage: number = 9;

  constructor() { }
}
