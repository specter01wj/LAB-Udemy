import { Component } from '@angular/core';
import { TodoInterface } from 'src/app/types/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos: TodoInterface[] = [
    {
      id: '1',
      text: 'First todo',
      isCompleted: true,
    },
    {
      id: '2',
      text: 'Second todo',
      isCompleted: true,
    },
    {
      id: '3',
      text: 'Third todo',
      isCompleted: true,
    },
  ];
}
