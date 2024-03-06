import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundChanger]'
})
export class BackgroundChangerDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
