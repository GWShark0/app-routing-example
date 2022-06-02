import { IconButton, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavbarMenu() {
  return (
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
  );
}
