import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Articles = ({ articles, currentArticle }) => {

    return (
        <div className="articles">
            <div className="articles__column-titles">
                <ArticlesList 
                    articles={articles}
                    currentArticle={currentArticle}
                />
            </div>
            <div className="articles__column-content">
                <Article 
                    currentArticle={currentArticle}
                />
            </div>
        </div>
    )
}

const ArticlesList = ({ articles, currentArticle }) => {
    return (
        <ul className="articles-list">
            { 
                articles.map((article, index) => {
                    return (
                        <ArticleListItem 
                            key={index}
                            link={article.link}
                            title={article.title}
                            isCurrent={currentArticle.id === article.id}
                        />
                    )
                })
            }
        </ul>
    )
}

const ArticleListItem = ({ link, title, isCurrent }) => {
    return (
        <li className={`articles-list__item ${isCurrent ? 'articles-list__item_active' : '' }` }>
            <Link 
                to={`/articles/${link}`}
            >
                {title}
            </Link>
        </li>    
    )
}

const Article = ({ currentArticle }) => {
    return (
        <div className="article-wrapper">
            <div className="articles__header">
                <h1 className="atricle__title">{currentArticle.title}</h1>
                <div className="article__description-wrapper">
                    <h3 className="article__description">{currentArticle.subtitle}</h3>
                </div>
            </div>
            <div className="articles__main-content">
                <p>{currentArticle.text}</p>
            </div>
        </div>
    )
}