import { Box, CircularProgress, Typography } from '@mui/material';

export default function Stage(props) {
  const { loading = false } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 800,
        aspectRatio: '16 / 9',
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: (theme) => theme.palette.common.black,
        color: (theme) => theme.palette.common.white,
        textTransform: 'uppercase',
        userSelect: 'none',
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="h4">Stage</Typography>
      )}
    </Box>
  );
}
