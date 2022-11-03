import React from 'react'
import { ArticlesList } from './ArticlesList'
import { ArticleBody } from './ArticleBody'

export const Articles = ({ articles, currentArticle, menuState, closeMenu }) => {

    if (!articles || !currentArticle) return 

    let className = 'title-block'
    
    if(menuState) {
        className += ' title-block_visible'
    }

    return (
        <div className="articles">
            <div className="articles__column-titles">
                {/*  className={title-block}   */}
                <div className={className}>  
                    <ArticlesList 
                        articles={articles}
                        currentArticle={currentArticle}
                        menuState={menuState}
                        closeMenu={closeMenu}
                    />
                    
                </div>
            </div>
            <div className="articles__column-content">
                <ArticleBody 
                    currentArticle={currentArticle}
                />
            </div>
        </div>
    )
}

