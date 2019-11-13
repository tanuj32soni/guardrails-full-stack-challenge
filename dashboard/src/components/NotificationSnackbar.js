import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const NotificationsSnackbar = ({ isOpen, message, color, variant }) => (
  <Snackbar
    open={isOpen}
    TransitionComponent={Fade}
    message={<Typography color={color} variant={variant} >{message}</Typography>}
  />
);

const mapStateToProps = state => ({
  isOpen: state.app.notification.isOpen,
  message: state.app.notification.message,
  color: state.app.notification.color,
  variant: state.app.notification.variant,
});

NotificationsSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(NotificationsSnackbar);
