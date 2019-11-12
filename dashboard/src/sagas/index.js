import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/configureStore';
import appSaga from './app.saga';
import apiSaga from './api.saga';

function* rootSaga() {
  yield fork(appSaga);
  yield fork(apiSaga);
}

const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
