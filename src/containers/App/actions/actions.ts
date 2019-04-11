import {
  CHANGE_URGENCY,
  HANDLE_CHANGE_UPDATED_TODO_IS_DONE,
  HANDLE_CHANGE_UPDATED_TODO_URGENCY,
  HANDLE_CHANGE_UPDATED_TODO_VALUE,
  IS_DONE,
  IS_UPDATED,
  TodoActionTypes,
  UPDATE_VALUE
} from '../types/actionTypes';

import {
  IUpdatedTodo,
  IUpdatedTodoIsDone,
  IUpdatedTodoSelect,
  IUpdatedTodoValue,
  IChangeIsDone,
  IChangeTodoUrgency,
  IChangeTodoValue,
} from '../types/types'

export const changeValueTodo = (text: IChangeTodoValue): TodoActionTypes => {
  return {
    payload: text,
    type: UPDATE_VALUE
  };
};

export const changeUrgencyTodo = (urgency: IChangeTodoUrgency): TodoActionTypes => {
  return {
    payload: urgency,
    type: CHANGE_URGENCY
  };
};

export const changeIsDoneTodo = (isDone: IChangeIsDone): TodoActionTypes => {
  return {
    payload: isDone,
    type: IS_DONE
  };
};

export const isUpdatedChange = (isUpdated: IUpdatedTodo): TodoActionTypes => {
  return {
    payload: isUpdated,
    type: IS_UPDATED
  };
};

export const isUpdatedChangeValue = (updatedValue: IUpdatedTodoValue): TodoActionTypes => {
  return {
    payload: updatedValue,
    type: HANDLE_CHANGE_UPDATED_TODO_VALUE
  };
};

export const isUpdatedChangeUrgency = (updatedValue: IUpdatedTodoSelect): TodoActionTypes => {
  return {
    payload: updatedValue,
    type: HANDLE_CHANGE_UPDATED_TODO_URGENCY
  };
};

export const isUpdatedChangeIsDone = (updatedValue: IUpdatedTodoIsDone): TodoActionTypes => {
  return {
    payload: updatedValue,
    type: HANDLE_CHANGE_UPDATED_TODO_IS_DONE
  };
};