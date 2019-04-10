export interface ITodoResponse {
  id?: string,
  text?: string,
  created?: string,
  updated?: string,
  isCompleted?: boolean,
  urgency?: number
}

export interface ITodoListResponse {
  todos: ITodoResponse[]
}

export interface IChangeTodoValue {
  text: string
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
  payload: ITodoListResponse
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
