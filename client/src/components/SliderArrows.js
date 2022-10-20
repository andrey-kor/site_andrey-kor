import React from 'react'

export const SliderArrows = ({ changeSlide, slideNum, maxSlide}) => {

    return (
        <div className="little-slider__arrow-holder">
            <div 
                className={`little-slider__arrow-left ${slideNum == 0 ? "little-slider__arrow_inactive" : ""}`}
                onClick={changeSlide}
            >
            </div>
            <div 
                className={`little-slider__arrow-right ${slideNum == maxSlide ? "little-slider__arrow_inactive" : ""}`}
                onClick={changeSlide}
            >
            </div>
        </div>
    )
}
