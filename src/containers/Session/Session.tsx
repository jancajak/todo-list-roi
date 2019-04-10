import * as React from 'react';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AppState} from '../../store/store';
import {updateSession} from './actions/actions';
import {thunkGetSession} from './actions/thunkActions';
import {ISessionState} from './types';

interface ISessionProps {
    session: ISessionState,
    handleGetSession: typeof thunkGetSession,
    updateSession: typeof updateSession
}

interface IDispatchProps {
    handleGetSession: () => void,
    updateSession: (newSession: ISessionState) => void
}

class Session extends React.Component<ISessionProps> {
    public componentDidMount(): void {
        this.props.updateSession({isSigned: true, session: 'Jakub'});
    }

    public getSession = (): void => {
        this.props.handleGetSession();
    };

    public render(): JSX.Element {
        return (
          <div>
              <h1>Click button to login</h1>
              <button onClick={this.getSession}>Login</button>
          </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    session: state.session,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
    handleGetSession: () => dispatch(thunkGetSession()),
    updateSession: (newSession) => dispatch(updateSession(newSession))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);