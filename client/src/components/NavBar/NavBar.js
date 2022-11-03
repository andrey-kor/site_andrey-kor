import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ({ menuState, closeMenu }) => {
    return (
        <nav className={ `menu-wrapper ${ menuState ? "menu-wrapper_active" : "" }` }>
            <ul className="menu">
                <li className="menu__item">
                    <Link to="/about" onClick={ closeMenu }>Обо мне</Link>
                </li>
                <li className="menu__item">
                    <Link to="/projects" onClick={ closeMenu }>Проекты</Link>
                </li>
                <li className="menu__item">
                    <Link to="/articles" onClick={ closeMenu }>Статьи</Link>
                </li>
            </ul>
        </nav>
    )
}