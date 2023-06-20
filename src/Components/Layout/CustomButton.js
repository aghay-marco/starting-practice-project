import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomizedBadges from './CustomizedBadges'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#fff',
    },
  },
});

export default function CustomButton(props) {


  return (
    <Stack direction="row" spacing={1}>
      <ThemeProvider theme={theme}>
        <Button onClick={props.onShowModal} style={{ backgroundColor: "#4d1601", borderRadius: 30, padding:10 }}  variant="secondary" endIcon={<CustomizedBadges />}>
          Your Cart
        </Button>
      </ThemeProvider>
    </Stack>
  );
}
