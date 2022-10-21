import React from 'react'

export const StepGalleryText = ({ slide, currentSlide, index }) => {
    return (
        <div 
            className={`steps-gallery__text-block ${currentSlide == index ? "steps-gallery__text-block_active" : ""}`} 
        >
            {slide.text}
        </div>
    )
}