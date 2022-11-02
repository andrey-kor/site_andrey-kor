import React from 'react'
import { StepGalleryText } from './StepGalleryText'

export const StepGalleryTextList = ({ slides, currentSlide }) => {
    return (
        <div className="steps-gallery__text-wrapper">
            { slides.map((slide, index) => {
                return (
                    <StepGalleryText 
                        slide={slide}
                        key={index}   
                        index={index}
                        currentSlide={currentSlide}
                    />
                )
            })}
        </div>
    )
}