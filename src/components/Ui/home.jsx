import React from "react";
import HeroSection from "../pages/heroSection";
import Skills from "../pages/skills";
import Tools from "../pages/tools";
import Projects from "../pages/projects";
import Resume from "../pages/resume";
import Form from "../pages/form";
const Home = () => {
  return (
    <>
      <div className="max-w">
        <HeroSection />
        <Skills />
        <Tools />
        <Projects />
        <Resume />
        <Form />
      </div>
    </>
  );
};

export default Home;
