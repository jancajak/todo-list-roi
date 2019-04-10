import {
  GET_SESSION,
  IResponseSession,
  ISessionState,
  SessionActionTypes,
  UPDATE_SESSION
} from '../types';

export const updateSession = (newSession: ISessionState): SessionActionTypes => {
  return {
    payload: newSession,
    type: UPDATE_SESSION
  }
};

export const getSession = (session: IResponseSession): SessionActionTypes => {
  return {
    payload: session,
    type: GET_SESSION
  };
};