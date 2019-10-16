import { guid, ID } from '@datorama/akita';

export interface Todo {
  id: ID;
  value: string;
  checked: boolean;
  created: Date
}


export function createTodo({value} : Partial<Todo>) {
  return {
    id: guid(),
    checked: false,
    value,
    created: new Date()
  } as Todo;
}
