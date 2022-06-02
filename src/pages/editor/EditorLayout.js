import { Box } from '@mui/material';

import EditorNavbar from './EditorNavbar';
import EditorPage from './EditorPage';

export default function EditorLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <EditorNavbar />
      <EditorPage />
    </Box>
  );
}
