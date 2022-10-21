import React from 'react'
import { LittleSlide } from './LittleSlide'

export const SlidesRibbon = (props) => {
    const slides = props.slides

    return (
        <div 
            className="slider__ribbon"
            style={{ transform: `translateX(-${props.slideNum * 100}%)` }}
        >
            { slides.map((slide, index) => 
                <LittleSlide key={index} slide={slide}/>
            )}
        </div>
    )
}