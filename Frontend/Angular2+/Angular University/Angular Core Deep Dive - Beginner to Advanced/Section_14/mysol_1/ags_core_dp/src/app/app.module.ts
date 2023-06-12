import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { HttpClientModule } from "@angular/common/http";
import { CoursesModule } from "./courses/courses.module";
import { CustomPipesModule } from './pipes/custom-pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightedDirective,
    NgxUnlessDirective,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoursesModule,
    CustomPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
