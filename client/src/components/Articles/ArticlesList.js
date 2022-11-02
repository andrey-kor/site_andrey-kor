import React from 'react'
import { Link } from 'react-router-dom'

export const ArticlesList = ({ articles, currentArticle }) => {
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