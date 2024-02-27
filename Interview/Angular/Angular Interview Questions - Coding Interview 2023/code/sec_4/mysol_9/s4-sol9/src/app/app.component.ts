import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol9';

  @ViewChild(ChildComponent, {static: true}) child?: ChildComponent;

  increment(): void {
    this.child?.increment();
  }

}
