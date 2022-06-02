import { Box } from '@mui/material';

import Stage from 'components/Stage';

export default function EditorPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        p: 4,
      }}
    >
      <Stage />
    </Box>
  );
}
