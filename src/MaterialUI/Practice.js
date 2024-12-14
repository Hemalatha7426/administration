// import { Toolbar, Typography,AppBar } from '@mui/material'
// import React from 'react'
// import styled from 'styled-components'
// const Practice = () => {
//     const hello =styled(AppBar)`
//     color:red !important;
//     background-color:yellow !important;
//     `;
//   return (
//     <div>
//       <hello>
//         <Toolbar>
//             <Typography>
//               Hello
//             </Typography>
//         </Toolbar>
//       </hello>
//     </div>
//   )
// }

// export default Practice
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Email and Password' }];
// preview-end

const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      alert(
        `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
      );
      resolve();
    }, 300);
  });
  return promise;
};
export default function Practice() {
    const theme = useTheme();
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'green'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGIN PAGE
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers}/>
    </AppProvider>
  </>
  );
}


