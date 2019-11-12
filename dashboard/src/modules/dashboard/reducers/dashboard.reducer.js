import { combineReducers } from 'redux';
import scans from './scans.reducer';

const dashboardReducer = combineReducers({
  scans,
});

export default dashboardReducer;
