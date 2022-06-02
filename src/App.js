import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Page from './components/Page';
import Sidebar from './components/Sidebar';
import { getDesignTokens } from './theme';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'dark' : 'light';

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Page title="Home" />} />
          <Route path="projects" element={<Page title="Projects" />} />
          <Route path="templates" element={<Page title="Templates" />} />
          <Route path="brands" element={<Page title="Brands" />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
