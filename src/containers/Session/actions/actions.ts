import { ISessionState, UPDATE_SESSION, SessionActionTypes } from '../types';

export const updateSession = (newSession: ISessionState): SessionActionTypes => {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
};
