import { Observable } from "rxjs";

const random = Math.random();
const observable = new Observable((observer) => {
  // observer.next(Math.random());
  observer.next(random);
});

observable.subscribe((item) => {
  const appDiv = document.getElementById('app1');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  } 
});

observable.subscribe((item) => {
  const appDiv = document.getElementById('app2');
  if (appDiv) {
    appDiv.innerHTML = JSON.stringify(item);
  } 
});

