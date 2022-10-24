import React, { useRef } from 'react'
import { ToolsList } from './ToolsList'
import { useVideo } from '../hooks/video.hook'
import importedImages from '../lib/helpers/importImages'
import importedVideos from '../lib/helpers/importVideos'
import '../styles/components/projects-list.css'

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

const ProjectCard = ({ project }) => {

    const { handleVideo, status } = useVideo()
    
    const vidRef = useRef(null)
    
    const handlerPlayVideo = (event) => {
        handleVideo(event, vidRef)
    }

    return (
        <div 
            className="project-card"
            onMouseEnter={handlerPlayVideo}
            onMouseLeave={handlerPlayVideo}
        >
            <div className="project-card__video-column">
                <div className="project-card__video-wrapper">
                    <video 
                        preload="auto" 
                        muted 
                        className="main-video" 
                        src={importedVideos[project.video]}
                        type="video/mp4"
                        poster={importedImages[project.mainImage]}
                        ref={vidRef}
                    >
                    </video>
                </div>
            </div>
            <div className="project-card__text-column">
                <h2 className="project-card__title">{project.name}</h2>
                <div className="project-card__links-wrapper">
                    <div className="project-card__links">
                        <a href={project.projectLink} target="_blank">
                            <div className="media-link card__media-link media-link_pink">К проекту</div>
                        </a>
                        <a href={project.gitLink} target="_blank">
                            <div className="media-link card__media-link media-link_green">GitHub проекта</div>
                        </a>
                    </div>
                    <div className="project-card__features-wrapper">
                        <div className="project-card__subtitle">Особенности</div>
                        <FeatureList 
                            project={project}
                        />
                    </div>
                    <div className="project-card__tools-wrapper">
                        <div className="project-card__subtitle">Инструменты</div>
                        <ToolsList 
                            tools={project.tools}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeatureList = ({ project }) => {
    return (
        <ul className="project-card__features-list">
            {
                project.features.map((feature, index) => {
                    return (
                        <li 
                            className="project-card__features-item"
                            key={index}
                        >
                            <img src={importedImages[feature.image]} alt="icon" />
                            <div className="project-card__features-item-text">{feature.text}
                                <div className="high-line"></div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}