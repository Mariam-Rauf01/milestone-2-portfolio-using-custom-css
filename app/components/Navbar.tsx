"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "../style/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header" role="navigation">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="logo">
            <h1>Mariam Rauf</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="desktopMenu">
            <li className="menuItem">
              <Link href="#home">Home</Link>
            </li>
            <li className="menuItem">
              <Link href="#about">About</Link>
            </li>
            <li className="menuItem">
              <Link href="#skill">Skills</Link>
            </li>
            <li className="menuItem">
              <Link href="#project">Projects</Link>
            </li>
            <li className="menuItem">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="menuIcon"
            onClick={toggleMenu}
            onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
            tabIndex={0}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoCloseSharp size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="mobileMenu" aria-hidden={!isMenuOpen}>
            <li>
              <Link href="#home" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skill" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Navbar;
