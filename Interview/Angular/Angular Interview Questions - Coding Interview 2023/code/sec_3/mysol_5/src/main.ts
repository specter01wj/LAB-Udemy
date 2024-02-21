import { BehaviorSubject } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

const users$ = new BehaviorSubject<UserInterface[]>([]);

users$.subscribe((item) => {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = item.toString();
  }
})

