import {
  CHANGE_URGENCY, IChangeIsDone,
  IChangeTodoUrgency,
  IChangeTodoValue,
  IS_DONE,
  ITodoListResponse,
  ITodoResponse,
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

export const fetchTodos = (todos: ITodoListResponse) => {
  return {
    payload: todos,
    type: REQUEST_GET_TODOS
  }
};

export const addTodo = (todo: ITodoResponse): TodoActionTypes => {
  return {
    payload: todo,
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
