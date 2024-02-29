import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
