import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import dashboard from '../modules/dashboard/reducers/dashboard.reducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  dashboard,
});

export default createRootReducer;
