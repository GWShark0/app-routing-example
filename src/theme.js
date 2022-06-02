export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#7f57f1',
    },
    secondary: {
      main: '#19857b',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: 'fixed',
        color: 'inherit',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
