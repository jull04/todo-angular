import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {

  search = "";
  filter = "";

  constructor(public todoService: TodoService){}

  handleSearch(event: {search: string, filter: string}) {
    this.search = event.search;
    this.filter = event.filter;
  }

  ngOnInit(): void {
  }
}
