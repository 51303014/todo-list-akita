import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { TodoStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todoStore: TodoStore) { }


  add(value: string) {
    const todo = createTodo({ value });
    this.todoStore.add(todo);
  }

  completed({id, checked}: Todo) {
    this.todoStore.update(id, list => {
      return {
        ...list,
        checked: checked
      }
    });
  }


  delete(id: ID) {
    this.todoStore.remove(id);
  }

}
