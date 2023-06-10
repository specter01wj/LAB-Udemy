import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";

import { CoursesRoutingModule } from './courses-routing.module';
import { CustomPipesModule } from '../pipes/custom-pipes.module';


@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CustomPipesModule,
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,

  ]
})
export class CoursesModule { }
