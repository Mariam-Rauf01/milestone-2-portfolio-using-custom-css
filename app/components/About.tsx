import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import "../style/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h1 className="about-title">
        About <span className="about-title-highlight">Me</span>
      </h1>

      <div className="about-content">
        <div className="about-image-container">
          <Image
            src="/mariam.jpeg"
            width={300}
            height={382}
            alt="Mariam portrait"
            className="about-image"
          />
        </div>

        <div className="about-text">
          <div className="quote-icon">
            <FaQuoteLeft size={28} />
          </div>

          <p className="about-description">
            I am a committed Frontend Developer with a strong blend of creativity, technical skill, and expertise in
            modern web design. My experience in developing responsive, user-friendly applications has equipped me with a
            solid command of HTML, CSS, and JavaScript, along with specialized knowledge in frameworks like React and
            Next.js. I am constantly exploring new design trends and web technologies, aiming to create products that
            are both innovative and aligned with modern web standards. My goal is always to build solutions that not
            only meet business needs but also delight users and drive engagement.
          </p>

          <div className="quote-icon">
            <FaQuoteRight size={28} />
          </div>
        </div>
      </div>

      <div className="education-section">
        <h2 className="education-title">Education:</h2>

        <ul className="education-list">
          <li className="education-item">
            <h3 className="education-item-title">Matriculation:</h3>
            <p className="education-item-description">PIA Model Secondary School, Karachi</p>
          </li>

          <li className="education-item">
            <h3 className="education-item-title">Intermediate, Pre-Engineering:</h3>
            <p className="education-item-description">Government Girls Degree College, Gulistan-E-Jauhar, Karachi</p>
          </li>

          <li className="education-item">
            <h3 className="education-item-title">Web 3, AI, & Metaverse:</h3>
            <p className="education-item-description">
              Governor Sindh Kamran Tessori Initiative for Artificial Intelligence & Computing
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
