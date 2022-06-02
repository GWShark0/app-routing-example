import { Box } from '@mui/material';

import ExportNavbar from './ExportNavbar';
import ExportPage from './ExportPage';

export default function ExportLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <ExportNavbar />
      <ExportPage />
    </Box>
  );
}
