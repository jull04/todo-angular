import { Component, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {

  newTodo: string;

  @Output() onAddTask = new EventEmitter<string>();
}

  // constructor(public todoService: TodoService) {}

  // saveTodo() {
  //   if (this.newTodo) {
  //     this.taskAdded.emit(this.newTodo); // Emitting the new task to the parent component
  //     this.newTodo = '';
  //   } else {
  //     alert('Enter task');
  //   }
  // }


