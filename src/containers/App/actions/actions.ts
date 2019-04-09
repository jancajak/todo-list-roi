import { ITodo, REQUEST_GET_TODOS, REQUEST_ADD_TODO, REQUEST_DELETE_TODO, TodoActionTypes, ITodoList } from '../types';

export const fetchTodos = (todos: ITodoList): Promise<TodoActionTypes> => {

  return fetch('http://localhost:9000/api/todos', {
    method: 'GET',
    headers: {
      "sessionId": "sessionId"
    }
  })
  .then(res => res.json())
};

export const addTodo = (todo: ITodo): TodoActionTypes => {
  return {
    type: REQUEST_ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (id: number): TodoActionTypes => {
  return {
    type: REQUEST_DELETE_TODO,
    meta: {
      id
    }
  };
};
