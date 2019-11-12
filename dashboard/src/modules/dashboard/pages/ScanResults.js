import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../../components/PageWrapper';
import ScanResultList from '../components/ScanResultList'
import { fetchScans } from '../actions/scans.actions';

class ScanResults extends Component {
  componentDidMount() {
    this.props.fetchScans();
  }

  render() {
    const { scans } = this.props;
    return (
      <PageWrapper title="Scan Results">
        <ScanResultList data={scans} />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
  scans: state.dashboard.scans.data.scans,
  page: state.dashboard.scans.data.page,
  maxPage: state.dashboard.scans.data.max_page,
}};

const mapDispatchToProps = {
  fetchScans,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScanResults);
