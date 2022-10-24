import React from 'react'
import importedImages from '../lib/helpers/importImages.js'
import '../styles/components/article-cards.css'

export const ArticleCards = ({ articles }) => {
    return (
        <div className="articles-wrapper">
            { 
                articles.map((article, index) => {
                    if (index >= 3) return
                    return (
                        <ArticleCard 
                            article={article}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

const ArticleCard = ({ article }) => {
    return (
        <div className="article">
            <a href={article.link}>
                <div className="article__image-wrapper">
                    <img src={importedImages[article.image]} alt={article.alt} />
                </div>
                <div className="article__footer">
                    <p className="article__text">
                        {article.title}
                    </p>
                </div>
            </a>
        </div>
    )
}