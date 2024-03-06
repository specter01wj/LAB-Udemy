import { Component, OnInit } from '@angular/core';
import { SharableService } from './service/sharable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol2';
  currentPage: number = 1;

  constructor(private sharableService: SharableService) {

  }

  ngOnInit(): void {
    console.log('Parent Service Val:', this.sharableService.currentPage);
  }


  handleNotify(event): void {
    console.log(event);
  }

}
