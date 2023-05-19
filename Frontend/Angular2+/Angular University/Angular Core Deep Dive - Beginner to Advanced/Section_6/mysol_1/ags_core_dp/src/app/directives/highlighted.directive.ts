import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor() { }

  /* @HostBinding('className')
  get cssClasses() {
    return 'highlighted';
  } */
  @HostBinding('class.highlighted')
  get cssClasses() {
    return true;
  }

}
