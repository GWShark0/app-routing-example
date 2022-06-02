import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import NavbarMenu from 'components/NavbarMenu';

export default function EditorNavbar() {
  return (
    <AppBar
      position="static"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Logo icon to="/" />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ pr: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/export"
          >
            Export
          </Button>
        </Box>
        <NavbarMenu />
      </Toolbar>
    </AppBar>
  );
}
