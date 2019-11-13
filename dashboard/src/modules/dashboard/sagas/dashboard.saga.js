import { fork } from 'redux-saga/effects';
import scanSaga from './scan.saga';

function* dashboardSaga() {
  yield fork(scanSaga);
}

export default dashboardSaga;
