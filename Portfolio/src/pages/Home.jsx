import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Home = () => {
  return (
    <div className=" ">
      <section id="about" className="my-5 pt-10">
        <AboutMe />
      </section>

      <section id="skills" className="my-5 pt-10">
        <Skills />
      </section>

      <section id="education" className="my-5 pt-10">
        <Education />
      </section>

      <section id="projects" className="my-5 pt-10">
        <Projects />
      </section>

      <section id="contact" className="my-5 pt-10">
        <Contact />
      </section> 
    </div>
  );
};

export default Home;
