import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

/* const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({ opacity: 1 })),
]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('1s ease-out', style({ opacity: 0 })),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]); */

const fadeInOut = trigger('fadeInOut', [
  state('open', style({ opacity: 1 })),
  state('close', style({ opacity: 0 })),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
]);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // animations: [fadeIn, fadeOut]
  animations: [fadeInOut]
})
export class AppComponent {
  title = 's4-sol16';
  isShown = false;

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }
}
