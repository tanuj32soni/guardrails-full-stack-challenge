import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Desktop from '@material-ui/icons/DesktopMac';

const App = () => (
  <Box display="flex">
    <Desktop fontSize="large" /> 
    <Typography variant="h5">
      React SPA
    </Typography>
  </Box>
);

export default App;
