import React, { useState } from 'react';
import '../styles/project.css';

import  ImgResume  from '../images/OLADIIPO AYOMIDE RESUME.png';
import  PdfResume  from '../images/OLADIIPO AYOMIDE RESUME.pdf';

function Project({darkMode}) {

  const [toggleDownloadBtn, setToggleDownloadBtn] = useState(false);
  const [readMoreBtn, setReadMoreBtn] = useState(false);

    const showButtons = () => {
      setToggleDownloadBtn(!toggleDownloadBtn);
  }
  
  const showReadMore = () => {
    setReadMoreBtn(true)
  }

  const hideReadMore = () => {
    setReadMoreBtn(false)
  }

  return (
    <div className={darkMode ? 'projects active' : 'projects'} id="projects">
      <h1>My Skills</h1>
      <div className='projects-container'>
        <div className={darkMode ? 'project active' : 'project'}>
          <h2>My Resume</h2>
          <p>To view my résumé in picture or pdf format, click the button below. If you like, you may also download them.</p>
          <div className='first-p-btn-wrapper'><button className='first-p-btn pointer' onClick={showButtons}>Download</button></div>
          <div className='download' style={{display: toggleDownloadBtn ? `flex` : `none`}}>
            <a href={ImgResume} download className='download-btn pointer'>IMG</a>
            <a href={PdfResume} download className='download-btn pointer'>PDF</a>
          </div>
        </div>
        <div className={darkMode ? 'project my-experience active' : 'project my-experience'}>
          <h2>My Experience</h2>
          <p>
            In the second semester of our study at 100 Level at the Federal University of Technology Akure...
          </p>
          <div className='read-more'>
            <button type='button' className='pointer' onClick={showReadMore}>Read More</button>
          </div>
          <div className='read-more-p' style={{transform: readMoreBtn ? `scale(1)` : `scale(0)`}}>
            <p>
              <span className="material-symbols-outlined pointer" onClick={hideReadMore}>
              close
              </span>
              In the second semester of our study at 100 Level at the Federal University of Technology Akure (FUTA), we were exposed to Python. I immediately fell in love with programming and made the decision to continue my learning on my own. I started learning Python, and after I had a basic understanding of it, I switched to learning PHP. While learning PHP, I came to the realization that I didn't really know why I wanted to utilize programming; I was simply learning for pleasure. I then started looking into tech and its career options. I made the decision to pursue website development, which required me to learn HTML, CSS, and JavaScript. Over a year ago, I started programming code.</p>
          </div>
        </div>
        <div className={darkMode ? 'project active' : 'project'}>
          <h2>My projects</h2>
          <p>To see some of my cool projects, click on the button below.</p>
          <div className='click-me-container'><button><a href ="#my_projects">Click Me</a></button></div>
        </div>
      </div>
    </div>
  )
}

export default Project;
