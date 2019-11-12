import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScanResults from './pages/ScanResults';

const DashboardRoutes = props => {
  const basePath = props.match.path;
  return (
    <Switch>
      <Route path={basePath} exact component={ScanResults} />
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
