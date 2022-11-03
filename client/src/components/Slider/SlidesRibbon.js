import React from 'react'
import { LittleSlide } from './LittleSlide'
import { MainSlide } from './MainSlide'

export const SlidesRibbon = ({ slides, targetSlider, slideNum }) => {

    return (
        <div 
            className="slider__ribbon"
            style={{ transform: `translateX(-${slideNum * 100}%)` }}
        >
            { slides.map((slide, index) => {
                if (targetSlider === 'little') {
                    return <LittleSlide key={ index } slide={ slide }/>
                }
                else if (targetSlider === 'projects') {
                    return <MainSlide key={ index } slide={ slide }/>
                }
            })}
        </div>
    )
}