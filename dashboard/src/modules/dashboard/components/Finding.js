import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Finding = ({
  type,
  ruleId,
  location,
  metadata,
}) => (
  <Box m={2} p={2} bgcolor="#efefef" borderRadius={4}>
    <Typography variant="body1">
      Type: {type}
    </Typography>
    <Typography variant="body1">
      Rule Id: {ruleId}
    </Typography>
    <Box paddingLeft={4} marginTop={1}>
      <Typography variant="subtitle2">Location</Typography>
      <Typography variant="body2">Path: {location.path}</Typography>
      <Typography variant="body2">Begin Position: {location.positions.begin.line}</Typography>
    </Box>
    <Box paddingLeft={4} marginTop={1}>
      <Typography variant="subtitle2">Metadata</Typography>
      <Typography variant="body2">Description: {metadata.description}</Typography>
      <Typography variant="body2">Severity: {metadata.severity}</Typography>
    </Box>
  </Box>
);

Finding.propTypes = {
  type: PropTypes.string.isRequired,
  ruleId: PropTypes.string.isRequired,
  location: PropTypes.shape({
    path: PropTypes.string.isRequired,
    positions: PropTypes.shape({
      begin: PropTypes.shape({
        line: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  metadata: PropTypes.shape({
    description: PropTypes.number.isRequired,
    severity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Finding;
