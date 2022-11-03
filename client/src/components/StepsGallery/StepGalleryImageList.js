import React from 'react'
import { StepGalleryImage } from './StepGalleryImage'

export const StepGalleryImageList = ({ slides, currentSlide }) => {
    return (
        <div className="steps-gallery__image-wrapper">
            { slides.map((slide, index) => {
                return (
                    <StepGalleryImage 
                        slide={ slide }   
                        key={ index }    
                        index={ index }
                        currentSlide={ currentSlide }
                    />
                )
            })}
        </div>
    )
}