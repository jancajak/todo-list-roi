import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import history from '../../../history';
import { AppState } from "../../../store/store";
import {fetchSession} from '../api/api';
import { getSession } from "./actions";

export const thunkGetSession = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const getSessionRes = await fetchSession();
    dispatch(getSession(getSessionRes));
    history.push('/app');
};