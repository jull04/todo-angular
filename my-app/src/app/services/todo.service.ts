import { Injectable } from '@angular/core';

export interface IItem {
  name: string,
  isCompleted: boolean,
  important: boolean,
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Array<IItem> = [];

  constructor() { }

  saveTodo(newTodo: string) {
    if(newTodo) {
      let todo: IItem = {
        name: newTodo,
        isCompleted: true,
        important: true,
        id: Date.now(),
      };
      this.todos.push(todo);
    } else {
      alert('Enter task')
    }
  }

  done(id:number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
  }

  remove(id:number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos = this.todos.filter((v,i) => i !== index);
  }

  star(id:number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].important = !this.todos[index].important;
  }
}
