import {
  IResponseSession, REQUEST_DELETE_SESSION_FAIL, REQUEST_DELETE_SESSION_PENDING, REQUEST_DELETE_SESSION_SUCCESS,
  REQUEST_GET_SESSION_FAIL,
  REQUEST_GET_SESSION_PENDING,
  REQUEST_GET_SESSION_SUCCESS,
  REQUEST_UPDATE_SESSION_FAIL,
  REQUEST_UPDATE_SESSION_PENDING,
  REQUEST_UPDATE_SESSION_SUCCESS,
  SessionActionTypes,
} from '../types';

export const deleteSessionPending = (): SessionActionTypes => {
  return {
    type: REQUEST_DELETE_SESSION_PENDING
  };
};

export const deleteSession = (): SessionActionTypes => {
  return {
    type: REQUEST_DELETE_SESSION_SUCCESS
  };
};

export const deleteSessionFail = (): SessionActionTypes => {
  return {
    type: REQUEST_DELETE_SESSION_FAIL
  };
};

export const updateSessionPending = (): SessionActionTypes => {
  return {
    type: REQUEST_UPDATE_SESSION_PENDING
  };
};

export const updateSession = (rate: number): SessionActionTypes => {
  return {
    payload: rate,
    type: REQUEST_UPDATE_SESSION_SUCCESS
  }
};

export const updateSessionFail = (error: string): SessionActionTypes => {
  return {
    payload: error,
    type: REQUEST_UPDATE_SESSION_FAIL
  };
};

export const getSessionPending = (): SessionActionTypes => {
  return {
    type: REQUEST_GET_SESSION_PENDING
  };
};

export const getSession = (session: IResponseSession): SessionActionTypes => {
  return {
    payload: session,
    type: REQUEST_GET_SESSION_SUCCESS
  };
};

export const getSessionFail = (error: string): SessionActionTypes => {
  return {
    payload: error,
    type: REQUEST_GET_SESSION_FAIL
  };
};