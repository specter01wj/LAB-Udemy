import { Observable, catchError, map, of } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

const normalizeUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
  return users$.pipe(
    map((users) => users.map((user) => user.name)), 
    catchError(err => {
      return of([]);
    })
  );
}





