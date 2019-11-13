import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/configureStore';
import appSaga from './app.saga';
import apiSaga from './api.saga';
import dashboardSaga from '../modules/dashboard/sagas/dashboard.saga';

function* rootSaga() {
  yield fork(appSaga);
  yield fork(apiSaga);
  yield fork(dashboardSaga);
}

const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
