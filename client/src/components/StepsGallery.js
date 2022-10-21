import React, { useState, useEffect } from 'react'
import { StepGalleryImageList } from '../components/StepGalleryImageList'
import { StepGalleryTextList } from '../components/StepGalleryTextList'
import '../styles/compontnts/stepsGallery.css'

export const StepsGallery = ({ slides, scroll }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const windowHeight = document.documentElement.clientHeight || 500
        const galleryPosition = document.querySelector('.steps-gallery').getBoundingClientRect().top + window.pageYOffset || 1000
        const startPoint = galleryPosition - (windowHeight/2)

        if (currentSlide >= slides.length-1 || scroll <= startPoint) {
            return
        }
        
        const slideInterval = setInterval(() => {            
            setCurrentSlide(currentSlide + 1)
        }, 2000)
        
        return () => clearInterval(slideInterval)

    }, [currentSlide, slides.length, scroll])

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