import * as React from 'react';
import { connect } from 'react-redux';
import {
    Redirect,
    Route, RouteComponentProps,
    RouteProps,
} from 'react-router-dom';
import {AppState} from './store/store';

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    isSigned: boolean;
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props) => {
    const { component: Component, isSigned, ...rest } = props;

    const renderFunction = (routeProps: any) =>
        isSigned ? (
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
   isSigned: state.session.isSigned
});

export default connect(mapStateToProps)(PrivateRoute);