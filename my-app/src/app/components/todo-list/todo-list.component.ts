import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  constructor(public todoService: TodoService) {}

  @Input() search: string;
  @Input() filter: string;

  handleStar(id: number) {
    this.todoService.star(id);
  }

  handleRemove(id: number) {
    this.todoService.remove(id);
  }

  handleDone(id: number) {
    this.todoService.done(id);
  }
}

