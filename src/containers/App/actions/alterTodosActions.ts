import {
    REQUEST_ALTER_TODO_FAIL,
    REQUEST_ALTER_TODO_PENDING,
    REQUEST_ALTER_TODO_SUCCESS,
    TodoActionTypes
} from '../types/actionTypes';
import {ITodoResponse} from '../types/types';

export const alterTodoPending = (): TodoActionTypes => {
    return {
        type: REQUEST_ALTER_TODO_PENDING
    };
};

export const alterTodo = (todo: ITodoResponse): TodoActionTypes => {
    return {
        payload: todo,
        type: REQUEST_ALTER_TODO_SUCCESS
    };
};

export const alterTodoFail = (error: string): TodoActionTypes => {
    return {
        payload: error,
        type: REQUEST_ALTER_TODO_FAIL
    };
};