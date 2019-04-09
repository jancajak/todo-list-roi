import {
  IChangeTodoValue,
  ITodoList,
  REQUEST_ADD_TODO,
  REQUEST_DELETE_TODO,
  REQUEST_GET_TODOS,
  TodoActionTypes,
  UPDATE_VALUE
} from '../types';

const initialState: ITodoList = {
  todos: [{
    description: "string",
    id: 1
  }]
};

export const todosReducer = (state=initialState, action: TodoActionTypes): ITodoList => {
  switch(action.type) {
    case REQUEST_GET_TODOS:
      return {
        todos: [{id: 1, description: "Maybe typescript"}]
      };
    case REQUEST_ADD_TODO:
      return {
        todos: [...state.todos, {id: state.todos.length + 1, description: action.payload.description}]
      };
    case REQUEST_DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.meta.id)
      };
    default:
      return state;
  }
};

const initialStateChangeValue: IChangeTodoValue = {
  description: ""
};

export const changeValueTodoReducer = (state=initialStateChangeValue, action: TodoActionTypes): IChangeTodoValue => {
  switch(action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        description: action.payload.description
      };
    default:
      return state;
  }
};
