import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme();

function ModeToggle() {
  const [mode, setMode] = React.useState('system');
  
  const handleChange = (event) => {
    setMode(event.target.value);
  };

}

export default function LoginFinal() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', 
          backgroundColor: '#f5f5f5', 
        }}
      >
        <Box
          sx={{
            width: 300,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 1,
            boxShadow: 3,
            backgroundColor: 'white',
          }}
          component={Paper}
        >
          <ModeToggle />
          <div>
            <Typography variant="h4" component="h1" gutterBottom>
              <b>Welcome!</b>
            </Typography>
            <Typography variant="body2">Sign in to continue.</Typography>
          </div>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Log in
          </Button>
          <Typography
            sx={{ fontSize: 'sm', alignSelf: 'center', mt: 2 }}
          >
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
