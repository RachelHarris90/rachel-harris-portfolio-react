import React from 'react';

export default function NavBar() {
  const linkStyle = { border: '1px black', padding: '5px', 'vertical-align': 'middle' };

  return (
    <nav className="main-header-menu">
      <div style={linkStyle}>
        <a className="navbar-item" href="#profile">Home</a>
      </div>
      <div style={linkStyle}>
        <a className="navbar-item" href="#projects">Projects</a>
      </div>
      <div style={linkStyle}>
        <a className="navbar-item" href="#experience">Experience</a>
      </div>
      {/* <div style={linkStyle}>
        <a className="navbar-item"href="#resume">Resume</a>
      </div> */}
      <div style={linkStyle}>
        <a className="navbar-item"href="#contact">Contact</a>
      </div>
    </nav>
  );
}


// return (
//   <nav className="main-header-menu">
//     <NavLink className="navbar-item" style={linkStyle}to="/profile">
//       Profile
//     </NavLink>
//     <NavLink className="navbar-item" style={linkStyle}to="/experience">
//       Experience
//     </NavLink>
//     <NavLink className="navbar-item" style={linkStyle}to="/contact">
//       Contact
//     </NavLink>
//     <NavLink className="navbar-item" style={linkStyle}to="/resume">
//       Resume
//     </NavLink>
//   </nav>