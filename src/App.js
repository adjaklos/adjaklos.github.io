import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared layout
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import About from './pages/About';
import Projects from './pages/Projects';
// Later you can create and add more pages like:
// import Achievements from './pages/Achievements';
// import Certificates from './pages/Certificates';
// import Hobbies from './pages/Hobbies';

import './App.css';   // or './style.css' if you kept the original name

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more when ready:
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/hobbies" element={<Hobbies />} />
        */}
      </Routes>
      <Footer />
    </Router>
  );
}
