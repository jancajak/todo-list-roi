import {toast} from 'react-toastify';
import {
  IRequestState,
  IResponseSession, REQUEST_DELETE_SESSION_FAIL, REQUEST_DELETE_SESSION_PENDING, REQUEST_DELETE_SESSION_SUCCESS,
  REQUEST_GET_SESSION_FAIL,
  REQUEST_GET_SESSION_PENDING,
  REQUEST_GET_SESSION_SUCCESS,
  REQUEST_UPDATE_SESSION_FAIL,
  REQUEST_UPDATE_SESSION_PENDING,
  REQUEST_UPDATE_SESSION_SUCCESS,
  SessionActionTypes
} from '../types';

type SessionType = IResponseSession & IRequestState;

const initialState: SessionType = {
  errorRate: 50,
  errorsDelete: [],
  errorsFetch: [],
  errorsUpdate: [],
  isPendingDelete: false,
  isPendingFetch: false,
  isPendingUpdate: false,
  sessionId: '',
  status: ''
};

export const sessionReducer = (state=initialState, action: SessionActionTypes): SessionType => {
  switch(action.type) {
    case REQUEST_GET_SESSION_PENDING:
      return {
        ...state,
        isPendingFetch: true
      };
    case REQUEST_GET_SESSION_SUCCESS:
      sessionStorage.setItem('sessionId', action.payload.sessionId);
      return {
        ...state,
        isPendingFetch: false,
        sessionId: action.payload.sessionId
      };
    case REQUEST_GET_SESSION_FAIL:
      toast.error(action.payload);
      return {
        ...state,
        errorsFetch: [...state.errorsFetch, action.payload],
        isPendingFetch: false
      };
    case REQUEST_UPDATE_SESSION_PENDING:
      return {
        ...state,
        isPendingUpdate: true
      };
    case REQUEST_UPDATE_SESSION_SUCCESS:
      return {
        ...state,
        errorRate: action.payload,
        isPendingUpdate: false
      };
    case REQUEST_UPDATE_SESSION_FAIL:
      return {
        ...state,
        errorsUpdate: [...state.errorsUpdate, action.payload],
        isPendingUpdate: false
      };
    case REQUEST_DELETE_SESSION_PENDING:
      return {
        ...state,
        isPendingDelete: true
      };
    case REQUEST_DELETE_SESSION_SUCCESS:
      toast.info('You have been logged out due to inactivity', { autoClose: false });
      return {
        ...state,
        sessionId: ''
      };
    case REQUEST_DELETE_SESSION_FAIL:
      return {
        ...state,
        isPendingDelete: false
      };
    default:
      return state;
  }
};
