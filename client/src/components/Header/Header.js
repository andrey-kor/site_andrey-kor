import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuBurger } from '../MenuBurger/MenuBurger'
import { NavBar } from '../NavBar/NavBar'
import { useBodyFreeze } from '../../hooks/useBodyFreeze'
import './Header.css'

export const Header = () => {

    const [menuState, setMenuState] = useState(false)
    const {freeze} = useBodyFreeze()

    const handleMenuState = () => {
        setMenuState(!menuState)
    }

    const handleCloseMenu = () => {
        setMenuState(false)
      }

    useEffect(() => {
        freeze(menuState)
    }, [menuState])
    
    return (
        <div className="header__wrapper">
            <div className="header">
                <div className="logo">
                    <Link className="logo-link" to="/">
                        <div className="logo__text">ANDREY-KOR.RU</div>
                    </Link>
                </div>
                <NavBar 
                    menuState={ menuState }
                    closeMenu={ handleCloseMenu }
                />
                <div className="menu-burger-wrapper">
                    <MenuBurger 
                        changeMenu={ handleMenuState }
                        menuState={ menuState }
                        style={{ color: 'white' }}
                    />
                </div>
                <div 
                    className={ `overlay ${menuState ? 'overlay_visible' : ''}` }
                    onClick={ handleCloseMenu }
                />
            </div>
        </div>
    )
}