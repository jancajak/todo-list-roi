import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import App from './containers/App/App';
import Session from './containers/Session/Session';
import history from './history';
import './index.css';
import PrivateRoute from './PrivateRoute';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';


const store = configureStore();

ReactDOM.render(
      <Provider store={store}>
          <Router history={history}>
              <Route exact={true} path='/' component={Session}/>
              <PrivateRoute path='/app' component={App}/>
          </Router>
      </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
