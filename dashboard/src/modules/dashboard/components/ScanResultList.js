import React from 'react';
import ResourceList from '../../../components/ResourceList';

const statusToTimeKey = {
  IN_PROGRESS: 'scanningAt',
  QUEUED: 'queuedAt',
  SUCCESS: 'finishedAt',
  FAILURE: 'finishedAt',
};

const headings = [
  {
    key: 'repositoryName',
    label: 'Repository',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: '-',
    label: 'Last Updated',
    render: rowData => rowData[statusToTimeKey[rowData.status]],
  },
  {
    key: 'findings',
    label: 'Findings',
    format: findings => findings.length,
  },
];

const ScanResults = ({ data }) => (
  <ResourceList
    rowData={data}
    headings={headings}
  />
);

export default ScanResults;
