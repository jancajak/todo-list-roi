import {
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
