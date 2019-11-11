import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Dashboard from './modules/dashboard/dashboard.routes';

const routes = (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Redirect from="*" to="/dashboard" />
  </Switch>
);

export default routes;
