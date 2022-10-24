import React, { useState, useEffect } from 'react'
import { MenuBurger } from './MenuBurger'
import '../styles/components/header.css'

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
                    <a className="logo-link" href="/">
                        <div className="logo__text">ANDREY-KOR.RU</div>
                    </a>
                </div>
                <nav className={`menu-wrapper ${ menuState ? "menu-wrapper_active" : "" }`}>
                    <ul className="menu">
                        <li className="menu__item">
                            <a href="/about">Обо мне</a>
                        </li>
                        <li className="menu__item">
                            <a href="/projects">Проекты</a>
                        </li>
                        <li className="menu__item">
                            <a href="/articles">Статьи</a>
                        </li>
                    </ul>
                </nav>
                <MenuBurger 
                    changeMenu={ handleMenuState }
                    menuState={ menuState }
                />
            </div>
        </div>
    )
}