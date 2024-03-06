import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol3';
  initVal: string = 'Inital Value';
  initVal_2: string = 'Inital Value 2';
  initVal_3: string = 'Inital Value 3';

  changeVal(event: Event): void {
    this.initVal = (event.target as HTMLInputElement).value;
  }

  modelChange(value: string): void {
    this.initVal_3 = value;
  }

}
