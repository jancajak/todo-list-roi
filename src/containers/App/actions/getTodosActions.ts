import {
    REQUEST_GET_TODOS_FAIL,
    REQUEST_GET_TODOS_PENDING,
    REQUEST_GET_TODOS_SUCCESS,
    TodoActionTypes
} from '../types/actionTypes';
import {ITodoListResponse} from '../types/types';

export const fetchTodosPending = (): TodoActionTypes => {
    return {
        type: REQUEST_GET_TODOS_PENDING
    };
};

export const fetchTodos = (todos: ITodoListResponse): TodoActionTypes => {
    return {
        payload: todos,
        type: REQUEST_GET_TODOS_SUCCESS
    }
};

export const fetchTodosFail = (error: string): TodoActionTypes => {
    return {
        payload: error,
        type: REQUEST_GET_TODOS_FAIL
    }
};