import { Observable, combineLatest, map, of } from "rxjs";

const foo$ = of('foo');
const bar$ = of('bar');
const baz$ = of('baz');

combineLatest([foo$, bar$, baz$]).subscribe((res) => {
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = res.toString();
  }
});







