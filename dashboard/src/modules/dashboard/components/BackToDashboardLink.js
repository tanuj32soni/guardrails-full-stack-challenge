import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '../../../components/Link';

const BackToDashboardLink = () => (
  <Button variant="outlined">
    <Link to="/dashboard">BACK TO DASHBOARD</Link>
  </Button>
);

export default BackToDashboardLink;
