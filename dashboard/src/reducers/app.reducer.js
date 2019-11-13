import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../actions/app.actions';

const initialState = {
  notification: {
    color: 'inherit',
    variant: 'caption',
    message: '',
    isOpen: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          isOpen: true,
          ...action.data,
        },
      };

    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: initialState.notification,
      };

    default:
      return state;
  }
}
