import React from 'react'
import './MediaButton.css'

export const MediaButton = ({ href, targetNew = false, style, children }) => {

    let className = 'media-link'

    if (style) {
        className += ` media-link_${style}`
    }

    return (
        <a 
            href={ href } 
            target={ targetNew ? '_blank' : '_self' }
        >
            <div className={ className }>
                { children }
            </div>
        </a>
    )
}