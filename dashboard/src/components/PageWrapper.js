import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';

const PageWrapper = ({ children, title, padded }) => (
  <Fragment>
    <PageTitle title={title} padded={padded} />
    {children}
  </Fragment>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  padded: PropTypes.bool,
};

export default PageWrapper;
