import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";

import { CoursesRoutingModule } from './courses-routing.module';
import { CustomPipesModule } from '../pipes/custom-pipes.module';
import { CourseTitleComponent } from './course-title/course-title.component';


@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    CourseTitleComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CustomPipesModule,




  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
