import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
