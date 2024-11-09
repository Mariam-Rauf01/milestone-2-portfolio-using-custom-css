// Contact.js
"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-heading">
        Contact <span className="contact-highlight">Me</span>
      </h1>
      
      <div className="contact-container">
        
        {/* Contact Details */}
        {[
          { icon: <MdEmail size={38} aria-label="Email Icon" />, text: "mariam.rauf567@gmail.com" },
          { icon: <IoCallSharp size={38} aria-label="Phone Icon" />, text: "0331 - 3050255" },
          { icon: <FaLocationDot size={38} aria-label="Location Icon" />, text: "Karachi, Pakistan" }
        ].map((item, index) => (
          <div key={index} className="contact-detail">
            <div className="contact-icon">
              {item.icon}
            </div>
            <IoIosArrowForward size={30} className="contact-arrow" />
            <h2 className="contact-text">
              {item.text}
            </h2>
          </div>
        ))}

        <hr className="contact-divider" />

        {/* Social Links */}
        <div className="social-links">
          {[
            { href: "https://www.facebook.com/profile.php?id=100070472975875", icon: <FaFacebook size={30} /> },
            { href: "https://www.linkedin.com/in/mariam-rauf-soomro-3a2046247/", icon: <FaLinkedinIn size={30} /> }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
