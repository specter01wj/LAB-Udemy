import { Component } from '@angular/core';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol17';

  currentUser$ = of({name: 'James', id: 1001, age: 34});

  foo$ = of('foo');
  bar$ = of('bar');
  baz$ = of('baz');

  data$ = combineLatest({
    foo: this.foo$,
    bar: this.bar$,
    baz: this.baz$
  });


}
