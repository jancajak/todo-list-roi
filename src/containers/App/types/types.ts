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

export interface IChangeTodoUrgency {
  urgency: number
}

export interface IChangeIsDone {
  isDone: boolean
}

export interface IUpdatedTodo {
  isUpdated: string
}

export interface IUpdatedTodoValue {
  value: string
}

export interface IUpdatedTodoSelect {
  urgency: number
}

export interface IUpdatedTodoIsDone {
 isDone: boolean
}

export interface IRequestTodo {
  isPendingFetch: boolean,
  errorsFetch: string[],
  isPendingAdd: boolean,
  errorsAdd: string[],
  isPendingAlter: boolean,
  errorsAlter: string[],
  isPendingDelete: boolean,
  errorsDelete: string[]
}

