import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title" style={{ padding: "10px" }}>
        Skills
      </h2>
      {/* <span className="section__subtitle">Technical Lvl</span> */}
      <div className="about__container container grid">
        <div className="skills__container container grid">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            className="icon__img"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            className="icon__img"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            className="icon__img"
          />
        </div>
        <div style={{ textAlign: "center", fontSize: "1.1rem" }}>
          <p>
            Coursework includes Computer Science, Data Structures and
            Algorithms, Object Oriented Programming, Computer Logic and
            Organization, Matrix and Linear Algebra, Systems Software, and
            Discrete Structures
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
