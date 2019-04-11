import {CHANGE_URGENCY, IS_DONE, TodoActionTypes, UPDATE_VALUE} from '../types/actionTypes';
import {IChangeIsDone, IChangeTodoUrgency, IChangeTodoValue} from '../types/types';

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