import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Articles } from '../components/Articles'
import { ToMainPageButton } from '../components/ToMainPageButton'
import articles from '../data/articles.json'
import '../styles/articlesPage.css'

export const ArticlesPage = () => {
  
  const params = useParams()

  const [currentArticle, setCurrentArticle] = useState(articles[0])
  
  useEffect(() => {
    handlerSetArticle()
  }, [params])

  const handlerSetArticle = () => {
    const targetAtricle = articles.find(article => article.link === params.id) || articles[0]
    setCurrentArticle(targetAtricle)
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
