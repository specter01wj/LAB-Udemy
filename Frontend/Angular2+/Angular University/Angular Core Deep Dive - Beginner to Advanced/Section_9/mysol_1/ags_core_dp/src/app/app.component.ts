import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

function courseServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSE_SERVICE = new InjectionToken<CoursesService>('COURSE_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: COURSE_SERVICE,
      useFactory: courseServiceProvider,
      deps: [ HttpClient ]
    }
  ]
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  // courses = COURSES;

  constructor(@Inject(COURSE_SERVICE)private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe({
      next: val => console.log(val),











    });
  }

}
