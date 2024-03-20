import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if(this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      todo.important= true;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Enter task')
    }
  }

  done(id:number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  star(id:number) {
    this.todos[id].important = !this.todos[id].important;
  }

}
