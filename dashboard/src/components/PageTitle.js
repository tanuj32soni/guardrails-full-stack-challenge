import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const PageTitle = ({ title }) => (
  <Typography variant="h5">
    {title}
  </Typography>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
