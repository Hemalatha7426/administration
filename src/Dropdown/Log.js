// import { Button } from '@mui/material';
// import React, { useState } from 'react';

// const Log = () => {
//   const validEmail = "hema2006@gmail.com";
//   const validPassword="12345"  // Predefined valid email
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   const [emailError, setEmailError] = useState(false);
//   const [passError, setPassError] = useState(false);

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePass = (e) => {
//     setPass(e.target.value);
//   };

//   const handleSubmit = () => {
//     setEmailError(false);
//     setPassError(false);

//     // Check if email matches the valid email
//     if (email !== validEmail) {
//       setEmailError(true);
//     }

//     // Password validation: minimum 8 characters
//     if (pass!==validPassword) {
//       setPassError(true);
//     }

//     // If both validations pass, log in the user
//     if (email === validEmail && pass.length >= 8) {
//       alert(`Login successful!\nEmail: ${email}, Password: ${pass}`);
//     } else if (email === '' && pass === '') {
//       alert("!...Form is empty...!");
//     }
//   };

//   return (
//     <center>
//       <div>
//         <h1>LOGIN</h1>
//         <label>Email:</label>
//         <input
//           type="email"
//           onChange={handleEmail}
//           value={email}
//           name="email"
//           placeholder="Email"
//           required
//         />
//         <br />
//         <br />
//         {emailError && <p style={{ color: 'red' }}>Email is Invalid❌</p>}
        
//         <label>Password:</label>
//         <input
//           type="password"
//           onChange={handlePass}
//           value={pass}
//           name="password"
//           placeholder="Password"
//           required
//         />
//         <br />
//         <br />
//         {passError && <p style={{ color: 'red' }}>Password should be at least 8 characters❌</p>}
        
//         <Button onClick={handleSubmit}>Login</Button>
//       </div>
//     </center>
//   );
// };

// export default Log;
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Log = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          color: 'white',
          background: 'linear-gradient(to left, yellow, green)',
          boxShadow: 3,
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button
            sx={{
              color: 'black',
              textTransform: 'none',
              fontSize: '16px',
              mx: 1,
            }}
          >
            Home
          </Button>

          <Button
            sx={{
              color: 'black',
              textTransform: 'none',
              fontSize: '16px',
              mx: 1,
            }}
          >
            About
          </Button>

          <Button
            sx={{
              color: 'black',
              textTransform: 'none',
              fontSize: '16px',
              mx: 1,
            }}
          >
            Services
          </Button>

          <Button
            sx={{
              color: 'black',
              textTransform: 'none',
              fontSize: '16px',
              mx: 1,
            }}
          >
            Contact
          </Button>

        </Toolbar>
      </AppBar>
    </>
  );
};
export default Log;
