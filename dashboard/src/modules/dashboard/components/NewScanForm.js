import React from 'react';
import { reduxForm, Form } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '../../../components/Forms/TextField';
import Select from '../../../components/Forms/Select';
import DatePicker from '../../../components/Forms/DatePicker';
import SubmitButton from '../../../components/Forms/SubmitButton';
import FormActionButton from '../../../components/Forms/FormActionButton';
import FieldArray from '../../../components/Forms/FieldArray';

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

const findingFields = [
  {
    name: 'type',
    label: 'Type',
    type: 'text',
  },
  {
    name: 'ruleId',
    label: 'Rule Id',
    type: 'text',
  },
  {
    name: 'location.path',
    label: 'Location Path',
    type: 'text',
  },
  {
    name: 'location.positions.begin.line',
    label: 'Begin position',
    type: 'text',
  },
  {
    name: 'metadata.description',
    label: 'Description',
    type: 'text',
  },
  {
    name: 'metadata.severity',
    label: 'Severity',
    type: 'text',
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
        <DatePicker label="Scanning At" name="scanning_at" />
        <DatePicker label="Finished At" name="finished_at" />
      </Box>
      <FieldArray
        name="findings"
        label="Finding"
        addButtonText="Add finding"
        removeButtonText="Remove"
        fields={findingFields}
      />
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
