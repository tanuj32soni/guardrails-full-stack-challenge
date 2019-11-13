import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { fetchScanById } from '../actions/scan.actions';
import PageWrapper from '../../../components/PageWrapper';
import BackToDashboardLink from '../components/BackToDashboardLink';
import Finding from '../components/Finding';


class ScanDetails extends Component {
  componentDidMount() {
    const { fetchScanById, match } = this.props;
    fetchScanById(match.params.scanId);
  }

  render() {
    const { scan, loading } = this.props;

    return (
      <PageWrapper
        title="Scan Results"
        action={<BackToDashboardLink />}
      >
        <Typography variant="h6">
          Repository: {loading ?  'loading...' : Boolean(scan) && scan.repository_name}
        </Typography>
        <Typography variant="h6">
          Findings: 
        </Typography>
        {(Boolean(scan) && scan.findings) && (
          scan.findings.map((finding, index) => <Finding key={index} {...finding} />)
        )}        
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  scan: state.dashboard.scan.data,
  loading: state.dashboard.scan.loading,
});

const mapDispatchToProps = {
  fetchScanById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScanDetails);
