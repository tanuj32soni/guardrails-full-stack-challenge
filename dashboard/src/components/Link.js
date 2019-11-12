import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';

const LinkComponent = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Link = props => (
  <MaterialLink
    component={LinkComponent}
    underline="none"
    {...props}
  />
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
