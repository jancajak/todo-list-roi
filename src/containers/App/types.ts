export interface ITodo{
  id: number,
  description: string
}

export interface ITodoList {
  todos: ITodo[]
}

export interface IChangeTodoValue {
  description: string
}

export const UPDATE_VALUE = 'UPDATE_VALUE';

export const REQUEST_GET_TODOS = 'REQUEST_GET_TODOS';
export const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO';
export const REQUEST_DELETE_TODO = 'REQUEST_DELETE_TODOS';

interface IChangeTodoValueAction {
  type: typeof UPDATE_VALUE,
  payload: IChangeTodoValue
}

interface IGetTodosAction {
  type: typeof REQUEST_GET_TODOS,
  payload: ITodoList
}

interface IAddTodo {
  type: typeof REQUEST_ADD_TODO,
  payload: IChangeTodoValue
}

interface IDeleteTodo {
  type: typeof REQUEST_DELETE_TODO,
  meta: {
    id: number
  }
}

export type TodoActionTypes = IChangeTodoValueAction | IGetTodosAction | IAddTodo | IDeleteTodo;
