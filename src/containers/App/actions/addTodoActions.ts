import {
    REQUEST_ADD_TODO_FAIL,
    REQUEST_ADD_TODO_SUCCESS,
    REQUEST_GET_TODOS_PENDING,
    TodoActionTypes
} from '../types/actionTypes';
import {ITodoResponse} from '../types/types';

export const addTodoPending = (): TodoActionTypes => {
    return {
        type: REQUEST_GET_TODOS_PENDING
    }
};

export const addTodo = (todo: ITodoResponse): TodoActionTypes => {
    return {
        payload: todo,
        type: REQUEST_ADD_TODO_SUCCESS
    };
};

export const addTodoFail = (error: string): TodoActionTypes => {
    return {
        payload: error,
        type: REQUEST_ADD_TODO_FAIL
    };
};