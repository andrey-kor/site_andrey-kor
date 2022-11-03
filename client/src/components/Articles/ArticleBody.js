import React from 'react'

export const ArticleBody = ({ currentArticle }) => {
    return (
        <div className="article-wrapper">
            <div className="articles__header">
                <h1 className="atricle__title">{ currentArticle.title }</h1>
                <div className="article__description-wrapper">
                    <h3 className="article__description">{ currentArticle.subtitle }</h3>
                </div>
            </div>
            <div className="articles__main-content">
                <p>{ currentArticle.text }</p>
            </div>
        </div>
    )
}