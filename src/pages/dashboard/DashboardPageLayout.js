import { Box, Typography } from '@mui/material';

export default function DashboardPageLayout(props) {
  const { children, title } = props;
  return (
    <Box component="main" sx={{ p: 4 }}>
      <Typography component="h1" variant="h3" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
