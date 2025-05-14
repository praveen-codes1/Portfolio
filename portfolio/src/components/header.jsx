import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        PRAVEEN PATIL
      </div>
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <ul className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active-link' : ''}
            onClick={closeMenu}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active-link' : ''}
            onClick={closeMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active-link' : ''}
            onClick={closeMenu}
          >
            .portfolio
          </Link>
        </li>
      </ul>
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 98
          }}
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Header;
