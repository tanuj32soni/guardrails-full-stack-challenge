import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";;

const styles = theme => ({
  paddedTitle: {
    paddingTop: theme.spacing(1),
  },
});

const PageTitle = ({ title, padded, classes }) => (
  <Typography variant="h5" className={classnames({
    [classes.paddedTitle]: padded,
  })}>
    {title}
  </Typography>
);

PageTitle.propTypes = {
  classes: PropTypes.object,
  padded: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

PageTitle.defaultProps = {
  padded: true,
};

export default withStyles(styles)(PageTitle);
