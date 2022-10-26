import React, { useState, useEffect } from 'react'
import { StepGalleryImageList } from '../components/StepGalleryImageList'
import { StepGalleryTextList } from '../components/StepGalleryTextList'
import '../styles/components/stepsGallery.css'

export const StepsGallery = ({ slides, animationStart }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        // const windowHeight = document.documentElement.clientHeight || 500
        // const galleryPosition = document.querySelector('.steps-gallery').getBoundingClientRect().top + window.pageYOffset || 1000
        // const startPoint = galleryPosition - (windowHeight/2)

        if (currentSlide >= slides.length-1 || !animationStart) {
            return
        }
        
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide + 1)
        }, 1500)
        
        return () => clearInterval(slideInterval)

    }, [currentSlide, slides.length, animationStart])

    return (
        <div className="steps-gallery">
            <div className="steps-gallery__image-column">
                <StepGalleryImageList 
                    slides={slides}
                    currentSlide={currentSlide}
                />
            </div>
            <div className="steps-gallery__text-column">
                <StepGalleryTextList 
                    slides={slides}
                    currentSlide={currentSlide}
                />
            </div>
        </div>
    )
}