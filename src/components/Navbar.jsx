import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-content glass">
        <a href="#" className="logo">Umang<span className="text-gradient">Atal</span></a>
        <div className="flex gap-4">
          <a href="#work" className="nav-link">Work</a>
          <a href="#journey" className="nav-link">Journey</a>
          <a href="#expertise" className="nav-link">Approach</a>
          <a href="#contact" className="btn btn-primary" style={{padding: '0.5rem 1.25rem'}}>Let's talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
