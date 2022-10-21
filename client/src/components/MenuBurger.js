import React from 'react'

export const MenuBurger = ({ changeMenu, menuState }) => {
    
    return (
        <div 
            className={`menu-burger ${ menuState ? "menu-burger_active" : "" }`}
            onClick={changeMenu}
        >
            <span></span>
        </div>
    )
}