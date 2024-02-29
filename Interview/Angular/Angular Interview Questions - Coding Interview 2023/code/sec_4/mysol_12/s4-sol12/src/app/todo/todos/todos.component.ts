import { Component } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: Todo[] = [
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
