import {
  CHANGE_URGENCY,
  HANDLE_CHANGE_UPDATED_TODO_IS_DONE,
  HANDLE_CHANGE_UPDATED_TODO_URGENCY,
  HANDLE_CHANGE_UPDATED_TODO_VALUE,
  IChangeIsDone,
  IChangeTodoUrgency,
  IChangeTodoValue, IRequestDeleteTodoActionFail,
  IS_DONE,
  IS_UPDATED,
  ITodoListResponse,
  ITodoResponse,
  IUpdatedTodo,
  IUpdatedTodoIsDone,
  IUpdatedTodoSelect,
  IUpdatedTodoValue,
  REQUEST_ADD_TODO_FAIL,
  REQUEST_ADD_TODO_SUCCESS,
  REQUEST_ALTER_TODO_FAIL,
  REQUEST_ALTER_TODO_PENDING,
  REQUEST_ALTER_TODO_SUCCESS,
  REQUEST_DELETE_TODO_FAIL, REQUEST_DELETE_TODO_PENDING, REQUEST_DELETE_TODO_SUCCESS,
  REQUEST_GET_TODOS_FAIL,
  REQUEST_GET_TODOS_PENDING,
  REQUEST_GET_TODOS_SUCCESS,
  TodoActionTypes,
  UPDATE_VALUE
} from '../types';

export const changeValueTodo = (text: IChangeTodoValue): TodoActionTypes => {
  return {
    payload: text,
    type: UPDATE_VALUE
  };
};

export const changeUrgencyTodo = (urgency: IChangeTodoUrgency): TodoActionTypes => {
  return {
    payload: urgency,
    type: CHANGE_URGENCY
  };
};

export const changeIsDoneTodo = (isDone: IChangeIsDone): TodoActionTypes => {
  return {
    payload: isDone,
    type: IS_DONE
  };
};

export const isUpdatedChange = (isUpdated: IUpdatedTodo): TodoActionTypes => {
  return {
    payload: isUpdated,
    type: IS_UPDATED
  };
};

export const isUpdatedChangeValue = (updatedValue: IUpdatedTodoValue): TodoActionTypes => {
  return {
    payload: updatedValue,
    type: HANDLE_CHANGE_UPDATED_TODO_VALUE
  };
};

export const isUpdatedChangeUrgency = (updatedValue: IUpdatedTodoSelect): TodoActionTypes => {
  return {
    payload: updatedValue,
    type: HANDLE_CHANGE_UPDATED_TODO_URGENCY
  };
};

export const isUpdatedChangeIsDone = (updatedValue: IUpdatedTodoIsDone): TodoActionTypes => {
  return {
    payload: updatedValue,
    type: HANDLE_CHANGE_UPDATED_TODO_IS_DONE
  };
};

export const alterTodoPending = (): TodoActionTypes => {
  return {
    type: REQUEST_ALTER_TODO_PENDING
  };
};

export const alterTodo = (todo: ITodoResponse): TodoActionTypes => {
  return {
    payload: todo,
    type: REQUEST_ALTER_TODO_SUCCESS
  };
};

export const alterTodoFail = (error: string): TodoActionTypes => {
  return {
    payload: error,
    type: REQUEST_ALTER_TODO_FAIL
  };
};

export const fetchTodosPending = (): TodoActionTypes => {
  return {
    type: REQUEST_GET_TODOS_PENDING
  };
};

export const fetchTodos = (todos: ITodoListResponse): TodoActionTypes => {
  return {
    payload: todos,
    type: REQUEST_GET_TODOS_SUCCESS
  }
};

export const fetchTodosFail = (error: string): TodoActionTypes => {
  return {
    payload: error,
    type: REQUEST_GET_TODOS_FAIL
  }
};

export const addTodoPending = (): TodoActionTypes => {
  return {
    type: REQUEST_GET_TODOS_PENDING
  }
};

export const addTodo = (todo: ITodoResponse): TodoActionTypes => {
  return {
    payload: todo,
    type: REQUEST_ADD_TODO_SUCCESS
  };
};

export const addTodoFail = (error: string): TodoActionTypes => {
  return {
    payload: error,
    type: REQUEST_ADD_TODO_FAIL
  };
};

export const deleteTodoPending = (): TodoActionTypes => {
  return {
    type: REQUEST_DELETE_TODO_PENDING
  };
};

export const deleteTodo = (todos: ITodoListResponse): TodoActionTypes => {
  return {
    payload: todos,
    type: REQUEST_DELETE_TODO_SUCCESS
  };
};

export const deleteTodoFail = (error: string): IRequestDeleteTodoActionFail => {
  return {
    payload: error,
    type: REQUEST_DELETE_TODO_FAIL
  };
};
