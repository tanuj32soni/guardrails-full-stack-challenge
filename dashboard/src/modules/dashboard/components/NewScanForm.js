import React from 'react';
import { reduxForm, Form } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '../../../components/Forms/TextField';
import Select from '../../../components/Forms/Select';
import DatePicker from '../../../components/Forms/DatePicker';
import SubmitButton from '../../../components/Forms/SubmitButton';
import FormActionButton from '../../../components/Forms/FormActionButton';

const statusOptions = [
  {
    value: 'QUEUED',
    label: 'Queued',
  },
  {
    value: 'IN-PROGRESS',
    label: 'In Progress',
  },
  {
    value: 'SUCCESS',
    label: 'Success',
  },
  {
    value: 'FAILURE',
    label: 'Failure',
  },
];

const NewScanForm = ({
  reset,
  pristine,
  submitting,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Box component={Paper} p={2}>
      <TextField label="Repository Name" name="repository_name" />
      <Select label="Status" name="status" options={statusOptions} />
      <Box display="flex" justifyContent="space-between" marginY={2}>
        <DatePicker label="Queued At" name="queued_at" />
        <DatePicker label="Scanned At" name="scanned_at" />
        <DatePicker label="Finished At" name="finished_at" />
      </Box>
      <Box display="flex" justifyContent="space-between" marginY={2}>
        <SubmitButton
          buttonText="Create Scan"
          pristine={pristine}
          submitting={submitting}
          />
        <FormActionButton
          buttonText="Reset"
          pristine={pristine}
          submitting={submitting}
          onClick={reset}
        />
      </Box>
    </Box>
  </Form>
);

export default reduxForm({
  form: 'newScanForm',
})(NewScanForm);