import React from "react";
import "../style/HeroSection.css";
const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-image">
          <img src="public/hero.png" alt="Hero" />
        </div>
        <div className="hero-text">
          <h1>
            Hello, I am full <span className="stack">stack developer</span>
          </h1>
          <p>
            My expertise spans MongoDB, Express.js, React.js, and Node.js,
            allowing me to deliver full-stack solutions with efficiency and
            precision. I am proficient in front-end technologies such as HTML,
            CSS, and JavaScript, alongside a deep understanding of RESTful API
            development and database management.
          </p>
          <button className="cta-button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
