import {
  IChangeTodoValue,
  ITodoListResponse,
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_GET_TODOS,
  TodoActionTypes,
  UPDATE_VALUE
} from '../types';

export const changeValueTodo = (text: IChangeTodoValue): TodoActionTypes => {
  return {
    payload: text,
    type: UPDATE_VALUE
  };
};

export const fetchTodos = (todos: ITodoListResponse) => {
  return {
    payload: todos,
    type: REQUEST_GET_TODOS
  }
};

export const addTodo = (text: IChangeTodoValue): TodoActionTypes => {
  return {
    payload: text,
    type: REQUEST_ADD_TODO
  };
};

export const deleteTodo = (id: number): TodoActionTypes => {
  return {
    meta: {
      id
    },
    type: REQUEST_DELETE_TODO
  };
};
