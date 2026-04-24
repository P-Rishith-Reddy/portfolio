import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Add shadow when page is scrolled */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="brand-name">Portfolio</span>
        </NavLink>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'navbar__link' + (isActive ? ' navbar__link--active' : '')
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              'navbar__link' + (isActive ? ' navbar__link--active' : '')
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
