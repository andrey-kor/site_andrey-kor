import React from 'react'
import { SliderPoint } from './SliderPoint'

export const SliderPoints = ({ slides, changeSlide, slideNum}) => {
    return (
        <div className="slider-points__wrapper">
            { slides.map((slide, index) => 
                <SliderPoint 
                    key={index}
                    slideId={index}
                    slideNum={slideNum}
                    changeSlide={ changeSlide }
                /> 
            )}
        </div>
    )
}