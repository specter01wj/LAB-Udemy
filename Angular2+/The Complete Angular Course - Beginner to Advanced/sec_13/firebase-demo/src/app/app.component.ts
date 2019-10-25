import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
  title = 'firebase-demo';
  courses: any[];
  courseObj: any[];
  courses$;
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
  	// async pipe
  	// this.courses$ = db.list('/courses').valueChanges();

  	this.subscription = db.list('/courses').valueChanges()
  		.subscribe(courses => {
  			this.courses = courses;
  			console.log(this.courses);
  		});

  	db.object('/courses/1').valueChanges()
  		.subscribe(course => {
  			this.courseObj = course;
  			console.log(this.courseObj);
  		});
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

}
