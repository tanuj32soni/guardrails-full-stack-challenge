export const SHOW_NOTIFICATION = 'app/SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'app/HIDE_NOTIFICATION';

export const showNotification = (message, color = 'error', variant = 'caption') => ({
  type: SHOW_NOTIFICATION,
  data: {
    message,
    color,
    variant,
  },
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
