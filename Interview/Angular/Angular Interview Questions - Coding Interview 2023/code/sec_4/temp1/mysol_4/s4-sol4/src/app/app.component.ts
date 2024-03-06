import { Component, OnInit } from '@angular/core';
import { DatesService } from './service/dates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 's4-sol4';

  constructor(private datesService: DatesService) { }

  ngOnInit(): void {
      console.log(this.datesService.getToday(),
      this.datesService.getTomorrow(),
      this.datesService.getYesterday());
  }

}
