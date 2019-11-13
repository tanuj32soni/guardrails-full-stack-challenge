import React from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../../components/PageWrapper';
import NewScanForm from '../components/NewScanForm';
import { createScan } from '../actions/scans.actions';
import BackToDashboardLink from '../components/BackToDashboardLink';

const NewScan = ({ createScan }) => (
  <PageWrapper
    title="Add New Scan"
    action={<BackToDashboardLink />}
  >
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
