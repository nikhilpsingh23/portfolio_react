import React from "react";
import "../style/resume.css";

const Resume = () => {
  return (
    <section class="resume-section">
      <div class="resume-container">
        <h2>My Resume</h2>
        <p>
          I am a passionate developer with a strong foundation in web
          development. Download my resume to explore my skills, experiences, and
          achievements.
        </p>
        <a href="resume.pdf" download="My_Resume.pdf" class="download-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
