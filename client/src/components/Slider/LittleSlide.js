import React from 'react'
import importedImages from '../../lib/helpers/importImages.js'

export const LittleSlide = ({ slide }) => {

    return (
        <div className="little-slide">
            <div className="little-slide__image-wrapper">
                <img 
                    src={importedImages[slide.images[0].image]}
                    alt={slide.images[0].alt} 
                />
            </div>
            <div className="little-slide__content-wrapper">
                <div className="little-slide__title">
                    {slide.title}
                </div>
                <div className="little-slide__text">
                    {slide.text}
                </div>
            </div>
        </div>
    )
}