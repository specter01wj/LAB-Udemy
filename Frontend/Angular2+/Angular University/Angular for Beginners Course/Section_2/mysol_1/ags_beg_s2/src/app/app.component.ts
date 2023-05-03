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
  data = {
    title: 'Angular Core Deep Dive',
  }

  constructor() {}


  onLogoClick() {

  }

  onKeyClick(newTitle: any) {
    this.data.title = newTitle.value;
  }

  onCourseSelected(course:Course) {
    console.log('received courses', course);
  }


}
