import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";

const routes: Routes = [];

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
