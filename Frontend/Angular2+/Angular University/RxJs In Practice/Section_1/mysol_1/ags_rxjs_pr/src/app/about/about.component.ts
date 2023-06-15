import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const interval$ = interval(1000);
    const interval$ = timer(3000, 1000);

    interval$.subscribe(val => {
      console.log('stream 1 ' + val);
    });


    const click$ = fromEvent(document, 'click');

    click$.subscribe( evt => {
      console.log(evt);
    });

  }

}
