import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {
  @Input('isHighlighted') isHighlighted = false;



  constructor() { }

  /* @HostBinding('className')
  get cssClasses() {
    return 'highlighted';
  } */
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }


  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }



}
