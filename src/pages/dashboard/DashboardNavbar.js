import { AppBar, Box, Toolbar } from '@mui/material';

import Logo from 'components/Logo';
import NavbarMenu from 'components/NavbarMenu';

export default function DashboardNavbar() {
  return (
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <NavbarMenu />
      </Toolbar>
    </AppBar>
  );
}
