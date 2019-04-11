import {
    HANDLE_CHANGE_UPDATED_TODO_IS_DONE,
    HANDLE_CHANGE_UPDATED_TODO_URGENCY,
    HANDLE_CHANGE_UPDATED_TODO_VALUE,
    IS_UPDATED,
    TodoActionTypes
} from '../types/actionTypes';
import {IUpdatedTodo, IUpdatedTodoIsDone, IUpdatedTodoSelect, IUpdatedTodoValue} from '../types/types';

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