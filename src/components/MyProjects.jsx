import { useState } from 'react';
import '../styles/Myproject.css';

import ProjectsDB from '../ProjectsDB';

function MyProjects({darkMode}) {

  const [showProject, setShowProject] = useState(false);

  const handleShowProject = () => {
    setShowProject(true);
  }

  const handleHideProject = () => {
    setShowProject(false);
  }
  
  return (
    <div className={darkMode ? 'my-projects active' : 'my-projects'} id = "my_projects">
      <h1>My Projects</h1>
      <p>Click on the button to see some of my projects so far.</p>
      <button className='view_project_btn' onClick={handleShowProject}>See Projects</button>

      <div className='projects_container' style ={{transform: showProject ? `scale(${1})` : `scale(${0})`}}>
        <div className='projects_container_inner'>
          <p className='close_project' onClick={handleHideProject}>X</p>
          {ProjectsDB.map(item => (
            <div className='individual_project' key = {item.id}>
              <p>{item.projectTitle}</p>
              <div className='image_container'>
                <img src = {item.projectImage} alt = "project" />
              </div>
              <div className="view_project_container">
                <a href = {item.sourceCode} target = "_blank" rel="noreferrer"className='source_code_container'>
                  <span>Source code</span>
                </a>
                <a href= {item.liveSite} target = "_blank" rel="noreferrer"
                className='live_site_container'>
                  <p>Visit Site <i className='bx bx-link'></i></p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyProjects;
