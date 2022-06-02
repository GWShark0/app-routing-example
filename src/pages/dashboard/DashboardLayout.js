import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <DashboardNavbar />
      <DashboardSidebar />
      <Box>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
