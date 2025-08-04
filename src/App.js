import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Header/Nav';
import Footer from './Header/Footer';

import Login from './Login/Login';
import Register from './Login/Register';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Protected from './Protected';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <div className="container App">
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/profile" element={
            <Protected>  <Profile /> </Protected>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
