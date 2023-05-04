import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: Course | undefined;
  @Input() cardIndex: number | undefined;

  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  constructor() {}

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

}
