import {
  GET_SESSION,
  ISessionState,
  SessionActionTypes,
  UPDATE_SESSION
} from '../types';

const initialState: ISessionState = {
  isSigned: false,
  session: '',
};

export const sessionReducer = (state=initialState, action: SessionActionTypes): ISessionState => {
  switch(action.type) {
    case GET_SESSION:
      sessionStorage.setItem('sessionId', action.payload.sessionId);
      return {
        ...state,
        isSigned: true,
        session: action.payload.sessionId
      };
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
