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

  @ViewChild(CourseCardComponent) card: CourseCardComponent;

  constructor() {}


  onLogoClick() {
  }

  onCourseSelected(course:Course) {
    console.log(this.card);
  }


}
