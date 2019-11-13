import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import noop from '../utils/noop';

const styles = () => ({
  clickable: {
    cursor: 'pointer',
  },
});

class ResourceTable extends Component {
  compileHeader = () => (
    <TableHead>
      <TableRow>
        {this.props.headings.map(heading => (
          <TableCell key={heading.label}>
            {heading.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  renderCell = (data, heading) => {
    if (heading.render) {
      return heading.render(data, this.props);
    }

    if (heading.format) {
      return heading.format(data[heading.key]);
    }

    return data[heading.key];
  };

  renderRow = (row) => {
    const { classes, headings, getRowId, onSelectRow } = this.props;

    return (
      <TableRow
        key={getRowId(row)}
        onClick={() => onSelectRow(row) || noop}
        className={classnames({
          [classes.clickable]: onSelectRow,
        })}
      >
        {headings.map(heading => (
          <TableCell key={row[heading.key]}>
            {this.renderCell(row, heading)}
          </TableCell>
        ))}
      </TableRow>
    );
  };

  compileBody = () => {
    const { rowData, renderRow, emptyText, error } = this.props;

    return (
      <TableBody>
        {!Boolean(rowData.length) && !Boolean(error) && (
          <Typography variant="h6" align="center">
            {emptyText}
          </Typography>
        )}
        {error}
        {rowData.map(renderRow || this.renderRow)}
      </TableBody>
    );
  };

  render() {
    const { noHeading } = this.props;

    return (
      <Paper>
        <Table>
          {!Boolean(noHeading) && this.compileHeader()}
          {this.compileBody()}
        </Table>
      </Paper>
    );
  }
}

ResourceTable.defaultProps = {
  getRowId: row => row.id || row._id,
  noHeading: false,
  emptyText: 'No records found',
};

ResourceTable.propTypes = {
  onSelectRow: PropTypes.func,
  noHeading: PropTypes.bool,
  rowData: PropTypes.array.isRequired,
  getRowId: PropTypes.func,
  renderRow: PropTypes.func,
  emptyText: PropTypes.string,
  headings: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    render: PropTypes.func,
    format: PropTypes.func,
  })).isRequired,
};

export default withStyles(styles)(ResourceTable);
