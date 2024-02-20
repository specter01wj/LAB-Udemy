import { Observable, map, of } from "rxjs";

export interface UserInterface {
  id: string; 
  name: string; 
  age: number;
}

const normalizeUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
  return users$.pipe(map((users) => users.map((user) => user.name)));
}

const mockUsers: UserInterface[] = [
  { id: '1', name: 'John Doe', age: 30 },
  { id: '2', name: 'Jane Doe', age: 25 },
  { id: '3', name: 'Jim Beam', age: 40 },
];

const mockUsers$ = of(mockUsers);

normalizeUsers(mockUsers$).subscribe((item) => {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = item.toString();
  }
})


