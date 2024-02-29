import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { Observable } from 'rxjs';
import { TodosService } from '../../service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input('todo') todoProps!: Todo;
  localProp = "Mike";
  filter$: Observable<string> = this.todosService.filter$;


  constructor(private todosService: TodosService) {}

  checkRender() {
    console.log('CheckRender');
    return true;
  }

  changeLocalProp() {
    this.localProp = "Kate";
  }

  changeFilter() {
    this.todosService.filter$.next('active');
  }


}
