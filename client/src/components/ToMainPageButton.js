import React from 'react'
import { Link } from 'react-router-dom'

export const ToMainPageButton = ({className}) => {
    return (
        <div className={`to-main-page-link__wrapper ${className || ''}`} >
            <Link to="/" className="to-main-page-link">На главную страницу</Link>
        </div>
    )
}