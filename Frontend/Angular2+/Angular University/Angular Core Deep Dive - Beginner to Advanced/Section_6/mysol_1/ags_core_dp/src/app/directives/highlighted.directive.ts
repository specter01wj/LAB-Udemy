import { Directive, HostBinding, Input } from '@angular/core';

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

}
