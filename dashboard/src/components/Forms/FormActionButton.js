import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const FormActionButton = ({ buttonText, pristine, submitting, ...props }) => (
  <Button
    variant=""
    disabled={pristine || submitting}
    {...props}
  >
    {buttonText}
  </Button>
);

FormActionButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  variant: PropTypes.oneOf([
    'contained',
    'outlined',
    'text',
  ]),
};

FormActionButton.defaultProps = {
  variant: 'outlined',
};

export default FormActionButton;
