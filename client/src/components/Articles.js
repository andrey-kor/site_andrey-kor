import React from 'react'
import {Link} from 'react-router-dom'

export const Articles = ({ articles }) => {
    return (
        <div className="articles">
            <div className="articles__column-titles">
                <ArticlesTites 
                    articles={articles}
                />
            </div>
            <div className="articles__column-content">
                <Article 
                    article={articles[0]}
                />
            </div>
        </div>

)
}

const ArticlesTites = ({ articles }) => {
    return (
        <ul className="articles-list">
            { 
                articles.map((article, index) => {
                    return (
                        <ArticleTitle 
                            article={article}
                            key={index}
                        />
                    )
                })
            }
        </ul>
    )
}


const ArticleTitle = ({ article }) => {
    return (
        <li className="articles-list__item">
            <Link to={`/articles/${article._id}`}>{article.title}</Link>
        </li>    
    )
}

const Article = ({ article }) => {
    return (
        <div className="article-wrapper">
            <div className="articles__header">
                <h1 className="atricle__title">{article.title}</h1>
                <div className="article__description-wrapper">
                    <h3 className="article__description">{article.subtitle}</h3>
                </div>
            </div>
            <div className="articles__main-content">
                <p>{article.text}</p>
            </div>
        </div>
    )
}