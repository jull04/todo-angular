import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  newTodo: string;

  constructor(public todoService: TodoService) {}

   saveTodo() {
    if (this.newTodo) {
      this.todoService.saveTodo(this.newTodo);
      this.newTodo = '';
    } else {
      alert('Enter task')
    }
   }
}
