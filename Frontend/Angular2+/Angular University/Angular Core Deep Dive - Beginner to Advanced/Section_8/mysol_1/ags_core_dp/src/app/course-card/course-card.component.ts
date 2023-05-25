import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() course: Course | undefined;
  @Input() cardIndex: number | undefined;
  @Input() noImageTpl: TemplateRef<any>;

  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
    images: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
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

  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course, description});
  }

}
