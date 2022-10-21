import React from 'react'
import { LittleSlide } from './LittleSlide'
import { MainSlide } from './MainSlide'

export const SlidesRibbon = (props) => {
    const slides = props.slides

    return (
        <div 
            className="slider__ribbon"
            style={{ transform: `translateX(-${props.slideNum * 100}%)` }}
        >
            { slides.map((slide, index) => {
                if (props.targetSlider === 'little') {
                    return <LittleSlide key={index} slide={slide}/>
                }
                else if (props.targetSlider === 'projects') {
                    return <MainSlide key={index} slide={slide}/>
                }

            }
            )}
        </div>
    )
}