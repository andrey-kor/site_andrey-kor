import React from 'react'
import { ToMainPageButton } from '../components/ToMainPageButton/ToMainPageButton'
import { useLocate } from '../hooks/useLocate'
import '../styles/errorPage.css'

export const ErrorPage = () => {

  const { scrollToTop } = useLocate()
  scrollToTop()

  return (
    <div className="error__wrapper">
        <p className="error-code">404</p>
        <h1 className="error-message">Страница не найдена</h1>
        <p className="error-description">Она или удалена или вовсе не существовала</p>
        <ToMainPageButton className="error-link"/>
    </div>
  )
}