import { combineReducers } from 'redux';
import scans from './scans.reducer';
import scan from './scan.reducer';

const dashboardReducer = combineReducers({
  scan,
  scans,
});

export default dashboardReducer;
