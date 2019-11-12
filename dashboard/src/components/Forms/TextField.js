import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormField } from 'redux-form'
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...props
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...props}
  />
);

const Field = props => (
  <FormField
    autoComplete={props.name}
    {...props}
  />
);

Field.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  fullWidth: PropTypes.bool,
};

Field.defaultProps = {
  type: 'text',
  variant: 'outlined',
  margin: 'normal',
  fullWidth: true,
  component: renderTextField,
};

export default Field;
