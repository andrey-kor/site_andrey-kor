import React, { useRef } from 'react'
import { ToolsList } from '../ToolsList/ToolsList'
import { useVideo } from '../../hooks/useVideo'
import { FeatureList } from '../FeatureList/FeatureList'
import { MediaButton } from '../MediaButton/MediaButton'
import importedImages from '../../lib/helpers/importImages'
import importedVideos from '../../lib/helpers/importVideos'

export const ProjectCard = ({ project }) => {

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
                        className="main-video" 
                        preload="auto" 
                        muted 
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
                        <MediaButton 
                            href={project.projectLink}
                            targetNew={true}
                            style={'pink'}
                        >
                            К проекту
                        </MediaButton>
                        <MediaButton 
                            href={project.gitLink}
                            targetNew={true}
                            style={'green'}
                        >
                            GitHub проекта
                        </MediaButton>
                    </div>
                    <div className="project-card__features-wrapper">
                        <div className="project-card__subtitle">Особенности</div>
                        <FeatureList 
                            features={project.features}
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