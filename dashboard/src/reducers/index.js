import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import dashboard from '../modules/dashboard/reducers/dashboard.reducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  dashboard,
});

export default createRootReducer;
