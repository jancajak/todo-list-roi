export const REQUEST_GET_SESSION_PENDING = 'REQUEST_GET_SESSION_PENDING';
export const REQUEST_GET_SESSION_SUCCESS = 'REQUEST_GET_SESSION_SUCCESS';
export const REQUEST_GET_SESSION_FAIL = 'REQUEST_GET_SESSION_FAIL';

export const REQUEST_UPDATE_SESSION_PENDING = 'REQUEST_UPDATE_SESSION_PENDING';
export const REQUEST_UPDATE_SESSION_SUCCESS = 'REQUEST_UPDATE_SESSION_SUCCESS';
export const REQUEST_UPDATE_SESSION_FAIL = 'REQUEST_UPDATE_SESSION_FAIL';

export const REQUEST_DELETE_SESSION_PENDING = 'REQUEST_DELETE_SESSION_PENDING';
export const REQUEST_DELETE_SESSION_SUCCESS = 'REQUEST_DELETE_SESSION_SUCCESS';
export const REQUEST_DELETE_SESSION_FAIL = 'REQUEST_DELETE_SESSION_FAIL';

export interface IResponseSession {
  status: string,
  sessionId: string,
  errorRate: number
}

export interface IRequestState {
  isPendingFetch: boolean,
  errorsFetch: string[],
  isPendingUpdate: boolean,
  errorsUpdate: string[],
  isPendingDelete: boolean,
  errorsDelete: string[],
}

interface IRequestDeleteSessionActionPending {
  type: typeof REQUEST_DELETE_SESSION_PENDING
}

interface IRequestDeleteSessionActionSuccess {
  type: typeof REQUEST_DELETE_SESSION_SUCCESS
}

interface IRequestDeleteSessionActionFail {
  type: typeof REQUEST_DELETE_SESSION_FAIL
}

interface IRequestUpdateSessionActionPending {
  type: typeof REQUEST_UPDATE_SESSION_PENDING
}

interface IRequestUpdateSessionActionSuccess {
  payload: number,
  type: typeof REQUEST_UPDATE_SESSION_SUCCESS
}

interface IRequestUpdateSessionActionFail {
  payload: string,
  type: typeof REQUEST_UPDATE_SESSION_FAIL
}

interface IRequestGetSessionActionPending {
  type: typeof REQUEST_GET_SESSION_PENDING
}

interface IRequestGetSessionActionSuccess {
  type: typeof REQUEST_GET_SESSION_SUCCESS,
  payload: IResponseSession
}

interface IRequestGetSessionActionFail {
  type: typeof REQUEST_GET_SESSION_FAIL,
  payload: string
}

export type SessionActionTypes =
    IRequestDeleteSessionActionPending |
    IRequestDeleteSessionActionSuccess |
    IRequestDeleteSessionActionFail |
    IRequestUpdateSessionActionPending |
    IRequestUpdateSessionActionSuccess |
    IRequestUpdateSessionActionFail |
    IRequestGetSessionActionPending |
    IRequestGetSessionActionSuccess |
    IRequestGetSessionActionFail;
