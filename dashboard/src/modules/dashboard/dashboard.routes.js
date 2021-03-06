import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScanResults from './pages/ScanResults';
import NewScan from './pages/NewScan';
import ScanDetails from './pages/ScanDetails';

const DashboardRoutes = props => {
  const basePath = props.match.path;
  return (
    <Switch>
      <Route path={basePath} exact component={ScanResults} />
      <Route path={`${basePath}/new`} exact component={NewScan} />
      <Route path={`${basePath}/scans/:scanId`} component={ScanDetails} />
      <Redirect from={`${basePath}/*`} to={`${basePath}`} />
    </Switch>
  );
};

DashboardRoutes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardRoutes;
