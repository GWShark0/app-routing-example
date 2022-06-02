import { AppBar, Box, Button, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import NavbarMenu from 'components/NavbarMenu';

export default function ExportNavbar() {
  return (
    <AppBar
      position="static"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box sx={{ pr: 2 }}>
          <Button component={Link} startIcon={<ChevronLeftIcon />} to="/edit">
            Back To Editor
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Logo icon />
        </Box>
        <NavbarMenu />
      </Toolbar>
    </AppBar>
  );
}
