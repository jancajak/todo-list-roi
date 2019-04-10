import {
  CHANGE_URGENCY,
  IChangeIsDone,
  IChangeTodoUrgency,
  IChangeTodoValue, IS_DONE,
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
        todos: [...state.todos, action.payload]
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
        text: action.payload.text
      };
    default:
      return state;
  }
};

const initialStateChangeUrgency: IChangeTodoUrgency = {
  urgency: 5
};

export const changeUrgencyTodoReducer = (state=initialStateChangeUrgency, action: TodoActionTypes): IChangeTodoUrgency => {
  switch (action.type) {
    case CHANGE_URGENCY:
      return {
        urgency: action.payload.urgency
      };
    default:
      return state;
  }
};

const initialStateChangeIsDone: IChangeIsDone = {
  isDone: false
};

export const changeIsDoneTodoReducer = (state=initialStateChangeIsDone, action: TodoActionTypes): IChangeIsDone => {
  switch (action.type) {
    case IS_DONE:
      return {
        isDone: action.payload.isDone
      };
    default:
      return state;
  }
};


