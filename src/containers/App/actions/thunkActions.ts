import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/store";
import {
    addTodoAPI,
    alterTodoAPI,
    deleteTodoAPI,
    fetchTodosAPI
} from '../api/api';
import {
    deleteTodo,
    deleteTodoFail,
    deleteTodoPending,
} from './deleteTodoActions';
import {
    fetchTodos,
    fetchTodosFail,
    fetchTodosPending
} from './getTodosActions'
import {
    alterTodoPending,
    alterTodoFail,
    alterTodo
} from './alterTodosActions';
import {
    addTodo,
    addTodoFail,
    addTodoPending,
} from './addTodoActions';

export const thunkFetchTodos = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(fetchTodosPending());
        const fetchTodosRes = await fetchTodosAPI();
        if(fetchTodosRes.status === 'OK') {
            const arrayRes = Object.values(fetchTodosRes.todos);
            dispatch(fetchTodos({todos: arrayRes}));
        } else {
            dispatch(fetchTodosFail(fetchTodosRes.error));
        }
    } catch (fetchTodosRes) {
        dispatch(fetchTodosFail('Connection with server lost'));
    }
};

export const thunkAddTodos = (text: string, urgency: number, isDone: boolean): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(addTodoPending());
        const addTodosRes = await addTodoAPI(text, urgency, isDone);
        addTodosRes.status === 'OK' ?
            dispatch(addTodo(addTodosRes.todo))
            :
            dispatch(addTodoFail(addTodosRes.error));
    } catch (addTodosRes) {
        dispatch(addTodoFail('Connection with server lost'));
    }

};

export const thunkAlterTodo = (id: string, text: string, urgency: number, isDone: boolean): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(alterTodoPending());
        const addTodosRes = await alterTodoAPI(id, text, urgency, isDone);
        addTodosRes.status === 'OK' ?
            dispatch(alterTodo(addTodosRes.todo))
            :
            dispatch(alterTodoFail(addTodosRes.error));
    } catch (addTodosRes) {
        dispatch(alterTodoFail('Connection with server were lost'));
    }
};

export const thunkDeleteTodo = (id: string): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(deleteTodoPending());
        const addTodosRes = await deleteTodoAPI(id);
        if(addTodosRes.status === 'OK') {
            const arrayRes = Object.values(addTodosRes.todos);
            dispatch(deleteTodo({todos: arrayRes}));
        } else {
            dispatch(deleteTodoFail(addTodosRes.error));
        }
    } catch (addTodosRes) {
        dispatch(deleteTodoFail('Connection with server were lost'));
    }
};