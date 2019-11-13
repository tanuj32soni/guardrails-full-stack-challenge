import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import dashboard from '../modules/dashboard/reducers/dashboard.reducer';
import app from './app.reducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  dashboard,
  app,
});

export default createRootReducer;
