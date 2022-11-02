import React from 'react'
import { ProjectCard } from './ProjectCard'
import './projectsList.css'

export const ProjectsList = ({ projects }) => {
    return (
        <div className="projects__wrapper">
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard 
                            project={project}
                            key={index}
                        />
                    )
                }) 
            }
        </div>   
    )
}