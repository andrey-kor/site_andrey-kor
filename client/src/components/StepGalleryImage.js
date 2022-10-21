import React from 'react'
import importedImages from '../lib/helpers/importImages.js'

export const StepGalleryImage = ({ slide, index, currentSlide }) => {
    let top = -200
    
    if (currentSlide >= index) {
        top = index * 10
    }

    return (
        <img 
            className={`steps-gallery__image ${currentSlide >= index ? "steps-gallery__image_down" : ""}`}
            src={importedImages[slide.image.name]}
            alt={slide.image.alt} 
            style={{ 
                transform:`rotate(-${index*3}deg)`,
                left:`-${index*20}px`,
                top: top+'px'
            }} 
        />
    )
    
}