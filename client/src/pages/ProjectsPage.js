import React from 'react'
import { ProjectsList } from '../components/ProjectsList'
import projects from '../data/projects-description.json'

export const ProjectsPage = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="content__body">
          <h1 className="main-title">ПРОЕКТЫ</h1>
          <ProjectsList 
            projects={projects}
          />
        </div>
      </div>
      </div>
  )
}
