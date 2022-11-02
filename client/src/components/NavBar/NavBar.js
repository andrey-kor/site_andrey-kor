import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ({ menuState }) => {
    return (
        <nav className={`menu-wrapper ${ menuState ? "menu-wrapper_active" : "" }`}>
            <ul className="menu">
                <li className="menu__item">
                    <Link to="/about">Обо мне</Link>
                </li>
                <li className="menu__item">
                    <Link to="/projects">Проекты</Link>
                </li>
                <li className="menu__item">
                    <Link to="/articles">Статьи</Link>
                </li>
            </ul>
        </nav>
    )
}