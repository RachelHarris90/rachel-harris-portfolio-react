import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const linkStyle = { border: '1px black', padding: '5px', 'verticalAlign': 'middle' };

  return (
    <nav className="main-header-menu">
      <Link  className="navbar-item" to="/">
        <h3 style={linkStyle}>Profile</h3>
      </Link>
      <Link style={linkStyle} className="navbar-item" to="/projects">
        <h3>Projects</h3>
      </Link>
      <Link style={linkStyle} className="navbar-item" to="/experience">
        <h3>Experience</h3>
      </Link>
      <Link style={linkStyle} className="navbar-item" to="/contact">
        <h3>Contact</h3>
      </Link>
      <Link style={linkStyle} className="navbar-item" to="/resume">
        <h3>Resume</h3>
      </Link>
    </nav>
  );
}

export default NavBar;
