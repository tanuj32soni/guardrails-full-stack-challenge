import { takeEvery, put, delay } from 'redux-saga/effects';
import { SHOW_NOTIFICATION, hideNotification } from '../actions/app.actions';

function* closeNotification() {
  yield delay(3000);
  yield put(hideNotification());
}

function* appSaga() {
  yield takeEvery(SHOW_NOTIFICATION, closeNotification);
}

export default appSaga;
