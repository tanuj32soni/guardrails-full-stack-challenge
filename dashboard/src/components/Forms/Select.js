import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormField } from 'redux-form'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
  <FormControl className="control" style={{ width: '100%' }}>
    <InputLabel className="label">{label}</InputLabel>
    <Select {...input}>
      {children}
    </Select>
    {(touched && error) && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

const Field = ({ options, ...props }) => (
  <FormField {...props}>
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </FormField>
);

Field.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  autoWidth: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Field.defaultProps = {
  variant: 'outlined',
  component: renderSelectField,
};

export default Field;
