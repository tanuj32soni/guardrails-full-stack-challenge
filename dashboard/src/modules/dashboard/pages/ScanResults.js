import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ScanResultList from '../components/ScanResultList'
import { fetchScans } from '../actions/scans.actions';
import PageWrapper from '../../../components/PageWrapper';
import Link from '../../../components/Link';

const NewScanLink = (
  <Button variant="outlined">
    <Link to="/dashboard/new">ADD NEW SCAN</Link>
  </Button>
);

class ScanResults extends Component {
  componentDidMount() {
    const { fetchScans, page, rowsPerPage } = this.props;
    fetchScans(page, rowsPerPage);
  }

  onSelectScan = scan => {
    this.props.history.push(`/dashboard/scans/${scan.id}`);
  };

  render() {
    const { scans, total, fetchScans } = this.props;
    return (
      <PageWrapper title="Scan Results" action={NewScanLink}>
        <ScanResultList
          data={scans}
          total={total}
          fetchScans={fetchScans}
          onSelectScan={this.onSelectScan}
        />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    scans: state.dashboard.scans.data.scans,
    page: state.dashboard.scans.data.page,
    maxPage: state.dashboard.scans.data.max_page,
    total: state.dashboard.scans.data.total_transactions,
    rowsPerPage: state.dashboard.scans.data.fetched_transactions,
  }
};

const mapDispatchToProps = {
  fetchScans,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScanResults);
