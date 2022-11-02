import React from 'react'
import { ArticlesList } from './ArticlesList'
import { ArticleBody } from './ArticleBody'

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
                <ArticleBody 
                    currentArticle={currentArticle}
                />
            </div>
        </div>
    )
}

