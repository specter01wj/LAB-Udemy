import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.scss']
})
export class CourseImageComponent {
  @Input('src') imageUrl:string;

}
