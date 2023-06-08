import {
  AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';
// import { COURSE_SERVICE } from '../app.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy,
  OnChanges, AfterContentChecked, AfterViewChecked,
  AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnchanges', changes);
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }

    ngAfterContentChecked(): void {

    }

    ngAfterViewChecked(): void {

    }

    ngAfterContentInit(): void {

    }

    ngAfterViewInit(): void {

    }

    ngDoCheck(): void {

    }

    onTitleChanged(newTitle: string) {
      this.course.description = newTitle;






    }

    onSaveClicked(description:string) {
        this.courseEmitter.emit({...this.course, description});
    }




}
