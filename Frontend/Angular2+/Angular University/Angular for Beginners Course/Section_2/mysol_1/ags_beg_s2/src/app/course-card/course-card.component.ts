import { Component, Input } from '@angular/core';
import { COURSES } from '../../db-data';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() title: string | undefined;

}
