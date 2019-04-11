import {
    REQUEST_DELETE_TODO_FAIL,
    REQUEST_DELETE_TODO_PENDING,
    REQUEST_DELETE_TODO_SUCCESS,
    TodoActionTypes
} from '../types/actionTypes';
import {ITodoListResponse} from '../types/types';

export const deleteTodoPending = (): TodoActionTypes => {
    return {
        type: REQUEST_DELETE_TODO_PENDING
    };
};

export const deleteTodo = (todos: ITodoListResponse): TodoActionTypes => {
    return {
        payload: todos,
        type: REQUEST_DELETE_TODO_SUCCESS
    };
};

export const deleteTodoFail = (error: string): TodoActionTypes => {
    return {
        payload: error,
        type: REQUEST_DELETE_TODO_FAIL
    };
};
