export const UPDATE_SESSION = 'UPDATE_SESSION';

export interface ISessionState {
  loggedIn: boolean,
  session: string
}

interface IUpdateSessionAction {
  type: typeof UPDATE_SESSION,
  payload: ISessionState
}

export type SessionActionTypes = IUpdateSessionAction;
