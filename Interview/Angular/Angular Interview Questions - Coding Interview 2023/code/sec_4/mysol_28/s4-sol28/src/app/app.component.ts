import { Component, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol28';

  @ViewChild('element', {static: true}) element: any;
  position: any;

  constructor(private zone: NgZone) {}


  mouseDown(event: any) {
    this.element = event.target;
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.mouseMove.bind(this));
    });
  }

  mouseMove(event: any) {
    event.preventDefault();
    this.element.setAttribute('x', event.clientX);
    this.element.setAttribute('y', event.clientY);
  }

  mouseUp(event: any) {
    this.zone.run(() => {
      this.position = {
        x: this.element.getAttribute('x'),
        y: this.element.getAttribute('y'),
      }
    });
    window.document.removeEventListener('mousemove', this.mouseMove);
  }



}
