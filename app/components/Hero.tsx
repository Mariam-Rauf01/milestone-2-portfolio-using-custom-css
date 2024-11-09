"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import Link from "next/link";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Text Section */}
        <div className="text-section">
          <div className="greeting">
            <MdWavingHand size={25} />
            <h1 className="greeting-text">Hello, I&apos;m</h1>
          </div>

          <h1 className="name">Mariam Rauf</h1>
          <h2 className="title">
            <span className="frontend-title">FrontEnd Developer</span>
          </h2>

          <p className="description">
            Frontend Developer proficient in HTML, CSS, and JavaScript, focused
            on crafting clean, responsive, and visually engaging interfaces
            using React and Next.js to deliver seamless user experiences.
          </p>

          <div className="github-button-container">
            <Link
              href={"https://github.com/Mariam-Rauf01"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="github-button">
                Github Account
                <FaGithub size={25} className="icon" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section"> 
          <Image
            src="/gif.gif"
            width={400}
            height={300}
            alt="gif"
            className="image"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
