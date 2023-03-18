import React from 'react';
import '../styles/AboutMe.css';
import Avatar  from '../images/avatar-1.jpg';

function AboutMe({darkMode}) {

  return (
    <div className={darkMode ? 'about-me active' : 'about-me'} id='about'>
      <div className='avatar-h1-wrapper'>
        <h1 className='first-h1'>About <span className='span-blue'>Me</span></h1>
          <div className='avatar-wrapper'>
              <img src= {Avatar} alt ="My Avatar"/>
          </div>
      </div>
      <div className='text-wrapper'>
        <h1 className='second-h1'>About <span className='span-blue'>Me</span></h1>
        <p>
            I am Oladiipo Ayanlekan Ayomide, an Engineering student in the Federal University of Technology Akure (FUTA). I am a self taught front end web developer with strong programming skills in <b>HTML</b>, <b>CSS</b>, <b>JAVASCRIPT</b>, and<b> REACT</b>. I've completed a number of web programming courses and developed a lot of wonderful projects utilizing the aforementioned technologies for both personal and professional purposes. I also have expertise with version control systems like GitHub. My love for developing user-friendly web applications has motivated me to become efficient in integrating UI designs and utilizing the current industry standards.
          </p>
      </div>
    </div>
  )
}


export default AboutMe;
