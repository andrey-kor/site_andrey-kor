import React from 'react'

export const SliderArrows = ({ changeSlide, slideNum, maxSlide }) => {

    return (
        <div className="slider__arrow-holder">
            <div 
                className={ `slider__arrow-left ${ slideNum == 0 ? "slider__arrow_inactive" : ""}` }
                onClick={ changeSlide }
            >
            </div>
            <div 
                className={`slider__arrow-right ${ slideNum == maxSlide ? "slider__arrow_inactive" : ""}` }
                onClick={ changeSlide }
            >
            </div>
        </div>
    )
}
