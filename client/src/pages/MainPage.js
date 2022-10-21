import React from 'react'
import { Slider } from '../components/Slider'
import sliderProjectsData from '../data/sliderProjectsData.json'

export const MainPage = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="content__body">
                    <Slider 
                        slides={sliderProjectsData} 
                        targetSlider={'projects'}
                    />
                </div>
            </div>
        </div>
    )
}