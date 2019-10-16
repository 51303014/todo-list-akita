import { Component, OnInit } from '@angular/core';
import { TodosService } from './state/todo.service';
import { Todo } from './state/todo.model';
import { Observable } from 'rxjs';
import { TodoQuery } from './state/todo.query';

@Component({
  selector: 'todo-list',
  styleUrls: ['todo.component.scss'],
  templateUrl: 'todo.component.html'
})

export class TodoComponent implements OnInit {
  todoValue = '';
  todoLists$: Observable<Todo[]>;
  list: Todo[];

  completedList: Todo[];

  constructor(private todoService: TodosService,
              private todoQuery: TodoQuery) {

  }

  ngOnInit(): void {
    this.todoLists$ = this.todoQuery.selectAll();

  }

  addTodo() {
    this.todoService.add(this.todoValue);
    this.todoValue = '';
  }

  valueChange(data) {
    const copiedObj = { ...data };
    copiedObj.created = new Date();
    copiedObj.checked = true;

    this.todoService.completed(copiedObj);
    this.todoLists$.subscribe(value => this.completedList = value);

  }

  removeTodo(todo) {
    this.todoService.delete(todo.id);
  }


}
