import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { CREATE_SCAN_SUCCESS, CREATE_SCAN_FAILED } from '../actions/scans.actions';
import { showNotification } from '../../../actions/app.actions';

function* createScanFailed(action) {
  yield put(showNotification(action.payload.reason));
}

function* createScanSuccess() {
  yield put(showNotification('Scan submitted'));
  yield put(push('/dashboard'));
}

function* scanSaga() {
  yield takeEvery(CREATE_SCAN_FAILED, createScanFailed);
  yield takeEvery(CREATE_SCAN_SUCCESS, createScanSuccess);
}

export default scanSaga;
