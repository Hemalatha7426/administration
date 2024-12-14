// import React, { useState } from 'react';
// import { Box, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const HomePage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(prev => !prev);
//   };

//   return (
//     <Box sx={{ fontFamily: 'sans-serif' }}>
//       <Box
//         component="nav"
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           backgroundColor: 'orange',
//           padding: '10px',
//           height: '100px',
//           alignItems: 'center',
//           position: 'relative'
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: 'bolder', color: 'white' }}>
//           SKCT
//         </Typography>
//         {isMobile ? (
//           <Box>
//             <IconButton onClick={handleMenuToggle} sx={{ color: 'white' }}>
//               <MenuIcon />
//             </IconButton>
//             {menuOpen && (
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '20px',
//                   position: 'absolute',
//                   backgroundColor: 'orange',
//                   top: '100px',
//                   width: '100%',
//                   left: 0,
//                   padding: '25px'
//                 }}
//               >
//                 <Button
//                   href="#"
//                   sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//                 >
//                   Home
//                 </Button>
//                 <Button
//                   href="#"
//                   sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//                 >
//                   Admission
//                 </Button>
//                 <Button
//                   href="#"
//                   sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//                 >
//                   Gallery
//                 </Button>
//                 <Button
//                   href="#"
//                   sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//                 >
//                   Events
//                 </Button>
//                 <Button
//                   href="#"
//                   sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//                 >
//                   Contact us
//                 </Button>
//               </Box>
//             )}
//           </Box>
//         ) : (
//           <Box
//             sx={{
//               display: 'flex',
//               gap: '60px'
//             }}
//           >
//             <Button
//               href="#"
//               sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//             >
//               Home
//             </Button>
//             <Button
//               href="#"
//               sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//             >
//               Admission
//             </Button>
//             <Button
//               href="#"
//               sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//             >
//               Gallery
//             </Button>
//             <Button
//               href="#"
//               sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//             >
//               Events
//             </Button>
//             <Button
//               href="#"
//               sx={{ color: 'white', fontSize: '20px', '&:hover': { color: 'black' } }}
//             >
//               Contact us
//             </Button>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import './Style.css';

// Login Component
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication check
    if (username === 'user' && password === 'password') {
      navigate('/books');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Book Reading App</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

// Book List Component
const BookList = () => {
  const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  return (
    <div className="booklist-container">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
      <Link to="/" className="logout-link">Logout</Link>
    </div>
  );
};

// App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;
