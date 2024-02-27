import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 's4-sol9';

  @ViewChild(ChildComponent, {static: true}) child?: ChildComponent;
  @ViewChild('button', {static: true}) buttonRef?: ElementRef<HTMLButtonElement>;

  @ViewChildren(ChildComponent) children?: QueryList<ChildComponent>;
  @ViewChildren('button') buttonsRef?: QueryList<ElementRef<HTMLButtonElement>>;

  increment(): void {
    this.child?.increment();
  }

  ngAfterViewInit(): void {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'James';
    }

    this.children?.forEach((child) => console.log(child));
    this.buttonsRef?.forEach((button) => console.log(button));
  }

}
