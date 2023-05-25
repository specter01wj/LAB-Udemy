import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  courses$: Observable<Course[]>;
  // courses;

  constructor(
              // private http: HttpClient,
              private coursesService: CoursesService) {}

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    // const params = new HttpParams()
    //                 .set('page', 1)
    //                 .set('pageSize', 10);

    /* this.http.get('/api/courses', { params }).subscribe({
      next: val => this.courses = val,
    }); */
    // this.courses$ = this.http.get<Course[]>('/api/courses', { params });
    this.courses$ = this.coursesService.loadCourses();


  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe({
      next: val => console.log(val),









    });;
  }

}
