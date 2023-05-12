import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  newCourse = {
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      lessonsCount: 10
  };

  @ViewChild('cardRef') card: CourseCardComponent;

  // @ViewChild('container') containerDiv: ElementRef;

  // @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;
  @ViewChildren(CourseCardComponent, {read: ElementRef}) cards: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(
      cards => console.log(cards)




    );
  }


  onLogoClick() {
  }

  onCourseSelected(course:Course) {
    console.log(this.card);
    // console.log(this.containerDiv);
  }

  onCoursesEdited() {
    this.courses.push(this.newCourse);
  }

}
