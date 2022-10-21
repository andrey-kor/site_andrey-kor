import React from 'react'
import importedImages from '../lib/helpers/importImages.js'

export const FeatureList = ({ slide }) => {
    const features = slide.features

    return (
        <ul className="desc__features-list">
            {
                features.map((feature, index) => {
                    return (
                        <li 
                            className="desc__features-item"
                            key={index}
                        >
                            <img src={importedImages[feature.image]} alt="icon" />
                            <span>{feature.text}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}