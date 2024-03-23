import { Injectable } from '@angular/core';

export interface IItem {
  name: string,
  isCompleted: boolean,
  important: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Array<IItem> = [];
  newTodo: string;

  constructor() { }

  saveTodo() {
    if(this.newTodo) {
      let todo: IItem = {
        name: this.newTodo,
        isCompleted: true,
        important: true
      };
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
