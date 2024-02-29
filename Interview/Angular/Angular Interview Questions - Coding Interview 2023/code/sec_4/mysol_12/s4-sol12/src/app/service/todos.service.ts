import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  filter$ = new BehaviorSubject('all');

  constructor() { }
}
