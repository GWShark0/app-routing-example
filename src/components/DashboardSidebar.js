import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { alpha } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PaletteIcon from '@mui/icons-material/Palette';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;

const links = [
  {
    text: 'Home',
    icon: HomeIcon,
    path: '/',
  },
  {
    text: 'Projects',
    icon: VideocamIcon,
    path: '/projects',
  },
  {
    text: 'Templates',
    icon: VideoLibraryIcon,
    path: '/templates',
  },
  {
    text: 'Brands',
    icon: PaletteIcon,
    path: '/brands',
  },
];

export default function DashboardSidebar() {
  const activeStyle = {
    backgroundColor: alpha('#7f57f1', 0.2),
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ padding: (theme) => theme.spacing(3, 2, 2) }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          disableElevation
          component={Link}
          to="/edit"
        >
          New Project
        </Button>
      </Box>
      <List>
        {links.map((link) => {
          const { text, icon: Icon, path } = link;
          return (
            <ListItem disablePadding key={text}>
              <ListItemButton
                component={NavLink}
                to={path}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
