import React from 'react';
import FormActionButton from './FormActionButton';

const SubmitButton = props => (
  <FormActionButton {...props} />
);

SubmitButton.propTypes = {
  ...FormActionButton.propTypes
};

SubmitButton.defaultProps = {
  type: 'submit',
  buttonText: 'Submit',
};

export default SubmitButton;
