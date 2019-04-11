import * as React from 'react';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppState} from '../../store/store';
import {thunkGetSession} from './actions/thunkActions';
import {IResponseSession} from './types';

interface ISessionProps {
    session: IResponseSession,
    handleGetSession: typeof thunkGetSession,
}

interface IDispatchProps {
    handleGetSession: () => ThunkAction<void, AppState, null, Action<string>>
}

class Session extends React.Component<ISessionProps> {
    public getSession = (): void => {
        this.props.handleGetSession();
    };

    public render(): JSX.Element {
        return (
          <div className='tc'>
              <h1 className='f1 fw2 tc w-100 lh-title dib'>Click button to login</h1>
              <div
                  className='pa2 f3 tc mt4 dib w-10 white grow pointer bg-green br4 shadow-5'
                  onClick={this.getSession}>
                  Login
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    session: state.session,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
    handleGetSession: () => dispatch(thunkGetSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);