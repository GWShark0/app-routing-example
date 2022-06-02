import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { ReactComponent as LogoImage } from '../assets/logo.svg';

const Logo = styled(LogoImage)(({ theme }) => ({ height: theme.spacing(4) }));

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <IconButton color="primary" aria-label="help">
            <HelpIcon />
          </IconButton>
          <IconButton color="primary" aria-label="account">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="primary" aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
