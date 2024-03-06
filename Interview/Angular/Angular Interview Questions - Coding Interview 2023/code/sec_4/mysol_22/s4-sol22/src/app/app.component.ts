import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's4-sol22';

  person = {
    name: "James",
    surname: "Wang"
  };

  getFullname(): string {
    console.log('getFullname');
    return `${this.person.name} ${this.person.surname}`;
  }

  test(): void {
    console.log('test');
  }

}
