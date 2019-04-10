import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/store";
import {fetchTodosAPI} from '../api/api';
import { fetchTodos } from "./actions";

export const thunkFetchTodos = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const fetchTodosRes = await fetchTodosAPI();
    const arrayRes = Object.values(fetchTodosRes.todos);
    dispatch(fetchTodos({todos: arrayRes}));
};