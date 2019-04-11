import {
    IChangeIsDone, IChangeTodoUrgency, IChangeTodoValue,
    ITodoListResponse,
    ITodoResponse,
    IUpdatedTodo,
    IUpdatedTodoIsDone,
    IUpdatedTodoSelect,
    IUpdatedTodoValue
} from './types';

export const CHANGE_URGENCY = 'CHANGE_URGENCY';
export const IS_DONE = 'IS_DONE';
export const IS_UPDATED = 'IS_UPDATED';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const HANDLE_CHANGE_UPDATED_TODO_VALUE = 'HANDLE_CHANGE_UPDATED_TODO_VALUE';
export const HANDLE_CHANGE_UPDATED_TODO_URGENCY = 'HANDLE_CHANGE_UPDATED_TODO_URGENCY';
export const HANDLE_CHANGE_UPDATED_TODO_IS_DONE = 'HANDLE_CHANGE_UPDATED_TODO_IS_DONE';

export const REQUEST_ALTER_TODO_PENDING = 'REQUEST_ALTER_TODO_PENDING';
export const REQUEST_ALTER_TODO_SUCCESS = 'REQUEST_ALTER_TODO_SUCCESS';
export const REQUEST_ALTER_TODO_FAIL = 'REQUEST_ALTER_TODO_FAIL';

export const REQUEST_GET_TODOS_PENDING = 'REQUEST_GET_TODOS_PENDING';
export const REQUEST_GET_TODOS_SUCCESS = 'REQUEST_GET_TODOS_SUCCESS';
export const REQUEST_GET_TODOS_FAIL = 'REQUEST_GET_TODOS_FAIL';

export const REQUEST_ADD_TODO_PENDING = 'REQUEST_ADD_TODO_PENDING';
export const REQUEST_ADD_TODO_SUCCESS = 'REQUEST_ADD_TODO_SUCCESS';
export const REQUEST_ADD_TODO_FAIL = 'REQUEST_ADD_TODO_FAIL';

export const REQUEST_DELETE_TODO_PENDING = 'REQUEST_DELETE_TODO_PENDING';
export const REQUEST_DELETE_TODO_SUCCESS = 'REQUEST_DELETE_TODO_SUCCESS';
export const REQUEST_DELETE_TODO_FAIL = 'REQUEST_DELETE_TODO_FAIL';

export interface IRequestDeleteTodoActionPending {
    type: typeof REQUEST_DELETE_TODO_PENDING
}

export interface IRequestDeleteTodoActionSuccess {
    type: typeof REQUEST_DELETE_TODO_SUCCESS,
    payload: ITodoListResponse
}

export interface IRequestDeleteTodoActionFail {
    type: typeof REQUEST_DELETE_TODO_FAIL,
    payload: string
}

export interface IRequestAlterTodoActionPending {
    type: typeof REQUEST_ALTER_TODO_PENDING
}

export interface IRequestAlterTodoActionSuccess {
    type: typeof REQUEST_ALTER_TODO_SUCCESS,
    payload: ITodoResponse
}

export interface IRequestAlterTodoActionFail {
    type: typeof REQUEST_ALTER_TODO_FAIL,
    payload: string
}

export interface IChangeUpdatedTodoIsDoneAction {
    type: typeof HANDLE_CHANGE_UPDATED_TODO_IS_DONE,
    payload: IUpdatedTodoIsDone
}

export interface IChangeUpdatedTodoUrgencyAction {
    type: typeof HANDLE_CHANGE_UPDATED_TODO_URGENCY,
    payload: IUpdatedTodoSelect
}

export interface IChangeUpdatedTodoValueAction {
    type: typeof HANDLE_CHANGE_UPDATED_TODO_VALUE,
    payload: IUpdatedTodoValue
}

export interface IIsUpdatedAction {
    type: typeof IS_UPDATED,
    payload: IUpdatedTodo
}

interface IChangeIsDoneAction {
    type: typeof IS_DONE,
    payload: IChangeIsDone
}

interface IChangeUrgencyAction {
    type: typeof CHANGE_URGENCY,
    payload: IChangeTodoUrgency
}

interface IChangeTodoValueAction {
    type: typeof UPDATE_VALUE,
    payload: IChangeTodoValue
}

interface IGetTodosActionPending {
    type: typeof REQUEST_GET_TODOS_PENDING,
}

interface IGetTodosActionSuccess {
    type: typeof REQUEST_GET_TODOS_SUCCESS,
    payload: ITodoListResponse
}

interface IGetTodosActionFail {
    type: typeof REQUEST_GET_TODOS_FAIL,
    payload: string
}

interface IAddTodoActionPending {
    type: typeof REQUEST_ADD_TODO_PENDING
}

interface IAddTodoActionSuccess {
    payload: ITodoResponse,
    type: typeof REQUEST_ADD_TODO_SUCCESS
}

interface IAddTodoActionFail {
    type: typeof REQUEST_ADD_TODO_FAIL,
    payload: string
}

export type TodoActionTypes =
    IRequestDeleteTodoActionPending |
    IRequestDeleteTodoActionSuccess |
    IRequestDeleteTodoActionFail |
    IRequestAlterTodoActionPending |
    IRequestAlterTodoActionSuccess |
    IRequestAlterTodoActionFail |
    IChangeUpdatedTodoIsDoneAction |
    IChangeUpdatedTodoUrgencyAction |
    IChangeUpdatedTodoValueAction |
    IIsUpdatedAction |
    IChangeIsDoneAction |
    IChangeUrgencyAction |
    IChangeTodoValueAction |
    IGetTodosActionPending |
    IGetTodosActionSuccess |
    IGetTodosActionFail |
    IAddTodoActionPending |
    IAddTodoActionSuccess |
    IAddTodoActionFail;