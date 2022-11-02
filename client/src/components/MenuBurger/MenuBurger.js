import React from 'react'
import './MenuBurger.css'

export const MenuBurger = ({ changeMenu, menuState, style }) => {

    let className = 'menu-burger'
    if (menuState) {
        className += ' menu-burger_active'
    }
    if (style) {
        className += ` menu-burger_${style.color}`
    }
    
    return (
        <div 
            className={ className }
            onClick={changeMenu}
        >
            <span></span>
        </div>
    )
}