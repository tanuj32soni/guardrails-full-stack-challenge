import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
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

const ScanResults = ({
  data,
  onSelectScan,
  total,
  fetchScans,
  ...props
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
    fetchScans(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(e.target.value);
    fetchScans(page, e.target.value);
  };

  return (
    <Fragment>
      <ResourceList
        rowData={data}
        headings={headings}
        onSelectRow={onSelectScan}
        {...props}
      />
      <TablePagination
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Fragment>
  );
};

ScanResults.propTypes = {
  onSelectRow: PropTypes.func.isRequired,
  ...ResourceList.propTypes,
};

export default ScanResults;
