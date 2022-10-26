import React from 'react'
import { Articles} from '../components/Articles'
import articles from '../data/articles.json'
import '../styles/articlesPage.css'

export const ArticlesPage = () => {
  

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="content__body">
          <h1 className="main-title">СТАТЬИ</h1>
          <Articles 
            articles={articles}
          />
        </div>
      </div>
    </div>
  )
}
