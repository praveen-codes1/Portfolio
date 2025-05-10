import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-name">Praveen Patil</span>
      </div>
      <div className="navbar-right">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

