import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1 })),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeIn]
})
export class AppComponent {
  title = 's4-sol16';
  isShown = false;

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }
}
