import {
  IChangeTodoValue,
  ITodoList,
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_GET_TODOS,
  TodoActionTypes,
  UPDATE_VALUE
} from '../types';

export const changeValueTodo = (description: IChangeTodoValue): TodoActionTypes => {
  return {
    payload: description,
    type: UPDATE_VALUE
  };
};

export const fetchTodos = (todos: ITodoList): TodoActionTypes => {
  return {
    payload: todos,
    type: REQUEST_GET_TODOS
  }
};

export const addTodo = (description: IChangeTodoValue): TodoActionTypes => {
  return {
    payload: description,
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
