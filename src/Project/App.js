// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookApp from './BookApp';
import Login from './Login';
import './Style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<BookApp />} />
      </Routes>
    </Router>
  );
}

export default App;
