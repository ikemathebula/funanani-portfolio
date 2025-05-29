// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Funanani Ramabulana | Built with ❤️ by Ike Mathebula</p>
    </footer>
  );
}

export default Footer;
