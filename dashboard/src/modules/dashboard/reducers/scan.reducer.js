import {
  FETCH_SCAN_REQUEST,
  FETCH_SCAN_SUCCESS,
  FETCH_SCAN_FAILED,
} from '../actions/scan.actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCAN_REQUEST: 
      return {
        ...state,
        loading: true,
      };

    case FETCH_SCAN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };

    case FETCH_SCAN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: initialState.data,
      };

    default:
      return state;
  }
}
