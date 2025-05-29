import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <a href="#top" className="navbar-logo">🏠 Funanani</a>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#activities" onClick={closeMenu}>Activities</a></li>
          <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
