import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IItem } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos$ = new BehaviorSubject<IItem[]>([]);
  private todos: Array<IItem>=[];

  url: string = '/assets/todo-list.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  saveTodo(newTodo: IItem) {
    if(newTodo) {
      this.todos = [...this.todos, newTodo];
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

  fetchTodos = () => this.httpClient
    .get(this.url)
    .pipe(
      map((response: any) => {
        this.todos = [];
        this.todos = [...this.todos, ...response?.items];
        this.todos$.next(this.todos);
        return response?.items
      })
    )
}
