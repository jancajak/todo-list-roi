import {
  IChangeTodoValue,
  ITodoListResponse,
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_GET_TODOS,
  TodoActionTypes,
  UPDATE_VALUE
} from '../types';

const initialState: ITodoListResponse = {
  todos: []
};

export const todosReducer = (state=initialState, action: TodoActionTypes): ITodoListResponse => {
  switch(action.type) {
    case REQUEST_GET_TODOS:
      return {
        todos: action.payload.todos
      };
    case REQUEST_ADD_TODO:
      return {
        todos: [...state.todos]
      };
    case REQUEST_DELETE_TODO:
      return {
        todos: [...state.todos]
      };
    default:
      return state;
  }
};

const initialStateChangeValue: IChangeTodoValue = {
  text: ""
};

export const changeValueTodoReducer = (state=initialStateChangeValue, action: TodoActionTypes): IChangeTodoValue => {
  switch(action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        text: action.payload.text
      };
    default:
      return state;
  }
};
