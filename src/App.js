import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { ThemeContext } from './components/ThemeProvider';
import UserProfile from './components/UserProfile';
// import 'react-mde/lib/styles/css/react-mde-all.css';

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [data, setData] = useState();

  return (
    <Router>
      <Navbar />

      {/* If you go to __ display __ */}
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
