import React from 'react'
import { Link } from 'react-router-dom'

export const ArticlesList = ({ articles, currentArticle, closeMenu }) => {
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
                            closeMenu={closeMenu}
                        />
                        )
                    })
                }
        </ul>
    )
}

const ArticleListItem = ({ link, title, isCurrent, closeMenu }) => {
    return (
        <li 
            className={`articles-list__item ${isCurrent ? 'articles-list__item_active' : '' }` }
        >
            <Link 
                to={`/articles/${link}`}
                onClick={closeMenu}
            >
                {title}
            </Link>
        </li>    
    )
}