import React from 'react'
import { Slider } from '../components/Slider'
import { ArticleCards } from '../components/ArticleCards'
import sliderProjectsData from '../data/sliderProjectsData.json'
import articles from '../data/articles.json'

export const MainPage = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="content__body">
                    <a href="/projects">
                        <h2 className="title title_pink-filled">ПРОЕКТЫ</h2>
                    </a>
                    <Slider 
                        slides={sliderProjectsData} 
                        targetSlider={'projects'}
                    />
                    <a href="/articles">
                        <h2 className="title title_blue">СТАТЬИ</h2>
                    </a>
                    <ArticleCards
                        articles={articles}
                    />
                    <a href="/about">
                        <h2 className="title title_orange">ОБО МНЕ</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}