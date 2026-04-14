import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { searchItems } from '../data/portfolioContent';
import SearchDialog from './SearchDialog';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/coursework', label: 'Coursework' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/art', label: 'Art' },
];

export default function SiteHeader({ onToggleTheme }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closePanels = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <NavLink className="brand-link" to="/">
          <h1 className="brand-name">Samuel Adjaklo</h1>
        </NavLink>

        <nav className="site-nav" aria-label="Section navigation">
          <div className="nav-utility-row">
            <button
              className="search-toggle"
              onClick={() => setIsSearchOpen(true)}
              type="button"
            >
              Search
            </button>

            <button
              className="theme-toggle"
              id="theme-toggle"
              onClick={onToggleTheme}
              type="button"
            >
              Toggle theme
            </button>

            <button
              aria-controls="site-navigation-links"
              aria-expanded={isMenuOpen}
              className="menu-toggle"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </button>
          </div>

          <ul
            className={isMenuOpen ? 'nav-links open' : 'nav-links'}
            id="site-navigation-links"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link-item active' : 'nav-link-item'
                  }
                  end={link.to === '/'}
                  onClick={closePanels}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <SearchDialog
        items={searchItems}
        onClose={() => setIsSearchOpen(false)}
        open={isSearchOpen}
      />
    </>
  );
}
