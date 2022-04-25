import React from 'react';

export default function NavBar() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <div style={linkStyle}>
        <a className="navbar-item" href="#">Home</a>
      </div>
      <div style={linkStyle}>
        <a className="navbar-item" href="#">Contact</a>
      </div>
      <div style={linkStyle}>
        <a className="navbar-item" href="#">Experience</a>
      </div>
      <div style={linkStyle}>
        <a className="navbar-item" href="#">Resume</a>
      </div>
    </nav>
  );
}
