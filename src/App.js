import {
  createTheme,
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import DashboardLayout from 'pages/dashboard/DashboardLayout';
import BrandsPage from 'pages/dashboard/pages/BrandsPage';
import HomePage from 'pages/dashboard/pages/HomePage';
import ProjectsPage from 'pages/dashboard/pages/ProjectsPage';
import TemplatesPage from 'pages/dashboard/pages/TemplatesPage';
import EditorLayout from 'pages/editor/EditorLayout';
import ExportLayout from 'pages/export/ExportLayout';
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
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="brands" element={<BrandsPage />} />
          </Route>
          <Route path="/edit" element={<EditorLayout />} />
          <Route path="/export" element={<ExportLayout />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
