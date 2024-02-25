import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() current_page: number = 0;
  @Output() notifyParent: EventEmitter<number> = new EventEmitter<number>();


  someEventTrigger() {
    this.notifyParent.emit(this.current_page);
  }


}
