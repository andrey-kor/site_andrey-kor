import React from 'react'

export const SliderPoint = ({ changeSlide, slideId, slideNum }) => {
    const id = {'data-id': slideId}

    return (
        <button 
            className={`slider-point ${slideId == slideNum ? "slider-point_active" : ""}`}
            { ...id }
            onClick={ changeSlide }
        >
        </button>
    )
}