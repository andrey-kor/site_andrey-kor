import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Articles } from '../components/Articles'
import { ToMainPageButton } from '../components/ToMainPageButton'
import { Loading } from '../components/Loading/Loading'
import { articlesRequest } from '../components/API/articlesRequest'
import '../styles/articlesPage.css'

export const ArticlesPage = () => {

  const { getArticles, loading, articles } = articlesRequest()
  
  useEffect(() => {
    getArticles() 
  }, [getArticles])
  
  const [currentArticle, setCurrentArticle] = useState(articles[0])
  const linkId = useParams().id || ''
  
  useEffect(() => {
    const targetAtricle = articles.find(article => article.link === linkId) || articles[0]
    setCurrentArticle(targetAtricle)
  }, [articles, linkId])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="content__body">
          <h1 className="main-title">СТАТЬИ</h1>
          <Articles 
            articles={articles}
            currentArticle={currentArticle}
          />
          <ToMainPageButton />
        </div>
      </div>
    </div>
  )
}
