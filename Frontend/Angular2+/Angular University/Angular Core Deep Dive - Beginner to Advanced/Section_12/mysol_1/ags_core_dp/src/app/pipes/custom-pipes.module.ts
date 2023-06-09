import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByCategoryPipe } from './filter-by-category.pipe';



@NgModule({
  declarations: [
    FilterByCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterByCategoryPipe
  ]
})
export class CustomPipesModule { }
