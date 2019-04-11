import * as React from 'react';
import { connect } from 'react-redux';
import {
    Redirect,
    Route, RouteComponentProps,
    RouteProps,
} from 'react-router-dom';
import {IResponseSession} from './containers/Session/types';
import {AppState} from './store/store';

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    session: IResponseSession;
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props) => {
    const { component: Component, session, ...rest } = props;

    const renderFunction = (routeProps: any) =>
        session.sessionId ? (
            <Component {...routeProps} />
        ) : (
            <Redirect
                to={{
                    pathname: '/',
                    state: { from: routeProps.location }
                }}
            />
        );

    return (
        <Route
            {...rest}
            render={renderFunction}
        />
    );
};

const mapStateToProps = (state: AppState) => ({
   session: state.session
});

export default connect(mapStateToProps)(PrivateRoute);