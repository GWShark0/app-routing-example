import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import EditorLayout from './components/EditorLayout';
import ExportLayout from './components/ExportLayout';

import Page from './components/Page';
import { getDesignTokens } from './theme';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = prefersDarkMode ? 'dark' : 'light';

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Page title="Home" />} />
            <Route path="projects" element={<Page title="Projects" />} />
            <Route path="templates" element={<Page title="Templates" />} />
            <Route path="brands" element={<Page title="Brands" />} />
          </Route>
          <Route path="/edit" element={<EditorLayout />} />
          <Route path="/export" element={<ExportLayout />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
