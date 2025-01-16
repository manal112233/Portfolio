import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skill'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'



const Portfolio = () => {
    return (
      <div className=''>
        <Navbar />
        <Hero id="home" />
        {/* <About id="about" /> */}
        {/* <Skills id="skills" /> */}
        <Resume  id="resume"/>
        <Projects id="projects"/>
        <Contact id="contact" />
      </div>
    );
  };
  
  export default Portfolio;
  