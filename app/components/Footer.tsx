import React from 'react';
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-heading">
        Mariam Rauf &copy; {new Date().getFullYear()}
      </h1>
    </footer>
  );
}

export default Footer;
