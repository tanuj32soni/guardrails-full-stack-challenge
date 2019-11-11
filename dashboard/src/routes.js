import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import App from './App';

const routes = (
  <Switch>
    <Route path="/" component={App} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default routes;
