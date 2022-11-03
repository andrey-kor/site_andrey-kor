import React from 'react'
import { FeatureList } from '../FeatureList/FeatureList'
import { ToolsList } from '../ToolsList/ToolsList'
import importedImages from '../../lib/helpers/importImages.js'
import './styles/MainSlider.css'

export const MainSlide = ({ slide }) => {
    return (
        <div className="main-slide">
            <div className="main-slider__image-column">
                <img 
                    src={ importedImages[slide.mainImage] }
                    alt={ slide.alt } 
                />
            </div>
            <div className="main-slider__description-column">
                <a 
                    href={ slide['projectLink'] } 
                    target="_blank"
                >
                    <div className="desc__title">
                        { slide['name'] }
                    </div>
                </a>
                <div className="desc__links-wrapper">
                    <div className="desc__links">
                        <a 
                            href={ slide['gitLink'] }  
                            target="_blank"
                        >
                            <div className="media-link media-link_green">GitHub проекта</div>
                        </a>
                        <a 
                            href={ slide['projectLink'] }  
                            target="_blank"
                        >
                            <div className="media-link media-link_purple">Посмотреть проект</div>
                        </a>
                    </div>
                </div>
                <div className="desc__features-wrapper">
                    <div className="desc__subtitle">Особенности</div>
                    <FeatureList features={ slide.features }/>
                </div>
                <div className="desc__tools-wrapper">
                    <div className="desc__subtitle">Инструменты</div>
                    <ToolsList tools={ slide.tools }/>
                </div>
            </div>
        </div>
    )
}