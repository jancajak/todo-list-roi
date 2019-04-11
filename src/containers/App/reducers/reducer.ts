import {toast} from 'react-toastify';
import {
  CHANGE_URGENCY,
  HANDLE_CHANGE_UPDATED_TODO_IS_DONE,
  HANDLE_CHANGE_UPDATED_TODO_URGENCY,
  HANDLE_CHANGE_UPDATED_TODO_VALUE,
  IChangeIsDone,
  IChangeTodoUrgency,
  IChangeTodoValue, IRequestTodo,
  IS_DONE,
  IS_UPDATED,
  ITodoListResponse,
  IUpdatedTodo,
  IUpdatedTodoIsDone,
  IUpdatedTodoSelect,
  IUpdatedTodoValue,
  REQUEST_ADD_TODO_FAIL, REQUEST_ADD_TODO_PENDING, REQUEST_ADD_TODO_SUCCESS,
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
      newTodos.push[index] = action.payload;
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

const initialStateIsUpdated: IUpdatedTodo = {
  isUpdated: ''
};

export const isUpdatedTodoReducer = (state=initialStateIsUpdated, action: TodoActionTypes): IUpdatedTodo => {
  switch (action.type) {
    case IS_UPDATED:
      return {
        isUpdated: action.payload.isUpdated
      };
    default:
      return state;
  }
};

const initialStateHandleChangeUpdatedTodoValue: IUpdatedTodoValue = {
  value: ''
};

export const handleChangeUpdatedTodoValue = (state=initialStateHandleChangeUpdatedTodoValue, action: TodoActionTypes): IUpdatedTodoValue => {
  switch(action.type) {
    case HANDLE_CHANGE_UPDATED_TODO_VALUE:
      return {
        value: action.payload.value
      };
    default:
      return state;
  }
};

const initialStateHandleChangeUpdatedTodoUrgency: IUpdatedTodoSelect = {
  urgency: 5
};

export const handleChangeUpdatedTodoUrgency = (state=initialStateHandleChangeUpdatedTodoUrgency, action: TodoActionTypes): IUpdatedTodoSelect => {
  switch (action.type) {
    case HANDLE_CHANGE_UPDATED_TODO_URGENCY:
      return {
        urgency: action.payload.urgency
      };
    default:
      return state;
  }
};

const initialStateHandleChangeUpdatedTodoIsDone: IUpdatedTodoIsDone = {
  isDone: false
};

export const handleChangeUpdatedTodoIsDone = (state=initialStateHandleChangeUpdatedTodoIsDone, action: TodoActionTypes): IUpdatedTodoIsDone => {
  switch (action.type) {
    case HANDLE_CHANGE_UPDATED_TODO_IS_DONE:
      return {
        isDone: action.payload.isDone
      };
    default:
      return state;
  }
};


