import { Observable, catchError, map, of } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

const normalizeUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
  return users$.pipe(
    map((users) => {
      throw new Error('foo');
      return users.map((user) => user.name);
    }), 
    catchError(err => {
      console.log('err', err);
      return of([]);
    })
  );
}

const mockUsers: UserInterface[] = [
  { id: '1', name: 'John Doe', age: 30 },
];

const mockUsers$ = of(mockUsers);

normalizeUsers(mockUsers$).subscribe({
  next: (item) => {
    const appDiv = document.getElementById('app');
    if (appDiv) {
      appDiv.innerHTML = item.toString();
    }
  },
  error: (err) => {
    console.log('err', err);
  },
  complete: () => {
    console.log('complete');
  }
});



