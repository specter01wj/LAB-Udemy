import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
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
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  courses: Course[];

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef) {
  }


  ngDoCheck(): void {
    this.cd.markForCheck();
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe({
      next: courses => {
        this.courses = courses
      }
    });
  }

  ngOnDestroy(): void {
  }

  onEditCourse() {
    // this.courses = [undefined];
    // this.courses[0].description = 'ngOnchanges';
    const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'ngOnchanges'












    };
    this.courses[0] = newCourse;
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe({
      next: val => console.log(val),
    });
  }

}
