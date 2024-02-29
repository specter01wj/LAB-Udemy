import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  // @Input() currentPage: number | null = 1;
  @Input() currentPage: number = 1;
}
