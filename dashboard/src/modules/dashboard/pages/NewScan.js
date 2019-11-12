import React from 'react';
import Button from '@material-ui/core/Button';
import PageWrapper from '../../../components/PageWrapper';
import Link from '../../../components/Link';

const BackLink = (
  <Button variant="outlined">
    <Link to="/dashboard">BACK TO LIST</Link>
  </Button>
);

const NewScan = () => (
  <PageWrapper title="Add New Scan" action={BackLink}>
    New Scan Page
  </PageWrapper>
);

export default NewScan;
