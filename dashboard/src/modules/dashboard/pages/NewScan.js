import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PageWrapper from '../../../components/PageWrapper';
import Link from '../../../components/Link';
import NewScanForm from '../components/NewScanForm';
import { createScan } from '../actions/scans.actions';

const BackLink = (
  <Button variant="outlined">
    <Link to="/dashboard">BACK TO LIST</Link>
  </Button>
);

const NewScan = ({ createScan }) => (
  <PageWrapper title="Add New Scan" action={BackLink}>
    <NewScanForm onSubmit={createScan} />
  </PageWrapper>
);

const mapDispatchToProps = {
  createScan,
};

export default connect(
  null,
  mapDispatchToProps,
)(NewScan);
