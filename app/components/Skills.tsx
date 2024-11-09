import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import "../style/Skills.css";
const Skill = () => {
  return (
    <>
      <section id="skill" className="bg-primary min-h-screen py-4">
        <h1 className="section-title text-accent">
          My <span className="text-highlight">Skills</span>
        </h1>

        <div className="container container-md">
          {/* Skill Card for Next.js */}
          <div className="card">
            <div className="card-icon">
              <SiNextdotjs />
            </div>
            <h1 className="card-title text-light">Next Js</h1>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>

          {/* Skill Card for React.js */}
          <div className="card">
            <div className="card-icon">
              <RiReactjsFill />
            </div>
            <h1 className="card-title text-light">React Js</h1>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>

          {/* Skill Card for Tailwind CSS */}
          <div className="card">
            <div className="card-icon">
              <SiTailwindcss />
            </div>
            <h1 className="card-title text-light">Tailwind CSS</h1>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>

        <div className="container container-md">
          {/* Skill Card for TypeScript */}
          <div className="card">
            <div className="card-icon">
              <SiTypescript />
            </div>
            <h1 className="card-title text-light">TypeScript</h1>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>

          {/* Skill Card for JavaScript */}
          <div className="card">
            <div className="card-icon">
              <SiJavascript />
            </div>
            <h1 className="card-title text-light">JavaScript</h1>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>

          {/* Skill Card for Figma */}
          <div className="card">
            <div className="card-icon">
              <SiFigma />
            </div>
            <h1 className="card-title text-light">Figma</h1>
            <div className="progress-bar-container">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
