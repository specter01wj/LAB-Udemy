import { delay, from, mergeMap, of } from "rxjs";

const example = (operator: any) => () => {
  from([0, 1, 2, 3, 4])
    .pipe(operator((x: any) => of(x).pipe(delay(500))))
    .subscribe(
      console.log,
      () => {},
      () => console.log(`${operator.name} completed`)
    );
};

example(mergeMap)();
