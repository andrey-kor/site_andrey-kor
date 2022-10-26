import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuBurger } from './MenuBurger'
import '../styles/components/header.css'
import { NavBar } from './NavBar'

export const Header = () => {

    const [menuState, setMenuState] = useState(false)

    const handleMenuState = () => {
        setMenuState(!menuState)
    }

    useEffect(() => {
        const boduClassList = document.body.classList

        if (menuState) {
            boduClassList.add('_frozen')
        }
        else {
            if (boduClassList.contains('_frozen')) {
                boduClassList.remove('_frozen')
            }
        }
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
                    menuState={menuState}
                />
                <MenuBurger 
                    changeMenu={ handleMenuState }
                    menuState={ menuState }
                />
            </div>
        </div>
    )
}