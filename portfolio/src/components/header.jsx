import React from 'react';
import './Header.css'; // Assuming styles are in App.css

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        PRAVEEN PATIL
      </div>
      <ul className="nav-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
      </ul>
    </nav>
  );
};

export default Header;
