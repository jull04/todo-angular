import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  constructor(public todoService: TodoService) {}

  get newTodo(): string {
    return this.todoService.newTodo;
  }

  saveTodo(): void {
    this.todoService.saveTodo();
  }

}

