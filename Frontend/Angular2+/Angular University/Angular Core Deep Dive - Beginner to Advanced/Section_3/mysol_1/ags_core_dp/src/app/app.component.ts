import { Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = COURSES;

  @ViewChild('cardRef') card: CourseCardComponent;

  @ViewChild('container') containerDiv: ElementRef;

  constructor() {}


  onLogoClick() {
  }

  onCourseSelected(course:Course) {
    console.log(this.card);
    console.log(this.containerDiv);






  }


}
