import { Box } from '@mui/material';

import Editor from './Editor';
import EditorNavbar from './EditorNavbar';

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
      <Editor />
    </Box>
  );
}
