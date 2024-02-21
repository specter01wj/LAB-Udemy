import { BehaviorSubject, Subject } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

const users$ = new BehaviorSubject<UserInterface[]>([]);

const subject$ = new Subject();

setTimeout(() => {
  users$.next([{ id: '1', name: 'John Doe', age: 30 },]);
  subject$.next([{ id: '2', name: 'Jin', age: 34 },]);
}, 2000);

users$.subscribe((item) => {
  const appDiv = document.getElementById('app1');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  }
});

subject$.subscribe((item) => {
  const appDiv = document.getElementById('app2');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  }
});

