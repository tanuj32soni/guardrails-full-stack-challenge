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
    this.props.fetchScans();
  }

  onSelectScan = scan => {
    this.props.history.push(`/dashboard/scans/${scan.id}`);
  };

  render() {
    const { scans } = this.props;
    return (
      <PageWrapper title="Scan Results" action={NewScanLink}>
        <ScanResultList data={scans} onSelectScan={this.onSelectScan} />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    scans: state.dashboard.scans.data.scans,
    page: state.dashboard.scans.data.page,
    maxPage: state.dashboard.scans.data.max_page,
  }
};

const mapDispatchToProps = {
  fetchScans,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScanResults);
