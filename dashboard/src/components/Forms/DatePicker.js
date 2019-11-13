import React from 'react';
import { DateTimePicker } from '@material-ui/pickers';
import { Field } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const renderDatePicker = ({
  input,
  minDate,
  label,
  meta: { touched, error } }) => {
  const dateErrorMessage = input.value ? "Invalid date format" : "";
  return (
    <Box>
      <DateTimePicker
        {...input}
        value={input.value}
        autoOk
        minDate={minDate}
        ampm={false}
        label={label}
        format="yyyy/MM/dd HH:mm"
        invalidDateMessage={dateErrorMessage}
        error={touched && error} />
      {touched && error && <Typography component="div" variant="caption">{error}</Typography>}
    </Box>
  );
};

const DatePicker = ({ name, label }) => (
  <Field
    name={name}
    component={renderDatePicker}
    label={label}
  />
);

export default DatePicker;
