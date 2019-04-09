import {
  ISessionState,
  SessionActionTypes,
  UPDATE_SESSION
} from '../types';

const initialState: ISessionState = {
  loggedIn: false,
  session: '',
};

export const sessionReducer = (state=initialState, action: SessionActionTypes): ISessionState => {
  switch(action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    };
    default:
      return state;
  }
};
