import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Articles } from '../components/Articles/Articles'
import { ToMainPageButton } from '../components/ToMainPageButton/ToMainPageButton'
import { Loading } from '../components/Loading/Loading'
import { MenuBurger } from '../components/MenuBurger/MenuBurger'
import { useArticlesRequest } from '../hooks/useArticlesRequest'
import { useBodyFreeze } from '../hooks/useBodyFreeze'
import { useLocate } from '../hooks/useLocate'
import '../components/Articles/articlesPage.css'

export const ArticlesPage = () => {

  const { scrollToTop } = useLocate()
  scrollToTop()

  const { getArticles, loading, articles } = useArticlesRequest()
  
  useEffect(() => {
    getArticles() 
  }, [getArticles])
  
  const [currentArticle, setCurrentArticle] = useState(articles[0])
  const linkId = useParams().id || ''
  
  useEffect(() => {
    const targetAtricle = articles.find(article => article.link === linkId) || articles[0]
    setCurrentArticle(targetAtricle)
  }, [articles, linkId])

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

  if (loading) {
    return <Loading />
  }

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="content__body">
          <h1 className="main-title" style={{ display: 'inline-block' }}>СТАТЬИ</h1>
          <div className="articles-burger-wrapper">
            <MenuBurger 
              changeMenu={ handleMenuState }
              menuState={ menuState }
              style={{ color: 'dark' }}
            />
          </div>
          <Articles 
            articles={ articles }
            currentArticle={ currentArticle }
            menuState={ menuState }
            closeMenu={ handleCloseMenu }
          />
          <div 
            className={ `overlay ${menuState ? 'overlay_visible' : ''}` }
            onClick={ handleCloseMenu }
          />
          <ToMainPageButton />
        </div>
      </div>
    </div>
  )
}
