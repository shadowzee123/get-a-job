import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>GetAJob</h3>
          <p>Your trusted platform for job hunting and career growth.</p>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GetAJob. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
// This code defines a Footer component for a job platform website.
// It includes sections for about information, navigation links, and copyright notice.
