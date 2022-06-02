import { Box } from '@mui/material';
import Export from './Export';
import ExportNavbar from './ExportNavbar';

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
      <Export />
    </Box>
  );
}
