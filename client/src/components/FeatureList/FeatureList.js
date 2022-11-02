import React from 'react'
import importedImages from '../../lib/helpers/importImages.js'
import './FeatureList.css'

export const FeatureList = ({ features }) => {
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