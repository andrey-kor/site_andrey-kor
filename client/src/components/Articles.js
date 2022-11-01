import React from 'react'
import { Link } from 'react-router-dom'

export const Articles = ({ articles, currentArticle }) => {

    if (!articles || !currentArticle) return 

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
                articles.map((article) => {
                    return (
                        <ArticleListItem 
                            key={article._id}
                            link={article.link}
                            title={article.title}
                            isCurrent={currentArticle._id === article._id}
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