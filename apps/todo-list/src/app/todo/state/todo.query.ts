import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { QueryEntity } from '@datorama/akita';
import { TodoState, TodoStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodoState, Todo> {


  constructor(protected store: TodoStore) {
    super(store);
  }


}
