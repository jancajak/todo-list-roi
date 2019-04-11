import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../../store/store";
import {deleteSessionAPI, fetchSessionAPI, updateSessionAPI} from '../api/api';
import {
    deleteSession, deleteSessionFail,
    deleteSessionPending,
    getSession,
    getSessionFail,
    getSessionPending,
    updateSession,
    updateSessionFail,
    updateSessionPending
} from './actions';

export const thunkGetSession = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(getSessionPending());
        const getSessionRes = await fetchSessionAPI();
        if (getSessionRes.status === 'OK') {
            dispatch(getSession(getSessionRes));
        } else {
            dispatch(getSessionFail(getSessionRes.error));
        }
    } catch (getSessionRes) {
        dispatch(getSessionFail('Connection with server lost'));
    }
};

export const thunkUpdateSession = (resetTimer: () => void): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(updateSessionPending());
        const updateSessionRes = await updateSessionAPI();
        resetTimer();
        if (updateSessionRes.status === 'OK') {
            dispatch(updateSession(updateSessionRes.errorRate));
        } else {
            dispatch(updateSessionFail(updateSessionRes.error));
        }
    } catch (updateSessionRes) {
        dispatch(updateSessionFail('Connection with server lost'));
    }
};

export const thunkDeleteSession = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    try {
        dispatch(deleteSessionPending());
        const updateSessionRes = await deleteSessionAPI();
        if (updateSessionRes.status === 'OK') {
            dispatch(deleteSession());
        } else {
            dispatch(deleteSessionFail());
        }
    } catch (updateSessionRes) {
        dispatch(deleteSessionFail());
    }
};