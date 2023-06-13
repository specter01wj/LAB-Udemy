import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, Injector, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { CourseTitleComponent } from './courses/course-title/course-title.component';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  // courses: Course[] = COURSES;
  courses: Course[];

  // coursesTotal = this.courses.length;

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef,
    private injector: Injector) {
  }


  ngDoCheck(): void {
    this.cd.markForCheck();
  }

  ngOnInit() {
    /* const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});
    customElements.define('course-title', htmlElement); */
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
    /* const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'ngOnchanges'
    };
    this.courses[0] = newCourse; */
    this.courses[1].category = 'ADVANCED';
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe({
      next: val => console.log(val),
    });
  }

}
