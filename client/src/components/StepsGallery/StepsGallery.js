import React, { useState, useEffect } from 'react'
import { StepGalleryImageList } from './StepGalleryImageList'
import { StepGalleryTextList } from './StepGalleryTextList'
import './stepsGallery.css'

export const StepsGallery = ({ slides, animationStart }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        if (currentSlide >= slides.length-1 || !animationStart) {
            return
        }
        
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide + 1)
        }, 1500)
        
        return () => clearInterval(slideInterval)

    }, [currentSlide, animationStart])

    return (
        <div className="steps-gallery">
            <div className="steps-gallery__image-column">
                <StepGalleryImageList 
                    slides={ slides }
                    currentSlide={ currentSlide }
                />
            </div>
            <div className="steps-gallery__text-column">
                <StepGalleryTextList 
                    slides={ slides }
                    currentSlide={ currentSlide }
                />
            </div>
        </div>
    )
}