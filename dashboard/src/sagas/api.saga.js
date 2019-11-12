import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { CALL_API } from '../actions/api.actions';
import config from '../config';

console.log(config.getProperties())

const getHeaders = () => {
  const headers = {
    Accept: 'application/json',
  };

  return headers;
};

const identifyErrors = (status, body) => {
  if (status < 200 || status > 400) {
    throw new Error('Failed to fetch response from server');
  }

  if (body.error || body.errors) {
    throw new Error(body.error || body.errors);
  }
}

export function* apiSaga(action) {
  const [request, success, failure] = action.types;
  const requestUrl = `${config.get('server.baseUrl')}${action.endPoint}`;

  const requestBody = action.body || {};
  const requestConfig = {
    headers: getHeaders(),
  };

  yield put({ type: request, body: requestBody });

  const args = ['get', 'delete'].includes(action.method)
    ? [requestUrl, requestConfig]
    : [requestUrl, requestBody, requestConfig];

  try {
    const response = yield axios[action.method](...args);
    yield identifyErrors(response.status, response.data);
    const responseData = response.data.data || response.data;
    yield put({ type: success, data: responseData });
  } catch (error) {
    if (error.response && error.response.data) {
      yield put({ type: failure, payload: error.response.data });
    } else {
      yield put({ type: failure, payload: error });
    }
  }
}

export default function*() {
  yield takeEvery(CALL_API, apiSaga);
}
