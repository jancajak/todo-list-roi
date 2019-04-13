import * as React from 'react';
import {
    Redirect,
    Route, RouteComponentProps,
    RouteProps,
} from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props) => {
    const { component: Component, ...rest } = props;

    const renderFunction = (routeProps: any) =>
        sessionStorage.getItem('sessionId') ? (
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

export default PrivateRoute;