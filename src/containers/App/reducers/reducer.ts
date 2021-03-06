import {toast} from 'react-toastify';
import {
  REQUEST_ADD_TODO_FAIL, REQUEST_ADD_TODO_PENDING, REQUEST_ADD_TODO_SUCCESS,
  REQUEST_ALTER_TODO_FAIL,
  REQUEST_ALTER_TODO_PENDING,
  REQUEST_ALTER_TODO_SUCCESS,
  REQUEST_DELETE_TODO_FAIL, REQUEST_DELETE_TODO_PENDING, REQUEST_DELETE_TODO_SUCCESS,
  REQUEST_GET_TODOS_FAIL,
  REQUEST_GET_TODOS_PENDING,
  REQUEST_GET_TODOS_SUCCESS,
  TodoActionTypes,
} from '../types/actionTypes';

import {
  ITodoListResponse,
  IRequestTodo,
} from '../types/types'

type StateMain = ITodoListResponse & IRequestTodo;

const initialState: StateMain = {
  errorsAdd: [],
  errorsAlter: [],
  errorsDelete: [],
  errorsFetch:[],
  isPendingAdd: false,
  isPendingAlter: false,
  isPendingDelete: false,
  isPendingFetch: false,
  todos: []
};

export const todosReducer = (state=initialState, action: TodoActionTypes): StateMain => {
  switch(action.type) {
    case REQUEST_ALTER_TODO_PENDING:
    return {
      ...state,
      isPendingAlter: true
    };
    case REQUEST_ALTER_TODO_SUCCESS:
      const newTodos = [...state.todos];
      const index = newTodos.findIndex(el => el.id === action.payload.id);
      newTodos[index] = action.payload;
      return {
        ...state,
        isPendingAlter: false,
        todos: newTodos
      };
    case REQUEST_ALTER_TODO_FAIL:
      toast.error(action.payload);
      return {
        ...state,
        errorsAlter: [...state.errorsAlter, action.payload],
        isPendingAlter: false,
      };
    case REQUEST_GET_TODOS_PENDING:
      return {
        ...state,
        isPendingFetch: true
      };
    case REQUEST_GET_TODOS_SUCCESS:
      return {
        ...state,
        isPendingFetch: false,
        todos: action.payload.todos
      };
    case REQUEST_GET_TODOS_FAIL:
      toast.error(action.payload);
      return {
        ...state,
        errorsFetch: [...state.errorsFetch, action.payload],
        isPendingFetch: false,
      };
    case REQUEST_ADD_TODO_PENDING:
      return {
        ...state,
        isPendingAdd: true
      };
    case REQUEST_ADD_TODO_SUCCESS:
      return {
        ...state,
        isPendingAdd: false,
        todos: [...state.todos, action.payload]
      };
    case REQUEST_ADD_TODO_FAIL:
      toast.error(action.payload);
      return {
        ...state,
        errorsAdd: [...state.errorsAdd, action.payload],
        isPendingAdd: false
      };
    case REQUEST_DELETE_TODO_PENDING:
      return {
        ...state,
        isPendingDelete: true
      };
    case REQUEST_DELETE_TODO_SUCCESS:
      return {
        ...state,
        isPendingDelete: false,
        todos: action.payload.todos
      };
    case REQUEST_DELETE_TODO_FAIL:
      toast.error(action.payload);
      return {
        ...state,
        errorsDelete: [...state.errorsDelete, action.payload],
        isPendingDelete: false
      };
    default:
      return state;
  }
};


