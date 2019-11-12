import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageWrapper from '../../../components/PageWrapper';
import { Link as RouterLink } from 'react-router-dom';
import Link from '../../../components/Form/Link';
import Button from '@material-ui/core/Button';
import ScanResultList from '../components/ScanResultList'
import { fetchScans } from '../actions/scans.actions';

const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const newScanLink = <Button>
  <Link
    text="ADD SCAN"
    underline="none"
    to="/dashboard/new"
    component={Link1} />
</Button>

class ScanResults extends Component {
  componentDidMount() {
    this.props.fetchScans();
  }

  render() {
    const { scans } = this.props;
    return (
      <PageWrapper title="Scan Results" action={newScanLink}>
        <ScanResultList data={scans} />
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
