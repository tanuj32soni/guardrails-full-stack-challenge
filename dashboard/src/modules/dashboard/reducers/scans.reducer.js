import {
  FETCH_SCANS_REQUEST,
  FETCH_SCANS_SUCCESS,
  FETCH_SCANS_FAILED,
} from '../actions/scans.actions';

const initialState = {
  data: {
    scans: [],
    page: 1,
    max_page: 0,
    total_transactions: 0,
    fetched_transactions: 10,
  },
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCANS_REQUEST: 
      return {
        ...state,
        loading: true,
      };

    case FETCH_SCANS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };

    case FETCH_SCANS_FAILED:
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
