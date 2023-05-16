import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() course: Course | undefined;
  @Input() cardIndex: number | undefined;

  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  @ContentChild('courseImage') courseImage;
  @ContentChildren('courseImage') courseImages;

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.courseImage);
  }

  ngAfterContentInit(): void {
    console.log(this.courseImages);

  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    } else {
      return '';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
