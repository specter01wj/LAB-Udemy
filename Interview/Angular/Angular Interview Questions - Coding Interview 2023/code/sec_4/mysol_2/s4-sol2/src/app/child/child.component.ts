import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharableService } from '../service/sharable.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  @Input() current_page: number = 0;
  @Output() notifyParent: EventEmitter<number> = new EventEmitter<number>();
  newPage: number;

  constructor(private sharableService: SharableService) {

  }

  ngOnInit(): void {
    console.log('Child Service Val:', this.sharableService.currentPage);
    this.sharableService.getPageData().subscribe(data => {
      this.current_page = data;
    });
  }

  someEventTrigger() {
    this.notifyParent.emit(this.current_page);
  }

  changePage(newPage: number) {
    this.sharableService.setPageData(newPage);
  }


}
