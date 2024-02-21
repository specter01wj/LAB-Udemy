import { BehaviorSubject } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

const users$ = new BehaviorSubject<UserInterface[]>([]);

setTimeout(() => {
  users$.next([{ id: '1', name: 'John Doe', age: 30 },])
}, 2000);

users$.subscribe((item) => {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  }
})

