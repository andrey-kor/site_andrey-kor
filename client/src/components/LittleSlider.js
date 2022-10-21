import React, { useState } from 'react'
import { SliderArrows } from './SliderArrows'
import { SlidesRibbon } from './SlidesRibbon'
import { SliderPoints } from './SliderPoints'
import '../styles/compontnts/littleSlider.css'

export const LittleSlider = (props) => {
    const [slide, setSlide] = useState(0)

    const swipeSlideHandler = event => {
        const targetClassList = event.target.classList
        let direction = 0

        if (targetClassList.contains('little-slider__arrow-right')) {
            direction = 1
        } 
        else if (targetClassList.contains('little-slider__arrow-left')) {
            direction = -1
        }
        
        let newSlide = slide + direction

        if (newSlide <= 0) {
            newSlide = 0
        }
        else if (newSlide >= props.slides.length-1) {
            newSlide = props.slides.length-1
        }

        setSlide(newSlide)
        
    }

    const changeSlideHandler = (event) => {
        setSlide(+event.target.dataset.id)
    }

    return (    
        <div className="little-slider">
            <SlidesRibbon 
                slides={ props.slides }
                slideNum={ slide } 
            />
            <SliderArrows 
                changeSlide={ swipeSlideHandler }
                slideNum={ slide } 
                maxSlide={ props.slides.length-1 }
            />
            <SliderPoints 
                slides={ props.slides }
                changeSlide={ changeSlideHandler }
                slideNum={ slide } 
            />
        </div>
    )   
}
