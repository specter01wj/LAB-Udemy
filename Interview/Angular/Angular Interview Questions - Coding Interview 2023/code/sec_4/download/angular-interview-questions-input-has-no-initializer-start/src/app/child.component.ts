import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: '{{currrentPage}}',
})
export class ChildComponent {
  @Input() currrentPage: number;
}
