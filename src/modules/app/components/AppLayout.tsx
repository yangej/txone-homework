import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppSider from './AppSider';

const AppLayout = () => {
  return (
    <Box display="flex">
      <AppHeader />
      <AppSider />
      <Box
        component="main"
        className="w-full min-h-screen px-10 py-42px bg-neutral-50"
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
