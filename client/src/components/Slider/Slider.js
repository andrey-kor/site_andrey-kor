import React, { useState } from 'react'
import { SliderArrows } from './SliderArrows'
import { SlidesRibbon } from './SlidesRibbon'
import { SliderPoints } from './SliderPoints'
import './styles/LittleSlider.css'

export const Slider = ({ slides, targetSlider }) => {
    const [slide, setSlide] = useState(0)

    const swipeSlideHandler = event => {
        const targetClassList = event.target.classList
        let direction = 0

        if (targetClassList.contains('slider__arrow-right')) {
            direction = 1
        } 
        else if (targetClassList.contains('slider__arrow-left')) {
            direction = -1
        }
        
        let newSlide = slide + direction

        if (newSlide <= 0) {
            newSlide = 0
        }
        else if (newSlide >= slides.length-1) {
            newSlide = slides.length-1
        }

        setSlide(newSlide)
        
    }

    const changeSlideHandler = (event) => {
        setSlide(+event.target.dataset.id)
    }

    return (    
        <div className="slider">
            <SlidesRibbon 
                slides={ slides }
                slideNum={ slide } 
                targetSlider={ targetSlider }
            />
            <SliderArrows 
                changeSlide={ swipeSlideHandler }
                slideNum={ slide } 
                maxSlide={ slides.length-1 }
            />
            <SliderPoints 
                slides={ slides }
                changeSlide={ changeSlideHandler }
                slideNum={ slide } 
            />
        </div>
    )   
}
