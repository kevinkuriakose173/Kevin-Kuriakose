import React from 'react'
import gitLightIcon from '../assets/github-light.svg'
import gitDarkIcon from '../assets/github-dark.svg'

function ProjectCard({src, link, h3, gitlink}) {
  return (
    <a href={link} target="_blank" className="demo">
      <img className="hover" src={src} alt={`${h3} icon`}/>
      <h3>{h3}</h3>
    </a>
  )
}

export default ProjectCard