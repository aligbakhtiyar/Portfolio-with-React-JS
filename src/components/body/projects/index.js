import React from 'react'
import './project.css';
import { ProjectData } from '../../data/project';

function Projects() {
  const data = ProjectData;
  return (
    <div className='projects'>
      <label>Projects</label>     
      <div>
        {data.map((project) =>{
          return
        })}
      </div>
    </div>
  )
}

export default Projects
