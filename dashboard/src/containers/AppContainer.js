import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppContainer = ({ children }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Security Scan Recorder
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      {children}
    </Container>
  </Fragment>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
