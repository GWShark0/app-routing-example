import { Box } from '@mui/material';

import Stage from './Stage';

export default function Editor() {
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
