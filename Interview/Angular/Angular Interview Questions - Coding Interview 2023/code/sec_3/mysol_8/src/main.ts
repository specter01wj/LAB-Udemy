import { Observable, concat, concatMap, delay, exhaustMap, flatMap, from, mergeMap, of, switchMap } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
}

const example = (operator: any) => () => {
  from([0, 1, 2, 3, 4])
    .pipe(operator((x: any) => of(x).pipe(delay(500))))
    .subscribe(
      console.log,
      () => {},
      () => console.log(`${operator.name} completed`)
    );
};

// example(mergeMap)();
// example(flatMap)();
// example(concatMap)();
example(switchMap)();
// example(exhaustMap)();

/* users: UserInterface[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'James' },
];

const foo$ = this.getUser('1').pipe(
  switchMap((user) => this.getUserDetails(user))
);

foo$.subscribe((foo) => console.log('foo', foo));

getUser(id: string): Observable<UserInterface> {
  const user = this.users.find((user) => user.id === id)!;
  return of(user);
}

getUserDetails(user: UserInterface): Observable<UserDetailsInterface> {
  return of({ id: user.id, age: 30 },)
}
 */
