import { Component } from '@angular/core';
import { FooService } from './service/foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol27';

  constructor(private fooService: FooService) {
    console.log('config', fooService.fooconfig);
  }

}
