export const UPDATE_SESSION = 'UPDATE_SESSION';
export const GET_SESSION = 'GET_SESSION';

export interface IResponseSession {
  status: string,
  sessionId: string,
  errorRate: number
}

interface IGetSessionAction {
  type: typeof GET_SESSION,
  payload: IResponseSession
}

export interface ISessionState {
  isSigned: boolean,
  session: string
}

interface IUpdateSessionAction {
  type: typeof UPDATE_SESSION,
  payload: ISessionState
}

export type SessionActionTypes = IGetSessionAction | IUpdateSessionAction;
