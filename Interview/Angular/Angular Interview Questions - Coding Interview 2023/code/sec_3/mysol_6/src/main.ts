import { Observable, filter, of } from "rxjs";

const foo$ = of('1');

foo$.subscribe((item) => {
  const appDiv = document.getElementById('app1');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  }
});

foo$.toPromise().then((item) => {
  const appDiv = document.getElementById('app2');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  } 
});




