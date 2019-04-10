import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/store";
import {addTodoAPI, fetchTodosAPI} from '../api/api';
import {addTodo, fetchTodos} from './actions';

export const thunkFetchTodos = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const fetchTodosRes = await fetchTodosAPI();
    const arrayRes = Object.values(fetchTodosRes.todos);
    dispatch(fetchTodos({todos: arrayRes}));
};

export const thunkAddTodos = (text: string, urgency: number, isDone: boolean): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const addTodosRes = await addTodoAPI(text, urgency, isDone);
  dispatch(addTodo(addTodosRes.todo));
};