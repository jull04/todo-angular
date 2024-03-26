import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IItem } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos$ = new BehaviorSubject<IItem[]>([]);
  private todos: Array<IItem>=[];

  constructor() { }

  saveTodo(newTodo: string) {
    if(newTodo) {
      let todo: IItem = {
        name: newTodo,
        isCompleted: false,
        important: false,
        id: Date.now(),
      };
      this.todos = [...this.todos, todo];
      this.todos$.next(this.todos);
    } else {
      alert('Enter task')
    }
  }

  done(id:number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
    this.todos$.next([...this.todos]); // Обновляем BehaviorSubject
  }

  remove(id:number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1); // Удаляем элемент из массива
    this.todos$.next([...this.todos]); // Обновляем BehaviorSubject
  }

  star(id:number) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].important = !this.todos[index].important;
    this.todos$.next([...this.todos]); // Обновляем BehaviorSubject
  }
}
