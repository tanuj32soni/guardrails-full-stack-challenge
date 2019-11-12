import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '@material-ui/core/Box';
import withStyles from "@material-ui/core/styles/withStyles";
import PageTitle from './PageTitle';

const styles = theme => ({
  paddedTitle: {
    padding: theme.spacing(1, 0),
  },
});

const PageWrapper = ({ classes, children, title, padded, action }) => (
  <Fragment>
    <Box
      display="flex"
      justifyContent="space-between"
      className={classnames({
        [classes.paddedTitle]: padded,
      })}
    >
      <PageTitle title={title} />
      {action}
    </Box>
    {children}
  </Fragment>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  padded: PropTypes.bool,
  classes: PropTypes.object,
  action: PropTypes.node,
};

PageWrapper.defaultProps = {
  padded: true,
};

export default withStyles(styles)(PageWrapper);
