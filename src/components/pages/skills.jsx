import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";
import "../style/skills.css";
const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-container">
          <div className="skills-column">
            <h3>Frontend</h3>
            <div className="skill">
              <FaReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill">
              <FaHtml5 className="skill-icon" />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <FaCss3Alt className="skill-icon" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <FaJsSquare className="skill-icon" />
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skills-column">
            <h3>Backend</h3>
            <div className="skill">
              <FaNodeJs className="skill-icon" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <FaDatabase className="skill-icon" />
              <p>Database</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
