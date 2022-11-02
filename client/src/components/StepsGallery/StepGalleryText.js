import React from 'react'

export const StepGalleryText = ({ slide, currentSlide, index }) => {

    let className = 'steps-gallery__text-block'
    
    if (currentSlide === index) {
        className += ' steps-gallery__text-block_active'
    }

    return (
        <div 
            className={className} 
        >
            {slide.text}
        </div>
    )
}