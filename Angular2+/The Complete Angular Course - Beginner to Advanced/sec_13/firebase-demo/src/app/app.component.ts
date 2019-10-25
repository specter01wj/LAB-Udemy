import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'firebase-demo';
  courses: any[];

  constructor(db: AngularFireDatabase) {
  	db.list('/courses').valueChanges()
  		.subscribe(courses => {
  			this.courses = courses;
  			console.log(this.courses);
  		});
  }

}
