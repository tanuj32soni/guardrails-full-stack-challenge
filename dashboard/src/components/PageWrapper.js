import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import Box from '@material-ui/core/Box';

const PageWrapper = ({ children, title, padded, action }) => (
  <Fragment>
    <Box display="flex" justifyContent="space-between">
      <PageTitle title={title} padded={padded} />
      {action}
    </Box>
    {children}
  </Fragment>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  padded: PropTypes.bool,
};

export default PageWrapper;
