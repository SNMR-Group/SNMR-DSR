import React from 'react';
import { 
  Box,
  Typography,
  useTheme
} from '@mui/material';



const DashBoard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      {/* Dashboard Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight={600}>
          Dashboard
        </Typography>
      </Box>

    </Box>
  );
};

export default DashBoard;