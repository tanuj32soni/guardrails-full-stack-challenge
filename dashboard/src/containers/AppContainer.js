import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";;

const styles = () => ({
  container: {
    minHeight: 'calc(100% - 64px)',
  },
});

const AppContainer = ({ children, classes }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Security Scan Recorder
        </Typography>
      </Toolbar>
    </AppBar>
    <Container className={classes.container}>
      {children}
    </Container>
  </Fragment>
);

AppContainer.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(AppContainer);
