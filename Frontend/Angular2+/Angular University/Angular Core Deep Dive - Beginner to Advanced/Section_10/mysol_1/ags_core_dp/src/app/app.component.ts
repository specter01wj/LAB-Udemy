import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {
  // courses = COURSES;
  // courses$: Observable<Course[]>;
  courses: Course[];

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef) {
  }

  ngDoCheck(): void {
    this.cd.markForCheck();
  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    this.coursesService.loadCourses().subscribe({
      next: courses => {
        this.courses = courses



        // this.cd.markForCheck();
      }
    });
  }

  onEditCourse() {
    // this.courses[0].description = 'New Value';
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe({
      next: val => console.log(val),
    });
  }

}
