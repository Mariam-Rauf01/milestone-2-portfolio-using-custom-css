import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import "../style/Projects.css";

const Project = () => {
  return (
    <>
      <section id="project" className="project-section">
        <h1 className="project-title">
          My <span className="highlighted-title">Projects</span>
        </h1>

        <div className="project-cards-container">
          {/* Project Card 1 */}
          <div className="project-card">
            <Image
              src={"/product design.png"}
              width={430}
              height={454}
              alt="product page design"
              className="project-image"
            />
            <h1 className="project-card-title">
              Product Page Design using HTML, CSS & JS
            </h1>
            <div className="project-card-buttons">
              {/* Button for visiting the site */}
              <Link
                href="https://vercel.com/mariam-raufs-projects/html-css-js-projects-1hfl"
                target="_blank"  style={{ textDecoration: "none" }}
              >
                <button className="project-button" >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link
                href="https://github.com/Mariam-Rauf01/HTML-CSS-JS-Projects/tree/main/Product%20Page%20Design"
                target="_blank"  style={{ textDecoration: "none" }}
              >
                <button className="project-button">
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="project-card">
            <Image
              src={"/coffee.png"}
              width={430}
              height={454}
              alt="coffee web"
              className="project-image"
            />
            <h1 className="project-card-title">
              Coffee Web page using Next.js, Tailwind Css & Ts
            </h1>
            <div className="project-card-buttons">
              {/* Button for visiting the site */}
              <Link href="https://coffee-web-design.vercel.app/" target="_blank" style={{ textDecoration: "none" }} >
                <button className="project-button">
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link
                href="https://github.com/Mariam-Rauf01/Coffee-Web-Design"
                target="_blank"  style={{ textDecoration: "none" }}
              >
                <button className="project-button">
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="project-card">
            <Image
              src={"/Untitled design.png"}
              width={430}
              height={454}
              alt="Nodejs Projects"
              className="project-image"
            />
            <h1 className="project-card-title">
              Node.js Projects Using Typescript, Student Manage...
            </h1>
            <div className="project-card-buttons">
              {/* Button for visiting the site */}
              <Link
                href="https://vercel.com/mariam-raufs-projects/student-management-system"
                target="_blank"  style={{ textDecoration: "none" }}
              >
                <button className="project-button">
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link
                href="https://github.com/Mariam-Rauf01/Student-Management-System"
                target="_blank"  style={{ textDecoration: "none" }}
              >
                <button className="project-button">
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

