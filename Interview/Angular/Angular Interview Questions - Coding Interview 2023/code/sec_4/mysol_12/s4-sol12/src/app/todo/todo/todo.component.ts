import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input('todo') todoProps!: Todo;
}
