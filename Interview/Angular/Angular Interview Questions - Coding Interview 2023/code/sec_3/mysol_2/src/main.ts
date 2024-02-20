import { Observable, filter, of } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
}

const getActiveUsers = (users$: Observable<UserInterface[]>): Observable<UserInterface[]> => {
  return users$.pipe(filter((users) => users.every((user) => user.isActive)));
}

const mockUsers: UserInterface[] = [
  { id: '1', name: 'John Doe', age: 30, isActive: true },
];

const mockUsers$: Observable<UserInterface[]> = of(mockUsers);


getActiveUsers(mockUsers$).subscribe((item) => {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  }
})

