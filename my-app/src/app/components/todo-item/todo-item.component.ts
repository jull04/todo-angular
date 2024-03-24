import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { IItem } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  constructor(public todoService: TodoService) {}

  @Input() item: IItem;

  get position() {
    return this.todoService.todos.findIndex(todo => todo.id === this.item.id)+1;
  }
}
