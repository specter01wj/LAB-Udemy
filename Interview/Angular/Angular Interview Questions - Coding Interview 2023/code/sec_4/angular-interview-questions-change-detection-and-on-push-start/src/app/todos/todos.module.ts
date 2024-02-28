import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, TodoComponent],
  exports: [TodosComponent],
  providers: [TodosService],
})
export class TodosModule {}
