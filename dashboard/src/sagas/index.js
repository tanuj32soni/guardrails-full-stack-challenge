import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/configureStore';
import appSaga from './app.saga';

function* rootSaga() {
  yield fork(appSaga);
}

const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default runSaga;
