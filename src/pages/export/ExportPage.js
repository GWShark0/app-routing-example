import { Box, Container, Grid, Typography } from '@mui/material';

import Stage from 'components/Stage';

export default function ExportPage() {
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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4">Exporting...</Typography>
          </Grid>
          <Grid item xs={6}>
            <Stage loading />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
