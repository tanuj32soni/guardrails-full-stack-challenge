import React from 'react';
import PropTypes from 'prop-types';
import ResourceList from '../../../components/ResourceList';

const statusToTimeKey = {
  "IN-PROGRESS": 'scanning_at',
  QUEUED: 'queued_at',
  SUCCESS: 'finished_at',
  FAILURE: 'finished_at',
};

const headings = [
  {
    key: 'repository_name',
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

const ScanResults = ({ data, onSelectScan, ...props }) => (
  <ResourceList
    rowData={data}
    headings={headings}
    onSelectRow={onSelectScan}
    {...props}
  />
);

ScanResults.propTypes = {
  onSelectRow: PropTypes.func.isRequired,
  ...ResourceList.propTypes,
};

export default ScanResults;
