import {
  ITodoList,
  TodoActionTypes,
  REQUEST_GET_TODOS,
  REQEST_ADD_TODO,
  REQUEST_DELETE_TODO
} from '../types';

const initialState: ITodoList = {
  todos: []
};

export const todosReducer = (state=initialState, action: TodoActionTypes): ITodoList => {
  switch(action.type) {
    case REQUEST_GET_TODOS:
      return {
        todos: [...action.payload]
      }
    default:
      return state;
  }
};
