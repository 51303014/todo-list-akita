import { Todo } from './todo.model';
import {  EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface TodoState extends EntityState<Todo> {
}


@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodoStore extends EntityStore<TodoState, Todo> {
  constructor() {
    super();
  }
}
