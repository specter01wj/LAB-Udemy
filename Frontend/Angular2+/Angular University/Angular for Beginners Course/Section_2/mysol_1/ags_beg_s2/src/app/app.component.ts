import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = {
    title: 'Angular Core Deep Dive',


  }

  onLogoClick() {

  }

  onKeyClick(newTitle: any) {
    this.data.title = newTitle.value;
  }


}
