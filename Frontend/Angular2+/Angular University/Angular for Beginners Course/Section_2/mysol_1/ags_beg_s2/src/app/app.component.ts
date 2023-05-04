import { Component, ElementRef } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = COURSES;

  constructor() {}


  onLogoClick() {

  }

  onCourseSelected(course:Course) {
    console.log('received courses', course);

  }


}
