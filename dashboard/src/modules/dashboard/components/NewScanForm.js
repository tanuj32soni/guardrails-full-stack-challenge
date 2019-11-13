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

const validate = values => {
  const errors = {};
  const requiredFields = [
    'repository_name',
    'status',
    'queued_at',
    'scanning_at',
    'finished_at'
  ];

  // Check for required fields
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values['repository_name'] && values['repository_name'].replace(/\s/g, "") == "") {
    errors['repository_name'] = "Repository name can't be blank";
  }
  if (values['queued_at'] && values['scanning_at'] && (new Date(values['queued_at']) > new Date(values['scanning_at']))) {
    errors['scanning_at'] = "Error: Can't be scanned before it is queued";
  }
  if (values['scanning_at'] && values['finished_at'] && (new Date(values['scanning_at']) > new Date(values['finished_at']))) {
    errors['finished_at'] = "Error: Can't be finished before it is scanned";
  }

  return errors;
};

export default reduxForm({
  form: 'newScanForm',
  validate
})(NewScanForm);
