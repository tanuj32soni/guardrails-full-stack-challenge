import React from 'react';
import PageWrapper from '../../../components/PageWrapper';
import ScanResultList from '../components/ScanResultList'

const ScanResults = () => (
  <PageWrapper title="Scan Results">
    <ScanResultList data={[]} />
  </PageWrapper>
);

export default ScanResults;
