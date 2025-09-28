import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  };

  return (
    <header>
      <h1>Samuel Adjaklo</h1>
      <nav>
        <button id="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <ul className="nav-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          {/* Add more links here as you create new pages */}
        </ul>
      </nav>
    </header>
  );
}
