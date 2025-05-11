import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        PRAVEEN PATIL
      </div>
      <ul className="nav-right">
        <li>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active-link' : ''}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active-link' : ''}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            .portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
