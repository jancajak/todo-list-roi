export interface ITodo {
  id: number,
  description: string
}

export interface ITodoList {
  todos: ITodo[]
}

export const REQUEST_GET_TODOS = 'REQUEST_GET_TODOS';
export const REQUEST_ADD_TODO = 'REQUEST_SEND_TODOS';
export const REQUEST_DELETE_TODO = 'REQUEST_DELETE_TODOS';

interface IGetTodosAction {
  type: typeof REQUEST_GET_TODOS,
  payload: ITodoList
}

interface IAddTodo {
  type: typeof REQUEST_ADD_TODO,
  payload: ITodo
}

interface IDeleteTodo {
  type: typeof REQUEST_DELETE_TODO,
  meta: {
    id: number
  }
}

export type TodoActionTypes = IGetTodosAction | IAddTodo | IDeleteTodo;
