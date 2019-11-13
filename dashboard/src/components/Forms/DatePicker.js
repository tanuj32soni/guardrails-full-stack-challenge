import React from 'react';
import { DateTimePicker } from '@material-ui/pickers';
import { Field } from 'redux-form';

const renderDatePicker = (
  { input, minDate, label, meta: { touched, error } }
) => {
  return <DateTimePicker
    {...input}
    value={input.value || Date.now()}
    autoOk
    minDate={minDate}
    ampm={false}
    label={label}
    errorText={touched && error} />
};

const DatePicker = ({ name, label }) => (
  <Field
    name={name}
    component={renderDatePicker}
    label={label}
  />
);

export default DatePicker;
