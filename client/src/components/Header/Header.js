import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuBurger } from '../MenuBurger/MenuBurger'
import { NavBar } from '../NavBar/NavBar'
import './Header.css'

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
                    style={{ color: 'white' }}
                />
            </div>
        </div>
    )
}