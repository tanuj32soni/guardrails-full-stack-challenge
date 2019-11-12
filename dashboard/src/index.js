import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { configureStore, history } from './store/configureStore';
import routes from './routes';
import runSaga from './sagas';
import * as serviceWorker from './serviceWorker';
import AppContainer from './containers/AppContainer';

const store = configureStore();
runSaga();

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          {routes}
        </AppContainer>
      </ConnectedRouter>
    </Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
