import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's05_01';
  serverElements: any[] = [
    {
      type: 'server',
      name: 'Test_server1',






      content: 'Just a test1!'
    },
    {
      type: 'server',
      name: 'Test_server2',
      content: 'Just a test2!'
    }
  ];



}
